const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const astraUrl = process.env.ASTRA_DB_URL;
const astraToken = process.env.ASTRA_DB_APPLICATION_TOKEN;

app.get("/tickets", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": astraToken,
    },
  };
  try {
    const response = await axios(`${astraUrl}?page-size=20`, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/tickets/:documentId", async (req, res) => {
  const documentId = req.params.documentId;
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": astraToken,
    },
  };
  try {
    const response = await axios(`${astraUrl}/${documentId}`, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": astraToken,
      "Content-Type": "application/json",
    },
    data: formData,
  };

  try {
    const response = await axios(astraUrl, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.put("/tickets/:documentId", async (req, res) => {
  const documentId = req.params.documentId;
  const data = req.body.data;
  const options = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": astraToken,
    },
    data,
  };
  try {
    const response = await axios(`${astraUrl}/${documentId}`, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.delete("/tickets/:documentId", async (req, res) => {
  const documentId = req.params.documentId;
  const options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "X-Cassandra-Token": astraToken,
    },
  };
  try {
    const response = await axios(`${astraUrl}/${documentId}`, options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});