const fs = require('fs')
const crypto = require('crypto')

const _level = JSON.parse(fs.readFileSync('./src/level.json'))

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }
        
const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./src/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./src/level.json', JSON.stringify(_level))
        }
        
        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }
        
const getRankId = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
const nivelActual = _level[position].level
var rango = '🎭Principiante'
            if (nivelActual <= 5) {
                rango = '*Noob ㋡*'
            } else if (nivelActual <= 7) {
                rango = '*Noob I*'
            } else if (nivelActual <= 9) {
                rango = '*Noob II*'
	    } else if (nivelActual <= 11) {
                rango = '*Noob III*'
            } else if (nivelActual <= 15) {
                rango = '*Noob IV*'
            } else if (nivelActual <= 20) {
                rango = '*Noob V*'
	    } else if (nivelActual <= 25) {
                rango = '*Herald I*'
            } else if (nivelActual <= 30) {
                rango = '*Herald II*'
	    } else if (nivelActual <= 35) {
                rango = '*Herald III*'
            } else if (nivelActual <= 40) {
                rango = '*Herald IV*'
            } else if (nivelActual <= 45) {
                rango = '*Herald V*'
	    } else if (nivelActual <= 50) {
                rango = '*Guardian I*'
            } else if (nivelActual <= 55) {
                rango = '*Guardian II*'
	    } else if (nivelActual <= 60) {
                rango = '*Guardian III*'
            } else if (nivelActual <= 65) {
                rango = '*Guardian IV*'
            } else if (nivelActual <= 70) {
                rango = '*Guardian V*'
	    } else if (nivelActual <= 75) {
                rango = '*Crusader I*'
            } else if (nivelActual <= 80) {
                rango = '*Crusader II*'
	    } else if (nivelActual <= 85) {
                rango = '*Crusader III*'
            } else if (nivelActual <= 90) {
                rango = '*Crusader IV*'
            } else if (nivelActual <= 95) {
                rango = '*Crusader V*'
	} else if (nivelActual <= 100) {
                rango = '*Archon I*'
            } else if (nivelActual <= 105) {
                rango = '*Archon II*'
	    } else if (nivelActual <= 110) {
                rango = '*Archon III*'
            } else if (nivelActual <= 115) {
                rango = '*Archon IV*'
            } else if (nivelActual <= 120) {
                rango = '*Archon V*'
	} else if (nivelActual <= 125) {
                rango = '*Legend I*'
            } else if (nivelActual <= 130) {
                rango = '*legend II*'
	    } else if (nivelActual <=135) {
                rango = '*Legend III*'
            } else if (nivelActual <= 140) {
                rango = '*Legend IV*'
            } else if (nivelActual <= 145) {
                rango = '*Legend V*'
	} else if (nivelActual <= 150) {
                rango = '*Ancient I*'
            } else if (nivelActual <= 155) {
                rango = '*Ancient II*'
	    } else if (nivelActual <= 160) {
                rango = '*Ancient III*'
            } else if (nivelActual <= 165) {
                rango = '*Ancient IV*'
            } else if (nivelActual <= 170) {
                rango = '*Ancient V*'
	} else if (nivelActual <= 175) {
                rango = '*Divine I✷*'
            } else if (nivelActual <= 180) {
                rango = '*Divine II✷*'
	    } else if (nivelActual <= 185) {
                rango = '*Divine III✷*'
            } else if (nivelActual <= 190) {
                rango = '*Divine IV✷*'
            } else if (nivelActual <= 195) {
                rango = '*Divine V✷*'
	} else if (nivelActual <= 200) {
                rango = '*Immortal ✰¹*'
            } else if (nivelActual <= 210) {
                rango = '*Immortal ✩²*'
	    } else if (nivelActual <= 220) {
                rango = '*Immortal ✯³*'
            } else if (nivelActual <= 230) {
                rango = '*Immortal ✬⁴*'
            } else if (nivelActual <= 240) {
                rango = '*Immortal ✪⁵*'
	} else if (nivelActual <= 250) {
                rango = '*Mythic ✯¹*'
            } else if (nivelActual <= 260) {
                rango = '*Mythic ✯²*'
	    } else if (nivelActual <= 270) {
                rango = '*Mythic ✯³*'
            } else if (nivelActual <= 280) {
                rango = '*Mythic ✯⁴*'
            } else if (nivelActual <= 290) {
                rango = '*Mythic ✯⁵*'
	} else if (nivelActual <= 300) {
                rango = '*Shinigami ⍣*'
            } else if (nivelActual <= 350) {
                rango = '*Shinigami ≛*'
	    } else if (nivelActual <= 400) {
                rango = '*Shinigami ⍟*'
            } else if (nivelActual <= 450) {
                rango = '*Shinigami 上帝*'
            } else if (nivelActual <= 500) {
                rango = '*Awakened Shinigami 尔贡*'
	    } else if (nivelActual <= 600) {
                rango = '*Mythic Shinigami 尔贡*'
            } else if (nivelActual > 600) {
                rango = '*Mythic GOD 程度❗*'
            }                         
