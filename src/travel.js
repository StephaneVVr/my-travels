import React, { Component } from 'react';

class Travel extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.destination}</h1>
                <p>{this.props.country}</p>
                <p>{this.props.distance}</p>
                <img src={this.props.image} />
            </div>
        );
    };
};

export default Travel;