import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 8fr 5fr;
  column-gap: 2rem;

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

export const InputGroup = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ResumeContainer = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme.colors.base.card};
  border-radius: 6px 44px 6px 44px;
`

export const ResumeContent = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.base.button};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font: ${(props) => props.theme.fonts.text.sm.regular};
      color: ${(props) => props.theme.colors.base.text};
    }

    span.currency {
      font: ${(props) => props.theme.fonts.text.md.regular};
    }

    &.total span {
      font: ${(props) => props.theme.fonts.text.lg.bold};
      color: ${(props) => props.theme.colors.base.subtitle};
    }

    & + div {
      margin-top: 0.75rem;
    }
  }
`

export const SubmitOrder = styled.button`
  margin-top: 2.5rem;
  border: none;
  text-align: center;
  width: 100%;

  background: ${(props) => props.theme.colors.brand.yellow.normal};
  border-radius: 6px;
  padding: 0.75rem 1rem;

  font: ${(props) => props.theme.fonts.components.button.lg};
  color: ${(props) => props.theme.colors.base.white};
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.brand.yellow.dark};
  }
`
