import http from "node:http"

const app = http.createServer((req,res) => {
    res.write("Working eveting as expected")
    res.end()
})

app.listen(4999, () => {
    console.log("running http://localhost:4999")
})