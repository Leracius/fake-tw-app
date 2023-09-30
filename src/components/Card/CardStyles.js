import styled from "styled-components"

export const CommentContainer = styled.div`
    border-bottom: 3px solid #545454;
    width: 96%;
    h1{
        color: #545454;
    }
    h4{
        font-size: 10px;
        font-weight: 300;
    }
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }
    button{
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: end;
        gap: 5px;
    }
`