import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { doc } from "firebase/firestore";

const Favorites = () => {
  const [favFood, setFavFood] = useState([]);
  const navigate = useNavigate();

  const DeleteData = async (docId) => {
    try {
      await deleteDoc(doc(db, localStorage.getItem('USER'), docId));
      // Update favFood state by removing the deleted item
      setFavFood((prevFavFood) =>
        prevFavFood.filter((item) => item.docId !== docId)
      );
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const getFavfromDB = async (user) => {
    const tempData = [];
    const querySnapshot = await getDocs(collection(db, user));
    querySnapshot.forEach((doc) => {
      const combinedData = {
        docId: doc.id,
        ...doc.data(),
      };
      tempData.push(combinedData);
    });
    setFavFood(tempData);
  };

  useEffect(() => {
    const user = localStorage.getItem('USER');
    if (!user) {
      navigate('/login');
    } else {
      getFavfromDB(user);
    }
  }, [navigate]);

  return (
    <>
      <div>
        {favFood.map((data) => (
          <div key={data.docId}>
            <p>{data.title}</p>
            <p>time to cook: {data.time}</p>
            <img src={data.img} alt={data.title} />
            <button
              onClick={() => DeleteData(data.docId)}
              className='bg-red-600 text-white rounded-3xl p-2 mt-2'
            >
              Remove from Fav
            </button>
            <button onClick={()=>{localStorage.setItem('RECIPE_NAME',data.id)}}  className="border-black rounded-full border px-3 py-1 mt-6">

<Link to="/recipe" >


   View Details



  </Link>
  </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
