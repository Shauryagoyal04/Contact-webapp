import React, { use } from 'react'
import Navbar from './components/Navbar'
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
 import { ToastContainer, toast } from 'react-toastify';
import { db } from './config/firebase';
import { useEffect } from 'react';
import { useState } from 'react';
import { collection , getDocs, onSnapshot } from 'firebase/firestore';
import ContactCard from './components/ContactCard';
import AddandUpdateContact from './components/AddandUpdateContact';
import Modal from './components/Modal';
import Usedisclose from './hooks/Usedisclose';
const App = () => {

  const [contacts, setContacts] = useState([]);

  const {isOpen, onClose, onOpen} = Usedisclose();

  useEffect(() => {

    const getContacts = async () => {

      try{
        const contactsCollection = collection(db, "contacts");
        
        onSnapshot(contactsCollection, (snapshot) => {

        const filteredData = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        }
        
        );
        setContacts(filteredData);
        return filteredData;
        });
      } catch (error) {
        console.error("Error fetching contacts: ", error);
      }

    }
    getContacts();
  }
  , []);

  const filterContacts = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const contactsCollection = collection(db, "contacts");
        
        onSnapshot(contactsCollection, (snapshot) => {

        const filteredData = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        }
        
        );

        const filteredContacts = filteredData.filter(contact =>
          contact.name.toLowerCase().includes(searchTerm))
        setContacts(filteredContacts);


        return filteredContacts;
        });
  }
  return (
    <>
      <div className='  max-w-[370px] mx-auto px-4'>
            <Navbar />
            <div className='flex gap-2.5 relative items-center'>
              <FaSearch className='text-white text-2xl ml-2 absolute' />
              <input 
              onChange={filterContacts}
              type="text"
              placeholder='Search Contacts'
              className='flex-grow py-4 text-white h-10 rounded-md border border-white bg-transparent pl-9'
              /> 
              <div>
                <FaCirclePlus onClick={onOpen} className='text-white text-5xl'/>
              </div>
              
            </div>
            <div className='flex flex-col gap-4 mt-4 '>
              {
                contacts.map((contact) => (
                  <ContactCard key={contact.id} contact={contact}/>
                ))
              }
            </div> 
      </div>
      
        <AddandUpdateContact onClose={onClose} isOpen={isOpen} />
        <ToastContainer 
          position='bottom-center'
          autoClose={5000}
          />
      
    </>
    
  )
}

export default App