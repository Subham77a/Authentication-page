import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

let userAuthenticated=false;

function Authenticated(req,res,next){
  const password=req.body["pett"];
  if(password=="rocky"){
    userAuthenticated=true;
  }
  next();
}
app.use(Authenticated);

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/public/index.html");
});

  app.post("/submit",(req,res)=>{
    if(userAuthenticated==true){
      res.sendFile(__dirname+"/public/index2.html");
    }
    else{
      res.sendFile(__dirname+"/public/index.html");
    }
  })


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
