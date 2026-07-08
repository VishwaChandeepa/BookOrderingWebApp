import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Profile(){

const {user}=useContext(AuthContext);


return(

<div className="p-10">

<h1 className="text-3xl font-bold">
Profile
</h1>


<p>
Name: {user?.name}
</p>


<p>
Role: {user?.role}
</p>


</div>

)

}


export default Profile;