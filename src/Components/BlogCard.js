import React, {Component} from 'react'


class BlogCard extends Component{

    //pre-ES6 /initialize
    // constructor(props){
    //     super(props)
    //     this.state = {}
    // }

    //ES6
    state = {
        counter : 0,
        beenClicked: false
    }

    // localIncrementCounter = () => {
    //    this.props.incrementCounter()
        
    // }

    moreDetailsClickHandler = () => {
        console.log("clicking")
        this.setState((prevState)=> ({beenClicked: !prevState.beenClicked}))
    }

    renderMoreDetails = () => {
        const {blogObject} = this.props
        if (this.state.beenClicked){
            return <h4>By:{blogObject.author}</h4>

        }
    }
    localAddSavedBlog = () => {
        this.props.addSavedBlog(this.props.blogObject)
    }

    render(){
        const {blogObject} = this.props
        return(
            <div>
            <h5>{blogObject.title}</h5>
            <img alt ="Blog" style={{maxWidth:"70vw", maxHeight: "20vh"}} src={blogObject.image}></img>

            {/* {this.state.beenClicked ? <h4>By:{blogObject.author}</h4>:null} */}
            {this.renderMoreDetails()}

            <button onClick={this.localAddSavedBlog}>Save</button>
            <button>Visit</button>
            <button onClick={this.moreDetailsClickHandler}>{this.state.beenClicked ? "Less Details": "More Details"}</button>
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