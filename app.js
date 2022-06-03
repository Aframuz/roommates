/*=============================================
=               IMPORT MODULES               =
=============================================*/
// 3rd party Modules
const express = require("express")
const dotenv = require("dotenv").config()
// Local Modules

// Core Modules
const path = require("path")

/*=============================================
=                  VARIABLES                  =
=============================================*/
const PORT = process.env.PORT || 3000
const app = express()

/*=============================================
=                 MIDDLEWARE                  =
=============================================*/
app.use(
   "/bootstrap",
   express.static(path.join(__dirname, "node_modules/bootstrap/dist"))
)
app.use(
   "/fa",
   express.static(
      path.join(__dirname, "node_modules/@fortawesome/fontawesome-free")
   )
)
app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "pug")

/*=============================================
=                   ROUTES                    =
=============================================*/

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})
