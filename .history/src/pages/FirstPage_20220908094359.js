import React from 'react'
import { useSelector } from 'react-redux'

const FirstPage = () => {
  const {isOpen} = useSelector((state) => state.modal)
  return (
    <div>
      {}
    </div>
  )
}

export default FirstPage
