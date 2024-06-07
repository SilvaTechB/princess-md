const config = require('../settings'),
  os = require('os'),
  fs = require('fs'),
  prefix = config.PREFIX,
  simpleGit = require('simple-git'),
  Levels = require('discord-xp'),
  git = simpleGit(),
  Heroku = require('heroku-client'),
  appname = process.env.APP_NAME || '',
  herokuapi = process.env.HEROKU_API,
  pingSt = new Date(),
  { cmd, commands } = require('../lib/command'),
  DB = require('../lib/scraper')
let premium = JSON.parse(fs.readFileSync('./lib/bugs/premium.json'))
const owner = JSON.parse(fs.readFileSync('./lib/bugs/owner.json'))
let banUser = JSON.parse(fs.readFileSync('./lib/bugs/banUser.json'))
const devlopernumber = '94719199757',
  {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
  } = require('../lib/premium'),
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
    clockString,
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
function genMsgId() {
  const _0x2e2bcd = '3EB',
    _0x55caf6 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let _0x1d12a1 = _0x2e2bcd
  for (let _0x3effc5 = _0x2e2bcd.length; _0x3effc5 < 22; _0x3effc5++) {
    const _0x2192cd = Math.floor(Math.random() * _0x55caf6.length)
    _0x1d12a1 += _0x55caf6.charAt(_0x2192cd)
  }
  return _0x1d12a1
}
const reportedMessages = {}
var BOTOW = ''
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
} else {
  BOTOW = "*You are not bot's owner or moderator !*"
}
const _0x5ec9fe = {}
_0x5ec9fe.pattern = 'sv'
_0x5ec9fe.react = '\uD83D\uDD16'
_0x5ec9fe.desc = 'To take owner number'
_0x5ec9fe.category = 'owner'
_0x5ec9fe.use = '.sv'
_0x5ec9fe.filename = __filename
cmd(
  _0x5ec9fe,
  async (
    _0x5bf8d4,
    _0x1ef236,
    _0x10cfe2,
    {
      from: _0x35a63e,
      prefix: _0x1396e5,
      l: _0x593cc0,
      quoted: _0x8ddf51,
      body: _0x47fc50,
      isCmd: _0x5e0602,
      command: _0x38d944,
      args: _0x48139a,
      q: _0x2c0cdb,
      isGroup: _0x52bc5e,
      sender: _0x49fc83,
      senderNumber: _0x1564d8,
      botNumber2: _0x3dc3b8,
      botNumber: _0x10b5e2,
      pushname: _0x5a7951,
      isMe: _0x245e40,
      isOwner: _0x44ba86,
      groupMetadata: _0x5bc2bf,
      groupName: _0xde8d59,
      participants: _0x17697e,
      groupAdmins: _0x4a2eec,
      isBotAdmins: _0x52ee1d,
      isAdmins: _0x38c56d,
      reply: _0x43d8de,
    }
  ) => {
    try {
      _0x1ef236.reply_message && _0x1ef236.reply_message.status
        ? _0x1ef236.reply_message
        : false
      _0x1ef236.bot.forwardOrBroadCast(_0x35a63e, {
        quoted: { key: _0x1ef236.key },
      })
      _0x43d8de('*reply to whatsapp status*')
      const _0x3d8ea7 = {
        text: '\u2705',
        key: _0x1ef236.key,
      }
      const _0x1f49cf = { react: _0x3d8ea7 }
      await _0x5bf8d4.sendMessage(_0x35a63e, _0x1f49cf)
    } catch (_0x4dc53d) {
      _0x43d8de('*Error !!*'), _0x593cc0(_0x4dc53d)
    }
  }
)
const _0x3c222a = {}
_0x3c222a.on = 'body'
cmd(
  _0x3c222a,
  async (
    _0x6e5c6f,
    _0x5a4b77,
    _0x49634f,
    {
      from: _0x210477,
      prefix: _0x132205,
      l: _0x2e6f55,
      quoted: _0x363998,
      body: _0x5652be,
      isCmd: _0x42316d,
      command: _0x2ea14d,
      args: _0x3c9d7d,
      q: _0xb57e34,
      isGroup: _0x5d7b3d,
      sender: _0x5ea44a,
      senderNumber: _0x1778c3,
      botNumber2: _0x2856f5,
      botNumber: _0x35682a,
      pushname: _0x3e0e91,
      isMe: _0x292124,
      isOwner: _0x750860,
      groupMetadata: _0x111f2a,
      groupName: _0x3e9e30,
      participants: _0xac88db,
      groupAdmins: _0x4c6769,
      isBotAdmins: _0x3459d9,
      isAdmins: _0x329061,
      reply: _0x598da2,
    }
  ) => {
    if (config.AUTO_REACT === 'true') {
      const _0x45696c = [
          '\u2764',
          '\uD83D\uDC95',
          '\uD83D\uDE3B',
          '\uD83E\uDDE1',
          '\uD83D\uDC9B',
          '\uD83D\uDC9A',
          '\uD83D\uDC99',
          '\uD83D\uDC9C',
          '\uD83D\uDDA4',
          '\u2763',
          '\uD83D\uDC9E',
          '\uD83D\uDC93',
          '\uD83D\uDC97',
          '\uD83D\uDC96',
          '\uD83D\uDC98',
          '\uD83D\uDC9D',
          '\uD83D\uDC9F',
          '\u2665',
          '\uD83D\uDC8C',
          '\uD83D\uDE42',
          '\uD83E\uDD17',
          '\uD83D\uDE0C',
          '\uD83D\uDE09',
          '\uD83E\uDD17',
          '\uD83D\uDE0A',
          '\uD83C\uDF8A',
          '\uD83C\uDF89',
          '\uD83C\uDF81',
          '\uD83C\uDF88',
          '\uD83D\uDC4B',
        ],
        _0xfeef5c = _0x45696c[Math.floor(Math.random() * _0x45696c.length)],
        _0x14a10d = {
          text: _0xfeef5c,
          key: _0x5a4b77.key,
        }
      const _0x25ab5d = { react: _0x14a10d }
      _0x6e5c6f.sendMessage(_0x210477, _0x25ab5d)
    }
  }
)
const _0x512073 = {}
_0x512073.on = 'text'
cmd(
  _0x512073,
  async (
    _0x3dc898,
    _0x74ffe2,
    _0x49b53d,
    {
      from: _0x3c2669,
      prefix: _0x533344,
      l: _0x2384cd,
      quoted: _0x57ea1a,
      body: _0x1145d6,
      isCmd: _0x4f0a04,
      command: _0x757498,
      args: _0x41957b,
      q: _0x5d204d,
      isGroup: _0x63d367,
      sender: _0x415cc1,
      senderNumber: _0x2ae317,
      botNumber2: _0x251d09,
      botNumber: _0x1b7335,
      pushname: _0x50db2d,
      isMe: _0x3560e0,
      isOwner: _0x38e48a,
      groupMetadata: _0x3b8926,
      groupName: _0xb222a1,
      participants: _0x28c056,
      groupAdmins: _0x5207a3,
      isBotAdmins: _0x5e5eeb,
      isAdmins: _0xab7dcd,
      reply: _0x4d6d4e,
    }
  ) => {
    let _0x5b054c = _0x74ffe2.pushName
    const _0x53cf12 = await Levels.appendXp(_0x74ffe2.sender, 'RandomXP', 8)
    if (_0x53cf12) {
      const _0x105b33 = await Levels.fetch(_0x74ffe2.sender, 'RandomXP'),
        _0x4c7a1c = _0x105b33.level
      var _0x655c16 = 'GOD'
      if (_0x4c7a1c <= 2) {
        var _0x655c16 = '\uD83C\uDFF3Citizen'
      } else {
        if (_0x4c7a1c <= 4) {
          var _0x655c16 = '\uD83D\uDC7CBaby Wizard'
        } else {
          if (_0x4c7a1c <= 6) {
            var _0x655c16 = '\uD83E\uDDD9‍\u2640️Wizard'
          } else {
            if (_0x4c7a1c <= 8) {
              var _0x655c16 = '\uD83E\uDDD9‍\u2642️Wizard Lord'
            } else {
              if (_0x4c7a1c <= 10) {
                var _0x655c16 = '\uD83E\uDDDA\uD83C\uDFFBBaby Mage'
              } else {
                if (_0x4c7a1c <= 12) {
                  var _0x655c16 = '\uD83E\uDDDCMage'
                } else {
                  if (_0x4c7a1c <= 14) {
                    var _0x655c16 = '\uD83E\uDDDC‍\u2642️Master of Mage'
                  } else {
                    if (_0x4c7a1c <= 16) {
                      var _0x655c16 = '\uD83C\uDF2CChild of Nobel'
                    } else {
                      if (_0x4c7a1c <= 18) {
                        var _0x655c16 = '\u2744Nobel'
                      } else {
                        if (_0x4c7a1c <= 20) {
                          var _0x655c16 = '\u26A1Speed of Elite'
                        } else {
                          if (_0x4c7a1c <= 22) {
                            var _0x655c16 = '\uD83C\uDFADElite'
                          } else {
                            if (_0x4c7a1c <= 24) {
                              var _0x655c16 = '\uD83E\uDD47Ace I'
                            } else {
                              if (_0x4c7a1c <= 26) {
                                var _0x655c16 = '\uD83E\uDD48Ace II'
                              } else {
                                if (_0x4c7a1c <= 28) {
                                  var _0x655c16 = '\uD83E\uDD49Ace Master'
                                } else {
                                  if (_0x4c7a1c <= 30) {
                                    var _0x655c16 = '\uD83C\uDF96Ace Dominator'
                                  } else {
                                    if (_0x4c7a1c <= 32) {
                                      var _0x655c16 = '\uD83C\uDFC5Ace Elite'
                                    } else {
                                      if (_0x4c7a1c <= 34) {
                                        var _0x655c16 =
                                          '\uD83C\uDFC6Ace Supreme'
                                      } else {
                                        if (_0x4c7a1c <= 36) {
                                          var _0x655c16 =
                                            '\uD83D\uDC8DSupreme I'
                                        } else {
                                          if (_0x4c7a1c <= 38) {
                                            var _0x655c16 =
                                              '\uD83D\uDC8ESupreme Ii'
                                          } else {
                                            if (_0x4c7a1c <= 40) {
                                              var _0x655c16 =
                                                '\uD83D\uDD2ESupreme Master'
                                            } else {
                                              if (_0x4c7a1c <= 42) {
                                                var _0x655c16 =
                                                  '\uD83D\uDEE1Legend III'
                                              } else {
                                                if (_0x4c7a1c <= 44) {
                                                  var _0x655c16 =
                                                    '\uD83C\uDFF9Legend II'
                                                } else {
                                                  if (_0x4c7a1c <= 46) {
                                                    var _0x655c16 =
                                                      '\u2694Legend'
                                                  } else {
                                                    if (_0x4c7a1c <= 55) {
                                                      var _0x655c16 =
                                                        '\uD83D\uDC09Immortal'
                                                    } else {
                                                      var _0x655c16 = 'Kiddo'
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (config.LEVEL_UP_MESSAGE === 'false') {
        const _0x172468 = {
          url: 'https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg',
        }
        await _0x3dc898.sendMessage(
          _0x3c2669,
          {
            image: _0x172468,
            caption:
              '\n\u2501\u2501\u2501\u2501\u2501\u0F3A\u2743\u0F3B\u2501\u2501\u2501\u2501\u2501\u25C7\n\u2631 *look at that! Someone just leveled up! \u2728*\n\u2631 *\uD83D\uDC64 Name*: ' +
              _0x74ffe2.pushName +
              '\n\u2631 *\uD83C\uDF9A Level*: ' +
              _0x105b33.level +
              '\n\u2631 *\uD83D\uDED1 Exp*: ' +
              _0x105b33.xp +
              ' / ' +
              Levels.xpFor(_0x105b33.level + 1) +
              '\n\u2631 *\uD83D\uDCCD Role*: *' +
              _0x655c16 +
              '*\n\u2631 *Enjoy! \uD83D\uDE01*\u2501\u2501\u2501\u2501\u2501\u0F3A\u2743\u0F3B\u2501\u2501\u2501\u2501\n',
          },
          { quoted: _0x74ffe2 }
        )
      }
    }
  }
)
const _0x70568b = {}
_0x70568b.pattern = 'owner'
_0x70568b.react = '\uD83D\uDD16'
_0x70568b.desc = 'To take owner number'
_0x70568b.category = 'owner'
_0x70568b.use = '.ban'
_0x70568b.filename = __filename
cmd(
  _0x70568b,
  async (
    _0x3bc320,
    _0x1d988a,
    _0x12e85d,
    {
      from: _0x47f8ee,
      prefix: _0x145d7a,
      l: _0x24876a,
      quoted: _0x36871f,
      body: _0x56d511,
      isCmd: _0xeaffe,
      command: _0x2dffb3,
      args: _0x21f7e8,
      q: _0x1d79f5,
      isGroup: _0x5761d7,
      sender: _0x31fa51,
      senderNumber: _0x2daee4,
      botNumber2: _0x3c011b,
      botNumber: _0x5965e5,
      pushname: _0x3007e2,
      isMe: _0x270705,
      isOwner: _0x10175d,
      groupMetadata: _0x63418,
      groupName: _0x751a98,
      participants: _0x5c1a7f,
      groupAdmins: _0x1ff4b2,
      isBotAdmins: _0x2412ec,
      isAdmins: _0x324105,
      reply: _0x2a66de,
    }
  ) => {
    try {
      const _0x3d8602 = require('../settings'),
        _0x39143a =
          'BEGIN:VCARD\nVERSION:3.0\nFN:' +
          _0x3d8602.OWNER_NAME +
          '\n' +
          'ORG:;\n' +
          'TEL;type=CELL;type=VOICE;waid=' +
          owner[0] +
          ':+' +
          owner[0] +
          '\n' +
          'END:VCARD',
        _0x2b3f06 = { vcard: _0x39143a }
      const _0x1a4a7b = {
        displayName: _0x3d8602.OWNER_NAME,
        contacts: [_0x2b3f06],
      }
      let _0xfd08fa = {
        contacts: _0x1a4a7b,
        contextInfo: {
          externalAdReply: {
            title: _0x3d8602.OWNER_NAME,
            body: 'Touch here.',
            renderLargerThumbnail: true,
            thumbnailUrl: '',
            thumbnail: 'https://telegra.ph/file/b714e9a697c2fd0794985.jpg',
            mediaType: 2,
            mediaUrl: '',
            sourceUrl:
              'https://wa.me/+' +
              owner[0] +
              '?text=Hii bro,I am ' +
              _0x1d988a.pushName,
          },
        },
      }
      const _0x27b172 = { quoted: _0x1d988a }
      return await _0x3bc320.sendMessage(_0x47f8ee, _0xfd08fa, _0x27b172)
      const _0x6f6e0c = {
        text: '\u2705',
        key: _0x1d988a.key,
      }
      const _0x3a8180 = { react: _0x6f6e0c }
      await _0x3bc320.sendMessage(_0x47f8ee, _0x3a8180)
    } catch (_0x56ab08) {
      _0x2a66de('*Error !!*'), _0x24876a(_0x56ab08)
    }
  }
)
const _0x1ae867 = {}
_0x1ae867.pattern = 'ban'
_0x1ae867.react = '\uD83D\uDD16'
_0x1ae867.desc = 'To ban a user'
_0x1ae867.category = 'main'
_0x1ae867.use = '.ban'
_0x1ae867.filename = __filename
cmd(
  _0x1ae867,
  async (
    _0xfd6c1b,
    _0x9903b4,
    _0x117252,
    {
      from: _0x4b9fab,
      prefix: _0x33b886,
      l: _0x3d9d89,
      quoted: _0x1eac8b,
      body: _0x3412a5,
      isCmd: _0xb56afd,
      command: _0x1b108f,
      args: _0x42c23c,
      q: _0x4c3a5f,
      isGroup: _0x28106b,
      sender: _0xed9e26,
      senderNumber: _0x5a9fee,
      botNumber2: _0x4cfa9,
      botNumber: _0x189789,
      pushname: _0x2b5d48,
      isMe: _0x33b724,
      isOwner: _0x3cab0e,
      groupMetadata: _0x7c7f71,
      groupName: _0x5eec08,
      participants: _0x359a40,
      groupAdmins: _0x5b636e,
      isBotAdmins: _0xd0d966,
      isAdmins: _0x2ea583,
      reply: _0x22bb3d,
    }
  ) => {
    try {
      if (!_0x33b724) {
        return await _0x22bb3d(BOTOW)
      }
      let _0x56ec3b
      if (_0x9903b4.quoted && _0x9903b4.quoted.sender) {
        _0x56ec3b = _0x9903b4.quoted.sender
      } else {
        return _0x22bb3d('Mention or reply to the user you want to ban.')
      }
      const _0x5dd3b2 = banUser.includes(_0x56ec3b)
      if (_0x5dd3b2) {
        return _0x22bb3d('User is already banned.')
      }
      banUser.push(_0x56ec3b)
      return _0x22bb3d('Successfully banned the user.')
      const _0x2858e0 = {
        text: '\u2705',
        key: _0x9903b4.key,
      }
      const _0x1b5bbf = { react: _0x2858e0 }
      await _0xfd6c1b.sendMessage(_0x4b9fab, _0x1b5bbf)
    } catch (_0x565724) {
      _0x22bb3d('*Error !!*'), _0x3d9d89(_0x565724)
    }
  }
)
const _0x5722c8 = {}
_0x5722c8.pattern = 'unban'
_0x5722c8.react = '\uD83D\uDD16'
_0x5722c8.desc = 'To unban a user'
_0x5722c8.category = 'main'
_0x5722c8.use = '.un ban'
_0x5722c8.filename = __filename
cmd(
  _0x5722c8,
  async (
    _0x4ac237,
    _0x98b5f9,
    _0x2bd450,
    {
      from: _0x1a7629,
      prefix: _0x807d0,
      l: _0x2f6e9d,
      quoted: _0x188e57,
      body: _0x224226,
      isCmd: _0x395759,
      command: _0x574353,
      args: _0x682ce3,
      q: _0x46384a,
      isGroup: _0x11dd3b,
      sender: _0x38bdf8,
      senderNumber: _0x114be3,
      botNumber2: _0x5e3580,
      botNumber: _0x1de13b,
      pushname: _0x7e041c,
      isMe: _0x46fbe4,
      isOwner: _0x1f080e,
      groupMetadata: _0x3ddf60,
      groupName: _0xd42768,
      participants: _0x25d9a1,
      groupAdmins: _0x4829db,
      isBotAdmins: _0x296ef6,
      isAdmins: _0x390da0,
      reply: _0x255bea,
    }
  ) => {
    try {
      if (!_0x46fbe4) {
        return await _0x255bea(BOTOW)
      }
      if (_0x2bd450.quoted && _0x98b5f9.quoted.sender) {
        const _0x5ec57e = _0x98b5f9.quoted.sender,
          _0x793839 = banUser.includes(_0x5ec57e)
        if (!_0x793839) {
          return _0x255bea('User is not banned.')
        }
        let _0x5dcd51 = banUser.indexOf(_0x5ec57e)
        return (
          banUser.splice(_0x5dcd51, 1),
          _0x255bea('Successfully Unbanned the user.')
        )
      }
      return _0x255bea(
        'Invalid option. Reply to a message to ban/unban the user.'
      )
      const _0xae979f = {
        text: '\u2705',
        key: _0x98b5f9.key,
      }
      const _0x2e01d1 = { react: _0xae979f }
      await _0x4ac237.sendMessage(_0x1a7629, _0x2e01d1)
    } catch (_0x4a12e6) {
      _0x255bea('*Error !!*'), _0x2f6e9d(_0x4a12e6)
    }
  }
)
const _0x5adbb5 = {}
_0x5adbb5.pattern = 'menu2'
_0x5adbb5.react = '\uD83D\uDCC2'
_0x5adbb5.alias = ['help']
_0x5adbb5.desc = "Get bot's command list."
_0x5adbb5.category = 'main'
_0x5adbb5.use = '.menu'
_0x5adbb5.filename = __filename
cmd(
  _0x5adbb5,
  async (
    _0x4e8b10,
    _0x441688,
    _0x310298,
    {
      from: _0x33328c,
      l: _0x290de9,
      quoted: _0x51da4d,
      body: _0x2fc268,
      isCmd: _0x22008e,
      command: _0x5c2a93,
      args: _0x559abf,
      q: _0x1b2e21,
      isGroup: _0x4e3782,
      sender: _0x102c2b,
      senderNumber: _0x15adb8,
      botNumber2: _0x111136,
      botNumber: _0x4618f3,
      pushname: _0x22ff82,
      isSachintha: _0x509bc8,
      isSavi: _0x316be4,
      isSadas: _0xd67380,
      isMani: _0x2ffc1f,
      isMe: _0x4f9587,
      isOwner: _0x41a09c,
      groupMetadata: _0x52419f,
      groupName: _0xda60cb,
      participants: _0x320139,
      groupAdmins: _0x539df6,
      isBotAdmins: _0x26231d,
      isAdmins: _0x3e6403,
      reply: _0x1882c8,
    }
  ) => {
    try {
      let _0x319e4b = ''
      for (let _0x1cc940 = 0; _0x1cc940 < commands.length; _0x1cc940++) {
        if (commands[_0x1cc940].category === 'download') {
          !commands[_0x1cc940].dontAddCommandList &&
            (_0x319e4b +=
              '*\u2502\u25BA* .' + commands[_0x1cc940].pattern + '\n')
        }
      }
      let _0x192601 = ''
      for (let _0x9a384a = 0; _0x9a384a < commands.length; _0x9a384a++) {
        commands[_0x9a384a].category === 'search' &&
          !commands[_0x9a384a].dontAddCommandList &&
            (_0x192601 +=
              '*\u2502\u2A65* .' + commands[_0x9a384a].pattern + '\n')
      }
      let _0x1742f = ''
      for (let _0x331c10 = 0; _0x331c10 < commands.length; _0x331c10++) {
        if (commands[_0x331c10].category === 'convert') {
          !commands[_0x331c10].dontAddCommandList &&
            (_0x1742f +=
              '*\u2502\u25BA* .' + commands[_0x331c10].pattern + '\n')
        }
      }
      let _0x1029a5 = ''
      for (let _0x19ac7c = 0; _0x19ac7c < commands.length; _0x19ac7c++) {
        commands[_0x19ac7c].category === 'logo' &&
          !commands[_0x19ac7c].dontAddCommandList &&
            (_0x1029a5 +=
              '*\u2502\u25BA* .' + commands[_0x19ac7c].pattern + '\n')
      }
      let _0x1433aa = ''
      for (let _0x361dcb = 0; _0x361dcb < commands.length; _0x361dcb++) {
        commands[_0x361dcb].category === 'main' &&
          !commands[_0x361dcb].dontAddCommandList &&
            (_0x1433aa +=
              '*\u2502\u25BA* .' + commands[_0x361dcb].pattern + '\n')
      }
      let _0x487306 = ''
      for (let _0x3dd782 = 0; _0x3dd782 < commands.length; _0x3dd782++) {
        if (commands[_0x3dd782].category === 'group') {
          !commands[_0x3dd782].dontAddCommandList &&
            (_0x487306 +=
              '*\u2502\u2A65* .' + commands[_0x3dd782].pattern + '\n')
        }
      }
      let _0x50d801 = ''
      for (let _0x96ef8f = 0; _0x96ef8f < commands.length; _0x96ef8f++) {
        if (commands[_0x96ef8f].category === 'bug') {
          !commands[_0x96ef8f].dontAddCommandList &&
            (_0x50d801 +=
              '*\u2502\u2A65* .' + commands[_0x96ef8f].pattern + '\n')
        }
      }
      let _0x3e2038 = ''
      for (let _0x2eb4eb = 0; _0x2eb4eb < commands.length; _0x2eb4eb++) {
        commands[_0x2eb4eb].category === 'other' &&
          !commands[_0x2eb4eb].dontAddCommandList &&
            (_0x3e2038 +=
              '*\u2502\u2A65* .' + commands[_0x2eb4eb].pattern + '\n')
      }
      let _0x5d9e7a =
        '*Hellow\uD83D\uDC78* ' +
        _0x22ff82 +
        '\n\n*\u256D\u2500     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*\n*\u2502\uD83D\uDD75️‍\u2642️ \uD835\uDE19\uD835\uDE36\uD835\uDE2F \uD835\uDE1B\uD835\uDE2A\uD835\uDE2E\uD835\uDE26 -* ' +
        runtime(process.uptime()) +
        ' \n*\u2502\uD83D\uDD75️‍\u2642️ \uD835\uDE19\uD835\uDE22\uD835\uDE2E \uD835\uDE1C\uD835\uDE34\uD835\uDE26 -* ' +
        (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
        'MB / ' +
        Math.round(require('os').totalmem / 1024 / 1024) +
        'MB\n*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\uD83D\uDC78 \uD835\uDE1D\uD835\uDE08\uD835\uDE11\uD835\uDE10\uD835\uDE19\uD835\uDE08 \uD835\uDE14\uD835\uDE25 \uD835\uDE0A\uD835\uDE30\uD835\uDE2E\uD835\uDE2E\uD835\uDE22\uD835\uDE2E\uD835\uDE25 \uD835\uDE17\uD835\uDE22\uD835\uDE2F\uD835\uDE26\uD835\uDE2D*\n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ DOWNLOAD COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x319e4b +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ SEARCH COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x192601 +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ CONVERT COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x1742f +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ LOGO COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x1029a5 +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ MAIN COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x1433aa +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ GROUP COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x487306 +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n\t\t       \n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ BUG COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x50d801 +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\t\n\n*\u256D\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\n*\u2502\uD83E\uDDD9‍\u2642️ OTHER COMMANDS*\n*\u2502   \u2500\u2500\u2500\u2500\u2500\u2500\u2500*\n\n' +
        _0x3e2038 +
        '*\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25CF\u25CF\u25BA*\t\n\n\uD83D\uDC68‍\uD83D\uDCBB ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ \uD83D\uDC68‍\uD83D\uDCBB'
      const _0x189999 = { url: config.LOGO }
      const _0x50c187 = {
        image: _0x189999,
        caption: _0x5d9e7a,
      }
      await _0x4e8b10.sendMessage(_0x33328c, _0x50c187, {
        quoted: _0x441688,
        messageId: genMsgId(),
      })
    } catch (_0x1659ca) {
      _0x1882c8('*Error !!*')
      _0x290de9(_0x1659ca)
    }
  }
)
const _0x50d876 = {}
_0x50d876.pattern = 'addprem'
_0x50d876.react = '\uD83D\uDD16'
_0x50d876.desc = 'To premium number'
_0x50d876.category = 'main'
_0x50d876.use = '.addprem'
_0x50d876.filename = __filename
cmd(
  _0x50d876,
  async (
    _0x57731b,
    _0x4a3a2d,
    _0x177cc4,
    {
      from: _0x38587d,
      prefix: _0xd64a99,
      l: _0x2a7823,
      quoted: _0x4ca95f,
      body: _0x4ca242,
      isCmd: _0x5e17d1,
      command: _0x168a63,
      args: _0x365a50,
      q: _0x3b8f10,
      isGroup: _0x421a67,
      sender: _0x11bfc2,
      senderNumber: _0x5d1eba,
      botNumber2: _0x461934,
      botNumber: _0x2c7043,
      pushname: _0xc3eb40,
      isMe: _0x36c3ff,
      isOwner: _0x3fae28,
      groupMetadata: _0x2e0e8c,
      groupName: _0x805ab1,
      participants: _0x5cb31f,
      groupAdmins: _0x5b41ce,
      isBotAdmins: _0x111ded,
      isAdmins: _0x47edbc,
      reply: _0x34b459,
    }
  ) => {
    try {
      if (!_0x36c3ff) {
        return await _0x34b459(BOTOW)
      }
      if (_0x365a50.length < 2) {
        return _0x4a3a2d.reply(
          'Usage:\n*#addprem* @tag tag\n*#addprem* tag time\n\nExample: #addprem @tag 30d'
        )
      }
      if (_0x4a3a2d.mentionedJid.length !== 0) {
        for (
          let _0x49a9f9 = 0;
          _0x49a9f9 < _0x4a3a2d.mentionedJid.length;
          _0x49a9f9++
        ) {
          addPremiumUser(_0x4a3a2d.mentionedJid[0], _0x365a50[1], premium)
        }
        _0x4a3a2d.reply('Success Premium')
      } else {
        addPremiumUser(_0x365a50[0] + '@s.whatsapp.net', _0x365a50[1], premium),
          _0x4a3a2d.reply('Success Via Number')
      }
      const _0x2be484 = {
        text: '\u2705',
        key: _0x4a3a2d.key,
      }
      const _0x34f879 = { react: _0x2be484 }
      await _0x57731b.sendMessage(_0x38587d, _0x34f879)
    } catch (_0x58923c) {
      _0x34b459('*Error !!*'), _0x2a7823(_0x58923c)
    }
  }
)
const _0x1a74a2 = {}
_0x1a74a2.pattern = 'buypremium'
_0x1a74a2.react = '\uD83D\uDD16'
_0x1a74a2.desc = 'To be a premium member of bot'
_0x1a74a2.category = 'main'
_0x1a74a2.use = '.buypremium'
_0x1a74a2.filename = __filename
cmd(
  _0x1a74a2,
  async (
    _0x2ff79f,
    _0x2e2a28,
    _0x7cf938,
    {
      from: _0x4c09bf,
      prefix: _0x53f75d,
      l: _0x144fdd,
      quoted: _0x4c451e,
      body: _0xc5c129,
      isCmd: _0x138911,
      command: _0x549f74,
      args: _0x4c34d5,
      q: _0xf4492,
      isGroup: _0x1216f3,
      sender: _0x39ac02,
      senderNumber: _0x768ed0,
      botNumber2: _0x1f5214,
      botNumber: _0x23248e,
      pushname: _0x4c5d6a,
      isMe: _0xed9d4b,
      isOwner: _0x3c46f9,
      groupMetadata: _0x534f61,
      groupName: _0x47c25f,
      participants: _0x4adb8a,
      groupAdmins: _0x10af4f,
      isBotAdmins: _0x5ccca1,
      isAdmins: _0x3e353e,
      reply: _0x40a778,
    }
  ) => {
    try {
      let _0x33c7b2 =
        'Hi ' +
        _0x4c5d6a +
        '\uD83D\uDC4B\n Want to Buy Premium? Just chat with the owner\uD83D\uDE09'
      const _0x3d0b1c = {
        showAdAttribution: false,
        title: 'BUY PREMIUM',
        body: '15k / MONTH',
        thumbnailUrl: 'https://telegra.ph/file/b714e9a697c2fd0794985.jpg',
        sourceUrl: config.link,
        mediaType: 1,
        renderLargerThumbnail: false,
      }
      const _0x293c85 = { externalAdReply: _0x3d0b1c }
      const _0x120c11 = {
        text: _0x33c7b2,
        contextInfo: _0x293c85,
      }
      await _0x2ff79f.sendMessage(_0x2e2a28.chat, _0x120c11, {
        quoted: _0x2e2a28,
      })
      const _0xad19dd = {
        text: '\u2705',
        key: _0x2e2a28.key,
      }
      const _0x424420 = { react: _0xad19dd }
      await _0x2ff79f.sendMessage(_0x4c09bf, _0x424420)
    } catch (_0x40b113) {
      _0x40a778('*Error !!*'), _0x144fdd(_0x40b113)
    }
  }
)
const _0x1a2939 = {}
_0x1a2939.pattern = 'addowner'
_0x1a2939.react = '\uD83D\uDD16'
_0x1a2939.desc = 'To add bot owner'
_0x1a2939.category = 'main'
_0x1a2939.use = '.addowner'
_0x1a2939.filename = __filename
cmd(
  _0x1a2939,
  async (
    _0x3f7d83,
    _0x1c6397,
    _0x5d3964,
    {
      from: _0x475670,
      prefix: _0x51d1c5,
      l: _0x3598ab,
      quoted: _0x21981e,
      body: _0xd35aea,
      isCmd: _0x3c0f03,
      command: _0x42ad24,
      args: _0x3731ff,
      q: _0x27f37e,
      isGroup: _0x49e494,
      sender: _0x57856f,
      senderNumber: _0x177002,
      botNumber2: _0x382acb,
      botNumber: _0xd3883a,
      pushname: _0x1b3d5e,
      isMe: _0x1e12c9,
      isOwner: _0x23441d,
      groupMetadata: _0x50f608,
      groupName: _0x432d92,
      participants: _0x692871,
      groupAdmins: _0x48db7b,
      isBotAdmins: _0x52abbe,
      isAdmins: _0x697685,
      reply: _0x3a3c7c,
    }
  ) => {
    try {
      if (!_0x1e12c9) {
        return await _0x3a3c7c(BOTOW)
      }
      if (!_0x3731ff[0]) {
        return _0x3a3c7c(
          'Use ' +
            (_0x51d1c5 + _0x42ad24) +
            ' number\nExample ' +
            (_0x51d1c5 + _0x42ad24) +
            ' 94719199757'
        )
      }
      bnnd = _0x27f37e.split('|')[0].replace(/[^0-9]/g, '')
      let _0xe74139 = await _0x3f7d83.onWhatsApp(bnnd)
      if (_0xe74139.length == 0) {
        return _0x3a3c7c('Enter A Valid And Registered Number On WhatsApp!!!')
      }
      owner.push(bnnd)
      fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
      _0x3a3c7c('Number ' + bnnd + ' Has Become An Owner!!!')
      const _0x56dad4 = {
        text: '\u2705',
        key: _0x1c6397.key,
      }
      const _0x284c4c = { react: _0x56dad4 }
      await _0x3f7d83.sendMessage(_0x475670, _0x284c4c)
    } catch (_0x16c063) {
      _0x3a3c7c('*Error !!*')
      _0x3598ab(_0x16c063)
    }
  }
)
const _0x54b569 = {}
_0x54b569.pattern = 'delowner'
_0x54b569.react = '\uD83D\uDD16'
_0x54b569.desc = 'To add bot owner'
_0x54b569.category = 'main'
_0x54b569.use = '.delowner'
_0x54b569.filename = __filename
cmd(
  _0x54b569,
  async (
    _0x285898,
    _0x3815bf,
    _0xe3edaa,
    {
      from: _0x48276a,
      prefix: _0x50c834,
      l: _0xd29e6d,
      quoted: _0x5b9826,
      body: _0x2f1c68,
      isCmd: _0x5d1255,
      command: _0x1e16a1,
      args: _0xd32e1d,
      q: _0x3262c5,
      isGroup: _0x1f25c4,
      sender: _0x1746ee,
      senderNumber: _0x41633e,
      botNumber2: _0x345b87,
      botNumber: _0x387e15,
      pushname: _0x50cea1,
      isMe: _0x3fce27,
      isOwner: _0x1fdbbc,
      groupMetadata: _0x4e1fac,
      groupName: _0x3c8ae5,
      participants: _0x38f163,
      groupAdmins: _0x5b48c8,
      isBotAdmins: _0x57c3be,
      isAdmins: _0x1481ac,
      reply: _0x29c4c9,
    }
  ) => {
    try {
      if (!_0x3fce27) {
        return await _0x29c4c9(BOTOW)
      }
      if (!_0xd32e1d[0]) {
        return _0x29c4c9(
          'Use ' +
            (_0x50c834 + _0x1e16a1) +
            ' nomor\nExample ' +
            (_0x50c834 + _0x1e16a1) +
            ' 94719199757'
        )
      }
      ya = _0x3262c5.split('|')[0].replace(/[^0-9]/g, '')
      unp = owner.indexOf(ya)
      owner.splice(unp, 1)
      fs.writeFileSync('./lib/owner.json', JSON.stringify(owner))
      _0x29c4c9(
        'The Numbrr ' + ya + ' Has been deleted from owner list by the owner!!!'
      )
      const _0x5db115 = {}
      _0x5db115.text = '\u2705'
      _0x5db115.key = _0x3815bf.key
      const _0x3b73f3 = {}
      _0x3b73f3.react = _0x5db115
      await _0x285898.sendMessage(_0x48276a, _0x3b73f3)
    } catch (_0x5c968e) {
      _0x29c4c9('*\uD83D\uDED1 This is an owner command...*')
      _0xd29e6d(_0x5c968e)
    }
  }
)
const _0x3f02f4 = {}
_0x3f02f4.pattern = 'listowner'
_0x3f02f4.react = '\uD83D\uDD16'
_0x3f02f4.desc = 'To add bot owner'
_0x3f02f4.category = 'main'
_0x3f02f4.use = '.listowner'
_0x3f02f4.filename = __filename
cmd(
  _0x3f02f4,
  async (
    _0x44642f,
    _0x875800,
    _0x55de5f,
    {
      from: _0x100f1b,
      prefix: _0x57d0a4,
      l: _0x44098a,
      quoted: _0x269c28,
      body: _0x3ee0ec,
      isCmd: _0x4ae493,
      command: _0x233a00,
      args: _0x28df24,
      q: _0xde818e,
      isGroup: _0x4e032d,
      sender: _0x41cfa2,
      senderNumber: _0x48549c,
      botNumber2: _0x52f724,
      botNumber: _0x6e2041,
      pushname: _0x5b0ce1,
      isMe: _0xdb3e17,
      isOwner: _0x544704,
      groupMetadata: _0x40e06e,
      groupName: _0x57fb4c,
      participants: _0x164982,
      groupAdmins: _0x964e9d,
      isBotAdmins: _0x21e151,
      isAdmins: _0x437796,
      reply: _0x406cdb,
    }
  ) => {
    try {
      if (!_0xdb3e17) {
        return await _0x406cdb(BOTOW)
      }
      let _0x1ffa8e =
        '\u250C\u2500\u2500\u2B53\u300C *List Owner* \u300D\n\u2502\n'
      for (let _0x112e15 of owner) {
        _0x1ffa8e += '\u2502\u2B54 ' + _0x112e15 + '\n'
      }
      _0x1ffa8e +=
        '\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2B53\n\n*Total : ' +
        owner.length +
        '*'
      _0x406cdb()
      const _0x29c699 = {
        text: '\u2705',
        key: _0x875800.key,
      }
      const _0x5d8609 = { react: _0x29c699 }
      await _0x44642f.sendMessage(_0x100f1b, _0x5d8609)
    } catch (_0x5afb67) {
      _0x406cdb('*\uD83D\uDED1 This is an owner command...*'),
        _0x44098a(_0x5afb67)
    }
  }
)
const _0x49ac8f = {}
_0x49ac8f.pattern = 'getsession'
_0x49ac8f.react = '\uD83D\uDD16'
_0x49ac8f.desc = 'To get bot session'
_0x49ac8f.category = 'main'
_0x49ac8f.use = '.getsession'
_0x49ac8f.filename = __filename
cmd(
  _0x49ac8f,
  async (
    _0x1dd83e,
    _0x5b0840,
    _0x3e8d0c,
    {
      from: _0x4f5acb,
      prefix: _0x7b3c9a,
      l: _0x5667fc,
      quoted: _0x43bbc7,
      body: _0x28ae0b,
      isCmd: _0x4dcfce,
      command: _0x24db69,
      args: _0x344dc6,
      q: _0x176813,
      isGroup: _0x129d16,
      sender: _0x5ee7ef,
      senderNumber: _0x148d2d,
      botNumber2: _0x1e791b,
      botNumber: _0x42eba5,
      pushname: _0x44b879,
      isMe: _0x278c87,
      isOwner: _0x5a73b7,
      groupMetadata: _0x574d46,
      groupName: _0x21a8d1,
      participants: _0x4ff468,
      groupAdmins: _0x2c2e4f,
      isBotAdmins: _0x1f3445,
      isAdmins: _0x521e7d,
      reply: _0x5ede71,
    }
  ) => {
    try {
      if (!_0x278c87) {
        return await _0x5ede71(BOTOW)
      }
      _0x5ede71('Wait a moment, currently retrieving your session file')
      let _0x10e381 = fs.readFileSync('./session/creds.json')
      const _0x4474d0 = {
        document: _0x10e381,
        mimetype: 'application/json',
        fileName: 'creds.json',
      }
      _0x1dd83e.sendMessage(_0x5b0840.chat, _0x4474d0, { quoted: _0x5b0840 })
      const _0x232b66 = {
        text: '\u2705',
        key: _0x5b0840.key,
      }
      const _0x1ffd46 = { react: _0x232b66 }
      await _0x1dd83e.sendMessage(_0x4f5acb, _0x1ffd46)
    } catch (_0x498a16) {
      _0x5ede71('*\uD83D\uDED1 This is an owner command...*')
      _0x5667fc(_0x498a16)
    }
  }
)
const _0x3ca6be = {}
_0x3ca6be.pattern = 'delsession'
_0x3ca6be.react = '\uD83D\uDD16'
_0x3ca6be.desc = 'To delete bot session'
_0x3ca6be.category = 'main'
_0x3ca6be.use = '.delsession'
_0x3ca6be.filename = __filename
cmd(
  _0x3ca6be,
  async (
    _0x1561c1,
    _0x4a176e,
    _0x569716,
    {
      from: _0x5be328,
      prefix: _0x2f1c57,
      l: _0x35df5d,
      quoted: _0x59a7ca,
      body: _0x356d0c,
      isCmd: _0x4b152e,
      command: _0x2e2096,
      args: _0x104ec9,
      q: _0x29f407,
      isGroup: _0x3bed5b,
      sender: _0x434f67,
      senderNumber: _0x80b757,
      botNumber2: _0xc9c5b3,
      botNumber: _0x3511ab,
      pushname: _0x23144d,
      isMe: _0x5754b2,
      isOwner: _0x4f4efc,
      groupMetadata: _0x237b34,
      groupName: _0x5a46b1,
      participants: _0x4bd696,
      groupAdmins: _0x2168f1,
      isBotAdmins: _0x27968b,
      isAdmins: _0x8335f8,
      reply: _0x41dc61,
    }
  ) => {
    try {
      if (!_0x5754b2) {
        return await _0x41dc61(BOTOW)
      }
      fs.readdir('./session', async function (_0x473fe4, _0xff4e7e) {
        if (_0x473fe4) {
          return (
            console.log('Unable to scan directory: ' + _0x473fe4),
            _0x41dc61('Unable to scan directory: ' + _0x473fe4)
          )
        }
        let _0x15c6de = await _0xff4e7e.filter(
          (_0x507925) =>
            _0x507925.startsWith('pre-key') ||
            _0x507925.startsWith('sender-key') ||
            _0x507925.startsWith('session-') ||
            _0x507925.startsWith('app-state')
        )
        console.log(_0x15c6de.length)
        let _0x4d20e6 = 'Detected ' + _0x15c6de.length + ' junk files\n\n'
        if (_0x15c6de.length == 0) {
          return _0x41dc61()
        }
        _0x15c6de.map(function (_0x2917aa, _0x242f13) {
          _0x4d20e6 += _0x242f13 + 1 + ('. ' + _0x2917aa + '\n')
        })
        _0x41dc61()
        await sleep(2000)
        _0x41dc61('Deleting junk files...')
        await _0x15c6de.forEach(function (_0x18ea33) {
          fs.unlinkSync('./session/' + _0x18ea33)
        })
        await sleep(2000)
        _0x41dc61('Successfully deleted all the trash in the session folder')
      })
      const _0xc30678 = {
        text: '\u2705',
        key: _0x4a176e.key,
      }
      const _0x64fabd = { react: _0xc30678 }
      await _0x1561c1.sendMessage(_0x5be328, _0x64fabd)
    } catch (_0x4ce5d3) {
      _0x41dc61('*\uD83D\uDED1 This is an owner command...*'),
        _0x35df5d(_0x4ce5d3)
    }
  }
)
const _0x3ae32d = {}
_0x3ae32d.pattern = 'block'
_0x3ae32d.react = '\uD83D\uDD16'
_0x3ae32d.desc = 'To block a member'
_0x3ae32d.category = 'main'
_0x3ae32d.use = '.block'
_0x3ae32d.filename = __filename
cmd(
  _0x3ae32d,
  async (
    _0x59bb1f,
    _0x4339ba,
    _0xa54c1d,
    {
      from: _0x16dd8e,
      prefix: _0xecb9be,
      l: _0x379e53,
      quoted: _0x112754,
      body: _0x32a9d0,
      isCmd: _0x2a5875,
      command: _0x1c9f45,
      args: _0xcd5530,
      q: _0x42970d,
      isGroup: _0x2521c0,
      sender: _0x16e811,
      senderNumber: _0x34e0f1,
      botNumber2: _0x333fbb,
      botNumber: _0x1f7332,
      pushname: _0x1e5d20,
      isMe: _0xa8e97e,
      isOwner: _0x7591ba,
      groupMetadata: _0x4b42e9,
      groupName: _0x322b12,
      participants: _0x25e864,
      groupAdmins: _0x159142,
      isBotAdmins: _0x334c55,
      isAdmins: _0x41da7c,
      reply: _0x314d6c,
    }
  ) => {
    try {
      if (!_0xa8e97e) {
        return await _0x314d6c(BOTOW)
      }
      let _0x1f1d9c = _0x4339ba.mentionedJid
        ? _0x4339ba.mentionedJid
        : _0x4339ba.quoted
        ? _0x4339ba.quoted.sender
        : _0x42970d.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x59bb1f
        .updateBlockStatus(_0x1f1d9c, 'block')
        .then((_0x3e2692) => _0x314d6c(jsonformat(_0x3e2692)))
        .catch((_0x4a53d9) => _0x314d6c(jsonformat(_0x4a53d9)))
      const _0x39dee0 = {
        text: '\u2705',
        key: _0x4339ba.key,
      }
      const _0x39680d = { react: _0x39dee0 }
      await _0x59bb1f.sendMessage(_0x16dd8e, _0x39680d)
    } catch (_0x48cd81) {
      _0x314d6c('*Error !!*'), _0x379e53(_0x48cd81)
    }
  }
)
const _0x548aaa = {}
_0x548aaa.pattern = 'unblock'
_0x548aaa.react = '\uD83D\uDD16'
_0x548aaa.desc = 'To unblock a member'
_0x548aaa.category = 'main'
_0x548aaa.use = '.unblock'
_0x548aaa.filename = __filename
cmd(
  _0x548aaa,
  async (
    _0x347bbb,
    _0x23f65c,
    _0x9e95f8,
    {
      from: _0x5054ef,
      prefix: _0x225c51,
      l: _0xa442c5,
      quoted: _0x213f9d,
      body: _0xe2e870,
      isCmd: _0x227fc0,
      command: _0xfd1f67,
      args: _0x533e74,
      q: _0x50409b,
      isGroup: _0x2c37a8,
      sender: _0x4cbde2,
      senderNumber: _0x32d756,
      botNumber2: _0x102993,
      botNumber: _0x15e649,
      pushname: _0x3e8e25,
      isMe: _0x511534,
      isOwner: _0xb51659,
      groupMetadata: _0x3c12f2,
      groupName: _0x1a5ec6,
      participants: _0x1c0c75,
      groupAdmins: _0x40a6da,
      isBotAdmins: _0x41214d,
      isAdmins: _0x507a57,
      reply: _0x50c433,
    }
  ) => {
    try {
      if (!_0x511534) {
        return await _0x50c433(BOTOW)
      }
      let _0x1d58cd = _0x23f65c.mentionedJid
        ? _0x23f65c.mentionedJid
        : _0x23f65c.quoted
        ? _0x23f65c.quoted.sender
        : _0x50409b.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x347bbb
        .updateBlockStatus(_0x1d58cd, 'unblock')
        .then((_0x22c33e) => _0x50c433(jsonformat(_0x22c33e)))
        .catch((_0x23fa93) => _0x50c433(jsonformat(_0x23fa93)))
      const _0x241675 = {
        text: '\u2705',
        key: _0x23f65c.key,
      }
      const _0x44343f = { react: _0x241675 }
      await _0x347bbb.sendMessage(_0x5054ef, _0x44343f)
    } catch (_0x388783) {
      _0x50c433('*\uD83D\uDED1 This is an owner command...*')
      _0xa442c5(_0x388783)
    }
  }
)
const _0x558621 = {}
_0x558621.pattern = 'shutdown'
_0x558621.react = '\u2699️'
_0x558621.desc = 'To shutdown the bot'
_0x558621.category = ''
_0x558621.use = '.shutdown'
_0x558621.filename = __filename
cmd(
  _0x558621,
  async (
    _0x32c6c0,
    _0x2661c1,
    _0x5c6604,
    {
      from: _0x304115,
      prefix: _0x30b835,
      l: _0x293199,
      quoted: _0xa8970c,
      body: _0x3db5e1,
      isCmd: _0xfda43c,
      command: _0x3bc30d,
      args: _0x26de5b,
      q: _0x3f24ab,
      isGroup: _0x482aaf,
      sender: _0x4ff4d4,
      senderNumber: _0x3b1e61,
      botNumber2: _0xa414a7,
      botNumber: _0x3a1bd3,
      pushname: _0x52001f,
      isMe: _0x5f2abc,
      isOwner: _0x697768,
      groupMetadata: _0x3e05dc,
      groupName: _0x358f2b,
      participants: _0x51e6d9,
      groupAdmins: _0x4a8cb1,
      isBotAdmins: _0x25b909,
      isAdmins: _0x151131,
      reply: _0x2f3ba8,
    }
  ) => {
    try {
      if (!_0x5f2abc) {
        return await _0x2f3ba8(BOTOW)
      }
      _0x2f3ba8('Bot shutdown few 10 seconds...')
      await sleep(10000)
      process.exit()
      const _0x4c8d22 = {}
      _0x4c8d22.text = '\u2705'
      _0x4c8d22.key = _0x2661c1.key
      const _0x338a73 = {}
      _0x338a73.react = _0x4c8d22
      await _0x32c6c0.sendMessage(_0x304115, _0x338a73)
    } catch (_0x4687ad) {
      _0x2f3ba8('*\uD83D\uDED1 This is an owner command...*'),
        _0x293199(_0x4687ad)
    }
  }
)
const _0x3abcb1 = {}
_0x3abcb1.pattern = 'mode'
_0x3abcb1.react = '\u2699️'
_0x3abcb1.desc = 'To change mode'
_0x3abcb1.category = ''
_0x3abcb1.use = '.mode'
_0x3abcb1.filename = __filename
cmd(
  _0x3abcb1,
  async (
    _0x468934,
    _0x4c2ee6,
    _0x2b68a9,
    {
      from: _0x5a6c2a,
      prefix: _0x179917,
      l: _0x4ed035,
      quoted: _0x5859df,
      body: _0x227d07,
      isCmd: _0x5df9bb,
      command: _0x25e3c5,
      args: _0x588f06,
      q: _0x40e6cf,
      isGroup: _0x27094a,
      sender: _0x20d8aa,
      senderNumber: _0x3d06a1,
      botNumber2: _0x306c6d,
      botNumber: _0x4a2c2c,
      pushname: _0xe87c75,
      isMe: _0xe0bba7,
      isOwner: _0x378d16,
      groupMetadata: _0x57df65,
      groupName: _0x1a010e,
      participants: _0x45ff4e,
      groupAdmins: _0x562ee0,
      isBotAdmins: _0x197333,
      isAdmins: _0xc0bba,
      reply: _0x2560c6,
    }
  ) => {
    try {
      if (!_0xe0bba7) {
        return await _0x2560c6(BOTOW)
      }
      if (_0x588f06.length < 1) {
        return _0x2560c6('Example ' + (_0x179917 + _0x25e3c5) + ' public/self')
      }
      if (_0x40e6cf == 'public') {
        ;(_0x468934.public = true),
          _0x2560c6('SUCCESSFULLY CHANGE TO PUBLIC MODE')
      } else {
        _0x40e6cf == 'self' &&
          ((_0x468934.public = false),
          _0x2560c6('SUCCESSFULLY CHANGE TO SELF MODE'))
      }
      const _0x4bb9d1 = {
        text: '\u2705',
        key: _0x4c2ee6.key,
      }
      const _0x356b42 = { react: _0x4bb9d1 }
      await _0x468934.sendMessage(_0x5a6c2a, _0x356b42)
    } catch (_0x344dee) {
      _0x2560c6('*\uD83D\uDED1 This is an owner command...*')
      _0x4ed035(_0x344dee)
    }
  }
)
const _0x2c33db = {}
_0x2c33db.pattern = 'self'
_0x2c33db.react = '\u2699️'
_0x2c33db.use = '.self'
_0x2c33db.filename = __filename
cmd(
  _0x2c33db,
  async (
    _0x41830f,
    _0x4e005c,
    _0x340d2e,
    {
      from: _0x3d5d57,
      prefix: _0x1de30a,
      l: _0x1b4c1b,
      quoted: _0x1e14fc,
      body: _0x163803,
      isCmd: _0x1372c9,
      command: _0x3105c8,
      args: _0x146957,
      q: _0x1b57ac,
      isGroup: _0x19d8db,
      sender: _0x26028f,
      senderNumber: _0x3ddc36,
      botNumber2: _0x359dd0,
      botNumber: _0x2c5aaf,
      pushname: _0x35fa66,
      isMe: _0x335519,
      isOwner: _0x133c08,
      groupMetadata: _0x421ce5,
      groupName: _0x25b07b,
      participants: _0x434635,
      groupAdmins: _0x1e686c,
      isBotAdmins: _0x4fd0e9,
      isAdmins: _0x52f98b,
      reply: _0x47cf4f,
    }
  ) => {
    try {
      if (!_0x335519) {
        return await _0x47cf4f(BOTOW)
      }
      _0x41830f.public = false
      _0x47cf4f('*Successful in Changing To Self Usage*')
      const _0x2da714 = {
        text: '\u2705',
        key: _0x4e005c.key,
      }
      const _0x237fca = { react: _0x2da714 }
      await _0x41830f.sendMessage(_0x3d5d57, _0x237fca)
    } catch (_0x46e1ac) {
      _0x47cf4f('*\uD83D\uDED1 This is an owner command...*')
      _0x1b4c1b(_0x46e1ac)
    }
  }
)
const _0x222131 = {}
_0x222131.pattern = 'public'
_0x222131.react = '\u2699️'
_0x222131.use = '.self'
_0x222131.filename = __filename
cmd(
  _0x222131,
  async (
    _0x12544c,
    _0x61efd2,
    _0x562d17,
    {
      from: _0x18bdbe,
      prefix: _0x21a408,
      l: _0x2c14f8,
      quoted: _0x1f8e00,
      body: _0x396fdc,
      isCmd: _0xdafdd6,
      command: _0x13a52e,
      args: _0x1b4b2f,
      q: _0x430873,
      isGroup: _0xefc53e,
      sender: _0x3591ac,
      senderNumber: _0x232dbb,
      botNumber2: _0x274365,
      botNumber: _0x4a1c4b,
      pushname: _0x175683,
      isMe: _0x44c05e,
      isOwner: _0x208eba,
      groupMetadata: _0x150191,
      groupName: _0x4e9261,
      participants: _0x446ef8,
      groupAdmins: _0x42afd6,
      isBotAdmins: _0xdb31fd,
      isAdmins: _0xf0ffbd,
      reply: _0x691edd,
    }
  ) => {
    try {
      if (!_0x44c05e) {
        return await _0x691edd(BOTOW)
      }
      _0x12544c.public = true
      _0x691edd('*Successful in Changing To Public Usage*')
      const _0x112c2e = {
        text: '\u2705',
        key: _0x61efd2.key,
      }
      const _0x3d5e6c = { react: _0x112c2e }
      await _0x12544c.sendMessage(_0x18bdbe, _0x3d5e6c)
    } catch (_0x3cd153) {
      _0x691edd('*\uD83D\uDED1 This is an owner command...*'),
        _0x2c14f8(_0x3cd153)
    }
  }
)
const _0x3b5ed8 = {}
_0x3b5ed8.pattern = 'request'
_0x3b5ed8.react = '\uD83D\uDD16'
_0x3b5ed8.desc = 'Contact to bot owner'
_0x3b5ed8.category = 'main'
_0x3b5ed8.use = '.rsquest2'
_0x3b5ed8.filename = __filename
cmd(
  _0x3b5ed8,
  async (
    _0x3a10a9,
    _0x3b1aea,
    _0x3a8854,
    {
      from: _0x9eef3a,
      prefix: _0x18defc,
      l: _0x4ac32a,
      quoted: _0x406afc,
      body: _0x1bd6b6,
      isCmd: _0x33af8b,
      command: _0x26f4da,
      args: _0x236202,
      q: _0x5cdf45,
      isGroup: _0x3c2ef5,
      sender: _0x4dbcb5,
      senderNumber: _0x46c232,
      botNumber2: _0x231696,
      botNumber: _0x5e6a7e,
      pushname: _0x12c72e,
      isMe: _0x213976,
      isOwner: _0x420580,
      groupMetadata: _0x5c84d2,
      groupName: _0x3ea997,
      participants: _0x58b2c1,
      groupAdmins: _0x57f084,
      isBotAdmins: _0x510c62,
      isAdmins: _0x245df8,
      reply: _0x40d000,
    }
  ) => {
    try {
      if (!_0x5cdf45) {
        return _0x3b1aea.reply(
          'Example: ' +
            (_0x18defc + _0x26f4da) +
            ' hi vajira play command is not working'
        )
      }
      var _0x3b3426 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE81\uD835\uDE74\uD835\uDE7F\uD835\uDE7E\uD835\uDE81\uD835\uDE83 \uD835\uDE82\uD835\uDE74\uD835\uDE7D\uD835\uDE73 \uD835\uDE83\uD835\uDE7E \uD835\uDE83\uD835\uDE77\uD835\uDE74 \uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE74\uD835\uDE81 \uD83D\uDDA5️...',
      ]
      const _0x32831e = { text: 'ꜱᴇɴᴅɪɴɢ...' }
      let { key: _0x1b2ba8 } = await _0x3a10a9.sendMessage(_0x9eef3a, _0x32831e)
      for (let _0x4765ab = 0; _0x4765ab < _0x3b3426.length; _0x4765ab++) {
        const _0xfc483f = {
          text: _0x3b3426[_0x4765ab],
          edit: _0x1b2ba8,
        }
        await _0x3a10a9.sendMessage(_0x9eef3a, _0xfc483f)
      }
      const _0x393161 = _0x3b1aea.key.id
      if (reportedMessages[_0x393161]) {
        return _0x3b1aea.reply(
          'This report has already been forwarded to the owner. Please wait for a response.'
        )
      }
      reportedMessages[_0x393161] = true
      const _0x24f885 = '*| REQUEST/BUG |*',
        _0x28f826 =
          '\n\n*User*: @' +
          _0x3a8854.sender.split('@')[0] +
          '\n*Request/Bug*: ' +
          _0x5cdf45,
        _0x30a15a =
          '\n\n*Hi ' +
          _0x12c72e +
          ', your request has been forwarded to my Owners.*\n*Please wait...*'
      _0x3a10a9.sendMessage(
        devlopernumber + '@s.whatsapp.net',
        {
          text: _0x24f885 + _0x28f826,
          mentions: [_0x3b1aea.sender],
        },
        { quoted: _0x3b1aea }
      )
      _0x3b1aea.reply(
        'Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.'
      )
      const _0x18bc30 = {
        text: '\u2705',
        key: _0x3b1aea.key,
      }
      const _0x3048e7 = { react: _0x18bc30 }
      await _0x3a10a9.sendMessage(_0x9eef3a, _0x3048e7)
    } catch (_0x3d8d1f) {
      _0x40d000('*Error !!*'), _0x4ac32a(_0x3d8d1f)
    }
  }
)
const _0x2b93a3 = {}
_0x2b93a3.pattern = 'request2'
_0x2b93a3.react = '\u2699️'
_0x2b93a3.desc = 'Contact to bot owner'
_0x2b93a3.category = ''
_0x2b93a3.use = '.request'
_0x2b93a3.filename = __filename
cmd(
  _0x2b93a3,
  async (
    _0x41ae4a,
    _0x5349a4,
    _0x2ff2ac,
    {
      from: _0x45991a,
      l: _0x7075d4,
      prefix: _0x51a581,
      quoted: _0x596e2d,
      body: _0x1dc007,
      isCmd: _0x294ac7,
      command: _0x16c345,
      args: _0x5e8d4c,
      q: _0x23483a,
      isGroup: _0x39688a,
      sender: _0x46d779,
      senderNumber: _0x11f634,
      botNumber2: _0x251578,
      botNumber: _0x5180bd,
      pushname: _0x15db07,
      isMe: _0x3ee918,
      isOwner: _0x400bfe,
      groupMetadata: _0x45ba5c,
      groupName: _0x21fdd8,
      participants: _0x2f5f65,
      groupAdmins: _0x34107d,
      isBotAdmins: _0x6a649c,
      isAdmins: _0x7fae08,
      reply: _0x2742c2,
    }
  ) => {
    try {
      let _0x4e6fe4 =
        'Enter The Bug Example\n\n' + _0x16c345 + ' < YOUR REPORT MASSAGE > '
      var _0x62b443 = [
        '\u300A \u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B10%',
        '\u300A \u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u300B30%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2592\u2592\u300B50%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2592\u2592\u300B80%',
        '\u300A \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u300B100%',
        '\uD835\uDE81\uD835\uDE74\uD835\uDE7F\uD835\uDE7E\uD835\uDE81\uD835\uDE83 \uD835\uDE82\uD835\uDE74\uD835\uDE7D\uD835\uDE73 \uD835\uDE83\uD835\uDE7E \uD835\uDE83\uD835\uDE77\uD835\uDE74 \uD835\uDE7E\uD835\uDE86\uD835\uDE7D\uD835\uDE74\uD835\uDE81 \uD83D\uDDA5️...',
      ]
      const _0x3f9505 = { text: 'ꜱᴇɴᴅɪɴɢ...' }
      let { key: _0x24762e } = await _0x41ae4a.sendMessage(_0x45991a, _0x3f9505)
      for (let _0x352881 = 0; _0x352881 < _0x62b443.length; _0x352881++) {
        const _0x31504b = {
          text: _0x62b443[_0x352881],
          edit: _0x24762e,
        }
        await _0x41ae4a.sendMessage(_0x45991a, _0x31504b)
      }
      await _0x41ae4a.sendMessage('94719199757@s.whatsapp.net', {
        text:
          '*Bug Report From:* wa.me/' +
          _0x5349a4.sender.split('@')[0] +
          '\n\n*Bug Report*\n' +
          (_0x23483a ? _0x23483a : 'blank'),
      })
      const _0x4b4361 = await _0x41ae4a.sendMessage(
          '*\u300E \uD835\uDE71\uD835\uDE84\uD835\uDE76 \uD835\uDE81\uD835\uDE74\uD835\uDE7F\uD835\uDE7E\uD835\uDE81\uD835\uDE83 \u300F*'
        ),
        _0x549ee3 = {
          text: '\u2705',
          key: _0x5349a4.key,
        }
      const _0x2bd09d = { react: _0x549ee3 }
      await _0x41ae4a.sendMessage(_0x45991a, _0x2bd09d)
    } catch (_0x2108c2) {
      _0x2742c2('\uD83D\uDED1 This is an owner command...'),
        _0x7075d4(_0x2108c2)
    }
  }
)
const _0xd8ecfd = {}
_0xd8ecfd.pattern = 'setbotbio'
_0xd8ecfd.react = '\u2699️'
_0xd8ecfd.desc = 'To change bot number bio'
_0xd8ecfd.category = ''
_0xd8ecfd.use = '.setbotbio'
_0xd8ecfd.filename = __filename
cmd(
  _0xd8ecfd,
  async (
    _0x3c8042,
    _0x324c0b,
    _0x11b96b,
    {
      from: _0xffdb98,
      prefix: _0x36a7db,
      l: _0x2f25e7,
      quoted: _0x96bdbc,
      body: _0x284532,
      isCmd: _0x8318da,
      command: _0x1af134,
      args: _0x3db57c,
      q: _0x19c2cf,
      isGroup: _0x15e5f6,
      sender: _0x1ac2c6,
      senderNumber: _0x48cc01,
      botNumber2: _0x536aa1,
      botNumber: _0x398804,
      pushname: _0x2cd39f,
      isMe: _0x19afcd,
      isOwner: _0xb169aa,
      groupMetadata: _0x2ad2ac,
      groupName: _0x41d519,
      participants: _0x188fcb,
      groupAdmins: _0x4ed397,
      isBotAdmins: _0x1fffa8,
      isAdmins: _0x4b16de,
      reply: _0x5d8d47,
    }
  ) => {
    try {
      if (!_0x19afcd) {
        return await _0x5d8d47(BOTOW)
      }
      if (!_0x19c2cf) {
        return _0x5d8d47(
          'Where is the text?\nExample: ' +
            (_0x36a7db + _0x1af134) +
            ' izumi Bot'
        )
      }
      await _0x3c8042.updateProfileStatus(_0x19c2cf)
      _0x5d8d47("Success in changing the bio of bot's number")
      const _0xaa21ad = {}
      _0xaa21ad.text = '\u2705'
      _0xaa21ad.key = _0x324c0b.key
      const _0x5f34d2 = {}
      _0x5f34d2.react = _0xaa21ad
      await _0x3c8042.sendMessage(_0xffdb98, _0x5f34d2)
    } catch (_0x51af56) {
      _0x5d8d47('*\uD83D\uDED1 This is an owner command...*'),
        _0x2f25e7(_0x51af56)
    }
  }
)
const _0x3ecf18 = {}
_0x3ecf18.pattern = 'alive'
_0x3ecf18.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x3ecf18.alias = ['online', 'test', 'bot']
_0x3ecf18.desc = 'Check bot online or no.'
_0x3ecf18.category = 'main'
_0x3ecf18.use = '.alive'
_0x3ecf18.filename = __filename
cmd(
  _0x3ecf18,
  async (
    _0x481420,
    _0x594401,
    _0x322b18,
    {
      from: _0x11cae2,
      prefix: _0x4d7366,
      l: _0x9c2285,
      quoted: _0x35ffc2,
      body: _0x5bd10f,
      isCmd: _0x5530b0,
      command: _0x84f96d,
      args: _0x3fe75f,
      q: _0x5006dd,
      isGroup: _0x18c2db,
      sender: _0x1dbb3e,
      senderNumber: _0x4f4068,
      botNumber2: _0x1a3a62,
      botNumber: _0x29af79,
      pushname: _0x1ee48c,
      isMe: _0xeb1819,
      isOwner: _0xe5b005,
      groupMetadata: _0x584747,
      groupName: _0x1d9483,
      participants: _0x2745a7,
      groupAdmins: _0x1fadc2,
      isBotAdmins: _0xea7ecc,
      isAdmins: _0x44ea79,
      reply: _0x538d60,
    }
  ) => {
    try {
      var _0x42b1f8 = _0x594401
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
      let _0x468f8f = '```'
      if (config.ALIVE === 'default') {
        const _0x60b0b6 = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x4d7366 + 'menu',
                  description: 'COMMANDS MENU',
                },
                {
                  title: '2',
                  rowId: _0x4d7366 + 'ping',
                  description: 'VAJIRA-MD SPEED',
                },
              ],
            },
          ],
          _0x2740de = {
            url: 'https://telegra.ph/file/b4caa5682d75220623b83.jpg',
          }
        const _0x270fb0 = {
            caption:
              _0x468f8f +
              '\uD83D\uDC4B කොහිමද ' +
              _0x1ee48c +
              " I'm alive now" +
              _0x468f8f +
              '\n    \n*\uD83D\uDE80Version:* ' +
              require('../package.json').version +
              '\n*\u231BMemory:* ' +
              (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
              'MB / ' +
              Math.round(require('os').totalmem / 1024 / 1024) +
              'MB\n*\uD83D\uDD52Runtime:* ' +
              runtime(process.uptime()) +
              '\n*\uD83D\uDCCDPlatform:* ' +
              hostname +
              '\n\n\uD83D\uDC3CThis is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n                    \n*\uD83C\uDF3BHave A Nice Day..*\uD83C\uDF3B',
            image: _0x2740de,
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x60b0b6,
            contextInfo: {
              externalAdReply: {
                title:
                  '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB',
                body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
                mediaType: 1,
                sourceUrl: '',
                thumbnailUrl: config.IMAGE,
                sourceUrl: 'https://wa.me/94719199757',
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          _0x389639 = {}
        return (
          (_0x389639.quoted = _0x594401),
          await _0x481420.replyList(_0x11cae2, _0x270fb0, _0x389639)
        )
      } else {
        const _0x30766e = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x4d7366 + 'menu',
                  description: 'COMMANDS MENU',
                },
                {
                  title: '2',
                  rowId: _0x4d7366 + 'ping',
                  description: 'VAJIRA-MD SPEED',
                },
              ],
            },
          ],
          _0x2b5dba = {
            caption: config.ALIVE,
            image: {},
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x30766e,
            contextInfo: {},
          }
        _0x2b5dba.image.url = config.LOGO
        _0x2b5dba.contextInfo.externalAdReply = {}
        _0x2b5dba.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x2b5dba.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x2b5dba.contextInfo.externalAdReply.mediaType = 1
        _0x2b5dba.contextInfo.externalAdReply.sourceUrl = ''
        _0x2b5dba.contextInfo.externalAdReply.thumbnailUrl =
          'https://telegra.ph/file/b4caa5682d75220623b83.jpg'
        _0x2b5dba.contextInfo.externalAdReply.renderLargerThumbnail = false
        _0x2b5dba.contextInfo.externalAdReply.showAdAttribution = true
        const _0x20723a = _0x2b5dba,
          _0x1090b5 = {}
        return (
          (_0x1090b5.quoted = _0x594401),
          await _0x481420.replyList(_0x11cae2, _0x20723a, _0x1090b5)
        )
      }
    } catch (_0x49082a) {
      _0x538d60('*Error !!*'), _0x9c2285(_0x49082a)
    }
  }
)
const _0x5c2feb = {}
_0x5c2feb.pattern = 'ping'
_0x5c2feb.react = '\uD83D\uDCDF'
_0x5c2feb.alias = ['speed']
_0x5c2feb.desc = "Check bot's ping"
_0x5c2feb.category = 'main'
_0x5c2feb.use = '.ping'
_0x5c2feb.filename = __filename
cmd(
  _0x5c2feb,
  async (
    _0x4073cb,
    _0x41a0b8,
    _0x3dabb3,
    {
      from: _0x23a002,
      l: _0x1fa67b,
      quoted: _0x41a407,
      body: _0x595525,
      isCmd: _0x3cb222,
      command: _0x1b8638,
      args: _0x5b40b0,
      q: _0x23acd6,
      isGroup: _0x1778fa,
      sender: _0xb1ee4d,
      senderNumber: _0x33ede3,
      botNumber2: _0x4ba990,
      botNumber: _0x1c4bd2,
      pushname: _0x36ca9f,
      isMe: _0x18857b,
      isOwner: _0x3525d1,
      groupMetadata: _0x1c293f,
      groupName: _0x111b63,
      participants: _0x28233,
      groupAdmins: _0x3a0ab0,
      isBotAdmins: _0x2b2221,
      isAdmins: _0x32fc79,
      reply: _0x1c3d5c,
    }
  ) => {
    try {
      var _0x1cc4ff = new Date().getTime()
      const _0x22ddb3 = { text: '```Pinging To QUEEN-IZUMI-MD!!!```' }
      const _0x37f7d1 = { quoted: _0x41a0b8 }
      let _0xfcb1f8 = await _0x4073cb.sendMessage(
        _0x23a002,
        _0x22ddb3,
        _0x37f7d1
      )
      var _0x385fc3 = new Date().getTime()
      return await _0x4073cb.edite(
        _0xfcb1f8,
        '*Pong*\n *' + (_0x385fc3 - _0x1cc4ff) + ' ms* '
      )
    } catch (_0x287dfe) {
      _0x1c3d5c('*Error !!*'), _0x1fa67b(_0x287dfe)
    }
  }
)
const _0x48a021 = {}
_0x48a021.pattern = 'menu'
_0x48a021.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x48a021.alias = ['panel', 'help', 'commands']
_0x48a021.desc = "Get bot's command list."
_0x48a021.category = 'main'
_0x48a021.use = '.menu'
_0x48a021.filename = __filename
cmd(
  _0x48a021,
  async (
    _0x263738,
    _0x511179,
    _0x52744f,
    {
      from: _0x415423,
      prefix: _0x5f8720,
      l: _0x24f322,
      quoted: _0x6c1708,
      body: _0x1e9a1b,
      isCmd: _0x5f47ba,
      command: _0x3c4644,
      args: _0x1d7197,
      q: _0x202119,
      isGroup: _0x43986b,
      sender: _0x188ca9,
      senderNumber: _0x5cc102,
      botNumber2: _0x1e298c,
      botNumber: _0x52c5c9,
      pushname: _0x3e680c,
      isMe: _0x2440ff,
      isOwner: _0x2a7983,
      groupMetadata: _0x58e4bc,
      groupName: _0x385754,
      participants: _0x57ffbc,
      groupAdmins: _0xbbb8d3,
      isBotAdmins: _0x1a741f,
      isAdmins: _0x3628bf,
      reply: _0x5a815d,
    }
  ) => {
    try {
      var _0x28b746 = _0x511179
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
      let _0x53300e = '```'
      if (config.ALIVE === 'default') {
        const _0x3ae9ce = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x5f8720 + 'downmenu',
                  description: 'Down Commands',
                },
                {
                  title: '2',
                  rowId: _0x5f8720 + 'searchmenu',
                  description: 'Search Commands',
                },
                {
                  title: '3',
                  rowId: _0x5f8720 + 'convertmenu',
                  description: 'Convert Commands',
                },
                {
                  title: '4',
                  rowId: _0x5f8720 + 'logomenu',
                  description: 'Logo Commands',
                },
                {
                  title: '5',
                  rowId: _0x5f8720 + 'mainmenu',
                  description: 'Main Commands',
                },
                {
                  title: '6',
                  rowId: _0x5f8720 + 'groupmenu',
                  description: 'Group Commands',
                },
                {
                  title: '7',
                  rowId: _0x5f8720 + 'bugmenu',
                  description: 'Bug commands',
                },
                {
                  title: '8',
                  rowId: _0x5f8720 + 'othermenu',
                  description: 'Other commands',
                },
              ],
            },
          ],
          _0xa2f36c = {
            url: 'https://telegra.ph/file/b4caa5682d75220623b83.jpg',
          }
        const _0x51eb9b = {
            caption:
              '\u2756\u2500\u2500\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB\u2500\u2500\u2756\n\n\u256D\u2500\u2500\u2500\u2550\u276E *ᴍᴇɴᴜ ʟɪsᴛ* \u276F\u2550\u2500\u2500\u2500\u2756\n\u2502 *\uD83D\uDE80\uD835\uDE51\uD835\uDE40\uD835\uDE4D\uD835\uDE4E\uD835\uDE44\uD835\uDE4A\uD835\uDE49:* ' +
              require('../package.json').version +
              '\n\u2502 *\u231B\uD835\uDE48\uD835\uDE40\uD835\uDE48\uD835\uDE4A\uD835\uDE4D\uD835\uDE54:* ' +
              (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
              'MB / ' +
              Math.round(require('os').totalmem / 1024 / 1024) +
              'MB\n\u2502 *\uD83D\uDD52\uD835\uDE4D\uD835\uDE50\uD835\uDE49\uD835\uDE4F\uD835\uDE44\uD835\uDE48\uD835\uDE40:* ' +
              runtime(process.uptime()) +
              '\n\u2502 *\uD83D\uDCCD\uD835\uDE4B\uD835\uDE47\uD835\uDE3C\uD835\uDE4F\uD835\uDE41\uD835\uDE4A\uD835\uDE4D\uD835\uDE48:* ' +
              hostname +
              '\n\u2570\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2508\u22B7',
            image: _0xa2f36c,
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x3ae9ce,
            contextInfo: {
              externalAdReply: {
                title:
                  '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB',
                body: 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ',
                mediaType: 1,
                sourceUrl: '',
                thumbnailUrl: config.IMAGE,
                sourceUrl: 'https://wa.me/94719199757',
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          _0x55f10c = {}
        return (
          (_0x55f10c.quoted = _0x511179),
          await _0x263738.replyList(_0x415423, _0x51eb9b, _0x55f10c)
        )
      } else {
        const _0xb1f6c9 = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x5f8720 + 'downmenu',
                  description: 'Downloader Commands',
                },
                {
                  title: '2',
                  rowId: _0x5f8720 + 'searchmenu',
                  description: 'Search Commands',
                },
                {
                  title: '3',
                  rowId: _0x5f8720 + 'convertmenu',
                  description: 'Converter Commands',
                },
                {
                  title: '4',
                  rowId: _0x5f8720 + 'logomenu',
                  description: 'Logo Commands',
                },
                {
                  title: '5',
                  rowId: _0x5f8720 + 'mainmenu',
                  description: 'Main Commands',
                },
                {
                  title: '6',
                  rowId: _0x5f8720 + 'groupmenu',
                  description: 'Group Commands',
                },
                {
                  title: '7',
                  rowId: _0x5f8720 + 'bugmenu',
                  description: 'Bug commands',
                },
                {
                  title: '8',
                  rowId: _0x5f8720 + 'othermenu',
                  description: 'Other commands',
                },
              ],
            },
          ],
          _0x13f5f6 = {
            caption: config.ALIVE,
            image: {},
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0xb1f6c9,
            contextInfo: {},
          }
        _0x13f5f6.image.url = config.LOGO
        _0x13f5f6.contextInfo.externalAdReply = {}
        _0x13f5f6.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x13f5f6.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x13f5f6.contextInfo.externalAdReply.mediaType = 1
        _0x13f5f6.contextInfo.externalAdReply.sourceUrl = ''
        _0x13f5f6.contextInfo.externalAdReply.thumbnailUrl =
          'https://telegra.ph/file/b4caa5682d75220623b83.jpg'
        _0x13f5f6.contextInfo.externalAdReply.renderLargerThumbnail = false
        _0x13f5f6.contextInfo.externalAdReply.showAdAttribution = true
        const _0x378660 = _0x13f5f6,
          _0x3258aa = {}
        return (
          (_0x3258aa.quoted = _0x511179),
          await _0x263738.replyList(_0x415423, _0x378660, _0x3258aa)
        )
      }
    } catch (_0xcc0466) {
      _0x5a815d('*Error !!*'), _0x24f322(_0xcc0466)
    }
  }
)
const _0x1d07d6 = {}
_0x1d07d6.pattern = 'downmenu'
_0x1d07d6.react = '\u2B07\uD83D\uDC68‍\uD83D\uDCBB'
_0x1d07d6.dontAddCommandList = true
_0x1d07d6.filename = __filename
cmd(
  _0x1d07d6,
  async (
    _0x1abe8c,
    _0x1aab80,
    _0x3efae1,
    {
      from: _0x356c24,
      prefix: _0xcc51c5,
      l: _0x236ae3,
      quoted: _0x337b7f,
      body: _0x257e73,
      isCmd: _0x2f6a12,
      command: _0x42450f,
      args: _0x4d3016,
      q: _0x22a160,
      isGroup: _0x4a122b,
      sender: _0x529c7d,
      senderNumber: _0x568a66,
      botNumber2: _0x438ecf,
      botNumber: _0x2d1bcb,
      pushname: _0x3d0a47,
      isMe: _0x244f69,
      isOwner: _0x438373,
      groupMetadata: _0x1737e6,
      groupName: _0x28eb9c,
      participants: _0x3e8f50,
      groupAdmins: _0x5e9587,
      isBotAdmins: _0x3b0d65,
      isAdmins: _0x342716,
      reply: _0x2c6f0f,
    }
  ) => {
    try {
      let _0x567db2 =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   *VAJIRA-MD DOWNLOAD COMMANDS MENU*\n\n'
      for (let _0x4f9641 = 0; _0x4f9641 < commands.length; _0x4f9641++) {
        if (commands[_0x4f9641].category === 'download') {
          if (!commands[_0x4f9641].dontAddCommandList) {
            _0x567db2 +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0x4f9641].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0x4f9641].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0x4f9641].use +
              '\n\n'
          }
        }
      }
      const _0x2d3d0d = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x18f70f = {
        buttonId: _0xcc51c5 + 'sc',
        buttonText: _0x2d3d0d,
        type: 1,
      }
      const _0x546be6 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x3fa8b2 = {
        buttonId: _0xcc51c5 + 'ping',
        buttonText: _0x546be6,
        type: 1,
      }
      let _0x3b3be5 = [_0x18f70f, _0x3fa8b2]
      const _0x3b0203 = {
        url: 'https://telegra.ph/file/4fe3f694daa5ccd14df59.jpg',
      }
      const _0x296416 = {
        image: _0x3b0203,
        caption: _0x567db2,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ Qᴜᴇᴇɴ-ɪᴢᴜᴍɪ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x3b3be5,
      }
      let _0x2d12ff = _0x296416
      return await _0x1abe8c.buttonMessage(_0x356c24, _0x2d12ff, _0x1aab80)
    } catch (_0xd726fd) {
      _0x2c6f0f('*ERROR !!*')
      _0x236ae3(_0xd726fd)
    }
  }
)
const _0x337773 = {}
_0x337773.pattern = 'searchmenu'
_0x337773.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x337773.dontAddCommandList = true
_0x337773.filename = __filename
cmd(
  _0x337773,
  async (
    _0x283754,
    _0x35d1e7,
    _0x1ac999,
    {
      from: _0x1dda8f,
      prefix: _0x299382,
      l: _0x3bac78,
      quoted: _0x168ab3,
      body: _0x2351c1,
      isCmd: _0x3c4174,
      command: _0x5b7537,
      args: _0x4c936a,
      q: _0x31d3b2,
      isGroup: _0x1304f7,
      sender: _0x5b369d,
      senderNumber: _0x39335a,
      botNumber2: _0xd9fed4,
      botNumber: _0x1d0399,
      pushname: _0x3b989a,
      isMe: _0x1e8a04,
      isOwner: _0x567051,
      groupMetadata: _0xa7c59b,
      groupName: _0x28b6fd,
      participants: _0x36b7d4,
      groupAdmins: _0x49ce65,
      isBotAdmins: _0xe942e0,
      isAdmins: _0x3e2039,
      reply: _0x11f72e,
    }
  ) => {
    try {
      let _0x6f24bd =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   *VAJIRA-MD SEARCH COMMANDS MENU*\n\n'
      for (let _0xeb0480 = 0; _0xeb0480 < commands.length; _0xeb0480++) {
        commands[_0xeb0480].category === 'search' &&
          !commands[_0xeb0480].dontAddCommandList &&
            (_0x6f24bd +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0xeb0480].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0xeb0480].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0xeb0480].use +
              '\n\n')
      }
      const _0x108040 = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x546517 = {
        buttonId: _0x299382 + 'sc',
        buttonText: _0x108040,
        type: 1,
      }
      const _0x1129e1 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x2cfda8 = {
        buttonId: _0x299382 + 'ping',
        buttonText: _0x1129e1,
        type: 1,
      }
      let _0x2e63f2 = [_0x546517, _0x2cfda8]
      const _0x5dcd44 = {
        url: 'https://telegra.ph/file/31c1f6d9cffc4489f2489.jpg',
      }
      const _0x5876d9 = {
        image: _0x5dcd44,
        caption: _0x6f24bd,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x2e63f2,
      }
      let _0x41d2b4 = _0x5876d9
      return await _0x283754.buttonMessage(_0x1dda8f, _0x41d2b4, _0x35d1e7)
    } catch (_0x4f628b) {
      _0x11f72e('*ERROR !!*')
      _0x3bac78(_0x4f628b)
    }
  }
)
const _0x1e4b6f = {}
_0x1e4b6f.pattern = 'convertmenu'
_0x1e4b6f.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x1e4b6f.dontAddCommandList = true
_0x1e4b6f.filename = __filename
cmd(
  _0x1e4b6f,
  async (
    _0xcde3f2,
    _0x205afd,
    _0x24ce0d,
    {
      from: _0x930c4a,
      prefix: _0x15484d,
      l: _0x17480d,
      quoted: _0x15c8d2,
      body: _0xad1cc,
      isCmd: _0x2d1a91,
      command: _0x5f39ca,
      args: _0x463479,
      q: _0x1c0268,
      isGroup: _0x4de4ff,
      sender: _0x36eddf,
      senderNumber: _0x2e7d64,
      botNumber2: _0x4bf4de,
      botNumber: _0x3fd7aa,
      pushname: _0x2eddac,
      isMe: _0x2ada34,
      isOwner: _0x455a07,
      groupMetadata: _0x362556,
      groupName: _0x2d9c40,
      participants: _0x5853b2,
      groupAdmins: _0x31bfc0,
      isBotAdmins: _0x5eb602,
      isAdmins: _0x547097,
      reply: _0x34f086,
    }
  ) => {
    try {
      let _0x3a182e =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   *VAJIRA-MD CONVERT COMMANDS MENU*\n\n'
      for (let _0x42eafb = 0; _0x42eafb < commands.length; _0x42eafb++) {
        commands[_0x42eafb].category === 'convert' &&
          !commands[_0x42eafb].dontAddCommandList &&
            (_0x3a182e +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0x42eafb].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0x42eafb].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0x42eafb].use +
              '\n\n')
      }
      const _0x11d247 = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x15287d = {
        buttonId: _0x15484d + 'sc',
        buttonText: _0x11d247,
        type: 1,
      }
      const _0x543ae8 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x12f5bd = {
        buttonId: _0x15484d + 'ping',
        buttonText: _0x543ae8,
        type: 1,
      }
      let _0x2823d8 = [_0x15287d, _0x12f5bd]
      const _0x2e19b7 = {
        url: 'https://telegra.ph/file/de86ebf257c8ed60edb51.jpg',
      }
      const _0x1535de = {
        image: _0x2e19b7,
        caption: _0x3a182e,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x2823d8,
      }
      let _0x10f937 = _0x1535de
      return await _0xcde3f2.buttonMessage(_0x930c4a, _0x10f937, _0x205afd)
    } catch (_0x2f32c7) {
      _0x34f086('*ERROR !!*')
      _0x17480d(_0x2f32c7)
    }
  }
)
const _0x205b34 = {}
_0x205b34.pattern = 'logomenu'
_0x205b34.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x205b34.dontAddCommandList = true
_0x205b34.filename = __filename
cmd(
  _0x205b34,
  async (
    _0x4ca127,
    _0x5014c2,
    _0x29f467,
    {
      from: _0x1ba167,
      prefix: _0x2a5f86,
      l: _0x35633f,
      quoted: _0x405c6d,
      body: _0xb637e0,
      isCmd: _0x40b376,
      command: _0x2067b7,
      args: _0x3c8d98,
      q: _0x5e2336,
      isGroup: _0x2026a6,
      sender: _0x561d33,
      senderNumber: _0x19ed8e,
      botNumber2: _0x52027d,
      botNumber: _0x20c802,
      pushname: _0x201088,
      isMe: _0x2ed2a5,
      isOwner: _0x33949b,
      groupMetadata: _0xab41bc,
      groupName: _0x1aab35,
      participants: _0x483b0a,
      groupAdmins: _0x4bfcca,
      isBotAdmins: _0x449b69,
      isAdmins: _0x5c0a52,
      reply: _0x3768f7,
    }
  ) => {
    try {
      let _0x3dad43 =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   *VAJIRA-MD LOGO COMMANDS MENU*\n\n'
      for (let _0x127bb8 = 0; _0x127bb8 < commands.length; _0x127bb8++) {
        commands[_0x127bb8].category === 'logo' &&
          !commands[_0x127bb8].dontAddCommandList &&
            (_0x3dad43 +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0x127bb8].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0x127bb8].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0x127bb8].use +
              '\n\n')
      }
      const _0x4b2e62 = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x4fdc81 = {
        buttonId: _0x2a5f86 + 'sc',
        buttonText: _0x4b2e62,
        type: 1,
      }
      const _0x3daf60 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x1cb639 = {
        buttonId: _0x2a5f86 + 'ping',
        buttonText: _0x3daf60,
        type: 1,
      }
      let _0x2dfe55 = [_0x4fdc81, _0x1cb639]
      const _0x4c442c = {
        url: 'https://telegra.ph/file/d4dc51d0f5fcb5fa8e853.jpg',
      }
      const _0xccafbe = {
        image: _0x4c442c,
        caption: _0x3dad43,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x2dfe55,
      }
      let _0x124d44 = _0xccafbe
      return await _0x4ca127.buttonMessage(_0x1ba167, _0x124d44, _0x5014c2)
    } catch (_0x3bd85d) {
      _0x3768f7('*ERROR !!*')
      _0x35633f(_0x3bd85d)
    }
  }
)
const _0x51c7df = {}
_0x51c7df.pattern = 'mainmenu'
_0x51c7df.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x51c7df.dontAddCommandList = true
_0x51c7df.filename = __filename
cmd(
  _0x51c7df,
  async (
    _0xa553f6,
    _0x45f349,
    _0xa91a43,
    {
      from: _0x58d86a,
      prefix: _0x6b451c,
      l: _0x2be29d,
      quoted: _0x17725a,
      body: _0x4f2a34,
      isCmd: _0x360b43,
      command: _0x5a694c,
      args: _0x96f7a2,
      q: _0x4ff866,
      isGroup: _0x2b1b3d,
      sender: _0x168cf1,
      senderNumber: _0x3f9912,
      botNumber2: _0x5136d5,
      botNumber: _0x2674e5,
      pushname: _0xda4f5d,
      isMe: _0x2372b5,
      isOwner: _0x5b68df,
      groupMetadata: _0x11ec38,
      groupName: _0x504133,
      participants: _0x4b26b9,
      groupAdmins: _0xfec180,
      isBotAdmins: _0x56dcc6,
      isAdmins: _0x8f6272,
      reply: _0x58a325,
    }
  ) => {
    try {
      let _0x414c51 =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   *VAJIRA-MD MAIN COMMANDS MENU*\n\n'
      for (let _0x46c527 = 0; _0x46c527 < commands.length; _0x46c527++) {
        commands[_0x46c527].category === 'main' &&
          !commands[_0x46c527].dontAddCommandList &&
            (_0x414c51 +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0x46c527].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0x46c527].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0x46c527].use +
              '\n\n')
      }
      const _0x20b908 = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x44f6e8 = {
        buttonId: _0x6b451c + 'sc',
        buttonText: _0x20b908,
        type: 1,
      }
      const _0x2e2e43 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x441079 = {
        buttonId: _0x6b451c + 'ping',
        buttonText: _0x2e2e43,
        type: 1,
      }
      let _0x463392 = [_0x44f6e8, _0x441079]
      const _0x2dbe7f = {
        url: 'https://telegra.ph/file/d69178494e0a4783652e4.jpg',
      }
      const _0x3fe68a = {
        image: _0x2dbe7f,
        caption: _0x414c51,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x463392,
      }
      let _0x5e9d73 = _0x3fe68a
      return await _0xa553f6.buttonMessage(_0x58d86a, _0x5e9d73, _0x45f349)
    } catch (_0x58dd09) {
      _0x58a325('*ERROR !!*')
      _0x2be29d(_0x58dd09)
    }
  }
)
const _0x42b00f = {}
_0x42b00f.pattern = 'groupmenu'
_0x42b00f.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x42b00f.dontAddCommandList = true
_0x42b00f.filename = __filename
cmd(
  _0x42b00f,
  async (
    _0x3ef663,
    _0x31ada8,
    _0x21d96d,
    {
      from: _0x532adf,
      prefix: _0x4fdc5a,
      l: _0x5a59db,
      quoted: _0x3427b7,
      body: _0x1e5038,
      isCmd: _0x375f1e,
      command: _0x3b9812,
      args: _0x502a41,
      q: _0x45b648,
      isGroup: _0x11b1f7,
      sender: _0x426401,
      senderNumber: _0x4ba3b4,
      botNumber2: _0x5c8190,
      botNumber: _0x2104ec,
      pushname: _0x4832fc,
      isMe: _0x234ef6,
      isOwner: _0x28f973,
      groupMetadata: _0x279b00,
      groupName: _0x74aae5,
      participants: _0x245509,
      groupAdmins: _0x3bbd59,
      isBotAdmins: _0x56b6e9,
      isAdmins: _0x170a7e,
      reply: _0x477259,
    }
  ) => {
    try {
      let _0x558fff =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   * VAJIRA-MD GROUP COMMANDS MENU*\n\n'
      for (let _0x29f4e3 = 0; _0x29f4e3 < commands.length; _0x29f4e3++) {
        commands[_0x29f4e3].category === 'group' &&
          !commands[_0x29f4e3].dontAddCommandList &&
            (_0x558fff +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0x29f4e3].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0x29f4e3].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0x29f4e3].use +
              '\n\n')
      }
      const _0x39f656 = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x2e1be1 = {
        buttonId: _0x4fdc5a + 'sc',
        buttonText: _0x39f656,
        type: 1,
      }
      const _0x8ff526 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x169e15 = {
        buttonId: _0x4fdc5a + 'ping',
        buttonText: _0x8ff526,
        type: 1,
      }
      let _0x57d491 = [_0x2e1be1, _0x169e15]
      const _0x50c1bd = {
        url: 'https://telegra.ph/file/b5cd270a5a07b5fb07258.jpg',
      }
      const _0x510585 = {
        image: _0x50c1bd,
        caption: _0x558fff,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x57d491,
      }
      let _0x3eda5f = _0x510585
      return await _0x3ef663.buttonMessage(_0x532adf, _0x3eda5f, _0x31ada8)
    } catch (_0x11928b) {
      _0x477259('*ERROR !!*')
      _0x5a59db(_0x11928b)
    }
  }
)
const _0x1f02fb = {}
_0x1f02fb.pattern = 'bugmenu'
_0x1f02fb.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x1f02fb.dontAddCommandList = true
_0x1f02fb.filename = __filename
cmd(
  _0x1f02fb,
  async (
    _0x34c489,
    _0x800733,
    _0x47c2f6,
    {
      from: _0x459f8e,
      prefix: _0x177c5b,
      l: _0x2277b4,
      quoted: _0x320c74,
      body: _0x5a28a0,
      isCmd: _0x54bbe0,
      command: _0xdc1225,
      args: _0x1fc7f9,
      q: _0xa6c3e9,
      isGroup: _0x4a8682,
      sender: _0x3a04aa,
      senderNumber: _0x4ed5dd,
      botNumber2: _0x26b2c6,
      botNumber: _0x2f7e19,
      pushname: _0x1227cb,
      isMe: _0x5c16f3,
      isOwner: _0x48dd51,
      groupMetadata: _0x49dbe1,
      groupName: _0x148310,
      participants: _0x51afca,
      groupAdmins: _0x1f6aeb,
      isBotAdmins: _0x5b8731,
      isAdmins: _0x268178,
      reply: _0x596909,
    }
  ) => {
    try {
      let _0x430ea2 =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   * VAJIRA-MD BUG COMMANDS MENU*\n\n'
      for (let _0x2221ed = 0; _0x2221ed < commands.length; _0x2221ed++) {
        commands[_0x2221ed].category === 'bug' &&
          !commands[_0x2221ed].dontAddCommandList &&
            (_0x430ea2 +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0x2221ed].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0x2221ed].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0x2221ed].use +
              '\n\n')
      }
      const _0x2cb8a9 = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x31cd77 = {
        buttonId: _0x177c5b + 'sc',
        buttonText: _0x2cb8a9,
        type: 1,
      }
      const _0x165ae3 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x2430cc = {
        buttonId: _0x177c5b + 'ping',
        buttonText: _0x165ae3,
        type: 1,
      }
      let _0x2e2394 = [_0x31cd77, _0x2430cc]
      const _0x5aee46 = {
        url: 'https://telegra.ph/file/afb21d10c788495e872b5.jpg',
      }
      const _0x4e113e = {
        image: _0x5aee46,
        caption: _0x430ea2,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x2e2394,
      }
      let _0x3c4016 = _0x4e113e
      return await _0x34c489.buttonMessage(_0x459f8e, _0x3c4016, _0x800733)
    } catch (_0x3049e4) {
      _0x596909('*ERROR !!*')
      _0x2277b4(_0x3049e4)
    }
  }
)
const _0x50acf8 = {}
_0x50acf8.pattern = 'othermenu'
_0x50acf8.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x50acf8.dontAddCommandList = true
_0x50acf8.filename = __filename
cmd(
  _0x50acf8,
  async (
    _0x3211ee,
    _0x5600b7,
    _0x5aebcb,
    {
      from: _0x2aed38,
      prefix: _0x7c60f,
      l: _0x56a80e,
      quoted: _0x3a9e91,
      body: _0x2f8b6e,
      isCmd: _0x495324,
      command: _0x552619,
      args: _0xe66dd,
      q: _0x4d3b23,
      isGroup: _0x35627e,
      sender: _0x5ababd,
      senderNumber: _0x37d516,
      botNumber2: _0x853f63,
      botNumber: _0x1d159e,
      pushname: _0x42a95f,
      isMe: _0x24cc8a,
      isOwner: _0x44e17f,
      groupMetadata: _0x43fc08,
      groupName: _0x2649ba,
      participants: _0x46a0b3,
      groupAdmins: _0x286ec8,
      isBotAdmins: _0x4bf241,
      isAdmins: _0x706d08,
      reply: _0x232e3c,
    }
  ) => {
    try {
      let _0x4a37d2 =
        '*\u25CF \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 \u25CF*\n\n   * VAJIRA-MD OTHER COMMANDS MENU*\n\n'
      for (let _0xc6f717 = 0; _0xc6f717 < commands.length; _0xc6f717++) {
        commands[_0xc6f717].category === 'other' &&
          !commands[_0xc6f717].dontAddCommandList &&
            (_0x4a37d2 +=
              '*\uD83D\uDCCD\u27A3Command :* ' +
              commands[_0xc6f717].pattern +
              '\n*\uD83D\uDCC3\u27A3Desc :* ' +
              commands[_0xc6f717].desc +
              '\n*\u231B\u27A3Use:* ' +
              commands[_0xc6f717].use +
              '\n\n')
      }
      const _0x5d6460 = { displayText: 'ʙᴏᴛ ꜱᴄʀɪᴘᴛ' }
      const _0x5c5e4a = {
        buttonId: _0x7c60f + 'sc',
        buttonText: _0x5d6460,
        type: 1,
      }
      const _0x1e3073 = { displayText: 'ᴠᴀᴊɪʀᴀ-ᴍᴅ ꜱᴘᴇᴇᴅ' }
      const _0x59135f = {
        buttonId: _0x7c60f + 'ping',
        buttonText: _0x1e3073,
        type: 1,
      }
      let _0x3f9b11 = [_0x5c5e4a, _0x59135f]
      const _0x3ed8f3 = {
        url: 'https://telegra.ph/file/c603878ab886ba0afa5ec.jpg',
      }
      const _0x487849 = {
        image: _0x3ed8f3,
        caption: _0x4a37d2,
        footer: 'ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ-ᴍᴅ\u25CEʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ',
        headerType: 4,
        buttons: _0x3f9b11,
      }
      let _0x363446 = _0x487849
      return await _0x3211ee.buttonMessage(_0x2aed38, _0x363446, _0x5600b7)
    } catch (_0x33754b) {
      _0x232e3c('*ERROR !!*')
      _0x56a80e(_0x33754b)
    }
  }
)
const _0x1cc752 = {}
_0x1cc752.pattern = 'sc'
_0x1cc752.react = '\uD83D\uDC68‍\uD83D\uDCBB'
_0x1cc752.alias = ['script', 'repo']
_0x1cc752.desc = 'Check bot online or no.'
_0x1cc752.category = 'main'
_0x1cc752.use = '.alive'
_0x1cc752.filename = __filename
cmd(
  _0x1cc752,
  async (
    _0x55aab8,
    _0x13d5c7,
    _0x4acb7e,
    {
      from: _0x28b6b4,
      prefix: _0x53f4c5,
      l: _0x2c7a5a,
      quoted: _0xab43b9,
      body: _0x281ea5,
      isCmd: _0xfb07a4,
      command: _0x25fc11,
      args: _0x345005,
      q: _0x5d538f,
      isGroup: _0x348e90,
      sender: _0x3ccb31,
      senderNumber: _0x14075f,
      botNumber2: _0x185c94,
      botNumber: _0x2719e6,
      pushname: _0x1665f7,
      isMe: _0x4edfcb,
      isOwner: _0x302a55,
      groupMetadata: _0x20656c,
      groupName: _0x501167,
      participants: _0x1050d1,
      groupAdmins: _0x128efc,
      isBotAdmins: _0x60be15,
      isAdmins: _0x392e7d,
      reply: _0xc1e73a,
    }
  ) => {
    try {
      var _0x5f4616 = _0x13d5c7
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
      let _0x3df720 = '```'
      if (config.ALIVE === 'default') {
        const _0x20a636 = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x53f4c5 + 'menu',
                  description: 'COMMANDS MENU',
                },
                {
                  title: '2',
                  rowId: _0x53f4c5 + 'ping',
                  description: 'VAJIRA-MD SPEED',
                },
              ],
            },
          ],
          _0x5edf1 = {
            url: 'https://telegra.ph/file/b4caa5682d75220623b83.jpg',
          }
        const _0x19a35d = {
          caption:
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *VAJIRA MD WHATSAPP USER BOT* \uD83D\uDCAB\n\n                     *OUR MISSION*\n\n\uD83D\uDC3CThis is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n\n\n\uD83D\uDC3C The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier\n\n\n\uD83D\uDCA1 Various things can be downloaded from this bot.  Also, managing groups, making logos & edit-images in different ways, searching for different things and getting information and more futures included.\n\n\n\u26A0️ Also, if your Whatsapp account gets damaged or banned by using this, we are not responsible and you should take responsibility for it.\n\n\n\uD83D\uDC68‍\uD83D\uDCBB OWNER VAJIRA\n\n\uD83C\uDFA1 *GITHUB:*  https://github.com/VajiraTech/VAJIRA-MD\n\n\uD83E\uDEA9 *OUR GROUP:* https://chat.whatsapp.com/D6w6Qy5yrhp7MmfNcprbO3\n\n*ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ* \n',
          image: _0x5edf1,
          footer: config.FOOTER,
          buttonText: '\uD83D\uDD22 Reply below number,',
          sections: _0x20a636,
          contextInfo: {},
        }
        _0x19a35d.contextInfo.externalAdReply = {}
        _0x19a35d.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x19a35d.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x19a35d.contextInfo.externalAdReply.mediaType = 1
        _0x19a35d.contextInfo.externalAdReply.sourceUrl = ''
        _0x19a35d.contextInfo.externalAdReply.thumbnailUrl = config.IMAGE
        _0x19a35d.contextInfo.externalAdReply.sourceUrl =
          'https://wa.me/94719199757'
        _0x19a35d.contextInfo.externalAdReply.mediaType = 1
        _0x19a35d.contextInfo.externalAdReply.renderLargerThumbnail = true
        const _0x2b50f4 = _0x19a35d,
          _0x457445 = {}
        return (
          (_0x457445.quoted = _0x13d5c7),
          await _0x55aab8.replyList(_0x28b6b4, _0x2b50f4, _0x457445)
        )
      } else {
        const _0x192c58 = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x53f4c5 + 'menu',
                  description: 'COMMANDS MENU',
                },
                {
                  title: '2',
                  rowId: _0x53f4c5 + 'ping',
                  description: 'VAJIRA-MD SPEED',
                },
              ],
            },
          ],
          _0x3e27d5 = {
            url: 'https://telegra.ph/file/b4caa5682d75220623b83.jpg',
          }
        const _0x4f222e = {
          caption: config.ALIVE,
          image: _0x3e27d5,
          footer: config.FOOTER,
          buttonText: '\uD83D\uDD22 Reply below number,',
          sections: _0x192c58,
          contextInfo: {},
        }
        _0x4f222e.contextInfo.externalAdReply = {}
        _0x4f222e.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x4f222e.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x4f222e.contextInfo.externalAdReply.mediaType = 1
        _0x4f222e.contextInfo.externalAdReply.sourceUrl = ''
        _0x4f222e.contextInfo.externalAdReply.thumbnailUrl = config.IMAGE
        _0x4f222e.contextInfo.externalAdReply.sourceUrl =
          'https://wa.me/94719199757'
        _0x4f222e.contextInfo.externalAdReply.mediaType = 1
        _0x4f222e.contextInfo.externalAdReply.renderLargerThumbnail = true
        const _0x3354f3 = _0x4f222e,
          _0x5443e6 = {}
        return (
          (_0x5443e6.quoted = _0x13d5c7),
          await _0x55aab8.replyList(_0x28b6b4, _0x3354f3, _0x5443e6)
        )
      }
    } catch (_0x35af73) {
      _0xc1e73a('*Error !!*')
      _0x2c7a5a(_0x35af73)
    }
  }
)
