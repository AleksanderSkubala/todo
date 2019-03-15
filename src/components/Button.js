import styled from 'styled-components';

const Button = styled.button`
    height: 100%;
    cursor: pointer;
    outline: none;

    color: ${({theme})=>theme.colors.neutral};
    font-weight: ${({theme})=>theme.fonts.semiBold};
    font-family: 'Montserrat',sans-serif;

    background: none;
    border: 2px solid ${({theme})=>theme.colors.neutral};

    transition: all .2s ease-in-out;
    will-change: all;

    :hover {
        background: ${({theme})=>theme.colors.neutral};
        color: ${({theme})=>theme.colors.white};
    }
`

export default Button