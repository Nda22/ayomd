let handler = async (m, { conn, command }) => {

	let ne = await (await fetch('https://raw.githubusercontent.com/NdaaXD/database/main/nsfw/hentaivid.json')).json()

    

    let neko = conn.pickRandom(ne)

	conn.sendFile(m.chat, neko, 'hentai.mp4', 'By NdaaBotz-MD',m)

}

handler.help = ['hentaivt']

handler.tags = ['nsfw', 'new']

handler.command = /^(hentaivt)$/i

handler.premium = true

//By Ndaa?

module.exports = handler