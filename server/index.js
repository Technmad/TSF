const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./routes/payment");

// initialize app
const app = express();

//env variables
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/", (req, res) => {
  // Handle the root path
  res.send("Hello from the root path!"); // Send a simple response
});

app.use("/api/payment/", paymentRoutes);

//app listening
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening to port ${port}...`));

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
