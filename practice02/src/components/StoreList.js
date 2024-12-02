import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const StoreList = () => {

  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8111/stores')
      .then((response) => setStores(response.data))
      .catch((error) => console.error("오류 발생 : ", error));
  }, []);

  return (
    <>
      <h1>Store List</h1>
      <ul>
        {stores.map(store => (
          <li key={store.storeNo}>
            <Link to={`/stores/${store.storeNo}`}>{store.storeName}</Link>
          </li>
        ))}
      </ul>
    </>
  );

}

export default StoreList;