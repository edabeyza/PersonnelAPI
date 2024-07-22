"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department =  require('../models/department.model')

module.exports.department = {
    list: async (req, res) => {
        
        const data = await res.getModelList(Department) // Pagination
        // const data = await Department.find({})

        res.status(200).send({
            error: false,
            data,
            detail: await res.getModelListDetails(Department)
        })
    },

    create: async (req, res) => {

        const data = await Department.create(req.body)

        res.status(201).send({
            error: false,
        })
    },

    read: async (req, res) => {

        const data = await Department.findOne({_id:req.params.id})
        res.status().send({
            error: false,
        })
    },

    update: async (req, res) => {

        const data = await Department.updateOne({ _id:req.params.id }, req.body, { runValidators:true })
        res.status().send({
            error: false,
            new: await Department.fndOne({_id:req.params.id})
        })
    },

    delete: async (req, res) => {

        await Department.deleteOne({_id: req.params.id})

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    }
}