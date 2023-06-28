
const express = require("express");

const reccomendationsRoutes = require("./v1/routes/reccomendationsRoutes");

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api/v1/recommendations", reccomendationsRoutes);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});