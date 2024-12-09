import styled, { css } from 'styled-components'
import { Input } from 'antd'

const inputStyle = css`
  font-size: 14px;
  
  &::placeholder {
    color: ${(p) => p.theme.colors.text.secondary};
  }
`

export const STextInput = styled(Input)`
  height: 40px;
  border: 1px solid transparent;
  outline: none;
  align-items: center;
  border-radius: 4px;
  padding: 10px 16px;
  background-color: ${(p) => p.theme.colors.bg.secondary};
  color: ${(p) => p.theme.colors.text.primary};

  &:hover, &:focus, &:has(input:focus) {
    border-color: ${(p) => p.theme.colors.bg.additional};
  }

  ${inputStyle};

  & .ant-input {
    ${inputStyle};
  }

  .ant-input-suffix {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .ant-input-clear-icon {
    color: ${(p) => p.theme.colors.text.primary} !important;
  }
`