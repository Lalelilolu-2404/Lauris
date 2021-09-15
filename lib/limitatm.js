const fs = require('fs')
/**
 * GET db
**/
const _limit = JSON.parse(fs.readFileSync('./src/limit.json'))
const _uang = JSON.parse(fs.readFileSync('./src/uang.json'))

/**
 * add atm user to db
 * params {string} userid
**/
const addATM = (sender) => {
	const objx = {id: sender, uang : 1}
    _uang.push(objx)
    fs.writeFileSync('./src/uang.json', JSON.stringify(_uang))
}

/**
 * add money user to db
 * params {string} userid
 * params {number} amount
 * 
**/
const addKoinUser = (sender, amount) => {
    let position = false
    Object.keys(_uang).forEach((i) => {
        if (_uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _uang[position].uang += amount
        fs.writeFileSync('./src/uang.json', JSON.stringify(_uang))
    }
}

/**
 * GET xp user from db
 * params {string} userid
 * return {number}
**/
const checkATMuser = (sender) => {
	let position = false
    Object.keys(_uang).forEach((i) => {
        if (_uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _uang[position].uang
    }
}

/**
 * pay limit
 * params {string} userid
 * params {number} amount
**/
const bayarLimit = (sender, amount) => {
	let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit -= amount
        fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
    }
}
	
/**
 * pick money user for pay limit
 * params {string} userid
 * Params {number} amount
**/
const confirmATM = (sender, amount) => {
	let position = false
    Object.keys(_uang).forEach((i) => {
        if (_uang[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _uang[position].uang -= amount
        fs.writeFileSync('./src/uang.json', JSON.stringify(_uang))
    }
}

/////
const atmCouldown = (sender) => {
	usedCommandRecently.add(from)
    setTimeout(() => {
        usedCommandRecently.delete(from)
    }, 10000) 
}

/////
/**
 * add limit because use feature
 * params {string} userid
**/
const limitAdd = (sender) => {
     let position = false
    Object.keys(_limit).forEach((i) => {
        if (_limit[i].id == sender) {
            position = i
        }
    })
    if (position !== false) {
        _limit[position].limit += 1
        fs.writeFileSync('./src/limit.json', JSON.stringify(_limit))
    }
} 

module.exports = {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd,
	atmCouldown
}
