import Navbar from './../component/Navbar';
import Footer from './../component/Footer';
import { Link, useParams } from 'react-router-dom';
import Elephant from '/images/image-3.webp';
import './../assets/css/detailmenu.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getRecipeAction} from './../../redux/actions/RecipeAction.js';

export default function DetailRecipe() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector(state => state.recipe);
     
    useEffect(() => {
        dispatch(getRecipeAction(id))
    }, [])

    return (
        <>
            <Navbar/>

            <section className="navbar second-nav">
            <div className="container-fluid">
                <div className="vr bg-warning" style={{padding: '2px'}}></div>
                <mark className="bg-transparent profile-wrapper">
                    <Link to='#'>
                        <img width="50" height="50" loading="eager" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                    </Link>
                </mark>
                <mark className="col bg-transparent profile-details">
                    <p className="col">Mr. Elephant</p>
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

            <section className="container">
                <h1 className="text-center">{recipe.title}</h1>
                <Link to="#" className="image-detail-link">
                    <img src={recipe.image_path} className="img-fluid img-thumbnail" loading="eager" decoding="async" width="500" height="350" id="recipe-img" alt={recipe.title}/>
                </Link>
                <p className="ingredient me-5 fs-4">
                ingredient: <br/>
                {recipe.ingredients}
                </p>
                <blockquote className="fs-4 ms-5">{recipe.category}</blockquote>
            </section>
        
            <section className="reaction me-5">
                <button className="btn bookmarkBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                </button>
                <button className="btn likeBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                    </svg>
                </button>
            </section>
            
            <hr className="horizontal-line"/>

            <section className="col-2 offset-md-2 row comment-section" style={{marginTop: '5vh'}}>
                <mark className="col bg-transparent profile-comment">
                    <img width="50" height="50" loading="eager" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                </mark>
                <mark className="col bg-transparent comment-info">
                    <p className="col">Mr. Elephant</p>
                    <p className="fw-bold">10 recipes</p>
                </mark>
                <div className="vr bg-warning" style={{padding: '4px', height: '100px', marginTop: '-17vh'}}></div>
            </section>
            <p className="comment">It is good recipe</p>

            <section className="col-2 offset-md-2 row comment-section" style={{marginTop: '5vh'}}>
                <mark className="col bg-transparent profile-comment">
                    <img width="50" height="50" loading="eager" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                </mark>
                <mark className="col bg-transparent comment-info">
                    <p className="col">Mr. Elephant</p>
                    <p className="fw-bold">10 recipes</p>
                </mark>
                <div className="vr bg-warning" style={{padding: '4px', height: '100px', marginTop: '-17vh'}}></div>
            </section>
            <p className="comment">It is good recipe</p>

            <section className="col-2 offset-md-2 row comment-section" style={{marginTop: '5vh'}}>
                <mark className="col bg-transparent profile-comment">
                    <img width="50" height="50" loading="eager" decoding="async" id="photo-profile" src={Elephant} alt="Elephant profile"/>
                </mark>
                <mark className="col bg-transparent comment-info">
                    <p className="col">Mr. Elephant</p>
                    <p className="fw-bold">10 recipes</p>
                </mark>
                <div className="vr bg-warning" style={{padding: '4px', height: '100px', marginTop: '-17vh'}}></div>
            </section>
            <p className="comment">It is good recipe</p>

            <hr className="horizontal-line"/>

            <form className="comment-form">
                <textarea name="" id="" cols="40" rows="10" placeholder="Type a comment"></textarea>
                <br/>
                <button className="" type="submit">Send a comment</button>
            </form>

            <Footer/>
        </>
    )
}