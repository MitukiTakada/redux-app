import { is } from 'immer/dist/internal'
import React from 'react'
import { useSelector } from 'react-redux'

const FirstPage = () => {
  const {isOpen} = useSelector((state) => state.modal)
  return (
    <div>
      {is}
    </div>
  )
}

export default FirstPage
