import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 8fr 4fr;
  column-gap: 1rem;

  padding: 2rem 0;

  > div {
    > h4 {
      font: ${(props) => props.theme.fonts.titles.xs};
      color: ${(props) => props.theme.colors.base.subtitle};
      margin-bottom: 1rem;
    }
  }
`

export const WrapperOrder = styled.div`
  padding: 2.5rem;

  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px;

  & + & {
    margin-top: 0.75rem;
  }
`

interface WrapperHeaderProps {
  iconColor: string
}

export const WrapperHeader = styled.div<WrapperHeaderProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  div:first-child {
    margin-right: 0.5rem;
    color: ${(props) => props.iconColor};
  }

  margin-bottom: 2rem;
`

export const WrapperHeaderContent = styled.div`
  h4 {
    font: ${(props) => props.theme.fonts.text.md.regular};
    color: ${(props) => props.theme.colors.base.subtitle};
    margin-bottom: 0.15rem;
  }

  p {
    font: ${(props) => props.theme.fonts.text.sm.regular};
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`
