import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import './../../assets/css/addmenu.css'
import { useState } from 'react';
import axios from 'axios';
import { URL } from '../../config/URL';
import { useNavigate } from 'react-router';

sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2NjA4NjAxLTYwNDUtNGQ4ZC1hNmMyLTU3NDg4ZmQ0YjMzZiIsIm5hbWUiOiJBZHphbmEgU2hhbGloYSIsImVtYWlsIjoiZ2hhbmlnaGFuaUBnbWFpbC5jb20iLCJyb2xlX25hbWUiOiJ1c2VyIiwicGhvdG8iOm51bGwsInBob3RvX2lkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMy0wOC0wOFQyMzozMToxMy4zNjVaIiwidXBkYXRlZF9hdCI6bnVsbCwiZGVsZXRlZF9hdCI6bnVsbCwiaWF0IjoxNjkxNTQ2NjkyLCJleHAiOjE3MjMwODI2OTJ9.zdKox40i-b9CVdVYdKAwxhwt22UUtHB1oaQuZX4k7OQ")
let token = sessionStorage.getItem("token");

export default function AddRecipe() {
    const navigate = useNavigate();
    const [image_path, setImage] = useState(null);
    const [recipe, setRecipe] = useState({
        title: '',
        ingredients: '',
        image_path: '',
        category: ''
    });

    const postRecipe = e => {
        e.preventDefault();
        let bodyForm = new FormData();

        bodyForm.append("title", recipe.title);
        bodyForm.append("ingredients", recipe.ingredients);
        bodyForm.append("image_path", image_path);
        bodyForm.append("category", recipe.category);

        axios.post(`${URL}/recipe`, bodyForm, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            navigate('/recipe')
        }).catch(e => {
            console.error(e.message);
        })
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
            <Navbar firstlink="Home" firstlinkto="/" secondlink="Search menu" secondlinkto="/recipe" thirdlink="Profile" thirdlinkto="/account" props='account' />

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