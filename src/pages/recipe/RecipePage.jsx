import axios from 'axios';
import { Link } from 'react-router-dom';
import React from 'react';
import './../../assets/css/menurecipe.css';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import {URL} from './../../config/URL';

export default class RecipePage extends React.Component {
    state = {
        recipeData: [],
        query: []
    }

    pagination = {
        page: '' | 1,
        limit: 10
    }

    getAllRecipe = () => {
        axios.get(`${URL}/recipe/main?page=${this.pagination.page}&limit=${this.pagination.limit}`)
            .then(res => this.setState({recipeData: res.data.data}))
            .catch(err => console.error(err.message));
    }

    searchRecipe(value) {
        axios.get(`${URL}/recipe?search=${value}`)
            .then(res => {
                this.setState({recipeData: res.data.data})
            })
            .catch(err => console.error(err.message));
    }

    componentDidMount() {
        this.getAllRecipe();
    }

    render() {
        return (
        <>
            <Navbar firstlink="Home" firstlinkto="/" secondlink="Add Recipe" secondlinkto="/add-recipe" thirdlink="Profile" thirdlinkto="/account" props="account" />
    
            <header className="title-top container">
                <h1 className="">Discover Recipe</h1>
                <h1>& Delicious Food</h1>
            </header>
            <div className="m-lg-5 p-lg-5 m-sm-5 p-sm-5 second-navigation">
                <div className="input-group mb-3 w-50 mb-sm-3 mb-md-3 mb-lg-3">
                    <i className="bi bi-search input-group-text"></i>
                    <input  onChange={e => this.searchRecipe(e.target.value)} type="search" className="form-control" placeholder="Search Delicious Food" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
    
            <section className="container category gap-2">
                <a role="link" className="btn btn-warning" href="">New</a>
                <a role="link" className="btn btn-warning ms-2" href="">Popular</a>
                <a role="link" className="btn btn-success ms-2" href="">Vegetarian</a>
                <a role="link" className="btn btn-success ms-2" href="">Breakfast</a>
            </section>
            
            {
                this.state.recipeData.filter(recipe => recipe.title.includes(this.state.query)).map((item, index) => {
                return (
                    <div key={index}>
                        <section className="d-flex single-popular-recipe justify-content-start container">
                            <Link to={`/recipe/${item.id}`} className="col-md-8 mt-5">
                                <img src={item.image_path} className="img-fluid img-thumbnail rounded float-start" loading="eager" decoding="async" width="500" height="350" alt={item.title}/>
                            </Link>
                        </section>
                        <section className="d-flex ingredient-popular-recipe justify-content-end flex-column offset-md-8">
                            <h3>{item.title}</h3>
                            <p className="ingredient text-break">
                                {item.ingredients}
                            </p>
                            <p className="reaction-row bg-warning">10 likes - 12 comments - 3 bookmarks</p>
                            <mark className="account">
                                <img className="rounded-circle" src={item.image_path} loading="eager" decoding="async" width="30" height="30" alt={item.user_name}/>
                                {item.user_name}
                            </mark>
                        </section>
                    </div>
                )})
            }

            <section className="pagination">
                Show 1-5 From 20
                <a className="btn btn-warning button-next" style={{color: 'white', fontSize: '12px'}} role="button">Next</a>
            </section>

            <Footer/>
        </>
        )
    }
}