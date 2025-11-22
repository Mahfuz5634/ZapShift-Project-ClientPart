import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const Myparcels = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [data, setdata] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/parcel?email=${user?.email}`).then((res) => {
      setdata(res.data);
    });
  }, []);

  return (
    <div>
      <h1>all parcel</h1>
      <h1>{data.length}</h1>
    </div>
  );
};

export default Myparcels;
