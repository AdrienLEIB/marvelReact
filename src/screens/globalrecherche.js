import React from 'react';
import Recherche from '../component/recherche';

const GlobalRecherche = props => {
    return (
        <div>
           <Recherche name={props.match.params.name}/> 
        </div>
    );
};


export default GlobalRecherche;