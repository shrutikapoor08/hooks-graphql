import React, { useState, useEffect, useContext } from "react";
import { graphql, Mutation } from "react-apollo";
import { ADD_SONG } from '../graphql/mutations'
import Button from "muicss/lib/react/button";
import Context from '../context';


const AddSong = () => {
    const [name, setName] = useState("");
    const [actor, setActor] = useState("");
    const [lyrics, setLyrics] = useState("");
    const {dispatch} = useContext(Context);

    return (
        <Mutation mutation={ADD_SONG}>
            {(addSong) => (
        <form onSubmit={e => {
            e.preventDefault();
            addSong({ variables: { song: {
                        name,
                        actor,
                        lyrics
                        }}
                    });
            const songs = [{name, actor, lyrics}];
            dispatch({type: "ADD_CONTENT", payload: songs});
        }}>
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