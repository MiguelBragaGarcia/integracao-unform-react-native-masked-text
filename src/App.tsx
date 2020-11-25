import {FormHandles} from '@unform/core';
import {Form} from '@unform/mobile';
import React, {useCallback, useRef} from 'react';
import {Button, StatusBar, TextInput} from 'react-native';
import Input from './Input';
import InputMask from './InputMask';

declare const global: {HermesInternal: null | {}};

interface FormData {
  teste: string;
  outroTeste: string;
}

const App = () => {
  const formRef = useRef<FormHandles>(null);
  const outroTesteRef = useRef<TextInput>(null);

  const handleDoSomething = useCallback((data: FormData) => {
    console.log(data);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Form ref={formRef} onSubmit={handleDoSomething}>
        <Input
          name="teste"
          placeholder="Digite algo"
          style={{color: '#000'}}
          containerStyle={{borderColor: '#000'}}
          onSubmitEditing={() => outroTesteRef.current?.focus()}
        />

        <InputMask
          ref={outroTesteRef}
          name="outroTeste"
          type="cpf"
          placeholder="Digite algo"
          style={{color: '#000'}}
          containerStyle={{borderColor: '#000'}}
        />
        <Button onPress={() => formRef.current?.submitForm()} title="Enviar" />
      </Form>
    </>
  );
};

export default App;
