import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'; 
import BaliseMarvel from '../baliseMarvel'

const Recherche =  ({name}) => {
    console.log(name);
    const [heroes, setheroes] = useState([]);
    const [offSet, setOffSet] = useState({number: 0, numPage: 1})
    const history = useHistory();
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] );

    useEffect(()=>{
      localStorage.setItem('favorites', JSON.stringify(favorites));

    }, [favorites])

    const addFav = (heroe) => {
      const checkId = favorites.filter(e => e.id === heroe.id)
      if (checkId.length === 0) {
        setFavorites([...favorites, {'id': heroe.id, 'path': heroe.thumbnail.path, 'extension': heroe.thumbnail.extension, 'name': heroe.name }]);
      }
      else{
        const newFavorites = favorites.filter(h => h.id !=  heroe.id);
        setFavorites(newFavorites);
      }
    }

    const decrease = () => {
          setOffSet({...offSet, number: offSet.number - 20, numPage: offSet.numPage - 1})
      }
    
    const increase = () => {
        setOffSet({...offSet, number: offSet.number + 20, numPage: offSet.numPage + 1})
    }
      
    useEffect(() => {
        console.log(name);
        axios({
            method: 'get',
            url: "http://gateway.marvel.com/v1/public/characters",
            params: {
            
            'ts': 1,
            'nameStartsWith': name,
            'apikey': process.env.REACT_APP_MARVEL_KEYAPI,
            'hash': process.env.REACT_APP_MARVEL_HASH_KEY,
            'limit': 20,
            'offset': offSet.number,
            
            }
        })
        .then(res =>{
            setheroes(res.data.data.results);
            
        }).catch(err => {
            console.log(err);
        })
        
    }, [offSet])

    const redirectToDetail = (id) =>{
      history.push('/characters/' + id);
    }

    return (
        <BaliseMarvel heroes={heroes} favorites={favorites} history={history} redirectToDetail={redirectToDetail} addFav={addFav} offSet={offSet} decrease={decrease} increase={increase} />
    );
};



export default Recherche;