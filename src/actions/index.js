/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */

export const accountFetchSuccess = (account) =>{
    console.log('DISPATCHING SUCCESS', account );
    return {
        type: 'ACCOUNT_FETCH_SUCCESS',
        account: account
    }
}

export const accountFetchError = (error) => {
    return {
        type: 'ACCOUNT_FETCH_ERROR',
        error: error
    }
}

export const fetchAccount = (url) => {
    console.log('Fetch of single account Invoked');
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                dispatch(accountFetchSuccess(data))
            })
            .catch(() => dispatch(accountFetchError(true)))
    }
}

/*---------------------------------------------------------*/
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