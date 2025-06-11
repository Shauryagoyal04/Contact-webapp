import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from "react-icons/ai";


const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <>{
        isOpen && (
          <>

            <div className='relative items-center justify-center z-50 bg-white min-h-[200px] max-w-[370px] mx-auto mt-20 rounded-lg shadow-lg p-4'>
                <div className='flex justify-end items-center mb-4'>
                    <AiOutlineClose onClick = {onClose} className='text-2xl'/>
                </div>
                {children}
            </div>
            <div className='absolute z-40 top-0 backdrop-blur-xs w-screen h-screen' onClick={onClose}></div>

          </>
        )
    }
    </>,
  document.getElementById('modal-root')
  )
}

export default Modal