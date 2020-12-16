import React from 'react'


function Counter(){

    state = {
        counter: 0
    }
    return <h4>Counter: {this.state.counter}</h4>
}

export default Counter