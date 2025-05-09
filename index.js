import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {page: "profile"});
})

app.get("/settings/:page", (req, res) => {
    const validPages = ["profile", "security", "subscriptions", "privacy", "notification", "delete"];
    const page = req.params.page;

    if (!validPages.includes(page)) {
        return res.status(404).send("Page Not Found");
    }

    res.render("index.ejs", { page: page });
});


app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});
