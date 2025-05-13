import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './modal'
import { DeleteIcon } from '@workspace/icons'

export default { component: Modal } satisfies Meta<typeof Modal>

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    open: true,
    title: 'Заголовок модального окна',
    children: ('text'),
    icon: <DeleteIcon />,
    onOk: () => {},
  },
}


