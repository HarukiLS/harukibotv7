const a = '```'

exports.wait = () => {
	return`*「 AGUARDE 」 TO FAZENU GARAIO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL AINDA NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*para se registrar mande ${prefix}daftar Nome|Idade* \n*exemplo ${prefix}daftar Cú assado|18*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot, seu animal*`
}

exports.stikga = () => {
	return`*falhou, tente de novo*`
}

exports.linkga = () => {
	return`*desculpe, link inválido*`
}

exports.groupo = () => {
	return`*「SOMENTE EM GRUPO, POHA」*`
}

exports.ownerb = () => {
	return`*「SOMENTE DONO DO BOT!!! QM É VC, KRL?」*`
}

exports.ownerg = () => {
	return`*「SOMENTE DONO DO GRUPO」*`
}

exports.admin = () => {
	return`*「SOMENTE ADM DO GRUPO👮🏻‍♂️」*`
}

exports.badmin = () => {
	return`*「BOT PRECISA SER ADM」*`
}

exports.nsfwoff = () => {
	return`*NSFW NÃO ESTÁ ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTE:\n*se não recebeu significa que não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\nvocê se cadastrou com os dados: \n\n┏━⊱Nome\n┗⊱${namaUser}\n┏━⊱Número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade\n┗⊱${umurUser}\n┏━⊱Hora de Registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : Era uma vez um senhor que sempre comia o cú de qm ta lendo, fim.`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*desculpe ${pushname} essa n é a script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱Seu Level : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de comando : ${command}*\n*┗⊱Level necessário : ${aha}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu level não é suficiente*\n\n*┏⊱Seu Level : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de Comando : ${command}*\n*┗⊱Level Necessário : ${ahb}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu levem não é suficiente*\n\n*┏⊱Seu Level : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de Comando : ${command}*\n*┗⊱Tipo de Comando : ${ahc}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu level naonão é suficiente*\n\n*┏⊱Seu Level : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de Comando : ${command}*\n*┗⊱Levem Necessário : ${ahd}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu level não é suficiente*\n\n*┏⊱Seu Level : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de Comando : ${command}*\n*┗⊱Level Necessário : ${ahe}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu levem não é suficiente*\n\n*┏⊱Seu Level : ${getLevelingLevel(sender)}*\n*┣⊱Tipo de Comando : ${command}*\n*┗⊱Level Necessário: ${ahf}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord) => { 
	if (isOwner) {
	    owner = "Owner"
	} else if (!isOwner) {
	    owner = "User"
	}
	if (isGroup){
	return `
${a}❏ SOBRE O USUÁRIO{a}
 ${a}│ Nome : ${pushname}${a}
 ${a}│ Número : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Dono Do BOT : ${owner}${a}
 ${a}│ Sua Grana : Rp${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Role : ${role}${a}
 ${a}╰ Registros de usuário : ${_registered.length}${a}
 
${a}❏SOBRE O BOT${a}
 ${a}│ Nome : ${client.user.name}${a}
 ${a}│ browser : ${client.browserDescription[1]}${a}
 ${a}│ Server : ${client.browserDescription[0]}${a}
 ${a}│ Versão : ${client.browserDescription[2]}${a}
 ${a}│ Speed : ${process.uptime()}${a}
 ${a}│ Handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ Versão Do Zap : ${client.user.phone.wa_version}${a}
 
${a}❏SOBRE O GRUPO${a}
 ${a}│ Nome Do Grupo : ${groupMetadata.subject}${a}
 ${a}│ ADM Do Grupo : ${isGroupAdmins}${a}
 ${a}│ Dono Do Grupo : wa.me/${groupMetadata.owner.split("@")}${a}
 ${a}│ Total de Membros : ${groupMetadata.participants.length}${a}
 ${a}│ Total de ADMs : ${groupAdmins.length}${a}
 ${a}│ Bem Vindo : ${isWelkom}${a}
 ${a}│ antibadword : ${isBadWord}${a}
 ${a}│ leveling : ${isLevelingOn}${a}
 ${a}╰ antilink : ${isAntiLink}${a}
 
 
 ${a}「uso total de comando」${a}
 *${pepolu} usados*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}❏🐉MENU DE CRIAÇÃO🐉{a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏🐉MENU DIVERTIDO🐉${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}readmore${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}❏💮MUTUAL💮${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏🎶MENU DE MÍDIA🎶${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏🎶MÚSICA🎶${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}❏🔞NSFW🔞${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏💲LIMITE & GRANA💲${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏👥MENU DE GRUPO👥${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}│•${prefix}join${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏✴TOOLS✴${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏☁ARMAZENAMENTO NA NÚVEM☁${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏🔱MENU DO DONO🔱${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}

${a}❏🐉THANKS TO🐉${a}
 ${a}│${a}
 ${a}│ • 🐺⃟𝐂𝐡𝐚𝐤𝐚𝐥࿊𝐌𝐨𝐝𝐙𝐳⃟🔥${a}
 ${a}│ • ⁨⩺𝐷𝑎⵿⃗𝑛𝑡𝑒̼𑱡᪳𓇽𝐷𝑖𝑝𝑙𝑜𝑚𝑎⵿᪴𝑡𝑎᭪ᬽ⁩ ${a}
 ${a}│ • 🀄͜͡命͜͡ᴀɴɪᴍᴇᴢᴀɴᴅᴏ 2.0͜͡✇͜͡🔥 ${a}
 ${a}│ • Entre no Animezando: https://chat.whatsapp.com/EPJdZtbRGo0FusCyzc939I ${a}
 ${a}│${a}
 ${a}╰ • NOTA : mama o 🐺⃟𝐂𝐡𝐚𝐤𝐚𝐥࿊𝐌𝐨𝐝𝐙𝐳⃟🔥${a}
`
} else if (!isGroup) {
    return `
${a}❏ SOBRE O USUÁRIO${a}
 ${a}│ Nome : ${pushname}${a}
 ${a}│ Número : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Sua Grana : RS${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Role : ${role}${a}
 ${a}╰ Registros de Usuários : ${_registered.length}${a}
 
${a}❏SOBRE O BOT${a}
 ${a}│ • Nome : ${client.user.name}${a}
 ${a}│ • browser : ${client.browserDescription[1]}${a}
 ${a}│ • Server : ${client.browserDescription[0]}${a}
 ${a}│ • Versão : ${client.browserDescription[2]}${a}
 ${a}│ • Speed : ${process.uptime()}${a}
 ${a}│ • Handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • Versão Do Zap : ${client.user.phone.wa_version}${a}
 
 ${a}「uso total de comando」${a}
 *${pepolu} usados*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}❏🐉MENU DE CRIAÇÃO🐉${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏🐉MENU DIVERTIDO🐉${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}readmore${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}❏💮MUTUAL💮${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏🎶MENU DE MÍDIA🎶${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏🎶MÚSICA🎶${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}❏🔞NSFW🔞${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏💲LIMITE & GRANA💲${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏👥MENU DE GRUPO👥${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}│•${prefix}join${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏✴TOOLS✴${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏☁ARMAZENAMENTO NA NUVEM☁${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏🔱MENU DO DONO🔱${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}

${a}❏🐉THANKS TO🐉${a}
 ${a}│${a}
 ${a}│ • 🐺⃟𝐂𝐡𝐚𝐤𝐚𝐥࿊𝐌𝐨𝐝𝐙𝐳⃟🔥 ${a}
 ${a}│ • ⁨⩺𝐷𝑎⵿⃗𝑛𝑡𝑒̼𑱡᪳𓇽𝐷𝑖𝑝𝑙𝑜𝑚𝑎⵿᪴𝑡𝑎᭪ᬽ⁩ ${a}
 ${a}│ • 🀄͜͡命͜͡ᴀɴɪᴍᴇᴢᴀɴᴅᴏ 2.0͜͡✇͜͡🔥 ${a}
 ${a}│ • Entre no Animezando: https://chat.whatsapp.com/EPJdZtbRGo0FusCyzc939I ${a}
 ${a}│${a}
 ${a}╰ • NOTA : mama o 🐺⃟𝐂𝐡𝐚𝐤𝐚𝐥࿊𝐌𝐨𝐝𝐙𝐳⃟🔥${a}
`
}
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 PARABÉNS 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*desculpe ${pushname} O limite de hoje aumentou*\n*limite de compra para obter limite / subir de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「CONTAGEM DE LIMITE 」*
Seu limite : ${limitCounts}

NOTA : para chegar ao limite.  pode passar de nível para cima ou de buylimit`
}

exports.satukos = () => {
	return`*Adicionar parâmetro 1 /enable ou 0/disable*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Grana* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `Recurso AFK com sucesso *ativado*!\n\n➸ *Nome de Usuário*: ${pushname}\n➸ *Razão*: ${reason}`
}

exports.afkOnAlready = () => {
    return `O recurso AFK foi ativado de antemão.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 MODO AFK 」*\n\nToma trouxa! A pessoa está AFK, não se preocupe!\n➸ *Razão*: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* voltou do AFK!  Bem vindo de volta~`
}

exports.left = (num) => {
	return`Menos um crocodilo🐊 @${num.split('@')[0]} já tava fedendo aqui🐊`
}

exports.welcome = ( mdata , num ) => {
	return`Olá @${num.split('@')[0]}\Bem vindo ao grupo *${mdata.subject}* siga as regras e não seja Ghost`
}