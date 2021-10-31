
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,samu330,id) => {
lau = new WAConnection()
    lau.logger.level = 'warn'
    lau.version = [2, 2119, 6]
    lau.browserDescription = [ 'jadibot', '', '3.0' ]
    lau.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await samu330.sendMessage(id,buffer,MessageType.image,{caption:`Escanea este QR para convertirte en un bot temporal!\n\n1. Haga click en los tres puntos en la esquina superior derecha.\n2. Toque Dispositivos vinculados\n3. Escanea este QR\n\n*Nota:*\nEl codigo  QR se cambiara cada 30 segundos`})
    	setTimeout(() => {
       	samu330.deleteMessage(id, bot.key)
       },30000)
    })
    lau.on('connecting', () => {
    })
    lau.on('open', () => {
    	reply(`Se convierte en Bot\n\nDispositivo*:\n\n ${JSON.stringify(lau.user,null,2)}`)
    })
    await lau.connect({timeoutMs: 30 * 1000})
    listjadibot.push(lau.user)
    lau.on('chat-update', async (message) => {
        require('./lau.js')(lau, message)
    })
}

const stopjadibot = (reply) => {
	lau = new WAConnection();
	lau.close()
	reply(`Bien, dejaste de ser un Bot`)
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}
