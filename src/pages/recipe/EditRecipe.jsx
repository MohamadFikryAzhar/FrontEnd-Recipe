import { useNavigate, useParams } from 'react-router';
import Navbar from './../component/Navbar'
import Footer from './../component/Footer'
import './../assets/css/editmenu.css'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getRecipeAction, updateRecipeAction} from './../../redux/actions/RecipeAction.js';
import { PacmanLoader } from 'react-spinners';

export default function EditRecipe() {
    const {id} = useParams();
    const ref = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data} = useSelector(state => state.recipe);
    const {isLoading} = useSelector(state => state.put_recipe);
    const [image_path, setImage] = useState(null);
    const [recipeData, setRecipeData] = useState({
        title: "",
        ingredients: "",
        category: "",
        image_path: ""
    })
    
    useEffect(() => {
        dispatch(getRecipeAction(id))
    }, [])

    useEffect(() => {
        data && setRecipeData({...recipeData,
            title: data.title,
            image_path:data.image_path,
            ingredients:data.ingredients,
            category:data.category
        })
    }, [data])

    const putRecipeData = event => {
        event.preventDefault();

        let bodyRecipe = new FormData();
        bodyRecipe.append("title", recipeData.title);
        bodyRecipe.append("ingredients", recipeData.ingredients);
        bodyRecipe.append("category", recipeData.category);
        bodyRecipe.append("image_path", image_path);

        dispatch(updateRecipeAction(bodyRecipe, id, navigate))
    }

    const onRecipe = e => {
        setRecipeData({
            ...recipeData,
            [e.target.name]:e.target.value});
    }

    const onImageRecipe = e => {
        setImage(e.target.files[0])
        e.target.files[0] && setRecipeData({...recipeData, image_path: URL.createObjectURL(e.target.files[0])})
    }

    return (
        <>
            <Navbar/>

            {isLoading && <PacmanLoader color="#36d7b7" />}

            <form onSubmit={putRecipeData} className="container">
                <div className="photo-file" style={{
                    width: '92vh',
                    height: '50vh',
                    backgroundImage: `url('${recipeData.image_path}')`,
                    borderRadius: '10px',
                    backgroundClip: 'content-box',
                    backgroundRepeat: 'space',
                    backgroundSize: 'cover',
                    marginLeft: '28vh'
                }}>
                    <input type="file" name="image_path" onChange={onImageRecipe} accept="image/*" id="image-path"/>
                    <label htmlFor="image-path">Change Photo</label>
                </div>
                <br/>
                <input type="text" ref={ref} defaultValue={recipeData.title} placeholder='Type new recipe' name="title" id="title" onChange={onRecipe}/>
                <br/>
                <textarea name="ingredients" ref={ref} defaultValue={recipeData.ingredients} placeholder='Type new ingredients' id="ingredients" cols="30"  rows="10" onChange={onRecipe}></textarea>
                <br/>
                <select onChange={onRecipe} name="category" id="category">
                    <option value="Category" defaultValue={recipeData.category}>Category</option>
                    <option value="Main course">Main course</option>
                    <option value="Appetizer">Appetizer</option>
                    <option value="Dessert">Dessert</option>
                </select>
                <button type="submit">Update</button>
            </form>

            <Footer/>
        </>
    )
}