import styled from 'styled-components';

export const TextBox = styled.div`
  width: 210px !important;
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: flex-start !important;
  padding-left: 20px;
`;

export const IconBox = styled.div`
  width: 80px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const CircleBox = styled.div`
  width: 40px !important;
  height: 40px !important;
  border-radius: 20px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: #e5556e !important;
  i {
    font-size: 20px;
    color: #fff;
  }
`;

export const Card = styled.div`
  width: 290px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end !important;
  align-items: center;
  margin-right: 20px;

  background-image: url(${props => (props ? props.image : 'white')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -50px;
  border-radius: 6px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:nth-child(n + 4) {
    margin-top: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  img {
    position: relative;
    width: 290px;
    height: 110px;
  }

  div {
    width: 290px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 0 0 6px 6px;

    h4 {
      font-family: Helvetica-Bold;
      font-size: 16px;
      color: #222222;
      text-align: left;
      margin-top: 3px;
      margin-bottom: 3px;
    }

    p {
      font-family: Helvetica;
      font-size: 14px;
      color: #999999;
      text-align: left;
      margin-top: 3px;
      margin-bottom: 3px;
    }
  }
`;
