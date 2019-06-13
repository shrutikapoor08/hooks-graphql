import React, { useState } from "react";
import { graphql, Mutation } from "react-apollo";
import { ADD_SONG } from '../graphql/mutations'
import Button from "muicss/lib/react/button";


const AddSong = ({onSubmit}) => {
    //add mutation to this component. Refactor it out.
    return (
        <Mutation mutation={ADD_SONG}>
            {(addSong, data) => (
        <form onSubmit={e => {
            console.log(e);
            e.preventDefault();
            addSong({ variables: { song: {
                        name: e.name,
                        actor: e.actor,
                        lyrics: e.lyrics
                        }}
                    });
                }}
            >
            <div className="preference">
                <label htmlFor="addSong">Add a new song</label>
                <input type="text" name="name" id="addSong" placeholder="name"/>
                <input type="text" name="actor" id="actor" placeholder="actor"/>
                <input type="text" name="lyrics" id="lyrics" placeholder="lyrics"/>
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