import styled, { createGlobalStyle } from 'styled-components'
import { Select } from 'antd'

export const SelectGlobalStyle = createGlobalStyle`
  .ant-select-dropdown {
    background-color: ${(p) => p.theme.colors.bg.primary};
  }

  .ant-select-dropdown .ant-select-item-option {
    color: ${(p) => p.theme.colors.text.primary};
    font-size: 14px;
    font-weight: 400;
  }

  .ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: ${(p) => p.theme.colors.text.actions};
    background-color: ${(p) => p.theme.colors.bg.secondary};
    font-weight: 400;
  }

  .ant-select-item-option-content {
    display: flex;
    align-items: center;
    padding: 10px 16px;
  }
`

export const SSelect = styled(Select).attrs({
  className: 'ant-select-customize-input',
})`
  width: 100%;
  height: 40px;

  border-radius: 4px;
  border: 1px solid transparent;
  background-color: ${(p) => p.theme.colors.bg.primary};

  &:hover, &.ant-select-open {
    border-color: ${(p) => p.theme.colors.bg.additional};
  }

  .ant-select-selector {
    width: 100%;
    height: 100%;
    padding: 0 16px;
  }

  .ant-select-selection-search {
    position: absolute !important;
    inset-inline-start: 16px !important;
    inset-inline-end: 16px !important;
    width: auto !important;
  }

  .ant-select-selection-placeholder {
    inset-inline-start: 16px !important;
    inset-inline-end: 16px !important;
    padding: 0 !important;
    font-size: 14px;
    color: ${(p) => p.theme.colors.text.primary};
  }

  .ant-select-selection-search-input {
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    font-size: 14px;
    color: ${(p) => p.theme.colors.text.primary};
  }

  &.ant-select-open .ant-select-selection-item,
  .ant-select-selection-item {
    font-size: 14px;
    color: ${(p) => p.theme.colors.text.primary};
  }

  .ant-select-clear,
  .ant-select-arrow {
    width: auto;
    height: auto;
    transform: translateY(-50%);
    color: ${(p) => p.theme.colors.text.primary};

    svg {
      width: 14px;
      height: 14px;
    }
  }
`