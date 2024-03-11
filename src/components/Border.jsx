import styled from "styled-components";

const Border = styled.div`
    border: 4px solid ${(props)=>props.color ? props.color : 'black'};
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 100%;
`;

export default Border