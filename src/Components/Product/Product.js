import React from 'react';
import LogoAndNavigation from '../Home/LogoAndNavigation';
import Card from '../Home/Card';
import data from '../../data.json';

const Product = () => {
    return (
        <div>
            <LogoAndNavigation activeProduct="product"/>
            <Card dataForPro={data}/>
        </div>
    )
}
export default Product;
