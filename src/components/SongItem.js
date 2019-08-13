import React from "react";

const SongItem = (song) => (
    <div className={'text-wrapper'}>
        <h1>{song.name}</h1>
        <h3>{song.actor}</h3>
        <p>{song.lyrics}</p>
    </div>
);

export default SongItem