import React from 'react';
import LogoAndNavigation from '../Home/LogoAndNavigation';
import Card from '../Home/Card';

const Product = () => {
    return (
        <div>
            <LogoAndNavigation activeProduct="product"/>
            <Card dataForPro="dataForProductx"/>
        </div>
    )
}
export default Product;
