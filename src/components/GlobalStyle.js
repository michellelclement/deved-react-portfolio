import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
  }

  button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
      background-color: #23d997;
      color: white;
    }
  }

  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  h3 {
    color: white;
  }

  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  h4 {
    font-weight: bold;
    color: #23d997;
  }

  a {
    font-size: 1.1rem;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }

  li {
    color: #ccc;
  }

  ul {
    list-style: none;
  }

  input {
    font-weight: bold;
    font-family: 'Inter', sans-serif;
  } 

  @media (max-width: 1300px) {
    button {
      margin: 2rem 0rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 375px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 280px) {
    h2 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 0.8rem;
    }

    p {
      font-size: 0.7rem;
    }
  }


  

`

export default GlobalStyle;