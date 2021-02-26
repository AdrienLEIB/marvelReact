import React, { Component } from 'react';
import MarvelDetail from '../component/marvelDetail';

const Character = props => {
    return (
        <div>
           <MarvelDetail id={props.match.params.id}/> 
        </div>
    );
};

export default Character;