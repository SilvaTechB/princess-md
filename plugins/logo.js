const config = require('../settings'),
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
  } = require('../lib/functions')
const { Maker } = require('imagemaker.js')
var Photooxy = require('@sl-code-lords/photooxy'),
  photooxy = new Photooxy()
const fileType = require('file-type'),
  fs = require('fs')
var TextPro = require('@sl-code-lords/text-pro-me'),
  text_pro = new TextPro(),
  imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = '```කරුණාකර නමක් දෙන්න !```'
} else {
  imgmsg = '```Please give me a name !```'
}
var imgmsg2 = ''
if (config.LANG === 'SI') {
  imgmsg2 = '*උදා: .banner vajira+rathnayaka*'
} else {
  imgmsg2 = '*Ex: .banner vajira+rathnayaka*'
}
var imgmsg3 = ''
if (config.LANG === 'SI') {
  imgmsg3 = '*උදා: .banner2 vajira+rathnayaka*'
} else {
  imgmsg3 = '*Ex: .banner2 vajira+rathnayaka*'
}
var imgmsg4 = ''
if (config.LANG === 'SI') {
  imgmsg4 = '*උදා: .banner3 vajira+rathnayaka*'
} else {
  imgmsg4 = '*Ex: .banner3 vajira+rathnayaka*'
}
var imgmsg5 = ''
if (config.LANG === 'SI') {
  imgmsg5 = '*උදා: .banner3 vajira+rathnayaka*'
} else {
  imgmsg5 = '*Ex: .banner3 vajira+rathnayaka*'
}
var imgmsg6 = ''
if (config.LANG === 'SI') {
  imgmsg6 = '*උදා: .banner3 vajira+rathnayaka*'
} else {
  imgmsg6 = '*Ex: .banner3 vajira+rathnayaka*'
}
var desc = ''
if (config.LANG === 'SI') {
  desc = 'එය වචන 1කින් ephoto360 logos නිර්මාණය කරයි..'
} else {
  desc = 'It creates ephoto360 logos using 1 word..'
}
var desc2 = ''
if (config.LANG === 'SI') {
  desc2 = 'එය channel banners නිර්මාණය කරයි..'
} else {
  desc2 = 'It creates channel banners..'
}
var errt = ''
if (config.LANG === 'SI') {
  errt = '*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*'
} else {
  errt = '*I cant create this logo :(*'
}
var imgmsg7 = ''
if (config.LANG === 'SI') {
  imgmsg7 = '*උදා: .photooxy2 Vajira+Timasha*'
} else {
  imgmsg7 = '*Ex: .photooxy2 Vajira+Timasha*'
}
var desc1 = ''
if (config.LANG === 'SI') {
  desc1 = 'එය වචන 1කින් photooxy logos නිර්මාණය කරයි..'
} else {
  desc1 = 'It creates photooxy logos using 1 word..'
}
var desc3 = ''
if (config.LANG === 'SI') {
  desc3 = 'එය වචන 2කින් photooxy logos නිර්මාණය කරයි..'
} else {
  desc3 = 'It creates photooxy logos using 2 word..'
}
var imgmsgeew = ''
if (config.LANG === 'SI') {
  imgmsgeew = '*ඡායාරූපයකට mention දෙන්න !*'
} else {
  imgmsgeew = '*Reply to a photo !*'
}
var imgmsg8 = ''
if (config.LANG === 'SI') {
  imgmsg8 = '*උදා: .textpro2 vihanga+ashinshana*'
} else {
  imgmsg8 = '*Ex: .textpro2 vihanga+ashinshana*'
}
var desc4 = ''
if (config.LANG === 'SI') {
  desc4 = 'එය වචන 1කින් textpro logos නිර්මාණය කරයි..'
} else {
  desc4 = 'It creates textpro logos using 1 word..'
}
var desc5 = ''
if (config.LANG === 'SI') {
  desc5 = 'එය වචන 2කින් textpro logos නිර්මාණය කරයි..'
} else {
  desc5 = 'It creates textpro logos using 2 word..'
}
var errt = ''
if (config.LANG === 'SI') {
  errt = '*මට මෙම ලාංඡනය නිර්මාණය කළ නොහැක. :(*'
} else {
  errt = '*I cant create this logo :(*'
}
var _0x444ed2 = {}
_0x444ed2.pattern = 'textpro1'
_0x444ed2.react = '\uD83C\uDFA1'
_0x444ed2.alias = ['logo', 'textpro']
_0x444ed2.desc = desc4
_0x444ed2.category = 'logo'
_0x444ed2.use = '.textpro1 vihanga yt'
_0x444ed2.filename = __filename
cmd(
  _0x444ed2,
  async (
    _0x509d42,
    _0x48f951,
    _0x1c1fb3,
    {
      from: _0x218930,
      l: _0x80ebb3,
      prefix: _0x5769b0,
      quoted: _0x6e9fcb,
      body: _0x436bf1,
      isCmd: _0x521b3c,
      command: _0x59e1bd,
      args: _0x5c1403,
      q: _0x41985b,
      isGroup: _0x17f4d0,
      sender: _0x28796d,
      senderNumber: _0x2ca2e8,
      botNumber2: _0x1b729d,
      botNumber: _0x34f628,
      pushname: _0x18ca69,
      isMe: _0x115856,
      isOwner: _0x2a3169,
      groupMetadata: _0x4077c7,
      groupName: _0xd40269,
      participants: _0x52dcb6,
      groupAdmins: _0x44a261,
      isBotAdmins: _0x21ab15,
      isAdmins: _0x5139d6,
      reply: _0xb3b639,
    }
  ) => {
    try {
      if (!_0x41985b) {
        return await _0xb3b639(imgmsg)
      }
      const _0x3451e2 = await text_pro.get_url_list()
      let _0x18f7b8 = _0x3451e2
      var _0x3f547b = { text: N_FOUND }
      var _0x16a536 = { quoted: _0x48f951 }
      if (_0x18f7b8.length < 1) {
        return await _0x509d42.sendMessage(_0x218930, _0x3f547b, _0x16a536)
      }
      var _0x301977 = []
      for (var _0x18a9c1 = 0; _0x18a9c1 < 9; _0x18a9c1++) {
        !_0x18f7b8[_0x18a9c1].double_text &&
          !_0x18f7b8[_0x18a9c1].need_image &&
          _0x301977.push({
            title: _0x18a9c1 + 1,
            description: _0x18f7b8[_0x18a9c1].title,
            rowId:
              _0x5769b0 + 'dlogo ' + _0x41985b + '+' + _0x18f7b8[_0x18a9c1].url,
          })
      }
      var _0x31bf55 = {
        title: 'Result from textpro. \uD83D\uDCF2',
        rows: _0x301977,
      }
      const _0x580e50 = [_0x31bf55]
      var _0x172c77 = {
        text:
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *TEXTPRO LOGO 01*\n\n*\uD83E\uDD39 Entered Name:* ' +
          _0x41985b,
        footer: config.FOOTER,
        title: 'Result from textpro. \uD83D\uDCF2',
        buttonText: 'Select Logo \uD83C\uDFA1',
        sections: _0x580e50,
      }
      const _0x1ce6f7 = _0x172c77
      var _0x14fef3 = { quoted: _0x48f951 }
      await _0x509d42.replyList(_0x218930, _0x1ce6f7, _0x14fef3)
    } catch (_0x49a742) {
      _0xb3b639(errt), _0x80ebb3(_0x49a742)
    }
  }
)
var _0xaa7ea1 = {}
_0xaa7ea1.pattern = 'textpro2'
_0xaa7ea1.react = '\uD83C\uDFA1'
_0xaa7ea1.alias = ['logo2']
_0xaa7ea1.desc = desc5
_0xaa7ea1.category = 'logo'
_0xaa7ea1.use = '.textpro2 vihanga+ashinshana'
_0xaa7ea1.filename = __filename
cmd(
  _0xaa7ea1,
  async (
    _0x4e440c,
    _0x216e4b,
    _0x3469fb,
    {
      from: _0x47e22c,
      l: _0x99703b,
      prefix: _0x82d819,
      quoted: _0x10470b,
      body: _0xd7acb8,
      isCmd: _0x1d9e75,
      command: _0x28a5d0,
      args: _0x33df1a,
      q: _0x52e7f4,
      isGroup: _0x333200,
      sender: _0x18abaa,
      senderNumber: _0x447d8e,
      botNumber2: _0x5ec827,
      botNumber: _0x1d886b,
      pushname: _0x1f6642,
      isMe: _0x50b53a,
      isOwner: _0x1e1704,
      groupMetadata: _0x2e4cd5,
      groupName: _0x624a37,
      participants: _0x57a469,
      groupAdmins: _0x1f3248,
      isBotAdmins: _0x2fd7c1,
      isAdmins: _0x73e34a,
      reply: _0x473246,
    }
  ) => {
    try {
      if (!_0x52e7f4.includes('+')) {
        return await _0x473246(imgmsg8)
      }
      const _0x3b5f89 = await text_pro.get_url_list()
      let _0x1faf53 = _0x3b5f89
      var _0x471c36 = { text: N_FOUND }
      var _0x122510 = { quoted: _0x216e4b }
      if (_0x1faf53.length < 1) {
        return await _0x4e440c.sendMessage(_0x47e22c, _0x471c36, _0x122510)
      }
      var _0x1bee26 = []
      for (var _0xab0345 = 0; _0xab0345 < 9; _0xab0345++) {
        _0x1faf53[_0xab0345].double_text &&
          !_0x1faf53[_0xab0345].need_image &&
          _0x1bee26.push({
            title: _0xab0345 + 1,
            description: _0x1faf53[_0xab0345].title,
            rowId:
              _0x82d819 +
              'dlogo2 ' +
              _0x52e7f4 +
              '+' +
              _0x1faf53[_0xab0345].url,
          })
      }
      var _0x5ca08d = {
        title: 'Result from textpro. \uD83D\uDCF2',
        rows: _0x1bee26,
      }
      const _0x3cfd32 = [_0x5ca08d]
      var _0x3b5610 = {
        text:
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *TEXTPRO LOGO 02*\n\n*\uD83E\uDD39 Entered Name:* ' +
          _0x52e7f4,
        footer: config.FOOTER,
        title: 'Result from textpro. \uD83D\uDCF2',
        buttonText: 'Select Logo \uD83C\uDFA1',
        sections: _0x3cfd32,
      }
      const _0xe63f49 = _0x3b5610
      var _0x367749 = { quoted: _0x216e4b }
      await _0x4e440c.replyList(_0x47e22c, _0xe63f49, _0x367749)
    } catch (_0x5e38fc) {
      _0x473246(errt), _0x99703b(_0x5e38fc)
    }
  }
)
var _0x3ad54c = {}
_0x3ad54c.pattern = 'dlogo'
_0x3ad54c.dontAddCommandList = true
_0x3ad54c.filename = __filename
cmd(
  _0x3ad54c,
  async (
    _0x278800,
    _0x23c5ae,
    _0x5293a0,
    {
      from: _0x63c100,
      l: _0x282d16,
      quoted: _0x286cfb,
      body: _0x5222e5,
      isCmd: _0x34f3c5,
      command: _0x2101ab,
      args: _0x4d9349,
      q: _0x51738c,
      isGroup: _0x2dd423,
      sender: _0x1fe2e9,
      senderNumber: _0x277c34,
      botNumber2: _0x3500f3,
      botNumber: _0x5b6c61,
      pushname: _0x97b6d1,
      isMe: _0x567ea6,
      isOwner: _0x1024b5,
      groupMetadata: _0x575fd9,
      groupName: _0x28317f,
      participants: _0x1a9b02,
      groupAdmins: _0x675eb9,
      isBotAdmins: _0x59dc67,
      isAdmins: _0x37a42d,
      reply: _0x1e40b7,
    }
  ) => {
    try {
      var _0x125e40 = {
        text: '\uD83C\uDF86',
        key: _0x23c5ae.key,
      }
      var _0x147a3e = { react: _0x125e40 }
      await _0x278800.sendMessage(_0x63c100, _0x147a3e)
      let [_0x3a14a8, _0xe28f7] = _0x51738c.split('+')
      var _0x9a17bd = await text_pro.one_text_create(_0xe28f7, _0x3a14a8),
        _0x427605 = await text_pro.image_to_buffer(_0x9a17bd.url),
        _0x306580 = {
          image: _0x427605,
          caption: config.FOOTER,
        }
      var _0x4c8989 = { quoted: _0x23c5ae }
      await _0x278800.sendMessage(_0x63c100, _0x306580, _0x4c8989)
      var _0x1c10cc = {
        text: '\u2714',
        key: _0x23c5ae.key,
      }
      var _0x360e70 = { react: _0x1c10cc }
      await _0x278800.sendMessage(_0x63c100, _0x360e70)
    } catch (_0x208a02) {
      _0x1e40b7(errt), _0x282d16(_0x208a02)
    }
  }
)
var _0x4aa6b3 = {}
_0x4aa6b3.pattern = 'dlogo2'
_0x4aa6b3.dontAddCommandList = true
_0x4aa6b3.filename = __filename
cmd(
  _0x4aa6b3,
  async (
    _0x297e4a,
    _0x159203,
    _0x235f30,
    {
      from: _0x4168eb,
      l: _0x55741e,
      quoted: _0x10f19c,
      body: _0x69680c,
      isCmd: _0x52339b,
      command: _0x5111d0,
      args: _0x101f2b,
      q: _0x3770ad,
      isGroup: _0x507234,
      sender: _0x17c73e,
      senderNumber: _0x2c3a0d,
      botNumber2: _0x2db0cf,
      botNumber: _0x541032,
      pushname: _0x194e84,
      isMe: _0x91de67,
      isOwner: _0x3a4083,
      groupMetadata: _0x2b466a,
      groupName: _0x211894,
      participants: _0x3c974e,
      groupAdmins: _0x459709,
      isBotAdmins: _0x27d44e,
      isAdmins: _0x306d51,
      reply: _0x46a4bf,
    }
  ) => {
    try {
      var _0x40a0aa = {
        text: '\uD83C\uDF86',
        key: _0x159203.key,
      }
      var _0xf6d1cd = { react: _0x40a0aa }
      await _0x297e4a.sendMessage(_0x4168eb, _0xf6d1cd)
      let [_0x1eefb8, _0x383c8c, _0x288bbf] = _0x3770ad.split('+')
      var _0x4971e8 = await text_pro.double_text_create(
          _0x288bbf,
          _0x1eefb8,
          _0x383c8c
        ),
        _0x2472a3 = await text_pro.image_to_buffer(_0x4971e8.url),
        _0x3c9897 = {
          image: _0x2472a3,
          caption: config.FOOTER,
        }
      var _0x10d519 = { quoted: _0x159203 }
      await _0x297e4a.sendMessage(_0x4168eb, _0x3c9897, _0x10d519)
      var _0x25abe4 = {
        text: '\u2714',
        key: _0x159203.key,
      }
      var _0x2f02da = { react: _0x25abe4 }
      await _0x297e4a.sendMessage(_0x4168eb, _0x2f02da)
    } catch (_0x27d4f7) {
      _0x46a4bf(errt), _0x55741e(_0x27d4f7)
    }
  }
)
var _0x14659a = {}
_0x14659a.pattern = 'ephoto360'
_0x14659a.react = '\uD83C\uDFAD'
_0x14659a.alias = ['logo6', 'ephoto360', 'ephoto']
_0x14659a.desc = desc
_0x14659a.category = 'logo'
_0x14659a.use = '.ephoto360 VajiraTech'
_0x14659a.filename = __filename
cmd(
  _0x14659a,
  async (
    _0x1e6db2,
    _0x4d2286,
    _0xcb4823,
    {
      from: _0x97af9e,
      l: _0x43f213,
      prefix: _0x43b510,
      quoted: _0x363ef6,
      body: _0x28bce3,
      isCmd: _0xd973ab,
      command: _0x72484,
      args: _0x393508,
      q: _0x1a5e9d,
      isGroup: _0x280f66,
      sender: _0x122853,
      senderNumber: _0x44503e,
      botNumber2: _0x57f888,
      botNumber: _0x2149ca,
      pushname: _0x275c22,
      isMe: _0x70cdf7,
      isOwner: _0x3dfa72,
      groupMetadata: _0x502a1f,
      groupName: _0x3e2539,
      participants: _0x278bf3,
      groupAdmins: _0x566936,
      isBotAdmins: _0x26968a,
      isAdmins: _0x25fb58,
      reply: _0x87e7ec,
    }
  ) => {
    try {
      if (!_0x1a5e9d) {
        return await _0x87e7ec(imgmsg)
      }
      const _0x227570 = [
        {
          title: 'Result from ephoto360. \uD83D\uDCF2',
          rows: [
            {
              title: 'Blackpink',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html',
            },
            {
              title: 'Dragon ball',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html',
            },
            {
              title: 'Naruto shippuden',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html',
            },
            {
              title: 'Sunset light',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-sunset-light-text-effects-online-807.html',
            },
            {
              title: 'beautiful 3d foil baloon',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html',
            },
            {
              title: 'Digital glitch',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html',
            },
            {
              title: 'Write text on wet glass',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html',
            },
            {
              title: 'Glossy silver 3D text effect',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html',
            },
            {
              title: 'Colorful neon light text effect',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html',
            },
            {
              title: 'Thor logo style',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html',
            },
            {
              title: 'Typography text effect on pavement',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html',
            },
            {
              title: 'Impressive neon Glitch text effect',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html',
            },
            {
              title: 'Handwritten text on foggy glass',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html',
            },
            {
              title: 'Impressive decorative 3D metal text',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html',
            },
            {
              title: 'Frozen Christmas text',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html',
            },
            {
              title: 'Hacker avatar',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html',
            },
            {
              title: '3D colorful paint text',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html',
            },
            {
              title: "Women's Day",
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-greeting-video-card-for-international-women-s-day-on-march-8-784.html',
            },
            {
              title: 'Pixel Glitch',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html',
            },
            {
              title: 'Americal flag',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html',
            },
            {
              title: 'Erasing',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html',
            },
            {
              title: 'Multicolored signature attachment arrow',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html',
            },
            {
              title: 'Blackpink 02',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html',
            },
            {
              title: 'Blackpink neon',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html',
            },
            {
              title: 'Star Wars character mascot',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-star-wars-character-mascot-logo-online-707.html',
            },
            {
              title: 'Glowing text',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-glowing-text-effects-online-706.html',
            },
            {
              title: 'Funny animations of a traveling bear',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html',
            },
            {
              title: 'Beach 3D',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html',
            },
            {
              title: 'Cute girl gamer mascot',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html',
            },
            {
              title: '3D underwater',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html',
            },
            {
              title: 'Bear logo',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/free-bear-logo-maker-online-673.html',
            },
            {
              title: 'Football team logo',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-football-team-logo-online-free-671.html',
            },
            {
              title: 'Cartoon style graffiti',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html',
            },
            {
              title: 'Multicolor 3D paper',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html',
            },
            {
              title: 'Watercolor text',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html',
            },
            {
              title: 'Light text effect futuristic technology',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html',
            },
            {
              title: 'Write text effect clouds in the sky',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html',
            },
            {
              title: 'PUBG logo maker cute character',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/pubg-logo-maker-cute-character-online-617.html',
            },
            {
              title: 'PUBG Mascot Logo Maker for an eSports',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html',
            },
            {
              title: 'Black Pink 03',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html',
            },
            {
              title: 'Funny warning sign',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-funny-warning-sign-602.html',
            },
            {
              title: '3D gradient text',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html',
            },
            {
              title: 'Write in sand summer beach',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html',
            },
            {
              title: 'Luxury gold text',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html',
            },
            {
              title: 'Multicolored neon light signatures',
              rowId:
                _0x43b510 +
                'dlogo6 ' +
                _0x1a5e9d +
                '+' +
                'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html',
            },
          ],
        },
      ]
      var _0x27242e = {
        text:
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *EPHOTO360 LOGO*\n\n*\uD83E\uDD39 Entered Name:* ' +
          _0x1a5e9d,
        footer: config.FOOTER,
        title: 'Result from ephoto360. \uD83D\uDCF2',
        buttonText: 'Select Logo \uD83C\uDFAD',
        sections: _0x227570,
      }
      const _0x59ddb4 = _0x27242e
      await _0x1e6db2.listMessage(_0x97af9e, _0x59ddb4, _0x4d2286)
    } catch (_0x2ba274) {
      _0x87e7ec(errt), _0x43f213(_0x2ba274)
    }
  }
)
var _0x6e95cd = {}
_0x6e95cd.pattern = 'banner'
_0x6e95cd.alias = ['ytbanner', 'cover', 'channelbanner']
_0x6e95cd.desc = desc2
_0x6e95cd.category = 'logo'
_0x6e95cd.use = '.banner VajiraTech+yt'
_0x6e95cd.filename = __filename
cmd(
  _0x6e95cd,
  async (
    _0x4307f2,
    _0x2af5fe,
    _0x458ae7,
    {
      from: _0x2b95de,
      l: _0xab7e16,
      quoted: _0x486a27,
      body: _0x5ed382,
      isCmd: _0x165849,
      command: _0x58cb14,
      args: _0x55222f,
      q: _0x59c5cd,
      isGroup: _0xe596f3,
      sender: _0x3f321b,
      senderNumber: _0x5adbe5,
      botNumber2: _0x5ecf64,
      botNumber: _0x849254,
      pushname: _0x5ae66c,
      isMe: _0x5326d5,
      isOwner: _0x3deb67,
      groupMetadata: _0x239be8,
      groupName: _0x44269d,
      participants: _0x2ed6ae,
      groupAdmins: _0x5ea3e8,
      isBotAdmins: _0x3feb99,
      isAdmins: _0x591386,
      reply: _0x23a9cb,
    }
  ) => {
    try {
      var _0x3bf274 = {
        text: '\uD83C\uDF86',
        key: _0x2af5fe.key,
      }
      var _0x14c5ce = { react: _0x3bf274 }
      await _0x4307f2.sendMessage(_0x2b95de, _0x14c5ce)
      if (!_0x59c5cd.includes('+')) {
        return await _0x23a9cb(imgmsg2)
      }
      let [_0x224383, _0x545469] = _0x59c5cd.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-overwatch-2-banner-for-the-online-youtube-channel-782.html',
          ['' + _0x224383, '' + _0x545469]
        )
        .then(async (_0x293cd3) => {
          var _0x396484 = { quoted: _0x2af5fe }
          await _0x4307f2.sendMessage(
            _0x2b95de,
            {
              image: await getBuffer(_0x293cd3.imageUrl),
              caption: config.FOOTER,
            },
            _0x396484
          )
          var _0x40c839 = {
            text: '\u2714',
            key: _0x2af5fe.key,
          }
          var _0x394e66 = { react: _0x40c839 }
          await _0x4307f2.sendMessage(_0x2b95de, _0x394e66)
        })
    } catch (_0x29cae0) {
      _0x23a9cb(errt), _0xab7e16(_0x29cae0)
    }
  }
)
var _0x40784d = {}
_0x40784d.pattern = 'banner2'
_0x40784d.alias = ['ytbanner2', 'cover2', 'channelbanner2']
_0x40784d.desc = desc2
_0x40784d.category = 'logo'
_0x40784d.use = '.banner2 VajiraTech+yt'
_0x40784d.filename = __filename
cmd(
  _0x40784d,
  async (
    _0x427757,
    _0x504ed2,
    _0x41ecae,
    {
      from: _0xaa3994,
      l: _0x2ff48f,
      quoted: _0x216054,
      body: _0x44f4cb,
      isCmd: _0x37b3fa,
      command: _0x167bc7,
      args: _0x4426b8,
      q: _0x3e9213,
      isGroup: _0x3de3a8,
      sender: _0x2e608b,
      senderNumber: _0x5255bf,
      botNumber2: _0x2b9c67,
      botNumber: _0x323fc5,
      pushname: _0x6d3f44,
      isMe: _0x5d96ca,
      isOwner: _0x46b7a8,
      groupMetadata: _0x318473,
      groupName: _0x68b598,
      participants: _0x151159,
      groupAdmins: _0x38447f,
      isBotAdmins: _0x18f57d,
      isAdmins: _0x21c615,
      reply: _0x2721b3,
    }
  ) => {
    try {
      var _0x252a7e = {
        text: '\uD83C\uDF86',
        key: _0x504ed2.key,
      }
      var _0x257ceb = { react: _0x252a7e }
      await _0x427757.sendMessage(_0xaa3994, _0x257ceb)
      if (!_0x3e9213.includes('+')) {
        return await _0x2721b3(imgmsg3)
      }
      let [_0x44cd63, _0x55b9f7] = _0x3e9213.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html',
          ['' + _0x44cd63, '' + _0x55b9f7]
        )
        .then(async (_0x22b3c9) => {
          var _0x15d39f = { quoted: _0x504ed2 }
          await _0x427757.sendMessage(
            _0xaa3994,
            {
              image: await getBuffer(_0x22b3c9.imageUrl),
              caption: config.FOOTER,
            },
            _0x15d39f
          )
          var _0x1174f9 = {
            text: '\u2714',
            key: _0x504ed2.key,
          }
          var _0x183693 = { react: _0x1174f9 }
          await _0x427757.sendMessage(_0xaa3994, _0x183693)
        })
    } catch (_0x491a6a) {
      _0x2721b3(errt), _0x2ff48f(_0x491a6a)
    }
  }
)
var _0x3465bf = {}
_0x3465bf.pattern = 'banner3'
_0x3465bf.alias = ['ytbanner3', 'cover3', 'channelbanner3']
_0x3465bf.desc = desc2
_0x3465bf.category = 'logo'
_0x3465bf.use = '.banner3 VajiraTech+yt'
_0x3465bf.filename = __filename
cmd(
  _0x3465bf,
  async (
    _0xc1f8c6,
    _0x447754,
    _0x1923ce,
    {
      from: _0x10da2d,
      l: _0x1f7db0,
      quoted: _0x33e17e,
      body: _0x2734f6,
      isCmd: _0x388228,
      command: _0x3bdfd7,
      args: _0x42d68f,
      q: _0x54df85,
      isGroup: _0xe1e96b,
      sender: _0x53c342,
      senderNumber: _0xca11ea,
      botNumber2: _0xc96320,
      botNumber: _0x5167c,
      pushname: _0x57f553,
      isMe: _0xabe784,
      isOwner: _0x4a4322,
      groupMetadata: _0x46a301,
      groupName: _0x50fa19,
      participants: _0x2078e7,
      groupAdmins: _0x3d5da4,
      isBotAdmins: _0x28f2a5,
      isAdmins: _0x5c929d,
      reply: _0x21d714,
    }
  ) => {
    try {
      var _0x26f608 = {
        text: '\uD83C\uDF86',
        key: _0x447754.key,
      }
      var _0xe951f2 = { react: _0x26f608 }
      await _0xc1f8c6.sendMessage(_0x10da2d, _0xe951f2)
      if (!_0x54df85.includes('+')) {
        return await _0x21d714(imgmsg4)
      }
      let [_0x3813cb, _0x36d268] = _0x54df85.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-a-youtube-banner-game-of-pubg-cool-402.html',
          ['' + _0x3813cb, '' + _0x36d268]
        )
        .then(async (_0x41a7e5) => {
          var _0xf9cbcb = { quoted: _0x447754 }
          await _0xc1f8c6.sendMessage(
            _0x10da2d,
            {
              image: await getBuffer(_0x41a7e5.imageUrl),
              caption: config.FOOTER,
            },
            _0xf9cbcb
          )
          var _0x427011 = {
            text: '\u2714',
            key: _0x447754.key,
          }
          var _0x3b720e = { react: _0x427011 }
          await _0xc1f8c6.sendMessage(_0x10da2d, _0x3b720e)
        })
    } catch (_0x54ac48) {
      _0x21d714(errt), _0x1f7db0(_0x54ac48)
    }
  }
)
var _0x5028c1 = {}
_0x5028c1.pattern = 'banner4'
_0x5028c1.alias = ['ytbanner4', 'cover4', 'channelbanner4']
_0x5028c1.desc = desc2
_0x5028c1.category = 'logo'
_0x5028c1.use = '.banner4 VajiraTech+yt'
_0x5028c1.filename = __filename
cmd(
  _0x5028c1,
  async (
    _0x2b6ffc,
    _0x4dd198,
    _0x22e9e9,
    {
      from: _0x41fe6c,
      l: _0x4195e6,
      quoted: _0x39562a,
      body: _0x3f9e45,
      isCmd: _0x1782a2,
      command: _0x392abb,
      args: _0x294995,
      q: _0x34344e,
      isGroup: _0x4e1ce0,
      sender: _0x37ddd5,
      senderNumber: _0x5e27a6,
      botNumber2: _0x46ed7e,
      botNumber: _0x5ee013,
      pushname: _0x4f0291,
      isMe: _0x37c83a,
      isOwner: _0x13ce93,
      groupMetadata: _0x10727f,
      groupName: _0xec079e,
      participants: _0x2ed34a,
      groupAdmins: _0x29d6fb,
      isBotAdmins: _0x320d5c,
      isAdmins: _0x421856,
      reply: _0x5df2b0,
    }
  ) => {
    try {
      var _0x50002f = {
        text: '\uD83C\uDF86',
        key: _0x4dd198.key,
      }
      var _0x46d1da = { react: _0x50002f }
      await _0x2b6ffc.sendMessage(_0x41fe6c, _0x46d1da)
      if (!_0x34344e.includes('+')) {
        return await _0x5df2b0(imgmsg5)
      }
      let [_0x5e0372, _0x3b67e5] = _0x34344e.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-call-of-duty-warzone-youtube-banner-online-548.html',
          ['' + _0x5e0372, '' + _0x3b67e5]
        )
        .then(async (_0x41d249) => {
          var _0x73e217 = { quoted: _0x4dd198 }
          await _0x2b6ffc.sendMessage(
            _0x41fe6c,
            {
              image: await getBuffer(_0x41d249.imageUrl),
              caption: config.FOOTER,
            },
            _0x73e217
          )
          var _0x39919a = {
            text: '\u2714',
            key: _0x4dd198.key,
          }
          var _0x2d89ca = { react: _0x39919a }
          await _0x2b6ffc.sendMessage(_0x41fe6c, _0x2d89ca)
        })
    } catch (_0x17568a) {
      _0x5df2b0(errt), _0x4195e6(_0x17568a)
    }
  }
)
var _0x3a830a = {}
_0x3a830a.pattern = 'banner5'
_0x3a830a.alias = ['ytbanner5', 'cover5', 'channelbanner5']
_0x3a830a.desc = desc2
_0x3a830a.category = 'logo'
_0x3a830a.use = '.banner5 VajiraTech+yt'
_0x3a830a.filename = __filename
cmd(
  _0x3a830a,
  async (
    _0x4387c2,
    _0x3a6df9,
    _0x50f38d,
    {
      from: _0x1ecb34,
      l: _0x236add,
      quoted: _0x1abdc2,
      body: _0x2bded3,
      isCmd: _0x3448c3,
      command: _0x586ff2,
      args: _0x3e7aba,
      q: _0x3d5d88,
      isGroup: _0x5e145f,
      sender: _0x37a6a3,
      senderNumber: _0x177792,
      botNumber2: _0x3038c5,
      botNumber: _0x43ee9a,
      pushname: _0x196641,
      isMe: _0x420ace,
      isOwner: _0x1bce93,
      groupMetadata: _0x3fa4df,
      groupName: _0x508474,
      participants: _0xcce1e1,
      groupAdmins: _0x1b3db5,
      isBotAdmins: _0x2d2bc5,
      isAdmins: _0x13a89,
      reply: _0x3d544c,
    }
  ) => {
    try {
      var _0x2d0878 = {
        text: '\uD83C\uDF86',
        key: _0x3a6df9.key,
      }
      var _0x2b1bd0 = { react: _0x2d0878 }
      await _0x4387c2.sendMessage(_0x1ecb34, _0x2b1bd0)
      if (!_0x3d5d88.includes('+')) {
        return await _0x3d544c(imgmsg6)
      }
      let [_0x3adf45, _0x2658e6] = _0x3d5d88.split('+')
      new Maker()
        .Ephoto360(
          'https://en.ephoto360.com/create-banner-youtube-game-apex-legend-online-406.html',
          ['' + _0x3adf45, '' + _0x2658e6]
        )
        .then(async (_0xc1a6bc) => {
          var _0x489076 = { quoted: _0x3a6df9 }
          await _0x4387c2.sendMessage(
            _0x1ecb34,
            {
              image: await getBuffer(_0xc1a6bc.imageUrl),
              caption: config.FOOTER,
            },
            _0x489076
          )
          var _0x4680bf = {
            text: '\u2714',
            key: _0x3a6df9.key,
          }
          var _0x55db63 = { react: _0x4680bf }
          await _0x4387c2.sendMessage(_0x1ecb34, _0x55db63)
        })
    } catch (_0x14ba72) {
      _0x3d544c(errt)
      _0x236add(_0x14ba72)
    }
  }
)
var _0x1f221 = {}
_0x1f221.pattern = 'dlogo6'
_0x1f221.dontAddCommandList = true
_0x1f221.filename = __filename
cmd(
  _0x1f221,
  async (
    _0x3597d0,
    _0x2b1117,
    _0x18ac5c,
    {
      from: _0x25b356,
      l: _0xfe09b1,
      quoted: _0x31271b,
      body: _0x2c061e,
      isCmd: _0x207aa7,
      command: _0x164d57,
      args: _0x46a051,
      q: _0xf82d96,
      isGroup: _0xe2e46a,
      sender: _0x563f84,
      senderNumber: _0x4ad737,
      botNumber2: _0x1ff3ab,
      botNumber: _0x40dd5f,
      pushname: _0x3144b9,
      isMe: _0x514873,
      isOwner: _0x50f293,
      groupMetadata: _0x3acf52,
      groupName: _0x5dec97,
      participants: _0x33d58b,
      groupAdmins: _0x2fd9d9,
      isBotAdmins: _0x189f62,
      isAdmins: _0x2f4a32,
      reply: _0x364195,
    }
  ) => {
    try {
      var _0x426ac3 = {
        text: '\uD83C\uDF86',
        key: _0x2b1117.key,
      }
      var _0x135e72 = { react: _0x426ac3 }
      await _0x3597d0.sendMessage(_0x25b356, _0x135e72)
      let [_0x29953f, _0x388437] = _0xf82d96.split('+')
      new Maker()
        .Ephoto360(_0x388437, ['' + _0x29953f])
        .then(async (_0x59d188) => {
          var _0x583661 = { quoted: _0x2b1117 }
          await _0x3597d0.sendMessage(
            _0x25b356,
            {
              image: await getBuffer(_0x59d188.imageUrl),
              caption: config.FOOTER,
            },
            _0x583661
          )
          var _0x343f76 = {
            text: '\u2714',
            key: _0x2b1117.key,
          }
          var _0x3308d3 = { react: _0x343f76 }
          await _0x3597d0.sendMessage(_0x25b356, _0x3308d3)
        })
    } catch (_0x1e4461) {
      _0x364195(errt)
      _0xfe09b1(_0x1e4461)
    }
  }
)
var _0x5a6099 = {}
_0x5a6099.pattern = 'photooxy1'
_0x5a6099.react = '\uD83D\uDCAB'
_0x5a6099.alias = ['logo3', 'photooxy']
_0x5a6099.desc = desc1
_0x5a6099.category = 'logo'
_0x5a6099.use = '.photooxy1 vihanga yt'
_0x5a6099.filename = __filename
cmd(
  _0x5a6099,
  async (
    _0x242e80,
    _0xe673ad,
    _0x42dcd4,
    {
      from: _0x542e21,
      l: _0xb1ec0b,
      prefix: _0x15a4b5,
      quoted: _0x1538e9,
      body: _0xde4b3c,
      isCmd: _0x16ee33,
      command: _0x2c7c79,
      args: _0x7589b0,
      q: _0x503818,
      isGroup: _0x3cb8da,
      sender: _0x15edea,
      senderNumber: _0x384102,
      botNumber2: _0x602c67,
      botNumber: _0x500d75,
      pushname: _0x924cb,
      isMe: _0x5a4b57,
      isOwner: _0x38ca95,
      groupMetadata: _0xa5448a,
      groupName: _0x31d1ae,
      participants: _0x1cf253,
      groupAdmins: _0x41f855,
      isBotAdmins: _0x545a71,
      isAdmins: _0x305daf,
      reply: _0x4227ae,
    }
  ) => {
    try {
      if (!_0x503818) {
        return await _0x4227ae(imgmsg)
      }
      const _0x38149d = await photooxy.get_urls_list()
      let _0x43cd2e = _0x38149d
      var _0x347eb8 = { text: N_FOUND }
      var _0x409e24 = { quoted: _0xe673ad }
      if (_0x43cd2e.length < 1) {
        return await _0x242e80.sendMessage(_0x542e21, _0x347eb8, _0x409e24)
      }
      var _0x3c0995 = []
      for (var _0x3e7f74 = 0; _0x3e7f74 < _0x43cd2e.length; _0x3e7f74++) {
        _0x43cd2e[_0x3e7f74].text === 1 &&
          !_0x43cd2e[_0x3e7f74].images &&
          _0x3c0995.push({
            title: _0x43cd2e[_0x3e7f74].title,
            rowId:
              _0x15a4b5 +
              'dlogo3 ' +
              _0x503818 +
              '+' +
              _0x43cd2e[_0x3e7f74].url,
          })
      }
      var _0x3a5985 = {
        title: 'Result from photooxy. \uD83D\uDCF2',
        rows: _0x3c0995,
      }
      const _0x4b5e05 = [_0x3a5985]
      var _0x495a81 = {
        text:
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *PHOTOOXY LOGO 01*\n\n*\uD83E\uDD39 Entered Name:* ' +
          _0x503818,
        footer: config.FOOTER,
        title: 'Result from photooxy. \uD83D\uDCF2',
        buttonText: 'Select Logo \uD83D\uDCAB',
        sections: _0x4b5e05,
      }
      const _0x5148fb = _0x495a81
      await _0x242e80.listMessage(_0x542e21, _0x5148fb, _0xe673ad)
    } catch (_0x4d17dd) {
      _0x4227ae(errt)
      _0xb1ec0b(_0x4d17dd)
    }
  }
)
var _0x3fa7a4 = {}
_0x3fa7a4.pattern = 'photooxy2'
_0x3fa7a4.react = '\uD83C\uDFA1'
_0x3fa7a4.alias = ['logo4']
_0x3fa7a4.desc = desc3
_0x3fa7a4.category = 'logo'
_0x3fa7a4.use = '.photooxy2 vihanga+ashinshana'
_0x3fa7a4.filename = __filename
cmd(
  _0x3fa7a4,
  async (
    _0x1ce0fa,
    _0x2b361f,
    _0x1b768e,
    {
      from: _0x5c03e2,
      l: _0x30b28a,
      prefix: _0x3dfad2,
      quoted: _0x4dca07,
      body: _0x122a2c,
      isCmd: _0x45c859,
      command: _0x125458,
      args: _0x27163b,
      q: _0x412b65,
      isGroup: _0x226e66,
      sender: _0x597fa9,
      senderNumber: _0x1d169c,
      botNumber2: _0x312cb0,
      botNumber: _0x51fefd,
      pushname: _0x311a94,
      isMe: _0x339bc6,
      isOwner: _0x8032ff,
      groupMetadata: _0x39569d,
      groupName: _0x5314cb,
      participants: _0x2c7990,
      groupAdmins: _0x3e4a87,
      isBotAdmins: _0x1717a6,
      isAdmins: _0x1ed453,
      reply: _0x4c7eaa,
    }
  ) => {
    try {
      if (!_0x412b65.includes('+')) {
        return await _0x4c7eaa(imgmsg7)
      }
      const _0x246b0f = await photooxy.get_urls_list()
      let _0x17d6e1 = _0x246b0f
      var _0x1905b1 = { text: N_FOUND }
      var _0x5cdb81 = { quoted: _0x2b361f }
      if (_0x17d6e1.length < 1) {
        return await _0x1ce0fa.sendMessage(_0x5c03e2, _0x1905b1, _0x5cdb81)
      }
      var _0x515ea3 = []
      for (var _0x1f9e4c = 0; _0x1f9e4c < _0x17d6e1.length; _0x1f9e4c++) {
        _0x17d6e1[_0x1f9e4c].text === 2 &&
          !_0x17d6e1[_0x1f9e4c].images &&
          _0x515ea3.push({
            title: _0x17d6e1[_0x1f9e4c].title,
            rowId:
              _0x3dfad2 +
              'dlogo4 ' +
              _0x412b65 +
              '+' +
              _0x17d6e1[_0x1f9e4c].url,
          })
      }
      var _0x2288ef = {
        title: 'Result from photooxy. \uD83D\uDCF2',
        rows: _0x515ea3,
      }
      const _0x48fd1d = [_0x2288ef]
      var _0x572a86 = {
        text:
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *PHOTOOXY LOGO 02*\n\n*\uD83E\uDD39 Entered Name:* ' +
          _0x412b65,
        footer: config.FOOTER,
        title: 'Result from photooxy. \uD83D\uDCF2',
        buttonText: 'Select Logo \uD83C\uDFA1',
        sections: _0x48fd1d,
      }
      const _0xc1a827 = _0x572a86
      await _0x1ce0fa.listMessage(_0x5c03e2, _0xc1a827, _0x2b361f)
    } catch (_0x321586) {
      _0x4c7eaa(errt)
      _0x30b28a(_0x321586)
    }
  }
)
var _0xc68d6e = {}
_0xc68d6e.pattern = 'photooxy3'
_0xc68d6e.react = '\uD83C\uDFA1'
_0xc68d6e.alias = ['logo5']
_0xc68d6e.desc = desc3
_0xc68d6e.category = 'logo'
_0xc68d6e.use = '.photooxy3 <reply image'
_0xc68d6e.filename = __filename
cmd(
  _0xc68d6e,
  async (
    _0x191acd,
    _0x4b85cd,
    _0x47108f,
    {
      from: _0x5ec841,
      l: _0xcca53d,
      prefix: _0x194dde,
      quoted: _0x57be61,
      body: _0x5ba4e4,
      isCmd: _0x62494f,
      command: _0x4eeff2,
      args: _0x1df024,
      q: _0x3d8daf,
      isGroup: _0x420481,
      sender: _0x1ec6b7,
      senderNumber: _0x4989ba,
      botNumber2: _0x5b8a8e,
      botNumber: _0x4cb5ef,
      pushname: _0x335f09,
      isMe: _0x5cc251,
      isOwner: _0x30e42e,
      groupMetadata: _0xe181ec,
      groupName: _0x5f54b6,
      participants: _0xa3018,
      groupAdmins: _0x43057e,
      isBotAdmins: _0x1dce07,
      isAdmins: _0x445419,
      reply: _0xc47c1,
    }
  ) => {
    try {
      const _0x55cf70 = _0x47108f.quoted
          ? _0x47108f.quoted.type === 'viewOnceMessage'
          : false,
        _0x243263 = _0x47108f.quoted
          ? _0x47108f.quoted.type === 'imageMessage' ||
            (_0x55cf70 ? _0x47108f.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0x47108f.type === 'imageMessage' || _0x243263) {
        var _0x5ca073 = getRandom('')
        let _0x3bd849 = _0x243263
            ? await _0x47108f.quoted.download(_0x5ca073)
            : await _0x47108f.download(_0x5ca073),
          _0x26f05a = await fileType.fromBuffer(_0x3bd849)
        await fs.promises.writeFile('./' + _0x26f05a.ext, _0x3bd849)
        const _0x5aab72 = await photooxy.get_urls_list()
        let _0xc99672 = _0x5aab72
        var _0x3cbfad = { text: N_FOUND }
        var _0x98127d = { quoted: _0x4b85cd }
        if (_0xc99672.length < 1) {
          return await _0x191acd.sendMessage(_0x5ec841, _0x3cbfad, _0x98127d)
        }
        var _0x1eb4ed = []
        for (var _0x5c60f5 = 0; _0x5c60f5 < _0xc99672.length; _0x5c60f5++) {
          _0xc99672[_0x5c60f5].text === 0 &&
            _0xc99672[_0x5c60f5].images.length === 1 &&
            _0x1eb4ed.push({
              title: _0xc99672[_0x5c60f5].title,
              rowId:
                _0x194dde +
                'dlogo5 ' +
                './' +
                _0x26f05a.ext +
                '+' +
                _0xc99672[_0x5c60f5].url,
            })
        }
        var _0x271f3b = {
          title: 'Result from photooxy. \uD83D\uDCF2',
          rows: _0x1eb4ed,
        }
        const _0xd3ff8c = [_0x271f3b]
        var _0x2dd267 = {
          text:
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *PHOTOOXY LOGO 03*\n\n*\uD83E\uDD39 Entered Name:* ' +
            _0x3d8daf,
          footer: config.FOOTER,
          title: 'Result from photooxy. \uD83D\uDCF2',
          buttonText: 'Select Logo \uD83C\uDFA1',
          sections: _0xd3ff8c,
        }
        const _0x143086 = _0x2dd267
        await _0x191acd.listMessage(_0x5ec841, _0x143086, _0x4b85cd)
      } else {
        return await _0xc47c1(imgmsgeew)
      }
    } catch (_0x452cb7) {
      _0xc47c1(errt)
      _0xcca53d(_0x452cb7)
    }
  }
)
var _0xafb2a1 = {}
_0xafb2a1.pattern = 'dlogo3'
_0xafb2a1.dontAddCommandList = true
_0xafb2a1.filename = __filename
cmd(
  _0xafb2a1,
  async (
    _0x1c3b03,
    _0x175a38,
    _0x427b86,
    {
      from: _0x247180,
      l: _0x5efb4e,
      quoted: _0x23cf6f,
      body: _0x40344e,
      isCmd: _0x3be47a,
      command: _0x1018d2,
      args: _0x27d8cb,
      q: _0x9237db,
      isGroup: _0x5aabec,
      sender: _0x5ecd8c,
      senderNumber: _0x4279f8,
      botNumber2: _0x4d9843,
      botNumber: _0x542c07,
      pushname: _0x16cfb0,
      isMe: _0x2adb2c,
      isOwner: _0x589f00,
      groupMetadata: _0x438758,
      groupName: _0x5c7847,
      participants: _0x397bd7,
      groupAdmins: _0x31d944,
      isBotAdmins: _0x1e4f45,
      isAdmins: _0x505a92,
      reply: _0x578e1e,
    }
  ) => {
    try {
      var _0x1f4ae4 = {
        text: '\uD83C\uDF86',
        key: _0x175a38.key,
      }
      var _0x34beda = { react: _0x1f4ae4 }
      await _0x1c3b03.sendMessage(_0x247180, _0x34beda)
      let [_0x395761, _0x3268ec] = _0x9237db.split('+')
      var _0x5dd99a = {
        url: _0x3268ec,
        text: ['' + _0x395761],
      }
      var _0x32cda8 = await photooxy.create(_0x5dd99a),
        _0x3b82a9 = await photooxy.image_to_buffer(_0x32cda8.url),
        _0x33f4cb = {
          image: _0x3b82a9,
          caption: config.FOOTER,
        }
      var _0x46da0e = { quoted: _0x175a38 }
      await _0x1c3b03.sendMessage(_0x247180, _0x33f4cb, _0x46da0e)
      var _0x735480 = {
        text: '\u2714',
        key: _0x175a38.key,
      }
      var _0x387051 = { react: _0x735480 }
      await _0x1c3b03.sendMessage(_0x247180, _0x387051)
    } catch (_0x3d7ce9) {
      _0x578e1e(errt)
      _0x5efb4e(_0x3d7ce9)
    }
  }
)
var _0x54f598 = {}
_0x54f598.pattern = 'dlogo4'
_0x54f598.dontAddCommandList = true
_0x54f598.filename = __filename
cmd(
  _0x54f598,
  async (
    _0x54946c,
    _0x4a81d9,
    _0x448953,
    {
      from: _0x1cc1e9,
      l: _0x346785,
      quoted: _0x449734,
      body: _0x15c3ed,
      isCmd: _0x1d2de5,
      command: _0x454d4f,
      args: _0x1d38ed,
      q: _0xb8161e,
      isGroup: _0x345263,
      sender: _0xc99442,
      senderNumber: _0x120d01,
      botNumber2: _0x535f27,
      botNumber: _0x39ca0a,
      pushname: _0xecc99f,
      isMe: _0x4cfff6,
      isOwner: _0x1308a3,
      groupMetadata: _0x167467,
      groupName: _0x148a35,
      participants: _0x545d4b,
      groupAdmins: _0x1edcb0,
      isBotAdmins: _0x1c7bf8,
      isAdmins: _0x4dfb47,
      reply: _0xa546a7,
    }
  ) => {
    try {
      var _0x486e8d = {
        text: '\uD83C\uDF86',
        key: _0x4a81d9.key,
      }
      var _0x3d074d = { react: _0x486e8d }
      await _0x54946c.sendMessage(_0x1cc1e9, _0x3d074d)
      let [_0x343c51, _0xa3896, _0x299d66] = _0xb8161e.split('+')
      var _0x5a24ce = {
        url: _0x299d66,
        text: ['' + _0x343c51, '' + _0xa3896],
      }
      var _0x417dfd = await photooxy.create(_0x5a24ce),
        _0x1fdf5c = await photooxy.image_to_buffer(_0x417dfd.url),
        _0x393ed9 = {
          image: _0x1fdf5c,
          caption: config.FOOTER,
        }
      var _0x2f6166 = { quoted: _0x4a81d9 }
      await _0x54946c.sendMessage(_0x1cc1e9, _0x393ed9, _0x2f6166)
      var _0x271ce4 = {
        text: '\u2714',
        key: _0x4a81d9.key,
      }
      var _0x439770 = { react: _0x271ce4 }
      await _0x54946c.sendMessage(_0x1cc1e9, _0x439770)
    } catch (_0x9004e9) {
      _0xa546a7(errt)
      _0x346785(_0x9004e9)
    }
  }
)
var _0x513ed5 = {}
_0x513ed5.pattern = 'dlogo5'
_0x513ed5.dontAddCommandList = true
_0x513ed5.filename = __filename
cmd(
  _0x513ed5,
  async (
    _0xceff31,
    _0xa52e56,
    _0x432eff,
    {
      from: _0x509db8,
      l: _0x149787,
      quoted: _0x14076e,
      body: _0x38d18f,
      isCmd: _0x52b9cd,
      command: _0xf70432,
      args: _0x2b99b5,
      q: _0x45930d,
      isGroup: _0x169ae7,
      sender: _0x258d05,
      senderNumber: _0x5e76d0,
      botNumber2: _0x23650f,
      botNumber: _0xa8d755,
      pushname: _0x156397,
      isMe: _0x2c2716,
      isOwner: _0x47ec9c,
      groupMetadata: _0x31b658,
      groupName: _0x5001ca,
      participants: _0x18b54b,
      groupAdmins: _0x25d963,
      isBotAdmins: _0x291d31,
      isAdmins: _0x5a101e,
      reply: _0x4800ba,
    }
  ) => {
    try {
      var _0x3dc289 = {
        text: '\uD83C\uDF86',
        key: _0xa52e56.key,
      }
      var _0x4e3e00 = { react: _0x3dc289 }
      await _0xceff31.sendMessage(_0x509db8, _0x4e3e00)
      let [_0x4d5e48, _0xfbc8df] = _0x45930d.split('+')
      var _0x422f9b = {
        url: _0xfbc8df,
        images: ['' + _0x4d5e48],
      }
      var _0x4a7042 = await photooxy.create(_0x422f9b),
        _0x18d861 = await photooxy.image_to_buffer(_0x4a7042.url),
        _0x47a8be = {
          image: _0x18d861,
          caption: config.FOOTER,
        }
      var _0x9bf172 = { quoted: _0xa52e56 }
      await _0xceff31.sendMessage(_0x509db8, _0x47a8be, _0x9bf172)
      var _0x554f74 = {
        text: '\u2714',
        key: _0xa52e56.key,
      }
      var _0x507f23 = { react: _0x554f74 }
      await _0xceff31.sendMessage(_0x509db8, _0x507f23)
    } catch (_0x553834) {
      _0x4800ba(errt)
      _0x149787(_0x553834)
    }
  }
)
