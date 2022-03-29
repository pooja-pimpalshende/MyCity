import axios from "axios";

import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  const [college_name, setCollege_name] = useState("");
  const [phone_no, setPhone_no] = useState("");
  // const [email_id, setEmail_id] = useState("");
  // const [house_no, setHouse_no] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const [district, setDistrict] = useState("");

  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const [list, setList] = useState([]);

  const handleCollege_nameChange = (e) => {
    setCollege_name(e.target.value);
  };
  const handlePhone_noChange = (e) => {
    setPhone_no(e.target.value);
  };
  // const handleEmail_idChange = (e) => {
  //   setEmail_id(e.target.value);
  // };
  // const handleHouse_noChange = (e) => {
  //   setHouse_no(e.target.value);
  // };

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const addUser = async () => {
    // const url = "http://localhost:9090/colleges";
    const data = {
      college_name: college_name,
      phone_no: phone_no,
      // email_id: email_id,
      // house_no: house_no,
      street: street,
      city: city,
      district: district,
      state: state,
      pincode: pincode,
    };

    // AJAX using AXIOS
    const result1 = axios({
      method: "post",
      url: "http://localhost:9090/colleges",
      data: data,
      headers: { "Content-Type": undefined }, //this is very important to send the data make sure cors is enabled.
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    const newList = [data, ...list];
    setList(newList);

    setCollege_name("");
    setPhone_no("");
    // setEmail_id("");
    // setHouse_no("");
    setStreet("");
    setCity("");
    setDistrict("");
    setState("");
    setPincode("");
  };

  const getUser1 = async () => {
    const url = "http://localhost:9090/colleges";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  const getUser = async () => {
    const url = "http://localhost:9090/colleges";
    const result = axios.get(url).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

    const list = await result.json();

    const newList = [...list];
    setList(newList);
  };

  // Spe Function::  Like Constructor :: React Hooks
  useEffect(() => getUser(), []);

  return (
    <div className="container-fluid">
      <h1>User Registration</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={college_name}
          onChange={handleCollege_nameChange}
          placeholder="Enter college name"
        />
      </div>
      <div>
        <input
          type="number"
          name=""
          id=""
          value={phone_no}
          onChange={handlePhone_noChange}
          placeholder="Enter phone number"
        />
      </div>
      {/* <div>
        <input
          type="text"
          name=""
          id=""
          value={email_id}
          onChange={handleEmail_idChange}
          placeholder="Enter email id"
        />
      </div>{" "} */}
      {/* <div>
        <input
          type="text"
          name=""
          id=""
          value={house_no}
          onChange={handleHouse_noChange}
          placeholder="Enter house number"
        />
      </div> */}
      <div>
        <input
          type="text"
          name=""
          id=""
          value={street}
          onChange={handleStreetChange}
          placeholder="Enter street"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={district}
          onChange={handleDistrictChange}
          placeholder="Enter District"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={city}
          onChange={handleCityChange}
          placeholder="Enter City"
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={state}
          onChange={handleStateChange}
          placeholder="Enter State"
        />
      </div>
      <div>
        <input
          type="number"
          name=""
          id=""
          value={pincode}
          onChange={handlePincodeChange}
          placeholder="Enter Pincode"
        />
      </div>
      <div>
        <input type="button" name="" value="Register" onClick={addUser} />
        <input type="button" name="" value="Get User" onClick={getUser} />
      </div>
      <h1>User List</h1>
      {list.map((item, index) => (
        <div key={index}>
          {item.college_name} {item.phone_no}
        </div>
      ))}
    </div>
  );
}
