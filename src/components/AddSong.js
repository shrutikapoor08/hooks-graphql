import React, { useState } from "react";
import { graphql, Mutation } from "react-apollo";
import { ADD_SONG } from '../graphql/mutations'
import Button from "muicss/lib/react/button";


const AddSong = () => {
    //add mutation to this component. Refactor it out.
    const [name, setName] = useState("");
    const [actor, setActor] = useState("");
    const [lyrics, setLyrics] = useState("");

    return (
        <Mutation mutation={ADD_SONG}>
            {(addSong, data) => (
        <form onSubmit={e => {
            e.preventDefault();
            addSong({ variables: { song: {
                        name,
                        actor,
                        lyrics
                        }}
                    });
                }}
            >
            <div className="preference">
                <label htmlFor="addSong">Add a new song</label>
                <input value={name} type="text" name="name" placeholder="name" onChange={e => setName(e.target.value)} />
                <input value={actor} type="text" name="actor" placeholder="actor" onChange={e => setActor(e.target.value)}/>
                <input value={lyrics} type="text" name="lyrics" placeholder="lyrics" onChange={e => setLyrics(e.target.value)}/>
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