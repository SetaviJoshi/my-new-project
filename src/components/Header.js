import { LOGO_URL } from "./Constants";
import { Link } from "react-router-dom";
const Header= () => {
    return (
        <div className="absolute px-8 w-screen  bg-gradient-to-b  from-yellow-200 z-10 flex justify-between">
        
            <div className="p-4 m-4">
                <img className= "w-10"src={LOGO_URL} />
            </div>

            <div className="nav-items ">
                <ul className="flex p-4 m-4">
                    <li className="p-4 hover:bg-green-400">
                    <Link to = "/">DASHBOARD</Link>
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