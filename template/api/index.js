const
    path = require('path'),
    util = require('util'),
    router = require('express').Router()

let _logger = e => {
    // connect custom logger
    console.error(e)
}

let _ErrMsg = (num) => {
    let msg = {
        "1": "Invalid URI address",
        "2": "Invalid version of the API or the name of the module",
        "3": "The called method is not in the current version of the API, or you incorrectly specify the parameters in the URI"
    }

    return {
        error: {
            code: num, text: msg[num]
        }
    }
}

let _existsSync = (path) => {
    try {
        let d = fs.statSync(path);
        return util.isObject(d);
    } catch (e) {
        return false;
    }
}

let _checkApiLib = (version, module) => {
    let lib = path.join(__dirname, version, `${module}.js`);
    return _existsSync(lib) ? lib : false;
}

let _connectLib = (reqMethod = `get`, req, res, next) => {
    reqMethod = String(reqMethod).toLowerCase()

    try{
        if (!req.params.method || !req.params.module || !req.params.version)
            res.status(400).json(this._ErrMsg(1))

        else {

            // checked the availability of the required library and its methods
            if (_checkApiLib(req.params.version, req.params.module) === false)
                res.status(400).json(_ErrMsg(2))

            else {

                // connect API
                let API = require(_checkApiLib(req.params.version, req.params.module))

                // checked the availability of the called method
                if (API[reqMethod].hasOwnProperty(req.params.method))
                    API[reqMethod][req.params.method](req, res, null) // call
                else
                    res.status(400).json(_ErrMsg(3)) // a non-existent method
            }

        }
    }catch(e){
        e.message = `${reqMethod} method -->\n` + e.message;
        _logger(e);
        res.status(500).end();
    }
}


class AiLib {

    get(req, res, next) {
        _connectLib(`get`, req, res, next)
    }

    post(req, res, next) {
        _connectLib(`post`, req, res, next)
    }

    put(req, res, next) {
        _connectLib(`put`, req, res, next)
    }

    delete(req, res, next) {
        _connectLib(`delete`, req, res, next)
    }
}

let _AiLib = new AiLib


router.get('/:version/:module/:method', _AiLib.get)
router.get('/:version/:module/:method/:id', _AiLib.get)

router.post('/:version/:module/:method', _AiLib.post)

router.put('/:version/:module', _AiLib.put)
router.put('/:version/:module/:method', _AiLib.put)
router.put('/:version/:module/:method/:id', _AiLib.put)

router.delete('/:version/:module/:id', _AiLib.delete)
router.delete('/:version/:module/:method/:id', _AiLib.delete)

module.exports = router
