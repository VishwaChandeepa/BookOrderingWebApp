import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";


function Navbar(){

    const {user, logout} = useContext(AuthContext);

    const navigate = useNavigate();



    const handleLogout = ()=>{

        logout();

        navigate("/login");

    };



    return(

        <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">


            {/* Logo */}

            <Link 
            to="/"
            className="text-2xl font-bold"
            >
                BookStore
            </Link>



            {/* Menu */}

            <div className="flex gap-5 items-center">


                <Link to="/">
                    Home
                </Link>


                <Link to="/books">
                    Books
                </Link>



                {
                    user ? (

                        <>


                        {
                            user.role==="customer" &&

                            <Link to="/cart">
                                Cart
                            </Link>

                        }



                        {
                            user.role==="author" &&

                            <Link to="/author">
                                Author Dashboard
                            </Link>

                        }



                        {
                            user.role==="admin" &&

                            <Link to="/admin">
                                Admin Dashboard
                            </Link>

                        }



                        <span>
                            Hello, {user.name}
                        </span>



                        <button

                        onClick={handleLogout}

                        className="bg-red-500 px-3 py-1 rounded"

                        >

                            Logout

                        </button>


                        </>


                    ) : (

                        <>


                        <Link to="/login">
                            Login
                        </Link>


                        <Link to="/register">
                            Register
                        </Link>

                        <Link to="/profile">
                            Profile
                        </Link>


                        </>

                    )

                }


            </div>


        </nav>

    );

}


export default Navbar;