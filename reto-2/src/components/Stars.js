import React from 'react';
import { RiMoonFill } from 'react-icons/ri'
import { BsFillSunFill } from 'react-icons/bs'
import { StyledStars } from './styles/Stars.styled';
import { StyledText } from './styles/Stars.styled';

export const Stars = ({ theme, changeTheme }) => {
  console.log(theme);

  return (
    <StyledText>
      <h1>todo</h1>
      <StyledStars onClick={changeTheme}>
        {theme === 'light' ? <RiMoonFill size={'25px'} /> : <BsFillSunFill size={'25px'} />}
      </StyledStars>
    </StyledText>
  )
}
