import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await axios.get('http://localhost:5000/hall-booking/get-all-room');
      setRooms(res.data);
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            {room.name} - {room.seats} seats - {room.amenities.join(', ')} - ${room.pricePerHour}/hour
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
