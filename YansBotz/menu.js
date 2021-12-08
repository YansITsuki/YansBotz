/*
MENU BY YANS
TEMANYA JANGAN DIUBAH PLISS :V
CreatorNya Jangan Diilangin Juga Napa Klo Gak Tambahin Kek Gitu-_
Base Sc KurrXd
*/
const fs = require('fs')
const settings = JSON.parse(fs.readFileSync('./YansBotz/settings.json'))
const prefix = settings.prefix
const funMenu = 
`
*╞════╡𝗙𝘂𝗻𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}bego
   *⌲* ${prefix}tolol
   *⌲* ${prefix}pinter
   *⌲* ${prefix}pintar
   *⌲* ${prefix}asu
   *⌲* ${prefix}bodoh
   *⌲* ${prefix}gay
   *⌲* ${prefix}lesby
   *⌲* ${prefix}bajingan
   *⌲* ${prefix}jancok
   *⌲* ${prefix}anjing
   *⌲* ${prefix}ngentod
   *⌲* ${prefix}ngentot
   *⌲* ${prefix}monyet
   *⌲* ${prefix}mastah
   *⌲* ${prefix}newbie
   *⌲* ${prefix}bangsat
   *⌲* ${prefix}bangke
   *⌲* ${prefix}sange
   *⌲* ${prefix}sangean
   *⌲* ${prefix}dakjal
   *⌲* ${prefix}horny
   *⌲* ${prefix}wibu
   *⌲* ${prefix}puki
   *⌲* ${prefix}pantexpantek
`
const ownerMenu = 
`
*╞════╡𝗢𝘄𝗻𝗲𝗿𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}autorespon [ _on/off_ ]
   *⌲* ${prefix}bc [ _teks/reply gif/image/video with caption_ ]
   *⌲* ${prefix}tobc [ _reply sticker/audio with caption_ ]
   *⌲* ${prefix}return [ _javascript_ ]
   *⌲* ${prefix}clearall
   *⌲* ${prefix}delchat
   *⌲* ${prefix}mute
   *⌲* ${prefix}unmute
   *⌲* ${prefix}public
   *⌲* ${prefix}self
   *⌲* ${prefix}spam [ _teks|jumlah_ ]
   *⌲* ${prefix}addcmd [ _teks reply stc_ ]
   *⌲* ${prefix}delcmd [ _reply stc_ ]
   *⌲* ${prefix}listcmd
   *⌲* ${prefix}spamsw [ _teks|jumlah_ ]
   *⌲* ${prefix}upswteks [ _teks_ ]
   *⌲* ${prefix}upswlokasi [ _teks_ ]
   *⌲* ${prefix}upswaudio [ _reply audio_ ]
   *⌲* ${prefix}upswvoice [ _reply audio_ ]
   *⌲* ${prefix}upswsticker [ _reply sticker_ ]
   *⌲* ${prefix}upswimage [ _reply image with caption_ ]
   *⌲* ${prefix}upswgif [ _reply gif with caption_ ]
   *⌲* ${prefix}upswvideo [ _reply video with caption_ ]
   *⌲* ${prefix}shutdown
   *⌲* ${prefix}offline [ _alasan_ ]
   *⌲* ${prefix}online
   *⌲* ${prefix}exif [ _nama|author_ ]
   *⌲* ${prefix}setprofile [ _reply image_ ]
   *⌲* ${prefix}setname [ _teks_ ]
   *⌲* ${prefix}setprefix [ _multi/nopref/prefix_ ]
   *⌲* ${prefix}setbio [ _teks_ ]
   *⌲* ${prefix}leave
   *⌲* ${prefix}restart
   *⌲* ${prefix}addrespon [ _tanya|jawab_ ]
   *⌲* ${prefix}delrespon [ _nama_ ]
   *⌲* ${prefix}listrespon
   *⌲* ${prefix}readall
   *⌲* ${prefix}unreadall
   *⌲* ${prefix}archive
   *⌲* ${prefix}unarchiveall
   *⌲* ${prefix}pin
   *⌲* ${prefix}unpin
   *⌲* ${prefix}setmenu [ _ori/simpel_ ]
   *⌲* ${prefix}setallmenu [ _ori/simpel_ ]
   *⌲* ${prefix}leavetime [ _detik/menit/jam_ ]
   *⌲* ${prefix}bukatime [ _detik/menit/jam_ ]
   *⌲* ${prefix}tutuptime [ _detik/menit/jam_ ]
   *⌲* ${prefix}nano [ _nama file_ ]
   *╞═════╡ 𝗘𝘃𝗮𝗹 ╞═════╡*
   *⌲* *x*
   *⌲* *>*
   *⌲* *=>*
   *⌲* *$*
`
const  gameMenu = 
`
*╞════╡𝗚𝗮𝗺𝗲𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}tebakgambar
   *⌲* ${prefix}caklontong
`
const wibuMenu =
`
*╞════╡𝗪𝗶𝗯𝘂𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}loli
   *⌲* ${prefix}husbu
   *⌲* ${prefix}milf
   *⌲* ${prefix}cosplay
   *⌲* ${prefix}wallml
`
const downloadMenu =
`
*╞═══╡𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗠𝗲𝗻𝘂╞═══╡*
   *⌲* ${prefix}infogempa
   *⌲* ${prefix}pinterest
   *⌲* ${prefix}herolist
   *⌲* ${prefix}herodetail [ _hero_ ]
   *⌲* ${prefix}google [ _search_ ]
   *⌲* ${prefix}gimage [ _search_ ]
   *⌲* ${prefix}wiki [ _search_ ]
   *⌲* ${prefix}mediafire [ _link_ ]
   *⌲* ${prefix}ytsearch [ _judul_ ]
   *⌲* ${prefix}ytmp4 [ _link yt_ ]
   *⌲* ${prefix}ytmp3 [ _link yt_ ]
   *⌲* ${prefix}play [ _judul lagu_ ]
   *⌲* ${prefix}video [ _judul video_ ]
   *⌲* ${prefix}tinyurl [ _link_ ]
   *⌲* ${prefix}fetch [ _link_ ]
   *⌲* ${prefix}igdl [ _link_ ]
   *⌲* ${prefix}tiktokdl [ _link_ ]
   *⌲* ${prefix}pinterest [ _search_ ]
   *⌲* ${prefix}lirik [ _judul_ ]
   *⌲* ${prefix}tourl [ _reply image/video_ ]
   *⌲* ${prefix}resepmasakan [ _judul_ ]
   *⌲* ${prefix}artimimpi [ _teks_ ]
   *⌲* ${prefix}bilangangka [ _angka_ ]
   *⌲* ${prefix}kalkulator [ _angka_ ]
   *⌲* ${prefix}fancytext [ _teks_ ]
   *⌲* ${prefix}githubstalk [ _username_ ]
   *⌲* ${prefix}translate [ _teks kodebhs_ ]
   *⌲* ${prefix}ss [ _link_ ]
   *⌲* ${prefix}playstore [ _search_ ]
   *⌲* ${prefix}tiktokaudio [ _link_ ]
   *⌲* ${prefix}brainly [ _search_ ]
   *⌲* ${prefix}igstory [ _search_ ]
   *⌲* ${prefix}igstalk [ _link_ ]
   *⌲* ${prefix}twitter [ _link_ ]
   *⌲* ${prefix}twmp3 [ _link_ ]
   *⌲* ${prefix}linkwa [ _search_ ]
   *⌲* ${prefix}fb [ _link_ ]
   *⌲* ${prefix}chara [ _search_ ]
   *⌲* ${prefix}otaku [ _search_ ]
   *⌲* ${prefix}komiku [ _search_ ]
`
const  makerMenu =
`
*╞════╡𝗠𝗮𝗸𝗲𝗿𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}blackpink
   *⌲* ${prefix}neon
   *⌲* ${prefix}greenneon
   *⌲* ${prefix}advanceglow
   *⌲* ${prefix}futureneon
   *⌲* ${prefix}sandwriting
   *⌲* ${prefix}sandsummer
   *⌲* ${prefix}sandengraved
   *⌲* ${prefix}metaldark
   *⌲* ${prefix}neonlight
   *⌲* ${prefix}holographic
   *⌲* ${prefix}text1917
   *⌲* ${prefix}minion
   *⌲* ${prefix}deluxesilver
   *⌲* ${prefix}newyearcard
   *⌲* ${prefix}bloodfrosted
   *⌲* ${prefix}halloween
   *⌲* ${prefix}jokerlogo
   *⌲* ${prefix}fireworksparkle
   *⌲* ${prefix}natureleaves
   *⌲* ${prefix}bokeh
   *⌲* ${prefix}toxic
   *⌲* ${prefix}strawberry
   *⌲* ${prefix}box3d
   *⌲* ${prefix}roadwarning
   *⌲* ${prefix}breakwall
   *⌲* ${prefix}icecold
   *⌲* ${prefix}luxury
   *⌲* ${prefix}cloud
   *⌲* ${prefix}summersand
   *⌲* ${prefix}horrorblood
   *⌲* ${prefix}thunder
   *⌲* ${prefix}pornhub
   *⌲* ${prefix}glitch
   *⌲* ${prefix}avenger
   *⌲* ${prefix}space
   *⌲* ${prefix}ninjalogo
   *⌲* ${prefix}marvelstudio
   *⌲* ${prefix}lionlogo
   *⌲* ${prefix}wolflogo
   *⌲* ${prefix}steel3d
   *⌲* ${prefix}wallgravity
   *⌲* ${prefix}shadow
   *⌲* ${prefix}cup
   *⌲* ${prefix}cup1
   *⌲* ${prefix}romance
   *⌲* ${prefix}smoke
   *⌲* ${prefix}burnpaper
   *⌲* ${prefix}lovemessage
   *⌲* ${prefix}undergrass
   *⌲* ${prefix}love
   *⌲* ${prefix}coffe
   *⌲* ${prefix}woodheart
   *⌲* ${prefix}woodenboard
   *⌲* ${prefix}summer3d
   *⌲* ${prefix}wolfmetal
   *⌲* ${prefix}nature3d
   *⌲* ${prefix}underwater
   *⌲* ${prefix}golderrose
   *⌲* ${prefix}summernature
   *⌲* ${prefix}letterleaves
   *⌲* ${prefix}glowingneon
   *⌲* ${prefix}fallleaves
   *⌲* ${prefix}flamming
   *⌲* ${prefix}harrypotter
   *⌲* ${prefix}carvedwood
   *⌲* ${prefix}arcade8bit
   *⌲* ${prefix}battlefield4
   *⌲* ${prefix}pubg
   *⌲* ${prefix}wetglass
   *⌲* ${prefix}multicolor3d
   *⌲* ${prefix}watercolor
   *⌲* ${prefix}luxurygold
   *⌲* ${prefix}galaxywallpaper
   *⌲* ${prefix}lighttext
   *⌲* ${prefix}beautifulflower
   *⌲* ${prefix}puppycute
   *⌲* ${prefix}royaltext
   *⌲* ${prefix}heartshaped
   *⌲* ${prefix}birthdaycake
   *⌲* ${prefix}galaxystyle
   *⌲* ${prefix}hologram3d
   *⌲* ${prefix}greenneon
   *⌲* ${prefix}glossychrome
   *⌲* ${prefix}greenbush
   *⌲* ${prefix}metallogo
   *⌲* ${prefix}noeltext
   *⌲* ${prefix}glittergold
   *⌲* ${prefix}textcake
   *⌲* ${prefix}starsnight
   *⌲* ${prefix}wooden3d
   *⌲* ${prefix}textbyname
   *⌲* ${prefix}writegalacy
   *⌲* ${prefix}galaxybat
   *⌲* ${prefix}snow3d
   *⌲* ${prefix}birthdayday
   *⌲* ${prefix}goldplaybutton
   *⌲* ${prefix}silverplaybutton
   *⌲* ${prefix}freefire
   *⌲* ${prefix}foliokanan [ _text_ ]
   *⌲* ${prefix}foliokiri [ _text_ ]
   *⌲* ${prefix}nuliskanan [ _text_ ]
   *⌲* ${prefix}nuliskiri [ _text_ ]
   *⌲* ${prefix}maker3d [ _text_ ]
   *⌲* ${prefix}maker2d [ _text_ ]
   *⌲* ${prefix}epepserti [ _text_ ]
`
const groupMenu =
`*╞════╡𝗚𝗿𝗼𝘂𝗽𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}getpict [ _@tag_ ]
   *⌲* ${prefix}getname [ _reply target_ ]
   *⌲* ${prefix}getbio [ _reply target_ ]
   *⌲* ${prefix}antilink [ _on/off_ ]
   *⌲* ${prefix}antivirtex [ _on/off_ ]
   *⌲* ${prefix}antiwame [ _on/off_ ]
   *⌲* ${prefix} welcome [ _on/off_ ]
   *⌲* ${prefix}creategrup [ _nama|@tag_ ]
   *⌲* ${prefix}tictactoe [ _@tag_ ]
   *⌲* ${prefix}delttt
   *⌲* ${prefix}kick
   *⌲* ${prefix}add
   *⌲* ${prefix}setgrupname
   *⌲* ${prefix}getpp
   *⌲* ${prefix}antiwame
   *⌲* ${prefix}getdeskgc
   *⌲* ${prefix}sider [ _reply pesan bot_ ]
   *⌲* ${prefix}hacked [ _teks_ ]
   *⌲* ${prefix}setnamegc [ _teks_ ]
   *⌲* ${prefix}setdeskgc [ _teks_ ]
   *⌲* ${prefix}fitnah [ _@tag|teks1|teks2_ ]
   *⌲* ${prefix}kontak [ _@tag|nama_ ]
   *⌲* ${prefix}kontag [ _@tag|nama_ ]
   *⌲* ${prefix}opengc
   *⌲* ${prefix}closegc
   *⌲* ${prefix}resetlinkgc
   *⌲* ${prefix}linkgrup
   *⌲* ${prefix}hidetag [ _teks_ ]
   *⌲* ${prefix}sticktag [ _nama sticker_ ]
   *⌲* ${prefix}totag [ _reply media_ ]
`
const toolsMenu = 
`

*╞════╡𝗧𝗼𝗼𝗹𝘀𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}sticker
   *⌲* ${prefix}stickerwm [ _nama|author_ ]
   *⌲* ${prefix}dadu
   *⌲* ${prefix}semoji [ _emoji_ ]
   *⌲* ${prefix}attp [ _teks_ ]
   *⌲* ${prefix}ttp [ _teks_ ]
   *⌲* ${prefix}ttp2 [ _teks_ ]
   *⌲* ${prefix}ttp3 [ _teks_ ]
   *⌲* ${prefix}ttp4 [ _teks_ ]
   *⌲* ${prefix}toimg
   *⌲* ${prefix}tomp3 [ _reply video_ ]
   *⌲* ${prefix}tomp4 [ _reply sticker gif_ ]
   *⌲* ${prefix}robot [ _reply audio_ ]
   *⌲* ${prefix}balik [ _reply audio_ ]
   *⌲* ${prefix}bass [ _reply audio_ ]
   *⌲* ${prefix}gemuk [ _reply audio_ ]
   *⌲* ${prefix}detikvn [ _reply audio caption angka_ ]
   *⌲* ${prefix}detikvideo [ _reply video caption angka_ ]
`
const storageMenu = 
`
*╞════╡𝗦𝘁𝗼𝗿𝗮𝗴𝗲╞════╡*
   *⌲* ${prefix}listimage
   *⌲* ${prefix}liststicker
   *⌲* ${prefix}listvn
   *⌲* ${prefix}addsticker [ _nama_ ]
   *⌲* ${prefix}delsticker [ _nama_ ]
   *⌲* ${prefix}addvn [ _nama_ ]
   *⌲* ${prefix}delvn [ _nama_ ]
   *⌲* ${prefix}addimage [ _nama_ ]
   *⌲* ${prefix}delimage [ _nama_ ]
`
const nfswMenu =
`
*╞═════╡𝗡𝗙𝗦𝗪╞═════╡*
   *⌲* ${prefix}bokep
   *⌲* ${prefix}neko
   *⌲* ${prefix}kanna
   *⌲* ${prefix}sagiri
   *⌲* ${prefix}megumin
   *⌲* ${prefix}wallnime
   *⌲* ${prefix}ass
   *⌲* ${prefix}ahegao
   *⌲* ${prefix}hentai
   *⌲* ${prefix}yuri
   *⌲* ${prefix}panties
   *⌲* ${prefix}neko
   *⌲* ${prefix}chiisaihentai
   *⌲* ${prefix}trap
   *⌲* ${prefix}blowjob
   *⌲* ${prefix}yaoi
   *⌲* ${prefix}ecchi
   *⌲* ${prefix}ahegao
   *⌲* ${prefix}hololewd
   *⌲* ${prefix}sideoppai
   *⌲* ${prefix}animefeets
   *⌲* ${prefix}animebooty
   *⌲* ${prefix}animethighss
   *⌲* ${prefix}hentaiparadise
   *⌲* ${prefix}animearmpits
   *⌲* ${prefix}hentaifemdom
   *⌲* ${prefix}lewdanimegirls
   *⌲* ${prefix}biganimetiddies
   *⌲* ${prefix}animebellybutton
   *⌲* ${prefix}hentai4everyone
   *⌲* ${prefix}bj
   *⌲* ${prefix}ero
   *⌲* ${prefix}cum
   *⌲* ${prefix}feet
   *⌲* ${prefix}yuri
   *⌲* ${prefix}trap
   *⌲* ${prefix}lewd
   *⌲* ${prefix}feed
   *⌲* ${prefix}eron
   *⌲* ${prefix}solo
   *⌲* ${prefix}gasm
   *⌲* ${prefix}poke
   *⌲* ${prefix}anal
   *⌲* ${prefix}holo
   *⌲* ${prefix}tits
   *⌲* ${prefix}kuni
   *⌲* ${prefix}kiss
   *⌲* ${prefix}erok
   *⌲* ${prefix}smug
   *⌲* ${prefix}baka
   *⌲* ${prefix}solog
   *⌲* ${prefix}feetg
   *⌲* ${prefix}lewdk
   *⌲* ${prefix}waifu
   *⌲* ${prefix}pussy
   *⌲* ${prefix}femdom
   *⌲* ${prefix}cuddle
   *⌲* ${prefix}eroyuri
   *⌲* ${prefix}cum_jpg
   *⌲* ${prefix}blowjob
   *⌲* ${prefix}erofeet
   *⌲* ${prefix}holoero
   *⌲* ${prefix}classic
   *⌲* ${prefix}erokemo
   *⌲* ${prefix}fox_girl
   *⌲* ${prefix}futanari
   *⌲* ${prefix}lewdkemo
   *⌲* ${prefix}wallpaper
   *⌲* ${prefix}pussy_jpg
   *⌲* ${prefix}kemonomimi
   *⌲* ${prefix}nsfw_avatar
`
const  otherMenu =
`
*╞════╡𝗢𝘁𝗵𝗲𝗿𝗠𝗲𝗻𝘂╞════╡*
   *⌲* ${prefix}quotes
   *⌲* ${prefix}meme
   *⌲* ${prefix}darkjoke
   *⌲* ${prefix}rate
   *⌲* ${prefix}kapankah
   *⌲* ${prefix}apakah
   *⌲* ${prefix}bisakah
   *⌲* ${prefix}caripesan [ _teks|jumlah_ ]
   *⌲* ${prefix}slots
   *⌲* ${prefix}suit [ _gunting/batu/kertas_ ]
   *⌲* ${prefix}tag [ _nomor_ ]
   *⌲* ${prefix}tagme
   *⌲* ${prefix}tts [ _kodebhs teks_ ]
   *⌲* ${prefix}readmore [ _teks1|teks2_ ]
   *⌲* ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]
   *⌲* ${prefix}chat [ _nomor|teks_ ]
   *⌲* ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]
   *⌲* ${prefix}listgrup
   *⌲* ${prefix}baileys [ _reply message_ ]
   *⌲* ${prefix}q [ _reply message_ ]
   *⌲* ${prefix}getcaption [ _reply message_ ]
   *⌲* ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]
   *⌲* ${prefix}sharelock [ _teks1|teks2_ ]
   *⌲* ${prefix}sound1 -    *⌲* ${prefix}sound75
`
const allMenu = 
`
${groupMenu}
${downloadMenu}
${funMenu}
${makerMenu}
${nfswMenu}
${toolsMenu}
${wibuMenu}
${gameMenu}
${storageMenu}
${otherMenu}
${ownerMenu}
`
module.exports = {
	ownerMenu,
	groupMenu,
	toolsMenu,
	storageMenu,
	wibuMenu,
	gameMenu,
	otherMenu,
	nfswMenu,
	funMenu,
	downloadMenu,
	makerMenu,
	allMenu
	}