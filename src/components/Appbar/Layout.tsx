import { Content } from './Content';
import { Box } from './Box';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
    <Box
        css={{
            maxW: '100%',
        }}
    >
        {children}
        <Content />
    </Box>
);
