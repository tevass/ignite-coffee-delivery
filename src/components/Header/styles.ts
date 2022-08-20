import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Location = styled.div`
  background: ${(props) => props.theme.colors.brand.purple.light};
  color: ${(props) => props.theme.colors.brand.purple.dark};

  span {
    margin-top: 4px;
    margin-left: 3px;
    font: bold normal 0.875rem/1.3 'Roboto';
  }

  border-radius: 4px;
  padding: 0.5rem;

  display: flex;
  align-items: center;

  margin-right: 10px;
`
