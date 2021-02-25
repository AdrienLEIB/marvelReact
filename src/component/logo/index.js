import React from 'react';
import marvel from '../../img/MarvelLogo.svg';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledFrom>
      <img src={marvel} width="250px" alt="Marvel Logo" />
    </StyledFrom>
  );
}

const StyledFrom = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export default Logo;