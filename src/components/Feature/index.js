import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer id="special">
            <h1>Pizza of the Day</h1>
            <p>Truffle afredo sauce topped with 24 carat gold dust</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
