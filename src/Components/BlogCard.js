import React from 'react'

function BlogCard(props){
    return (
        <div>
            <h5>{props.blogObject.title}</h5>
            <img alt ="Blog" style={{maxWidth:"70vw", maxHeight: "20vh"}} src={props.blogObject.image}></img>
            <button>Save</button>
            <button>Visit</button>
        </div>

    )
}


export default BlogCard