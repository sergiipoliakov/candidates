import { Button as AntButton } from 'antd';

export interface ButtonType {
  type?: 'default' | 'primary',
  children: React.ReactNode,
  className?: string,
  disabled?: boolean,
  active?: boolean
  onClick?: () => void
  htmlType?: 'button' | 'submit' | 'reset' | undefined,
}

const Button = (props: ButtonType) => {
  const {
    children,
    type = "default",
    className = '',
    onClick,
    htmlType,
    disabled
  } = props
  return (
    <AntButton
      className={className}
      type={type}
      onClick={onClick}
      htmlType={htmlType}
      disabled={disabled}

    >
      {children}
    </AntButton>
  )
}

export default Button