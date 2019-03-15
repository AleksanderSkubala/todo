import styled from 'styled-components';

const Header = styled.div`
    font-weight: ${({theme})=>theme.fonts.semiBold };
    font-size: 1.55em;
    color: ${({theme})=>theme.colors.orange};
    padding: 20px;

    border-bottom: .5px solid ${({theme})=>theme.colors.border};
`

export default Header