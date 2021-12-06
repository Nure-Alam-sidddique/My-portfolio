/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useParams } from 'react-router';
import myPhoto from '../../assets/images/bg-1.png'

const ProductDetails = () => {
    const { projectId } = useParams();
    return (
        <div className='h-screen'>
            <h1 className="mt-3">This is Product Id: { projectId}</h1>
            <div className="grid-cols-3 grid-rows-2">
             <div>
                 <img src={myPhoto} alt="my photo"/>
             </div>
            </div>

        </div>
    );
};

export default ProductDetails;