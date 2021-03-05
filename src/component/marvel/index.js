import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'; 
import {  AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Marvel = (props) => {

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
        axios({
            method: 'get',
            url: "http://gateway.marvel.com/v1/public/characters",
            params: {
            'ts': 1,
            'apikey': process.env.REACT_APP_MARVEL_KEYAPI,
            'hash': process.env.REACT_APP_MARVEL_HASH_KEY,
            'limit': 20,
            'offset': offSet.number
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
        <div>
            <DataContainer>
                {heroes.map(heroe => (
                    <ItemContainer key={heroe.name}>
                    <ImgContainer src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`}  alt={heroe.name} /> <br></br>
                    <ParagrapheContainer onClick={() => redirectToDetail(heroe.id)}> {heroe.name} </ParagrapheContainer>
                    <ButtonStar onClick={()=>addFav(heroe)}>
                    {favorites.filter(e => e.id === heroe.id).length === 0 ? 
                      (<StarEmpty />) : 
                      (<Star/>)
                      }
                    </ButtonStar>
                    
                    </ItemContainer>
                    
                ))}
            </DataContainer>
            <PaginationContainer>
                {offSet.numPage > 1 ? (<ButtonContainer onClick={decrease}> - </ButtonContainer>) : 
                ( <div> </div>)}
                <ParagrapheContainer>{offSet.numPage}</ParagrapheContainer>
                {heroes.length >= 20 ? ( <ButtonContainer onClick={increase}> + </ButtonContainer>) : 
                ( <div> </div>)}
            </PaginationContainer>
        </div>
    );
};


const ImgContainer = styled.img`
  width: 150px;
`
const DataContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-content: space-between;
  justify-content: space-between;
`
  
const ItemContainer = styled.div`
  width: 300px;
  height: 300px;
  font-size: 20px;
  text-align: center;
  margin: 10px
  `

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonContainer = styled.button`
  margin: 10px;
`

const ParagrapheContainer = styled.button`

`

const ButtonStar = styled.button`
  text-decoration: none;
  border: none;
  background-color: none;
  outline: none;
  color: none;
  border-color: none;
`

const StarEmpty = styled(AiOutlineStar)`

`

const Star = styled(AiFillStar)`
  color: #EFA82C; 
`

export default Marvel;