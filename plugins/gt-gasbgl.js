let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix }) => {
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bgl / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'judi <jumlah>\n ' + usedPrefix + 'judi 1000', m)
        if (global.db.data.users[m.sender].bgl >= count * 1) {
            global.db.data.users[m.sender].bgl -= count * 1
            await m.reply('*Jangan judi gk bakal menang!!, kalau gk percaya gpp*') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `aku roll:${Aku}\nKamu roll: ${Kamu}\n\nkamu *Kalah*, kamu kehilangan ${count} BGL`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].bgl += count * 2
                conn.reply(m.chat, `aku roll:${Aku}\nKamu roll: ${Kamu}\n\nkamu *Menang*, kamu Mendapatkan ${count * 2} BGL`.trim(), m)
            }
        } else conn.reply(m.chat, `uang kamu tidak cukup untuk melakukan judi sebesar ${count} BGL`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Judi.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
    
handler.help = ['gasbgl <jumlah>']
handler.tags = ['gt']
handler.command = /^(gasbgl)$/i
handler.register = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}