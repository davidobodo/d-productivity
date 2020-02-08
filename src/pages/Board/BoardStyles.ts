import styled from 'styled-components';
import { HomeProps } from '../../utils/utils';

export const Wrapper = styled.div<HomeProps>`
position: absolute;
z-index: 2;
height: calc(100vh - 80px);
min-height: 750px;
width: calc(100vw - 60px);
padding-top: 5rem;
padding-left: 5rem;
margin-top: 40px;
margin-left: 30px;
background-color: #6e1fd8;
border-radius: 15px;
overflow-x: scroll;

${({ closeBoard }) => closeBoard && 'animation: close-anim-shake 1s ease-in-out;'}
${({ openBoard }) => openBoard && 'animation: anim-shake 1s ease-in-out;'}

${({ openBoard }) => !openBoard && `
      width: 50px;

      @media(max-width: 765px){
        width: 0px;
        padding-left: 0px;
      }
  
`};


header{
  font-size: 5rem;
  font-style: italic;
  color: #000000;
  opacity: 0.5;
  margin-bottom: 20px;

  @media(max-width: 765px){
    font-size: 3rem;
  }
  
}

.cards{
  display: flex;
  align-items: start;

  .list-title{
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 0.5rem;
    background-color: #ECECF0;
    border-radius: 3px;
    margin-right: 1rem;

    input{
      border: 2px solid blue;
      font-size: 16px;
      padding: 0.5rem;
      outline: none;
      border-radius: 4px;
      margin-bottom: 6px;
    }

    div{

      button{
        background-color: green;
        color: #ffffff;
        border-radius: 3px;
        padding: 10px;
        width: auto;
        margin-right: 5px;
        outline: none;
      }

      svg{
          transform: rotate(45deg);
      }
    }
  }

  .btn-add-list{
    font-size: inherit;
    color: #ffffff;
    background-color: rgba(0,0,0,0.2);
    margin-bottom: 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: left;
    padding: 1.3rem 1rem 1.3rem 1rem;
    min-width: 300px;
    border-radius: 3px;
    margin-right: 1rem;

    :hover{
        background-color: #ACACAC;
    }

    svg{
        margin-right: 10px;
    }
  }
};

    @keyframes anim-shake{
      0%{
        width: 50px;
      }

      50%{
        width: calc(100vw - 60px);
        transform: translateX(20px);
      }

      60%{
        transform: translateX(-15px)
      }
      
      70%{
        transform: translateX(11px)
      }
      
      80%{
        transform: translateX(-7px)
      }
      
      90%{
        transform: translateX(3px)
      }
      
      100%{
        transform: translateX(0px)
      }
    };

    @keyframes close-anim-shake{
      0%{
        width: calc(100vw - 60px);
      }
      
      50%{
        width: 50px;
        transform: translateX(-20px);
      }

      60%{
        transform: translateX(15px)
      }
      
      70%{
        transform: translateX(-11px)
      }
      
      80%{
        transform: translateX(7px)
      }
      
      90%{
        transform: translateX(-3px)
      }
      
      100%{
        transform: translateX(0px)
      }
    }
`