import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  background: var(--purple);
}


 :root {
  --yellow-dark: #c47f17;
  --yellow: #dbac2c;
  --light-yellow: #f1e9c9;
  
  --purple-dark: #4b2995;
  --purple: #8047f8;
  --purple-light: #EBE5F9;
  
  --base-title: #272221;
  --base-subtitle: #403937;
  --base-text: #574f4d;
  --base-label: #8d8686;
  --base-hover: #d7d5d5;
  --base-button: #e6e5e5;
  --base-input: #ededed;
  --base-card: #f3f2f2;

  --background: #fafafa;
  --white: #ffffff;

 }
 
 h1, h2, h3, h4 {
  font-family: "Baloo 2", cursive;
  line-height: 1.3rem;
 }

 p {
  font-family: 'Roboto', sans-serif;
 }


`;
