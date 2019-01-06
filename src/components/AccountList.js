import React from 'react'
import {connect} from 'react-redux'
import { dispatch } from 'react-redux'
import { selectAccount, fetchAllAccounts } from '../actions';

const AccountList = (props) => {
    console.log('Rendering AccountList');

    const rows = props.accounts.map((account) => {
        return (
            <tr key={account.accountId}>
                <td>{account.accountId}</td>
                <td>{account.accountType}</td>
                <td>{account.accountBalance}</td>
                <td>
                    <button onClick={() => props.onSelectAccount(account)}>Select</button>
                </td>
            </tr>
        );
    });

    return (
        <div>
            <table>
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
        accounts: state.accounts
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onSelectAccount: (account) => dispatch(selectAccount(account))
        /*,
        fetchAllAccounts: (url) => dispatch(fetchAllAccounts(url))*/
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);