import styled from "styled-components";

export const CardContainer = styled.div`
    margin: 10px;
    /* border-radius: 10px; */
    background-color: #262626;
    display: flex;
    justify-content: center; 
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
    
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
            font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
            @media only screen and (max-width: 600px) {
                border: none;
                background-color: #141414e0;
            }
        }
    }
`
export const NameContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 5px 0 5px;
    color: #545454;
    
    input{
        border: none;
        outline: none;
        font-size: 24px;
        padding-left: 10px;
        font-weight: 700;
        background-color: transparent;
        @media only screen and (max-width: 600px) {
        width: 80%;
    }
    }
`

export const ButtonContainer = styled.div`
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