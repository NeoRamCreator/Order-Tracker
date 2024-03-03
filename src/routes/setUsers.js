// import SetRoutes from "../components/SetRoute";
// import AddRoutes from '../components/AddRoutes'



import SetUsers from "../components/SetUsers";
import AddUsers from "../components/AddUsers";


const setUsersRout = {
    path: '/set-users',
    element:
        <div>
            <SetUsers />
            <AddUsers />
        </div>,

};

export default setUsersRout;