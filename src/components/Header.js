import { LOGO_URL } from "./Constants";
import { Link } from "react-router-dom";
const Header= () => {
    return (
        <div className="absolute px-8 w-screen  bg-amber-200 flex justify-between">
        
            <div className="p-4 m-4">
                <img className= "w-10"src={LOGO_URL} />
            </div>

            <div className="nav-items ">
                <ul className="flex p-4 m-4">
                    <li className="p-4 hover:bg-green-400">
                    <Link to = "/dashboard">DASHBOARD</Link>
                        </li>
                    <li className="p-4 hover:bg-green-400">
                        <Link to = "/create-ad">CREATE AD</Link>
                        </li>
                </ul>
            </div>
        </div>
    
    );
};

export default Header;