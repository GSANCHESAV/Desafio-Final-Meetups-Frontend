import styled from 'styled-components';

export const Container = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
`;

export const Search = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.05);

  width: 910px;
  height: 42px;
  border-radius: 6px;

  padding-left: 14px;
  padding-right: 14px;
  margin-top: 32px;

  input {
    width: 100%;
    background-color: transparent !important;
    border: 0;
    font-size: 17px;
    margin-left: 10px;
    color: white !important;
  }

  svg {
    opacity: 0.3 !important;
    color: #fff;
  }
`;

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 160px;

  background-color: #ccc;

  width: 910px;
  border-radius: 6px;
  padding: 14px;

  a {
    width: 100%;
    color: #222;
    text-decoration: none;
    font-family: Helvetica-Bold;
    font-size: 18px;
    margin: 10px;
    vertical-align: center;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 20px;

      div {
        display: flex;
        align-items: center;

        img {
          width: 40px;
          height: 40px;
          object-fit: cover;

          margin-right: 20px;
        }
      }
      p {
        font-size: 14px;
        font-family: Helvetica;
        color: #222;
      }
    }
  }

  a:hover {
    opacity: 0.5;
  }
`;
