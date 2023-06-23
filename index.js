const express = require("express");
const app = express();
const product = require("./api/product");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json({ extended: false }));



app.use("/", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
