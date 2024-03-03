

import { useNavigation, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Main = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <div style={
                {
                    background: '#4A4A4AFF',
                    padding: '10px 20px',
                    marginBottom: '16px',
                    boxShadow: ' 0px 0px 10px 2px'
                }
            }>
                <NavLink
                    to='/track-order'
                    className={location.pathname === '/track-order' ? 'active-link' : ''}
                >Отследить заказ</NavLink>

                <NavLink
                    to='/set-orders'
                    className={location.pathname === '/set-orders' ? 'active-link' : ''}
                >Заказы</NavLink>

                <NavLink
                    to='/set-route'
                    className={location.pathname === '/set-route' ? 'active-link' : ''}
                >Маршруты</NavLink>

                <NavLink
                    to='/set-users'
                    className={location.pathname === '/set-users' ? 'active-link' : ''}
                >Водители</NavLink>


            </div>


            <Outlet />
        </div>
    )
}

export default Main