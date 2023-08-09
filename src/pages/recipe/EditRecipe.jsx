import { useNavigate, useParams } from 'react-router';
import Navbar from './../../component/Navbar'
import Footer from './../../component/Footer'
import './../../assets/css/editmenu.css'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { URL } from '../../config/URL';

sessionStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY2NjA4NjAxLTYwNDUtNGQ4ZC1hNmMyLTU3NDg4ZmQ0YjMzZiIsIm5hbWUiOiJBZHphbmEgU2hhbGloYSIsImVtYWlsIjoiZ2hhbmlnaGFuaUBnbWFpbC5jb20iLCJyb2xlX25hbWUiOiJ1c2VyIiwicGhvdG8iOm51bGwsInBob3RvX2lkIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMy0wOC0wOFQyMzozMToxMy4zNjVaIiwidXBkYXRlZF9hdCI6bnVsbCwiZGVsZXRlZF9hdCI6bnVsbCwiaWF0IjoxNjkxNTQ2NjkyLCJleHAiOjE3MjMwODI2OTJ9.zdKox40i-b9CVdVYdKAwxhwt22UUtHB1oaQuZX4k7OQ")
let token = sessionStorage.getItem("token");

export default function EditRecipe() {
    const {id} = useParams();
    const ref = useRef(null);
    const navigate = useNavigate();
    const [image_path, setImage] = useState(null);
    const [recipeData, setRecipeData] = useState({
        title: "",
        ingredients: "",
        category: "",
        image_path: ""
    })

    const getRecipeData = () =>{
        axios.get(`${URL}/recipe/${id}/detail`,{headers :{
            Authorization : `Bearer ${token}`
        }})
        .then(res => {
            setRecipeData({
                ...recipeData,
                title: res.data.data[0].title,
                ingredients: res.data.data[0].ingredients,
                image_path:res.data.data[0].image_path,
                category: res.data.data[0].category
            })
        })
        .catch(err => {
            console.error(err.message)
        })
    }

    useEffect(() => {
        getRecipeData();
    })

    const putRecipeData = event => {
        event.preventDefault();

        let bodyForm = new FormData();
        bodyForm.append("title", recipeData.title);
        bodyForm.append("ingredients", recipeData.ingredients);
        bodyForm.append("category", recipeData.category);
        bodyForm.append("image_path", image_path);

        axios.put(`${URL}/recipe/${id}`, bodyForm, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            navigate('/account')
        }).catch(e => {
            console.error(e.message);
        })
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
            <Navbar firstlink="Home" firstlinkto="/" secondlink="Profile" secondlinkto="/account" thirdlink="Recipe" thirdlinkto="/recipe" props="account" />

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