/**
 module for working with users
 */

"use strict"

const users = [
    {name: 'Alexandre'},
    {name: 'Sébastien'}
]

class API {
    constructor() {

    }

    getList() {
        return users
    }
}

API = new API

module.exports = {
    Lib: API, // used to call a module
    get: {
        getList: (req, res) => {
            res.json(API.getList())
        },

        getUser: (req, res) => {
            let id = parseInt(req.params.id)

            if (id >= 0 && id < users.length)
                res.json(users[id])
            else
                res.sendStatus(404)
        }
    },
    post: {
        // templateMethod: (req, res, data) =>{}
    },
    put: {
        // templateMethod: (req, res, data) =>{}
    },
    delete: {
        // templateMethod: (req, res) =>{}
    }
}
