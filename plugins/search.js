const config = require('../settings'),
  fg = require('api-dylux'),
  os = require('os'),
  { cmd, commands } = require('../lib/command'),
  {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat,
  } = require('../lib/functions'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  vm = require('vm'),
  { IOSNEWS } = require('ios-news'),
  util = require('util'),
  { find } = require('raganork-bot'),
  fetch = require('node-fetch'),
  farrkey = require('xfarr-api'),
  ownername = '_VAJIRA RATHNAYAKA_',
  botname =
    '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB',
  owner = 'https://wa.me/94719199757',
  trueCaller = async (_0x22b252) => {
    try {
      var _0x4c53e1 = await find(_0x22b252, '', '')
    } catch {
      var _0x4c53e1 = false
    }
    return _0x4c53e1
  },
  { lyrics, lyricsv2 } = require('@bochilteam/scraper')
var { subsearch, subdl } = require('@sl-code-lords/si-subdl')
const Esana = require('@sl-code-lords/esana-news')
var api = new Esana()
const sirasanews = require('sirasa-news'),
  derananews = require('@kaveesha-sithum/derana-news'),
  wabetainfo = require('@sasmeee/wabetainfo')
var { SinhalaSub } = require('@sl-code-lords/movie-dl')
const uptime = process.uptime(),
  day = Math.floor(uptime / 86400),
  hours = Math.floor((uptime % 86400) / 3600),
  minutes = Math.floor((uptime % 3600) / 60),
  seconds = Math.floor(uptime % 60)
var tmsg5 = ''
if (config.LANG === 'SI') {
  tmsg5 = '*කරුණාකර මට ගීතයක නමක් දෙන්න. !*'
} else {
  tmsg5 = '*Please give me a song name. !*'
}
var descg1 = ''
if (config.LANG === 'SI') {
  descg1 = 'එය ලබා දී ඇති සංගීතයේ lyrics දෙයි.'
} else {
  descg1 = 'It gives lyrics of given song name.'
}
var cantscg = ''
if (config.LANG === 'SI') {
  cantscg = '*මට මේ ගීතයේ lyrics සොයාගත නොහැක !*'
} else {
  cantscg = '*I cant find lyrics of this song !*'
}
var tmsg = ''
if (config.LANG === 'SI') {
  tmsg = 'එය Tech news ලබා දෙයි.'
} else {
  tmsg = 'It gives Tech news.'
}
var tmsg2 = ''
if (config.LANG === 'SI') {
  tmsg2 = 'එය whatsapp beta news ලබා දෙයි.'
} else {
  tmsg2 = 'It gives whatsapp beta news.'
}
var tmsg3 = ''
if (config.LANG === 'SI') {
  tmsg3 = 'එය IOS news ලබා දෙයි.'
} else {
  tmsg3 = 'It gives IOS news.'
}
var desct = ''
if (config.LANG === 'SI') {
  desct = 'එය ඔබ ලබා දුන් දේ සඳහා chatgpt AI මත සොයයි.'
} else {
  desct = 'It search on chatgpt ai for what you provided.'
}
var needus = ''
if (config.LANG === 'SI') {
  needus = '*කරුණාකර මට chatgpt AI හි සෙවීමට වචන ලබා දෙන්න !*'
} else {
  needus = '*Please give me words to search on chatgpt ai !*'
}
var cantf = ''
if (config.LANG === 'SI') {
  cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
} else {
  cantf = '*Server is busy. Try again later.!*'
}
var desct = ''
if (config.LANG === 'SI') {
  desct = 'එය ලබා දී ඇති ip එක පිළිබඳ විස්තර සපයයි.'
} else {
  desct = 'It gives details of given ip.'
}
var needus1 = ''
if (config.LANG === 'SI') {
  needus1 = '*කරුණාකර මට ip එකක් ලබා දෙන්න !*'
} else {
  needus1 = '*Please give me a ip !*'
}
var cantf1 = ''
if (config.LANG === 'SI') {
  cantf1 = '*මට මෙම ip එක සොයාගත නොහැක !*'
} else {
  cantf1 = '*I cant find this ip !*'
}
var tmsg4 = ''
if (config.LANG === 'SI') {
  tmsg4 = '*කරුණාකර මට දුරකථන අංකයක් දෙන්න. !*'
} else {
  tmsg4 = '*Please give me phone number !*'
}
var descg = ''
if (config.LANG === 'SI') {
  descg = 'එය ලබා දී ඇති දුරකථන අංකයේ හිමිකරු සොයා ගනී.'
} else {
  descg = 'It find owner of given phone number.'
}
const _0x4ae5b6 = {}
_0x4ae5b6.pattern = 'tiktokstalk'
_0x4ae5b6.react = '\uD83C\uDF99️'
_0x4ae5b6.desc = 'To search tiktok username'
_0x4ae5b6.category = 'search'
_0x4ae5b6.use = '.tiktokstalk <tt user name>'
_0x4ae5b6.filename = __filename
cmd(
  _0x4ae5b6,
  async (
    _0x267047,
    _0x3bfda7,
    _0x497e4f,
    {
      from: _0x297628,
      l: _0x407302,
      quoted: _0x2ad646,
      body: _0x1d7840,
      isCmd: _0x2a512e,
      command: _0x2e9f26,
      args: _0x42a3cb,
      q: _0x2c64d5,
      isGroup: _0x62722b,
      sender: _0x26bb0c,
      senderNumber: _0x1433ab,
      botNumber2: _0xbf5efe,
      botNumber: _0x54658b,
      pushname: _0x424a9d,
      isMe: _0xe4ded4,
      isOwner: _0x1bc777,
      groupMetadata: _0x59bc66,
      groupName: _0x31fa1c,
      participants: _0x556732,
      groupAdmins: _0x7a5f20,
      isBotAdmins: _0x39573e,
      isAdmins: _0x133220,
      reply: _0x1d8ad5,
    }
  ) => {
    try {
      if (!_0x2c64d5) {
        return _0x1d8ad5('please give a tiktok username')
      }
      const _0x158e8d = await fetchJson(
        'https://api.maher-zubair.tech/stalk/tiktok?q=' + _0x2c64d5
      )
      let _0x4cdfdf =
        '\uD83D\uDC68‍\uD83D\uDCBB \uD835\uDDE9\uD835\uDDD4\uD835\uDDDD\uD835\uDDDC\uD835\uDDE5\uD835\uDDD4 \uD835\uDDE7\uD835\uDDE7 \uD835\uDDE8\uD835\uDDE6\uD835\uDDD8\uD835\uDDE5\uD835\uDDE1\uD835\uDDD4\uD835\uDDE0\uD835\uDDD8 \uD835\uDDE6\uD835\uDDD8\uD835\uDDD4\uD835\uDDE5\uD835\uDDD6\uD835\uDDDB\uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83D\uDCDA NAME:* ' +
        _0x158e8d.result.name +
        '\n*\uD83D\uDD16 USERNAME:* ' +
        _0x158e8d.result.username +
        '\n*\u26D3️ FOLLOWERS:* ' +
        _0x158e8d.result.followers +
        '\n*\u2728 FOLLOWING:* ' +
        _0x158e8d.result.following +
        '\n*\uD83D\uDCC3 DESCRIPTION:* ' +
        _0x158e8d.result.desc +
        '\n*\uD83D\uDC4D LIKES:* ' +
        _0x158e8d.result.likes +
        '\n*\uD83D\uDE80 BIO:* ' +
        _0x158e8d.result.bio
      const _0x2330ba = { url: _0x158e8d.result.profile }
      const _0x5c3b7b = {
        image: _0x2330ba,
        caption: _0x4cdfdf,
      }
      const _0x283a0a = { quoted: _0x3bfda7 }
      return await _0x267047.sendMessage(_0x297628, _0x5c3b7b, _0x283a0a)
      const _0x36d990 = {
        text: '\u2705',
        key: _0x3bfda7.key,
      }
      const _0x3be278 = { react: _0x36d990 }
      await _0x267047.sendMessage(_0x297628, _0x3be278)
    } catch (_0x22a31a) {
      _0x407302(_0x22a31a)
    }
  }
)
const _0x5cbbad = {}
_0x5cbbad.pattern = 'igstalk'
_0x5cbbad.react = '\uD83C\uDF99️'
_0x5cbbad.desc = 'To search instagram username'
_0x5cbbad.category = 'search'
_0x5cbbad.use = '.igstalk <tt user name>'
_0x5cbbad.filename = __filename
cmd(
  _0x5cbbad,
  async (
    _0x59d974,
    _0x2f2820,
    _0x3b7f38,
    {
      from: _0x1da48e,
      l: _0x334baf,
      quoted: _0x2a8fdb,
      body: _0x52b9e9,
      isCmd: _0x3c4029,
      command: _0x4ac515,
      args: _0x5d3238,
      q: _0x83ec94,
      isGroup: _0x25fce5,
      sender: _0x50d005,
      senderNumber: _0x36de74,
      botNumber2: _0x4adc1d,
      botNumber: _0x1c0737,
      pushname: _0x49e037,
      isMe: _0x2620cf,
      isOwner: _0x5441ec,
      groupMetadata: _0x450379,
      groupName: _0xbbf0f9,
      participants: _0x3d516f,
      groupAdmins: _0x562f57,
      isBotAdmins: _0x543e99,
      isAdmins: _0xe88e52,
      reply: _0x530d7c,
    }
  ) => {
    try {
      if (!_0x83ec94) {
        return _0x530d7c('please give a instagram username')
      }
      const _0x3ef3c0 = await fetchJson(
        'https://api.maher-zubair.tech/stalk/instagram?q=' + _0x83ec94
      )
      let _0x38749c =
        '\uD83D\uDC68‍\uD83D\uDCBB \uD835\uDDE9\uD835\uDDD4\uD835\uDDDD\uD835\uDDDC\uD835\uDDE5\uD835\uDDD4 \uD835\uDDDC\uD835\uDDDA \uD835\uDDE8\uD835\uDDE6\uD835\uDDD8\uD835\uDDE5\uD835\uDDE1\uD835\uDDD4\uD835\uDDE0\uD835\uDDD8 \uD835\uDDE6\uD835\uDDD8\uD835\uDDD4\uD835\uDDE5\uD835\uDDD6\uD835\uDDDB\uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83D\uDCDA NAME:* ' +
        _0x3ef3c0.result.username +
        '\n*\uD83D\uDD16 USERNAME:* ' +
        _0x3ef3c0.result.fullname +
        '\n*\u26D3️ FOLLOWERS:* ' +
        _0x3ef3c0.result.followers +
        '\n*\u2728 FOLLOWING:* ' +
        _0x3ef3c0.result.posts +
        '\n*\uD83D\uDCC3 DESCRIPTION:* ' +
        _0x3ef3c0.result.following +
        '\n*\uD83D\uDE80 BIO:* ' +
        _0x3ef3c0.result.bio
      const _0x2b7ca1 = { url: _0x3ef3c0.result.photo_profile }
      const _0x54ba18 = {
        image: _0x2b7ca1,
        caption: _0x38749c,
      }
      const _0x67b9eb = { quoted: _0x2f2820 }
      return await _0x59d974.sendMessage(_0x1da48e, _0x54ba18, _0x67b9eb)
      const _0x2b4842 = {
        text: '\u2705',
        key: _0x2f2820.key,
      }
      const _0x36bacd = { react: _0x2b4842 }
      await _0x59d974.sendMessage(_0x1da48e, _0x36bacd)
    } catch (_0x50d3aa) {
      _0x334baf(_0x50d3aa)
    }
  }
)
const _0x163a22 = {}
_0x163a22.pattern = 'news'
_0x163a22.react = '\uD83D\uDCF0'
_0x163a22.desc = 'news information'
_0x163a22.category = 'search'
_0x163a22.use = '.news'
_0x163a22.filename = __filename
cmd(
  _0x163a22,
  async (
    _0x41deab,
    _0xa56d74,
    _0x1560ad,
    {
      from: _0x5cdbd1,
      prefix: _0x4567a0,
      l: _0x381d74,
      quoted: _0x5989dc,
      body: _0x3012e8,
      isCmd: _0x1a488f,
      command: _0x372312,
      args: _0x4019a8,
      q: _0x363b1a,
      isGroup: _0x3da0fb,
      sender: _0x452d41,
      senderNumber: _0x4c2cfb,
      botNumber2: _0x13c7ef,
      botNumber: _0x2f6c00,
      pushname: _0x775e1,
      isMe: _0x439ca5,
      isOwner: _0x347250,
      groupMetadata: _0x3794a3,
      groupName: _0x5ecf89,
      participants: _0x18bd41,
      groupAdmins: _0x21eb0f,
      isBotAdmins: _0x132648,
      isAdmins: _0x3c4c2d,
      reply: _0xbe569f,
    }
  ) => {
    try {
      var _0x39f3d5 = _0xa56d74
      if (os.hostname().length == 12) {
        hostname = 'replit'
      } else {
        if (os.hostname().length == 36) {
          hostname = 'heroku'
        } else {
          if (os.hostname().length == 8) {
            hostname = 'koyeb'
          } else {
            hostname = os.hostname()
          }
        }
      }
      let _0x2cb907 = '```'
      if (config.ALIVE === 'default') {
        const _0x582d2c = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x4567a0 + 'derananews ' + _0x363b1a,
                  description: 'Derana News \uD83D\uDCF0',
                },
                {
                  title: '2',
                  rowId: _0x4567a0 + 'sirasanews ' + _0x363b1a,
                  description: 'Sirasa News \uD83D\uDCF0',
                },
                {
                  title: '3',
                  rowId: _0x4567a0 + 'hirunews ' + _0x363b1a,
                  description: 'Hiru News \uD83D\uDCF0',
                },
                {
                  title: '4',
                  rowId: _0x4567a0 + 'esananews ' + _0x363b1a,
                  description: 'Esana News \uD83D\uDCF0',
                },
                {
                  title: '5',
                  rowId: _0x4567a0 + 'technews ' + _0x363b1a,
                  description: 'Tech News \uD83D\uDCF0',
                },
                {
                  title: '6',
                  rowId: _0x4567a0 + 'nasanews ' + _0x363b1a,
                  description: 'Nasa News \uD83D\uDCF0',
                },
                {
                  title: '7',
                  rowId: _0x4567a0 + 'wabeta ' + _0x363b1a,
                  description: 'Wabeta News \uD83D\uDCF0',
                },
                {
                  title: '8',
                  rowId: _0x4567a0 + 'ios ' + _0x363b1a,
                  description: 'Ios News \uD83D\uDCF0',
                },
                {
                  title: '9',
                  rowId: _0x4567a0 + 'cricketnews ' + _0x363b1a,
                  description: 'Cricket News \uD83D\uDCF0',
                },
              ],
            },
          ],
          _0x3e82cf = {
            url: 'https://telegra.ph/file/cb9556cbbdfe190a14da2.jpg',
          }
        const _0x3ccee3 = {
          caption:
            '\u2756\u2500\u2500\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - ＮＥＷＳ \uD83D\uDC68‍\uD83D\uDCBB\u2500\u2500\u2756',
          image: _0x3e82cf,
          footer: config.FOOTER,
          buttonText: '\uD83D\uDD22 Reply below number,',
          sections: _0x582d2c,
          contextInfo: {},
        }
        _0x3ccee3.contextInfo.externalAdReply = {}
        _0x3ccee3.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x3ccee3.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x3ccee3.contextInfo.externalAdReply.mediaType = 1
        _0x3ccee3.contextInfo.externalAdReply.sourceUrl = ''
        _0x3ccee3.contextInfo.externalAdReply.thumbnailUrl = config.IMAGE
        _0x3ccee3.contextInfo.externalAdReply.sourceUrl =
          'https://wa.me/94719199757'
        _0x3ccee3.contextInfo.externalAdReply.mediaType = 1
        _0x3ccee3.contextInfo.externalAdReply.renderLargerThumbnail = true
        const _0x5ac1b7 = _0x3ccee3,
          _0x3f3624 = {}
        return (
          (_0x3f3624.quoted = _0xa56d74),
          await _0x41deab.replyList(_0x5cdbd1, _0x5ac1b7, _0x3f3624)
        )
      } else {
        const _0x126e14 = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x4567a0 + 'derananews ' + _0x363b1a,
                  description: 'Derana News \uD83D\uDCF0',
                },
                {
                  title: '2',
                  rowId: _0x4567a0 + 'sirasanews ' + _0x363b1a,
                  description: 'Sirasa News \uD83D\uDCF0',
                },
                {
                  title: '3',
                  rowId: _0x4567a0 + 'hirunews ' + _0x363b1a,
                  description: 'Hiru News \uD83D\uDCF0',
                },
                {
                  title: '4',
                  rowId: _0x4567a0 + 'esananews ' + _0x363b1a,
                  description: 'Esana News \uD83D\uDCF0',
                },
                {
                  title: '5',
                  rowId: _0x4567a0 + 'technews ' + _0x363b1a,
                  description: 'Tech News \uD83D\uDCF0',
                },
                {
                  title: '6',
                  rowId: _0x4567a0 + 'nasanews ' + _0x363b1a,
                  description: 'Nasa News \uD83D\uDCF0',
                },
                {
                  title: '7',
                  rowId: _0x4567a0 + 'wabeta ' + _0x363b1a,
                  description: 'Wabeta News \uD83D\uDCF0',
                },
                {
                  title: '8',
                  rowId: _0x4567a0 + 'ios ' + _0x363b1a,
                  description: 'Ios News \uD83D\uDCF0',
                },
                {
                  title: '9',
                  rowId: _0x4567a0 + 'cricketnews ' + _0x363b1a,
                  description: 'Cricket News \uD83D\uDCF0',
                },
              ],
            },
          ],
          _0x57ca84 = {
            caption: config.ALIVE,
            image: {},
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x126e14,
            contextInfo: {},
          }
        _0x57ca84.image.url = config.LOGO
        _0x57ca84.contextInfo.externalAdReply = {}
        _0x57ca84.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x57ca84.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x57ca84.contextInfo.externalAdReply.mediaType = 1
        _0x57ca84.contextInfo.externalAdReply.sourceUrl = ''
        _0x57ca84.contextInfo.externalAdReply.thumbnailUrl =
          'https://telegra.ph/file/cb9556cbbdfe190a14da2.jpg'
        _0x57ca84.contextInfo.externalAdReply.renderLargerThumbnail = true
        _0x57ca84.contextInfo.externalAdReply.showAdAttribution = true
        const _0x1c0184 = _0x57ca84,
          _0x297026 = {}
        return (
          (_0x297026.quoted = _0xa56d74),
          await _0x41deab.replyList(_0x5cdbd1, _0x1c0184, _0x297026)
        )
      }
    } catch (_0x4a4265) {
      _0xbe569f('*Error !!*')
      _0x381d74(_0x4a4265)
    }
  }
)
const _0x3dcd0e = {}
_0x3dcd0e.pattern = 'ios'
_0x3dcd0e.alias = ['apple', 'applenews']
_0x3dcd0e.react = '\uD83C\uDF4E'
_0x3dcd0e.desc = tmsg
_0x3dcd0e.category = 'search'
_0x3dcd0e.use = '.ios'
cmd(
  _0x3dcd0e,
  async (
    _0xa10639,
    _0x5bed3e,
    _0x34dfd6,
    {
      from: _0x2d4eaa,
      l: _0x3c621f,
      quoted: _0x3273de,
      body: _0x3622dd,
      isCmd: _0xb1a0f7,
      command: _0x2fb434,
      args: _0x58c397,
      q: _0x3f31c0,
      isGroup: _0x2b9a80,
      sender: _0x3b4cde,
      senderNumber: _0x2abcb6,
      botNumber2: _0x140b15,
      botNumber: _0x11188f,
      pushname: _0x29467e,
      isMe: _0x2b1789,
      isOwner: _0x46517c,
      groupMetadata: _0x2cb536,
      groupName: _0x301738,
      participants: _0x3d7523,
      groupAdmins: _0x4250b5,
      isBotAdmins: _0xd0725e,
      isAdmins: _0x5aa81e,
      reply: _0x5b086c,
    }
  ) => {
    try {
      const _0x564b67 = await fetchJson(
        'https://api.maher-zubair.tech/details/ios'
      )
      let _0x5cef08 =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ ＩＯＳ ＮＥＷＳ \uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83D\uDD16 Title:* ' +
        _0x564b67.result.title +
        '\n*\u26D3️ Link:* ' +
        _0x564b67.result.link +
        '\n*\uD83D\uDCDA Description:* ' +
        _0x564b67.result.desc
      const _0x7a3052 = { url: _0x564b67.result.images }
      const _0x5a4f33 = {
        image: _0x7a3052,
        caption: _0x5cef08,
      }
      const _0x392091 = { quoted: _0x5bed3e }
      return await _0xa10639.sendMessage(_0x2d4eaa, _0x5a4f33, _0x392091)
      const _0x2e4106 = {
        text: '\u2705',
        key: _0x5bed3e.key,
      }
      const _0x40cb5f = { react: _0x2e4106 }
      await _0xa10639.sendMessage(_0x2d4eaa, _0x40cb5f)
    } catch (_0x42efa7) {
      _0x3c621f(_0x42efa7)
    }
  }
)
const _0xd8e922 = {}
_0xd8e922.pattern = 'wabeta'
_0xd8e922.alias = ['wabetainfo', 'betawa']
_0xd8e922.react = '\u2714️'
_0xd8e922.desc = 'To see info of wabeta'
_0xd8e922.category = 'search'
_0xd8e922.use = '.wabeta'
cmd(
  _0xd8e922,
  async (
    _0x4c9c0f,
    _0xeafd7e,
    _0xf34eff,
    {
      from: _0x918973,
      l: _0x3411c3,
      quoted: _0xfe7243,
      body: _0x516b86,
      isCmd: _0x3110e8,
      command: _0xcd93b6,
      args: _0x38729e,
      q: _0x440bcc,
      isGroup: _0x49d480,
      sender: _0x1d10ce,
      senderNumber: _0x5b259e,
      botNumber2: _0x5295ad,
      botNumber: _0x571ea3,
      pushname: _0xfd9e93,
      isMe: _0x3f1e04,
      isOwner: _0xa403e8,
      groupMetadata: _0x2edf9b,
      groupName: _0x3adf39,
      participants: _0x4992e5,
      groupAdmins: _0x21dd6d,
      isBotAdmins: _0x192d1a,
      isAdmins: _0x1eefe0,
      reply: _0x4b038b,
    }
  ) => {
    try {
      const _0x33f59d = await fetchJson(
        'https://api.maher-zubair.tech/details/wabetainfo'
      )
      let _0x29ebc4 =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ ＷＡＢＥＴＡＩＮＦＯ \uD83D\uDC68‍\uD83D\uDCBB\n\n*\uD83E\uDD4F Title :* ' +
        _0x33f59d.result.title +
        '\n*\uD83D\uDCC5 Date :* ' +
        _0x33f59d.result.date +
        '\n*\uD83D\uDDA5️ Platform :* ' +
        _0x33f59d.result.subtitle +
        '\n*\uD83D\uDD17 URL :* ' +
        _0x33f59d.result.link +
        '\n*\uD83D\uDDDE️ Short Desc :* ' +
        _0x33f59d.result.desc
      const _0x10a7c9 = { url: _0x33f59d.result.image }
      const _0x49f5b8 = {
        image: _0x10a7c9,
        caption: _0x29ebc4,
      }
      const _0x42964a = { quoted: _0xeafd7e }
      return await _0x4c9c0f.sendMessage(_0x918973, _0x49f5b8, _0x42964a)
      const _0x162195 = {
        text: '\u2705',
        key: _0xeafd7e.key,
      }
      const _0xaa1b4b = { react: _0x162195 }
      await _0x4c9c0f.sendMessage(_0x918973, _0xaa1b4b)
    } catch (_0x36f9a3) {
      _0x3411c3(_0x36f9a3)
    }
  }
)
const _0x2f05df = {}
_0x2f05df.pattern = 'nasanews'
_0x2f05df.react = '\uD83D\uDCE1'
_0x2f05df.desc = 'To see nasa news info'
_0x2f05df.category = 'search'
_0x2f05df.use = '.nasanews'
cmd(
  _0x2f05df,
  async (
    _0x40acee,
    _0x247f3e,
    _0x2ce9dd,
    {
      from: _0x560322,
      l: _0x48911b,
      quoted: _0x570030,
      body: _0x505990,
      isCmd: _0x4a9aa1,
      command: _0x50498e,
      args: _0x423bce,
      q: _0x1efdb2,
      isGroup: _0x16606d,
      sender: _0x5bcdb3,
      senderNumber: _0x1e9db2,
      botNumber2: _0x34ae12,
      botNumber: _0x82c255,
      pushname: _0x129e5f,
      isMe: _0x280ee2,
      isOwner: _0x580877,
      groupMetadata: _0x391781,
      groupName: _0x5052d0,
      participants: _0x45b946,
      groupAdmins: _0x42b5eb,
      isBotAdmins: _0x551e5f,
      isAdmins: _0xc9dda,
      reply: _0x17cfa1,
    }
  ) => {
    try {
      const _0x1e09c3 = await fetchJson(
          'https://api.maher-zubair.tech/details/nasa'
        ),
        _0x4cdb86 =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ ＮＡＳＡ ＮＥＷＳ \uD83D\uDC68‍\uD83D\uDCBB\n\n\uD83E\uDE84 \uD835\uDE4F\uD835\uDE44\uD835\uDE4F\uD835\uDE47\uD835\uDE40: ' +
          _0x1e09c3.result.title +
          '\n\uD83D\uDCC6\uD835\uDE3F\uD835\uDE3C\uD835\uDE4F\uD835\uDE40: ' +
          _0x1e09c3.result.date +
          '\n\uD83D\uDE80 \uD835\uDE51\uD835\uDE40\uD835\uDE4D\uD835\uDE4E\uD835\uDE44\uD835\uDE4A\uD835\uDE49: ' +
          _0x1e09c3.result.service_version +
          '\n\uD83D\uDD16\uD835\uDE50\uD835\uDE4D\uD835\uDE47: ' +
          _0x1e09c3.result.url +
          '\n\uD83D\uDCDD \uD835\uDE40\uD835\uDE53\uD835\uDE4B\uD835\uDE47\uD835\uDE3C\uD835\uDE49\uD835\uDE3C\uD835\uDE4F\uD835\uDE44\uD835\uDE4A\uD835\uDE49: ' +
          _0x1e09c3.result.explanation,
        _0x2683d1 = { url: _0x1e09c3.result.hdurl }
      const _0xec8a85 = {
        image: _0x2683d1,
        caption: _0x4cdb86,
      }
      const _0x5d44b6 = { quoted: _0x247f3e }
      return _0x40acee.sendMessage(_0x560322, _0xec8a85, _0x5d44b6)
      const _0x332880 = {
        text: '\u2705',
        key: _0x247f3e.key,
      }
      const _0x12afa5 = { react: _0x332880 }
      await _0x40acee.sendMessage(_0x560322, _0x12afa5)
    } catch (_0x2dfab3) {
      _0x48911b(_0x2dfab3)
    }
  }
)
const _0xa3783b = {}
_0xa3783b.pattern = 'technews'
_0xa3783b.alias = ['tech', 'gadgets360']
_0xa3783b.react = '\uD83D\uDCE1'
_0xa3783b.desc = tmsg
_0xa3783b.category = ''
_0xa3783b.use = '.technews'
cmd(
  _0xa3783b,
  async (
    _0x4e6ec5,
    _0x5425b9,
    _0x5298e3,
    {
      from: _0x13240d,
      l: _0x5a4b48,
      prefix: _0x320251,
      quoted: _0x13d0f3,
      body: _0xbd2ca5,
      isCmd: _0x152bb2,
      command: _0x4c334b,
      args: _0x5bca2a,
      q: _0x23d7b5,
      isGroup: _0xece2cb,
      sender: _0x279b6d,
      senderNumber: _0x2f303d,
      botNumber2: _0x1f40f1,
      botNumber: _0x4d956a,
      pushname: _0x1f76f6,
      isMe: _0x30b846,
      isOwner: _0x51ecf5,
      groupMetadata: _0x3e169b,
      groupName: _0x5dca68,
      participants: _0x3e38c2,
      groupAdmins: _0x523807,
      isBotAdmins: _0xdde3eb,
      isAdmins: _0x38180e,
      reply: _0x25383a,
    }
  ) => {
    try {
      const _0x1c6c54 = require('tech-news-scraper'),
        _0x46f075 = await _0x1c6c54.allNews()
      let _0x2bd7b6 =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ ＴＥＣＨ ＮＥＷＳ \uD83D\uDC68‍\uD83D\uDCBB\n\n'
      for (let _0x204d21 = 0; _0x204d21 < 16; _0x204d21++) {
        _0x2bd7b6 += '*\u26D3️ No:* ' + _0x46f075.result[_0x204d21].no + '\n'
        _0x2bd7b6 +=
          '*\uD83D\uDCC3 Title:* ' + _0x46f075.result[_0x204d21].title + '\n'
        _0x2bd7b6 +=
          '*\uD83D\uDCDA CatName:* ' +
          _0x46f075.result[_0x204d21].catname +
          '\n'
        _0x2bd7b6 +=
          '*\uD83D\uDD52 Time:* ' + _0x46f075.result[_0x204d21].date + '\n'
        _0x2bd7b6 +=
          '*\uD83D\uDCCE Link:* ' +
          _0x46f075.result[_0x204d21].link +
          '\n\n--------------------------------------------\n\n\n'
      }
      return await _0x25383a(_0x2bd7b6)
      const _0x43f8dd = { url: _0x46f075.result[i].img }
      const _0x1eee99 = {
        image: _0x43f8dd,
        caption: _0x2bd7b6,
      }
      const _0x45a9f3 = { quoted: _0x5425b9 }
      return await _0x4e6ec5.sendMessage(_0x13240d, _0x1eee99, _0x45a9f3)
      const _0xadeb81 = {
        text: '\u2705',
        key: _0x5425b9.key,
      }
      const _0x479287 = { react: _0xadeb81 }
      await _0x4e6ec5.sendMessage(_0x13240d, _0x479287)
    } catch (_0x39a9d5) {
      _0x25383a()
      _0x5a4b48(_0x39a9d5)
    }
  }
)
const _0x4163cc = {}
_0x4163cc.pattern = 'sirasanews'
_0x4163cc.react = '\uD83C\uDF99️'
_0x4163cc.desc = 'To see esana news'
_0x4163cc.category = ''
_0x4163cc.use = '.esananews'
_0x4163cc.filename = __filename
cmd(
  _0x4163cc,
  async (
    _0x3d7e8b,
    _0x55b0a7,
    _0x5ce7c9,
    {
      from: _0x5c84b3,
      l: _0x14bd23,
      prefix: _0x1e3a33,
      quoted: _0x24aa42,
      body: _0x2836c2,
      isCmd: _0x21afed,
      command: _0xaa2a1a,
      args: _0x357681,
      q: _0x4146b0,
      isGroup: _0x474175,
      sender: _0x1a7e40,
      senderNumber: _0x4e059e,
      botNumber2: _0x53bd02,
      botNumber: _0x12078f,
      pushname: _0x1e181a,
      isMe: _0x11a6d6,
      isOwner: _0x1c0a03,
      groupMetadata: _0x5b49f5,
      groupName: _0x56b18a,
      participants: _0x411b20,
      groupAdmins: _0x2be720,
      isBotAdmins: _0x1f12e5,
      isAdmins: _0x34d684,
      reply: _0x455cc2,
    }
  ) => {
    const _0x1fcf8e = await sirasanews()
    try {
      const _0x54782b =
          '\u26F6 \uD835\uDE51\uD835\uDE3C\uD835\uDE45\uD835\uDE44\uD835\uDE4D\uD835\uDE3C \uD835\uDE48\uD835\uDE3F \uD835\uDE4E\uD835\uDE44\uD835\uDE4D\uD835\uDE3C\uD835\uDE4E\uD835\uDE3C \uD835\uDE49\uD835\uDE40\uD835\uDE52\uD835\uDE4E \u26F6    \n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD4B\uD835\uDD40\uD835\uDD4B\uD835\uDD43\uD835\uDD3C:* ' +
          _0x1fcf8e.result.title +
          '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD3B\uD835\uDD38\uD835\uDD4B\uD835\uDD3C \uD835\uDD38ℕ\uD835\uDD3B \uD835\uDD4B\uD835\uDD40\uD835\uDD44\uD835\uDD3C* : ' +
          _0x1fcf8e.result.dateandtime +
          '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD3B\uD835\uDD3C\uD835\uDD4Aℂℝ\uD835\uDD40\uD835\uDD43\uD835\uDD4B\uD835\uDD40\uD835\uDD46ℕ:* ' +
          _0x1fcf8e.result.description +
          '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *ℕ\uD835\uDD3C\uD835\uDD4E\uD835\uDD4A \uD835\uDD43\uD835\uDD40ℕ\uD835\uDD42:* ' +
          _0x1fcf8e.result.link,
        _0x5dce85 = { url: _0x1fcf8e.result.image }
      const _0x27edbf = {
        image: _0x5dce85,
        caption: _0x54782b,
      }
      const _0x567fed = { quoted: _0x55b0a7 }
      await _0x3d7e8b.sendMessage(_0x5c84b3, _0x27edbf, _0x567fed)
      const _0x4eee71 = {
        text: '\u2705',
        key: _0x55b0a7.key,
      }
      const _0x46f842 = { react: _0x4eee71 }
      await _0x3d7e8b.sendMessage(_0x5c84b3, _0x46f842)
    } catch (_0x3b0921) {
      _0x455cc2(), _0x14bd23(_0x3b0921)
    }
  }
)
const _0x22e91a = {}
_0x22e91a.pattern = 'esananews'
_0x22e91a.react = '\uD83C\uDF99️'
_0x22e91a.desc = 'To see esana news'
_0x22e91a.category = ''
_0x22e91a.use = '.sirasa'
_0x22e91a.filename = __filename
cmd(
  _0x22e91a,
  async (
    _0x577d5c,
    _0x1949ff,
    _0x37c610,
    {
      from: _0x2c2a95,
      l: _0x441e3f,
      prefix: _0x330035,
      quoted: _0x2d76f0,
      body: _0x5216ac,
      isCmd: _0x4beb15,
      command: _0x3b4392,
      args: _0x4886fc,
      q: _0x2383f7,
      isGroup: _0xc0da57,
      sender: _0x369caf,
      senderNumber: _0x2a660d,
      botNumber2: _0x470362,
      botNumber: _0x31d432,
      pushname: _0x1d27b9,
      isMe: _0x3f3da6,
      isOwner: _0x548a42,
      groupMetadata: _0x3173b4,
      groupName: _0x485f24,
      participants: _0x498b69,
      groupAdmins: _0x3c56d7,
      isBotAdmins: _0x1fb8d7,
      isAdmins: _0x3b3f28,
      reply: _0x53f1d8,
    }
  ) => {
    try {
      const _0x319cb4 = await api.latest_id(),
        _0x136e20 = _0x319cb4.results.news_id
      let _0x141e57 = _0x2383f7 || _0x136e20
      const _0x398af9 = await api.news(_0x141e57),
        _0x268840 = _0x398af9.results,
        _0x2314b6 = { url: _0x268840.COVER }
      const _0xd57134 = {
        image: _0x2314b6,
        caption:
          '\n*\u2520\u2500\u2772 \uD83D\uDC69\uD83C\uDFFB‍\uD83C\uDFA8 VAJIRA MD \uD83D\uDDDE️\u2773* \n\n*\u2503\u25C9* *\u21E8 ᴛɪᴛᴇʟ :*\n ' +
          _0x268840.TITLE +
          '\n\n*\u2503\u25C9* *\u21E8 ᴅᴀᴛᴇ :*\n ' +
          _0x268840.PUBLISHED +
          '\n\n*\u2503\u25C9* *\u21E8 ᴜʀʟ :*\n ' +
          _0x268840.URL +
          '\n\n*\u2503\u25C9* *\u21E8 Description :*\n ' +
          _0x268840.DESCRIPTION +
          '\n\n*\uD835\uDE7F\uD835\uDE7E\uD835\uDE86\uD835\uDE74\uD835\uDE81\uD835\uDE73 \uD835\uDE71\uD835\uDE88 \uD835\uDE85\uD835\uDE70\uD835\uDE79\uD835\uDE78\uD835\uDE81\uD835\uDE70 \uD835\uDE88\uD835\uDE83 \xAE*\n\n',
      }
      const _0x15d245 = { quoted: _0x1949ff }
      const _0x3e920a = await _0x577d5c.sendMessage(
          _0x2c2a95,
          _0xd57134,
          _0x15d245
        ),
        _0x64f809 = {
          text: '\u2705',
          key: _0x1949ff.key,
        }
      const _0x450c09 = { react: _0x64f809 }
      await _0x577d5c.sendMessage(_0x2c2a95, _0x450c09)
    } catch (_0x958da1) {
      _0x53f1d8()
      _0x441e3f(_0x958da1)
    }
  }
)
const _0x319a42 = {}
_0x319a42.pattern = 'derananews'
_0x319a42.react = '\uD83C\uDF99️'
_0x319a42.desc = 'To see derana news'
_0x319a42.category = ''
_0x319a42.use = '.derananews'
_0x319a42.filename = __filename
cmd(
  _0x319a42,
  async (
    _0x974e6d,
    _0x164aa0,
    _0x27d5b6,
    {
      from: _0x3411db,
      l: _0x290aba,
      prefix: _0x361673,
      quoted: _0x5d5d42,
      body: _0xb9e268,
      isCmd: _0x17f921,
      command: _0x42a39e,
      args: _0x5bf065,
      q: _0x88280b,
      isGroup: _0x146bcc,
      sender: _0xb52304,
      senderNumber: _0x55e9cd,
      botNumber2: _0x4ba30a,
      botNumber: _0x21a878,
      pushname: _0x4fcf64,
      isMe: _0x5389be,
      isOwner: _0x57033d,
      groupMetadata: _0x1c503e,
      groupName: _0x14c918,
      participants: _0x41fd6e,
      groupAdmins: _0x555fa9,
      isBotAdmins: _0x3b8fea,
      isAdmins: _0x3b9a1c,
      reply: _0x4b96a6,
    }
  ) => {
    const _0x41b39a = await derananews()
    try {
      const _0xccc1ed =
          ' \uD83D\uDC68‍\uD83D\uDCBB \uD835\uDE51\uD835\uDE3C\uD835\uDE45\uD835\uDE44\uD835\uDE4D\uD835\uDE3C \uD835\uDE48\uD835\uDE3F \uD835\uDE3F\uD835\uDE40\uD835\uDE4D\uD835\uDE3C\uD835\uDE49\uD835\uDE3C \uD835\uDE49\uD835\uDE40\uD835\uDE52\uD835\uDE4E \uD83D\uDC68‍\uD83D\uDCBB\n    \n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD4B\uD835\uDD40\uD835\uDD4B\uD835\uDD43\uD835\uDD3C:* ' +
          _0x41b39a.title +
          '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *ℕ\uD835\uDD3C\uD835\uDD4E\uD835\uDD4A \uD835\uDD43\uD835\uDD40ℕ\uD835\uDD42:* ' +
          _0x41b39a.link +
          '\n\n\uD83C\uDF39\u20DD⃘̉̉̉̉̉̉\uD83E\uDDDA *\uD835\uDD3B\uD835\uDD3C\uD835\uDD4Aℂℝ\uD835\uDD40\uD835\uDD43\uD835\uDD4B\uD835\uDD40\uD835\uDD46ℕ:* ' +
          _0x41b39a.description,
        _0xd204ac = { url: _0x41b39a.image }
      const _0x5c76fa = {
        image: _0xd204ac,
        caption: _0xccc1ed,
      }
      const _0x3533a7 = { quoted: _0x164aa0 }
      await _0x974e6d.sendMessage(_0x3411db, _0x5c76fa, _0x3533a7)
      const _0x12a8b5 = {
        text: '\u2705',
        key: _0x164aa0.key,
      }
      const _0x234f4d = { react: _0x12a8b5 }
      await _0x974e6d.sendMessage(_0x3411db, _0x234f4d)
    } catch (_0x49a75b) {
      _0x4b96a6(), _0x290aba(_0x49a75b)
    }
  }
)
const _0x50fcc2 = {}
_0x50fcc2.pattern = 'hirunews'
_0x50fcc2.react = '\uD83D\uDD16'
_0x50fcc2.desc = 'To see info of hirunews'
_0x50fcc2.category = ''
_0x50fcc2.use = '.hirunews'
_0x50fcc2.filename = __filename
cmd(
  _0x50fcc2,
  async (
    _0x1b4415,
    _0x3fc6f8,
    _0x5d8f11,
    {
      from: _0x2af490,
      prefix: _0x1a852b,
      l: _0x1e08a7,
      quoted: _0x8603de,
      body: _0x447b4f,
      isCmd: _0x3eadca,
      command: _0x31ac5a,
      args: _0x1220d8,
      q: _0x56bf07,
      isGroup: _0x467a32,
      sender: _0x146594,
      senderNumber: _0x2904af,
      botNumber2: _0x251952,
      botNumber: _0x20ab9d,
      pushname: _0x45206c,
      isMe: _0x1b6839,
      isOwner: _0x5e5e81,
      groupMetadata: _0x16aadf,
      groupName: _0x427cc6,
      participants: _0x9ef28e,
      groupAdmins: _0x46b653,
      isBotAdmins: _0x320c25,
      isAdmins: _0x194679,
      reply: _0x4ace02,
    }
  ) => {
    try {
      const _0x422a18 = require('hirunews-scrap')
      var _0xef1c60 = new _0x422a18()
      const _0x1c0a93 = await _0xef1c60.MainNews(),
        _0x17f252 = _0x1c0a93.results,
        _0x3e8277 = _0x17f252.title,
        _0xeb652d = _0x17f252.news,
        _0x120b18 = _0x17f252.date,
        _0x18d1f6 = _0x17f252.thumb,
        _0x5734ef = { url: _0x18d1f6 }
      const _0x402b8f = {
        image: _0x5734ef,
        caption:
          '\n\uD83D\uDC68‍\uD83D\uDCBB \uD835\uDE51\uD835\uDE3C\uD835\uDE45\uD835\uDE44\uD835\uDE4D\uD835\uDE3C \uD835\uDE43\uD835\uDE44\uD835\uDE4D\uD835\uDE50 \uD835\uDE49\uD835\uDE40\uD835\uDE52\uD835\uDE4E \uD83D\uDC68‍\uD83D\uDCBB\n\n\uD83D\uDCCD\u27A3*' +
          _0x3e8277 +
          '* \n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF  \n\uD83D\uDCC3\u27A3' +
          _0xeb652d +
          ' \n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF \n\uD83D\uDCC5\u27A3' +
          _0x120b18 +
          '\n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF\n\n\uD83D\uDDDE️ *News From hirunews.lk*\n\n\uD83D\uDD17 *Create By vajira rathnayaka*\n\n\uD83D\uDCCD *SL News*\n\n\uD83D\uDC64 *Owner Number* :- http://wa.me/9471199757\n\n\n\u25CF\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u25CF',
      }
      const _0x34a63a = { quoted: _0x3fc6f8 }
      const _0xd94b2d = await _0x1b4415.sendMessage(
          _0x2af490,
          _0x402b8f,
          _0x34a63a
        ),
        _0xb388c2 = {
          text: '\uD83D\uDCF0',
          key: _0xd94b2d.key,
        }
      const _0x225658 = { react: _0xb388c2 }
      await _0x1b4415.sendMessage(_0x2af490, _0x225658)
    } catch (_0x18316a) {
      _0x4ace02(), _0x1e08a7(_0x18316a)
    }
  }
)
const _0x59e42d = {}
_0x59e42d.pattern = 'cricketnews'
_0x59e42d.react = '\uD83C\uDF99️'
_0x59e42d.desc = 'To see info cricket news'
_0x59e42d.category = ''
_0x59e42d.use = '.cricketnews'
_0x59e42d.filename = __filename
cmd(
  _0x59e42d,
  async (
    _0x46b4ed,
    _0x47a115,
    _0x18de94,
    {
      from: _0x4f5d5b,
      l: _0x3745b1,
      prefix: _0x24ed0d,
      quoted: _0x3ccf81,
      body: _0x5dbe71,
      isCmd: _0x4d7e16,
      command: _0x252716,
      args: _0x4eb24a,
      q: _0x508728,
      isGroup: _0x2143a1,
      sender: _0x18d47a,
      senderNumber: _0x762304,
      botNumber2: _0x389d02,
      botNumber: _0x35ce0c,
      pushname: _0x18538a,
      isMe: _0x27b566,
      isOwner: _0x28cb48,
      groupMetadata: _0x53ce14,
      groupName: _0x39beba,
      participants: _0xf85cb8,
      groupAdmins: _0x1ba728,
      isBotAdmins: _0x310167,
      isAdmins: _0x3cbdf8,
      reply: _0x5aed32,
    }
  ) => {
    try {
      _0x5aed32('*_Please Wait, Getting Cricket Info_*')
      const _0x524e9c = await fetch(
          'https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78'
        ),
        _0x269253 = await _0x524e9c.json()
      console.log(_0x269253)
      for (let _0x44c9ff = 0; _0x44c9ff < _0x269253.data.length; _0x44c9ff++) {
        let _0x124e66 = _0x44c9ff + 1
        _0x508728 +=
          '\n*--------------------- MATCH ' + _0x44c9ff + '-------------------*'
        _0x508728 += '\n*Match Name  :* ' + _0x269253.data[_0x44c9ff].name
        _0x508728 += '\n*Match Status  :* ' + _0x269253.data[_0x44c9ff].status
        _0x508728 +=
          '\n*Match  Date   :* ' + _0x269253.data[_0x44c9ff].dateTimeGMT
        _0x508728 +=
          '\n*Match Started :* ' + _0x269253.data[_0x44c9ff].matchStarted
        _0x508728 += '\n*Match Ended:* ' + _0x269253.data[_0x44c9ff].matchEnded
      }
      return await _0x5aed32(_0x508728)
      const _0x305b8d = {
        text: '\u2705',
        key: _0x47a115.key,
      }
      const _0x875bce = { react: _0x305b8d }
      await _0x46b4ed.sendMessage(_0x4f5d5b, _0x875bce)
    } catch (_0x3ea69f) {
      _0x5aed32(), _0x3745b1(_0x3ea69f)
    }
  }
)
const _0x38f5a0 = {}
_0x38f5a0.pattern = 'ffstalk'
_0x38f5a0.react = '\uD83C\uDF99️'
_0x38f5a0.desc = 'To see info freefire id'
_0x38f5a0.category = 'search'
_0x38f5a0.use = '.ffstalk'
_0x38f5a0.filename = __filename
cmd(
  _0x38f5a0,
  async (
    _0x2aeb01,
    _0x3f62ed,
    _0x10d7d1,
    {
      from: _0x228661,
      l: _0x313da4,
      prefix: _0x198946,
      quoted: _0x5b710b,
      body: _0xc808d3,
      isCmd: _0xec0631,
      command: _0x59f2f0,
      args: _0x13b8f8,
      q: _0x327550,
      isGroup: _0x18eb8c,
      sender: _0x21f04b,
      senderNumber: _0x3308f9,
      botNumber2: _0x36bad7,
      botNumber: _0x630434,
      pushname: _0x22734a,
      isMe: _0x2da797,
      isOwner: _0x8a6697,
      groupMetadata: _0x170f4b,
      groupName: _0x510ee0,
      participants: _0x3f0cd8,
      groupAdmins: _0xe3e5fd,
      isBotAdmins: _0xc71579,
      isAdmins: _0x4c8e1b,
      reply: _0x568ae7,
    }
  ) => {
    try {
      if (isBan) {
        return _0x568ae7(mess.banned)
      }
      if (isBanChat) {
        return _0x568ae7(mess.bangc)
      }
      if (!_0x327550) {
        return _0x568ae7('*Provide me Free Fire UID*')
      }
      const _0x13ffd0 = encodeURIComponent(_0x327550),
        _0x46bbcd = 'https://ffname.vercel.app/?uid=' + _0x13ffd0,
        _0x111a44 = await fetch(_0x46bbcd),
        _0x5d4431 = await _0x111a44.json()
      if (!_0x5d4431 || !_0x5d4431.nickname || !_0x5d4431.region) {
        return _0x568ae7('Failed to generate Free Fire name')
      }
      const _0x690d50 = _0x5d4431.nickname,
        _0x3aeef9 = _0x5d4431.region
      return _0x568ae7(
        ' Free Fire userid Information\n Name: ' +
          _0x690d50 +
          '\nRegion: ' +
          _0x3aeef9
      )
    } catch (_0x2d839f) {
      console.error('Error during API request:', _0x2d839f)
      return _0x568ae7('Unexpected error occurred during the request.')
      const _0x31d5ab = {}
      _0x31d5ab.text = '\u2705'
      _0x31d5ab.key = _0x3f62ed.key
      const _0x44d813 = {}
      _0x44d813.react = _0x31d5ab
      await _0x2aeb01.sendMessage(_0x228661, _0x44d813)
      _0x568ae7()
      _0x313da4(_0x2d839f)
    }
  }
)
const _0x522d1d = {}
_0x522d1d.pattern = 'manga'
_0x522d1d.react = '\uD83C\uDF99️'
_0x522d1d.desc = 'To see info of manga'
_0x522d1d.category = 'search'
_0x522d1d.use = '.manga'
_0x522d1d.filename = __filename
cmd(
  _0x522d1d,
  async (
    _0x17b4c2,
    _0x3b2aba,
    _0x284470,
    {
      from: _0x22f811,
      l: _0x8879b2,
      prefix: _0x688638,
      quoted: _0x3fddef,
      body: _0x29f41c,
      isCmd: _0x123b02,
      command: _0x60ad5e,
      args: _0xf3bbb2,
      q: _0x37bcfd,
      isGroup: _0x19129b,
      sender: _0x347853,
      senderNumber: _0x4694eb,
      botNumber2: _0x1e14e9,
      botNumber: _0x212170,
      pushname: _0x53f1df,
      isMe: _0x43ec26,
      isOwner: _0xfaa805,
      groupMetadata: _0x144176,
      groupName: _0xbfcd3b,
      participants: _0x4b5ec2,
      groupAdmins: _0x1786fd,
      isBotAdmins: _0x10a79e,
      isAdmins: _0x577b29,
      reply: _0x5780cf,
    }
  ) => {
    try {
      const { Manga: _0x4e7d30 } = require('@shineiichijo/marika'),
        _0x8acaa6 = new _0x4e7d30()
      if (!_0x37bcfd) {
        return _0x5780cf(
          'Which manga do you want to search?\nExample ' +
            _0x688638 +
            'manga naruto'
        )
      }
      let _0x50a2a4 = await _0x8acaa6.searchManga(_0x37bcfd),
        _0x247975 = '\uD83C\uDF80 *Title: ' + _0x50a2a4.data[0].title + '*\n'
      _0x247975 += '\uD83D\uDCC8 *Status: ' + _0x50a2a4.data[0].status + '*\n'
      _0x247975 +=
        '\uD83C\uDF38 *Total Volumes: ' + _0x50a2a4.data[0].volumes + '*\n'
      _0x247975 +=
        '\uD83C\uDF97 *Total Chapters: ' + _0x50a2a4.data[0].chapters + '*\n'
      _0x247975 += '\uD83E\uDDE7 *Genres:*\n'
      for (
        let _0x12842a = 0;
        _0x12842a < _0x50a2a4.data[0].genres.length;
        _0x12842a++
      ) {
        _0x247975 +=
          '\t\t\t\t\t\t\t\t*' + _0x50a2a4.data[0].genres[_0x12842a].name + '*\n'
      }
      _0x247975 +=
        '\u2728 *Published on: ' + _0x50a2a4.data[0].published.from + '*\n'
      _0x247975 += '\uD83C\uDF1F *Score: ' + _0x50a2a4.data[0].scored + '*\n'
      _0x247975 +=
        '\uD83C\uDF90 *Popularity: ' + _0x50a2a4.data[0].popularity + '*\n'
      _0x247975 +=
        '\uD83C\uDF8F *Favorites: ' + _0x50a2a4.data[0].favorites + '*\n'
      _0x247975 += '\u270D *Authors:*\n'
      for (
        let _0x1f1355 = 0;
        _0x1f1355 < _0x50a2a4.data[0].authors.length;
        _0x1f1355++
      ) {
        _0x247975 +=
          '\t\t\t\t\t\t\t\t\t*' +
          _0x50a2a4.data[0].authors[_0x1f1355].name +
          '* *(' +
          _0x50a2a4.data[0].authors[0].type +
          ')*\n'
      }
      _0x247975 += '\n\uD83C\uDF10 *URL: ' + _0x50a2a4.data[0].url + '*\n\n'
      if (_0x50a2a4.data[0].background !== null) {
        _0x247975 +=
          '\uD83C\uDF86 *Background:* ' + _0x50a2a4.data[0].background
      }
      _0x247975 +=
        '\u2744️ *Description:* ' +
        _0x50a2a4.data[0].synopsis.replace(/\[Written by MAL Rewrite]/g, '')
      const _0x390797 = { url: _0x50a2a4.data[0].images.jpg.large_image_url }
      const _0x4e4eb6 = {
        image: _0x390797,
        caption: _0x247975,
      }
      const _0x542383 = { quoted: _0x3b2aba }
      _0x17b4c2.sendMessage(_0x22f811, _0x4e4eb6, _0x542383)
      const _0x4d83b = {
        text: '\u2705',
        key: _0x3b2aba.key,
      }
      const _0x116cdb = { react: _0x4d83b }
      await _0x17b4c2.sendMessage(_0x22f811, _0x116cdb)
    } catch (_0x3f6e2c) {
      _0x5780cf(), _0x8879b2(_0x3f6e2c)
    }
  }
)
const _0x5b8270 = {}
_0x5b8270.pattern = 'weather'
_0x5b8270.react = '\uD83C\uDF99️'
_0x5b8270.desc = 'To see info of weather'
_0x5b8270.category = 'search'
_0x5b8270.use = '.weather'
_0x5b8270.filename = __filename
cmd(
  _0x5b8270,
  async (
    _0x2ca52e,
    _0x1e37ba,
    _0x155ff4,
    {
      from: _0x5855b2,
      l: _0x16cecb,
      prefix: _0x447762,
      quoted: _0x18edf9,
      body: _0x85bbf7,
      isCmd: _0xf5161b,
      command: _0x509ea4,
      args: _0x5846a5,
      q: _0x30f262,
      isGroup: _0x4f7085,
      sender: _0x434124,
      senderNumber: _0xa33843,
      botNumber2: _0x1b90cb,
      botNumber: _0x1ac29d,
      pushname: _0x45ac14,
      isMe: _0x10d96c,
      isOwner: _0x1e0cb7,
      groupMetadata: _0x946c8c,
      groupName: _0x2450c9,
      participants: _0x8548e3,
      groupAdmins: _0x2992c4,
      isBotAdmins: _0x34c7b2,
      isAdmins: _0x56814d,
      reply: _0x358400,
    }
  ) => {
    try {
      if (!_0x30f262) {
        return _0x358400('What location?')
      }
      let _0x461a15 = _0x30f262.split(' ')[0],
        _0x4a8dca = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?q=' +
            _0x461a15 +
            '&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en'
        ),
        _0x3600b9 = ''
      _0x3600b9 += '*\uD83D\uDDFA️Weather of  ' + _0x461a15 + '*\n\n'
      _0x3600b9 += '*Weather:-* ' + _0x4a8dca.data.weather[0].main + '\n'
      _0x3600b9 +=
        '*Description:-* ' + _0x4a8dca.data.weather[0].description + '\n'
      _0x3600b9 += '*Avg Temp:-* ' + _0x4a8dca.data.main.temp + '\n'
      _0x3600b9 += '*Feels Like:-* ' + _0x4a8dca.data.main.feels_like + '\n'
      _0x3600b9 += '*Pressure:-* ' + _0x4a8dca.data.main.pressure + '\n'
      _0x3600b9 += '*Humidity:-* ' + _0x4a8dca.data.main.humidity + '\n'
      _0x3600b9 += '*Humidity:-* ' + _0x4a8dca.data.wind.speed + '\n'
      _0x3600b9 += '*Latitude:-* ' + _0x4a8dca.data.coord.lat + '\n'
      _0x3600b9 += '*Longitude:-* ' + _0x4a8dca.data.coord.lon + '\n'
      _0x3600b9 += '*Country:-* ' + _0x4a8dca.data.sys.country + '\n'
      const _0x165682 = { text: _0x3600b9 }
      const _0x2d2061 = { quoted: _0x1e37ba }
      _0x2ca52e.sendMessage(_0x5855b2, _0x165682, _0x2d2061)
      const _0x5a13b4 = {
        text: '\u2705',
        key: _0x1e37ba.key,
      }
      const _0x5aca58 = { react: _0x5a13b4 }
      await _0x2ca52e.sendMessage(_0x5855b2, _0x5aca58)
    } catch (_0x3f9131) {
      _0x358400(), _0x16cecb(_0x3f9131)
    }
  }
)
const _0x215420 = {}
_0x215420.pattern = 'cricketscore'
_0x215420.alias = ['score']
_0x215420.react = '\uD83C\uDF99️'
_0x215420.desc = 'To see info of cricket'
_0x215420.category = 'search'
_0x215420.use = '.cricketscore'
_0x215420.filename = __filename
cmd(
  _0x215420,
  async (
    _0x5dc5ef,
    _0x424147,
    _0x51c451,
    {
      from: _0x2024e8,
      l: _0x371e2a,
      prefix: _0x25a297,
      quoted: _0x47989e,
      body: _0x3c7b9e,
      isCmd: _0x5261aa,
      command: _0x4f568b,
      args: _0x296bd3,
      q: _0x193de2,
      isGroup: _0x16e37f,
      sender: _0x2b01fe,
      senderNumber: _0x7726d4,
      botNumber2: _0x591369,
      botNumber: _0x293946,
      pushname: _0x280b49,
      isMe: _0x2ff61b,
      isOwner: _0x485c91,
      groupMetadata: _0x683af,
      groupName: _0x357c6f,
      participants: _0x56bea1,
      groupAdmins: _0x5aab36,
      isBotAdmins: _0x1fb4c3,
      isAdmins: _0x13ae3c,
      reply: _0x18eb60,
    }
  ) => {
    try {
      if (!_0x193de2) {
        return _0x424147.reply(
          '*Provide a match ID for cricket score.*\nExample: !cricketscore 12345'
        )
      }
      const _0x2ba1e9 = encodeURIComponent(_0x193de2),
        _0x7d8152 = 'https://cricket-olive.vercel.app/score?id=' + _0x2ba1e9,
        _0x5525ed = await fetch(_0x7d8152)
      if (!_0x5525ed.ok) {
        return _0x424147.reply(
          'Invalid response from the cricket score API. Status code: ' +
            _0x5525ed.status
        )
      }
      const _0x441cd0 = await _0x5525ed.json()
      let _0x104a02 =
        '\u256D\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u256E\n'
      _0x104a02 +=
        '\u2502\u2FFB   *\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB*\n'
      _0x104a02 += '\u2502\u2FFB   *LIVE MATCH INFO* \u2728\n'
      _0x104a02 += '\u2502\u2FFB\n'
      if (
        _0x441cd0.update &&
        _0x441cd0.update.toLowerCase() !== 'data not found'
      ) {
        ;(_0x104a02 += '\u2502\u2FFB   *' + _0x441cd0.title + '*\n'),
          (_0x104a02 += '\u2502\u2FFB   *' + _0x441cd0.update + '*\n'),
          (_0x104a02 += '\u2502\u2FFB \n')
      } else {
        await _0x51c451.reply(
          '*Update:* Data not found for the specified match ID.'
        )
        return
      }
      if (
        _0x441cd0.livescore &&
        _0x441cd0.livescore.toLowerCase() !== 'data not found'
      ) {
        _0x104a02 +=
          '\u2502\u2FFB   *Live Score:* ' + _0x441cd0.livescore + '\n'
        _0x104a02 += '\u2502\u2FFB   *Run Rate:* ' + _0x441cd0.runrate + '\n'
        _0x104a02 += '\u2502\u2FFB\n'
        _0x104a02 += '\u2502\u2FFB   *Batter 1:* ' + _0x441cd0.batterone + '\n'
        _0x104a02 +=
          '\u2502\u2FFB   *' +
          _0x441cd0.batsmanonerun +
          ' (' +
          _0x441cd0.batsmanoneball +
          ')* SR: ' +
          _0x441cd0.batsmanonesr +
          ' ' +
          (_0x441cd0.batsmanone === _0x441cd0.batterone ? '' : '') +
          '\n'
        _0x104a02 += '\u2502\u2FFB\n'
        _0x104a02 += '\u2502\u2FFB   *Batter 2:* ' + _0x441cd0.battertwo + '\n'
        _0x104a02 +=
          '\u2502\u2FFB   *' +
          _0x441cd0.batsmantworun +
          ' (' +
          _0x441cd0.batsmantwoball +
          ')* SR: ' +
          _0x441cd0.batsmantwosr +
          ' ' +
          (_0x441cd0.battertwo === _0x441cd0.battertwo ? '' : '') +
          '\n'
        _0x104a02 += '\u2502\u2FFB\n'
        _0x104a02 += '\u2502\u2FFB   *Bowler 1:* ' + _0x441cd0.bowlerone + '\n'
        _0x104a02 +=
          '\u2502\u2FFB   *' +
          _0x441cd0.bowleroneover +
          ' overs, ' +
          _0x441cd0.bowleronerun +
          '/' +
          _0x441cd0.bowleronewickers +
          ', Econ:* ' +
          _0x441cd0.bowleroneeconomy +
          ' ' +
          (_0x441cd0.bowlerone === _0x441cd0.bowlerone ? '' : '') +
          '\n'
        _0x104a02 += '\u2502\u2FFB\n'
        _0x104a02 += '\u2502\u2FFB    *Bowler 2:* ' + _0x441cd0.bowlertwo + '\n'
        _0x104a02 +=
          '\u2502\u2FFB   *' +
          _0x441cd0.bowlertwoover +
          ' overs, ' +
          _0x441cd0.bowlertworun +
          '/' +
          _0x441cd0.bowlertwowickers +
          ', Econ:* ' +
          _0x441cd0.bowlertwoeconomy +
          ' ' +
          (_0x441cd0.bowlertwo === _0x441cd0.bowlertwo ? '' : '') +
          '\n'
      }
      _0x104a02 +=
        '\u2570\u2550\u2550\u2022\u221E\u2022\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256F '
      await _0x51c451.reply(_0x104a02)
    } catch (_0x47fc30) {
      console.error(_0x47fc30)
      return _0x424147.reply(
        'An error occurred while processing the cricket score request. ' +
          _0x47fc30.message
      )
      const _0x24d496 = {}
      _0x24d496.text = '\u2705'
      _0x24d496.key = _0x424147.key
      const _0x3d8247 = {}
      _0x3d8247.react = _0x24d496
      await _0x5dc5ef.sendMessage(_0x2024e8, _0x3d8247)
      _0x18eb60()
      _0x371e2a(e)
    }
  }
)
const _0x368b7f = {}
_0x368b7f.pattern = 'gitstalk'
_0x368b7f.react = '\uD83C\uDF99️'
_0x368b7f.desc = 'To search github info'
_0x368b7f.category = 'gitstalk'
_0x368b7f.use = '.xnxxsearch <xnxx name>'
_0x368b7f.filename = __filename
cmd(
  _0x368b7f,
  async (
    _0x464d11,
    _0x41de77,
    _0x1fb260,
    {
      from: _0x2807ed,
      l: _0x18c0da,
      prefix: _0x137806,
      quoted: _0x3b0375,
      body: _0x16b60a,
      isCmd: _0x936906,
      command: _0x4860d9,
      args: _0x5b9d5a,
      q: _0x1342c8,
      isGroup: _0x30b7e7,
      sender: _0x65b4ff,
      senderNumber: _0x16c517,
      botNumber2: _0x53c22a,
      botNumber: _0x477047,
      pushname: _0x19f548,
      isMe: _0x5d9942,
      isOwner: _0x2591fe,
      groupMetadata: _0x1d86b1,
      groupName: _0x360536,
      participants: _0x37d7db,
      groupAdmins: _0x2ccef2,
      isBotAdmins: _0x4a5e19,
      isAdmins: _0x3b152f,
      reply: _0x1fea17,
    }
  ) => {
    try {
      if (!_0x5b9d5a[0]) {
        return _0x1fb260.reply('Mention a GitHub username to stalk.')
      }
      const _0x146deb = _0x5b9d5a[0],
        _0x43a9ce = await axios.get(
          'https://api.github.com/users/' + _0x146deb
        ),
        _0x39a7f5 = _0x43a9ce.data
      if (_0x43a9ce.status !== 200) {
        return _0x41de77.reply('\u274C GitHub user not found.')
      }
      let _0x4e9dd2 =
        '\uD83C\uDF1F *GitHub Profile - @' + _0x39a7f5.login + '*\n\n'
      _0x4e9dd2 += '  \u25E6  *Name*: ' + (_0x39a7f5.name || 'N/A') + '\n'
      _0x4e9dd2 += '  \u25E6  *Username*: @' + _0x39a7f5.login + '\n'
      _0x4e9dd2 += '  \u25E6  *Bio*: ' + (_0x39a7f5.bio || 'N/A') + '\n'
      _0x4e9dd2 += '  \u25E6  *ID*: ' + _0x39a7f5.id + '\n'
      _0x4e9dd2 += '  \u25E6  *Node ID*: ' + _0x39a7f5.node_id + '\n'
      _0x4e9dd2 += '  \u25E6  *Profile URL*: ' + _0x39a7f5.avatar_url + '\n'
      _0x4e9dd2 += '  \u25E6  *GitHub URL*: ' + _0x39a7f5.html_url + '\n'
      _0x4e9dd2 += '  \u25E6  *Type*: ' + _0x39a7f5.type + '\n'
      _0x4e9dd2 +=
        '  \u25E6  *Admin*: ' + (_0x39a7f5.site_admin ? 'Yes' : 'No') + '\n'
      _0x4e9dd2 += '  \u25E6  *Company*: ' + (_0x39a7f5.company || 'N/A') + '\n'
      _0x4e9dd2 += '  \u25E6  *Blog*: ' + (_0x39a7f5.blog || 'N/A') + '\n'
      _0x4e9dd2 +=
        '  \u25E6  *Location*: ' + (_0x39a7f5.location || 'N/A') + '\n'
      _0x4e9dd2 += '  \u25E6  *Email*: ' + (_0x39a7f5.email || 'N/A') + '\n'
      _0x4e9dd2 +=
        '  \u25E6  *Public Repositories*: ' + _0x39a7f5.public_repos + '\n'
      _0x4e9dd2 += '  \u25E6  *Public Gists*: ' + _0x39a7f5.public_gists + '\n'
      _0x4e9dd2 += '  \u25E6  *Followers*: ' + _0x39a7f5.followers + '\n'
      _0x4e9dd2 += '  \u25E6  *Following*: ' + _0x39a7f5.following + '\n'
      _0x4e9dd2 += '  \u25E6  *Created At*: ' + _0x39a7f5.created_at + '\n'
      _0x4e9dd2 += '  \u25E6  *Updated At*: ' + _0x39a7f5.updated_at + '\n'
      const _0x4ff4d0 = await fetch(
          'https://api.github.com/users/' +
            _0x146deb +
            '/repos?per_page=5&sort=stargazers_count&direction=desc'
        ),
        _0x2309cd = await _0x4ff4d0.json()
      if (_0x2309cd.length > 0) {
        const _0x4afaef = _0x2309cd.slice(0, 5),
          _0x536ab = _0x4afaef.map((_0x57543b) => {
            return (
              '  \u25E6  *Repository*: [' +
              _0x57543b.name +
              '](' +
              _0x57543b.html_url +
              ')\n  \u25E6  *Description*: ' +
              (_0x57543b.description || 'N/A') +
              '\n  \u25E6  *Stars*: ' +
              _0x57543b.stargazers_count +
              '\n  \u25E6  *Forks*: ' +
              _0x57543b.forks
            )
          }),
          _0x15429f =
            '\uD83D\uDCDA *Top Starred Repositories*\n\n' +
            _0x536ab.join('\n\n')
        _0x4e9dd2 += '\n\n' + _0x15429f
      } else {
        _0x4e9dd2 += '\n\nNo public repositories found.'
      }
      const _0x5e9115 = { url: _0x39a7f5.avatar_url }
      const _0x1ea7c7 = {
        image: _0x5e9115,
        caption: _0x4e9dd2,
      }
      await _0x464d11.sendMessage(_0x41de77.chat, _0x1ea7c7, {
        quoted: _0x41de77,
      })
      const _0x2f2200 = {
        text: '\u2714',
        key: _0x1fb260.key,
      }
      const _0x20c5af = { react: _0x2f2200 }
      const _0x438aec = _0x20c5af
      await _0x464d11.sendMessage(_0x1fb260.chat, _0x438aec)
    } catch (_0x5f32db) {
      console.error('Error fetching GitHub data:', _0x5f32db)
      const _0x525c9d = {}
      _0x525c9d.quoted = _0x41de77
      await _0x464d11.sendMessage(
        _0x1fb260.chat,
        'An error occurred while fetching GitHub data.',
        _0x525c9d
      )
      const _0xa9e2d0 = {}
      _0xa9e2d0.text = '\u2705'
      _0xa9e2d0.key = _0x41de77.key
      const _0x39aaf3 = {}
      _0x39aaf3.react = _0xa9e2d0
      await _0x464d11.sendMessage(_0x2807ed, _0x39aaf3)
      _0x1fea17()
      _0x18c0da(e)
    }
  }
)
const _0x2b282b = {}
_0x2b282b.pattern = 'infobot'
_0x2b282b.react = '\uD83C\uDF99️'
_0x2b282b.desc = 'To see info of bot'
_0x2b282b.category = 'search'
_0x2b282b.use = '.infobot'
_0x2b282b.filename = __filename
cmd(
  _0x2b282b,
  async (
    _0x47098a,
    _0x90218,
    _0x43dba6,
    {
      from: _0x533e88,
      l: _0x5a2710,
      prefix: _0x50f483,
      quoted: _0x33343c,
      body: _0x18c1b4,
      isCmd: _0x1b469e,
      command: _0x163895,
      args: _0x3c97cb,
      q: _0x403792,
      isGroup: _0x2bcbf3,
      sender: _0x21f1f9,
      senderNumber: _0x1b582a,
      botNumber2: _0x1f0074,
      botNumber: _0x307a75,
      pushname: _0x2eea90,
      isMe: _0x573d36,
      isOwner: _0x1a3709,
      groupMetadata: _0x133515,
      groupName: _0x36ea3c,
      participants: _0x2d010f,
      groupAdmins: _0x332893,
      isBotAdmins: _0x21d698,
      isAdmins: _0x23f7ac,
      reply: _0xcaa47e,
    }
  ) => {
    try {
      const _0x94ffd9 =
          '\n\u256D\u2501\u2500\u2500\u2501\u2500\u25C8\u2500\u2501\u2500\u2501\u256E\n\u2502\uD83D\uDD16 *Bot Name* : ' +
          botname +
          '\n\u2502\uD83D\uDD16 *Owner Name* : ' +
          ownername +
          '\n\u2502\uD83D\uDD16 *Owner Number* : ' +
          owner +
          '\n\u2502\uD83D\uDD16 *Prefix* : ' +
          _0x50f483 +
          '\n\u2502\uD83D\uDD16 *Runtime* : _*' +
          hours +
          'h ' +
          minutes +
          'm ' +
          seconds +
          's*_\n\u2570\u2501\u2501\u2500\u2501\u2500\u25C8\u2500\u2501\u2500\u2501\u256F',
        _0x1eb944 = ['.menu', '.ping']
      _0x47098a.sendPoll(_0x90218.chat, _0x94ffd9, _0x1eb944)
      const _0x3fd07b = {
        text: '\u2705',
        key: _0x90218.key,
      }
      const _0xfaa80d = { react: _0x3fd07b }
      await _0x47098a.sendMessage(_0x533e88, _0xfaa80d)
    } catch (_0x4a35af) {
      _0xcaa47e()
      _0x5a2710(_0x4a35af)
    }
  }
)
const _0x27c0db = {}
_0x27c0db.pattern = 'nofind'
_0x27c0db.react = '\uD83C\uDF99️'
_0x27c0db.desc = 'To see same to the number'
_0x27c0db.category = 'search'
_0x27c0db.use = '.nofind'
_0x27c0db.filename = __filename
cmd(
  _0x27c0db,
  async (
    _0x31bc5b,
    _0x554519,
    _0x536ed3,
    {
      from: _0xca775c,
      l: _0x6e72d9,
      prefix: _0x28acbc,
      quoted: _0x45905b,
      body: _0xda3ca,
      isCmd: _0x490057,
      command: _0x277ef8,
      args: _0x1244a8,
      q: _0x158f2b,
      isGroup: _0x3f54bd,
      sender: _0x1512f4,
      senderNumber: _0x2872f6,
      botNumber2: _0xcf2e7e,
      botNumber: _0x973431,
      pushname: _0xeadf8d,
      isMe: _0x38289e,
      isOwner: _0x1c1ed2,
      groupMetadata: _0x19d0ad,
      groupName: _0x15c98f,
      participants: _0x1afe33,
      groupAdmins: _0x824c7,
      isBotAdmins: _0x5c56a3,
      isAdmins: _0x31673e,
      reply: _0x19e715,
    }
  ) => {
    try {
      if (!_0x158f2b) {
        throw 'Give a number to search'
      }
      if (!_0x158f2b.match(/x/g)) {
        throw '*Example: ' + (_0x28acbc + _0x277ef8) + ' 919142294xxx'
      }
      let _0x3c22a3 = _0x158f2b.match(/x/g).length,
        _0x4aaa1a = Math.pow(10, _0x3c22a3),
        _0x2afe50 = []
      for (let _0x178fd7 = 0; _0x178fd7 < _0x4aaa1a; _0x178fd7++) {
        let _0x6feb67 = [..._0x178fd7.toString().padStart(_0x3c22a3, '0')],
          _0x27f933 =
            _0x158f2b.replace(/x/g, () => _0x6feb67.shift()) + '@s.whatsapp.net'
        if (
          await _0x31bc5b
            .onWhatsApp(_0x27f933)
            .then((_0x361e03) => (_0x361e03[0] || {}).exists)
        ) {
          let _0xe9fbc0 = await _0x31bc5b
            .fetchStatus(_0x27f933)
            .catch((_0x4c8ea4) => {})
          const _0x1d14a8 = {
            exists: true,
            jid: _0x27f933,
            ..._0xe9fbc0,
          }
          _0x2afe50.push(_0x1d14a8)
        } else {
          const _0x32f308 = {
            exists: false,
            jid: _0x27f933,
          }
          _0x2afe50.push(_0x32f308)
        }
      }
      const _0x37611d = {
        text: '\u2705',
        key: _0x554519.key,
      }
      const _0x2d9261 = { react: _0x37611d }
      await _0x31bc5b.sendMessage(_0xca775c, _0x2d9261)
    } catch (_0x12c602) {
      _0x19e715()
      _0x6e72d9(_0x12c602)
    }
  }
)
const _0x3b78f5 = {}
_0x3b78f5.pattern = 'xnxxsearch'
_0x3b78f5.react = '\uD83C\uDF99️'
_0x3b78f5.desc = 'To search xnxx video'
_0x3b78f5.category = 'search'
_0x3b78f5.use = '.xnxxsearch <xnxx name>'
_0x3b78f5.filename = __filename
cmd(
  _0x3b78f5,
  async (
    _0x50a994,
    _0x3719c3,
    _0x473574,
    {
      from: _0x203c20,
      l: _0x19df27,
      prefix: _0x5084eb,
      quoted: _0x55d03e,
      body: _0x51622b,
      isCmd: _0x1d4190,
      command: _0x37f5de,
      args: _0x49f734,
      q: _0x17101f,
      isGroup: _0x260e50,
      sender: _0x2e9388,
      senderNumber: _0x466771,
      botNumber2: _0x1974fd,
      botNumber: _0x31bdd0,
      pushname: _0xb4e23b,
      isMe: _0x28c706,
      isOwner: _0x59c401,
      groupMetadata: _0x2245d8,
      groupName: _0x6b5089,
      participants: _0x19d0eb,
      groupAdmins: _0x895f08,
      isBotAdmins: _0x270595,
      isAdmins: _0x41b446,
      reply: _0x3a6626,
    }
  ) => {
    try {
      if (!_0x17101f) {
        return _0x3719c3.reply('Enter Query')
      }
      const _0x5f1b75 = require('api-dylux')
      let _0x2f686a = await _0x5f1b75.xnxxSearch(_0x17101f),
        _0x5172a2 = _0x2f686a.result
          .map(
            (_0x829863, _0x181a14) =>
              _0x181a14 +
              1 +
              '\u2503 *Title* : ' +
              _0x829863.title +
              '\n*Link:* ' +
              _0x829863.link +
              '\n'
          )
          .join('\n')
      if (_0x2f686a.status) {
        _0x3719c3.reply(_0x5172a2)
      }
      const _0x5ca53c = {
        text: '\u2705',
        key: _0x3719c3.key,
      }
      const _0x3839fb = { react: _0x5ca53c }
      await _0x50a994.sendMessage(_0x203c20, _0x3839fb)
    } catch (_0x112988) {
      _0x3a6626()
      _0x19df27(_0x112988)
    }
  }
)
const _0x432de3 = {}
_0x432de3.pattern = 'movie'
_0x432de3.alias = ['film']
_0x432de3.react = '\uD83C\uDF99️'
_0x432de3.desc = 'To search movie'
_0x432de3.category = 'search'
_0x432de3.use = '.movie <song name>'
_0x432de3.filename = __filename
cmd(
  _0x432de3,
  async (
    _0x16733f,
    _0x3cbf39,
    _0x13fbba,
    {
      from: _0x56f2db,
      l: _0x54377d,
      quoted: _0x3aae12,
      body: _0x2a619d,
      isCmd: _0x39cc2d,
      command: _0x3430a8,
      args: _0x409590,
      q: _0xd036c6,
      isGroup: _0x310c82,
      sender: _0x153630,
      senderNumber: _0x433ecb,
      botNumber2: _0x483da6,
      botNumber: _0x592a70,
      pushname: _0x3ff97c,
      isMe: _0x369eae,
      isOwner: _0xf5e2ab,
      groupMetadata: _0x50daa5,
      groupName: _0x2fd7fd,
      participants: _0x1cca92,
      groupAdmins: _0x58cbaf,
      isBotAdmins: _0x2aebde,
      isCreator: _0x4b681d,
      isDev: _0x33ac8f,
      isAdmins: _0x363e30,
      reply: _0x2f03de,
    }
  ) => {
    try {
      if (!_0xd036c6) {
        return _0x2f03de('\u2757 *Please enter movie name to Search Subtitles*')
      }
      const _0x823636 = await SinhalaSub(_0xd036c6)
      let _0x8be4f2 =
        '\n\u274D\u26AF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u26AF\u274D\n        \uD83C\uDF10  *\uD835\uDE82\uD835\uDE7B \uD835\uDE82\uD835\uDE84\uD835\uDE71 \uD835\uDE82\uD835\uDE74\uD835\uDE70\uD835\uDE81\uD835\uDE72\uD835\uDE77 \uD835\uDE7B\uD835\uDE78\uD835\uDE82\uD835\uDE83*  \uD83C\uDF10\n \u26A1 *Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* \u26A1\n\u274D\u26AF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u26AF\u274D\n\n\n'
      for (let _0xed5870 of _0x823636.results) {
        _0x8be4f2 +=
          '\uD83D\uDCC3 *' +
          _0xed5870.no +
          ' - ' +
          _0xed5870.title +
          '*\n\uD83D\uDD17 _Link : ' +
          _0xed5870.link +
          '_ \n\n\n'
      }
      const _0x59dc43 = {
        url: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg',
      }
      const _0x4bfae7 = { quoted: _0x3cbf39 }
      await _0x16733f.sendMessage(
        _0x56f2db,
        {
          image: _0x59dc43,
          caption:
            _0x8be4f2 +
            '*Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
        },
        _0x4bfae7
      )
    } catch (_0xe9b5d0) {
      _0x2f03de('\u26D4 *Error accurated !!*\n\n' + _0xe9b5d0)
      _0x54377d(_0xe9b5d0)
    }
  }
)
const _0x23a790 = {}
_0x23a790.pattern = 'google'
_0x23a790.react = '\uD83C\uDF99️'
_0x23a790.desc = 'To search infomations'
_0x23a790.category = 'search'
_0x23a790.use = '.google <search name>'
_0x23a790.filename = __filename
cmd(
  _0x23a790,
  async (
    _0xe6525a,
    _0x37fd1c,
    _0x3b0aa6,
    {
      from: _0x4c9486,
      l: _0x1114ee,
      prefix: _0xd42391,
      quoted: _0x38c7a9,
      body: _0x19b81d,
      isCmd: _0x5c7ea4,
      command: _0x4668d9,
      args: _0x37de7a,
      q: _0x28f91d,
      isGroup: _0xdb7536,
      sender: _0x537bf5,
      senderNumber: _0x432045,
      botNumber2: _0x612c0d,
      botNumber: _0x1677ec,
      pushname: _0x13c7f4,
      isMe: _0x369149,
      isOwner: _0x1bbf24,
      groupMetadata: _0x54dd36,
      groupName: _0x43f777,
      participants: _0x5e659f,
      groupAdmins: _0x518691,
      isBotAdmins: _0x45caa8,
      isAdmins: _0x3cc5b7,
      reply: _0x2b90d1,
    }
  ) => {
    try {
      if (!_0x28f91d) {
        throw 'Example : ' + (_0xd42391 + _0x4668d9) + ' what is a bot'
      }
      let _0x53fc00 = require('google-it')
      const _0x93a3c6 = { query: _0x28f91d }
      _0x53fc00(_0x93a3c6).then((_0x2d96d3) => {
        let _0x1f2bb5 = 'Google Search From : ' + text + '\n\n'
        for (let _0x556cc6 of _0x2d96d3) {
          _0x1f2bb5 += '\u2B54 *Title* : ' + _0x556cc6.title + '\n'
          _0x1f2bb5 += '\u2B54 *Description* : ' + _0x556cc6.snippet + '\n'
          _0x1f2bb5 +=
            '\u2B54 *Link* : ' +
            _0x556cc6.link +
            '\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n'
        }
        _0x37fd1c.reply(_0x1f2bb5)
      })
      const _0x34a137 = {
        text: '\u2705',
        key: _0x37fd1c.key,
      }
      const _0x349ed9 = { react: _0x34a137 }
      await _0xe6525a.sendMessage(_0x4c9486, _0x349ed9)
    } catch (_0x595210) {
      _0x2b90d1()
      _0x1114ee(_0x595210)
    }
  }
)
const _0x2826a4 = {}
_0x2826a4.pattern = 'lyrics'
_0x2826a4.alias = ['lyric']
_0x2826a4.react = '\uD83C\uDF99️'
_0x2826a4.desc = descg1
_0x2826a4.category = 'search'
_0x2826a4.use = '.lyric <song name>'
_0x2826a4.filename = __filename
cmd(
  _0x2826a4,
  async (
    _0x9a41c8,
    _0x2a7b22,
    _0x26388e,
    {
      from: _0x2665c7,
      l: _0x2e4ac7,
      quoted: _0x556f6c,
      body: _0x4b9238,
      isCmd: _0x256e8a,
      command: _0xb2021e,
      args: _0x302b0b,
      q: _0x1d06f5,
      isGroup: _0x5dd8da,
      sender: _0x239622,
      senderNumber: _0x5b7084,
      botNumber2: _0x3f7340,
      botNumber: _0x2c3455,
      pushname: _0x483dd3,
      isMe: _0xea4666,
      isOwner: _0x139468,
      groupMetadata: _0x4c6dae,
      groupName: _0x5217bf,
      participants: _0x218816,
      groupAdmins: _0x5e498d,
      isBotAdmins: _0x501dc3,
      isAdmins: _0x1f426a,
      reply: _0x3f441d,
    }
  ) => {
    try {
      if (!_0x1d06f5) {
        return _0x3f441d(tmsg5)
      }
      const _0x2a78b2 = await fetchJson(
        'https://api.sdbots.tech/lyrics?song=' + _0x1d06f5
      )
      if (_0x2a78b2.lyrics) {
        _0x3f441d(
          '\n\u250C\u2500\u2500\u2500[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *LYRICS SEARCH*\n   \n*' +
            _0x2a78b2.title +
            '*\n_' +
            _0x2a78b2.artist +
            '_\n\n\n' +
            _0x2a78b2.lyrics +
            '\n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9'
        )
      } else {
        _0x3f441d(cantscg)
      }
    } catch (_0x132c37) {
      _0x3f441d(cantscg)
      _0x2e4ac7(_0x132c37)
    }
  }
)
const _0x2b8a6a = {}
_0x2b8a6a.pattern = 'itunes'
_0x2b8a6a.alias = ['lyric']
_0x2b8a6a.react = '\uD83C\uDF99️'
_0x2b8a6a.desc = descg1
_0x2b8a6a.category = 'search'
_0x2b8a6a.use = '.itunes <song name>'
_0x2b8a6a.filename = __filename
cmd(
  _0x2b8a6a,
  async (
    _0x200489,
    _0x5e36b5,
    _0x3ef146,
    {
      from: _0x480633,
      l: _0x38eb4c,
      quoted: _0x262c90,
      body: _0x1c6003,
      isCmd: _0x142b32,
      command: _0x2c2ad3,
      args: _0x3b4ceb,
      q: _0x5c9818,
      isGroup: _0xa8ba98,
      sender: _0x3a89a0,
      senderNumber: _0x1a91e8,
      botNumber2: _0x2d07f5,
      botNumber: _0x47d61d,
      pushname: _0x21dedd,
      isMe: _0xd1ed45,
      isOwner: _0x13b513,
      groupMetadata: _0x13fd5c,
      groupName: _0x4b8faf,
      participants: _0x29aa6b,
      groupAdmins: _0x556236,
      isBotAdmins: _0xbe32ef,
      isAdmins: _0x511938,
      reply: _0x33752e,
    }
  ) => {
    try {
      if (!_0x5c9818) {
        return _0x33752e('Please provide a song name')
      }
      let _0x273b60 = await fetch(
        'https://api.popcat.xyz/itunes?q=' + _0x5c9818
      )
      if (!_0x273b60.ok) {
        throw new Error('API request failed with status ' + _0x273b60.status)
      }
      let _0x4c9b7d = await _0x273b60.json()
      console.log('JSON response:', _0x4c9b7d)
      let _0x18bd4e =
        '*Song Information:*\n\n     \u2022 *Name:* ' +
        _0x4c9b7d.name +
        '\n\n     \u2022 *Artist:* ' +
        _0x4c9b7d.artist +
        '\n\n     \u2022 *Album:* ' +
        _0x4c9b7d.album +
        '\n\n     \u2022 *Release Date:* ' +
        _0x4c9b7d.release_date +
        '\n\n     \u2022 *Price:* ' +
        _0x4c9b7d.price +
        '\n\n     \u2022 *Length:* ' +
        _0x4c9b7d.length +
        '\n\n     \u2022 *Genre:* ' +
        _0x4c9b7d.genre +
        '\n\n     \u2022 *URL:* ' +
        _0x4c9b7d.url
      if (_0x4c9b7d.thumbnail) {
        const _0x13715c = { url: _0x4c9b7d.thumbnail }
        const _0x4bc2a8 = {
          image: _0x13715c,
          caption: _0x18bd4e,
        }
        await _0x200489.sendMessage(_0x5e36b5.chat, _0x4bc2a8, {
          quoted: _0x5e36b5,
        })
      }
      const _0x5e2b4c = {
        text: '\u2705',
        key: _0x5e36b5.key,
      }
      const _0x1d2fda = { react: _0x5e2b4c }
      await _0x200489.sendMessage(_0x480633, _0x1d2fda)
    } catch (_0x3f4050) {
      _0x33752e()
      _0x38eb4c(_0x3f4050)
    }
  }
)
const _0x3f96d6 = {}
_0x3f96d6.pattern = 'true'
_0x3f96d6.alias = ['truecaller']
_0x3f96d6.react = '\uD83D\uDCAF'
_0x3f96d6.desc = descg
_0x3f96d6.category = 'search'
_0x3f96d6.use = '.true <phone number>'
_0x3f96d6.filename = __filename
cmd(
  _0x3f96d6,
  async (
    _0x141a3a,
    _0x458257,
    _0x481e79,
    {
      from: _0xf49fb,
      l: _0x1c7378,
      quoted: _0x5523a9,
      body: _0x355682,
      isCmd: _0x34489a,
      command: _0xabdeac,
      args: _0x2d389c,
      q: _0x2ad7bb,
      isGroup: _0x237947,
      sender: _0x2e4488,
      senderNumber: _0xa9ad2b,
      botNumber2: _0x261a51,
      botNumber: _0x56f3c4,
      pushname: _0x35cbca,
      isMe: _0x47b543,
      isOwner: _0xac6817,
      groupMetadata: _0x3568d7,
      groupName: _0x363c02,
      participants: _0x3ac58c,
      groupAdmins: _0x149c2c,
      isBotAdmins: _0x2a4094,
      isAdmins: _0x2a8017,
      reply: _0x163f3f,
    }
  ) => {
    try {
      if (isBan) {
        return _0x163f3f(mess.banned)
      }
      if (isBanChat) {
        return _0x163f3f(mess.bangc)
      }
      if (!_0x2ad7bb) {
        return _0x163f3f('Please provide a phone number.')
      }
      const _0x403d00 =
          'a1i0h--loh5IMkhktEDXmgSLUQDHGrXDUbWqFoWEgiItBNgppvYin-rG97CRLpuh',
        _0x39d519 =
          'https://sid-bhai.vercel.app/api/truecaller?phone=' +
          encodeURIComponent(text) +
          '&id=' +
          _0x403d00
      let _0x3102b9 = await axios.get(_0x39d519)
      console.log(_0x3102b9)
      let _0x1b8f11 = _0x3102b9.data
      const {
        name: _0x2fe74c,
        alternateName: _0x10ffeb,
        addresses: _0x350c27,
        email: _0x2d68be,
        countryDetails: _0x3953ef,
      } = _0x1b8f11
      let _0x565990 = '\u256D\u2013\u2013\u300E *Phone Detail* \u300F\n'
      _0x565990 += '\u2506 \u269D *Name:* ' + _0x2fe74c + '\n'
      _0x350c27 &&
        _0x350c27.length > 0 &&
        ((_0x565990 +=
          '\u2506 \u269D *Address:* ' +
          _0x350c27[0].city +
          ', ' +
          _0x350c27[0].countryCode +
          '\n'),
        (_0x565990 +=
          '\u2506 \u269D *Time Zone:* ' + _0x350c27[0].timeZone + '\n'),
        (_0x565990 +=
          '\u2506 \u269D *Pin Code* ' + _0x350c27[0].zipCode + '\n'),
        (_0x565990 += '\u2506 \u269D *Street* ' + _0x350c27[0].street + '\n'))
      _0x565990 += '\u2506 \u269D *Email:* ' + _0x2d68be + '\n'
      _0x565990 +=
        '\u2570\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u0F13\n'
      if (_0x3953ef) {
        _0x565990 += '\u256D\u2013\u2013\u300E *countryDetails* \u300F\n'
        _0x565990 += '\u2506 \u269D *Name:* ' + _0x3953ef.name + '\n'
        _0x565990 += '\u2506 \u269D *Native:* ' + _0x3953ef.native + '\n'
        _0x565990 += '\u2506 \u269D *Phone Code:* +' + _0x3953ef.phone[0] + '\n'
        _0x565990 += '\u2506 \u269D *Continent:* ' + _0x3953ef.continent + '\n'
        _0x565990 += '\u2506 \u269D *Capital:* ' + _0x3953ef.capital + '\n'
        _0x565990 +=
          '\u2506 \u269D *Currency:* ' + _0x3953ef.currency.join(', ') + '\n'
        _0x565990 +=
          '\u2506 \u269D *Languages:* ' + _0x3953ef.languages.join(', ') + '\n'
        _0x565990 += '\u2506 \u269D *Flag:* ' + _0x3953ef.flag + '\n'
        _0x565990 +=
          '\u2570\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u0F13'
      }
      const _0x2e2010 = { q: _0x565990 }
      const _0x265dda = { quoted: _0x458257 }
      await _0x141a3a.sendMessage(_0xf49fb, _0x2e2010, _0x265dda)
    } catch (_0x2cdd82) {
      _0x163f3f('*Error !!*')
      _0x1c7378(e)
    }
  }
)
const _0x532a0e = {}
_0x532a0e.pattern = 'ip'
_0x532a0e.alias = ['ipstalk', 'sip', 'searchip', 'ip-locator']
_0x532a0e.react = '\uD83C\uDF10'
_0x532a0e.desc = desct
_0x532a0e.category = 'search'
_0x532a0e.use = '.ipstalk 112.134.193.130'
_0x532a0e.filename = __filename
cmd(
  _0x532a0e,
  async (
    _0x204376,
    _0x4819f2,
    _0x2d59bf,
    {
      from: _0x4a3a7d,
      l: _0x63cfd2,
      quoted: _0x3a59da,
      body: _0x5c5c3d,
      isCmd: _0x357e46,
      command: _0x32dadf,
      args: _0x549cc7,
      q: _0x4da191,
      isGroup: _0x58a9c7,
      sender: _0x222b31,
      senderNumber: _0x1052a2,
      botNumber2: _0x2f5058,
      botNumber: _0x54cf26,
      pushname: _0x37ccd8,
      isMe: _0x2e174d,
      isOwner: _0x484883,
      groupMetadata: _0xbfb191,
      groupName: _0x118e16,
      participants: _0x3b5d2a,
      groupAdmins: _0x2fbcf7,
      isBotAdmins: _0x5274df,
      isAdmins: _0x4c5f56,
      reply: _0x5851d8,
    }
  ) => {
    try {
      if (!_0x4da191) {
        return _0x5851d8(needus)
      }
      if (!_0x4da191.includes('.')) {
        return _0x5851d8(needus)
      }
      const _0x3f86fc = 'IP :',
        _0x54d4db = 'STATUS :',
        _0x59e237 = 'CONTINENT :',
        _0x3304ff = 'COUNTRY :',
        _0x125c00 = 'COUNTRYCODE :',
        _0x8ac347 = 'REGIONNAME :',
        _0x3660c5 = 'CITY :',
        _0x39bac0 = 'ZIP :',
        _0x34ccd1 = 'CURRENCY :',
        _0x533d6d = 'ISP :',
        _0x4cc44f = 'MOBILE :',
        _0x5de96b = 'PROXY :',
        _0x1701ad = await fetchJson(
          'https://api.techniknews.net/ipgeo/' + _0x4da191
        ),
        _0x4093d5 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n    *IP STALKER*\n    \n*\uD83D\uDD34 ' +
          _0x3f86fc +
          '* ```' +
          _0x4da191 +
          '```\n' +
          '*\u2705' +
          _0x54d4db +
          '* ```' +
          _0x1701ad.status +
          '```\n' +
          '*\uD83C\uDF10' +
          _0x59e237 +
          '* ```' +
          _0x1701ad.continent +
          '```\n' +
          '*\uD83D\uDDFA' +
          _0x3304ff +
          '* ```' +
          _0x1701ad.country +
          '```\n' +
          '*\uD83D\uDD22' +
          _0x125c00 +
          '* ```' +
          _0x1701ad.countryCode +
          '```\n' +
          '*\uD83C\uDF0D' +
          _0x8ac347 +
          '* ```' +
          _0x1701ad.regionName +
          '```\n' +
          '*\uD83D\uDEA9' +
          _0x3660c5 +
          '* ```' +
          _0x1701ad.city +
          '```\n' +
          '*\uD83C\uDFDB' +
          _0x39bac0 +
          '* ```' +
          _0x1701ad.zip +
          '```\n' +
          '*\uD83D\uDCB8' +
          _0x34ccd1 +
          '* ```' +
          _0x1701ad.currency +
          '```\n' +
          '*\uD83D\uDCE1' +
          _0x533d6d +
          '* ```' +
          _0x1701ad.isp +
          '```\n' +
          '*\uD83D\uDEE1' +
          _0x5de96b +
          '* ```' +
          _0x1701ad.proxy +
          '```\n' +
          '*\uD83D\uDCF1' +
          _0x4cc44f +
          '* ```' +
          _0x1701ad.mobile +
          '```\n\n' +
          '\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25C9',
        _0x577f28 = { text: _0x4093d5 }
      const _0x15303e = { quoted: _0x4819f2 }
      await _0x204376.sendMessage(_0x4a3a7d, _0x577f28, _0x15303e)
    } catch (_0x322536) {
      _0x5851d8(cantf)
      _0x63cfd2(_0x322536)
    }
  }
)
const _0x332319 = {}
_0x332319.pattern = 'pemoji'
_0x332319.react = '\uD83D\uDD16'
_0x332319.desc = 'imoji to image convert'
_0x332319.category = 'search'
_0x332319.use = '.pemoji'
_0x332319.filename = __filename
cmd(
  _0x332319,
  async (
    _0x3ffd5b,
    _0x3c9d9b,
    _0x575e49,
    {
      from: _0x14647a,
      l: _0x1fdd1e,
      quoted: _0x4caa53,
      body: _0x1378dc,
      isCmd: _0x425c09,
      command: _0x52aeab,
      args: _0x41955c,
      q: _0x4333fd,
      isGroup: _0x37a0bc,
      sender: _0x20b37d,
      senderNumber: _0x4d1097,
      botNumber2: _0x417aa8,
      botNumber: _0x17b978,
      pushname: _0x6c8a29,
      isMe: _0x505fbd,
      isOwner: _0x1e4c09,
      groupMetadata: _0x163f4f,
      groupName: _0x4d3089,
      participants: _0x16b2d1,
      groupAdmins: _0x165680,
      isBotAdmins: _0x4b78c7,
      isAdmins: _0x5c43a1,
      reply: _0x192ef7,
    }
  ) => {
    try {
      if (!_0x4333fd) {
        return _0x192ef7(
          '*\uD83D\uDC78\uD83D\uDCAC Please Give me a imoji*\nExample - .' +
            _0x52aeab +
            '\uD83D\uDC78'
        )
      }
      const _0x4677a7 = {
        text: '\u2728',
        key: _0x3c9d9b.key,
      }
      const _0x598c48 = { react: _0x4677a7 }
      await _0x3ffd5b.sendMessage(_0x14647a, _0x598c48)
      await _0x3ffd5b.sendMessage(
        _0x3c9d9b.chat,
        {
          image: {
            url:
              'https://api.vihangayt.me/search/semoji?q=' +
              encodeURIComponent(_0x4333fd) +
              ' ',
          },
          caption: '' + global.cap,
        },
        { quoted: _0x3c9d9b }
      )
      const _0x3d3530 = {
        text: '\u2705',
        key: _0x3c9d9b.key,
      }
      const _0xdb8b35 = { react: _0x3d3530 }
      await _0x3ffd5b.sendMessage(_0x14647a, _0xdb8b35)
    } catch (_0x5bee6e) {
      _0x192ef7()
      _0x1fdd1e(_0x5bee6e)
    }
  }
)
const _0x3fac2f = {}
_0x3fac2f.pattern = 'bard'
_0x3fac2f.alias = ['bardai', 'gbard', 'googlebard', 'googleai', 'ai2']
_0x3fac2f.react = '\uD83D\uDC7E'
_0x3fac2f.desc = desct
_0x3fac2f.category = 'search'
_0x3fac2f.use = '.bard ha'
_0x3fac2f.filename = __filename
cmd(
  _0x3fac2f,
  async (
    _0x263541,
    _0x48a2b3,
    _0x537072,
    {
      from: _0xadb91d,
      l: _0x2c5c07,
      prefix: _0x5672d1,
      quoted: _0x211a83,
      body: _0x4d45a1,
      isCmd: _0x5f2e33,
      command: _0x5be465,
      args: _0x58f2f6,
      q: _0x22c9fd,
      isGroup: _0x15f1de,
      sender: _0x2e57b8,
      senderNumber: _0x43be8c,
      botNumber2: _0x3f485d,
      botNumber: _0x136a54,
      pushname: _0x534d65,
      isMe: _0x6372e0,
      isOwner: _0x475c6e,
      groupMetadata: _0x10c185,
      groupName: _0x485dd6,
      participants: _0x55c570,
      groupAdmins: _0x5d3f75,
      isBotAdmins: _0x4d68c6,
      isAdmins: _0x9bb13d,
      reply: _0x54c2eb,
    }
  ) => {
    try {
      if (!_0x22c9fd) {
        return _0x54c2eb(needus)
      }
      let _0xaa0a3a = await fetchJson(
          'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
        ),
        _0x4fa28f = _0xaa0a3a.users,
        _0x502647 = _0x4fa28f[Math.floor(Math.random() * _0x4fa28f.length)]
      const _0x3a16c8 = await fetchJson(
        _0xaa0a3a.xz + 'api/bard?text=' + _0x22c9fd + '&apikey=' + _0x502647
      )
      return await _0x54c2eb(_0x3a16c8.content)
    } catch (_0x13b468) {
      try {
        const _0x190188 = await fetchJson(
          'https://api.akuari.my.id/ai/gbard?chat=' + _0x22c9fd
        )
        return await _0x54c2eb(_0x190188.respon)
      } catch (_0x24b729) {
        _0x54c2eb(cantf)
        _0x2c5c07(_0x24b729)
      }
    }
  }
)
const _0x1f9747 = {}
_0x1f9747.pattern = 'bingimgai'
_0x1f9747.alias = ['midj']
_0x1f9747.react = '\uD83D\uDCF7'
_0x1f9747.desc = 'Generate Images using Bing AI'
_0x1f9747.category = 'search'
_0x1f9747.use = '.bingimgai <prompt>'
_0x1f9747.filename = __filename
cmd(
  _0x1f9747,
  async (
    _0x120103,
    _0x1a316e,
    _0x4529f1,
    {
      from: _0x36901b,
      l: _0x864115,
      quoted: _0x5249d0,
      body: _0x450c6f,
      isCmd: _0x6f9924,
      command: _0x25a876,
      args: _0x1f7d1f,
      q: _0xd81a6e,
      isGroup: _0x24e12d,
      sender: _0x4329cd,
      senderNumber: _0x4c7a5d,
      botNumber2: _0x5c6255,
      botNumber: _0x3cc95e,
      pushname: _0x553d57,
      isMe: _0x58b2ac,
      isOwner: _0x3708be,
      groupMetadata: _0x433031,
      groupName: _0x28ce14,
      participants: _0x29d886,
      groupAdmins: _0xe541f4,
      isBotAdmins: _0x2dded0,
      isAdmins: _0x421553,
      reply: _0x5c92c1,
    }
  ) => {
    try {
      if (!_0xd81a6e) {
        return await _0x5c92c1('*Give me a prompt to generate images*')
      }
      let _0x1a3ea9 = await fetchJson(
        'https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=' +
          _0xd81a6e +
          '&apiKey=vihangayt0'
      )
      if (
        _0x1a3ea9 &&
        _0x1a3ea9.result &&
        Array.isArray(_0x1a3ea9.result) &&
        _0x1a3ea9.result.length > 0
      ) {
        for (
          let _0x16b6ce = 0;
          _0x16b6ce < _0x1a3ea9.result.length;
          _0x16b6ce++
        ) {
          const _0x479c92 = { url: _0x1a3ea9.result[_0x16b6ce] }
          const _0x17f429 = {
            image: _0x479c92,
            caption: config.FOOTER,
          }
          const _0x288579 = { quoted: _0x1a316e }
          await _0x120103.sendMessage(_0x36901b, _0x17f429, _0x288579)
        }
      } else {
        _0x5c92c1('No images found for the given prompt')
      }
    } catch (_0x3dcc06) {
      _0x5c92c1('Unable to generate images to the given prompt')
      _0x864115(_0x3dcc06)
    }
  }
)
const _0x1c098d = {}
_0x1c098d.pattern = 'blackbox'
_0x1c098d.alias = ['bb']
_0x1c098d.react = '\uD83D\uDC7E'
_0x1c098d.desc = 'Blackbox ai chat'
_0x1c098d.category = 'search'
_0x1c098d.use = '.blackbox hi'
_0x1c098d.filename = __filename
cmd(
  _0x1c098d,
  async (
    _0x547b56,
    _0x135ba6,
    _0x595d32,
    {
      from: _0xb24c92,
      l: _0x5901e3,
      prefix: _0x5d5eb3,
      quoted: _0x26fcf0,
      body: _0x349a52,
      isCmd: _0x2a1b9a,
      command: _0x479135,
      args: _0x51d821,
      q: _0x59f45c,
      isGroup: _0x37f354,
      sender: _0xcd5a29,
      senderNumber: _0x73b0df,
      botNumber2: _0x3c8d12,
      botNumber: _0x2007ff,
      pushname: _0x4ac01d,
      isMe: _0x46478c,
      isOwner: _0x479daa,
      groupMetadata: _0x11c9d3,
      groupName: _0x3bb8b6,
      participants: _0x57b434,
      groupAdmins: _0x47194f,
      isBotAdmins: _0x6ce985,
      isAdmins: _0x491dfa,
      reply: _0x334b6a,
    }
  ) => {
    try {
      if (!_0x59f45c) {
        return _0x334b6a('Need a keyword')
      }
      var _0x2ecc10 = (
        await fetchJson('https://api.vihangayt.asia/ai/blackbox?q=' + _0x59f45c)
      ).result
      return await _0x334b6a(_0x2ecc10)
    } catch (_0x49e07e) {
      _0x334b6a('Unable to generate')
      _0x5901e3(_0x49e07e)
    }
  }
)
const _0x3e5ec5 = {}
_0x3e5ec5.pattern = 'slsubsearch'
_0x3e5ec5.react = '\uD83D\uDD0E'
_0x3e5ec5.desc = 'Search All Subtitles  from Web Site'
_0x3e5ec5.category = 'search'
_0x3e5ec5.use = '.slsubsearch'
_0x3e5ec5.filename = __filename
cmd(
  _0x3e5ec5,
  async (
    _0x46de72,
    _0x553f95,
    _0x51cf49,
    {
      from: _0x499f19,
      l: _0x36bc90,
      quoted: _0x147a70,
      body: _0xafd40e,
      isCmd: _0x15b94f,
      command: _0x5728e1,
      args: _0x2e7905,
      q: _0x1b0618,
      isGroup: _0x5b9399,
      sender: _0x146c90,
      senderNumber: _0x1c6897,
      botNumber2: _0x222959,
      botNumber: _0x446197,
      pushname: _0x3775d9,
      isMe: _0x33ed70,
      isOwner: _0x2f459f,
      groupMetadata: _0x2356ff,
      groupName: _0x27fb3e,
      participants: _0x38f353,
      groupAdmins: _0x430f57,
      isBotAdmins: _0x17217e,
      isCreator: _0x819035,
      isDev: _0x380726,
      isAdmins: _0x31e094,
      reply: _0x4a1ed6,
    }
  ) => {
    try {
      if (!_0x1b0618) {
        return _0x4a1ed6('\u2757 *Please enter movie name to Search Subtitles*')
      }
      const _0x6259a = await subsearch(_0x1b0618)
      let _0x1e4a5a =
        '\n\u274D\u26AF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u26AF\u274D\n        \uD83C\uDF10  *\uD835\uDE82\uD835\uDE7B \uD835\uDE82\uD835\uDE84\uD835\uDE71 \uD835\uDE82\uD835\uDE74\uD835\uDE70\uD835\uDE81\uD835\uDE72\uD835\uDE77 \uD835\uDE7B\uD835\uDE78\uD835\uDE82\uD835\uDE83*  \uD83C\uDF10\n \u26A1 *Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* \u26A1\n\u274D\u26AF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u26AF\u274D\n\n\n'
      for (let _0x33dc96 of _0x6259a.results) {
        _0x1e4a5a +=
          '\uD83D\uDCC3 *' +
          _0x33dc96.no +
          ' - ' +
          _0x33dc96.title +
          '*\n\uD83D\uDD17 _Link : ' +
          _0x33dc96.link +
          '_ \n\n\n'
      }
      const _0xfb2c8f = {
        url: 'https://telegra.ph/file/b4caa5682d75220623b83.jpg',
      }
      const _0x2a914c = { quoted: _0x553f95 }
      await _0x46de72.sendMessage(
        _0x499f19,
        {
          image: _0xfb2c8f,
          caption:
            _0x1e4a5a +
            '*Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
        },
        _0x2a914c
      )
    } catch (_0x4194fb) {
      _0x4a1ed6('\u26D4 *Error accurated !!*\n\n' + _0x4194fb)
      _0x36bc90(_0x4194fb)
    }
  }
)
const _0x4bcdac = {}
_0x4bcdac.pattern = 'imdb'
_0x4bcdac.react = '\uD83C\uDF4E'
_0x4bcdac.desc = 'To check imdb'
_0x4bcdac.category = 'search'
_0x4bcdac.use = '.imdb'
cmd(
  _0x4bcdac,
  async (
    _0x52a5f6,
    _0x199b25,
    _0x4de3dc,
    {
      from: _0x4ec740,
      l: _0x18b757,
      quoted: _0x1b18ea,
      body: _0x18d2ea,
      isCmd: _0x41d646,
      command: _0x265a5e,
      args: _0x4ffa44,
      q: _0x326152,
      isGroup: _0x51393e,
      sender: _0xa57d40,
      senderNumber: _0x25f1dd,
      botNumber2: _0x4ca52e,
      botNumber: _0x2a200c,
      pushname: _0x3c8c7e,
      isMe: _0x240afb,
      isOwner: _0x56c3f7,
      groupMetadata: _0x1fdf3d,
      groupName: _0x126821,
      participants: _0x2f00b7,
      groupAdmins: _0xfd7d8b,
      isBotAdmins: _0xd3a823,
      isAdmins: _0x59cdd7,
      reply: _0x51d0d0,
    }
  ) => {
    try {
      if (!_0x326152) {
        return _0x51d0d0('_Name a Series or movie')
      }
      let _0x294b72 = await axios.get(
          'http://www.omdbapi.com/?apikey=742b2d09&t=' +
            _0x326152 +
            '&plot=full'
        ),
        _0x424a4b = ''
      console.log(_0x294b72.data)
      _0x424a4b +=
        '\u268D\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268D\n ``` IMDB SEARCH```\n\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\u268E\n'
      _0x424a4b += '\uD83C\uDFACTitle      : ' + _0x294b72.data.Title + '\n'
      _0x424a4b += '\uD83D\uDCC5Year       : ' + _0x294b72.data.Year + '\n'
      _0x424a4b += '\u2B50Rated      : ' + _0x294b72.data.Rated + '\n'
      _0x424a4b += '\uD83D\uDCC6Released   : ' + _0x294b72.data.Released + '\n'
      _0x424a4b += '\u23F3Runtime    : ' + _0x294b72.data.Runtime + '\n'
      _0x424a4b += '\uD83C\uDF00Genre      : ' + _0x294b72.data.Genre + '\n'
      _0x424a4b +=
        '\uD83D\uDC68\uD83C\uDFFB‍\uD83D\uDCBBDirector   : ' +
        _0x294b72.data.Director +
        '\n'
      _0x424a4b += '\u270DWriter     : ' + _0x294b72.data.Writer + '\n'
      _0x424a4b += '\uD83D\uDC68Actors     : ' + _0x294b72.data.Actors + '\n'
      _0x424a4b += '\uD83D\uDCC3Plot       : ' + _0x294b72.data.Plot + '\n'
      _0x424a4b += '\uD83C\uDF10Language   : ' + _0x294b72.data.Language + '\n'
      _0x424a4b += '\uD83C\uDF0DCountry    : ' + _0x294b72.data.Country + '\n'
      _0x424a4b += '\uD83C\uDF96️Awards     : ' + _0x294b72.data.Awards + '\n'
      _0x424a4b += '\uD83D\uDCE6BoxOffice  : ' + _0x294b72.data.BoxOffice + '\n'
      _0x424a4b +=
        '\uD83C\uDFD9️Production : ' + _0x294b72.data.Production + '\n'
      _0x424a4b +=
        '\uD83C\uDF1FimdbRating : ' + _0x294b72.data.imdbRating + '\n'
      _0x424a4b += '\u2705imdbVotes  : ' + _0x294b72.data.imdbVotes + ''
      const _0x34bc22 = { url: _0x294b72.data.Poster }
      const _0x3c142f = {
        image: _0x34bc22,
        caption: _0x424a4b,
      }
      const _0x234de2 = { quoted: _0x199b25 }
      _0x52a5f6.sendMessage(_0x4de3dc.chat, _0x3c142f, _0x234de2)
      const _0x324663 = {
        text: '\u2705',
        key: _0x199b25.key,
      }
      const _0x3a060f = { react: _0x324663 }
      await _0x52a5f6.sendMessage(_0x4ec740, _0x3a060f)
    } catch (_0x14d128) {
      _0x18b757(_0x14d128)
    }
  }
)
