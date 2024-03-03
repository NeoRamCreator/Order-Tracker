

import { useNavigation, useLocation, Outlet, useNavigate } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1 style={
                {
                    background: '#4A4A4AFF',
                    padding: '10px 20px',
                    marginBottom: '16px',
                    boxShadow: ' 0px 0px 10px 2px'
                }

            }>Main</h1>


            <Outlet />
        </div>
    )
}

export default Main