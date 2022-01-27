import { configureStore } from "@reduxjs/toolkit";

import signupReducer from './signup';
import postReducer from './post';


const store = configureStore({
    reducer:{signup:signupReducer,post:postReducer},

});

export default store;