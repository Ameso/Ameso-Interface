import React from 'react'
import styled from 'styled-components'

import { ConnectButton } from './connectButton'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #e6e6e6;
  padding: 1.5rem 1rem;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-between;
`

const StyledNavIcon = styled.div``

const StyledNavItem = styled.div`
  font-family: 'Lato';
`

const StyledNavLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  > * + * {
    margin-left: 24px;
  }
`

const StyledNavRight = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items:center;
  > * + * {
    margin-left: 24px;
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledHeader>
        <StyledNav>
          <StyledNavLeft>
            <StyledNavIcon>Ameso</StyledNavIcon>
            <StyledNavItem>Listings</StyledNavItem>
            <StyledNavItem>Vote</StyledNavItem>
          </StyledNavLeft>
          <StyledNavRight>
            <ConnectButton/>
          </StyledNavRight>   
        </StyledNav>
      </StyledHeader>
    )
  }
}

export default Header
