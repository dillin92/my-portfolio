import styled from 'styled-components';


export const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
padding: 25px;
`;

export const ProjectBubble = styled.a`
display: flex;
border-radius: 28%;
height:75%;
width:75%;
margin-left: 175px;
padding: 10px;



@media screen and (max-width: 950px) {
  height: 75%; 
  width:75%;
  margin-left: 85px;
    }



`

export const ProjectImage = styled.img`
border-radius: 28%;
box-shadow: 0 0 10px 5px white;
height: 70%;
width: 70%;
margin-left: 150px;


&:hover{
  box-shadow: 0 0 10px 5px #74FF33;
  
}

@media screen and (max-width: 950px) {
  height: 75%;
  width: 75%;
  margin-right: 125px;
  margin-left:0;
    }
`

export const ProjectName = styled.h2`
    text-align: center;
    margin-left: 175px;
    padding: 10px;

    @media screen and (max-width: 950px) {
      margin-right: 250px;
        }


`;

export const ProjectTech = styled.div`

@media screen and (max-width: 950px) {
  margin-right: 250px;
    }
`