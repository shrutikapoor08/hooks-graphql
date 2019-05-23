import React, { useState } from "react";
import { graphql } from "react-apollo";
import Container from "muicss/lib/react/container";
import Button from "muicss/lib/react/button";
import { singleActor } from '../graphql/queries'
import { addSong } from '../graphql/mutations'

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
        Counter: {count}

        <AddSong onSubmit={addSong}/>
      </Container>
    );
  }
  return <h2>Loading posts...</h2>;
};

const AddSong = ({onSubmit}) => {
  //add mutation to this component. Refactor it out.
  return (
      <form onSubmit={onSubmit}>
    <div className="preference">
      <label htmlFor="addSong">Add a new song</label>
      <input type="text" name="addSong" id="addSong" />
    </div>
    <Button variant="contained" color="primary" type="submit">
      Add Song
    </Button>
  </form>
  )
}

export default graphql(singleActor, {
  options: ({ match }) => ({
    variables: {
      actor: match.params.slug,
      name: match.params.slug,
      lyrics: match.params.slug
    }
  })
})(Home);
