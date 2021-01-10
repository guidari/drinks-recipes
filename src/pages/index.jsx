import Head from 'next/head'
import Link from 'next/link';

import { Background, About } from '../styles/pages/Home';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/index'
import CategoryList from '../components/CategoryList';

export default function Home() {
  
  return (
    <>
      <Background>
        <Head>
          <title>Drink Recipes</title>
        </Head>
        <Navbar />
        
        <About>
          <h1>It's not the drink itself, but moment inside your mind</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex odio, alias ducimus laborum maxime voluptatem voluptatibus sunt quam nobis minus ipsum impedit provident eligendi inventore.</p>

          <button>Learn More</button>
        </About>
      </Background>

      <CategoryList/>
      <Footer/>
    </>
  )
}