let fs = require('fs')
let handler = async (m, {conn, usedPrefix, text, command}) => {
  const json = JSON.parse(fs.readFileSync('./db/store.json'))
    let [t, n, d] = text.split`#`
    if (!t) throw `「 ❗ 」\nContoh pengunaan : \n${usedPrefix + command} <judul>#<nomor>#<desk>`
    if (!n) throw `「 ❗ 」\nContoh pengunaan : \n${usedPrefix + command} <judul>#<nomor>#<desk>`
    if (!d) throw `「 ❗ 」\nContoh pengunaan : \n${usedPrefix + command} <judul>#<nomor>#<desk>`
    
    json.push({name: t, desc: d, no: n})
    fs.writeFileSync('./db/store.json', JSON.stringify(json))
    m.reply('「 ✔️ 」\nBerhasil menambahkan iklan')
}
handler.tags = ['owner']
handler.help = ['addlist']
handler.command = /^(addlist)$/i
handler.owner = true

module.exports = handler
