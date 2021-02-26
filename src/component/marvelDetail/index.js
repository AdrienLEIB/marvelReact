import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components'

const MarvelDetail = ({id}) => {
    const [heroe, setheroe] = useState({});
    useEffect(() => {
        axios({
            method: 'get',
            url: "http://gateway.marvel.com/v1/public/characters/" + id,
            params: {
            'ts': 1,
            'apikey': process.env.REACT_APP_MARVEL_KEYAPI,
            'hash': process.env.REACT_APP_MARVEL_HASH_KEY
            }
        })
        .then(res =>{
            setheroe(res.data.data.results[0]);
            
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
    <Padding>
        <ImgContainer src={heroe?.thumbnail?.path + '.' + heroe?.thumbnail?.extension}  alt={heroe.name} /> 
        <CharacaterProfil>
            {heroe?.name} <br></br>
            {heroe?.description}

            <Comics>
                Liste des Comics : 
                {heroe?.comics?.items.map(comic => (
                    <Comic key={comic?.resourceURI}>
                        {comic?.name}
                    </Comic>
                ))}
            </Comics>
        </CharacaterProfil>
    </Padding>
    );
};

const ImgContainer = styled.img`
  width: 150px;
`

const Padding = styled.div`
    padding: 3rem !important
`

const CharacaterProfil = styled.div`

`
const Comics = styled.div`

`
const Comic = styled.div`

`


export default MarvelDetail;

