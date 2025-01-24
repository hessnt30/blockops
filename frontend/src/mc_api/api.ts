"use server";

import "axios";
import axios from "axios";

export const startServer = async () => {
  try {
    await axios.post("http://10.0.0.198:5000/server/start");
  } catch (e) {
    console.error("Failed to start server", e);
  }
};

export const stopServer = async () => {
  try {
    await axios.post("http://10.0.0.198:5000/api/stop");
  } catch (e) {
    console.error("Failed to stop server", e);
  }
};
