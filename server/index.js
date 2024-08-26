import express from "express";
// import bodyParser from 'body-parser';
import cors from "cors";
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import path from 'path';
import vehicleRoutes from "./routes/vehicleRoutes.js";
// import userRoutes from './routes/user.js';
// import orderRoutes from './routes/order.js';
// import uploadRoutes from './routes/upload.js';
// import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// dotenv.config();

const app = express();
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     });

app.use("/api/vehicles", vehicleRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/upload', uploadRoutes);
