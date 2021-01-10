import styled from 'styled-components';

// import background from '../../images/background.jpg';
export const Background = styled.div`
  flex: 1;
  background: url('https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260') no-repeat center;
  background-size: cover;
`;

export const About = styled.div`
  width: 700px;
  height: 500px;

  padding-top: 5rem;
  padding-left: 10rem;
  margin: 25px;
  h1 {
    margin: 1.5rem 0;
    font-size: 48px;
  }
  p {
    margin: 1.5rem 0;
    font-size:18px;

  }
  button {
    margin: 1.5rem 0;
    padding:1rem;
    
    /* border: none;  */
    border-radius: 50px;
    border: 2px solid #c8862d;
    color: #fff;
    font-weight:600;
    background-color:rgba(200, 134, 45, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    padding-top: 0rem;
    padding-left: 0;
    h1 {
    font-size: 36px;
    }
  }
`;
