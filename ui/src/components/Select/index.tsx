import { Select as AntSelect } from 'antd';

type Options = {
  value?: string,
  label?: string
}

interface IProps {
  defaultValue?: string;
  value?: string
  className?: string,
  onChange: (value: string, name?: string) => void,
  options?: Options[];
  placeholder?: string;
  name?: string;
}

const { Option } = AntSelect;

const Select = (props: IProps) => {
  const {
    defaultValue,
    value,
    className,
    options,
    onChange,
    placeholder,
    name
  } = props;

  const onChangeValue = (value: string) => {
    onChange(value, name);
  };

  return (
    <AntSelect
      className={className}
      value={value}
      defaultValue={defaultValue}
      onChange={onChangeValue}
      placeholder={placeholder}
      // placeholder="Select a person"
    >
      {options?.map((item) => (
        <Option
          item={item}
          key={item.value}
        >
          {item.label}
        </Option>
      ))}
    </AntSelect>
  )
}

export default Select