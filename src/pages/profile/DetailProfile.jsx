import Navbar from './../../component/Navbar';
import Footer from './../../component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Elephant from '/images/Ellipse 127.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './../../assets/css/detailprofile.css';
import { URL } from '../../config/URL';

sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2NjA4NjAxLTYwNDUtNGQ4ZC1hNmMyLTU3NDg4ZmQ0YjMzZiIsIm5hbWUiOiJBZHphbmEgU2hhbGloYSIsImVtYWlsIjoiZ2hhbmlnaGFuaUBnbWFpbC5jb20iLCJyb2xlX25hbWUiOiJ1c2VyIiwicGhvdG8iOm51bGwsInBob3RvX2lkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMy0wOC0wOFQyMzozMToxMy4zNjVaIiwidXBkYXRlZF9hdCI6bnVsbCwiZGVsZXRlZF9hdCI6bnVsbCwiaWF0IjoxNjkxNTQ2NjkyLCJleHAiOjE3MjMwODI2OTJ9.zdKox40i-b9CVdVYdKAwxhwt22UUtHB1oaQuZX4k7OQ")
let token = sessionStorage.getItem("token");

export default function DetailRecipe() {
    const navigate = useNavigate();
    const [recipeData, setRecipeData] = useState([]);

    function getRecipeData() {
        axios.get(`${URL}/recipe/main`)
            .then(res => setRecipeData(res.data.data))
            .catch(err => console.error(err.message));
    }

    function deleteMenu(id) {
        axios.delete(`${URL}/recipe/${id}`, {headers: {
            Authorization: `Bearer ${token}`
        }})
        .then(() => {
            navigate('/account');
        })
        .catch(err => {
            console.error(err.message)
        })
    }

    useEffect(() => {
        getRecipeData();
    })

    return (
        <>
            <Navbar firstlink='Home' firstlinkto='/' secondlink='Search menu' secondlinkto='/recipe' thirdlink='Profile' thirdlinkto='#' props='account' />

            <section className="navbar second-nav">
            <div className="container-fluid">
                <div className="vr bg-warning" style={{padding: '2px'}}></div>
                <mark className="bg-transparent profile-wrapper">
                    <Link to='#'>
                        <img width="50" height="50" loading="eager" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                    </Link>
                </mark>
                <mark className="col bg-transparent profile-details">
                    <p className="col">Karen</p>
                    <p className="fw-bold">10 recipes</p>
                </mark>
                <form className="d-flex" role="search">
                    <mark className="col-2 row bg-transparent reaction-count" style={{textAlign: 'end',  marginLeft: '150vh', marginTop: '-22vh'}}>
                        <p>21 February 2020</p>
                        <p>20 likes - 3 comments</p>
                    </mark>
                </form>
                </div>
            </section>

            <nav className="user-creation-interest d-flex justify-content-center align-items-center gap-2">
                <a className="recipe-button btn fs-5" role="button">Recipes</a>
                <a className="bookmark-button btn fs-5" role="button">Bookmarked</a>
                <a className="like-button btn fs-5" role="button">Liked</a>
            </nav>
            <hr style={{width: '142vh', marginLeft: '35vh', height: '3vh', backgroundColor: '#EFC81A'}}/>
            
            <main id="recipe-content">
                {recipeData.map((item, index) => {
                    return(
                        <div key={index} className='mt-5'>
                            <section className="d-flex single-popular-recipe justify-content-start container">
                                <a className="col-md-8 mt-5" href="#">
                                    <img src={item.image_path} className="img-fluid img-thumbnail rounded float-start" loading="eager" decoding="async" width="500" height="350" alt={item.title}/>
                                </a>
                            </section>
                            <section className="d-flex ingredient-popular-recipe justify-content-end flex-column offset-md-8">
                                <h3>{item.title}</h3>
                                <p className="ingredient">
                                    {item.ingredients}
                                </p>
                                <p className="reaction-row bg-warning">10 likes - 12 comments - 3 bookmarks</p>
                                <mark className="account">
                                    <Link className="btn btn-primary ms-1" to={`/edit-recipe/${item.id}`}>Edit Menu</Link>
                                    <a className="btn btn-danger ms-5" onClick={() => deleteMenu(item.id)} role="button">Delete Menu</a>
                                </mark>
                            </section>
                        </div>
                    )
                })
                }
            </main>

            <section className="pagination">
                <a className="btn btn-warning button-previous" style={{color: 'white', fontSize: '12px'}} href="#" role="link">Prev</a>
                Show 6-10 From 20
            </section>

            <Footer/>
        </>
    )
}