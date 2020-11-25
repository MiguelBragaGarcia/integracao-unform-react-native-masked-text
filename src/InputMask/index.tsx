import React, {forwardRef, useState, useCallback} from 'react';
import {TextInputMask} from 'react-native-masked-text';

import Input, {Props} from '../Input';

interface InputMaskProps extends Props {
  type: string;
}

interface InputRef {
  focus(): void;
}

const InputMask: React.ForwardRefRenderFunction<InputRef, InputMaskProps> = (
  {type, ...rest},
  ref,
) => {
  const [value, setValue] = useState('');
  const [rawValue, setRawValue] = useState('');
  const handleOnChangeText = useCallback((maskedValue, unmaskedValue) => {
    setValue(maskedValue);
    setRawValue(unmaskedValue);
  }, []);
  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={value}
      onChangeText={handleOnChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref,
        ...rest,
      }}
      {...rest}
    />
  );
};

export default forwardRef(InputMask);
