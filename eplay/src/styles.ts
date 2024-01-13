import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  branca: '#fff',
  preta: '#000',
  texto_Bar: '#c5018e',
  rosa_claro: '#ffedf7',
  rosa_escuro: '#f398ca',
  fundo: '#f4e4f4'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
 }

 body {
  background-color: ${Cores.fundo};
  color: ${Cores.texto_Bar};
  padding-top: 40px;
 }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
