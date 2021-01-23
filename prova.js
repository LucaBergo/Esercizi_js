

const fs=require("fs")



fs.readFile("./testo1.txt", (err,data)=>{
    if (err) {
        throw err
    }
    const dati=data
    console.log(dati.toString()) //To string perchè i dati devono essere messi in stringa

    fs.readFile("./testo2.txt", (err,data)=>{
        if (err) {
            throw err
        }
        const dati2=data
        console.log(dati2.toString()) //metto la funzione dentro perchè sennò non so quale esegue per prima essendo funzioni asincrone
    
        fs.readFile("./testo3.txt", (err,data)=>{
            if (err) {
                throw err
            }
            const dati3=data
            console.log(dati3.toString())
            

            fs.writeFile("./testo4.txt",dati+" "+dati2+" "+dati3, (err)=>{  //passi il percorso del file, il dato da scrivere e la callback(err) senza ovviamente data
                if (err){
                    throw err
                }
                console.log("File scritto con successo")
            })

        
        
        })
    
        
    
    
    })

    


})