import React from 'react';
import { HomeWrapper } from './HomeStyles';
import Shapes from '../../components/Shapes';
import { callbackify } from 'util';


const Home = () => {
    return (
        <HomeWrapper>
            <div className="left-section__top">
                <h2>Welcome to d-productivity</h2>
            </div>
            <div className="left-section__bottom">
                <h1>The whole <br /> world <br /> in one place</h1>
                <p>Find out how productive you could be.</p>
                <a>Start Now</a>
            </div>
            <div className="middle-section__top shape-section">
                <div
                />
                <div style={{
                    borderBottom: 'calc((100vh - 140px)/4) solid #c92e58',
                    borderLeft: 'calc(15vw - 20px) solid transparent',
                    width: '0',
                }} />

                <div style={{
                    // borderBottom: '15vw solid #2429f5',
                    // borderTop: '15vw solid transparent',
                    // width: '15vw',
                    // borderRadius: '50%',
                }} />
                <div style={{
                    borderTop: 'calc((100vh - 140px)/4) solid #6fc08a',
                    borderRight: 'calc(15vw - 20px) solid transparent',
                    width: '0'
                }} />
            </div>
            <div className="middle-section__bottom shape-section">
                <div style={{
                    borderBottom: 'calc((100vh - 140px)/4) solid #c92e58',
                    borderLeft: 'calc(15vw - 20px) solid transparent',
                    width: '0',
                }} />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#d8841f',
                    borderRadius: '50%',
                }} />
                <div />
                <div style={{
                    borderBottom: 'calc((100vh - 140px)/4) solid #2429f5',
                    borderRight: 'calc(15vw - 20px) solid transparent',
                    width: '0',
                }}
                />
            </div>
            <div className="right-section__top shape-section">
                <div />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#6e1fd8',
                }} />
                <div />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#d8841f',
                    borderRadius: '50%',
                }} />
            </div>
            <div className="right-section__bottom shape-section">
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#6e1fd8',
                }} />
                <div style={{
                    borderTop: 'calc((100vh - 140px)/4) solid #d8841f',
                    borderLeft: 'calc(15vw - 20px) solid transparent',
                    width: '0'
                }} />
                <div />
                <div style={{
                    width: 'calc(15vw - 20px)',
                    height: 'calc((100vh - 140px)/4)',
                    backgroundColor: '#2429f5',
                }} />
            </div>
        </HomeWrapper>
    )
}

export default Home;