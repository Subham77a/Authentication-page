import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

/*app.use((req,res,next)=>{
  console.log("request methord:",req.methord);
  next();
});
*/

function userData(req,res,next){
  console.log("request methord: ",req.methord);
  console.log("request URL: ",req.url);
  next();
}

app.use(userData);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
