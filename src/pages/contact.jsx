import Head from 'next/head'
import Link from 'next/link';

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/index'

export default function Home() {
  
  return (
    <>
        <Head>
          <title>Drink Recipes</title>
        </Head>
        <Navbar />
        
       <h1>Contact</h1>
      <Footer/>
    </>
  )
}