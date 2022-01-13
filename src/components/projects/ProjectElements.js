import styled from 'styled-components';


export const ProjectContainer = styled.div`
display: flex;
flex-direction: row;



`;

export const ProjectBubble = styled.a`
display: flex;
border-radius: 28%;
height:75%;
width:75%;
margin-left: 175px;



@media screen and (max-width: 950px) {
  height: 75%; 
  width:75%;
  margin-left: 85px;
    }



`

export const ProjectImage = styled.img`
border-radius: 28%;
box-shadow: 0 0 10px 5px white;
height: 100%;
width: 100%;

&:hover{
  box-shadow: 0 0 10px 5px #74FF33;
  
}

@media screen and (max-width: 950px) {
  height: 50%;
  width: 50%;
  margin-left: 125px;
    }
`

export const ProjectName = styled.h2`
    text-align: center;
    margin-left: 175px;
`;