import Modal from "./Modal"
import {Formik , Form, Field} from "formik";
import { db } from '../config/firebase';
import { collection , addDoc, updateDoc, doc } from 'firebase/firestore';
import { toast } from "react-toastify";

const AddandUpdateContact = ({contact , isUpdate , onClose , isOpen}) => {

    const addContact = async (values) =>{
        try{
            const contactRef = collection(db,"contacts");
            await addDoc(contactRef,values);
            toast.success("Contact added successfully!");
            onClose();
        }catch(error){
            console.log(error)
        }
        
    }
    const updateContact = async (values,id) =>{
        try{
            const contactRef = doc(db,"contacts",id );
            await updateDoc(contactRef,values);
            toast.success("Contact updated successfully!");
            onClose();
        }catch(error){
            console.log(error)
        }
        
    }
  return (
    <div>
        <Modal onClose={onClose} isOpen={isOpen}>
            <Formik
                initialValues={isUpdate ? {name: contact.name, email: contact.email} :
                {name: "", email: ""}}
                onSubmit={(values) =>{
                    console.log(values);    
                    isUpdate ? updateContact(values, contact.id) :
                    addContact(values)
                }}
            >
                <Form className=" flex flex-col gap-4">
                    <div className=" flex flex-col gap-1">
                        <label htmlFor="name" >Name</label>
                        <Field name = "name" className="h-10 border rounded-md" /> 
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <label htmlFor="email" >Email</label>
                        <Field  name = "email" className="h-10 border rounded-md " /> 
                    </div>
                    <button type = "submit "  className="bg-orange-400 self-end px-4 text-white text-xm h-10 rounded-md">{isUpdate? "Update":"Add"} Contact</button>
                </Form>
            </Formik>
        </Modal>
    </div>
  )
}

export default AddandUpdateContact