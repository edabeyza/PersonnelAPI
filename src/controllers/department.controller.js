"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department =  require('../models/department.model')

module.exports.department = {
    list: async (req, res) => {
        
        const data = await res.getModelList(Department) // Pagination
        // const data = await Department.find({})

        res.status().send({
            error: false,
            data,
            detail: await res.getModelListDetails(Department)
        })
    },

    create: async (req, res) => {
        res.status().send({
            error: false,
        })
    },

    read: async (req, res) => {
        res.status().send({
            error: false,
        })
    },

    update: async (req, res) => {
        res.status().send({
            error: false,
        })
    },

    delete: async (req, res) => {
        res.status().send({
            error: false,
        })
    }
}