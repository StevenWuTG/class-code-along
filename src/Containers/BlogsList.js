import React from 'react'
import apiResponse from '../fakeAPI'
import BlogCard from '../Components/BlogCard'

class BlogsList extends React.Component {

    arrayOfBlogCards = () => {
        return apiResponse.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} addSavedBlog={this.props.addSavedBlog}/>)
    }

    render(){
        
        return (
            
            <>
                {this.arrayOfBlogCards()}
            </>
            
        )

    }
}

export default BlogsList