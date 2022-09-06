import styled from 'styled-components'

export const RadioContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;

  input {
    opacity: 0;
    position: absolute;
    top: 1px;
    border: none;
    width: 1px;
    height: 1px;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input:checked ~ label {
    border-color: ${(props) => props.theme.colors.brand.purple.normal};
    background: ${(props) => props.theme.colors.brand.purple.light};
  }
`

export const RadioContent = styled.label`
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 1rem;

  background: ${(props) => props.theme.colors.base.button};
  border: 1px solid ${(props) => props.theme.colors.base.button};
  border-radius: 6px;

  label {
    visibility: hidden;
    height: 100%;
    width: 100%;
  }

  div,
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    color: ${(props) => props.theme.colors.brand.purple.normal};
  }

  span {
    font: ${(props) => props.theme.fonts.components.button.sm};
    color: ${(props) => props.theme.colors.base.text};
    text-transform: uppercase;
  }

  div + span {
    margin-left: 0.75rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.base.hover};
    border-color: ${(props) => props.theme.colors.base.hover};

    span {
      color: ${(props) => props.theme.colors.base.subtitle};
    }
  }
`
