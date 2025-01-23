const express = require("express");
var admin = require("firebase-admin");

var serviceAccount = require("./blockops-81ebe-firebase-adminsdk-fbsvc-10318de662.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Route to search for servers by owner UUID
app.get("/servers", async (req, res) => {
  try {
    const { uuid } = req.query;

    if (!uuid) {
      return res.status(400).json({ error: "Missing 'uuid' query parameter" });
    }

    // Query Firestore for servers with matching owner UUID
    const serversRef = db.collection("servers");
    const querySnapshot = await serversRef.where("owner", "==", uuid).get();

    if (querySnapshot.empty) {
      return res
        .status(404)
        .json({ message: "No servers found for the given UUID" });
    }

    // Format the results into an array
    const servers = [];
    querySnapshot.forEach((doc) => {
      servers.push({ id: doc.id, ...doc.data() });
    });

    return res.status(200).json(servers);
  } catch (error) {
    console.error("Error querying Firestore:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
