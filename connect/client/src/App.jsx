import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const [username, setUsername] = useState(null);
  const [age, setAge] = useState(null);
  const [city, setCity] = useState(null);
  const getApiResponse = async () => {
    axios
      .post("http://localhost:8000/", {
        username,
        age,
        city,
      })
      .then((e) => {
        console.log(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => getApiResponse()}>submit</button>
    </div>
  );
};

export default App;
