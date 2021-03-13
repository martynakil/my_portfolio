import React from 'react';
import '../../style/App.css';
import {
  Image,
  LinkToProjectOne,
  LinkToProjectTwo,
  DescriptionOfProject,
  NameOfProject,
  IdOfProject,
  ContainerForProject,
  ContainerForUrl,
  TechnologiesInfo,
  MainContainerTitleProject
  
} from './StyledProjectsContainer.styled'
const Project = ({id, name, description, live, urlcode, img, technologies} )=> {




  return (
    <>   
               <ContainerForProject>
              <MainContainerTitleProject>
               <IdOfProject>{id}</IdOfProject>
               <NameOfProject>{name}</NameOfProject>
              </MainContainerTitleProject>
               <DescriptionOfProject >{description}</DescriptionOfProject>
               <TechnologiesInfo>Technologies: {technologies}</TechnologiesInfo>
               <Image  src={img} alt="imgproject"/>
              
               <ContainerForUrl>
               <LinkToProjectOne
                    href={live}
                    >
                    {' '}
                    Live
                  </LinkToProjectOne>

                  <LinkToProjectTwo
                  
                    href={urlcode}
                    >
                    {' '}
                    Code{' '}
                  </LinkToProjectTwo>
               </ContainerForUrl>
            
             </ContainerForProject>
    
    </>

  );
};
export default Project;