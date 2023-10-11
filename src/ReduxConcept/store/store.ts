
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { accountlistdata } from '../Reducers/AccounReducer';

const allreducers = combineReducers({
    accountList: accountlistdata,
    createAccount: accountlistdata,
    updateAccount: accountlistdata
})

export const store = configureStore({

    reducer: allreducers,

})