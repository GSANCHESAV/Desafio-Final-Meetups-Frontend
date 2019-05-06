import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 150px;
  text-align: left !important;
`;

export const Box = styled.div`
  width: 910px;
  display: flex;
  justify-content: flex-start !important;
  align-items: center;
  flex-flow: row wrap;
`;

export const Title = styled.h2`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: left;

  margin-top: 30px;
  margin-bottom: 20px;
`;
