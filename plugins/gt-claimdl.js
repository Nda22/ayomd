const free = 4
const prem = 5
let handler = async (m, { conn, usedPrefix, isPrems }) => {
  let user = db.data.users[m.sender]
  if (user.level < 1) return await conn.send3Button(m.chat, 'naikan level kamu', wm, 'Level Up', usedPrefix + 'levelup', 'Weekly', usedPrefix + 'weekly', 'Monthly', usedPrefix + 'monthly', m)
  let time = user.lastclaimdl + 86400000
  if (new Date - user.lastclaimdl < 86400000) return await conn.send2Button(m.chat, `Kamu sudah mengklaim klaim harian hari ini\ntunggu selama *🕒${msToTime(time - new Date())}* lagi`, wm, 'menu', usedPrefix + 'menu', 'claim2', usedPrefix + 'claim2', m)
  user.dl += isPrems ? prem * user.level : free * user.level
  conn.send2Button(m.chat, `+${isPrems ? prem * user.level : free * user.level} DL\n\nsemakin tinggi level, semakin tinggi juga DL yang didapat`, wm, 'menu', usedPrefix + 'menu', 'claim2', usedPrefix + 'claim2', m)
  user.lastclaimdl = new Date * 1
}
handler.help = ['claimdl']
handler.tags = ['gt']
handler.command = /^(claimdl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit"
}