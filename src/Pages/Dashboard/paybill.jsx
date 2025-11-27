import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Paybill = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState(null);

  useEffect(() => {
    axiosSecure.get(`/paybill/${id}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id, axiosSecure]);

  return (
    <div>
      <h1>Pay Bill Page</h1>
      <p>Parcel ID: {id}</p>

      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default Paybill;
