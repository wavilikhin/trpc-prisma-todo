import { ChangeEventHandler, MouseEventHandler } from 'react'

export const InputForm = ({ value, onChange, onSave }:
  {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>,
    onSave: MouseEventHandler<HTMLButtonElement>
  }) => {
  return (
    <>
      <input value={value} onChange={onChange} />
      <button type="submit" onClick={onSave}>Add example</button>
    </>
  )
}