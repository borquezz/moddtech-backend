require("dotenv/config");
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

// app config
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

// Wire up knex instance with Objection
const dbSetup = require("../db/databaseSetup");
dbSetup();

// Route imports
const stateRoutes = require("./routes/state");
const cityRoutes = require("./routes/city");
const clientRoutes = require("./routes/client");

// Route definition
app.use("/api/state", stateRoutes);
app.use("/api/city", cityRoutes);
app.use("/api/client", clientRoutes);

app.listen(8080, () => console.log("Server listening on port 8080"));
