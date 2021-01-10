import styled from 'styled-components';

export const SectionInfo = styled.section`
  text-align:center;
  width:60%;
  margin:2rem auto;
  
  h1 {
    margin:2rem;
  }
`;

export const CategoryItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.3);
  
  width: 80%;
  margin: auto;

  .item {
    position: relative;
    background: #c8862d;
    overflow: hidden;
    cursor:pointer;

    &::after {
    content: '';
    position: absolute;
    display: block;
    background: inherit;
    opacity: 0.9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(2) translateX(-75%) translateY(-75%) rotate(-28deg);
    transition: transform 3s cubic-bezier(0.2, 1, 0.3, 1);
  }

  // Bring in main color overlay
  &:hover:after {
    transform: scale(2) translateX(0) translateY(0) rotate(-28deg);
  }

  // Scale image on hover
  &:hover .item-image {
    transform: scale(1.2);
  }

  // Bring in text on hover
  &:hover .item-text {
    opacity: 1;
    transform: translateY(0);
    z-index:9999;
  }

  &-image {
    height: auto;
    transform: translateZ(0);
    display: block;
    transition: transform 750ms cubic-bezier(0.2, 1, 0.3, 1);
  }

  &-image:before {
    content: '';
    display: block;
    padding-top: 75%;
    overflow: hidden;
  }

  &-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    line-height: 0;
  }

  &-text {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    text-align: center;
    z-index: 1;
    color: #fff;
    transform: translateY(-20%);
    transition: opacity 500ms cubic-bezier(0.2, 1, 0.3, 1),
    transform 500ms cubic-bezier(0.2, 1, 0.3, 1);
    transition-delay: 300ms;
  }

  &-text-wrap {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  &-text-title {
    font-size: 2rem;
    padding: 0 1rem;
    margin: 5px 0 0 0;
  }
}
`;