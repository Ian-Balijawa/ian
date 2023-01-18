import '@css/loader.css';

import { forwardRef } from 'react';

export const DogSpinner = () => (
    <div className="spinner__container">
        <span class="loader"></span>
    </div>
);

export const DogContainer = forwardRef(({ children }, ref) => (
    <div ref={ref} className="voxel-dog">
        {children}
    </div>
));

const Loader = () => {
    return (
        <DogContainer>
            <DogSpinner />
        </DogContainer>
    );
};

export default Loader;
