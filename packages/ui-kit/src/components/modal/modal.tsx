import { FC, ReactNode } from 'react'
import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd'
import cx from 'classnames'
import styles from './modal.module.scss'
import { Button } from '../button'

type PickedAntdModalProps = Pick<AntdModalProps,
  'width' | 'afterClose' | 'afterOpenChange' | 'destroyOnClose' | 'mask' | 'zIndex' | 'keyboard' | 'maskClosable'
>

interface InternalModalProps {
  header?: ReactNode
  footer?: ReactNode
  title?: ReactNode
  icon?: ReactNode
  onOk?: () => void
  onCancel?: () => void
  okText?: string
  cancelText?: string
  okLoading?: boolean
  children?: ReactNode
}

export interface ModalProps extends InternalModalProps, PickedAntdModalProps {
  open?: boolean
}

const ModalContent: FC<InternalModalProps> = (
  {
    header,
    title,
    icon,
    children,
    footer,
    onOk,
    onCancel,
    okText = 'Сохранить',
    okLoading,
    cancelText = 'Отменить',
  },
) => {
  return (
    <div className={cx('modal-content', styles['modal-content'])}>
      {(title || icon || header) && (
        <div className={cx('modal-header', styles['modal-header'])}>
          {header}
          {(title || icon && !header) && (
            <div className={cx('modal-header-content', styles['modal-header-content'])}>
              {icon && <div className={cx('modal-header-icon', styles['modal-header-icon'])}>{icon}</div>}
              {title && <div className={cx('modal-header-title', styles['modal-header-title'])}>{title}</div>}
            </div>
          )}
        </div>
      )}
      {children && <div className={cx('modal-body', styles['modal-body'])}>{children}</div>}
      {(footer || onOk) && (
        <div className={cx('modal-footer', styles['modal-footer'])}>
          {footer}
          {onOk && (
            <div className={cx('modal-footer-content', styles['modal-footer-content'])}>
              <Button onClick={onCancel}>{cancelText}</Button>
              <Button onClick={onOk} loading={okLoading}>{okText}</Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export const Modal: FC<ModalProps> = (
  {
    header,
    footer,
    title,
    icon,
    onOk,
    onCancel,
    okText,
    cancelText,
    okLoading,
    children,
    maskClosable = true,
    ...antdProps
  },
) => {
  return (
    <AntdModal
      {...antdProps}
      closeIcon={null}
      footer={false}
      maskClosable={maskClosable}
      onCancel={onCancel}
      classNames={{
        mask: styles['ant-modal-mask'],
        wrapper: styles['ant-modal-wrapper'],
        content: styles['ant-modal-content'],
        footer: styles['ant-modal-footer'],
      }}
    >
      <ModalContent
        header={header}
        footer={footer}
        title={title}
        icon={icon}
        onOk={onOk}
        onCancel={onCancel}
        okText={okText}
        cancelText={cancelText}
        okLoading={okLoading}
      >
        {children}
      </ModalContent>
    </AntdModal>
  )
}