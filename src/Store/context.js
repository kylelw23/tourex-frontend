import React, { Component } from 'react'

const TourexContext = React.createContext();

class TourexProvider extends Component {
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
            <TourexContext.Provider value={{...this.state}}>
                {this.props.children}
            </TourexContext.Provider>
        )
    }
}

// In order to receive data from children components, use <TourGuideConsumer></TourGuideConsumer>
const TourexConsumer = TourexContext.Consumer;

export {TourexConsumer, TourexProvider, TourexContext};