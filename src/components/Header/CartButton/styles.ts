import styled from 'styled-components'

export const CartButtonContainer = styled.div`
  background: ${(props) => props.theme.colors.brand.yellow.light};
  color: ${(props) => props.theme.colors.brand.yellow.dark};

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const CartCounter = styled.div`
  background: ${(props) => props.theme.colors.brand.yellow.dark};
  color: ${(props) => props.theme.colors.base.white};
  font: ${(props) => props.theme.fonts.text.sm.bold};

  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;

  /* span {
    margin-top: 2px;
  } */

  position: absolute;
  top: -7px;
  right: -7px;
`
