import styled from 'styled-components';


export const ProjectContainer = styled.div`
height: 50%;
width: 50%;

`;

export const ProjectBubble = styled.a`
display: flex;
border-radius: 28%;
height:75%;
width:75%;

@media screen and (max-width: 768px) {
  height: 75%; 
  width:75%;
    }



`

export const ProjectImage = styled.img`
border-radius: 28%;
box-shadow: 0 0 10px 5px white;

&:hover{
  box-shadow: 0 0 10px 5px #74FF33;
  
}

@media screen and (max-width: 768px) {
 
    }
`