import React, { Component } from "react";

function SearchForm(props) {
  return (
    <>

        <h1>Search Form</h1>
        <form>
            <input type="text" value={props.searchTerm} onChange={props.changeHandler}></input>
            <button>Search</button>
        </form>


    </>
  )
}

export default SearchForm;
