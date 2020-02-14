module.exports ={
    getHouse: (req, res)=>{
        const db = req.app.get('db')
        db.get_house()
            .then((house)=>res.status(200).send(house))
            .catch(err=>{
                res.status(500).send({errorMessage:"I Dont feel so good, Mr.Stark"})
            })
    },
    postHouse: (req, res)=>{
        const db = req.app.get('db')
        const {name, address, state, zipcode} = req.body
        db.create_house([name, address, state, zipcode])
            .then(()=>res.sendStatus(200))
            .catch( err =>{
                res.status(500).send({errorMessage:"I Dont feel so good, Mr.Stark"})
            })
    },
    deleteHouse: (req,res)=>{
        const db = req.app.get('db')
        const {id} = req.params
        console.log(id)
        db.delete_house(id)
            .then(()=>res.sendStatus(200))
            .catch(err=>{
                res.status(500).send({errorMessage:"I Dont feel so good, Mr.Stark"})
            })
    },
    updateHouse: (req, res) =>{
        const db = req.app.get('db')
        console.log(req.body.name)
        db.update_house([req.params.id, req.body.name])
            .then(()=>res.sendStatus(200))
            .catch(err=>{
                res.status(500).send({errorMessage:"I Dont feel so good, Mr.Stark"})
            })
    }
}