import { KeyboardEvent, MutableRefObject } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

export function handleKeyDown(
  e: KeyboardEvent<HTMLDivElement>,
  onSubmit: () => void,
  inputRef: MutableRefObject<HTMLInputElement | null>,
) {
  if (e.key === 'Enter' && !e.ctrlKey) {
    e.preventDefault();
    onSubmit();
  }
  if (e.key === 'Enter' && e.ctrlKey && inputRef.current) {
    inputRef.current.value = inputRef.current.value + '\n';
  }
}

export function handleKeyDownHookForm(
  e: KeyboardEvent<HTMLDivElement>,
  handleSubmit: UseFormHandleSubmit<any>,
  onSubmit: (data: any) => void,
  inputRef: MutableRefObject<HTMLInputElement | null>,
) {
  if (e.key === 'Enter' && !e.ctrlKey) {
    e.preventDefault();
    handleSubmit(onSubmit)();
  }
  if (e.key === 'Enter' && e.ctrlKey && inputRef.current) {
    inputRef.current.value = inputRef.current.value + '\n';
  }
}
