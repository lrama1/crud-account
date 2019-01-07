
export const selectAccount = (account) => {
    return {
        type: 'ACCOUNT_SELECTED',
        payload: {
            account,
            navToRoute: '/account/' + account.accountId
        }

    }
};

export const accountsFetchSuccess = (accounts) =>{
    console.log('DISPATCHING SUCCESS', accounts );
    return {
        type: 'ACCOUNTS_FETCH_SUCCESS',
        accounts: accounts
    }
}

export const accountsFetchError = (error) => {
    return {
        type: 'ACCOUNTS_FETCH_ERROR',
        error: error
    }
}

export const fetchAllAccounts = (url) => {
    console.log('Fetch Invoked');
    return dispatch => {
        fetch(url)
        .then(response => response.json())
        .then(data => {            
            dispatch(accountsFetchSuccess(data.rows))
        })
        .catch(() => dispatch(accountsFetchError(true)))
    }
}