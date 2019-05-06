import styled from 'styled-components';

import Files from 'react-files';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

export const Box = styled.div`
  width: 315px;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 100px 0;

  img {
    margin-bottom: 10px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    h4 {
      margin-top: 20px;
      margin-bottom: 10px;
    }

    label {
      font-family: Helvetica-Bold;
      margin-top: 20px;
      margin-bottom: 20px;

      font-size: 16px;
      text-align: left;

      input,
      textarea {
        width: 100%;
        max-height: 100px;
        margin-top: 10px;

        background-color: transparent !important;
        border: 0;

        color: white !important;
        opacity: 0.5;
        font-family: Helvetica;
        font-size: 20px;
        text-align: left;
      }
    }
  }
`;

export const Preferences = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h4 {
    margin-bottom: 5px;
  }

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

export const ImagesArea = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const File = styled(Files)`
  div {
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const Drop = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  border: 1px dashed #999999;
  border-radius: 4px;
  opacity: 0.8;
  color: #fff;
  cursor: pointer;
`;
