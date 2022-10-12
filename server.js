import express from "express";
const port = 5000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", async (req, res) => {
  const { fullname, avatar } = req.body;

  if ((fullname, avatar)) {
    const firstname = fullname.split(" ")[0];
    const lastname = fullname.split(" ")[1];
    const link = `https://avatars.dicebear.com/api/${avatar}/${firstname}+${lastname}.svg`;
    res.render("avatar", { link });
  } else {
    res.render("home");
  }
});

app.get("/img", (req, res) => {
  res.render("avatar");
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
