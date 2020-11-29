import React, { useState } from 'react'
import { defaultCardLine } from '../utils'
import CardLine from './CardLine'

const Card = () => {

  const [lines, setLines] = useState([...Array(80).keys()]
    .map((n) => ({ ...defaultCardLine, line: n })))
  return (
    lines.map(line => <CardLine line={line} />)
  )
}

export default Card