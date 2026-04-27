import React from 'react';
import { DotLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='flex h-20 items-center justify-center'>
            Global Loading
            <DotLoader className='text-sky-400'></DotLoader>
        </div>
    );
};

export default LoadingPage;