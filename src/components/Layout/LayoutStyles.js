import { styled } from "styled-components"

export const MainContainer = styled.main`
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3px;
    width: 500px;
    min-height: 40px;
    @media only screen and (max-width: 600px) {
        width: 100vw;
    }
`