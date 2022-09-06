import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.25rem;

  padding-bottom: 2rem;

  & + & {
    border-top: 1px solid ${(props) => props.theme.colors.base.button};
  }
`
