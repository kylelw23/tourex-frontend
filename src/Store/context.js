import React, { Component } from 'react'

const TourGuideContext = React.createContext();

class TourGuideProvider extends Component {
    state = {
        tourguides: [],
        sortedTourguides: [],
        tourguideDetail: [],
        isLoaded: false,
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => console.log(json));
    }
    render() {
        return (
            <TourGuideContext.Provider>
                {this.props.children}
            </TourGuideContext.Provider>
        )
    }
}

export {TourGuideContext, TourGuideProvider};