const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Imagen no encontrada!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Tengo poca fe en esto : " : ""
    	let ecch = () => is_adult ? "Si" : "No"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
• 🏆Ecchi : *${ecch()}*
• 🎌Título japonés : *${title}*
• 🌆Tutulo romanji : *${title_romaji}*
• 🧊Título en inglés : *${title_english}*
• 🎞Episodio : *${episode}*
• 🎥Season  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`----`)
	}
})
const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 350,
  "frames": [
    "🌑",
    "🌒",
    "🌓",
    "🌔",
    "🌕",
    "🌕",
    "🌖",
    "🌗",
    "🌘"
  ]}
let globalSpinner;

const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
		/*setTimeout(() => {
			spins.succeed('load-spin', {text: 'Suksess'})
		}, Number(wait) * 1000)*/
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}


const banner = cfonts.render(('____'), {
    font: 'block',
    color: 'candy',
    align: 'center',
    gradient: ["red","yellow"],
    lineHeight: 1
  });

const createExif = (pack, auth) =>{
    const code = [0x00,0x00,0x16,0x00,0x00,0x00];
    const exif = {"sticker-pack-id": "com.client.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.marsvard.stickermakerforwhatsapp", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"};
    let len = JSON.stringify(exif).length;
    if (len > 256) {
        len = len - 256;
        code.unshift(0x01);
    } else {
        code.unshift(0x00);
    }
    if (len < 16) {
        len = len.toString(16);
        len = "0" + len;
    } else {
        len = len.toString(16);
    }
    const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
    const __ = Buffer.from(len, "hex");
    const ___ = Buffer.from(code);
    const ____ = Buffer.from(JSON.stringify(exif));
    fs.writeFileSync('./temp/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
        console.log(err);
        if (err) return console.error(err);
        return `./sticker/data.exif`;
    });
};

module.exports = { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, createExif, close }
