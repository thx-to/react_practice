import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Reservation = () => {

  const { storeNo } = useParams();
  const [store, setStore] = useState(null);
  const [reservedTimes, setReservedTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState("");

  useEffect (() => {
    axios
      .get(`http://localhost:8111/stores/${storeNo}`)
      .then((response) => setStore(response.data))
      .catch((error) => console.error("오류 발생 : ", error));

      fetchReservedTimes();
  }, [storeNo, selectedDate]);

  const fetchReservedTimes = () => {

    axios
      .get(
        `http://localhost:8111/stores/${storeNo}/reservations?date=${selectedDate}`
      )
      .then((response) => setReservedTimes(response.data))
      .catch((error) => console.error("오류 발생 : ", error));
  };

  const handleReservation = () => {
    const reservation = {
      storeNo : store.storeNo,
      storeName : store.storeName,
      storePhone : store.storePhone,
      brandName : store.brandName,
      rTime : `${selectedDate} ${selectedTime}:00`,
    };

    axios
      .post(`http://localhost:8111/stores/${storeNo}/reservations`, reservation)
      .then(() => alert("예약 완료"))
      .catch((error) => console.error("오류 발생 : ", error));
  };

  if (!store) return <>Loading...</>;

  const generateTimeSlots = () => {
    const slots = [];
    const start = new Date(store.storeOpen);
    const end = new Date(store.storeClose);
    for (let time = start; time < end;
      time.setHours(time.getHours() + 1)) {
        slots.push(time.toLocaleTimeString([], {
          hour: '2-digit', minute: '2-digit'}));
      }
      return slots;
  };

  return (
    <>
    <h1>{store.storeName} 예약</h1>
    <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
    <>
    {generateTimeSlots().map(time => (
      <button key={time} onClick={() => setSelectedTime(time)} disabled={reservedTimes.includes(time)} style={{ backgroundColor: reservedTimes.includes(time) ? 'gray' : 'white' }}>{time}</button>
    ))}
    </>
    {selectedTime && (
      <button onClick={handleReservation}>예약 확정</button>
    )}
    </>
  );

}

export default Reservation;