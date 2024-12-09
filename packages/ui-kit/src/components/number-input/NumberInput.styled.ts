import styled from 'styled-components'
import { InputNumber } from 'antd'

export const SNumberInput = styled(InputNumber)`
  width: 100%;
  height: 40px;
  display: inline-flex;
  box-shadow: none;
  outline: none;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: ${(p) => p.theme.colors.bg.secondary};

  &:hover, &.ant-input-number-focused {
    border-color: ${(p) => p.theme.colors.bg.additional};
  }

  .ant-input-number-input-wrap {
    width: calc(100% - 22px);
    height: 100%;
    padding: 10px 16px;
  }

  .ant-input-number-input {
    font-size: 14px;
    color: ${(p) => p.theme.colors.text.primary};

    &::placeholder {
      color: ${(p) => p.theme.colors.text.secondary};
    }
  }

  .ant-input-number-handler {
    border-inline-start: 1px solid ${(p) => p.theme.colors.bg.additional};

    svg {
      width: 10px;
      height: 10px;
      color: ${(p) => p.theme.colors.text.primary};
    }
  }

  .ant-input-number-handler-down {
    border-block-start: 1px solid ${(p) => p.theme.colors.bg.additional};
  }
`