import Link from 'next/link';
import apiCategory from './apiCategory';
import { Container, InfoCategory } from './style';

export default function CategoryList() {

  return (
    <Container>
      {apiCategory.map(prop => {
        return (                  
          <Link href={`http://localhost:3000/catalog/categories/${prop.title}`}>
            <div key={prop.title} style={{
              flex: 1,
              backgroundImage: `url(${prop.img})`,
              backgroundSize: 'cover'
            }}>
              <InfoCategory>
                <section>
                    <h2>
                      {prop.title}
                    </h2>
                  <p>{prop.description}</p>
                </section>
              </InfoCategory>
            </div>
          </Link>
        )
      })}
    </Container>
  )
}