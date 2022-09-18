import React,{useRef,useState,useContext} from 'react'
import emailjs from "emailjs-com"
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { ThemeContext } from '../../context'
const Contact = () => {
  const formRef = useRef();
  const [done,setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);

    emailjs.sendForm('service_njmj13d', 'template_t9i33we', formRef.current, 'NPExOkgm7ob6D1abX')
      .then((result) => {
       
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      if(!done){
        formRef.current.reset();
      }
  };

  return (
    <div className='c'>
    <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left-wrapper'>
        <h1 className='c-title'> Get in Touch</h1>
        <div className='c-info'>
          <div className='c-info-item'>
            <img src={Phone} alt="phone"className='c-icon'/>
            +91-8898134164
          </div>
          <div className='c-info-item'>
            <img src={Email} alt="phone"className='c-icon'/>
            heymeezan@gmail.com
          </div>
          <div className='c-info-item'>
            <img src={Address} alt="phone"className='c-icon'/>
            Mumbai, India
          </div>
    
        </div>
      </div>
      
        <div className='c-right-wrapper'>
          <p className="c-desc">
            <b>Do you have any queries?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" style={{backgroundColor : darkMode && "#333"}} placeholder='Name' name='user_name'/>
            <input type="text" style={{backgroundColor : darkMode && "#333"}} placeholder='Subject' name='user_subject'/>
            <input type="text" style={{backgroundColor : darkMode && "#333"}} placeholder='Email' name='user_email'/>
            <textarea rows="5" style={{backgroundColor : darkMode && "#333"}} placeholder="Message" name='message'/>
            <button>Submit</button>
            
          </form>
          {
              done && (
                <>
                <br></br>
                <div className='c-submit'>
              <h2>Thanks!</h2>
              <p>The form was submitted successfully.</p>
              </div>
              </>
              )
            }
        </div>
      </div>
    </div>
    
    
  )
}

export default Contact