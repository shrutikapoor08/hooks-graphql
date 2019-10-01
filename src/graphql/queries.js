import gql from "graphql-tag";

export const GET_SONGS = gql`
  query albums($actor: String) {
    date
    artwork
    songs(where: { actor: $actor }) {
      name
      id
      actor
      lyrics
    }
  }
`;
