import styled from 'styled-components'

const StyledConnectButton = styled.button` 
    font-family: 'PT Sans';
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    cursor: pointer;
    padding: .7rem;
    margin: 0;
    border: 0;
    background-color: #e6e6e6;

    &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image:linear-gradient(to right, rgb(232, 227, 209), rgb(242, 233, 201));
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    &:hover, &:focus, &:active {
        color: black;
    }
    &:hover:before, &:focus:before, &:active:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
`

export const ConnectButton = (props) => {
    return (
        <StyledConnectButton>
            Connect Wallet
        </StyledConnectButton>
    )
}