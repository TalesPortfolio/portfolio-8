import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${Cores.rosa_escuro};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${Cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Logo = styled.a`
  img {
    height: 40px;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinksItem = styled.li`
  margin-right: 16px;
`

export const LinkCard = styled.a`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    border-radius: 50px;
    margin-left: 16px;
  }
`
