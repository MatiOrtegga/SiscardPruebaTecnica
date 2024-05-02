import express from "express";
import router from "./routes/route";
import cors from "cors";
const app = express();
const port = 3000 || 3001;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
