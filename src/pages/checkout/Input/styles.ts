import styled from 'styled-components'

interface InputWrapperProps {
  maxW?: number
  flex?: number
}

export const InputWrapper = styled.div<InputWrapperProps>`
  max-width: ${(props) => props.maxW && `${props.maxW}px`};
  flex: ${(props) => props.flex};

  & + & {
    margin-top: 1rem;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  height: 2.625rem;

  input {
    width: 100%;
  }
`

export const OptionalLabel = styled.span`
  position: absolute;
  right: 0.75rem;
  top: calc(50% - (0.75rem / 2));
  user-select: none;

  color: ${(props) => props.theme.colors.base.label};
  font: normal italic 0.75rem Roboto;
`
