import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://api.github.com/users/ananyyavijay")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className=" text-center bg-gray-500 text-2xl text-white p-4 m-6">
      Github Followers: {data.followers}
    </div>
  );
}

export default Github;
