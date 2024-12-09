import type { Meta, StoryFn } from '@storybook/react'
import { Input } from './Input'

export default {
  title: 'UI-KIT/Atoms/TextInput',
  component: Input,
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => (
  <Input {...args} />
)
export const Default = Template.bind({})

Default.args = {}
