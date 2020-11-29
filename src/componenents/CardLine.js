import React, { useState } from 'react'
import { defaultCardLine } from '../utils'

const CardLine = ({ line }) => {
  const [values, setValues] = useState(line)
  return (
    <div>
      {Object.entries(values)
        .map((value, checked) => {
          console.log(value, checked)
          return (
            <>
              <input type="checkbox" name={line.line} defaultChecked={value[1]} /> {value}
            </>
          )

        }


        )}
    )
    </div>
  )
}

export default CardLine