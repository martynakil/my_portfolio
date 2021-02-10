import React from 'react';
import Title from '../Titles/Title'
import {StyledContainerProjects, StyledNumberOfProject, StyledTextUnderProjects} from './StyledProjects.styled'
import Project from './Project'



const Projects = () => {
    return (
     <>
            <Title>My projects</Title>
            <StyledContainerProjects>

              <StyledNumberOfProject>1</StyledNumberOfProject>
              <Project/>

              <StyledNumberOfProject>2</StyledNumberOfProject>
              <Project/>
              
              <StyledNumberOfProject>3</StyledNumberOfProject>
              <Project/>

              <StyledNumberOfProject>4</StyledNumberOfProject>
              <Project/>
              <StyledTextUnderProjects>too little ? Come to my github!</StyledTextUnderProjects>


            </StyledContainerProjects>
     </>
    )
}

export default Projects;