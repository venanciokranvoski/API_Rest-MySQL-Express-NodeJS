import app from "./app";

const port = 3002;
app.listen(port, ()=> {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Click http://localhost:${port}`);
})
