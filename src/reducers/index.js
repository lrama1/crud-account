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

const selectedAccountReducer = (selectedAccount = {}, action) => {
    if(action.type === 'ACCOUNT_SELECTED'){
        console.log('account was selected', action.payload);
        return action.payload.account;
    }

    return selectedAccount;
};

export default combineReducers({
    accountsReducer,
    selectedAccountReducer
});

 