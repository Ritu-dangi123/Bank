const accountModel = require("../Models/accountModel");
const customerModel = require("../Models/customerModel");
const bcrypt = require("bcryptjs")

const submitcase = async (req,res) =>{
  const {submit,custId,status} = req.body;

  try {
    const account = await accountModel.create({
             custId  : custId,
             account : submit,
             status : status,
    })

     res.status(200).send("Succesfully Credited")

  } catch (error) {
    res.status(400).send("Not Credited ! Please Try Agai")
  }
   

}



const withdrwacase = async (req,res) =>{
  const {submit,custId,status} = req.body;

  try {
    const account = await accountModel.create({
             custId  : custId,
             account : submit,
             status : status,
    })

     res.status(200).send("Succesfully Debited ")

  } catch (error) {
    res.status(400).send("Not Debited ! Please Try Agai")
  }
   

}

const balanceinqury = async(req,res) =>{
    const { custid} = req.query;

    try {

        const data = await accountModel.find({custId:custid}).sort({date:-1}).limit(10);
        const data1 = await accountModel.find({custId:custid});
        console.log(data);
        res.status(200).send({data:data,data1:data1});
       
        
    } catch (error) {
        res.status(400).send({msg:"data base note connect"})
    }
    
}


const ministatement = async(req,res) =>{
   const {custid,fromdate,endDate} = req.body;

    try {
        
        let findData =await accountModel.find({    
                $and: [
                    {"date":{ $gte: fromdate ,
                    $lte: endDate }},
                  { custId:custid}
                ],
              })

          if(findData.length ==0){
            
            return res.status(400).send({msg:"false"})
          }
           res.status(200).send(findData)


    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
    
}

const emailotp = async (req, res) => {
    console.log(req.body);
    const { custId, oldpassword, newpassword, repassword } = req.body;

    try {
        
        const Customer = await customerModel.findById(custId);
        if (!Customer) {
            return res.status(404).send({ msg: "Customer not found!" });
        }

        
        if (!Customer.password) {
            return res.status(400).send({ msg: "Password not found for this user!" });
        }

        const passMatch = await bcrypt.compare(oldpassword, Customer.password);
        if (!passMatch) {
            return res.status(400).send({ msg: "Old Password Does Not Matched!" });
        }

        
        if (newpassword !== repassword) {
            return res.status(400).send({ msg: "New Password Does Not Matched" });
        }

        
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(newpassword, salt);
        await customerModel.findByIdAndUpdate(custId, { password: hashPassword });

        res.status(200).send("Password Updated Successfully!" );
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ msg1: "Internal Server Error" });
    }
};


module.exports = {
    submitcase,
    withdrwacase,
    balanceinqury,
    ministatement,
    emailotp
}