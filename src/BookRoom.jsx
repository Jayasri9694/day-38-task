import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BookRoom() {
  const [rooms, setRooms] = useState([]);
  const [booking, setBooking] = useState({
    customerName: '',
    date: '',
    startTime: '',
    endTime: '',
    roomId: ''
  });

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await axios.get('http://localhost:3000/hall-booking/get-all-room');
      setRooms(res.data);
    };
    fetchRooms();
  }, []);

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/hall-booking/booking-room', booking);
      alert('Room booked successfully');
    } catch (error) {
      console.error(error);
      alert('Error booking room');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="customerName" placeholder="Customer Name" value={booking.customerName} onChange={handleChange} />
      <input name="date" type="date" value={booking.date} onChange={handleChange} />
      <input name="startTime" type="time" value={booking.startTime} onChange={handleChange} />
      <input name="endTime" type="time" value={booking.endTime} onChange={handleChange} />
      <select name="roomId" value={booking.roomId} onChange={handleChange}>
        <option value="">Select a Room</option>
        {rooms.map(room => (
          <option key={room._id} value={room._id}>
            {room.name} - {room.seats} seats
          </option>
        ))}
      </select>
      <button type="submit">Book Room</button>
    </form>
  );
}

export default BookRoom;
