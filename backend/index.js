// // qmjrqK5RT7AQj5c3
// import { MongoClient } from "mongodb";
// import dotenv from "dotenv"
// dotenv.config()


// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(process.env.MONGO_URI, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

import express from 'express'
import cors  from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.listen(port, ()=>{
  console.log("listening at http://localhost:" + port)
})
app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running"})
})
// app.use()