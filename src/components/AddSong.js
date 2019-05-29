import React, { useState } from "react";
import { graphql } from "react-apollo";
import { addSong } from '../graphql/mutations'
import Button from "muicss/lib/react/button";


const AddSong = ({onSubmit}) => {
    //add mutation to this component. Refactor it out.
    return (
        <form onSubmit={onSubmit}>
            <div className="preference">
                <label htmlFor="addSong">Add a new song</label>
                <input type="text" name="name" id="addSong" />
            </div>
            <Button variant="contained" color="primary" type="submit">
                Add Song
            </Button>
        </form>
    )
}

export default graphql(addSong, {
    options: ({ match }) => ({
        variables: {
            name: match.params.slug
        }
    })
})(AddSong);
