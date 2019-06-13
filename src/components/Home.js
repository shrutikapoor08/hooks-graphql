import React, { useState } from "react";
import { graphql } from "react-apollo";
import Container from "muicss/lib/react/container";
import { singleActor } from '../graphql/queries'
import AddSong from './AddSong'


const Home = ({ data: { loading, error, songs } }) => {
  const [count, setCount] = useState(0);

  if (error) return <h1>Error fetching songs </h1>;
  if (songs) {
    return (
      <Container>
        {songs.map(song => (
          <div key={`song-${song.id}`}>
            <h1>{song.name}</h1>
            <h3>{song.actor}</h3>
            <p>{song.lyrics}</p>
          </div>
        ))}
        Counter: {count}
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
