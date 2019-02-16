import React from 'react';

import {connect} from 'react-redux';

import Titles from './titles'
import Reviews from './reviews'

export class CretaMidic extends React.Component {
    render() {
        return(
            <div>
                <Titles />
                <Reviews />
            </div>
            )
    }
}
const mapStateToProps = state => ({
    works: state.works
})

export default connect(mapStateToProps)(CretaMidic);

//view all works
//view all reviews of a work
//make a new review