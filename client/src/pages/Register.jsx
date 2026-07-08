import { useState } from "react";
import API from "../api/axios";


function Register(){

    const [formData,setFormData] = useState({

        name:"",
        email:"",
        password:"",
        role:"customer"

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
                "/auth/register",
                formData
            );


            alert(response.data.message);


        }
        catch(error){

            alert(
                error.response?.data?.message ||
                "Registration failed"
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
                    Register
                </h1>


                <input
                className="border p-2 w-full mb-3"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                />


                <input
                className="border p-2 w-full mb-3"
                name="email"
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


                <select
                className="border p-2 w-full mb-3"
                name="role"
                onChange={handleChange}
                >

                    <option value="customer">
                        Customer
                    </option>

                    <option value="author">
                        Author
                    </option>

                </select>



                <button
                className="bg-blue-600 text-white p-2 w-full rounded"
                >

                    Register

                </button>


            </form>


        </div>

    );

}


export default Register;