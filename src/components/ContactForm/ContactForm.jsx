import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  const [name, setName] = useState("Anshu");
  const [email, setemail] = useState("ansh@globalThis.com");
  const [text, settext] = useState("All is okay");




const onSubmit=(event)=>{
  event.preventDefault();
  setName(event.target[0].value);
  setemail(event.target[1].value);
  settext(event.target[2].value);
 
}

  


  return (
    <section className={styles.container}>

      <div className={styles.contact_form}>  
        <div className={styles.top_btn}>

      <Button text={"VIA SUPPORT CHAT"}
      icon={<MdMessage fontSize="24px"/>}/>

      <Button 
      
      text={"VIA CALL"}
      icon={<IoCall fontSize="24px"/>}/>
       
    
        </div>
        <Button 
        isOutline={true}
        text={"VIA EMAIL FORM"}
      icon={<MdEmail fontSize="24px"/>}/>
       
       <form onSubmit={onSubmit}>
        <div className={styles.form_control}>
            <label htmlFor="name" >Name</label>
        <input type="text" name="name" />
        </div>

        <div className={styles.form_control}>
            <label htmlFor="email" >E-mail</label>
        <input type="email" name="email" />
        </div>

        <div className={styles.form_control}>
            <label htmlFor="text" >Text</label>
        <textarea  name="text" rows="8" />
        </div>
        <div style={{
            display:"flex",
            justifyContent:"end"
        }
            
        }>
        <Button text="Submit Button" />

        </div>
        <div>
          {name + " " + email +" " +  text}
        </div>
       </form>
       

    </div>
      <div className={styles.container_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  )
}

export default ContactForm;
