import styled from "styled-components";

export const Teams = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Team = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2.5vw;
  >span {
    font-size: 4.3vw;
    font-weight: 500;
  }
`;

export const Flag = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
`;

export const Time = styled.div`
  font-size: 3.7vw;
  font-weight: 500;
  color: dimgray;
`;
