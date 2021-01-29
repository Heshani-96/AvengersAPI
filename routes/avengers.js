const express = require("express");
const router = express.Router();



let avengerArray = [
    { id: 1, name: "Thor" },
    { id: 2, name: "Hulk" },
    { id: 3, name: "Captain America" },
    { id: 4, name: "Black Panther" },
];

router.get("/", (req,res) => {
    res.send(avengerArray)
    });
    
    /*app.get("/api/avengers/1", (req,res) => {
    res.send(avengerArray[0]);
    })
    
    app.get("/api/avengers/2", (req,res) => {
        res.send(avengerArray[1]);
        })
    
        app.get("/api/avengers/3", (req,res) => {
            res.send(avengerArray[2]);
            })*/
    
    
     router.get("/:id", (req,res) => {
        //send avenger details for the requested id
        //res.send("ID:" + req.params.id);
        let requestedId = req.params.id;
        let avenger = avengerArray.find(avenger => avenger.id == requestedId);
        if(!avenger){
            return res
            .status(404)
            .send("Avenger you are looking for is doesn't exist");
        }
        //console.log(avenger);
        return res
        .status(200).send(avenger);
    }); 
    
    //this one is to do an update
    router.put("/:id", (req,res) => {
        let requestedId = req.params.id;
        let avenger = avengerArray.find(avenger => avenger.id == requestedId);
     if(!avenger){
            return res
            .status(404)
            .send("Avenger you are looking for is doesn't exist");
        }
        avenger.name = req.body.name;
        return res.send(avenger);
    });
    
    //how to create something
    router.post("/", (req, res) => {
    let newAvenger = {
        id : avengerArray.length + 1,
        name: req.body.name,
    };
    avengerArray.push(newAvenger);
    return res.send(newAvenger);
    });
    
    //Delete
    router.delete("/:id", (req,res) => {
        let avenger = avengerArray.find((a) => a.id == req.params.id);
        if(!avenger){
            res
               .status(400)
               .send("the avenger you are request does not exist");
               return
        }
        let indexOfAvenger = avengerArray.indexOf(avenger);
        avengerArray.splice(indexOfAvenger);
        res.send(avenger);
    })

    module.exports = router;