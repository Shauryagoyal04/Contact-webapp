import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {db} from '../config/firebase';
import { collection,deleteDoc, doc } from "firebase/firestore";
import AddandUpdateContact from "./AddandUpdateContact";
import Usedisclose from "../hooks/Usedisclose";
import { toast } from "react-toastify";

const ContactCard = ({contact}) => {
  const {isOpen, onClose, onOpen} = Usedisclose();
  const deleteContact = async (id) => {
    try {
      const contactRef = doc(db, "contacts",id);

      await deleteDoc(contactRef);
      toast.success("Contact deleted successfully!");
    }catch (error) {
      console.error("Error deleting contact: ", error);
    }
  }

  return (
    <>
    <div key={contact.id} className='flex p-2 rounded-lg gap-3 bg-[#FFEAAE] items-center justify-between w-full'>
              <div className='flex gap-2 items-center '>
                <CgProfile className='text-[#F6820C] text-5xl '/>
                <div className=''>
                  <h2 className='leading-4 text-xl'>{contact.name}</h2>
                  <p className=''>{contact.email}</p>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <RiEditCircleLine onClick={onOpen} className='text-3xl ' />
                <MdDelete onClick={() => deleteContact(contact.id)} className='text-3xl text-purple-700'/>
              </div>
            </div>
            <AddandUpdateContact contact = {contact} isUpdate isOpen={isOpen} onClose={onClose} />
          </>
  )
}

export default ContactCard