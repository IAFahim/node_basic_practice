import express from "express";
import person from "./routes/person";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use("/person", person);

app.listen(app.get("port"), () => {
    console.log("App is running at http://localhost:%d", app.get("port"));
  }
);
