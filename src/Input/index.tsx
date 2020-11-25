import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {TextInputProps} from 'react-native';
import {useField} from '@unform/core';

import {
  Container,
  TextInput,
  Icon,
  AntDesignIcon,
  FontAwesomeIcon,
} from './styles';

export interface Props extends TextInputProps {
  name: string;
  icon?: string;
  antDesignIcon?: string;
  fontAwesomeIcon?: string;
  containerStyle?: {};
  iconStyle?: {};
}
interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, Props> = (
  {
    name,
    icon,
    antDesignIcon,
    fontAwesomeIcon,
    containerStyle = {},
    iconStyle = {},
    ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);

  const inputValueRef = useRef<InputValueReference>({value: defaultValue});

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
    });
  }, [fieldName, registerField]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Container style={containerStyle} isErrored={!!error}>
      {icon && <Icon name={icon} size={20} color="#fff" style={iconStyle} />}
      {antDesignIcon && (
        <AntDesignIcon
          name={antDesignIcon}
          size={20}
          color="#fff"
          style={iconStyle}
        />
      )}
      {fontAwesomeIcon && (
        <FontAwesomeIcon
          name={fontAwesomeIcon}
          size={20}
          color="#fff"
          style={iconStyle}
        />
      )}
      <TextInput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
