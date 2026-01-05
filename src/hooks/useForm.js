
import { useState } from 'react'

export default function useForm(initialValue) {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e) => {
    setValue(e.target.value)
  }


  return {
    value,
    onChange: handleChange
  }
}