import React, {useContext} from "react";
import UserContext from "../utils/UserContext.jsx"; // Corrected import
const About =()=>{

    const {loggedInUser} = useContext(UserContext);
return(
    <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">About page</h1>
        <h1 className="text-xl">This is about page of {loggedInUser}</h1>
    </div>
)
}

export default About;