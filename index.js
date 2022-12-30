const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const courseRoutes = require("./routes/course");
const chapterRoutes = require("./routes/chapter");
const practiceQuestionRoutes = require("./routes/practiceQuestion");
const testQuestionRoutes = require("./routes/testQuestion");


// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/courses",courseRoutes);
app.use("/api/chapters",chapterRoutes);
app.use("/api/practiceQuestion",practiceQuestionRoutes);
app.use("/api/testQuestion",testQuestionRoutes);



app.listen(4000, () => console.log("server up and runing on port 4000!"));