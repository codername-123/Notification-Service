const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use("/api", apiRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(ServerConfig.PORT, () => {
  console.log(`Server started listening on ${ServerConfig.PORT}`);
});
