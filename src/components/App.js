import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import {connect, dispatch} from 'react-redux'

import AccountList from './AccountList';
import AccountEdit from './AccountEdit';
import Home from './Home';
import {fetchAllAccounts} from '../actions'

const App  = (props) => {
    function routeLinkClickEventHandler(){
        props.fetchAllAccounts('/accounts?page=1&per_page=10')
    }

    return(
    <BrowserRouter>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/accounts"  onClick={routeLinkClickEventHandler}>Accounts</Link></li>
                    </ul>
                </div>
                <div className="col-xs-8">
                    <Route path="/" exact component={Home} />
                    <Route path="/accounts" exact component={AccountList}/>
                    <Route path="/account" exact render={(props) => <AccountEdit {...props} />} />
                </div>
            </div>
        </div>
    </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        accounts: state.accountsReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllAccounts: (url) => dispatch(fetchAllAccounts(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
