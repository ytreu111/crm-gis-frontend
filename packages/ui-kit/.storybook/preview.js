import '../src/style/index.scss'
import { AntdConfigProvider } from '../src'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  (Story) => (
    <AntdConfigProvider>
      <Story />
    </AntdConfigProvider>
  ),
]

export default preview
