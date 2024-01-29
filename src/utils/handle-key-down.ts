import { KeyboardEvent, MutableRefObject } from 'react';

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
