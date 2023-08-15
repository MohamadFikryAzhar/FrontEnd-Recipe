import { combineReducers } from "redux";
import { loginReducer, registerReducer} from "./AuthReducer.js";
import {deleteRecipeReducer, getAllRecipeReducer, getRecipeReducer, getUserRecipeReducer, postRecipeReducer, updateRecipeReducer} from './../../redux/reducers/RecipeReducer.js';

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    recipes: getAllRecipeReducer,
    user_recipe: getUserRecipeReducer,
    recipe: getRecipeReducer,
    post_recipe: postRecipeReducer,
    put_recipe: updateRecipeReducer,
    delete_recipe: deleteRecipeReducer
});

export default rootReducer;