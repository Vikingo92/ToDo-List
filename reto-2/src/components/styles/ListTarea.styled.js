import styled from 'styled-components';


export const ListBack = styled.div`
    align-items:center;
    margin: 2rem 22rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.list};
    box-shadow: ${({theme}) => theme.shadow} 0px 8px 20px;

    @media(max-width: 375px) {

        align-items:center;
        margin: 0.5rem 9rem;
        width:50%;
    }
`

export const StyledList = styled.div`
    display:flex;
    justify-content:space-between;
    padding:1rem 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    transition: all .6s;
    

    p {
        text-align:left;

    }

    @media(max-width: 375px) {

        align-items:center;
        margin: 0.5rem 9rem;
        width:50%;
    }
`

export const Tarea = styled.p`
    text-align:left;
    display:flex;
    align-items:left;
    cursor:pointer;
`

export const Icon = styled(Tarea)`
    font-size:24px;
    color: ${({theme}) => theme.circle};
    
    &:hover {
        color:grey;
    }
`

export const IconCircle = styled(Icon)`

    &:hover {
        color:var(--Bright-blue);
    }
`

export const InputCircle = styled(IconCircle)`
    padding-left:3rem;

`

export const NoToDo = styled.h3`
    padding-top:1rem;
`

export const EditIcon = styled(IconCircle)`
    padding-left:1rem;
    justify-content: space-between;

    &:hover {
        color:var(--Check-background);

    }
`

export const Filter = styled.div`
    padding:1.5rem 1rem;
    display:flex;
    justify-content:space-between;
    font-size:14px;
    color:${({theme}) => theme.border};
    
    p {
        cursor:pointer;

        &:hover {
            color:${({theme}) => theme.text};
            font-weight:700;
            transition: all .5s out-ease;
        }

    }
   
`
export const All = styled.p`
    color:${({theme}) => theme.all};
    font-weight:700;

    

`



// --Bright-blue: hsl(220, 98%, 61%);
// --Check-background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);