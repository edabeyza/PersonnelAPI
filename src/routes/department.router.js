"use strict";

const { department } = require('../controllers/department.controller');

/* -------------------------------------------------------
                    EXPRESS - Personnel API
------------------------------------------------------- */

const router = require('express').Router()

router.route('/')
    .get(department.list)
    .post(department.create)

router.route('/:id')
    .get(department.read)
    .put(department.update) // genel
    .patch(department.update) // kısmi
    .delete(department.delete)

module.exports = router