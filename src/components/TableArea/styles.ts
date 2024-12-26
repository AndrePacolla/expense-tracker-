import styled from "styled-components";


export const Table = styled.table`
        width: 100%;
        padding: 20px;
        border: 2px solid rgba(48, 42, 42, 0.21) ;
        border-radius: 10px;
        margin-top: 20px;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
        background-color:rgba(225, 223, 122, 0.57) ;

`;


export const TableHeadColumn = styled.th <{width?: number}>`
        width: ${props => props.width ? `${props.width}px` : "auto"};
        padding:10px 0;
        text-align: left;
`;