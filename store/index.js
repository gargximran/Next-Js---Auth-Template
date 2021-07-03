import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";

const store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['form/initForm', 'form/changeValue', "form/setErrors", "form/validateForm"]
        }

    })

})


export default store
