const Exchange =  require('../models/ExchangeRate')
const Announce =  require('../models/Theme/AnnounceModel')
const Information =  require('../models/Theme/InfoModel')
const Header =  require('../models/Theme/HeaderModel')
const Currency = require('../models/CurrencyModel')

exports.denemeRoute = (req,res)=>{
    res.send('oldu mk...')
}
exports.getAllRates = async (req,res)=>{
    const rates = await Exchange.find()
    res.status(200).json({data:rates})

};


exports.createRate = async (req,res)=>{
    const rate = await req.body;
try {
    Exchange.create(rate)
    res.json({
        data:rate
    })
    console.log(rate)
    
} catch (error) {
    res.json({error})
}
}
exports.deleteRate = async (req,res)=>{
    const {_id} = req.body;
    await Exchange.findByIdAndDelete(_id)
    res.status(400).json({
        success:true,
        message:"deleted"
    })
}

// Theme Controllers

exports.getAnnounce = async (req,res)=>{
try {
    const all = await Announce.find()
    res.json({
        all
    })
} catch (error) {
    res.json({
        error:error
    })
}

}
exports.editAnnounce = async (req,res)=>{
    const {_id,announce} = req.body
    console.log(req.body)

try {
    await Announce.findByIdAndUpdate(_id,{announce})
    res.json({
        message:success
    })
} catch (error) {
    res.json({
        error:error
    })
}

}
exports.createAnnounce = async (req,res)=>{
    const response = req.body
try {
    await Announce.create(response)
    res.json({
        message:"success"
    })
    console.log(response)
} catch (error) {
    res.json({
        error:error
    })
    console.log(error)
}

}
// Theme Information 

exports.getInformation = async (req,res)=>{
    try {
        const all = await Information.find()
        res.json({
            all
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
    
    }




exports.createInformation = async (req,res)=>{
    const response = req.body
try {
    await Information.create(response)
    res.json({
        message:"success"
    })
    console.log(response)
} catch (error) {
    res.json({
        error:error
    })
    console.log(error)
}



}

exports.editInformation = async (req,res)=>{
    const {_id,information} = req.body
    console.log(req.body)

try {
    await Information.findByIdAndUpdate(_id,{information})
    res.json({
        message:success
    })
} catch (error) {
    res.json({
        error:error
    })
}

}

// Header Edit

exports.getHeader = async (req,res)=>{
    try {
        const all = await Header.find()
        res.json({
            all
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
    
    }




exports.createHeader = async (req,res)=>{
    const response = req.body
try {
    await Header.create(response)
    res.json({
        message:"success"
    })
    console.log(response)
} catch (error) {
    res.json({
        error:error
    })
    console.log(error)
}



}

exports.editHeader = async (req,res)=>{
    const {_id,header} = req.body
    console.log(req.body)

try {
    await Header.findByIdAndUpdate(_id,{header})
    res.json({
        message:success
    })
} catch (error) {
    res.json({
        error:error
    })
}

}

// Currency

exports.addCurrency = async (req,res)=>{
    const response = req.body

    try{
        await Currency.create(response)
        res.json({
            message:success,
            data:response
        })
    } catch(error){
        res.json({
            error
        })
    }
}
exports.editCurrency = async (req,res)=>{
    const {_id,price} = req.body

    try{
        await Currency.findByIdAndUpdate(_id,{price})
        res.json({
            message:"success",
        })
    } catch(error){
        res.json({
            error
        })
    }
}
exports.editCurrencyActivity = async (req,res)=>{
    const {_id,activity} = req.body
    console.log(req.body)

    try{
        await Currency.findByIdAndUpdate(_id,{activity})
        res.json({
            message:"success",
        })
        console.log(activity)
    } catch(error){
        res.json({
            error
        })
    }
}
exports.deleteCurrency = async (req,res)=>{
    const {_id} = req.body
    console.log(_id)

    try{
        await Currency.findByIdAndDelete(_id)
        res.json({
            message:"success",
        })
    } catch(error){
        res.json({
            error
        })
    }
}
exports.getCurrency = async (req,res)=>{

    try{
        await Currency.find()
        .then((data)=>{
            res.json({
                data
            })
        })

    } catch(error){
        res.json({
            error
        })
    }
}
