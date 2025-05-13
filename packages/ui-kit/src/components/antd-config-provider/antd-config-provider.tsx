import type { FC, PropsWithChildren } from 'react'
import type { ThemeConfig } from 'antd'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import locale from 'antd/locale/ru_RU'
import 'dayjs/locale/ru'
import '@ant-design/v5-patch-for-react-19'

dayjs.locale('ru')

const theme: ThemeConfig = {
  hashed: false,
  token: {
    // @ts-expect-error ожидалось число
    fontSize: 'var(--text-2)',
    fontFamily: 'inherit',
    controlHeight: 40,
    lineHeight: 1.5,
    colorSuccess: 'var(--color-success)',
    colorWarning: 'var(--color-warning)',
    colorDanger: 'var(--color-danger)',
  },
}

export const AntdConfigProvider: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider theme={theme} locale={locale}>{children}</ConfigProvider>
)

