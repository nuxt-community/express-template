/**
 template API library

*/

"use strict"


class API{
    constructor(){

    }

    templateMethod(){

    }
}

API = new API

module.exports = {
    Lib: API, // used to call a module
    get: {
        templateMethod: (req, res) =>{
            API.templateMethod(/* params */)
                .then(result => res.json(result) )
                .catch(e => res.status(500).end() )
        }
    },
    post: {
        templateMethod: (req, res, data) =>{}
    },
    put: {
        templateMethod: (req, res, data) =>{}
    },
    delete: {
        templateMethod: (req, res) =>{}
    }
}
