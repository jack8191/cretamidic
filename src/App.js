import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Cretamidic from './components/cretamidic'
//import Titles from './titles'

export default function App(props){
    return(
        <Router>
            <div>
                <header>
                    <h1><Link to="/">CretaMidic Home!</Link></h1>
                </header>
                <main>
                    <Route exact path='/' component={Cretamidic}/>
                </main>
            </div>
        </Router>
    )
}

