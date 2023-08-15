import Navbar from './../component/Navbar';
import Footer from './../component/Footer';
import './../assets/css/addmenu.css'
import { useState } from 'react';
import { URL } from './../config/URL';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipeAction } from '../../redux/actions/RecipeAction.js';
import { PacmanLoader } from 'react-spinners';

export default function AddRecipe() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {post_recipe} = useSelector(state => state);
    const {isLoading} = post_recipe;
    const [image_path, setImage] = useState(null);
    const [recipe, setRecipe] = useState({
        title: '',
        ingredients: '',
        image_path: '',
        category: ''
    });

    const postRecipe = e => {
        e.preventDefault();
        let bodyRecipe = new FormData();

        bodyRecipe.append("title", recipe.title);
        bodyRecipe.append("ingredients", recipe.ingredients);
        bodyRecipe.append("image_path", image_path);
        bodyRecipe.append("category", recipe.category);

        dispatch(postRecipeAction(bodyRecipe, navigate));
    }

    const onRecipe = e => {
        setRecipe({...recipe, [e.target.name]:e.target.value});
    }

    const onImageRecipe = e => {
        setImage(e.target.files[0])
        e.target.files[0] && setRecipe({...recipe, image_path:URL.createObjectURL(e.target.files[0])})
    }

    return (
        <>
            <Navbar/>

            {isLoading && <PacmanLoader color="#36d7b7" />}

            <form onSubmit={postRecipe}>
                <div className="photo-file" style={{
                    width: '52vh',
                    height: '50vh',
                    backgroundImage: `url('${recipe.image_path}')`,
                    borderRadius: '10px',
                    backgroundClip: 'content-box',
                    backgroundRepeat: 'space',
                    backgroundSize: 'cover'
                }}>
                    <input type="file" onChange={onImageRecipe} name="image_path" id="image-path"/>
                    <label htmlFor="image-path">Add Photo</label>
                </div>
                <br/>
                <input type="text" name="title" value={recipe.title} onChange={onRecipe} id="title" placeholder="Title"/>
                <br/>
                <textarea name="ingredients" id="" value={recipe.ingredients} onChange={onRecipe} cols="30" rows="10" placeholder="Ingredients"></textarea>
                <br/>
                <select name="category" onChange={onRecipe} value={recipe.category} id="category">
                    <option>Category</option>
                    <option value="Main course">Main course</option>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Dessert">Dessert</option>
                </select>
                <button type="submit">Post</button>
            </form>

            <Footer/>
        </>
    )
}