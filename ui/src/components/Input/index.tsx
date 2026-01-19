import { Input as AntInput } from 'antd';

interface IProps {
  value: string;
  onChange: (value: string, name?: string) => void;
  className?: string,
  placeholder?: string,
  name?: string,
}
const index = (props: IProps) => {
  const {
    onChange,
    value,
    placeholder,
    className,
    name
  } = props;

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event?.currentTarget?.value, name as string);
    };

  return (
   <AntInput 
    value={value}  
    onChange={onChangeValue}
    className={className}
    placeholder={placeholder}
  />
  )
}

export default index