return rango
}
}      
        
        const getUserRank = (sender, _level) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === sender) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: sender, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./src/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const ranklvl = (_level) => {
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1) 
}                                
        
    const xpGain = new Set()
    
    const isGained = (sender) => {
    return !!xpGain.has(sender)
}
     const addCooldown = (sender) => {
    xpGain.add(sender)
    setTimeout(() => {
        return xpGain.delete(sender)
    }, 10000) 
}
     
const leveltab = (pushname, userLevel, userXp, patt) => {
const requiredXp = 5 * Math.pow(userLevel) + 50 * userLevel + 100
const requiredXp1 = 5 * Math.pow(userLevel, (3 / 2)) + 50 * userLevel + 100
var requiredXp2 = 5 * Math.pow((userLevel - 1), (3 / 2)) + 50 * (userLevel - 1) + 100
if (userLevel == 1) {
    requiredXp2 = 0
} 
const porcent = Math.round(((userXp - requiredXp2) * 100) / (requiredXp1 - requiredXp2))
const bar = [`[▒▒▒▒▒▒▒▒▒]`, `[███▒▒▒▒▒▒]`, `[████▒▒▒▒▒]`, `[██████▒▒▒]`, `[████████▒]`, `[█████████]`]
/**
const bar : [`[▒▒▒▒▒▒▒▒▒▒]`, `[█▒▒▒▒▒▒▒▒▒]`, `[██▒▒▒▒▒▒▒▒]`, `[███▒▒▒▒▒▒▒]`, `[████▒▒▒▒▒▒]`, `[█████▒▒▒▒▒]`, 
             `[██████▒▒▒▒]`, `[███████▒▒▒]`, `[████████▒▒]`, `[█████████▒]`, `[██████████]`]   
var selectbar = ``
if (porcent < 10) {
    selectbar = bar[0]
} else if (porcent >= 10 && porcent < 20) {
    selectbar = bar[1]
} else if (porcent >= 20 && porcent < 30) {
    selectbar = bar[2]
} else if (porcent >= 30 && porcent < 40) {
    selectbar = bar[3]
} else if (porcent >= 40 && porcent < 50) {
    selectbar = bar[4]
} else if (porcent >= 50 && porcent < 60) {
    selectbar = bar[5]
} else if (porcent >= 60 && porcent < 70) {
    selectbar = bar[6]
} else if (porcent >= 70 && porcent < 80) {
    selectbar = bar[7]
} else if (porcent >= 80 && porcent < 90) {
    selectbar = bar[8]
} else if (porcent >= 90 && porcent < 100) {
    selectbar = bar[9]
} else {
    selectbar = bar[10]
}
**/
if (porcent < 10) {
    selectbar = bar[0]
} else if (porcent > 10 && porcent < 20) {
    selectbar = bar[1]
} else if (porcent > 40 && porcent < 60) {
    selectbar = bar[2]
} else if (porcent > 60 && porcent < 80) {
    selectbar = bar[3]
} else if (porcent > 80 && porcent < 100) {
    selectbar = bar[4]
} else {
    selectbar = bar[5]
}

const moon = [`🌑` ,`🌘` ,`🌗` ,`🌖` ,`🌕` ,`🌔` ,`🌓` ,`🌒`]
var selectMoon1 = ``
var selectMoon2 = ``
if (porcent < 20) {
    selectMoon1 = moon[0]
    selectMoon2 = moon[0]
} else if (porcent >= 20 && porcent < 40) {
    selectMoon1 = moon[1]
    selectMoon2 = moon[7]
} else if (porcent >= 40 && porcent < 60) {
    selectMoon1 = moon[2]
    selectMoon2 = moon[6]
} else if (porcent >= 60 && porcent < 80) {
    selectMoon1 = moon[3]
    selectMoon2 = moon[5]
} else if (porcent >= 80) {
    selectMoon1 = moon[4]
    selectMoon2 = moon[4]
}

    return `
        ${selectMoon1}「 *༺Nivel༻* 」${selectMoon2}
💠 Nombre: @${sender.split("@")[0]}

│ ➣ LEVEL: ${userLevel} 💠
│ ➣ XP: ${userXp}🔮
│        └ ${selectbar} ${porcent}%
│ ➣ PATENTE: ${patt} 
    `
}
     
module.exports = {
     getLevelingXp, 
     getLevelingId, 
     addLevelingXp, 
     addLevelingLevel, 
     addLevelingId, 
     getLevelingLevel,
     getRankId,
     getUserRank,
     ranklvl,
     isGained,
     addCooldown,
     leveltab
}
