
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
┏━━🥀 *Sobre o Usurário* 🥀━━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *Registro de Usuários : ${_registered.length}
┗━━━━━━━━━━━━━━━━

┏━━❉ *LEVEL 0* ❉━━┓
┣⊱ *${prefix}sticker*
┣⊱ *${prefix}tts*
┣⊱ *${prefix}toimg*
┣━━❉ *LEVEL 2* ❉━━
┣⊱ *${prefix}ocr*
┣⊱ *${prefix}quotemaker*
┣⊱ *${prefix}tiktokstalk*
┣⊱ *${prefix}fototiktok*
┣⊱ *${prefix}truth*
┣⊱ *${prefix}dare*
┣━━❉ *LEVEL 4* ❉━━
┣⊱ *${prefix}text3d*
┣⊱ *${prefix}bucin*
┣⊱ *${prefix}hilih*
┣⊱ *${prefix}persengay*
┣⊱ *${prefix}ssweb*
┣━━❉ *LEVEL 6* ❉━━
┣⊱ *${prefix}artinama*
┣⊱ *${prefix}spamcall*
┣⊱ *${prefix}quotes*
┣⊱ *${prefix}kbbi*
┣⊱ *${prefix}map*
┣⊱ *${prefix}cerpen*
┣━━❉ *LEVEL 8* ❉━━
┣⊱ *${prefix}chord*
┣⊱ *${prefix}lirik*
┣⊱ *${prefix}phlogo*
┣━━❉ *LEVEL 9* ❉━━
┣⊱ *${prefix}bisakah*
┣⊱ *${prefix}apakah*
┣⊱ *${prefix}kapankah*
┣⊱ *${prefix}rate*
┣⊱ *${prefix}owner*
┗━━━━━━━━━━━━━━

┏━━❉ *Nsfw* ❉━━━━┓
┣⊱ *${prefix}waifu*
┣⊱ *${prefix}anime*
┣⊱ *${prefix}neko*
┣⊱ *${prefix}dewabatch*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}indohot*
┗━━━━━━━━━━━━━━

┏━━❉ *Group* ❉━━━━┓
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add*
┣⊱ *${prefix}kick*
┣⊱ *${prefix}setname*
┣⊱ *${prefix}setdesc*
┣⊱ *${prefix}demote*
┣⊱ *${prefix}promote*
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━❉ *Owner* ❉━━
┣⊱ *${prefix}bc*
┣⊱ *${prefix}setprefix*
┣⊱ *${prefix}getses*
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block*
┣⊱ *${prefix}unblock*
┣⊱ *${prefix}leave*
┣⊱ *${prefix}clone*
┗━━━━━━━━━━━━━━━━
`
}
exports.help = help



  
