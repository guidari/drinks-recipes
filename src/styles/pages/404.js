import styled from 'styled-components';

export const Container = styled.div`
  width:90%;
  height: 100vh;
  margin:auto;
  display: flex;
  flex-direction:column;
  place-content:center;
  
  h1 {
    text-align: center;
    margin: 3rem 0;
  }
  h2 {
    text-align:center;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    h1 {
    text-align: center;
    padding: 2rem 0;
  }
  }
`;