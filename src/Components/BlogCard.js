import React, {Component} from 'react'


class BlogCard extends Component{

    //pre-ES6 /initialize
    // constructor(props){
    //     super(props)
    //     this.state = {}
    // }

    //ES6
    state = {
        counter : 0
    }

    incrementCounter = () => {
        // this.state.counter = this.state.counter +1
        this.setState({counter: this.state.counter + 1})
        
    }

    render(){
        const {blogObject} = this.props
        return(
            <div>
            <h5>{blogObject.title}</h5>
            <img alt ="Blog" style={{maxWidth:"70vw", maxHeight: "20vh"}} src={blogObject.image}></img>
            <h4>Counter: {this.state.counter}</h4>
            <button onClick={this.incrementCounter}>Save</button>
            <button>Visit</button>
        </div>    
        )
    }
}

// function BlogCard(props){
//     const { blogObject} = props
//     return (
//         <div>
//             <h5>{blogObject.title}</h5>
//             <img alt ="Blog" style={{maxWidth:"70vw", maxHeight: "20vh"}} src={props.blogObject.image}></img>
//             <h4>Counter: 0</h4>
//             <button>Save</button>
//             <button>Visit</button>
//         </div>

//     )
// }


export default BlogCard