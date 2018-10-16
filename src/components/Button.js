import React , { Component } from 'react';

class Button extends Component{


     render(){
         return(
            <div>
                <button onClick={this.props.testQuote}>Vas-y clique!</button>
            </div>
         );
     }
}
export default Button;