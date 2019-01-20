import React from 'react'
import {connect} from 'react-redux'
import { dispatch } from 'react-redux'
import { editAccount, saveAccount} from "../actions";

function AccountEdit(props){
    const handler = (event) =>{
        const {name, value} = event.target;
        props.onEditAccount({...props.selectedAccount, [name] : value});
    }

    const buttonEventHandler = (event) => {
        props.onSaveAccount('/account/' + props.selectedAccount.accountId, props.selectedAccount)
        event.preventDefault();
    }

    return(
      <div>
          <form>
            <label>Account Ids</label> <input name="accountId" className="form-control" onChange={handler} value={props.selectedAccount.accountId} />
            <br/>
            <label>Account Type</label> <input name="accountType" className="form-control" onChange={handler} value={props.selectedAccount.accountType} />
            <br/>
            <label>Account Balance</label> <input name="accountBalance" className="form-control" onChange={handler} value={props.selectedAccount.accountBalance} />
            <br/>
            <button onClick={buttonEventHandler}>Save</button>
          </form>
      </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedAccount: state.accountFetchReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        onEditAccount: (account) => {
            dispatch(editAccount(account))
        },
        onSaveAccount: (url, account) => {
            dispatch(saveAccount(url, account))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AccountEdit);