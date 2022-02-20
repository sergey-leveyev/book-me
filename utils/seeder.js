const mongoose = require("mongoose");

const Room = require("../models/room");

const rooms = require("../data/rooms.json");

mongoose
  .connect("mongodb://localhost:27017/bookit")
  .then(() => console.log("Connected to local database"));

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    await Room.insertMany(rooms);
    console.log("All Room are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
