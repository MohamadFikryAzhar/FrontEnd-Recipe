import Navbar from './component/Navbar';
import Footer from './component/Footer';
import EggSandwich from '/images/image-13.webp';
import EggFriedRice from '/images/image-4.webp';
import AromaticRice from '/images/image-5.webp';
import ChickenKare from '/images/image-7.webp';
import ChickenBomb from '/images/image-8.webp';
import BananaSmoothie from '/images/image-9.webp';
import LavaCoffeCake from '/images/image-10.webp';
import SalmonSugar from '/images/image-11.webp';
import IndianaSalad from '/images/image-12.webp';
import './assets/css/styles.css';
import axios from 'axios';
import React from 'react';
import { URL } from './config/URL';

export default class RootPage extends React.Component {
    constructor() {
        super();
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    state = {
        recipeData: [],
        showModal: false
    }
    
    searchRecipe(value) {
        axios.get(`${URL}/recipe?search=${value}`)
            .then(res => {
                this.setState({recipeData: res.data.data})
            })
            .catch(err => console.error(err.message));
    }

    handleCloseModal() {
        this.setState({showModal: false})
    }

    handleOpenModal() {
        this.setState({showModal: true}) 
    }

    render() {
        return (
            <>
                <Navbar />
    
                <div className="m-lg-5 p-lg-5 m-sm-5 p-sm-5 second-navigation">
                    <h1 className="mt-lg-5 mt-sm-5">
                        Discover Recipe <br/>
                        & Delicious Food
                    </h1>
                    <div className="input-group mb-3 mt-4 w-50 mb-sm-3 mb-md-3 mb-lg-3">
                        <i className="bi bi-search input-group-text"></i>
                        <input  onChange={e => this.searchRecipe(e.target.value)} type="search" className="form-control" placeholder="Search Delicious Food" aria-label="Username" aria-describedby="basic-addon1"/>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target='#exampleModal'>Search</button>
                    </div>
                </div>
                
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Recipe we got</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {
                            this.state.recipeData.map((recipe, index) => {
                                return (
                                <div key={index}>
                                    <section className="single-popular-recipe mt-5">
                                        <img src={recipe.image_path} className="img-fluid img-thumbnail rounded float-end" loading="eager" decoding="async" width="500" height="350" alt={recipe.title}/>
                                    </section>
                                    <section className="ingredient-popular-recipe mt-5 ms-5">
                                        <h3>{recipe.title}</h3>
                                        <mark className="account">
                                            <img className="rounded-circle" src={recipe.image_path} loading="eager" decoding="async" width="30" height="30" alt={recipe.user_name}/>
                                            {recipe.user_name}
                                        </mark>
                                    </section>
                                </div>
                                )}
                            )
                        }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-end first-image">
                    <img src={EggSandwich} className="img-fluid img-thumbnail rounded float-end" width="500" height="350" loading="eager" decoding="async" id="img-1" alt="nasi goreng"/>
                </div>
    
                <section className="m-5 p-5 info-box">
                    <div className="vr bg-warning" style={{padding: 6}}></div>
                    <mark className="col bg-transparent profile-wrapper">
                        <h1>Popular For You !</h1>
                    </mark>
                </section>
                <section className="d-flex single-popular-recipe justify-content-start">
                    <a className="col-md-5">
                        <img src={EggFriedRice} className="img-fluid img-thumbnail rounded float-end" width="500" height="350" loading="eager" decoding="async" alt="Egg fried rice"/>
                    </a>
                </section>
                <section className="d-flex ingredient-popular-recipe justify-content-end flex-column offset-md-8">
                    <h1>Egg Fried Rice</h1>
                    <p className="ingredient">
                        Ingredients: <br/>
                        chicken, garlic, salt, <br/>
                        soy sauce, spicy sauce, <br/>
                        pepper.
                    </p>
                    <a href="#" role="link" style={{width: '25vh'}} className="btn btn-warning btn-lg">Learn More</a>
                </section>
    
                <section className="col-4 offset-md-1 row info-box" style={{marginTop: -5}}>
                    <div className="vr bg-warning" style={{padding: 6}}></div>
                    <mark className="col bg-transparent profile-wrapper">
                        <h1>New Recipe</h1>
                    </mark>
                </section>
                <section className="d-flex single-new-recipe justify-content-start">
                        <a className="col-md-5">
                            <img src={AromaticRice} className="img-fluid img-thumbnail rounded float-end" loading="eager" decoding="async" width="500" height="350" alt="Egg fried rice"/>
                        </a>
                </section>
                <section className="d-flex ingredient-popular-recipe justify-content-end flex-column offset-md-8">
                    <h1>Nasi Kuning</h1>
                    <p className="ingredient">
                        Ingredients: <br/>
                        chicken, garlic, salt, <br/>
                        ginger, galangal, turmeric, <br/>
                        chili.
                    </p>
                    <a href="#" role="link" style={{width: '25vh'}} className="btn btn-warning btn-lg">Learn More</a>
                </section>
    
                <nav className="col-4 offset-md-1 row info-box" style={{marginTop: -5, marginBottom: 6}}>
                    <div className="vr bg-warning" style={{padding: 6}}></div>
                    <mark className="col bg-transparent profile-wrapper">
                        <h1>Popular Recipe</h1>
                    </mark>
                </nav>
    
                <section className="container recipe-popular-group">
                    <section className="row recipe-popular-section">
                        <div className="col recipe-popular-text">
                            <p className="position-absolute recipe-text">Chicken <br/> Kare</p>
                            <img src={ChickenKare} className="w-100 h-75" loading="eager" decoding="asyc" width="500" height="350" alt="Chicken Kare"/>
                        </div>
    
                        <div className="col recipe-popular-text">
                            <p className="position-absolute recipe-text">Bomb <br/> Chicken</p>
                            <img src={ChickenBomb}  className="w-100 h-75" loading="eager" decoding="asyc" width="500" height="350" alt="Chicken Kare"/>
                        </div>
    
                        <div className="col recipe-popular-text">
                            <p className="position-absolute recipe-text">Banana Smoothie Pop</p>
                            <img src={BananaSmoothie}  className="w-100 h-75" loading="eager" decoding="asyc" width="500" height="350" alt="Chicken Kare"/>
                        </div>
                    </section>
                </section>
                <section className="container recipe-popular-group">
                    <section className="row recipe-popular-section">
                        <div className="col recipe-popular-text">
                            <p className="position-absolute recipe-text">Coffee Lava <br/> Cake</p>
                            <img src={LavaCoffeCake}  className="w-100 h-75" loading="eager" decoding="asyc" width="500" height="350" alt="Chicken Kare"/>
                        </div>
    
                        <div className="col recipe-popular-text">
                            <p className="position-absolute recipe-text">Sugar <br/> Salmon</p>
                            <img src={SalmonSugar}  className="w-100 h-75" loading="eager" decoding="asyc" width="500" height="350" alt="Chicken Kare"/>
                        </div>
    
                        <div className="col recipe-popular-text">
                            <p className="position-absolute recipe-text">Indiana <br/> Salad</p>
                            <img src={IndianaSalad}  className="w-100 h-75" loading="eager" decoding="asyc" width="500" height="350" alt="Chicken Kare"/>
                        </div>
                    </section>
                </section>
    
                <Footer/>
            </>
        )
    }
}