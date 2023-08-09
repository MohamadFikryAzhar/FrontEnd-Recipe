import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddRecipe from './pages/recipe/AddRecipe';
import DetailRecipe from './pages/recipe/DetailRecipe';
import DetailProfile from './pages/profile/DetailProfile';
import EditRecipe from './pages/recipe/EditRecipe';
import RecipePage from './pages/recipe/RecipePage';
import RootPage from './pages/RootPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootPage/>} />        
        <Route path='/recipe' element={<RecipePage/>} />        
        <Route path='/recipe/:id' element={<DetailRecipe/>} />
        <Route path='/add-recipe' element={<AddRecipe/>} />
        <Route path='/edit-recipe/:id' element={<EditRecipe/>} />

        <Route path='/account' element={<DetailProfile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App