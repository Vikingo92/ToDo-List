import { createGlobalStyle } from 'styled-components';
import Img1 from '../assets/images/bg-desktop-dark.jpg';
import Img2 from '../assets/images/bg-desktop-light.jpg';


export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');


:root {

    --Bright-blue: hsl(220, 98%, 61%);
    --Check-background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);

/* Light */
    --Very-light-gray: hsl(0, 0%, 98%);
    --Very-light-grayish-blue: hsl(236, 33%, 92%);
    --Light-grayish-blue: hsl(233, 11%, 84%);
    --Dark-grayish-blue: hsl(236, 9%, 61%);
    --Very-dark-grayish-blue: hsl(235, 19%, 35%);

/* Dark */
    --Very-dark-blue: hsl(235, 21%, 11%);
    --Very-dark-desatured-blue: hsl(235, 24%, 19%);
    --Light-grayish-blue-dark: hsl(234, 39%, 85%);
    --Light-grayish-hover:hsl(236, 33%, 92%);
    --Dark-grayish-blue-dark: hsl(234, 11%, 52%);
    --Very-dark-grayish-blue-dark: hsl(233, 14%, 35%);
    --Very-dark-grayish-blue-two:hsl(237, 14%, 26%);

}

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
}

body {
    font-size: 18px;
    color: white;
    background-color: ${({ theme }) => theme.background};
    background-image: url(${({ theme }) => theme.image});
    background-repeat:no-repeat;
    background-size:100vw;
    transition: all .6s linear;
     
}

h1, h2, h3 {
    text-transform:uppercase;
    letter-spacing: 15px;
   
}

p {
    color: ${({ theme }) => theme.text}
}

`

export const lightTheme = {
    background: 'var(--Very-light-gray)',
    text: 'var(--Very-dark-grayish-blue)',
    image: `${Img2}`,
    list: 'var(--Very-light-gray)',
    border: 'var(--Light-grayish-blue)',
    shadow: 'var(--Very-light-grayish-blue)',
    circle:'var(--Very-light-grayish-blue)',
    all: 'var(--Bright-blue)'
}

export const darkTheme = {
    background: 'var(--Very-dark-blue)',
    text: 'var(--Light-grayish-blue)',
    image: `${Img1}`,
    list: 'var(--Very-dark-desatured-blue)',
    border: 'var(--Very-dark-grayish-blue-dark)',
    shadow: 'var(--Very-dark-blue)',
    circle:'var(--Very-dark-grayish-blue-dark)',
    all: 'var(--Bright-blue)'
}

export const theme = {
    size : {
        mobile: '375px',
        desktop:'1440px'
    }
}