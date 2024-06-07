const config = require('../settings'),
  { cmd, commands } = require('../lib/command'),
  fonts = require('../lib/font.js'),
  availableStyles = Object.keys(fonts)
var os = require('os')
const fs = require('fs'),
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
  fg = require('api-dylux'),
  cheerio = require('cheerio'),
  axios = require('axios'),
  vm = require('vm'),
  jsobfus = require('javascript-obfuscator'),
  _buruan = JSON.parse(fs.readFileSync('./lib/bugs/vajira_rathnayaka.json'))
function formatDate(_0x2c49b7) {}
async function obfus(_0x1c8967) {
  return new Promise((_0x36fdf8, _0x39bcc0) => {
    try {
      const _0x523843 = {
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1,
      }
      const _0xe1ac36 = jsobfus.obfuscate(_0x1c8967, _0x523843),
        _0x2c1b33 = {
          status: 200,
          author: 'VAJIRA',
          result: _0xe1ac36.getObfuscatedCode(),
        }
      _0x36fdf8(_0x2c1b33)
    } catch (_0x3183c3) {
      _0x39bcc0(_0x3183c3)
    }
  })
}
function convertToFontStyle(_0x320dd2, _0x1ee4bf) {
  let _0x5d7626 = ''
  if (fonts[_0x1ee4bf]) {
    for (const _0x1fc294 of _0x320dd2) {
      _0x5d7626 += fonts[_0x1ee4bf][_0x1fc294] || _0x1fc294
    }
  } else {
    _0x5d7626 = _0x320dd2
  }
  return _0x5d7626
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
const _0x415954 = {}
_0x415954.pattern = 'hack'
_0x415954.react = '\u2620️'
_0x415954.desc = 'To hack'
_0x415954.category = 'other'
_0x415954.use = '.hack'
_0x415954.filename = __filename
cmd(
  _0x415954,
  async (
    _0x47534b,
    _0xf57f0,
    _0x34014b,
    {
      from: _0x314f41,
      l: _0x4d6cd3,
      prefix: _0x317dc5,
      quoted: _0x108a14,
      body: _0x5783d2,
      isCmd: _0x1c9df2,
      command: _0x1b03e0,
      args: _0x2c8651,
      q: _0x27b3b8,
      isGroup: _0x584ce2,
      sender: _0x1185a9,
      senderNumber: _0xa24d8a,
      botNumber2: _0x264702,
      botNumber: _0x259804,
      pushname: _0x122f68,
      isMe: _0x77f2fa,
      isOwner: _0xc9f647,
      groupMetadata: _0x3e9174,
      groupName: _0x19c987,
      participants: _0x83b9d4,
      groupAdmins: _0x55f628,
      isBotAdmins: _0xa1c22,
      isAdmins: _0x162331,
      reply: _0x2027a8,
    }
  ) => {
    try {
      _0xf57f0.reply('```Injecting malware```')
      await sleep(1000)
      _0xf57f0.reply('```transfer into device \n 0%```')
      await sleep(1000)
      _0xf57f0.reply('```transfer photos \n \u2588 10%```')
      await sleep(1000)
      _0xf57f0.reply('```transfer successful \n \u2588 \u2588 20%```')
      await sleep(1000)
      _0xf57f0.reply('```transfer videos \n \u2588 \u2588 \u2588 30%```')
      await sleep(1000)
      _0xf57f0.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 40%```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```transfering audio \n \u2588 \u2588 \u2588 \u2588 \u2588 50%```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 60%```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```transfering hidden files \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 70%```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 80%```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```transfering whatsapp chat \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 90%```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```transfer successful \n \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 \u2588 100%```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```System hyjacking on process.. \n Conecting to Server ```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```Divice successfully connected... \n Riciving data...```'
      )
      await sleep(1000)
      _0xf57f0.reply(
        '```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```'
      )
      await sleep(1000)
      _0xf57f0.reply('``` HACKING COMPLETED BY VAJIRA ```')
      await sleep(1000)
      _0xf57f0.reply('``` SENDING PHONE DOCUMENTS FOR VAJIRA...```')
      await sleep(1000)
      _0xf57f0.reply(
        '``` SUCCESSFULLY SENT DATA AND Connection disconnected by vajira```'
      )
      await sleep(1000)
      return _0x2027a8('*ALL FILES TRANSFERRED TO VAJIRA*')
      const _0x42e54d = {}
      _0x42e54d.text = '\u2705'
      _0x42e54d.key = _0xf57f0.key
      const _0x5a30a6 = {}
      _0x5a30a6.react = _0x42e54d
      await _0x47534b.sendMessage(_0x314f41, _0x5a30a6)
    } catch (_0x53d16c) {
      _0x4d6cd3(_0x53d16c)
    }
  }
)
const _0x30956c = {}
_0x30956c.pattern = 'fontchange'
_0x30956c.react = '\uD83D\uDC7E'
_0x30956c.desc = 'To change font of text'
_0x30956c.category = 'other'
_0x30956c.use = '.fontchange'
_0x30956c.filename = __filename
cmd(
  _0x30956c,
  async (
    _0x2d2236,
    _0x2c6a50,
    _0x24a950,
    {
      from: _0x42d117,
      l: _0x16ab36,
      prefix: _0x564731,
      quoted: _0x4033d5,
      body: _0x5bd44a,
      isCmd: _0x1fe99d,
      command: _0x4cd10a,
      args: _0x55c5b5,
      q: _0x4c1c88,
      isGroup: _0x15d3df,
      sender: _0x50e331,
      senderNumber: _0xdbed7c,
      botNumber2: _0x2fb7d4,
      botNumber: _0x1a263a,
      pushname: _0x3ea5a4,
      isMe: _0x3569e0,
      isOwner: _0x3c3dbf,
      groupMetadata: _0x5496a3,
      groupName: _0x11bac0,
      participants: _0x52bc83,
      groupAdmins: _0x4bcb21,
      isBotAdmins: _0x1ea272,
      isAdmins: _0x1e2e4f,
      reply: _0x3e8d23,
    }
  ) => {
    try {
      if (_0x55c5b5.length === 0) {
        const _0x1fce61 = availableStyles
          .map((_0x3950f0) => {
            const _0x26bc30 = convertToFontStyle('vajira md', _0x3950f0)
            return _0x3950f0 + ': ' + _0x26bc30
          })
          .join('\n')
        _0x3e8d23(
          'Usage:\n' +
            _0x564731 +
            'fontchange <style> <text>\nAvailable font styles with previews:\n' +
            _0x1fce61
        )
      } else {
        const _0x4c1386 = parseInt(_0x55c5b5[0])
        if (isNaN(_0x4c1386) || _0x4c1386 < 0 || _0x4c1386 > 34) {
          _0x3e8d23(
            'Style number should be between 0 and 34. Please choose a valid style.'
          )
        } else {
          const _0x10acb8 = _0x55c5b5.slice(1).join(' '),
            _0x524b5f = convertToFontStyle(_0x10acb8, _0x4c1386)
          _0x3e8d23('' + _0x524b5f)
        }
      }
      const _0x121854 = {
        text: '\u2705',
        key: _0x2c6a50.key,
      }
      const _0x5d1965 = { react: _0x121854 }
      await _0x2d2236.sendMessage(_0x42d117, _0x5d1965)
    } catch (_0x8afb4a) {
      _0x16ab36(_0x8afb4a)
    }
  }
)
const _0x26801e = {}
_0x26801e.pattern = 'nowa'
_0x26801e.react = '\uD83D\uDC7E'
_0x26801e.desc = 'To see same type whatsapp numbers'
_0x26801e.category = 'other'
_0x26801e.use = '.nowa'
_0x26801e.filename = __filename
cmd(
  _0x26801e,
  async (
    _0x2a5e45,
    _0x446498,
    _0x1260c6,
    {
      from: _0xf1a540,
      l: _0x5c6003,
      prefix: _0x37f626,
      quoted: _0x305ea1,
      body: _0x27e1aa,
      isCmd: _0x1a8f77,
      command: _0x2a7e9e,
      args: _0x4c63c7,
      q: _0x551e46,
      isGroup: _0x5abc2f,
      sender: _0x4000db,
      senderNumber: _0x2ff26a,
      botNumber2: _0x15e80a,
      botNumber: _0xf8cff0,
      pushname: _0x1959cd,
      isMe: _0x5b0e5a,
      isOwner: _0x582295,
      groupMetadata: _0x40030a,
      groupName: _0x31fc73,
      participants: _0x272ec3,
      groupAdmins: _0x972277,
      isBotAdmins: _0x19d527,
      isAdmins: _0x33dcdb,
      reply: _0x41e125,
    }
  ) => {
    try {
      if (!_0x551e46) {
        throw 'Give a number to search'
      }
      if (!_0x551e46.match(/x/g)) {
        throw '*Example: ' + (_0x37f626 + _0x2a7e9e) + ' 919142294xxx'
      }
      let _0x218cf4 = _0x551e46.match(/x/g).length,
        _0x50266e = Math.pow(10, _0x218cf4),
        _0x39a2ac = []
      for (let _0x56e165 = 0; _0x56e165 < _0x50266e; _0x56e165++) {
        let _0x19296b = [..._0x56e165.toString().padStart(_0x218cf4, '0')],
          _0xde62c0 =
            _0x551e46.replace(/x/g, () => _0x19296b.shift()) + '@s.whatsapp.net'
        if (
          await _0x2a5e45
            .onWhatsApp(_0xde62c0)
            .then((_0x341c46) => (_0x341c46[0] || {}).exists)
        ) {
          let _0x1436c7 = await _0x2a5e45
            .fetchStatus(_0xde62c0)
            .catch((_0x5468a3) => {})
          const _0x48240a = {
            exists: true,
            jid: _0xde62c0,
            ..._0x1436c7,
          }
          _0x39a2ac.push(_0x48240a)
        } else {
          const _0x2449ef = {
            exists: false,
            jid: _0xde62c0,
          }
          _0x39a2ac.push(_0x2449ef)
        }
      }
      let _0x3a19ff =
        'Registered\n\n' +
        _0x39a2ac
          .filter((_0x419b38) => _0x419b38.exists)
          .map(
            (_0x3e3c7d) =>
              '\u2022 Link: wa.me/' +
              _0x3e3c7d.jid.split('@')[0] +
              '\n*\u2022 Bio:* ' +
              (_0x3e3c7d.status || 'description') +
              '\n*\u2022 set on:* ' +
              formatDate(_0x3e3c7d.setAt)
          )
          .join('\n\n') +
        '\n\n*Not registered*\n\n' +
        _0x39a2ac
          .filter((_0x10181f) => !_0x10181f.exists)
          .map((_0x26bbae) => _0x26bbae.jid.split('@')[0])
          .join('\n')
      _0x41e125(_0x3a19ff)
      const _0x497e6a = {
        text: '\u2705',
        key: _0x446498.key,
      }
      const _0x4a394e = { react: _0x497e6a }
      await _0x2a5e45.sendMessage(_0xf1a540, _0x4a394e)
    } catch (_0x57132b) {
      _0x5c6003(_0x57132b)
    }
  }
)
const _0x217e9f = {}
_0x217e9f.pattern = 'obfus'
_0x217e9f.react = '\uD83D\uDC7E'
_0x217e9f.desc = 'To encrypt js code'
_0x217e9f.category = 'other'
_0x217e9f.use = '.obfus'
_0x217e9f.filename = __filename
cmd(
  _0x217e9f,
  async (
    _0x138339,
    _0x329e3b,
    _0x1e481,
    {
      from: _0x980cb3,
      l: _0x529d7b,
      prefix: _0x3c1755,
      quoted: _0x4112f7,
      body: _0x4034e7,
      isCmd: _0x45d318,
      command: _0x508006,
      args: _0x5c44cf,
      q: _0x4454af,
      isGroup: _0x3cc944,
      sender: _0x3ebde4,
      senderNumber: _0x2a656f,
      botNumber2: _0x494fdd,
      botNumber: _0x36ef44,
      pushname: _0x400957,
      isMe: _0x553f69,
      isOwner: _0x1863f7,
      groupMetadata: _0xdb2e74,
      groupName: _0x2cebd0,
      participants: _0x2390e5,
      groupAdmins: _0x12facd,
      isBotAdmins: _0x178d93,
      isAdmins: _0x4dc8b1,
      reply: _0x593093,
    }
  ) => {
    try {
      if (!_0x4454af) {
        return _0x593093(
          'Example ' +
            (_0x3c1755 + _0x508006) +
            " const vajiramd = require('baileys')"
        )
      }
      let _0x510575 = await obfus(_0x4454af)
      _0x593093('Success\n' + _0x510575.result)
      const _0x2f7c22 = {
        text: '\u2705',
        key: _0x329e3b.key,
      }
      const _0x5ade70 = { react: _0x2f7c22 }
      await _0x138339.sendMessage(_0x980cb3, _0x5ade70)
    } catch (_0x5b812d) {
      _0x529d7b(_0x5b812d)
    }
  }
)
const _0x23b908 = {}
_0x23b908.pattern = 'leaderboard'
_0x23b908.react = '\uD83D\uDC7E'
_0x23b908.desc = 'To see info of leaderboard'
_0x23b908.category = 'other'
_0x23b908.use = '.leaderboard'
_0x23b908.filename = __filename
cmd(
  _0x23b908,
  async (
    _0x568e3f,
    _0x365f71,
    _0x497bb1,
    {
      from: _0x2f68da,
      l: _0x5d4f6a,
      prefix: _0x3cf5e2,
      quoted: _0x247755,
      body: _0x13f00a,
      isCmd: _0x5aff29,
      command: _0x2e276e,
      args: _0x3e5da9,
      q: _0x265b36,
      isGroup: _0x157993,
      sender: _0x4060ac,
      senderNumber: _0x41f7af,
      botNumber2: _0x3e2362,
      botNumber: _0x1dd86b,
      pushname: _0xb17a39,
      isMe: _0xe9a217,
      isOwner: _0x165c9f,
      groupMetadata: _0xc44c0c,
      groupName: _0x531b51,
      participants: _0x1c4524,
      groupAdmins: _0x198e9e,
      isBotAdmins: _0x3f14b7,
      isAdmins: _0x3447ca,
      reply: _0x7d4b05,
    }
  ) => {
    try {
      let _0x246483 = '\u300C *LEADERBOARD* \u300D\n\n'
      for (let _0xc46e09 of _buruan) {
        _0x246483 += '\u27B8 *ID :* ' + _0xc46e09.id + '\n'
        _0x246483 += '*\uD83D\uDC1FFish* : ' + _0xc46e09.ikan + '\n'
        _0x246483 += '*\uD83D\uDC14Chicken* : ' + _0xc46e09.ayam + '\n'
        _0x246483 += '*\uD83D\uDC07Rabbit* : ' + _0xc46e09.kelinci + '\n'
        _0x246483 += '*\uD83D\uDC11Sheep* : ' + _0xc46e09.domba + '\n'
        _0x246483 += '*\uD83D\uDC04Cow* : ' + _0xc46e09.sapi + '\n'
        _0x246483 += '*\uD83D\uDC18Elephant* : ' + _0xc46e09.gajah + '\n\n'
      }
      const _0x1575d8 = {
        text: '\u2705',
        key: _0x365f71.key,
      }
      const _0x2e518a = { react: _0x1575d8 }
      await _0x568e3f.sendMessage(_0x2f68da, _0x2e518a)
    } catch (_0x38cc1b) {
      p, _0x7d4b05(cantf), _0x5d4f6a(_0x38cc1b)
    }
  }
)
const _0x13722b = {}
_0x13722b.pattern = 'chatgpt'
_0x13722b.alias = ['ai', 'gpt', 'openai', 'zerotwo', 'chat']
_0x13722b.react = '\uD83D\uDC7E'
_0x13722b.desc = desct
_0x13722b.category = 'other'
_0x13722b.use = '.chatgpt ha'
_0x13722b.filename = __filename
cmd(
  _0x13722b,
  async (
    _0x5ec049,
    _0xae4ddf,
    _0x249a50,
    {
      from: _0x49e9fa,
      l: _0x55e8b8,
      prefix: _0x310c82,
      quoted: _0x593e9d,
      body: _0x1826f3,
      isCmd: _0x4e3321,
      command: _0x53390e,
      args: _0x4b9855,
      q: _0x1b256a,
      isGroup: _0x14618c,
      sender: _0x403651,
      senderNumber: _0x417576,
      botNumber2: _0x52a57e,
      botNumber: _0x39a7ec,
      pushname: _0x25f991,
      isMe: _0x3691df,
      isOwner: _0x26ff2a,
      groupMetadata: _0x404258,
      groupName: _0x631333,
      participants: _0x163b62,
      groupAdmins: _0x353765,
      isBotAdmins: _0x2014e7,
      isAdmins: _0x5818be,
      reply: _0x460370,
    }
  ) => {
    try {
      if (!_0x1b256a) {
        return _0x460370(needus)
      }
      var _0x21780f = ''
      try {
        _0x21780f = (
          await fetchJson(
            'https://api.maher-zubair.tech/ai/chatgpt?q=' + _0x1b256a
          )
        ).data
      } catch (_0xea204) {
        try {
          _0x21780f = (
            await fetchJson(
              'https://api.maher-zubair.tech/ai/chatgpt2?q=' + _0x1b256a
            )
          ).data
        } catch (_0x43931f) {
          _0x21780f = (
            await fetchJson(
              'https://api.maher-zubair.tech/ai/chatgpt3?q=' + _0x1b256a
            )
          ).data
        }
      }
      return await _0x460370(_0x21780f)
    } catch (_0x408170) {
      _0x460370(cantf), _0x55e8b8(_0x408170)
    }
  }
)
const _0x35d9b4 = {}
_0x35d9b4.pattern = 'chatgpt4'
_0x35d9b4.alias = ['ai2', 'gpt4', 'openai4', 'zerotwo2', 'chat2']
_0x35d9b4.react = '\uD83D\uDC7E'
_0x35d9b4.desc = desct
_0x35d9b4.category = 'other'
_0x35d9b4.use = '.chatgpt4 ha'
_0x35d9b4.filename = __filename
cmd(
  _0x35d9b4,
  async (
    _0x325542,
    _0x55cb8e,
    _0x1a561a,
    {
      from: _0x339f44,
      l: _0x4cb07e,
      prefix: _0x92c2dc,
      quoted: _0x1d3eed,
      body: _0x580112,
      isCmd: _0x4f73cb,
      command: _0x269228,
      args: _0x4692b9,
      q: _0x43162d,
      isGroup: _0x502977,
      sender: _0x19b3e0,
      senderNumber: _0x204356,
      botNumber2: _0x12e4bd,
      botNumber: _0x5f13bb,
      pushname: _0x219c04,
      isMe: _0x3c1d9c,
      isOwner: _0x3ff9e5,
      groupMetadata: _0x194cb1,
      groupName: _0x151263,
      participants: _0x2af101,
      groupAdmins: _0x4b6b54,
      isBotAdmins: _0x28bec9,
      isAdmins: _0xfeebdd,
      reply: _0x3187ad,
    }
  ) => {
    try {
      if (!_0x43162d) {
        return _0x3187ad(needus)
      }
      var _0x1ea51d = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/chatgpt4?q=' + _0x43162d
        )
      ).response
      return await _0x3187ad(_0x1ea51d)
    } catch (_0x237bcf) {
      _0x3187ad(cantf)
      _0x4cb07e(_0x237bcf)
    }
  }
)
const _0x743060 = {}
_0x743060.pattern = 'geminitgpt'
_0x743060.react = '\uD83D\uDC7E'
_0x743060.desc = desct
_0x743060.category = 'other'
_0x743060.use = '.chatgpt2 ha'
_0x743060.filename = __filename
cmd(
  _0x743060,
  async (
    _0x3ffe84,
    _0x335cfe,
    _0xad0bbc,
    {
      from: _0x5b5efe,
      l: _0x33d73e,
      prefix: _0x301df1,
      quoted: _0x480952,
      body: _0xe0941a,
      isCmd: _0x58777d,
      command: _0x268400,
      args: _0x28412f,
      q: _0x41c70a,
      isGroup: _0x5f52f2,
      sender: _0x5567e5,
      senderNumber: _0x559ada,
      botNumber2: _0x470ac9,
      botNumber: _0x5e80a6,
      pushname: _0x20f2a9,
      isMe: _0x37b3b9,
      isOwner: _0x4f9223,
      groupMetadata: _0x195a01,
      groupName: _0x539ed5,
      participants: _0x400cb5,
      groupAdmins: _0xea1041,
      isBotAdmins: _0x5b90c9,
      isAdmins: _0x102dc6,
      reply: _0x317af3,
    }
  ) => {
    try {
      if (!_0x41c70a) {
        return _0x317af3(needus)
      }
      var _0x5998f0 = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/gemini?q=' + _0x41c70a
        )
      ).data
      return await _0x317af3(_0x5998f0)
    } catch (_0x3e14de) {
      _0x317af3(cantf)
      _0x33d73e(_0x3e14de)
    }
  }
)
const _0x519a13 = {}
_0x519a13.pattern = 'mathsgpt'
_0x519a13.react = '\uD83D\uDC7E'
_0x519a13.desc = desct
_0x519a13.category = 'other'
_0x519a13.use = '.gptmaths 2-3'
_0x519a13.filename = __filename
cmd(
  _0x519a13,
  async (
    _0x3941b4,
    _0x311ae0,
    _0x11f0ef,
    {
      from: _0x25d83e,
      l: _0x11220d,
      prefix: _0x1314d4,
      quoted: _0x3d4784,
      body: _0x4befed,
      isCmd: _0x328132,
      command: _0x399a8a,
      args: _0x631070,
      q: _0x10294c,
      isGroup: _0x4eb868,
      sender: _0x22569d,
      senderNumber: _0x4aab98,
      botNumber2: _0x2dff75,
      botNumber: _0x2f3518,
      pushname: _0x177c65,
      isMe: _0x420bd5,
      isOwner: _0x36a4cc,
      groupMetadata: _0x5b4331,
      groupName: _0x40e551,
      participants: _0x348ec5,
      groupAdmins: _0x2bda2d,
      isBotAdmins: _0x18f1d4,
      isAdmins: _0x468155,
      reply: _0x3d1a87,
    }
  ) => {
    try {
      if (!_0x10294c) {
        return _0x3d1a87(needus)
      }
      var _0x460ee6 = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/mathssolve?q=' + _0x10294c
        )
      ).data
      return await _0x3d1a87(_0x460ee6)
    } catch (_0x9dd69f) {
      _0x3d1a87(cantf)
      _0x11220d(_0x9dd69f)
    }
  }
)
const _0x11f0db = {}
_0x11f0db.pattern = 'liyamagpt'
_0x11f0db.react = '\uD83D\uDC7E'
_0x11f0db.desc = desct
_0x11f0db.category = 'other'
_0x11f0db.use = '.liyamagpt hello'
_0x11f0db.filename = __filename
cmd(
  _0x11f0db,
  async (
    _0x58fd04,
    _0xb4b8f8,
    _0x28913d,
    {
      from: _0x483505,
      l: _0x5c7c02,
      prefix: _0xb2d17f,
      quoted: _0x19024a,
      body: _0x5a2e4b,
      isCmd: _0x195cf2,
      command: _0x4371c9,
      args: _0x2a2958,
      q: _0x30fafe,
      isGroup: _0xfeccbd,
      sender: _0x498d64,
      senderNumber: _0xe4b05e,
      botNumber2: _0x42bc3e,
      botNumber: _0x337bb9,
      pushname: _0x4597ff,
      isMe: _0x40b74e,
      isOwner: _0x48521f,
      groupMetadata: _0x488885,
      groupName: _0x4949d3,
      participants: _0x24dd57,
      groupAdmins: _0x34b3f0,
      isBotAdmins: _0x24d416,
      isAdmins: _0x81c9f,
      reply: _0x4b8af6,
    }
  ) => {
    try {
      if (!_0x30fafe) {
        return _0x4b8af6(needus)
      }
      var _0x24dd2e = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/llama-2?q=' + _0x30fafe
        )
      ).data
      return await _0x4b8af6(_0x24dd2e)
    } catch (_0x58ddcc) {
      _0x4b8af6(cantf)
      _0x5c7c02(_0x58ddcc)
    }
  }
)
const _0x3bf619 = {}
_0x3bf619.pattern = 'voicegpt'
_0x3bf619.react = '\uD83D\uDC7E'
_0x3bf619.desc = desct
_0x3bf619.category = 'other'
_0x3bf619.use = '.voicegpt hello'
_0x3bf619.filename = __filename
cmd(
  _0x3bf619,
  async (
    _0x49bfbb,
    _0x3ce0a3,
    _0x14403f,
    {
      from: _0x276201,
      l: _0x3486c6,
      prefix: _0x2a958d,
      quoted: _0x29cd51,
      body: _0xa94fd2,
      isCmd: _0x311900,
      command: _0x35944a,
      args: _0x32c33f,
      q: _0x998b00,
      isGroup: _0x46ba2b,
      sender: _0x3601f8,
      senderNumber: _0x18269b,
      botNumber2: _0x3c4193,
      botNumber: _0x2204b0,
      pushname: _0x176f68,
      isMe: _0x2e47b7,
      isOwner: _0x3efdc4,
      groupMetadata: _0x46a181,
      groupName: _0x32a85e,
      participants: _0x545b78,
      groupAdmins: _0x48b5b6,
      isBotAdmins: _0x20c13a,
      isAdmins: _0x543434,
      reply: _0x48e624,
    }
  ) => {
    try {
      if (!_0x998b00) {
        return _0x48e624(needus)
      }
      var _0x22e0a3 = (
        await fetchJson(
          'https://api.vihangayt.me/tools/gptvoice?q=' + _0x998b00
        )
      ).data
      return await _0x48e624(_0x22e0a3)
    } catch (_0x2f7ba1) {
      _0x48e624(cantf)
      _0x3486c6(_0x2f7ba1)
    }
  }
)
const _0x390222 = {}
_0x390222.pattern = 'photoleapgpt'
_0x390222.react = '\uD83D\uDC7E'
_0x390222.desc = desct
_0x390222.category = 'other'
_0x390222.use = '.photoleapgpt hello'
_0x390222.filename = __filename
cmd(
  _0x390222,
  async (
    _0x43c566,
    _0x440f0b,
    _0x153bcf,
    {
      from: _0x131eea,
      l: _0x295b50,
      prefix: _0x1ea87f,
      quoted: _0x1dc66b,
      body: _0x3aa60e,
      isCmd: _0x4c2e48,
      command: _0x355e14,
      args: _0x42f304,
      q: _0x5ba1a6,
      isGroup: _0x5e2777,
      sender: _0x1b96ba,
      senderNumber: _0x126dbd,
      botNumber2: _0x4af273,
      botNumber: _0x281022,
      pushname: _0x1bbd20,
      isMe: _0x1e9ea9,
      isOwner: _0x53805e,
      groupMetadata: _0x269a9e,
      groupName: _0x3b90ab,
      participants: _0x55afca,
      groupAdmins: _0x1e6ebc,
      isBotAdmins: _0x3ddb09,
      isAdmins: _0x83efe4,
      reply: _0x195505,
    }
  ) => {
    try {
      if (!_0x5ba1a6) {
        return _0x195505(needus)
      }
      var _0x505498 = (
        await fetchJson(
          'https://api.maher-zubair.tech/ai/photoleap?q=' + _0x5ba1a6
        )
      ).data
      return await _0x195505(_0x505498)
    } catch (_0x285d6d) {
      _0x195505(cantf)
      _0x295b50(_0x285d6d)
    }
  }
)
const _0x365681 = {}
_0x365681.pattern = 'timetest'
_0x365681.react = '\uD83D\uDD16'
_0x365681.desc = 'test the time'
_0x365681.category = 'other'
_0x365681.use = '.timetest'
_0x365681.filename = __filename
cmd(
  _0x365681,
  async (
    _0x3ce874,
    _0x4b6a7c,
    _0x4711c4,
    {
      from: _0x38850d,
      l: _0x1fa6e3,
      prefix: _0x57f4ae,
      quoted: _0x2f1ab7,
      body: _0x14b7c0,
      isCmd: _0x2d5604,
      command: _0xb29632,
      args: _0x2b0356,
      q: _0xe477dc,
      isGroup: _0x32d6ae,
      sender: _0x1000d1,
      senderNumber: _0x366e17,
      botNumber2: _0x384e33,
      botNumber: _0x4a90ed,
      pushname: _0x94b8d8,
      isMe: _0x191d50,
      isOwner: _0x3a7bd2,
      groupMetadata: _0x189526,
      groupName: _0x1296cd,
      participants: _0x77fa8c,
      groupAdmins: _0x3e93a8,
      isBotAdmins: _0x9d1d65,
      isAdmins: _0x5affe4,
      reply: _0x33e855,
    }
  ) => {
    try {
      const _0x3eadd6 = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
      const _0x350ca2 = _0x3eadd6
      var _0x2e2fc0 = new Date().toLocaleDateString(_0x350ca2)
      const _0x5b25d3 =
        '\uD83D\uDCC5 ' +
        _0x2e2fc0 +
        '\n\u231A ' +
        time +
        '\n\n' +
        '\uD83D\uDC78\uD83D\uDCAC ɪᴢᴜᴍɪ ɪꜱ ᴏɴʟɪɴᴇ'
      await _0x3ce874.sendText(_0x4b6a7c.chat, _0x5b25d3)
      if (time == '6:08:01') {
        return await _0x3ce874.sendText(_0x4b6a7c.chat, _0x5b25d3)
      }
      if (time == '6:08:11') {
        return await _0x3ce874.sendText(_0x4b6a7c.chat, _0x5b25d3)
      }
      if (time == '6:08:20') {
        return await con.sendText(_0x4b6a7c.chat, _0x5b25d3)
      }
      const _0x328475 = {
        text: '\u2705',
        key: _0x4b6a7c.key,
      }
      const _0x2fc61d = { react: _0x328475 }
      await _0x3ce874.sendMessage(_0x38850d, _0x2fc61d)
    } catch (_0x5f1db1) {
      _0x33e855()
      _0x1fa6e3(_0x5f1db1)
    }
  }
)
const _0x2aaadb = {}
_0x2aaadb.pattern = 'readmore'
_0x2aaadb.react = '\uD83D\uDD16'
_0x2aaadb.desc = 'convert message to a readmore message'
_0x2aaadb.category = 'other'
_0x2aaadb.use = '.readmore'
_0x2aaadb.filename = __filename
cmd(
  _0x2aaadb,
  async (
    _0x56833f,
    _0x527799,
    _0x3f9a4f,
    {
      from: _0x5801e5,
      l: _0x4acf20,
      prefix: _0x40d532,
      quoted: _0x400494,
      body: _0xbde0e5,
      isCmd: _0x510c9a,
      command: _0x2900a7,
      args: _0x43ee11,
      q: _0x3509f1,
      isGroup: _0xa8309,
      sender: _0x3fcd3b,
      senderNumber: _0x65286d,
      botNumber2: _0x23324a,
      botNumber: _0x3fb266,
      pushname: _0x1f8c97,
      isMe: _0x1440c3,
      isOwner: _0x47312e,
      groupMetadata: _0x44454f,
      groupName: _0x5d2d8f,
      participants: _0x400d6d,
      groupAdmins: _0x296ad,
      isBotAdmins: _0xa46b72,
      isAdmins: _0x3261dd,
      reply: _0x1f5515,
    }
  ) => {
    try {
      let _0x131e60 =
        '*\uD83D\uDC78\uD83D\uDCAC Please Give Some Text*\n```Example .readmore VAJIRA```'
      _0x1f5515(
        '\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B' +
          (_0x3509f1 ? _0x3509f1 : 'blank')
      )
      const _0x1fe984 = {
        text: '\u2705',
        key: _0x527799.key,
      }
      const _0x5bb1ff = { react: _0x1fe984 }
      await _0x56833f.sendMessage(_0x5801e5, _0x5bb1ff)
    } catch (_0x472fc9) {
      _0x1f5515('')
      _0x4acf20(_0x472fc9)
    }
  }
)
const _0x4b33a1 = {}
_0x4b33a1.pattern = 'poll'
_0x4b33a1.react = '\uD83D\uDD16'
_0x4b33a1.desc = 'Poll a message'
_0x4b33a1.category = 'other'
_0x4b33a1.use = '.poll'
_0x4b33a1.filename = __filename
cmd(
  _0x4b33a1,
  async (
    _0x26dc5b,
    _0x3ff5f8,
    _0x2e5f0d,
    {
      from: _0x29d72d,
      l: _0x3e29bb,
      prefix: _0x34c8ef,
      quoted: _0x171cd0,
      body: _0x413f9d,
      isCmd: _0x3e863a,
      command: _0x2e93e5,
      args: _0x293831,
      q: _0x478df5,
      isGroup: _0x201558,
      sender: _0x4a2175,
      senderNumber: _0x519967,
      botNumber2: _0x5398e4,
      botNumber: _0x46b846,
      pushname: _0x494033,
      isMe: _0x51031f,
      isOwner: _0xd98c2d,
      groupMetadata: _0x4f2a06,
      groupName: _0x13ceb5,
      participants: _0x18fe4c,
      groupAdmins: _0xef744c,
      isBotAdmins: _0x5b1edf,
      isAdmins: _0x34e2e3,
      reply: _0x26f5b0,
    }
  ) => {
    try {
      let [_0x37036c, _0x49023e] = _0x478df5.split('|')
      if (_0x478df5.split('|') < 2) {
        return await _0x26f5b0(
          'Mention question and atleast 2 options\nExample: ' +
            _0x34c8ef +
            'poll Who is best admin?|Xeon,Cheems,Doge...'
        )
      }
      let _0x576785 = []
      for (let _0x2ad200 of _0x49023e.split(',')) {
        _0x576785.push(_0x2ad200)
      }
      const _0x3c91f2 = {
        name: _0x37036c,
        values: _0x576785,
      }
      const _0x274561 = { poll: _0x3c91f2 }
      await _0x26dc5b.sendMessage(_0x3ff5f8.chat, _0x274561)
      const _0x503345 = {
        text: '\u2705',
        key: _0x3ff5f8.key,
      }
      const _0x4c798c = { react: _0x503345 }
      await _0x26dc5b.sendMessage(_0x29d72d, _0x4c798c)
    } catch (_0x112b15) {
      _0x26f5b0('')
      _0x3e29bb(_0x112b15)
    }
  }
)
