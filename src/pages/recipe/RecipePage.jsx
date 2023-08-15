import { useEffect, useState } from 'react';
import './../assets/css/menurecipe.css';
import Navbar from './../component/Navbar';
import Footer from './../component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { categorizedRecipeAction, getAllRecipeAction, searchRecipeAction, sortingRecipeAction } from '../../redux/actions/RecipeAction.js';
import MappedRecipeData from '../component/AllRecipeComp';

export default function RecipePage() {
    const dispatch = useDispatch();
    const {recipes} = useSelector(state => state);
    const {data} = recipes;
    const page = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState([]);
    const [sortBy, setSortBy] = useState([]);
    const [sort, setSort] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        dispatch(sortingRecipeAction(sortBy, sort))
    }, [sortBy, sort])

    useEffect(() => {
        dispatch(getAllRecipeAction(currentPage));
    }, [currentPage])

    useEffect(() => {
        dispatch(categorizedRecipeAction(category))
    }, [category])

    useEffect(() => {   
        search.length >= 3 && dispatch(searchRecipeAction(search))
        search == '' && dispatch(getAllRecipeAction())
    }, [search])

    return (
        <>
            <Navbar />

            <header className="title-top container">
                <h1 className="">Discover Recipe</h1>
                <h1>& Delicious Food</h1>
            </header>
            <div className="m-lg-5 p-lg-5 m-sm-5 p-sm-5 second-navigation">
                <div className="input-group mb-1 w-50 mb-sm-3 mb-md-3 mb-lg-3">
                    <i className="bi bi-search input-group-text"></i>
                    <input value={search} onChange={e => setSearch(e.target.value)} name="search" type="text" className="form-control" placeholder="Search Delicious Food" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className='d-flex mt-2 sorted-list'>
                    <select className="form-select" aria-label="Default select example" style={{width: '30vh'}}>
                        <option selected onClick={e => setSortBy(e.target.value)} value="">Sort By</option>
                        <option onClick={e => setSortBy(e.target.value)} value="title">Title</option>
                        <option onClick={e => setSortBy(e.target.value)} value="ingredients">Ingredients</option>
                        <option onClick={e => setSortBy(e.target.value)} value="user_name">User</option>
                        <option onClick={e => setSortBy(e.target.value)} value="created_at">Created At</option>
                    </select>
                    <select className="form-select" aria-label="Default select example" style={{width: '30vh'}}>
                        <option selected onClick={e => setSort(e.target.value)} value="">Sort</option>
                        <option onClick={e => setSort(e.target.value)} value="asc">A-Z</option>
                        <option onClick={e => setSort(e.target.value)} value="desc">Z-A</option>
                        <option onClick={e => setSort(e.target.value)} value="asc">Old - Latest</option>
                        <option onClick={e => setSort(e.target.value)} value="desc">Latest - Old</option>
                    </select>
                </div>
            </div>

            <section className="container category gap-2">
                <button onClick={() => dispatch(getAllRecipeAction())} value="" style={{width: '20vh'}} className="btn btn-warning">All</button>
                <button onClick={e => setCategory(e.target.value)} value="Main course" style={{width: '20vh'}} className="btn btn-warning ms-2">Main Course</button>
                <button onClick={e => setCategory(e.target.value)} value="Appetizer" style={{width: '20vh'}} className="btn btn-warning ms-2">Appetizer</button>
                <button onClick={e => setCategory(e.target.value)} value="Dessert" style={{width: '20vh'}} className="btn btn-success ms-2">Dessert</button>
            </section>
            
            <MappedRecipeData data={data}/>

            <section className="pagination mt-5 ms-5">
                <button
                    className="btn btn-sm btn-warning button-previous"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    hidden={currentPage <= 1}>
                    Prev
                </button>
                <button
                    className="btn btn-sm btn-warning button-next"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    hidden={currentPage >= page?.totalPage}>
                    Next
                </button>
            </section>

            <Footer/>
        </>
    )
}