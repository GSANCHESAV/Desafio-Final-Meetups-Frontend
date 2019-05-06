import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #e5556e;
  margin-bottom: 12px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    div {
      margin-left: 15px;

      a {
        text-decoration: none;
        font-family: Helvetica-Bold;
        font-size: 16px;
        color: #ffffff;
        text-align: center;

        margin-left: 15px;
        margin-right: 15px;
      }
    }
  }

  a img:last-child {
    padding: 2px;
    width: 24px;
    height: 24px;
  }

  div button {
    background-color: transparent;
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    margin-left: 15px;
    margin-right: 25px;

    border: 0;

    cursor: pointer;
  }
`;
