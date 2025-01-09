import styled from "styled-components";


export const Container = styled.div`
    flex: 1;
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color:gray;
    text-align: center;

`;

export const Info = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? "#000"};
    margin-top: 15px;
`;