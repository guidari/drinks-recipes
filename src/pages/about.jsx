import Head from 'next/head'
import StarIcon from '@material-ui/icons/Star';
import PersonIcon from '@material-ui/icons/Person';
import { AboutAwards, AboutFeedbacks, AboutIntro, Container } from '../styles/pages/about';

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/index'
import Image from 'next/image';

export default function Home() {
  
  return (
    <>
        <Head>
          <title>Drink Recipes - About Us</title>
        </Head>
        <Navbar />
        
       <Container>
         <AboutIntro>
          <div>
            <h1>Client First</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum dolores quas quasi minima consequatur est vitae labore fugit maxime?</p>
          </div>
              
          <Image
            src="/images/beer_celebration.svg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </AboutIntro>

        <AboutAwards>
          <div>
            <StarIcon/>
            <h3>Award 1</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <StarIcon/>
            <h3>Award 2</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div>
            <StarIcon/>
            <h3>Award 3</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </AboutAwards>

        <AboutFeedbacks>
          <h1>Feedbacks</h1>
          <div className="container">

            <div className="box">
              <div>
                <PersonIcon/>
                <p>User 1</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolores voluptatibus consectetur vel in dignissimos id ea! Cumque, error architecto?</p>
            </div>
            
            <div className="box">
              <div>
                <PersonIcon/>
                <p>User 2</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolores voluptatibus consectetur vel in dignissimos id ea! Cumque, error architecto?</p>
            </div>

            <div className="box">
              <div>
                <PersonIcon/>
                <p>User 3</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolores voluptatibus consectetur vel in dignissimos id ea! Cumque, error architecto?</p>
            </div>

            <div className="box">
              <div>
                <PersonIcon/>
                <p>User 4</p>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dolores voluptatibus consectetur vel in dignissimos id ea! Cumque, error architecto?</p>
            </div>

            

          </div>
         
          
        </AboutFeedbacks>
       </Container>
      <Footer/>
    </>
  )
}