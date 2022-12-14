import React from 'react'

const Modal = () => {
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>買い物かごを全て空にしますか？</h4>
        <div className='btn-container'>
          <button className='btn confirm-btn'>OK</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
