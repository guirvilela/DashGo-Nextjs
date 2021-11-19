import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...props },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        ref={ref}
        _hover={{
          bgColor: 'gray.900',
        }}
        {...props}
      />

      {!!error && <FormErrorMessage> {error.message} </FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
