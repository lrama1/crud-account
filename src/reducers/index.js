import {combineReducers} from 'redux'

const accountsReducer = (accounts = [], action) => {
    if(action.type === 'ACCOUNTS_FETCH_SUCCESS'){
        console.log('Reducer ', action.accounts);
        console.log('accts', accounts);
        return action.accounts;
    }
    console.log(accounts);
    return accounts;
}

const accountFetchReducer = (account = {}, action) => {
    if (action.type === 'ACCOUNT_FETCH_SUCCESS'){
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

 