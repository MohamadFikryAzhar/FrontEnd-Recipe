import initialState from './../../pages/config/InitialState.js';

export const getAllRecipeReducer = (state = initialState, action) => {
    if (action.type === 'GET_RECIPES_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'GET_RECIPES_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'GET_RECIPES_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const getUserRecipeReducer = (state = initialState, action) => {
    if (action.type === 'USER_RECIPES_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'USER_RECIPES_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'USER_RECIPES_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const getRecipeReducer = (state = initialState, action) => {
    if (action.type === 'GET_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'GET_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'GET_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const postRecipeReducer = (state = initialState, action) => {
    if (action.type === 'POST_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'POST_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'POST_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const updateRecipeReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'UPDATE_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'UPDATE_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}

export const deleteRecipeReducer = (state = initialState, action) => {
    if (action.type === 'DELETE_RECIPE_PENDING') {
        return {
            ...state,
            isLoading: true
        }
    }

    if (action.type === 'DELETE_RECIPE_SUCCESS') {
        return {
            ...state,
            data: action.payload,
            errorMessage: ''
        }
    }

    if (action.type === 'DELETE_RECIPE_FAILED') {
        return {
            ...state,
            data: null,
            errorMessage: action.payload
        }
    }

    return state;
}