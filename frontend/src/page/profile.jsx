import React, { useEffect, useState } from "react";

    const details ={
        name: "",   
        email: "",
        phone: "",
        address:[]
    }
function Profile() {
    const [Details, setDetails] = useState(details);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await axios.get("http://localhost:3000/user/profile");
                setDetails(response.data.user);
            }
            catch (error) {
                console.error("Error fetching details:", error);
            }
        }
        fetchDetails();
    }, []);


return (
    <div>
       
        <div>
            <h2>{Details.name}</h2>
            <p>{Details.email}</p>
            <p>{Details.phone}</p>
        </div>
        <div>
            <p>{Details.address}</p>
        </div>
    </div>
  )
}
export default Profile;