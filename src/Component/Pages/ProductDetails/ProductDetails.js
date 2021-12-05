import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { projectId } = useParams();
    return (
        <div className='h-screen'>
            <h1>This is Product Id: { projectId}</h1>
        </div>
    );
};

export default ProductDetails;