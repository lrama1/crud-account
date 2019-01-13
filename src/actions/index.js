/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */

export function accountFetchSuccess(account){
    console.log('DISPATCHING SUCCESS', account );
    return {
        type: 'ACCOUNT_FETCH_SUCCESS',
        account: account
    }
}

export function accountFetchError(error){
    return {
        type: 'ACCOUNT_FETCH_ERROR',
        error: error
    }
}

export function fetchAccount(url){
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
export function accountsFetchSuccess(accounts){
    console.log('DISPATCHING SUCCESS', accounts );
    return {
        type: 'ACCOUNTS_FETCH_SUCCESS',
        accounts: accounts
    }
}

export function accountsFetchError(error){
    return {
        type: 'ACCOUNTS_FETCH_ERROR',
        error: error
    }
}

export function fetchAllAccounts(url){
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