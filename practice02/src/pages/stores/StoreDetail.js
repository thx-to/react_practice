import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const StoreDetail = () => {
  const { storeNo } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8111/stores/${storeNo}`)
      .then((response) => setStore(response.data))
      .catch((error) => console.error("오류 발생 : ", error));
  }, [storeNo]);

  if (!store) return <>Loading...</>; // 'store'가 null일 때 "Loading..."을 출력

  return (
    <>
      <h1>{store.storeName}</h1>
      <p>브랜드명 : {store.brandName}</p>
      <p>
        영업 시간 : {new Date(store.storeOpen).toLocaleTimeString()} ~{" "}
        {new Date(store.storeClose).toLocaleTimeString()}
      </p>
      <p>주소 : {store.storeAddr}</p>
      <p>연락처 : {store.storePhone}</p>
      <Link to={`/stores/${storeNo}/reservations`}>
        <button>예약하기</button>
      </Link>
    </>
  );
};

export default StoreDetail;
