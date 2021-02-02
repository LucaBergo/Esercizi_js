
const fs= require("fs")
const util= require("util")
const readfile= util.promisify(fs.readFile)

Promise.all( //crea una lista contenente delle promise risolte, una volta risolte tutte l array contiene una promise che andrò a risolvere, al primo errore rejecta tutto

    [
        readfile("./testo1.txt"),
        readfile("./testo2.txt")
    ]

)
.then((values) =>{console.log(values[0]+" "+values[1])})
/*Promise.all( 

    [readfile("./testo1.txt"),readfile("./testo2.txt")]

)
.then(values=>{fs.writeFile("./testo3.txt", values[0].toString()+" "+ values[1].toString(), (err)=>{if (err){throw err} console.log("Scritto con successo")} )}) */