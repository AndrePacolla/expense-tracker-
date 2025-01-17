import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`; 

export const MonthArea = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 29px;
    cursor: pointer;
`;
export const MonthTitle = styled.div`
    flex: 1;
    font-size: 19px;
    text-align: center;
    font-weight: bold;
`;
export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;