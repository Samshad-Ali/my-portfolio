import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { FaGit, FaGithub, FaInstagram, FaLinkedin, FaSadCry } from "react-icons/fa";
import { motion } from "framer-motion";
import {addDoc,collection} from 'firebase/firestore'
import { db } from "../Firebase";
import vg from "../assets/vg.png";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btn,setBtn]=useState(false);

  const submitHandler = async(e) => {
    e.preventDefault();
    setBtn(true)
    try{
      await addDoc(collection(db,'contacts'),{name,email,message})
      toast.success("Message Sent");
      setName('')
      setEmail('')
      setMessage('')
      setBtn(false)
    }catch(e){
        toast.error(e)
        setBtn(false)
    }
  };
  const animations = {
    one: {initial:{ x: "-100%", opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }};
  return (
    <div id="contact">
      <section>
        <form>
          <h2>Contact Me</h2>
          <motion.input
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: "0%", opacity: 1 }}
           onChange={(e)=>{setName(e.target.value)}}
            value={name}
            required
            type="text"
            name="name"
            placeholder="Name"
          />
          <motion.input {...animations.one}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            value={email}
            name="email"
            placeholder="Email"
          />
          <motion.textarea
          {...animations.one}
            name="message"
            rows={"10"}
            cols={"30"}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            placeholder="Message"
            required
          ></motion.textarea>
          <motion.button 
          initial={{y:'-100%',opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{delay:.1}}
          disabled={btn}
          className={btn?'disableBtn':''}
          onClick={submitHandler}>Send</motion.button>
        </form>
      </section>
      <aside>
        <h2>Connect Me</h2>
        <img src={vg} alt="connect with me" />
        <footer>
          {" "}
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/samshad-ali-406525256/"
          >
            {" "}
            <FaLinkedin />{" "}
          </a>
          <a target={"_blank"} href="https://www.instagram.com/___sam___102/">
            {" "}
            <FaInstagram />{" "}
          </a>
          <a target={"_blank"} href="https://github.com/Samshad-Ali">
            {" "}
            <FaGithub />{" "}
          </a>
        </footer>
      </aside>
    </div>
  );
};

export default Contact;
