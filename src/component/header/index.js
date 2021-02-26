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
  console.log(isToken);
  return (
    <Container>
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        
      ) : (
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      )}
      {isToken ? (
        <CharactersButton onClick={redirectToCharacters}> Characters </CharactersButton>
        
      ) : (
        <div> </div>
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

export default HeaderLogout;