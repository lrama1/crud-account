import {combineReducers} from 'redux'

const accountsReducer = () => {
    return [
        {
            accountId: '0001',
            accountType:  'C',
            accountBalance: 1000
        },
        {
            accountId: '0002',
            accountType:  'C',
            accountBalance: 2500
        },
        {
            accountId: '0003',
            accountType:  'S',
            accountBalance: 3000
        }
    ]
};

const selectedAccountReducer = (selectedAccount = null, action) => {
    if(action.type === 'ACCOUNT_SELECTED'){
        console.log('account was selected', action.payload);
        return action.payload;
    }

    return selectedAccount;
};

export default combineReducers({
    accounts: accountsReducer,
    selectedAccount: selectedAccountReducer
});

 