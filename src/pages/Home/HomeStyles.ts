import styled from 'styled-components';

export const HomeWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
    width: 100%;
    padding-left: 10vw;
    padding-top: 40px;
    background-color: #19233d;

    .left-section{
        display: grid;
        grid-auto-rows: 1fr;
        color: #575d6d;

        &__top{
            padding-top: 60px;

            h2{
                font-size: 25px;
                font-weight: 400;
                padding-left: 25px;
                border-left: 1px solid #761be7;
            }
        }

        &__bottom{
            color: #ffffff;

            h1{
                font-size: 50px;
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

            a{
                font-size: 17px;
                font-weight: 600;

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
    }
`