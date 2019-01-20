import {combineReducers} from 'redux'

const accountsReducer = (accounts = [], action) => {
    if(action.type === 'ACCOUNTS_FETCH_SUCCESS'){
        return action.accounts;
    }
     return accounts;
}

const accountFetchReducer = (account = {}, action) => {
    if (action.type === 'ACCOUNT_FETCH_SUCCESS'){
        return action.account;
    }else if(action.type ==='ACCOUNT_EDIT'){
        return action.account;
    }else if(action.type ==='ACCOUNT_SAVE'){
        return action.account;
    }
    return account;
}

/*
By combining reducers, you now have to use the namespace of the reducer
when mapping State-to-Props in your components
 */
export default combineReducers({
    accountFetchReducer,
    accountsReducer
});

 