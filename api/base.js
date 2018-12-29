const express = require('express')
const Router = express.Router()
const model = require('../model/model')


const Base = model.getModel('base')

Router.post('/save',(req,res)=>{
    const { name } = req.body
    const baseData = new Base({name})
    baseData.save((e,d)=>{
        if(e){
            return res.json({code:1,msg:'服务出错了！！！'})
        }
        return res.json({code:200,msg:'添加成功'})
    })
})

Router.get('/test',(req,res)=>{
    return res.json({code:200,msg:'成功了'})
})

module.exports = Router