import React, {useEffect} from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderLogout = ({isToken, setIsToken}) => {
  useEffect(() => {
    setIsToken(localStorage.getItem('token'));
  }, []);
  const history = useHistory()
  // const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsToken("");
    history.push('/');
  }

  const handleLogin = () => {
    history.push('/');
  }
  const redirectToCharacters = () => {
    history.push('/characters');
  }

  const redirectToFavorites = () => {
    history.push('/favorites')
  }

  return (
    <Container>
      {isToken ? (
        <>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          <CharactersButton onClick={redirectToCharacters}> Characters </CharactersButton>
          <Favorites onClick={redirectToFavorites}> Favorites </Favorites>
        </>
       
        
      ) : (
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      )}
    </Container>
  )
}

const LogoutButton = styled.button`
  padding: 6px;
  background-color:  #555555;
  color: white;
`
const CharactersButton = styled.button`
  padding: 6px;
  background-color: #008CBA;
`

const LoginButton = styled.button`
  padding: 6px;
  background-color: #e7e7e7; 
  color: black;
`

const Container = styled.div`
  /* background-color: red; */
`
const Favorites = styled.button`
  padding: 6px;
  background-color: #D53D25; 
  color: white;
`

export default HeaderLogout;