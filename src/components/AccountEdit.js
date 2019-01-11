import React from 'react'
import {connect} from 'react-redux'
import { dispatch } from 'react-redux'

function AccountEdit(props){
    return(
      <div>
          This is the account editor
          {props.selectedAccount.accountId}
      </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedAccount: state.selectedAccountReducer
    };
};

export default connect(mapStateToProps)(AccountEdit);