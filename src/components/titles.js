import React from 'react'

import {connect} from 'react-redux'

import {setFocusId} from '../actions'

export class Titles extends React.Component {
    onClick(event){
        const value = event.target.value
        event.preventDefault()
        this.props.dispatch(setFocusId(value))
    }
    render() {
        const titles = this.props.works.map((work, index) => (
            <li key={index}>
                {this.props.works[index].title}
                <button value={index} 
                onClick={e => this.onClick(e)}>See Reviews!</button>
            </li>
        ))
        return (
            <div>
                <ul>
                    {titles}
                </ul>
            </div>
            ) 
    }
}

const mapStateToProps = state => ({
    works: state.works,
    focusId: state.focusId
})

export default connect(mapStateToProps)(Titles);
