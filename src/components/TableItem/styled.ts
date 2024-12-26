import {styled} from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 5px;
    
`;
export const Category = styled.div<{color: string}>`

    display: inline-block;
    padding: 5px 10px;
    background-color: ${props => props.color};
    border-radius: 8px;
    color: #fff

`;

export const Value = styled.div<{color: string}>`
    color: ${props => props.color}
`;