import gql from "graphql-tag";

export const addSong = gql`
  mutation AddSong($actor: String, $name: String, $lyrics: String) {
    addSong(actor: $actor, name: $name, lyrics: $lyrics) {
      name
      actor
      lyrics
    }
  }
`;
