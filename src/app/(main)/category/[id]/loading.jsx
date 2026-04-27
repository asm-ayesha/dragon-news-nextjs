import React from 'react';
import { DotLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='flex h-20 items-center justify-center mt-6'>
          
            <DotLoader color="#a78bfa"></DotLoader>
        </div>
    );
};

export default LoadingPage;