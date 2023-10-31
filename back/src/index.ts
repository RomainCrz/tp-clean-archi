import { Elysia } from "elysia";

const app = new Elysia()

app.get('/', () => {
  return "Hello World"
})
app.post("/customer/create", () => {
  return "Customer created"
})


app.listen(4000)