const { json } = require("express");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const fs = require("fs");
const usersFile = path.join(__dirname, "./data/user.json")
app.use(express.json());
app.use(cors());


const listUsers =() =>{
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);

}
const lookForUser =(email, password) =>{
    const data = listUsers();
    const filteredData = data.filter(user => {
       return (user.email === email && user.password === password)
    })
    console.log("filtered data" + filteredData)
    return filteredData;
    // return filteredData[0].zipcode;
}


app.post("/signin", function (req, res) {
  const {email, password} = req.body;
  res.send(lookForUser(email, password))
});

// app.get("/users/:id", function (req, res) {
//   res.json({ userData });
// });

// app.post("/*", function (req, res) {
//     if (!req.body.userName || !req.body.password || !req.body.description) {
//     res.status(503).send("server requires something i dont have");
// });
// res.json(Signin(req.body));
// });

app.listen(5000, function () {
  console.log("server is running");
});
