import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e5556e;
  border-radius: 24px;
  border: 0;

  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: left;

  margin-top: 30px;
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  opacity: 0.2;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  display: inline-block;
  position: relative;

  &:checked {
    opacity: 1;
    background-color: #e5556e;
  }
`;

export const Box = styled.div`
  width: 315px;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h2 {
    font-family: Helvetica-Bold;
    font-size: 24px;
    color: #ffffff;
    text-align: left;

    margin-bottom: 15px;
  }

  p {
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;

    margin-bottom: 15px;
  }

  h4 {
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #ffffff;
    text-align: left;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 15px;

      span {
        font-family: Helvetica;
        font-size: 18px;
        color: #ffffff;
        text-align: left;
        padding-left: 10px;
      }
    }
  }
`;
