import React, { Component } from 'react';

class Affichage extends Component {

    render(){
        return(
            <div>
            <p>{this.props.quote}</p>
            <p>{this.props.character}</p>
            <img src={`${this.props.image}`}  alt="personne des Simpson"/>
            </div>
        );
    }
}
export default Affichage;