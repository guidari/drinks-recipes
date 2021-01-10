import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer';
import { DrinkContainer } from './style'


export default function Drink({ data }) {
  const router = useRouter();
  const drink = data.drinks;
  console.log(drink)

  // if (router.isFallback) {
  //   return <p>Carregando</p>
  // }

  return (
    <>
      <Head>
        <title>Drink Recipes - {router.query.strDrink}</title>
      </Head>
      <Navbar />
      <a onClick={() => router.back()}>
        <h3>Back</h3>
      </a>

      <DrinkContainer>
        {drink.map(drinkInfo => {
          return (
            <>
            <div key={drinkInfo.idDrink} className="container">
            
              <div>
                <h2>{drinkInfo.strDrink}</h2>
                <img key={drinkInfo.idDrink} src={drinkInfo.strDrinkThumb} alt={drinkInfo.strDrinkThumb} /> <br />
              </div>
          
              <div className="ingredients">
                <h2>Ingredients</h2>
                <br/>
                <p>{drinkInfo.strIngredient1} {drinkInfo.strMeasure1}</p>
                <p>{drinkInfo.strIngredient2} {drinkInfo.strMeasure2}</p>
                <p>{drinkInfo.strIngredient3} {drinkInfo.strMeasure3}</p>
                <p>{drinkInfo.strIngredient4} {drinkInfo.strMeasure4}</p>
                <p>{drinkInfo.strIngredient5} {drinkInfo.strMeasure5}</p>
                <p>{drinkInfo.strIngredient6} {drinkInfo.strMeasure6}</p>
                <p>{drinkInfo.strIngredient7} {drinkInfo.strMeasure7}</p>
                <p>{drinkInfo.strIngredient8} {drinkInfo.strMeasure8}</p>
                <p>{drinkInfo.strIngredient9} {drinkInfo.strMeasure9}</p>
                <p>{drinkInfo.strIngredient10} {drinkInfo.strMeasure10}</p>
                <p>{drinkInfo.strIngredient11} {drinkInfo.strMeasure11}</p>
                <p>{drinkInfo.strIngredient12} {drinkInfo.strMeasure12}</p>
                <p>{drinkInfo.strIngredient13} {drinkInfo.strMeasure13}</p>
                <p>{drinkInfo.strIngredient14} {drinkInfo.strMeasure14}</p>
                <p>{drinkInfo.strIngredient15} {drinkInfo.strMeasure15}</p>
              </div>
            </div>

            <div className="instructions">
              <h2>Instructions</h2>
              <p>{drinkInfo.strInstructions}</p>
              <h2>Glass</h2>
              {drinkInfo.strGlass}
            </div>
            <hr/>
            </>
          )
        })}
      </DrinkContainer>
      <Footer />
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
  const { strDrink } = context.params;

  const response = await fetch(` https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${strDrink}`);
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}