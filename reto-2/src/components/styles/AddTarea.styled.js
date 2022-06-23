import styled from 'styled-components';

export const ContainerInput = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 0 22rem;
    align-items:center;
    text-align:left;
    background-color:${({theme}) => theme.list};
    border-radius:6px;

    @media(max-width: 375px) {

        align-items:center;
        margin: 0.5rem 9rem;
        width:50%;
    }
`

export const Input = styled.input`
    font-size:18px;
    padding: 1rem 18rem;
    padding-left:1rem;
    background-color: ${({theme}) => theme.list};
    color:${({theme}) => theme.text};
    margin: 0;
    border:none;
    border-radius: 6px;
    border:0;

    &:focus {
        outline:none;
    }

    @media(max-width: 375px) {

        align-items:center;
        margin: 0.5rem 9rem;
        width:50%;
    }
`

