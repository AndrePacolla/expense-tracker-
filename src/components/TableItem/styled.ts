import {styled} from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 5px;
    
`;
export const Category = styled.div<{color: string}>`

    display: inline-block;
    color: #fff;
    padding: 5px 10px;
    border-radius: 8px;
    background-color: ${props => props.color};

`;

export const Value = styled.div<{color: string}>`
    color: ${props => props.color}
`;