import { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { CloseOutlined } from '@ant-design/icons'

export default { component: Button } satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Size: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2" style={{ width: '250px' }}>
      <Button size="small" {...args}>Test</Button>
      <Button size="middle" {...args}>Test</Button>
      <Button size="large" {...args}>Test</Button>
    </div>
  ),
}

export const Colors: Story = {
  render: (...args) => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button color="default" variant="solid" {...args}>Solid</Button>
        <Button color="default" variant="outlined" {...args}>Outlined</Button>
        <Button color="default" variant="filled" {...args}>Filled</Button>
        <Button color="default" variant="text" {...args}>Text</Button>
        <Button color="default" variant="link" {...args}>Link</Button>
      </div>
      <div className="flex gap-2">
        <Button color="additional" variant="solid" {...args}>Solid</Button>
        <Button color="additional" variant="outlined" {...args}>Outlined</Button>
        <Button color="additional" variant="filled" {...args}>Filled</Button>
        <Button color="additional" variant="text" {...args}>Text</Button>
        <Button color="additional" variant="link" {...args}>Link</Button>
      </div>
    </div>
  ),
}

export const Default: Story = {
  args: {
    size: 'middle',
    children: 'Button',
    icon: <CloseOutlined />,
    color: 'default',
    variant: 'solid',
    onClick: () => {
      console.log(123)
    }
  },
}
