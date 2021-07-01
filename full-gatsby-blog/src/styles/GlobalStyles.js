import { createGlobalStyle } from 'styled-components'
import Regular from 'fonts/Muli-Regular.woff'
import Black from 'fonts/Muli-Black.woff'

export const colors = {
    light: '#fff',
    greyMd: '#1a1c20',
    greyLg: '#404040',
    blueSm: '#215973',
    blueMd: '#6fadc6',
    blueLg: '#d1e1e9'
}

export const darkTheme = {
    colors: {
        background: colors.greyMd,
        menuBackground: colors.blueSm,
        darkText: colors.blueLg,
        mainText: colors.blueMd,
        secText: colors.blueLg
    }
}

export const lightTheme = {
    colors: {
        background: colors.light,
        menuBackground: colors.blueLg,
        darkText: colors.blueSm,
        mainText: colors.blueMd,
        secText: colors.greyLg
    }
}

export const GlobalStyles = createGlobalStyle`
    :root{
        --maxWidth:1200px;
    }
   @font-face {
        font-family:'Muli Regular' ;
        src:local('Muli regular'),
        local('Muli Black'),
         url(${Regular}) format('woff');
         font-weight: 300;
         font-style: normal;
    }
     @font-face {
        font-family:'Muli Black' ;
        src:local('Muli Black'),
        local('Muli Black'),
         url(${Black}) format('woff');
         font-weight: 300;
         font-style: normal;
    }

    body{
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.secText};
        font-family:'Muli Regular', Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0 20px 80px 20px;
        transition: all 0.5s ease-in-out;
    }

    main{
        max-width: 960px;
        margin: 40px auto;
    }
    h1,h2,h4,h5,h3,h6{
        color: ${({ theme }) => theme.colors.mainText};
        font-family: 'Muli Black';
        letter-spacing: 1px;
        transition: all 0.5s ease-in-out;
    }
    p{
        font-size: 0.9rem;
        line-height: 1.2;

        @media(min-width:768px){
            font-size: 1.1rem;
            line-height: 1.5;
        }
    }
    h2{
        font-size: 1rem;
        letter-spacing: 1.8px;
        text-transform: uppercase;

        @media(min-width:768px){
            font-size: 1.5rem;
        }
    }

    h3{
        font-size: 0.8rem;
        letter-spacing: 1.5px;
        margin: 30px 0 -15px 0;

        @media(min-width:768px){
            font-size: 1.2rem;
        }
    }
    a{
        text-decoration: none;
    }
`