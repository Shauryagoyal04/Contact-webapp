import { useState } from 'react';
import React from 'react';

const Usedisclose = () => {
    const [isOpen, setIsOpen] = useState(false);
        
          const onOpen = () => {
            setIsOpen(true);
          }
        
          const onClose = () => {
            setIsOpen(false);
          }
  return {isOpen,onClose,onOpen} ;
}

export default Usedisclose