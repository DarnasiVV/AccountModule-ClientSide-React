// import {createStore,combineReducers } from 'redux';
// import { accountlistdata } from './Reducers/GetAccountLlistReducer';

// const rootReducer = combineReducers({
//     accountList: accountlistdata, 
//   });
//  const store = createStore(rootReducer);

//  export default store;
import { configureStore,combineReducers } from "@reduxjs/toolkit"; 
import { accountlistdata } from './Reducers/AccounReducer';

const allreducers = combineReducers({
    accountList: accountlistdata, 
    createAccount : accountlistdata,
    updateAccount : accountlistdata
})

export const store = configureStore({

    reducer:allreducers,

})