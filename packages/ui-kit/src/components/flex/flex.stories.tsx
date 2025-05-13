import { Meta, StoryObj } from '@storybook/react'
import { Flex } from './flex'

export default { component: Flex } satisfies Meta<typeof Flex>

type Story = StoryObj<typeof Flex>

export const Default: Story = {
  args: {
    vertical: true,
    justify: 'space-between',
    align: 'center',
    gap: 2,
    children: (
      <>
        <div>1</div>
        <div>2</div>
      </>
    ),
  },
}
