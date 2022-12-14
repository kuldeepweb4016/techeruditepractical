const router = require("express").Router();
const Record = require('../model/record.js')
const bcrypt = require('bcrypt');

// home page route
router.get("/", (req, res) => {
    res.status(200).json({ message: "Hello from home page!" })
})

// admin registration
router.post("/admin/singup", async (req, res) => {
        const {firstname,lastname,email,password} = req.body;
        const check= await Record.findOne({email:email})
        if(check==null){
            const hashedpass = await bcrypt.hash(password, 10);
            const adminrec = new Record({
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: hashedpass,
                role: "admin"
            });
         adminrec.save()
            res.status(201).json(adminrec)
        } else{
            res.status(400).json({message:"already existing"})
        }
       
    
});

// Customer registration
router.post("/customer/singup", async (req, res) => {
        const { firstname, lastname, email, password } = req.body;
        const check= await Record.findOne({email:email})
        if(check==null){
            const hashedpass = await bcrypt.hash(password, 10);
        const customerrec = new Record({
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: hashedpass,
            role: "customer"
        });
        await customerrec.save()
        res.status(201).json(customerrec)
        }
        else{
            res.status(400).json({message:"already existing"})
        }
        
});

// admin login route and verification
router.post("/admin/singin", async (req, res) => {
        const { mail, password } = req.body;
        const adminrec = await Record.findOne({ email: mail })
        if (adminrec && adminrec.role=="admin") {
            const compass = await bcrypt.compare(password, adminrec.password)
            if (compass) {
                res.status(200).json(adminrec)
            } else {
                res.status(400).json({ message: "wrong password" })
            }
        } else if(adminrec && adminrec.role=="customer") {
            res.status(400).json({ message: "You are not allowed to login from here" })
        }
        else {
            res.status(400).json({ message: "please create your account" })
        }
  
});

// customer login route and verification
router.post("/customer/singin", async (req, res) => {
        const { mail, password } = req.body;
        const customerrec = await Record.findOne({ email: mail })
        if (customerrec && customerrec.role=="customer") {
            const compass = await bcrypt.compare(password, customerrec.password)
            if (compass) {
                res.status(200).json(customerrec)
            } else {
                res.status(400).json({ message: "wrong password" })
            }
        } else if(customerrec && customerrec.role=="admin")  {
            res.status(400).json({ message: "You are not allowed to login from here" })
        }
        else {
            res.status(400).json({ message: "please create your account" })
        }
});



module.exports = router