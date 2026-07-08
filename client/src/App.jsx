import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";

import Admin from "./pages/Admin";
import Author from "./pages/Author";

import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./components/Navbar";

import Profile from "./pages/Profile";


function App(){

  return (

    <BrowserRouter>

<Navbar />

<Routes>
        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />

        <Route 
          path="/profile" 
            element={<Profile/>}
              />


        <Route 
          path="/register" 
          element={<Register />} 
        />


        <Route 
          path="/books" 
          element={<Books />} 
        />


        <Route

path="/admin"

element={

<ProtectedRoute role="admin">

<Admin/>

</ProtectedRoute>

}

/>


        <Route

path="/author"

element={

<ProtectedRoute role="author">

<Author/>

</ProtectedRoute>

}

/>


      </Routes>


    </BrowserRouter>

  );

}


export default App;