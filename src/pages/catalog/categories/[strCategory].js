import { useRouter } from 'next/router';
import { CategoryItems, SectionInfo } from './style'
import Link from 'next/link';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/index'

// import CategoryList from '../../../components/CategoryList/index';
import Head from 'next/head';


export default function Category({ data }) {
  const router = useRouter();
  const drinks = data.drinks;
  // console.log(drinks)

  // if (router.isFallback) {
  //   return <p>Carregando</p>
  // }

  return (
    <>
      <Head>
          <title>Drink Recipes - {router.query.strCategory}</title>
      </Head>
      <Navbar />
      <SectionInfo>
        <h1>{router.query.strCategory}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos suscipit obcaecati animi tenetur, architecto asperiores!</p>
      </SectionInfo>
     
      {/* <Link href="/">
        <a>
          <h3>Home</h3>
        </a>
      </Link> */}

      <CategoryItems>
        {drinks.map(drink => {
          return (                
            <Link href={`http://localhost:3000/catalog/drink/${drink.strDrink}`} key={drink.idDrink}>
              <div className="item">
                <div className="item-image">
                  <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb}/>
                </div>
                <div className="item-text">
                  <div className="item-text-wrap">
                    <h2 className="item-text-title">{drink.strDrink}</h2>
                  </div>          
                </div>
              </div>
            </Link>
          )
        })}
      </CategoryItems>
      <Footer/>
    </>
  );
}

// export const getStaticPath = async () => {
//   const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=list`);
//   const categories = await response.json();

//   const paths = categories.map(category => {
//     return {
//       params: { strCategory: strCategory }
//     }
//   })

//   return {
//     paths,
//     fallback: true,
//   }
// }

export const getServerSideProps = async (context) => {
  const { strCategory } = context.params;

  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${strCategory}`);
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}