import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
margin: 5px;
padding: 5px;
display: flex;
justify-content:space-space-around;
align-items:center;
min-width:289px;
min-height:70px;

border-radius:50px;

background-color: rgba(101, 148, 148, 0.171);

`

export const Image = styled.img`
width:50px;
height:50px;
border-radius:50px;
padding:2px;
`

export const Name = styled.p`
width:120px;
padding: 2px;
overflow:hidden;
margin: 0;

font-weight:bold;
`

export const Number = styled.span`
width:120px;
padding: 2px;
overflow:hidden;
`

export const FlexContact = styled.div`
display: flex;
flex-direction:column;
`

export const Button = styled.button`
width:25px;
height: 25px;
padding: 0;
margin:3px;
border-radius:50px;
outline:none;
border:none;
overflow:hidden;
cursor: pointer;
/* background-color:#b1bbdb */
`