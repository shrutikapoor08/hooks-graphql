import gql from "graphql-tag";

export const ADD_SONG = gql`
  mutation AddSong($song: SongCreateInput!) {
    createSong(data: $song) {
      name
      actor
      lyrics
    }
  }
`;



export const DELETE_SONG = gql`
    mutation DeleteSong($id: SongWhereUniqueInput!) {
    deleteSong (where: $id ){
      name
      actor
      lyrics
    }
  }
`;