import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 256px;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.colors.base.card};

  padding: 0 1rem 1rem;
`

export const CoffeeCardContainerImg = styled.div`
  width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: -20px;

  margin-bottom: 0.75rem;
`

export const CoffeeCardTagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CoffeeCardTag = styled.span`
  background: ${(props) => props.theme.colors.brand.yellow.light};
  color: ${(props) => props.theme.colors.brand.yellow.dark};
  font: ${(props) => props.theme.fonts.components.tag};

  padding: 0.3rem 0.5rem;
  border-radius: 999px;

  & + & {
    margin-left: 0.25rem;
  }
`

export const CoffeeCardContent = styled.div`
  margin-top: 1rem;
  text-align: center;

  > h4 {
    font: ${(props) => props.theme.fonts.titles.sm};
    color: ${(props) => props.theme.colors.base.subtitle};

    margin-bottom: 0.5rem;
  }

  > p {
    font: ${(props) => props.theme.fonts.text.sm.regular};
    color: ${(props) => props.theme.colors.base.label};
  }

  margin-bottom: 2rem;
`

export const CoffeeCardFooter = styled.footer`
  width: 100%;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > p {
    > span {
      font: ${(props) => props.theme.fonts.text.sm.regular};
    }

    font: ${(props) => props.theme.fonts.titles.md};
  }
`

export const CoffeeCardFooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const CoffeeCartButton = styled.button`
  background: ${(props) => props.theme.colors.brand.purple.dark};
  color: ${(props) => props.theme.colors.base.card};
  cursor: pointer;

  width: 2.375rem;
  height: 2.375rem;

  border: none;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.colors.brand.purple.normal};
  }
`
