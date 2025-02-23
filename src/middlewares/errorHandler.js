"use strict";
/* -------------------------------------------------------
                 EXPRESS - Personnel API
------------------------------------------------------- */

module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500

    console.log('errorHandler worked.')

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause
        // stack: err.stack
    })
    console.log(err)
}