import gql from "graphql-tag";

export const singleArtist = gql`
  query songs($artist: String) {
    songs(where: { artist: $artist }) {
      name
      id
      artist
      lyrics
    }
  }
`;
