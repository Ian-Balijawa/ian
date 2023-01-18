import '@css/loader.css';

import { forwardRef } from 'react';

export const DogSpinner = () => <span class="loader"></span>;

export const DogContainer = forwardRef(({ children }, ref) => (
    <div
        ref={ref}
        className="voxel-dog"

        // m="auto"
        // mt={['-20px', '-60px', '-120px']}
        // mb={['-40px', '-140px', '-200px']}
        // w={[280, 480, 640]}
        // h={[280, 480, 640]}
    >
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
