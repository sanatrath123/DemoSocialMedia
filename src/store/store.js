import { configureStore } from "@reduxjs/toolkit";
import Authreduser  from "./AuthSlice";

   export const store = configureStore({
    reducer:{
Auth: Authreduser,
    }
})

