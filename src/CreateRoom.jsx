import React, { useState } from 'react';
import axios from 'axios';

function CreateRoom() {
  const [room, setRoom] = useState({
    name: '',
    seats: 0,
    amenities: '',
    pricePerHour: 0
  });

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/hall-booking/create-room', {
        ...room,
        amenities: room.amenities.split(',')
      });
      alert('Room created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating room');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Room Name" value={room.name} onChange={handleChange} />
      <input name="seats" placeholder="Seats" value={room.seats} onChange={handleChange} />
      <input name="amenities" placeholder="Amenities (comma-separated)" value={room.amenities} onChange={handleChange} />
      <input name="pricePerHour" placeholder="Price per Hour" value={room.pricePerHour} onChange={handleChange} />
      <button type="submit">Create Room</button>
    </form>
  );
}

export default CreateRoom;
