import React , { Component } from 'react';

import Button from './Button';
import Affichage from './Affichage';


class Simpson extends Component{

    state = {
        quote : []
    }

    testQuote = () => {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=num')
            .then(results  =>  results.json()) 
                .then(data  => {
        console.log(data)
        this.setState({
            quote:data
            })
        });
    }

     render(){
         return(
            <div>
                
            <Button testQuote = {this.testQuote}/>

            {this.state.quote.map((element,id)=>
            <Affichage  key=""
                        quote={element.quote}
                        character={element.character}
                        image={element.image}
            />)}

            </div>
         );
     }
}
export default Simpson;


