import React from 'react'
import styled from 'styled-components'


const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Lato';
    padding: 20px 30px; 
`

const StyledHeadingGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const StyledHeading = styled.span`
    font-family: 'PT Sans';
    font-size: 22px;
    padding: 15px 20px;
`

const StyledListingContainer = styled.div`
    border: 1px solid #e6e6e6;
`

const StyledListing = styled.div`

`


class JobListing extends React.Component {
    state = {

    }

    renderListing = () => {

    }

    render() {
        return (
            <StyledContainer>
                <StyledHeadingGroup>
                    <StyledHeading>
                        Open Jobs
                    </StyledHeading>
                    <StyledHeading>
                        Jobs In Progress
                    </StyledHeading>
                    <StyledHeading>
                        Closed Jobs
                    </StyledHeading>
                </StyledHeadingGroup>
                <StyledListingContainer>

                </StyledListingContainer>
            </StyledContainer>
        )
    }
}

export default JobListing