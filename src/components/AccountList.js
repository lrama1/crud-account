import React from 'react'
import {connect, dispatch} from 'react-redux'

import { fetchAccount } from '../actions';

function AccountList(props){

    function selectAccount(account){
        //dispatch an action to fetch the selected account
        props.fetchAccount('/account/' + account.accountId)
        //tell route to display the Edit screen
        props.history.push({pathname: '/account'});
    }


    /*
    Iterate thru rows of accounts and create a tr component for each
    NOTE: look up examples of the 'map' function on the web if you're unfamiliar with it
     */
    const rows = props.accounts.map((account) => {
        return (
            <tr key={account.accountId}>
                <td>{account.accountId}</td>
                <td>{account.accountType}</td>
                <td>{account.accountBalance}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => selectAccount(account)}>Select</button>
                </td>
            </tr>
        );
    });

    /*
    render a table component
     */
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Account Id</th><th>Type</th><th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        accounts: state.accountsReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onSelectAccount: (account) => dispatch(fetchAccount(account)),
        fetchAccount: (url) => dispatch(fetchAccount(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);