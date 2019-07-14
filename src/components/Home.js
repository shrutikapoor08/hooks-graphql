import React, { useEffect, useContext} from "react";
import { graphql } from "react-apollo";
import Container from "muicss/lib/react/container";
import { singleActor } from '../graphql/queries'
import AddSong from './AddSong'
import Context from '../context'

const Home = ({ data: { loading, error, songs } }) => {
    const {state, dispatch} = useContext(Context);

    useEffect(() => {
        if(songs) {
            dispatch({type: "ADD_CONTENT", payload: {songs}});
        }
    });

    console.log(state)
    if (error) return <h1>Error fetching songs </h1>;
    if (state ) {
        return (
            <Container>
                {state.songs && state.songs.songs && state.songs.songs.map(song => (
                    <div key={`song-${song.id}`}>
                        <h1>{song.name}</h1>
                        <h3>{song.actor}</h3>
                        <p>{song.lyrics}</p>
                    </div>
                ))}
                <AddSong/>
            </Container>
        );
    }
    return <h2>Loading posts...</h2>;
};


export default graphql(singleActor, {
    options: ({ match }) => ({
        variables: {
            actor: match.params.slug,
            name: match.params.slug,
            lyrics: match.params.slug
        }
    })
})(Home);
