import React, { Component } from 'react'
import BlogCard from '../Components/BlogCard'

function SavedBlog(props) {

    function renderBlogCards(){
        return props.SavedBlogs.map(blogEl => <BlogCard key={blogEl.id} blogObject={blogEl} addSavedBlog={this.props.addSavedBlog}/>)
    }

    return <h1> Saved Blog</h1>
}

export default SavedBlog
