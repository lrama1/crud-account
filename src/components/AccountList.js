import React from 'react'
import {connect} from 'react-redux'
import { dispatch } from 'react-redux'
import { selectAccount } from '../actions';

const AccountList = (props) => {
    console.log('Rendering',props);

    const rows = props.accounts.map((account) => {
        return (
            <li key={account.accountId}>
                {account.accountId}
                <button onClick={() => props.onSelectAccount(account)}>Select</button>
            </li>
        );
    });

    return (
        <div>
            <ul>
                {rows}
            </ul>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);