import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-addresses?email=user@example.com");
        setAddresses(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  const handleSelectAddress = (address) => {
    // Handle address selection logic here
    console.log("Selected address:", address);
    navigate("/order-summary", { state: { address } });
  };

  return (
    <div>
      <h2>Select Address</h2>
      {addresses.map((address, index) => (
        <div key={index} onClick={() => handleSelectAddress(address)}>
          <p>{address.address1}, {address.city}, {address.country}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectAddress;
