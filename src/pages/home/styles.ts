import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 2rem 0;
`

export const HomeIntroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
`

export const HomeTitle = styled.div`
  h1 {
    font: ${(props) => props.theme.fonts.titles.xl};
    color: ${(props) => props.theme.colors.base.title};
    margin-bottom: 1rem;
  }

  p {
    font: ${(props) => props.theme.fonts.text.lg.regular};
    color: ${(props) => props.theme.colors.base.subtitle};
  }

  margin-bottom: 3rem;
`

export const HomeItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HomeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font: ${(props) => props.theme.fonts.text.md.regular};
    color: ${(props) => props.theme.colors.base.text};
  }

  & + & {
    margin-top: 1rem;
  }
`
