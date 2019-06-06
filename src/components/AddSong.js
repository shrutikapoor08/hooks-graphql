import React, { useState } from "react";
import { graphql, Mutation } from "react-apollo";
import { ADD_SONG } from '../graphql/mutations'
import Button from "muicss/lib/react/button";


const AddSong = ({onSubmit}) => {
    //add mutation to this component. Refactor it out.
    return (
        <Mutation mutation={ADD_SONG}>
            {(addSong, data) => (
        <form onSubmit={onSubmit}>
            <div className="preference">
                <label htmlFor="addSong">Add a new song</label>
                <input type="text" name="name" id="addSong" />
            </div>
            <Button variant="contained" color="primary" type="submit">
                Add Song
            </Button>
        </form>
            )}
        </Mutation>
    )
}


export default AddSong