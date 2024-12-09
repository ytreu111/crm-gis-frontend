import { FC, ReactNode } from 'react'

export interface ButtonProps {
  children?: ReactNode
  onClick?: () => void
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button {...props} />
  )
}