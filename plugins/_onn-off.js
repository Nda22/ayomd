let fs = require("fs")
let fetch = require("node-fetch")

let handler = async (m, { conn, usedPrefix, isAdmin, isOwner, text, groupMetadata }) => {
	if (m.isGroup) {
	switch (text) {
case 'off':
	global.db.data.chats[m.chat].isBanned = true
	// conn.reply(m.chat, `Sekarang *Hikari* tidak akan merespon di grup *${groupMetadata.subject}*`, m )
	conn.fakeReply(m.chat, `Sekarang *Hikari* tidak akan merespon di grup *${groupMetadata.subject}*`, '0@s.whatsapp.net','Hikari Off')

break
case 'on':
	global.db.data.chats[m.chat].isBanned = false
	// conn.reply(m.chat, `Sekarang *Hikari* akan merespon di grup *${groupMetadata.subject}*`, m )
	conn.fakeReply(m.chat, `Sekarang *Hikari* akan merespon di grup *${groupMetadata.subject}*`, '0@s.whatsapp.net','Hikari On')
break
default:
	// conn.send2Button(m.chat, 'Silahkan pilih opsi Opsi ini untuk mengaktifkan/nonaktifkan bot untuk group', botdate, 'ON', '.hinami on', 'OFF', '.hinami off', m)
await conn.reply(m.chat, '*Silahkan pilih opsi on / off*\nOpsi ini untuk mengaktifkan/nonaktifkan bot untuk group\n\nPenggunaan : \n*#Hikari off / #Hikari on*', null, {
			contextInfo: {
				forwardingScore: 999,
				externalAdReply: {
    body: null,
    containsAutoReply: false,
    mediaType: 1,
    mediaUrl: pesan.img, 
    renderLargerThumbnail: true,
    showAdAttribution: false,
    sourceId: ' ',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: pesan.gcb,
    thumbnail: await(await fetch(pesan.img)).buffer(),
    thumbnailUrl: pesan.img, 
    title: 'ʜɪᴋᴀʀɪ-ʙᴏᴛ'
				}
			}
})
 
}
} else conn.sendButton(m.chat, `Silahkan ketik ${usedPrefix}menu`, wm, 'Menu', `${usedPrefix}menu`, m)
}
handler.help = ['ndaabotz *on / off*']
handler.tags = ['admin']
handler.command = /^(ndaa|ndaabotz)$/i

handler.admin = true
handler.owner = false

module.exports = handler

