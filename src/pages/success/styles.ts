import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding-top: 5rem;

  > div h3 {
    font: ${(props) => props.theme.fonts.titles.lg};
    color: ${(props) => props.theme.colors.brand.yellow.dark};
  }

  > div p {
    font: ${(props) => props.theme.fonts.text.md.regular};
    color: ${(props) => props.theme.colors.base.subtitle};
  }
`

export const SuccessContent = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-width: 526px;
    width: 100%;

    padding: 1px;
    border-radius: 6px 36px 6px 36px;

    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.brand.yellow.normal},
      ${(props) => props.theme.colors.brand.purple.normal}
    );

    > div {
      border-radius: 5px 35px 5px 35px;
      padding: 2.5rem;
      background: ${(props) => props.theme.colors.base.background};
    }
  }
`

export const OrderInfo = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  column-gap: 0.75rem;
  align-items: center;

  p {
    font: ${(props) => props.theme.fonts.text.md.regular};
  }

  span {
    font: ${(props) => props.theme.fonts.text.md.bold};
  }

  & + & {
    margin-top: 2rem;
  }
`
