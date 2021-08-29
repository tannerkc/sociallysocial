const mongoose = require("mongoose");
const bp = require('body-parser')

const authRoute = require("./routes/auth");
// const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");

const app = require('express')()
app.use(require('cors')())
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

const PORT = process.env.PORT || 8080

mongoose.connect(
    "mongodb+srv://admin:test@cluster0.a6vnk.mongodb.net/social?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

app.get('/', (req, res)=>{
    res.send('<h1>Socially social</h1>')
})

app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});