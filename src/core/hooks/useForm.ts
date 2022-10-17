import { useState } from 'react'

/**
 * a helper for global onChange state data
 * @param multiple - for set multiple field value
 * @param reset - for reset state data to default value
 */
function useForm<InitialState>(
  initialValue: InitialState
): [InitialState, <Value>(formField: string, formValue?: Value | InitialState) => void] {
  const [values, setValues] = useState(initialValue)

  return [
    values,
    (formField, formValue) => {
      if (formField === 'reset') {
        return setValues(initialValue)
      }

      if (formField === 'multiple') {
        return setValues(previousValues => ({
          ...previousValues,
          ...formValue
        }))
      }

      return setValues(currentValues => ({
        ...currentValues,
        [formField]: formValue
      }))
    }
  ]
}

export default useForm
