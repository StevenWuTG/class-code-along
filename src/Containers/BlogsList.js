import React from 'react'
import apiResponse from '../fakeAPI'
import BlogCard from '../Components/BlogCard'

class BlogsList extends React.Component {

    render(){
        let arrayOfBlogCards = apiResponse.map(blogEl => <BlogCard blogObject={blogEl} />)
        
        console.log("array of cards", arrayOfBlogCards)

        return (
            
            <>
                {arrayOfBlogCards}
            </>
            
        )

    }
}

export default BlogsList