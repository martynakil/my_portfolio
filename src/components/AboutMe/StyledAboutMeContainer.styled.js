import styled from 'styled-components';


export const AboutMeSection = styled.section`
 margin-bottom: 100px;
 color: ${({ theme }) => theme.mainColorGray};
 font-size: ${({ theme }) => theme.fontSize.text};
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
}))`
 display: flex;
 justify-content: center;
 margin-top: 50px;
 width: 270px; 
 max-height: 350px;
 margin: 0 auto;
 background-size: contain;

 @media (min-width: 768px) {
    /* width: 70%; */
    height: 70%;
 }
  `

export const TextAboutMe = styled.p`
padding: 40px;
text-align: justify;
`;


export const BoxIcon = styled.section`

display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
min-height: 50vh;


`;

export const TextIcon = styled.p`

width: 100%;
text-align: center;
margin-top: 60px;
font-size: ${({ theme }) => theme.fontSize.text};


`;

  
  
