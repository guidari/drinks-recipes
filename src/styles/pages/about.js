import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;

    .section-1 {
      grid-template-columns: 1fr;
    }
    .section-2 {
      grid-template-columns: 1fr;
    }
  }
`;

export const AboutIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  div {
    padding: 0 2rem;
  }

  h1 {
    margin: 2rem 0;
    font-size: 36px;
  }

  p {
    font-size: 24px;
  }
  @media (max-width: 768px) {
      grid-template-columns: 1fr;
  }
`;

export const AboutAwards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin-top: 2rem;

  div {
    text-align:center;
  }

  svg {
    font-size: 100px;
  }

  h3 {
    margin: 1rem 0;
  } 
  @media (max-width: 768px) {
      grid-template-columns: 1fr;
  }
`;

export const AboutFeedbacks = styled.div`
  h1 {
    margin: 4rem 0 2rem 0;
    text-align: center;
  }

  .container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
  }

  .box {
    margin: 1rem;
  }

  .box > div {
    display: flex;
    place-items: center;
    margin-bottom:1r768pxem;

    svg {
      font-size: 36px;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      margin-left: 12px;
    }
  }

  @media (max-width: 996px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;