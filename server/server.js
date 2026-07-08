require("dotenv").config();

console.log("User:", process.env.DB_USER);
console.log("Password:", process.env.DB_PASSWORD);

const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
