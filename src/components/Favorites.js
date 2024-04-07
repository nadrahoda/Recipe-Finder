import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { doc } from "firebase/firestore";

const Favorites = () => {
  const [favFood, setFavFood] = useState([]);
  const navigate = useNavigate();

  const DeleteData = async (docId) => {
    try {
      await deleteDoc(doc(db, localStorage.getItem("USER"), docId));
      setFavFood((prevFavFood) =>
        prevFavFood.filter((item) => item.docId !== docId)
      );
    } catch (error) {
      console.error("Error deleting document:", error);
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
    const user = localStorage.getItem("USER");
    if (!user) {
      navigate("/login");
    } else {
      getFavfromDB(user);
    }
  }, [navigate]);

  return (
    <>
      <div className="mt-10">
        <div className="md:grid-cols-2  xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 3xl:grid-cols-5 grid gap-3 p-4">
          {favFood.map((data) => (
            <div
              key={data.docId}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={data.img}
                alt={data.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{data.title}</h3>
                <p className="text-gray-500 mb-2">Time to Cook: {data.time}</p>
                <div className="flex justify-between">
                  <button
                    onClick={() => DeleteData(data.docId)}
                    className="bg-red-600 text-white rounded-md px-4 py-2"
                  >
                    Remove
                  </button>
                  <Link
                    to="/recipe"
                    onClick={() => localStorage.setItem("RECIPE_NAME", data.id)}
                    className="border-black rounded-full border px-4 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
