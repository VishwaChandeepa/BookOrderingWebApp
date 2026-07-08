import { useState, useContext } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Login(){

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);


    const [formData,setFormData] = useState({

        email:"",
        password:""

    });


    const handleChange=(e)=>{

        setFormData({

            ...formData,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{


            const response =
            await API.post(
                "/auth/login",
                formData
            );


            // Save user + token via Context

            login(
                response.data.user,
                response.data.token
            );



            alert("Login successful");



            // Redirect

            if(response.data.user.role==="admin"){

                navigate("/admin");

            }
            else if(response.data.user.role==="author"){

                navigate("/author");

            }
            else{

                navigate("/");

            }



        }
        catch(error){

            alert(
                error.response?.data?.message ||
                "Login failed"
            );

        }


    };




    return(

        <div className="min-h-screen flex items-center justify-center bg-gray-100">


            <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded shadow w-96"
            >


                <h1 className="text-3xl font-bold mb-5">
                    Login
                </h1>



                <input

                className="border p-2 w-full mb-3"

                name="email"

                type="email"

                placeholder="Email"

                onChange={handleChange}

                />



                <input

                className="border p-2 w-full mb-3"

                name="password"

                type="password"

                placeholder="Password"

                onChange={handleChange}

                />



                <button

                className="bg-blue-600 text-white p-2 w-full rounded"

                >

                    Login

                </button>



            </form>


        </div>

    );

}


export default Login;