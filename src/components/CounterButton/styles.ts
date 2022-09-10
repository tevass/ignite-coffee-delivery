import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 38px;
  width: 72px;
  border-radius: 6px;

  background: ${(props) => props.theme.colors.base.button};
  padding: 0.2rem 0.3rem;

  gap: 0.3rem;
`

export const Button = styled.button`
  background: transparent;
  border: none;

  width: 14px;
  height: 16px;

  font-size: 14px;
  color: ${(props) => props.theme.colors.brand.purple.normal};
  cursor: pointer;

  &:not(:disabled):hover {
    color: ${(props) => props.theme.colors.brand.purple.dark};
  }

  &:disabled {
    cursor: not-allowed;
  }

  > span {
    font: ${(props) => props.theme.fonts.text.md.regular};
  }
`
