import styled from 'styled-components';
import { HomeProps } from '../../utils/utils'

export const HomeWrapper = styled.div<HomeProps>`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 20px;
    min-height: 100vh;
    width: 100%;
    padding: 40px 40px 40px 10vw;
    background-color: #19233d;
    background:linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1502514841534-dceabea28dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=2728&q=80") ;
    background-size: cover;

    .section-one{
        padding-top: 60px;

        h2{
            font-size: 25px;
            font-weight: 400;
            padding-left: 25px;
            border-left: 1px solid #761be7;
            color: #575d6d;
        }
    }

    .section-four{
        color: #ffffff;

        h1{
            font-size: 4vw;
            font-weight: 600;
            margin-bottom: 50px;
            letter-spacing: 2px;
        }

        p{
            font-size: 17px;
            font-weight: 300;
            margin-bottom: 50px;
            opacity: 0.6;
        }

        button{
            font-size: 17px;
            font-weight: 600;
            cursor: pointer;

            &:before{
                content: '';
                display: inline-block;
                width: 60px;
                height: 2px;
                margin-right: 25px;
                margin-bottom: 5px;
                background-color:#ffffff;
            }
        }
    }

    .shape-section{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

    .close{
        color: #ffffff;
        opacity: 0.5;
        position: fixed;
        bottom: 15px;
        right: 40px;
        cursor: pointer;
        ${({ openBoard }) => openBoard && 'display: block'};
        ${({ openBoard }) => !openBoard && 'display: none'};


        &:before{
            content: '';
            width: 40px;
            height: 3px;
            position: fixed;
            background-color: #ffffff;
            opacity: 0.5;
            bottom: 15px;
            right: 85px;
            margin-bottom: 6px;
        }
    }

    @media(max-width: 765px){
        grid-template-columns: 1fr;

        .section-four{

            h1{
                font-size: 50px;
            }

            p{
                margin-bottom: 100px;
            }
        }

        .shape-section{
            display: none;
        }
    }
`