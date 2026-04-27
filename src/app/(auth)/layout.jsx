import Navbar from '@/components/shared/Navbar';


const AuthLayout = ({Children}) => {
    return (
        <div className={`${Montserrat.className}`}>
            <Navbar></Navbar>
            {Children}
        </div>
    );
};

export default AuthLayout;