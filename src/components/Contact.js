import React, { useState } from 'react';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
 // Import EmailJS
 import emailjs from 'emailjs-com';
 //tostify
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    emailjs.send('service_5rdo5ay', 'template_zmnee4e', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, 'vI07VkkLcZyXg0BYi')
    .then((response) => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (err) => {
      toast.error('Failed to send message. Please try again.');
      console.error('Failed to send email. Error: ', err);
    });
    
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='text'
              name='name' // Add name attribute
              value={formData.name} // Bind value
              onChange={handleChange} // Handle change
              placeholder='Your name'
              required
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type='email'
              name='email' // Add name attribute
              value={formData.email} // Bind value
              onChange={handleChange} // Handle change
              placeholder='Your Email'
              required
            />
            <textarea 
              className='bg-transparent border-b-4 py-12 pb-0 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
              name='message' // Add name attribute
              value={formData.message} // Bind value
              onChange={handleChange} // Handle change
              placeholder='Your message'
              required
            />
            <button className='btn btn-lg' type='submit'> {/* Add type submit */}
              Send message
            </button>
          </motion.form>
        </div>
      </div>
       {/* Toast notifications */} 
       <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </section>
  );
};

export default Contact;
