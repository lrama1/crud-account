import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';

import AccountList from './AccountList';
import AccountEdit from './AccountEdit';
import Home from './Home';

const App  = () => {
    return(
    <BrowserRouter>
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/accounts">Accounts</Link></li>
                </ul>
            </div>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/accounts" exact component={AccountList} />
                <Route path="/account" exact component={AccountEdit} />
            </div>
        </div>
    </BrowserRouter>
    );
};

export default App;