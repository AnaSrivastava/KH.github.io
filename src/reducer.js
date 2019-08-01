// import setSF from './actions.js';
import { CHF } from './constants.js';

const initialState={
    searchField:''
}

export const searchkittens=(state=initialState,action={})=>
{
    switch(action.type)
    {
        case CHF:
            return Object.assign({},state,{searchField:action.payload})
        default:
            return state
    }
}