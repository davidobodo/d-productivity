import styled from 'styled-components';

export const ListWrapper = styled.div`
    min-width: 300px;
    color: #000000;
    background-color: #ECECF0;
    padding: 1rem 1rem 0rem;
    border-radius: 3px;
    font-size: 15px;
    margin-right: 1rem;

    .List__title{
        display: flex;
        justify-content: space-between;
        height: 2rem;
        align-items: center;
        margin-bottom: 1rem;

        &__header{
            font-weight: 600;
            padding-left: 1rem;
        }

        &__options{
            font-size: 2.5rem;
            padding-bottom: 1rem;
        }

        svg{
            opacity: 0.2;
            transform: rotate(45deg);
    
            &:hover{
                cursor: default;
            }
        }
    }

    .btn-add-task{
        font-size: inherit;
        color: #6B778C;
        background-color: transparent;
        margin-bottom: 1.5rem;
        border: none;
        outline: none;
        cursor: pointer;
        width: 100%;
        text-align: left;
        padding: 0.5rem 1rem;
        border-radius: 3px;

        :hover{
            background-color: #ACACAC;
        }

        svg{
            margin-right: 10px;
        }
    }
`