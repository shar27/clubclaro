import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  
  const form = useRef();
  const [text, setText] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();


    // process.env.YOUR_TEMPLATE_ID
    emailjs.sendForm('service_39bg1xq', 'template_p2m0anq', form.current, '_zvfCNAUf1DOGw6zi')
      .then((result) => {
          console.log(result.text);
          setText('Thank you, your email has been received!')
      }, (error) => {
          console.log(error.text);
      });
  };  

  
  
  return (
    <div className="hero min-h-screen bg-base-200 relative">
      <Image className='' layout='fill' src='/hero.jpg' />
  <div className="hero-content text-center ">
    <div className="text-white absolute top-0 left-0 xl:top-48 xl:left-96">
      <h1 className="text-5xl font-bold py-1" >CLUB CLARO</h1>
      <p className="px-2 text-xl font-bold py-2">WE ARE LAUNCHING A BRAND NEW CLUB RIGHT HERE IN POZNAN.</p>
      <p className='text-xl p-2 font-bold'>FIRST 50 SIGN UP's WILL GET 15% OF ALL DRINKS AND GET FREE ACCESS</p>
      <form className='' ref={form} onSubmit={sendEmail}>
      <p className='text-xl text-white font-bold p-2'>{text}</p>
    
      <section>
      <label className='px-2 font-bold'>Email</label>
      <input className='w-80 border-2 border-black p-2 rounded-sm' type="email" name="user_email" />
      </section>
     
      <section className='pt-5 flex justify-center'>
      <input className='w-44 p-4 bg-red-500 text-white font-bold rounded-sm cursor-pointer' 
      type="submit" value="Sign Up" />
      </section>
    </form>
    </div>
    
  </div>
</div>
  )
}
