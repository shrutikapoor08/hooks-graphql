import React, { useState } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Container from "muicss/lib/react/container";
import Button from "muicss/lib/react/button";

const Home = ({ data: { loading, error, songs } }) => {
  const [count, setCount] = useState(0);

  function addSong(event) {
    event.preventDefault();
    setCount(count + 1)
  }
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

        <form onSubmit={e => addSong(e)}>
          <div className="preference">
            <label htmlFor="addSong">Add a new song</label>
            <input type="text" name="addSong" id="addSong" />
          </div>
          <Button variant="contained" color="primary" type="submit">
            Add Song
          </Button>
          Counter: {count}
        </form>
      </Container>
    );
  }
  return <h2>Loading posts...</h2>;
};

export const singleActor = gql`
  query songs($actor: String) {
    songs(where: { actor: $actor }) {
      name
      id
      actor
      lyrics
    }
  }
`;

export default graphql(singleActor, {
  options: ({ match }) => ({
    variables: {
      actor: match.params.slug
    }
  })
})(Home);
