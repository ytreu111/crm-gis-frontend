import type { Meta, StoryFn } from '@storybook/react'
import { NumberInput } from './NumberInput'

export default {
  title: 'UI-KIT/Atoms/NumberInput',
  component: NumberInput,
} as Meta<typeof NumberInput>

const Template: StoryFn<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
)
export const Default = Template.bind({})

Default.args = {
}
