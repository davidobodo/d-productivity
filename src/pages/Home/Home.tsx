import React from 'react';
import { HomeWrapper } from './HomeStyles';


const Home = () => {
    return (
        <HomeWrapper>
            <section className="left-section">
                <div className="left-section__top">
                    <h2>Welcome to d-productivity</h2>
                </div>
                <div className="left-section__bottom">
                    <h1>The whole <br /> world <br /> in one place</h1>
                    <p>Find out how productive you could be.</p>
                    <a>Start Now</a>
                </div>
            </section>
            <section className="middle-section">
                <div className="middle-section__top"></div>
                <div className="middle-section__bottom"></div>
            </section>
            <section className="right-section"></section>
        </HomeWrapper>
    )
}

export default Home;