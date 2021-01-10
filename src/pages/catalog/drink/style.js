import styled from 'styled-components';

export const DrinkContainer = styled.div`

  width: 60%;
  margin: auto;

  img {
    width: 100%;
  }
  p {
    margin: 1rem 0;
  }
  h2 {
    text-align:center;
    margin: 2rem 0;
  }

  .container {
    display: grid;
    grid-template-columns: 40% 60%;
  }
  
  .ingredients {
    padding: 0 2rem;
  }

  .instructions {
    width: 80%;
    text-align:center;
    margin: 2rem auto;
  }
  @media (max-width: 768px) {
    width: 90%;
    .container {
    display: grid;
    grid-template-columns: 1fr;
  }
  .instructions {
    width: 100%;
  }
  }
`;