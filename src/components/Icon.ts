import styled from 'styled-components'

interface IconProps {
  color: string
}

export const Icon = styled.div<IconProps>`
  background: ${(props) => props.color};
  color: ${(props) => props.theme.colors.base.white};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 999px;
`
