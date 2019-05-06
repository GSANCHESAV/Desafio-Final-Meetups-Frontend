import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 900px !important;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 40px 0 150px 0;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 352px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-image: url(${props => (props ? props.image : '#fff')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -50px;
`;

export const InfoBox = styled.div`
  width: 325px !important;
  margin-top: 40px;

  h2 {
    font-family: Helvetica-Bold;
    font-size: 24px;
    color: #ffffff;
    text-align: left;
  }

  h4 {
    font-family: Helvetica;
    font-size: 14px;
    color: #999999;
    text-align: left;
    margin-top: 5px;
    font-weight: normal;
  }

  h4:last-of-type {
    margin-top: 30px !important;
  }

  p {
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;
    margin-top: 20px;
  }

  h5 {
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 14px;
    color: #ffffff;
    line-height: 24px;
    text-align: left;
    font-weight: normal;

    margin-top: 10px !important;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5556e;
  border-radius: 25px;
  border: 0;

  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: left;

  margin-top: 30px;
`;
