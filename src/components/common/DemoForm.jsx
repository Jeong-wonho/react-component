import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import EmailInput from './input/EmailInput';
import PhoneInput2 from './input/PhoneInput2';
import Button from './button/Button';

const DemoForm = () => {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <EmailInput name="email" label="Email" />
        <PhoneInput2 name="phone" label="Phone" />
        <Button label={"submit"} variant={"primary"}/>
      </form>
    </FormProvider>
  );
};

export default DemoForm;