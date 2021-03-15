import React from 'react';
import myphoto from '../../Data/images/myphoto.png'
import Title from '../Titles/Title'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faGlobeAmericas, faPizzaSlice} from "@fortawesome/free-solid-svg-icons";
import { RandomReveal } from 'react-random-reveal'
import {
      AboutMeSection,
      Image,
      TextAboutMe,
      BoxIcon,
      TextIcon,
      TextAbourtMeSecondary
} from './StyledAboutMeContainer.styled.js'



const AboutMe = () => {

return (
 <>
   <AboutMeSection id="aboutme" >
         
      <Title>About me</Title>
      <Image src={myphoto} alt='my photo'/>
      
      <TextAboutMe>
      My name is Martyna. My current job circumstances forced me to change the work industry. I am currently working as a waitress in a restaurant, although I enjoy the job, I know that I don’t want to run around with plates for the rest of my life. Accidentally, I came across an advertisement for creating websites. Out of curiosity I bought the ‘web developer from scratch’ course and completely lost myself in it. I’ve been studying for 1.5 years. For 7 months I’ve been learning by myself and for 8 months I’ve been learning under the supervision of an experienced mentor. Sometimes it was very hard to work in restaurant, not social hours, while studying and learning programming but it was for sure worth it. Now it's time to look for an apprenticeship ...
      <br/>
      <br/>
      I want to continue my education!ツ
      <br/>
      <br/>
      <br/>
      <TextAbourtMeSecondary>and so besides</TextAbourtMeSecondary>
      </TextAboutMe>  

      <BoxIcon>
      <FontAwesomeIcon  
      className="iconFontAwesome--aboutMe" 
      icon={faMountain}
      secondary
      />

      <TextIcon>
      <RandomReveal
      isPlaying
      duration={4.6}
      revealDuration={0.5}
      characters="I am mountain lover!"
      />
      </TextIcon>
         

      <FontAwesomeIcon  
      className="iconFontAwesome--aboutMe" 
      icon={faPizzaSlice}
      secondary
      />

      <TextIcon>
      <RandomReveal
      isPlaying
      duration={4.6}
      revealDuration={0.5}
      characters="I can't live without pizza"
      />
      </TextIcon>
       

      <FontAwesomeIcon  
      className="iconFontAwesome--aboutMe" 
      icon={faGlobeAmericas}
      secondary
      />

      <TextIcon>
      <RandomReveal
      isPlaying
      duration={4.6}
      revealDuration={0.5}
      characters="there is nothing better for me than exploring the world!"
      />
      
      </TextIcon>

      </BoxIcon>
   </AboutMeSection>
 </>
)


}

export default AboutMe
