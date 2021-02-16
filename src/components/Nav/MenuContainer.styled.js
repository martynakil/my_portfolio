import styled, { css } from 'styled-components';


const FixedPosition = css`
    @supports (position: fixed) {
        position: fixed;
    }
`;

const MenuLinkElem = styled.a`
    &:hover,
    &:focus {
        text-decoration: underline;
    }
`;


const MenuCloseElem = styled.a`

    text-align: center;
    color: black;
    width: 100%;
   
   
`;

const MenuListElem = styled.ul`
  
    width: 100%;
    list-style: none;
    align-self: center;
`;

const MenuListItemElem = styled.li``;

const MenuElem = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  right: 0;
  background-color: 	#F5F5F5;
  ${FixedPosition};
  
 



  a {
    display: block;
    padding: 0.75em 15px;
    line-height: 1em;
    font-size: 1.5em;
    color: black;
    text-decoration: none;
    text-align: center;
    color: black;
    width: 100%;

  }
`;

const MenuToggleElem = styled.a`
    display: inline-block;
    padding: 0.75em 15px;
    line-height: 1em;
    font-size: 1.5em;
    color: #333;

    &:hover,
    &:focus {
        color: #c00;
    }

`;

export {
    MenuCloseElem,
    MenuElem,
    MenuListElem,
    MenuListItemElem,
    MenuLinkElem,
    MenuToggleElem
};
