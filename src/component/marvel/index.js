import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'



const Marvel = (props) => {

    const [heroes, setheroes] = useState([]);
    const [offSet, setOffSet] = useState({number: 0, numPage: 1})
    const decrease = () => {
          setOffSet({...offSet, number: offSet.number - 20, numPage: offSet.numPage - 1})
      }
    
    const increase = () => {
        setOffSet({...offSet, number: offSet.number + 20, numPage: offSet.numPage + 1})
    }
      
    useEffect(() => {
        console.log( process.env.REACT_APP_MARVEL_KEYAPI);
        console.log( process.env.REACT_APP_MARVEL_HASH_KEY);
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
            console.log(res.data.data);
            setheroes(res.data.data.results);
            
        }).catch(err => {
            console.log(err);
        })
    }, [offSet])

    return (
        <div>
            <DataContainer>
                {heroes.map(heroe => (
                    <ItemContainer key={heroe.name}>
                    <ImgContainer src={`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`}  alt={heroe.name} />
                    <ParagrapheContainer>{heroe.name}</ParagrapheContainer>
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

const ParagrapheContainer = styled.p``

export default Marvel;