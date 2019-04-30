import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  border: 0;

  font-family: Helvetica-Bold;
  font-size: 16px;
  text-align: left;

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Box = styled.div`
  width: 315px;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    margin-bottom: 10px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    span {
      font-family: Helvetica-Bold;
      margin-top: 20px;

      font-size: 16px;
      text-align: left;
    }

    input {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 20px;

      background-color: transparent !important;
      border: 0;

      color: white !important;
      opacity: 0.5;
      font-family: Helvetica;
      font-size: 20px;
      text-align: left;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    opacity: 0.6;
    font-family: Helvetica;
    font-size: 16px;

    margin: 10px;
  }
`;
