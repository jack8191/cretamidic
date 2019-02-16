import React from 'react'
import {connect} from 'react-redux'

export class Reviews extends React.Component {
    render() {
        const reviews = this.props.works[0].reviews.map((review, index) => (
            <li key={index}>
                <p>{review.text}</p>
                <p>score: {review.score}</p>
            </li>
        ))
        return(
            <ul>
                {reviews}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    works: state.works
})

export default connect(mapStateToProps)(Reviews);