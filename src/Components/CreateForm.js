import React from 'react'

class CreateForm extends React.Component {
    
    state = {
        error: null,
        beenClicked: false,
        title: "",
        image: "",
        author: "",
        url: ""
    }

    inputChangeHandler = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localSubmitHandler = (e)=> {
        e.preventDefault()
        console.log("in local submit")
        this.props.submitHandler(this.state)
    }

    
    render(){
        return (
            <form onSubmit={this.localSubmitHandler}>
                <h1>CreateForm</h1>

                <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.inputChangeHandler}></input>

                <input type="text" name="image" placeholder="image" value={this.state.image} onChange={this.inputChangeHandler}></input>
                
                <input type="text" name="author" placeholder="author" value={this.state.author} onChange={this.inputChangeHandler}></input>
                
                <input type="text" name="url" placeholder="url" value={this.state.url} onChange={this.inputChangeHandler}></input>

                <button type="submit">Add Blog</button>
        
            </form>
        )
    }
}

export default CreateForm