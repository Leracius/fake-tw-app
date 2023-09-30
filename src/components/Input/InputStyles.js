import styled from "styled-components";

export const CardContainer = styled.div`
    margin: 10px;
    border-radius: 10px;
    width: 500px;
    background-color: #262626;
    display: flex;
    justify-content: center;   
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        textarea{
            width: 95%;
            height: 100px;
            font-size: 18px;
            border: 2px solid #545454;
            border-radius: 5px;
            background-color: transparent;
            outline: none; 
            resize: none; 
            overflow: hidden;
        }
    }
`
export const NameContainer = styled.div`
    width: 490px;
    display: flex;
    justify-content: flex-start;
    padding: 0;
    color: #545454;
    input{
        border: none;
        outline: none;
        font-size: 24px;
        padding-left: 10px;
        font-weight: 700;
        background-color: transparent;
    }
`

export const ButtonContainer = styled.div`
    width: 500px;
    display: flex;
    justify-content: end;
    button{
        background-color: transparent;
        color: #545454;
        &:hover{
            color: white;
        }
    }
`