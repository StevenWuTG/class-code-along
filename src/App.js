
import './App.css';
import React from 'react'
import BlogsList from './Containers/BlogsList';
import Counter from './Components/Counter'
import SavedBlog from './Containers/SavedBlog';

class App extends React.Component {

  state= {
    // counter: 
    savedBlogs: []
  }

  addSavedBlog = (blogObject) => {
    console.log("inside app click handler",blogObject)
    this.setState({
      savedBlogs: [...this.state.savedBlogs, blogObject]
    })

  }


  removeSavedBlog = (blogObject) => {
    console.log("inside app click handler",blogObject)
    this.setState({
      savedBlogs: [...this.state.savedBlogs, blogObject]
    })

  }

  render(){
    return (
      <div className="App">
        {/* <Counter counter={this.state.counter}/> */}
        <SavedBlog clickHandler={this.removeSavedBlog}/>
        <BlogsList clickHandler={this.addSavedBlog}  />
      </div>
    );

  }
}

export default App;
