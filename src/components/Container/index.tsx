import { ReactNode } from 'react';
import NavBar from '#components/NavBar';

interface ContainerProps {
    children: ReactNode;
}
const Container = ({ children,
}: ContainerProps) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};

export default Container;