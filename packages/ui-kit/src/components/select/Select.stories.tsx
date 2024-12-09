import type { Meta, StoryFn } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'UI-KIT/Atoms/Select',
  component: Select,
} as Meta<typeof Select>

const Template: StoryFn<typeof Select> = (args) => (
  <Select {...args} />
)
export const Default = Template.bind({})

Default.args = {

}
