const jwt = require("jsonwebtoken")
const secret = "MySecret"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTYzNTQ2OTk5NH0.FHsJz2K8ymgA8qNTkiilf1MmAK9JfIHVrZI2DEOj1VM"

const payload = jwt.verify(token,secret)

console.log("Payload:",payload)