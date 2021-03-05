import React from 'react';
import styled from 'styled-components'
import {  AiFillStar, AiOutlineStar } from 'react-icons/ai';


const BaliseMarvel = ({heroes, favorites, history, redirectToDetail, addFav, offSet, decrease, increase}) => {
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

export default BaliseMarvel;