import { Input, InputNumber } from 'antd'
import { FormInput } from '../../field-input'

export const fieldInputResolver = (type) => {
  switch (type) {
    case 'string': {
      return (props) => <Input {...props} status={props.error && 'error'} />

    }
    case 'float':
    // TODO
    case 'integer': {
      return (props) => <InputNumber {...props} status={props.error && 'error'} />
    }
    case 'date': {
      return FormInput.DatePicker
    }
    case 'datetime': {
      return FormInput.DatetimePicker
    }
    case 'time': {
      return FormInput.TimePicker
    }
  }
}