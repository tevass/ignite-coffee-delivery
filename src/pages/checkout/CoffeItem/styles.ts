import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.25rem;

  padding-bottom: 2rem;

  & + & {
    padding-top: 2rem;
    border-top: 1px solid ${(props) => props.theme.colors.base.button};
  }

  > span {
    font: ${(props) => props.theme.fonts.text.md.bold};
    color: ${(props) => props.theme.colors.base.text};
  }
`

export const CoffeeItemImg = styled.div`
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`

export const CoffeeItemContent = styled.div`
  flex: 1;

  > span {
    font: ${(props) => props.theme.fonts.text.md.regular};
  }

  > div {
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  &,
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  height: 38px;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  background: ${(props) => props.theme.colors.base.button};
  padding: 0.5rem;

  gap: 0.25rem;

  div {
    color: ${(props) => props.theme.colors.brand.purple.normal};
  }

  span {
    color: ${(props) => props.theme.colors.base.text};
    font: ${(props) => props.theme.fonts.components.button.sm};
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme.colors.base.hover};
  }

  &:hover div {
    color: ${(props) => props.theme.colors.brand.purple.dark};
  }

  &:hover span {
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`
