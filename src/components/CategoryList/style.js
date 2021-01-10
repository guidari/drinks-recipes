import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-gap:2rem;

    width: 60%;
    margin: auto;
    cursor: pointer;

    div {
      border-radius:10px;
      width:100%;
      height:20rem;
      transition: 0.2s; 
    }
    div:hover {
      background:rgba(255,255,255, 0.1);
      transform: scale(1.01)
    }

    @media (max-width: 960px) {
      grid-template-columns: 1fr ;
      width: 80%;
    }
`;

export const InfoCategory = styled.div`
  position: relative;

  section {
    position: absolute;
    bottom: 0;
    left: 0;  
    padding:2rem     
  }
`;