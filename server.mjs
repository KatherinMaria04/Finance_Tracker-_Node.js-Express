import express from "express";
import contactRoutes from './routes/contactRoutes.mjs';
import { config } from 'dotenv';
import errorHandler from "./middleware/errorHandler.mjs";
config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/contacts',contactRoutes);

app.use(errorHandler);
 
let server;

const startServer = (port) => {
  server = app.listen(port, () => {
    console.log(`Server running on port ${server.address().port}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Trying another port...`);
      setTimeout(() => {
        server.close();
        startServer(0); // Use 0 to let the OS assign an available port
      }, 1000);
    } else {
      console.error(`Error occurred: ${err.message}`);
    }
  });
};

startServer(port);

// Use setTimeout to keep the event loop alive
setTimeout(() => {
  // Asynchronous code goes here
  console.log('Asynchronous log');
}, 1000);

// Or, use an event listener to keep the event loop alive
process.stdin.resume();