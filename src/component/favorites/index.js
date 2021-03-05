import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'; 
import {  AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Favorites = (props) => {

    const [heroes, setheroes] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [] );
    const history = useHistory();

    useEffect(()=>{
      localStorage.setItem('favorites', JSON.stringify(heroes));

    }, [heroes])

    const removeFav = (heroe) => {
        const newFavorites = heroes.filter(h => h.id !=  heroe.id);
        setheroes(newFavorites);
    }


    const redirectToDetail = (id) =>{
      history.push('/characters/' + id);
    }

    return (
        <div>
            <DataContainer>
                {heroes.map(heroe => (
                    <ItemContainer key={heroe.name}>
                    <ImgContainer src={`${heroe.path}.${heroe.extension}`}  alt={heroe.name} /> <br></br>
                    <ParagrapheContainer onClick={() => redirectToDetail(heroe.id)}> {heroe.name} </ParagrapheContainer>
                    <ButtonStar onClick={()=>removeFav(heroe)}>
                    {heroes.filter(e => e.id === heroe.id).length === 0 ? 
                      (<StarEmpty />) : 
                      (<Star/>)
                      }
                    </ButtonStar>
                    
                    </ItemContainer>
                    
                ))}
            </DataContainer>
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

export default Favorites;