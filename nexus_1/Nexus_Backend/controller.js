const User = require("./userModel");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  module.exports.AddBorrower = async(req,res)=>{
    const _bId = req.body.B_Id;
    const _address = req.body.address;
    const _amount = req.body.amount;
    const newBorrow = await createBorrow(_bId,_address,_amount);
    res.send(newBorrow);
  }

  const createBorrow = async(_bId, _address,_amount)=>{
    const newUser = await User.create({
        BID: _bId,
        Address: _address ,
        creditScore: 700,
        amount: _amount
    })
  }