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
  } = require('../lib/functions'),
  {
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
  } = require('@whiskeysockets/baileys')
var tesadtag = ''
if (config.LANG === 'SI') {
  tesadtag = '*මට tag කිරීමට text එකක් දෙන්න. !*'
} else {
  tesadtag = '*Give me text to tag !*'
}
var descg = ''
if (config.LANG === 'SI') {
  descg = 'එය කණ්ඩායමේ සියලුම සාමාජිකයින් tag කරයි.'
} else {
  descg = 'It tag all members in group.'
}
var ONLGROUP = ''
if (config.LANG === 'SI') {
  ONLGROUP = '*මෙය group නොවේ !*'
} else {
  ONLGROUP = '*This is not a group !*'
}
var ADMIN = ''
if (config.LANG === 'SI') {
  ADMIN = 'ඔබ admin නොවේ !'
} else {
  ADMIN = 'You are not an admin !'
}
var tmsg = ''
if (config.LANG === 'SI') {
  tmsg = 'එය Bot link ලබා දෙයි.'
} else {
  tmsg = 'It gives bot link.'
}
var imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = 'මෙලෙස enable/disable value, උදා:- ${prefix}ephemeral enable.'
} else {
  imgmsg =
    'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
}
var BOTOW = ''
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
} else {
  BOTOW = "*You are not bot's owner or moderator !*"
}
const _0x3f9db8 = {}
_0x3f9db8.pattern = 'kickall'
_0x3f9db8.react = '\uD83D\uDD16'
_0x3f9db8.desc = 'To kick all members in one time'
_0x3f9db8.category = 'group'
_0x3f9db8.use = '.kickall'
_0x3f9db8.filename = __filename
cmd(
  _0x3f9db8,
  async (
    _0x24743a,
    _0x5e1a2e,
    _0x1a20bf,
    {
      from: _0x41eb08,
      prefix: _0x19c816,
      l: _0x4d1e31,
      quoted: _0x5e128f,
      body: _0xa6ebeb,
      isCmd: _0x1f60d7,
      command: _0x2aa1cc,
      args: _0x51b87d,
      q: _0x13d1d1,
      isGroup: _0x43d504,
      sender: _0x40c806,
      senderNumber: _0x545aac,
      botNumber2: _0x1bac33,
      botNumber: _0x2037db,
      pushname: _0x145280,
      isMe: _0xebbdf2,
      isOwner: _0x469577,
      groupMetadata: _0x594a47,
      groupName: _0x23e234,
      participants: _0x2459cd,
      groupAdmins: _0x383701,
      isBotAdmins: _0x2fd58f,
      isAdmins: _0x1189b7,
      reply: _0x569ba5,
    }
  ) => {
    try {
      if (!_0x43d504) {
        return _0x569ba5(ONLGROUP)
      }
      if (!_0x1189b7) {
        return _0x569ba5(ADMIN)
      }
      for (let _0x3a4299 of _0x2459cd) {
        await sleep(1000)
        if (_0x3a4299.id == _0x2037db + '@s.whatsapp.net') {
          return
        }
        if (_0x3a4299.id == owner + '@s.whatsapp.net') {
          return
        }
        await _0x24743a.groupParticipantsUpdate(
          _0x41eb08,
          [_0x3a4299.id],
          'remove'
        )
        await _0x24743a.sendText(
          _0x41eb08,
          '*' + _0x3a4299.id.split('@')[0] + ' Kick out !!!*'
        )
      }
      const _0x11eb5f = {
        text: '\u2705',
        key: _0x5e1a2e.key,
      }
      const _0x35884c = { react: _0x11eb5f }
      await _0x24743a.sendMessage(_0x41eb08, _0x35884c)
    } catch (_0x1f2cf2) {
      _0x569ba5('*Error !!*'), _0x4d1e31(_0x1f2cf2)
    }
  }
)
const _0x5685d1 = {}
_0x5685d1.pattern = 'opentime'
_0x5685d1.react = '\uD83D\uDD16'
_0x5685d1.desc = 'To open group to a time'
_0x5685d1.category = 'group'
_0x5685d1.use = '.opentime'
_0x5685d1.filename = __filename
cmd(
  _0x5685d1,
  async (
    _0x1f028d,
    _0x246d06,
    _0x2262b2,
    {
      from: _0x38f711,
      prefix: _0x28b059,
      l: _0x46150f,
      quoted: _0x4242c7,
      body: _0x36ca88,
      isCmd: _0x3b5420,
      command: _0x228445,
      args: _0x343688,
      q: _0xdfffd2,
      isGroup: _0x1c721c,
      sender: _0x45a5b1,
      senderNumber: _0x16adf5,
      botNumber2: _0xb8d549,
      botNumber: _0x150201,
      pushname: _0x209e01,
      isMe: _0x4f6b1f,
      isOwner: _0xf0204f,
      groupMetadata: _0x4c9262,
      groupName: _0x5b9787,
      participants: _0x210af9,
      groupAdmins: _0x31c479,
      isBotAdmins: _0x1aa954,
      isAdmins: _0x2ae0f6,
      reply: _0x1575c5,
    }
  ) => {
    try {
      if (!_0x1c721c) {
        return _0x1575c5(ONLGROUP)
      }
      if (!_0x2ae0f6) {
        return _0x1575c5(ADMIN)
      }
      if (_0x343688[1] == 'second') {
        var _0x512b6b = _0x343688[0] * '1000'
      } else {
        if (_0x343688[1] == 'minute') {
          var _0x512b6b = _0x343688[0] * '60000'
        } else {
          if (_0x343688[1] == 'hour') {
            var _0x512b6b = _0x343688[0] * '3600000'
          } else {
            if (_0x343688[1] == 'day') {
              var _0x512b6b = _0x343688[0] * '86400000'
            } else {
              return _0x1575c5(
                '*select:*\nsecond\nminute\nhour\n\n*example*\n10 second'
              )
            }
          }
        }
      }
      _0x1575c5('Open time ' + _0xdfffd2 + ' starting from now')
      setTimeout(() => {
        var _0x2a9af3 = _0x246d06.participant
        const _0x4710af =
          '*Open time* the group was opened by admin\n now members can send messages'
        _0x1f028d.groupSettingUpdate(_0x38f711, 'not_announcement')
        _0x1575c5(_0x4710af)
      }, _0x512b6b)
      const _0x4a7db4 = {
        text: '\u2705',
        key: _0x246d06.key,
      }
      const _0x27cfdc = { react: _0x4a7db4 }
      await _0x1f028d.sendMessage(_0x38f711, _0x27cfdc)
    } catch (_0x276159) {
      _0x1575c5('*Error !!*'), _0x46150f(_0x276159)
    }
  }
)
const _0x2671c8 = {}
_0x2671c8.pattern = 'closetime'
_0x2671c8.react = '\uD83D\uDD16'
_0x2671c8.desc = 'To close group to a time'
_0x2671c8.category = 'group'
_0x2671c8.use = '.closstime'
_0x2671c8.filename = __filename
cmd(
  _0x2671c8,
  async (
    _0x213290,
    _0x4b8ad0,
    _0x1f9fae,
    {
      from: _0x325e3c,
      prefix: _0x2fa4eb,
      l: _0x420788,
      quoted: _0x276d10,
      body: _0x292bcf,
      isCmd: _0x39bb26,
      command: _0x78e5c1,
      args: _0x476d5c,
      q: _0x150246,
      isGroup: _0x24d293,
      sender: _0x3291a5,
      senderNumber: _0x3c4e06,
      botNumber2: _0x141c07,
      botNumber: _0x2faec4,
      pushname: _0x329bd8,
      isMe: _0x50ebda,
      isOwner: _0x344e9f,
      groupMetadata: _0x57530a,
      groupName: _0x377307,
      participants: _0xcee8cf,
      groupAdmins: _0x44afb1,
      isBotAdmins: _0x5f38ce,
      isAdmins: _0x3c492f,
      reply: _0x1a0e4a,
    }
  ) => {
    try {
      if (!_0x24d293) {
        return _0x1a0e4a(ONLGROUP)
      }
      if (!_0x3c492f) {
        return _0x1a0e4a(ADMIN)
      }
      if (_0x476d5c[1] == 'second') {
        var _0x1d329e = _0x476d5c[0] * '1000'
      } else {
        if (_0x476d5c[1] == 'minute') {
          var _0x1d329e = _0x476d5c[0] * '60000'
        } else {
          if (_0x476d5c[1] == 'hour') {
            var _0x1d329e = _0x476d5c[0] * '3600000'
          } else {
            if (_0x476d5c[1] == 'day') {
              var _0x1d329e = _0x476d5c[0] * '86400000'
            } else {
              return _0x1a0e4a(
                '*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second'
              )
            }
          }
        }
      }
      _0x1a0e4a('Close time ' + _0x150246 + ' starting from now')
      setTimeout(() => {
        var _0x2315de = _0x1f9fae.participant
        const _0x33745e =
          '*Close time* group closed by admin\nnow only admin can send messages'
        _0x213290.groupSettingUpdate(_0x325e3c, 'announcement')
        _0x1a0e4a(_0x33745e)
      }, _0x1d329e)
      const _0x33ab6f = {
        text: '\u2705',
        key: _0x4b8ad0.key,
      }
      const _0x9ecb57 = { react: _0x33ab6f }
      await _0x213290.sendMessage(_0x325e3c, _0x9ecb57)
    } catch (_0x4a6ccc) {
      _0x1a0e4a('*Error !!*'), _0x420788(_0x4a6ccc)
    }
  }
)
const _0x23f4b6 = {}
_0x23f4b6.pattern = 'sendcontact'
_0x23f4b6.react = '\uD83D\uDD16'
_0x23f4b6.desc = 'To see group contacts'
_0x23f4b6.category = 'group'
_0x23f4b6.use = '.sendcontact'
_0x23f4b6.filename = __filename
cmd(
  _0x23f4b6,
  async (
    _0x1aae02,
    _0x1bbb3d,
    _0x4c249f,
    {
      from: _0xc29a06,
      prefix: _0x1ddf3,
      l: _0xdde5ce,
      quoted: _0xe97566,
      body: _0x3d7f5c,
      isCmd: _0x252c35,
      command: _0x42112b,
      args: _0x15270d,
      q: _0x46269e,
      isGroup: _0x32e822,
      sender: _0x48c6d5,
      senderNumber: _0x24c7a4,
      botNumber2: _0x1944b0,
      botNumber: _0x58c770,
      pushname: _0x44e6a8,
      isMe: _0x404faa,
      isOwner: _0x51be40,
      groupMetadata: _0x1e32fc,
      groupName: _0x9b697,
      participants: _0x2c59e5,
      groupAdmins: _0x491de8,
      isBotAdmins: _0x3f50b5,
      isAdmins: _0x5885aa,
      reply: _0x77a87f,
    }
  ) => {
    try {
      if (!_0x32e822) {
        return _0x77a87f(ONLGROUP)
      }
      if (!_0x5885aa) {
        return _0x77a87f(ADMIN)
      }
      if (!_0x1bbb3d.mentionedJid) {
        return _0x77a87f('\nUse like this\n Example:.sendcontact @tag|name')
      }
      let _0x42c988 = _0x46269e.split(' ')[1]
          ? _0x46269e.split(' ')[1]
          : 'Contact',
        _0x845b = {
          displayName: 'Contact',
          contacts: [
            {
              displayName: _0x42c988,
              vcard:
                'BEGIN:VCARD\nVERSION:3.0\nN:;' +
                _0x42c988 +
                ';;;\nFN:' +
                _0x42c988 +
                '\nitem1.TEL;waid=' +
                _0x1bbb3d.mentionedJid.split('@')[0] +
                ':' +
                _0x1bbb3d.mentionedJid.split('@')[0] +
                '\nitem1.X-ABLabel:Mobile\nEND:VCARD',
            },
          ],
        }
      const _0x33d0ca = { contacts: _0x845b }
      const _0x407aa3 = { ephemeralExpiration: 86400 }
      _0x1aae02.sendMessage(_0x1bbb3d.chat, _0x33d0ca, _0x407aa3)
      const _0x5c10b4 = {
        text: '\u2705',
        key: _0x1bbb3d.key,
      }
      const _0x2cc163 = { react: _0x5c10b4 }
      await _0x1aae02.sendMessage(_0xc29a06, _0x2cc163)
    } catch (_0x992768) {
      _0x77a87f('*Error !!*')
      _0xdde5ce(_0x992768)
    }
  }
)
const _0x21ec3a = {}
_0x21ec3a.pattern = 'savecontact'
_0x21ec3a.react = '\uD83D\uDD16'
_0x21ec3a.desc = 'To save group contacts'
_0x21ec3a.category = 'group'
_0x21ec3a.use = '.savecontact'
_0x21ec3a.filename = __filename
cmd(
  _0x21ec3a,
  async (
    _0x2e06e1,
    _0x14aec7,
    _0x2286d5,
    {
      from: _0x388155,
      prefix: _0x1d115d,
      l: _0x44a42c,
      quoted: _0x2783cf,
      body: _0x42b7a6,
      isCmd: _0x327613,
      command: _0x57661f,
      args: _0x2285fd,
      q: _0x5465e0,
      isGroup: _0x38c27c,
      sender: _0x9d2f5f,
      senderNumber: _0x1aa4e4,
      botNumber2: _0x3a5640,
      botNumber: _0x37d7e0,
      pushname: _0xb704c4,
      isMe: _0x413156,
      isOwner: _0x1db581,
      groupMetadata: _0x3a9a93,
      groupName: _0xfb5aac,
      participants: _0x5b3bea,
      groupAdmins: _0x2ba0ae,
      isBotAdmins: _0x3185f5,
      isAdmins: _0x4a2f6d,
      reply: _0x3e7082,
    }
  ) => {
    try {
      if (!_0x38c27c) {
        return _0x3e7082(ONLGROUP)
      }
      if (!_0x4a2f6d) {
        return _0x3e7082(ADMIN)
      }
      let _0x90d414 = await _0x2e06e1.groupMetadata(_0x2286d5.chat),
        _0x894039 = _0x5b3bea.map((_0x3774d4) => _0x3774d4.id)
      vcard = ''
      noPort = 0
      for (let _0x37578b of _0x90d414.participants) {
        vcard +=
          'BEGIN:VCARD\nVERSION:3.0\nFN:[' +
          noPort++ +
          '] +' +
          _0x37578b.id.split('@')[0] +
          '\nTEL;type=CELL;type=VOICE;waid=' +
          _0x37578b.id.split('@')[0] +
          ':+' +
          _0x37578b.id.split('@')[0] +
          '\nEND:VCARD\n'
      }
      let _0x59093f = './contacts.vcf'
      _0x3e7082(
        '\nBe patient bro, saving... ' +
          _0x90d414.participants.length +
          ' contact'
      )
      require('fs').writeFileSync(_0x59093f, vcard.trim())
      await sleep(2000)
      const _0x3ea3a8 = {
        ephemeralExpiration: 86400,
        quoted: _0x2286d5,
      }
      _0x2e06e1.sendMessage(
        _0x14aec7.chat,
        {
          document: require('fs').readFileSync(_0x59093f),
          mimetype: 'text/vcard',
          fileName: 'Contact.vcf',
          caption:
            '\nSucceed\nGroup: *' +
            _0x90d414.subject +
            '*\nContact: *' +
            _0x90d414.participants.length +
            '*',
        },
        _0x3ea3a8
      )
      require('fs').unlinkSync(_0x59093f)
      const _0x596737 = {
        text: '\u2705',
        key: _0x14aec7.key,
      }
      const _0x3b780a = { react: _0x596737 }
      await _0x2e06e1.sendMessage(_0x388155, _0x3b780a)
    } catch (_0x42d7fc) {
      _0x3e7082('*Error !!*')
      _0x44a42c(_0x42d7fc)
    }
  }
)
const _0x2595f1 = {}
_0x2595f1.pattern = 'getcontact'
_0x2595f1.react = '\uD83D\uDD16'
_0x2595f1.desc = 'To get group contacts'
_0x2595f1.category = 'group'
_0x2595f1.use = '.getcontact'
_0x2595f1.filename = __filename
cmd(
  _0x2595f1,
  async (
    _0x4058e5,
    _0x30e175,
    _0x10d16c,
    {
      from: _0x31df72,
      prefix: _0x2ac6b5,
      l: _0x4cc3c3,
      quoted: _0x1b3833,
      body: _0x40a74d,
      isCmd: _0x1965a1,
      command: _0x3a1a58,
      args: _0x5f00d1,
      q: _0x36ad9a,
      isGroup: _0x2c3d89,
      sender: _0x3cccaf,
      senderNumber: _0x2464ad,
      botNumber2: _0x473328,
      botNumber: _0x1103a2,
      pushname: _0x1460bd,
      isMe: _0x2c0472,
      isOwner: _0x5e22ae,
      groupMetadata: _0x56ef65,
      groupName: _0xa58203,
      participants: _0x3f75bf,
      groupAdmins: _0x5a1d4e,
      isBotAdmins: _0x73e985,
      isAdmins: _0x4a5ff2,
      reply: _0x10c932,
    }
  ) => {
    try {
      if (!_0x2c3d89) {
        return _0x10c932(ONLGROUP)
      }
      if (!_0x4a5ff2) {
        return _0x10c932(ADMIN)
      }
      if (!_0x30e175.mentionedJid) {
        return _0x10c932('\nUse like this\n Example:.contacttag @tag|name')
      }
      let _0x567ea9 = _0x36ad9a.split(' ')[1]
          ? _0x36ad9a.split(' ')[1]
          : 'Contact',
        _0x1cb1e2 = {
          displayName: 'Contact',
          contacts: [
            {
              displayName: _0x567ea9,
              vcard:
                'BEGIN:VCARD\nVERSION:3.0\nN:;' +
                _0x567ea9 +
                ';;;\nFN:' +
                _0x567ea9 +
                '\nitem1.TEL;waid=' +
                _0x10d16c.mentionedJid.split('@') +
                ':' +
                _0x30e175.mentionedJid[0].split('@') +
                '\nitem1.X-ABLabel:Mobile\nEND:VCARD',
            },
          ],
        }
      const _0x40b118 = { ephemeralExpiration: 86400 }
      _0x4058e5.sendMessage(
        _0x30e175.chat,
        {
          contacts: _0x1cb1e2,
          mentions: _0x3f75bf.map((_0x5af210) => _0x5af210.id),
        },
        _0x40b118
      )
      const _0x48df60 = {
        text: '\u2705',
        key: _0x30e175.key,
      }
      const _0x3c8803 = { react: _0x48df60 }
      await _0x4058e5.sendMessage(_0x31df72, _0x3c8803)
    } catch (_0x576ab1) {
      _0x10c932('*Error !!*'), _0x4cc3c3(_0x576ab1)
    }
  }
)
const _0x5d720d = {}
_0x5d720d.pattern = 'contacttag'
_0x5d720d.react = '\uD83D\uDD16'
_0x5d720d.desc = 'To tag group contacts'
_0x5d720d.category = 'group'
_0x5d720d.use = '.contacttag'
_0x5d720d.filename = __filename
cmd(
  _0x5d720d,
  async (
    _0xa32b9e,
    _0x45f35d,
    _0x42f19c,
    {
      from: _0x336f96,
      prefix: _0x50d0e5,
      l: _0x5b41e0,
      quoted: _0x3e7e86,
      body: _0x4f3972,
      isCmd: _0x23afbc,
      command: _0x306c03,
      args: _0x43074a,
      q: _0x57bcb6,
      isGroup: _0x45ad2a,
      sender: _0x15eb16,
      senderNumber: _0x21055e,
      botNumber2: _0x14166a,
      botNumber: _0x2c91bf,
      pushname: _0x7a4fd0,
      isMe: _0x2a6506,
      isOwner: _0x36cbcd,
      groupMetadata: _0x1799f6,
      groupName: _0x4c679b,
      participants: _0x14a7fa,
      groupAdmins: _0x466419,
      isBotAdmins: _0x20e615,
      isAdmins: _0x34c39e,
      reply: _0x5d3251,
    }
  ) => {
    try {
      if (!_0x45ad2a) {
        return _0x5d3251(ONLGROUP)
      }
      if (!_0x34c39e) {
        return _0x5d3251(ADMIN)
      }
      const _0x286e47 = {}
      _0x286e47.text =
        '\nGroup: *' +
        _0x1799f6.subject +
        '*\nMember: *' +
        _0x14a7fa.length +
        '*'
      izumibigpp = await _0xa32b9e.sendMessage(_0x45f35d.chat, _0x286e47, {
        quoted: _0x45f35d,
        ephemeralExpiration: 86400,
      })
      await sleep(1000)
      _0xa32b9e.sendContact(
        _0x45f35d.chat,
        _0x14a7fa.map((_0x3bf333) => _0x3bf333.id),
        izumibigpp
      )
      const _0x2a9405 = {}
      _0x2a9405.text = '\u2705'
      _0x2a9405.key = _0x45f35d.key
      const _0x15bc5a = {}
      _0x15bc5a.react = _0x2a9405
      await _0xa32b9e.sendMessage(_0x336f96, _0x15bc5a)
    } catch (_0x211551) {
      _0x5d3251('*Error !!*')
      _0x5b41e0(_0x211551)
    }
  }
)
const _0xb7f468 = {}
_0xb7f468.pattern = 'creatgc'
_0xb7f468.react = '\uD83D\uDD16'
_0xb7f468.desc = 'To create a group'
_0xb7f468.category = 'group'
_0xb7f468.use = '.creatgc'
_0xb7f468.filename = __filename
cmd(
  _0xb7f468,
  async (
    _0x365899,
    _0x5e076d,
    _0x884ef7,
    {
      from: _0x438fda,
      prefix: _0x54c734,
      l: _0x4e0089,
      quoted: _0x32246a,
      body: _0xdc1fd6,
      isCmd: _0x43c852,
      command: _0x2d153b,
      args: _0x45811c,
      q: _0x31af88,
      isGroup: _0xebf0bc,
      sender: _0x157db8,
      senderNumber: _0x44e39c,
      botNumber2: _0x3f14e2,
      botNumber: _0x54e053,
      pushname: _0x2f78a4,
      isMe: _0x1cb88b,
      isOwner: _0x5a7c90,
      groupMetadata: _0x5e5038,
      groupName: _0x289d8c,
      participants: _0x49662a,
      groupAdmins: _0x3c5f8d,
      isBotAdmins: _0x3e014a,
      isAdmins: _0x4c9b4e,
      reply: _0x8f5900,
    }
  ) => {
    try {
      if (!_0x1cb88b) {
        return await _0x8f5900(BOTOW)
      }
      if (!_0x45811c.join(' ')) {
        return _0x8f5900('Use ' + (_0x54c734 + _0x2d153b) + ' groupname')
      }
      let _0x730d88 = await _0x365899.groupCreate(_0x45811c.join(' '), []),
        _0x50e09f = await _0x365899.groupInviteCode(_0x730d88.id)
      const _0x337737 =
          '     \u300C Create Group \u300D\n\n\u25B8 Name : ' +
          _0x730d88.subject +
          '\n\u25B8 Owner : @' +
          _0x730d88.owner.split('@')[0] +
          '\n\u25B8 Creation : ' +
          moment(_0x730d88.creation * 1000)
            .tz('Asia/Kolkata')
            .format('DD/MM/YYYY HH:mm:ss') +
          '\n\nhttps://chat.whatsapp.com/' +
          _0x50e09f,
        _0x2dd110 = { quoted: _0x5e076d }
      _0x365899.sendMessage(
        _0x884ef7.chat,
        {
          text: _0x337737,
          mentions: await _0x365899.parseMention(_0x337737),
        },
        _0x2dd110
      )
      const _0x43c3d0 = {
        text: '\u2705',
        key: _0x5e076d.key,
      }
      const _0x1b28cb = { react: _0x43c3d0 }
      await _0x365899.sendMessage(_0x438fda, _0x1b28cb)
    } catch (_0x124ac2) {
      _0x8f5900('*Error !!*')
      _0x4e0089(_0x124ac2)
    }
  }
)
const _0x315e12 = {}
_0x315e12.pattern = 'hidetag'
_0x315e12.react = '\uD83D\uDD16'
_0x315e12.desc = descg
_0x315e12.category = 'group'
_0x315e12.use = '.hidetag <hi>'
_0x315e12.filename = __filename
cmd(
  _0x315e12,
  async (
    _0x2b7f05,
    _0x42823d,
    _0x5026f2,
    {
      from: _0x14300b,
      prefix: _0x22d4b0,
      l: _0x4f8dfa,
      quoted: _0x215c96,
      body: _0x5446cf,
      isCmd: _0x63e17c,
      command: _0x5b51f1,
      args: _0x5ab467,
      q: _0x596ef5,
      isGroup: _0x44b7b7,
      sender: _0x71b921,
      senderNumber: _0x4596c5,
      botNumber2: _0x3d08d3,
      botNumber: _0x19539f,
      pushname: _0x10c634,
      isMe: _0x306731,
      isOwner: _0x1bd5a2,
      groupMetadata: _0x3c4a42,
      groupName: _0x2dc216,
      participants: _0x38aea7,
      groupAdmins: _0xc507a9,
      isBotAdmins: _0x1fd103,
      isAdmins: _0x4e614c,
      reply: _0x22db60,
    }
  ) => {
    try {
      if (!_0x44b7b7) {
        return _0x22db60(ONLGROUP)
      }
      if (!_0x4e614c) {
        return _0x22db60(ADMIN)
      }
      if (!_0x596ef5) {
        return await _0x22db60(tesadtag)
      }
      _0x2b7f05.sendMessage(_0x14300b, {
        text: _0x596ef5 ? _0x596ef5 : '',
        mentions: _0x38aea7.map((_0xd64b63) => _0xd64b63.id),
      })
      const _0x5468ed = {}
      _0x5468ed.text = '\u2705'
      _0x5468ed.key = _0x42823d.key
      const _0x2c2f6e = {}
      _0x2c2f6e.react = _0x5468ed
      await _0x2b7f05.sendMessage(_0x14300b, _0x2c2f6e)
    } catch (_0x5b9a8b) {
      _0x22db60('*Error !!*'), _0x4f8dfa(_0x5b9a8b)
    }
  }
)
const _0x2b82d9 = {}
_0x2b82d9.pattern = 'tagall'
_0x2b82d9.react = '\uD83D\uDD16'
_0x2b82d9.desc = descg
_0x2b82d9.category = 'group'
_0x2b82d9.use = '.hidetag <hi>'
_0x2b82d9.filename = __filename
cmd(
  _0x2b82d9,
  async (
    _0x53a0a8,
    _0x10de79,
    _0x36393e,
    {
      from: _0x1218bc,
      prefix: _0x2a79d0,
      l: _0x27f232,
      quoted: _0x44c53a,
      body: _0x4e922c,
      isCmd: _0x4a380a,
      command: _0x5e1288,
      args: _0x23b5a6,
      q: _0x52da57,
      isGroup: _0x38b36b,
      sender: _0x9c5011,
      senderNumber: _0x58e0a6,
      botNumber2: _0x2b7452,
      botNumber: _0x2e0c8b,
      pushname: _0x4fc838,
      isMe: _0x71be2c,
      isOwner: _0x1ed27f,
      groupMetadata: _0x118de4,
      groupName: _0x20227c,
      participants: _0x235847,
      groupAdmins: _0x9b6d4c,
      isBotAdmins: _0x49b1e9,
      isAdmins: _0x2ecd6a,
      reply: _0x16db52,
    }
  ) => {
    try {
      if (!_0x38b36b) {
        return _0x16db52(ONLGROUP)
      }
      if (!_0x49b1e9) {
        return _0x16db52(botAdmin)
      }
      if (!_0x2ecd6a) {
        return _0x16db52(ADMIN)
      }
      let _0x87982c =
        ' *ＧＲＯＵＰ  ＮＯＴＩＦＹ*\n                   \n*\uD835\uDC0C\uD835\uDC04\uD835\uDC12\uD835\uDC12\uD835\uDC00\uD835\uDC06\uD835\uDC04 : ' +
        (_0x52da57 ? _0x52da57 : 'blank') +
        '*\n\n'
      for (let _0x39e19a of _0x235847) {
        _0x87982c += '\uD83D\uDD35 @' + _0x39e19a.id.split('@')[0] + '\n'
      }
      _0x53a0a8.sendMessage(_0x36393e.chat, {
        text: _0x87982c,
        mentions: _0x235847.map((_0x4d6ff6) => _0x4d6ff6.id),
      })
      const _0x810bee = {
        text: '\u2705',
        key: _0x10de79.key,
      }
      const _0x4472c2 = { react: _0x810bee }
      await _0x53a0a8.sendMessage(_0x1218bc, _0x4472c2)
    } catch (_0x44cb70) {
      _0x16db52('')
      _0x27f232(_0x44cb70)
    }
  }
)
const _0x34fce9 = {}
_0x34fce9.pattern = 'tagadmin'
_0x34fce9.react = '\uD83D\uDD16'
_0x34fce9.desc = descg
_0x34fce9.category = 'group'
_0x34fce9.use = '.tagadmin'
_0x34fce9.filename = __filename
cmd(
  _0x34fce9,
  async (
    _0x5cdc54,
    _0x13457d,
    _0x11f578,
    {
      from: _0x58f53a,
      prefix: _0xb3a91f,
      l: _0x292374,
      quoted: _0x1fee14,
      body: _0x287702,
      isCmd: _0x41d51e,
      command: _0x1ff37d,
      args: _0x3e6f47,
      q: _0x45bf65,
      isGroup: _0x4a7a86,
      sender: _0x37ecec,
      senderNumber: _0x3bfa87,
      botNumber2: _0x327ac2,
      botNumber: _0x33642e,
      pushname: _0x1959f5,
      isMe: _0x123637,
      isOwner: _0x4c0102,
      groupMetadata: _0x1d86b6,
      groupName: _0x285221,
      participants: _0x1cd5ff,
      groupAdmins: _0x2b6e8e,
      isBotAdmins: _0x2824cc,
      isAdmins: _0x56183a,
      reply: _0x26660f,
    }
  ) => {
    try {
      if (!_0x4a7a86) {
        return _0x26660f(ONLGROUP)
      }
      let _0x4035a0 =
        ' _\u2757 ' +
        _0x285221 +
        'Admins \u2757_\n                  \n*MASSAGE :* ' +
        (_0x45bf65 ? _0x45bf65 : 'blank') +
        '\n\n'
      for (let _0x17779d of _0x2b6e8e) {
        _0x4035a0 += '    '
      }
      _0x5cdc54.sendMessage(_0x58f53a, {
        text: _0x4035a0,
        mentions: _0x2b6e8e.map((_0x507880) => _0x507880.id),
      })
      const _0x82fc0d = {
        text: '\u2705',
        key: _0x13457d.key,
      }
      const _0x65751 = { react: _0x82fc0d }
      await _0x5cdc54.sendMessage(_0x58f53a, _0x65751)
    } catch (_0x260d65) {
      _0x26660f('')
      _0x292374(_0x260d65)
    }
  }
)
const _0xa972 = {}
_0xa972.pattern = 'mute'
_0xa972.react = '\uD83D\uDD16'
_0xa972.desc = 'close a group'
_0xa972.category = 'group'
_0xa972.use = '.mute'
_0xa972.filename = __filename
cmd(
  _0xa972,
  async (
    _0x1f653a,
    _0x21869f,
    _0x29b1bd,
    {
      from: _0x2bb132,
      prefix: _0xfa93a,
      l: _0x4edc96,
      quoted: _0x369391,
      body: _0x491f44,
      isCmd: _0x2149f7,
      command: _0x56b36c,
      args: _0x320b31,
      q: _0x7f577a,
      isGroup: _0x45325c,
      sender: _0x412f97,
      senderNumber: _0x13c843,
      botNumber2: _0x1d7ebc,
      botNumber: _0x358dff,
      pushname: _0x7124e3,
      isMe: _0x3da7cd,
      isOwner: _0x83929b,
      groupMetadata: _0x19875a,
      groupName: _0x384321,
      participants: _0xfaa9f6,
      groupAdmins: _0x5894a5,
      isBotAdmins: _0xfffe7a,
      isAdmins: _0x52a91e,
      reply: _0x4ca1cb,
    }
  ) => {
    try {
      if (!_0x45325c) {
        return _0x4ca1cb(ONLGROUP)
      }
      if (!_0xfffe7a) {
        return _0x4ca1cb(botAdmin)
      }
      if (!_0x52a91e) {
        return _0x4ca1cb(ADMIN)
      }
      await _0x1f653a.groupSettingUpdate(_0x21869f.chat, 'announcement')
      const _0x59082b = await _0x1f653a.sendMessage(_0x21869f.chat.G_MUTE),
        _0x5ce297 = {
          text: '\u2705',
          key: _0x21869f.key,
        }
      const _0x52f63c = { react: _0x5ce297 }
      await _0x1f653a.sendMessage(_0x2bb132, _0x52f63c)
    } catch (_0x59cb79) {
      _0x4ca1cb('\uD83D\uDED1 GROUP IS CLOSED MY BOT OWNER'),
        _0x4edc96(_0x59cb79)
    }
  }
)
const _0x1b284d = {}
_0x1b284d.pattern = 'unmute'
_0x1b284d.react = '\uD83D\uDD16'
_0x1b284d.desc = 'open a group'
_0x1b284d.category = 'group'
_0x1b284d.use = '.unmute'
_0x1b284d.filename = __filename
cmd(
  _0x1b284d,
  async (
    _0x1d347b,
    _0x524167,
    _0x52e912,
    {
      from: _0x1f08fa,
      prefix: _0xba7f21,
      l: _0x435815,
      quoted: _0x3c85a7,
      body: _0x10b070,
      isCmd: _0x2b9ec4,
      command: _0x574822,
      args: _0x348e4a,
      q: _0x289ae1,
      isGroup: _0x42bf40,
      sender: _0x4cead7,
      senderNumber: _0x1dd12b,
      botNumber2: _0x141ab7,
      botNumber: _0x1e0fec,
      pushname: _0x1426c5,
      isMe: _0x3782a0,
      isOwner: _0x3b656c,
      groupMetadata: _0xf059cc,
      groupName: _0x7311ee,
      participants: _0x1a1373,
      groupAdmins: _0x2f14ee,
      isBotAdmins: _0x45ce03,
      isAdmins: _0x48e1af,
      reply: _0x1e4bf0,
    }
  ) => {
    try {
      if (!_0x42bf40) {
        return _0x1e4bf0(ONLGROUP)
      }
      if (!_0x45ce03) {
        return _0x1e4bf0(botAdmin)
      }
      if (!_0x48e1af) {
        return _0x1e4bf0(ADMIN)
      }
      await _0x1d347b.groupSettingUpdate(_0x524167.chat, 'not_announcement')
      const _0x255125 = await _0x1d347b.sendMessage(_0x524167.chat.G_UNMUTE),
        _0x5873e6 = {
          text: '\u2705',
          key: _0x524167.key,
        }
      const _0x4549db = { react: _0x5873e6 }
      await _0x1d347b.sendMessage(_0x1f08fa, _0x4549db)
    } catch (_0x32555e) {
      _0x1e4bf0('\uD83D\uDED1 GROUP IS OPEN MY BOT OWNER')
      _0x435815(_0x32555e)
    }
  }
)
const _0x4a2017 = {}
_0x4a2017.pattern = 'kick'
_0x4a2017.react = '\uD83D\uDD16'
_0x4a2017.desc = 'kick a member'
_0x4a2017.category = 'group'
_0x4a2017.use = '.kick'
_0x4a2017.filename = __filename
cmd(
  _0x4a2017,
  async (
    _0x301a45,
    _0x548003,
    _0x57de07,
    {
      from: _0x390c1d,
      prefix: _0x4b1f49,
      l: _0x31077b,
      quoted: _0x3d6b45,
      body: _0x3d5cb3,
      isCmd: _0x1603e4,
      command: _0xc0340f,
      args: _0x341f3a,
      q: _0x1a87c1,
      isGroup: _0x47d427,
      sender: _0x46a28a,
      senderNumber: _0x4ada8b,
      botNumber2: _0x3db5f4,
      botNumber: _0x10e50a,
      pushname: _0x4f87a9,
      isMe: _0xebd1d5,
      isOwner: _0x24d994,
      groupMetadata: _0x50a24f,
      groupName: _0x311741,
      participants: _0x4eeec0,
      groupAdmins: _0x348de1,
      isBotAdmins: _0x210ae2,
      isAdmins: _0x2bd753,
      reply: _0x15f579,
    }
  ) => {
    try {
      if (!_0x47d427) {
        return _0x15f579(ONLGROUP)
      }
      if (!_0x210ae2) {
        return _0x15f579(botAdmin)
      }
      if (!_0x2bd753) {
        return _0x15f579(ADMIN)
      }
      let _0x20d0ce = _0x548003.mentionedJid
        ? _0x548003.mentionedJid
        : _0x548003.quoted
        ? _0x548003.quoted.sender
        : _0x1a87c1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x301a45
        .groupParticipantsUpdate(_0x548003.chat, [_0x20d0ce], 'remove')
        .then((_0x4f75d4) => _0x15f579(jsonformat(_0x4f75d4)))
        .catch((_0x3d02f1) => _0x15f579(jsonformat(_0x3d02f1)))
      const _0x4eace9 = {
        text: '\u2705',
        key: _0x548003.key,
      }
      const _0x1a6464 = { react: _0x4eace9 }
      await _0x301a45.sendMessage(_0x390c1d, _0x1a6464)
    } catch (_0x18a8fd) {
      _0x15f579('*Error !!*')
      _0x31077b(_0x18a8fd)
    }
  }
)
const _0x14e16d = {}
_0x14e16d.pattern = 'add'
_0x14e16d.react = '\uD83D\uDD16'
_0x14e16d.desc = 'Add a member'
_0x14e16d.category = 'group'
_0x14e16d.use = '.add'
_0x14e16d.filename = __filename
cmd(
  _0x14e16d,
  async (
    _0x20941d,
    _0x153c4d,
    _0x387073,
    {
      from: _0x16ed5f,
      prefix: _0x452472,
      l: _0x15d9bd,
      quoted: _0x3b6d2f,
      body: _0x1a9807,
      isCmd: _0x2c56bc,
      command: _0x3f5c27,
      args: _0x57f4e0,
      q: _0x4e4f02,
      isGroup: _0x2f2829,
      sender: _0x90168a,
      senderNumber: _0x1bfe2a,
      botNumber2: _0x357189,
      botNumber: _0x2fef32,
      pushname: _0x5ba3c4,
      isMe: _0x316e2b,
      isOwner: _0x53d258,
      groupMetadata: _0xf678cf,
      groupName: _0x4a9b7f,
      participants: _0x12140d,
      groupAdmins: _0x403543,
      isBotAdmins: _0x1648c6,
      isAdmins: _0xfea5e3,
      reply: _0x3ace73,
    }
  ) => {
    try {
      if (!_0x1648c6) {
        return _0x3ace73(botAdmin)
      }
      let _0x487029 = _0x153c4d.quoted
        ? _0x153c4d.quoted.sender
        : _0x4e4f02.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x20941d
        .groupParticipantsUpdate(_0x153c4d.chat, [_0x487029], 'add')
        .then((_0x50bebd) => _0x3ace73(jsonformat(_0x50bebd)))
        .catch((_0x56c986) => _0x3ace73(jsonformat(_0x56c986)))
      const _0x48b9f5 = {
        text: '\u2705',
        key: _0x153c4d.key,
      }
      const _0x1a9d35 = { react: _0x48b9f5 }
      await _0x20941d.sendMessage(_0x16ed5f, _0x1a9d35)
    } catch (_0x4f348a) {
      _0x3ace73('*Error !!*')
      _0x15d9bd(_0x4f348a)
    }
  }
)
const _0x29dada = {}
_0x29dada.pattern = 'promote'
_0x29dada.react = '\uD83D\uDD16'
_0x29dada.desc = 'promote admin to a member'
_0x29dada.category = 'group'
_0x29dada.use = '.promote'
_0x29dada.filename = __filename
cmd(
  _0x29dada,
  async (
    _0x1c4e77,
    _0x77799f,
    _0x2fcd52,
    {
      from: _0xf54c7f,
      prefix: _0x536a44,
      l: _0x3f99cf,
      quoted: _0x37f175,
      body: _0x529bb8,
      isCmd: _0x481f71,
      command: _0x1de273,
      args: _0x54890c,
      q: _0x5521e2,
      isGroup: _0x255fbc,
      sender: _0x51fd46,
      senderNumber: _0x570817,
      botNumber2: _0x17dd11,
      botNumber: _0x56bcd8,
      pushname: _0x4e8337,
      isMe: _0x46aab8,
      isOwner: _0x152c93,
      groupMetadata: _0x5e516b,
      groupName: _0x58ac79,
      participants: _0xee9c3a,
      groupAdmins: _0x19f356,
      isBotAdmins: _0x1ef745,
      isAdmins: _0x280987,
      reply: _0x19b657,
    }
  ) => {
    try {
      if (!_0x255fbc) {
        return _0x19b657(ONLGROUP)
      }
      if (!_0x1ef745) {
        return _0x19b657(botAdmin)
      }
      if (!_0x280987) {
        return _0x19b657(ADMIN)
      }
      let _0x38b3bc = _0x77799f.mentionedJid
        ? _0x77799f.mentionedJid
        : _0x77799f.quoted
        ? _0x77799f.quoted.sender
        : _0x5521e2.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x1c4e77
        .groupParticipantsUpdate(_0x77799f.chat, [_0x38b3bc], 'promote')
        .then((_0xea3506) => _0x19b657(jsonformat(_0xea3506)))
        .catch((_0x150a85) => _0x19b657(jsonformat(_0x150a85)))
      _0x19b657('\uD83D\uDED1 GROUP ADMIN PROMOTE BY MY BOT OWNER')
      const _0x183213 = {
        text: '\u2705',
        key: _0x77799f.key,
      }
      const _0x2c1bb1 = { react: _0x183213 }
      await _0x1c4e77.sendMessage(_0xf54c7f, _0x2c1bb1)
    } catch (_0x319664) {
      _0x19b657('*Error !!*')
      _0x3f99cf(_0x319664)
    }
  }
)
const _0x219f48 = {}
_0x219f48.pattern = 'demote'
_0x219f48.react = '\uD83D\uDD16'
_0x219f48.desc = 'demote admin to a member'
_0x219f48.category = 'group'
_0x219f48.use = '.demote'
_0x219f48.filename = __filename
cmd(
  _0x219f48,
  async (
    _0x4e9a3e,
    _0x32a9f9,
    _0x23eee7,
    {
      from: _0x30411d,
      prefix: _0x1bfd77,
      l: _0x2f48f9,
      quoted: _0x2a108e,
      body: _0x338905,
      isCmd: _0x45b566,
      command: _0x41eb22,
      args: _0x1c1ba8,
      q: _0xcad783,
      isGroup: _0x25331f,
      sender: _0x166266,
      senderNumber: _0x23933e,
      botNumber2: _0x408f6f,
      botNumber: _0x2bfaeb,
      pushname: _0x467fe5,
      isMe: _0x150b14,
      isOwner: _0x2cae5d,
      groupMetadata: _0x247d35,
      groupName: _0x1a9fe8,
      participants: _0x2d96b5,
      groupAdmins: _0x1c1710,
      isBotAdmins: _0x92633b,
      isAdmins: _0x589bbf,
      reply: _0x4dbc2c,
    }
  ) => {
    try {
      if (!_0x25331f) {
        return _0x4dbc2c(ONLGROUP)
      }
      if (!_0x92633b) {
        return _0x4dbc2c(botAdmin)
      }
      if (!_0x589bbf) {
        return _0x4dbc2c(ADMIN)
      }
      let _0x13b2c6 = _0x32a9f9.mentionedJid
        ? _0x32a9f9.mentionedJid
        : _0x32a9f9.quoted
        ? _0x32a9f9.quoted.sender
        : _0xcad783.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      await _0x4e9a3e
        .groupParticipantsUpdate(_0x32a9f9.chat, [_0x13b2c6], 'demote')
        .then((_0x1a8d87) => _0x4dbc2c(jsonformat(_0x1a8d87)))
        .catch((_0x268a78) => _0x4dbc2c(jsonformat(_0x268a78)))
      _0x4dbc2c('\uD83D\uDED1 GROUP ADMIN DEMOTE BY MY BOT OWNER')
      const _0x2151c8 = {
        text: '\u2705',
        key: _0x32a9f9.key,
      }
      const _0x273d6d = { react: _0x2151c8 }
      await _0x4e9a3e.sendMessage(_0x30411d, _0x273d6d)
    } catch (_0x5dc885) {
      _0x4dbc2c('*Error !!*')
      _0x2f48f9(_0x5dc885)
    }
  }
)
const _0x24c78c = {}
_0x24c78c.pattern = 'setname'
_0x24c78c.react = '\uD83D\uDD16'
_0x24c78c.desc = 'To change group name'
_0x24c78c.category = 'group'
_0x24c78c.use = '.setname'
_0x24c78c.filename = __filename
cmd(
  _0x24c78c,
  async (
    _0x77f69a,
    _0x15dd11,
    _0x2ee8ce,
    {
      from: _0x284339,
      prefix: _0x5ba54d,
      l: _0x346f56,
      quoted: _0x2957e5,
      body: _0x51e00c,
      isCmd: _0x23ac16,
      command: _0x4dbf4a,
      args: _0x4b2e85,
      q: _0x34f733,
      isGroup: _0x2a290f,
      sender: _0x3c0f2f,
      senderNumber: _0x4d6de6,
      botNumber2: _0x2e03a3,
      botNumber: _0x439d77,
      pushname: _0x3e2de5,
      isMe: _0x46afeb,
      isOwner: _0x4a542e,
      groupMetadata: _0x4e8468,
      groupName: _0x24cf4b,
      participants: _0x4a69e8,
      groupAdmins: _0x4c9bbb,
      isBotAdmins: _0xe007b5,
      isAdmins: _0x5542c4,
      reply: _0x1e237e,
    }
  ) => {
    try {
      if (!_0x2a290f) {
        return _0x1e237e(ONLGROUP)
      }
      if (!_0xe007b5) {
        return _0x1e237e(botAdmin)
      }
      if (!_0x5542c4) {
        return _0x1e237e(ADMIN)
      }
      await _0x77f69a
        .groupUpdateSubject(_0x15dd11.chat, _0x34f733)
        .then((_0x5aca65) => _0x1e237e(mess.success))
        .catch((_0x981eae) => _0x1e237e(jsonformat(_0x981eae)))
      _0x1e237e('*\u2705 SUCCESSFULLY CHANGED GROUP NAME*')
      const _0x53286d = {}
      _0x53286d.text = '\u2705'
      _0x53286d.key = _0x15dd11.key
      const _0x38e8c7 = {}
      _0x38e8c7.react = _0x53286d
      await _0x77f69a.sendMessage(_0x284339, _0x38e8c7)
    } catch (_0x1dd7e7) {
      _0x1e237e('*Error !!*')
      _0x346f56(_0x1dd7e7)
    }
  }
)
const _0x410458 = {}
_0x410458.pattern = 'setdesc'
_0x410458.react = '\uD83D\uDD16'
_0x410458.desc = 'To change group description'
_0x410458.category = 'group'
_0x410458.use = '.setdesc'
_0x410458.filename = __filename
cmd(
  _0x410458,
  async (
    _0x400c33,
    _0x3dbed5,
    _0x3a53fd,
    {
      from: _0x43e9ee,
      prefix: _0x116605,
      l: _0x89db4e,
      quoted: _0x3a9b02,
      body: _0x1fa15a,
      isCmd: _0x43e263,
      command: _0x22f473,
      args: _0x57d143,
      q: _0x19f164,
      isGroup: _0x527e8a,
      sender: _0x2d5bbc,
      senderNumber: _0x5bd42e,
      botNumber2: _0x15e338,
      botNumber: _0x2ed923,
      pushname: _0x10dbde,
      isMe: _0x11366f,
      isOwner: _0x5141b1,
      groupMetadata: _0x2be661,
      groupName: _0x465453,
      participants: _0x56682d,
      groupAdmins: _0x205978,
      isBotAdmins: _0x3287ec,
      isAdmins: _0x5b867c,
      reply: _0x5b52b0,
    }
  ) => {
    try {
      if (!_0x527e8a) {
        return _0x5b52b0(ONLGROUP)
      }
      if (!_0x3287ec) {
        return _0x5b52b0(botAdmin)
      }
      if (!_0x5b867c) {
        return _0x5b52b0(ADMIN)
      }
      await _0x400c33
        .groupUpdateDescription(_0x3dbed5.chat, _0x19f164)
        .then((_0x475dec) => _0x5b52b0(mess.success))
        .catch((_0x2f7c9d) => _0x5b52b0(jsonformat(_0x2f7c9d)))
      _0x5b52b0('*\u2705 SUCCESSFULLY CHANGED GROUP DESCRIPTION*')
      const _0x399d98 = {}
      _0x399d98.text = '\u2705'
      _0x399d98.key = _0x3dbed5.key
      const _0x2dd5ba = {}
      _0x2dd5ba.react = _0x399d98
      await _0x400c33.sendMessage(_0x43e9ee, _0x2dd5ba)
    } catch (_0xfab56) {
      _0x5b52b0('*Error !!*')
      _0x89db4e(_0xfab56)
    }
  }
)
const _0x5dae98 = {}
_0x5dae98.pattern = 'ephemeral'
_0x5dae98.react = '\uD83D\uDD16'
_0x5dae98.desc = 'To desappear & appear messages'
_0x5dae98.category = 'group'
_0x5dae98.use = '.ephemeral'
_0x5dae98.filename = __filename
cmd(
  _0x5dae98,
  async (
    _0x4a9f57,
    _0x4c0722,
    _0x43c03a,
    {
      from: _0x537ce4,
      prefix: _0x430aa6,
      l: _0x210656,
      quoted: _0x1b25f7,
      body: _0x26c438,
      isCmd: _0x5ba31f,
      command: _0x6f0dd2,
      args: _0x4bd651,
      q: _0x226da3,
      isGroup: _0x5d535c,
      sender: _0x5b6ca0,
      senderNumber: _0x6ca1a7,
      botNumber2: _0x4e3bc0,
      botNumber: _0x4a5969,
      pushname: _0x4a453b,
      isMe: _0x169bcc,
      isOwner: _0x3816b5,
      groupMetadata: _0x2b9831,
      groupName: _0x3b73e4,
      participants: _0x56189d,
      groupAdmins: _0x406a7c,
      isBotAdmins: _0x1e2322,
      isAdmins: _0x44d5a6,
      reply: _0x147f10,
    }
  ) => {
    try {
      if (!_0x5d535c) {
        return _0x147f10(ONLGROUP)
      }
      if (!_0x1e2322) {
        return _0x147f10(botAdmin)
      }
      if (!_0x44d5a6) {
        return _0x147f10(ADMIN)
      }
      if (!_0x226da3) {
        return await _0x147f10(imgmsg)
      }
      if (_0x4bd651[0] === 'enable') {
        const _0x541991 = { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }
        await _0x4a9f57
          .sendMessage(_0x4c0722.chat, _0x541991)
          .then((_0x28840d) => _0x147f10(jsonformat(_0x28840d)))
          .catch((_0x4cf898) => _0x147f10(jsonformat(_0x4cf898)))
      } else {
        if (_0x4bd651[0] === 'disable') {
          const _0x13d6bb = { disappearingMessagesInChat: false }
          await _0x4a9f57
            .sendMessage(_0x4c0722.chat, _0x13d6bb)
            .then((_0x3534a5) => _0x147f10(jsonformat(_0x3534a5)))
            .catch((_0x137b6a) => _0x147f10(jsonformat(_0x137b6a)))
        }
      }
      const _0x235e76 = {}
      _0x235e76.text = '\u2705'
      _0x235e76.key = _0x4c0722.key
      const _0x29ac2a = {}
      _0x29ac2a.react = _0x235e76
      await _0x4a9f57.sendMessage(_0x537ce4, _0x29ac2a)
    } catch (_0x3627ed) {
      _0x147f10('*Error !!*')
      _0x210656(_0x3627ed)
    }
  }
)
const _0x3e8c9a = {}
_0x3e8c9a.pattern = 'autoreadsw'
_0x3e8c9a.react = '\uD83D\uDD16'
_0x3e8c9a.desc = 'To desappear & appear messages'
_0x3e8c9a.category = 'group'
_0x3e8c9a.use = '.autoreadsw'
_0x3e8c9a.filename = __filename
cmd(
  _0x3e8c9a,
  async (
    _0x376c9c,
    _0x252219,
    _0x560bae,
    {
      from: _0x1a68a1,
      prefix: _0x258673,
      l: _0x59e757,
      quoted: _0x435e25,
      body: _0x51cc36,
      isCmd: _0x400b69,
      command: _0x240bdb,
      args: _0x44d724,
      q: _0xdfdce2,
      isGroup: _0x4a9b68,
      sender: _0x29b9de,
      senderNumber: _0x28b5b3,
      botNumber2: _0x5e8df7,
      botNumber: _0x1d80f1,
      pushname: _0x1582f9,
      isMe: _0x10538e,
      isOwner: _0x359586,
      groupMetadata: _0x3953cd,
      groupName: _0x1419b3,
      participants: _0x4f7013,
      groupAdmins: _0x198e5a,
      isBotAdmins: _0x3b372a,
      isAdmins: _0xece58b,
      reply: _0x342179,
    }
  ) => {
    try {
      if (_0x44d724[0] == 'on') {
        if (autoreadsw) {
          return _0x342179('*Already activated!*')
        }
        autoreadsw = true
        _0x342179('*Successfully activate auto read status*')
      } else {
        if (_0x44d724[0] == 'off') {
          if (!autoreadsw) {
            return _0x342179('*Already deactivated!*')
          }
          autoreadsw = false
          _0x342179('*Successfully turn off auto read status*')
        } else {
          _0x342179('Choose on or off!')
        }
      }
      const _0x1002d0 = {
        text: '\u2705',
        key: _0x252219.key,
      }
      const _0x22a918 = { react: _0x1002d0 }
      await _0x376c9c.sendMessage(_0x1a68a1, _0x22a918)
    } catch (_0x34e18f) {
      _0x342179('*Error !!*')
      _0x59e757(_0x34e18f)
    }
  }
)
const _0x2cac08 = {}
_0x2cac08.pattern = 'delete'
_0x2cac08.react = '\uD83D\uDD16'
_0x2cac08.desc = 'To delete message'
_0x2cac08.category = 'group'
_0x2cac08.use = '.delete'
_0x2cac08.filename = __filename
cmd(
  _0x2cac08,
  async (
    _0x304956,
    _0x2e0a2b,
    _0x5d4d2a,
    {
      from: _0x37ddbf,
      prefix: _0x7647ad,
      l: _0x2fdb9e,
      quoted: _0x5400e2,
      body: _0x249d55,
      isCmd: _0x3f0c71,
      command: _0x118674,
      args: _0x594db2,
      q: _0x289e57,
      isGroup: _0x2361ad,
      sender: _0x40ce15,
      senderNumber: _0x76ca08,
      botNumber2: _0x160961,
      botNumber: _0x1cfa97,
      pushname: _0x4943dc,
      isMe: _0x537650,
      isOwner: _0x5b39b4,
      groupMetadata: _0x2fbd14,
      groupName: _0x2dab8f,
      participants: _0x41a59f,
      groupAdmins: _0x5e91b,
      isBotAdmins: _0x1b1162,
      isAdmins: _0x2b4904,
      reply: _0x34467d,
    }
  ) => {
    try {
      if (!_0x5d4d2a.quoted) {
        throw false
      }
      let {
          chat: _0x5d6390,
          fromMe: _0x1834c3,
          id: _0x5c872d,
          isBaileys: _0x3bd30f,
        } = _0x5d4d2a.quoted,
        _0x22e5d1 = 'The message was not sent by a bot!'
      _0x304956.sendMessage(_0x5d4d2a.chat, {
        delete: {
          remoteJid: _0x5d4d2a.chat,
          fromMe: true,
          id: _0x5d4d2a.quoted.id,
          participant: _0x5d4d2a.quoted.sender,
        },
      })
      const _0x36c1e5 = {
        text: '\u2705',
        key: _0x2e0a2b.key,
      }
      const _0x1a0f89 = { react: _0x36c1e5 }
      await _0x304956.sendMessage(_0x37ddbf, _0x1a0f89)
    } catch (_0x186958) {
      _0x34467d('*Error !!*')
      _0x2fdb9e(_0x186958)
    }
  }
)
const _0x3d35a1 = {}
_0x3d35a1.pattern = 'join'
_0x3d35a1.react = '\uD83D\uDD16'
_0x3d35a1.desc = 'To join a group'
_0x3d35a1.category = 'group'
_0x3d35a1.use = '.join'
_0x3d35a1.filename = __filename
cmd(
  _0x3d35a1,
  async (
    _0x470c54,
    _0x4121e4,
    _0x252271,
    {
      from: _0x146bb1,
      prefix: _0x2e6068,
      l: _0x3055d4,
      quoted: _0x5ef611,
      body: _0xc2470f,
      isCmd: _0x5acdb9,
      command: _0xd099db,
      args: _0x3e0bba,
      q: _0x5644d0,
      isGroup: _0x1be156,
      sender: _0x4e0d49,
      senderNumber: _0x516efd,
      botNumber2: _0x4890d2,
      botNumber: _0x33281c,
      pushname: _0xde4b8c,
      isMe: _0x5d9b7d,
      isOwner: _0x1edb7d,
      groupMetadata: _0x13a90f,
      groupName: _0x5229be,
      participants: _0x12e073,
      groupAdmins: _0x489fba,
      isBotAdmins: _0x518f9d,
      isAdmins: _0x518f55,
      reply: _0x496be0,
    }
  ) => {
    try {
      if (!_0x5d9b7d) {
        return await _0x496be0(BOTOW)
      }
      if (!_0x5644d0) {
        throw 'Enter the Group Link!'
      }
      if (!isUrl(_0x3e0bba[0]) && !_0x3e0bba[0].includes('whatsapp.com')) {
        throw 'Invalid Link!'
      }
      _0x496be0()
      let _0x389a66 = _0x3e0bba[0].split('https://chat.whatsapp.com/')[1]
      await _0x470c54
        .groupAcceptInvite(_0x389a66)
        .then((_0x3a938a) => _0x496be0(jsonformat(_0x3a938a)))
        .catch((_0x4cffe3) => _0x496be0(jsonformat(_0x4cffe3)))
      const _0x33e63d = {
        text: '\u2705',
        key: _0x4121e4.key,
      }
      const _0xb2a1e1 = { react: _0x33e63d }
      await _0x470c54.sendMessage(_0x146bb1, _0xb2a1e1)
    } catch (_0x122f28) {
      _0x496be0('*Error !!*')
      _0x3055d4(_0x122f28)
    }
  }
)
const _0x87fcd9 = {}
_0x87fcd9.pattern = 'leave'
_0x87fcd9.react = '\uD83D\uDD16'
_0x87fcd9.desc = 'To leave a group'
_0x87fcd9.category = 'group'
_0x87fcd9.use = '.leave'
_0x87fcd9.filename = __filename
cmd(
  _0x87fcd9,
  async (
    _0x3e9338,
    _0x2b47a2,
    _0x431e64,
    {
      from: _0x10c032,
      prefix: _0x44e071,
      l: _0x505bbc,
      quoted: _0x341b6d,
      body: _0x5ed917,
      isCmd: _0x14ff9f,
      command: _0x3bcd72,
      args: _0x485314,
      q: _0x23a3f1,
      isGroup: _0x2393a4,
      sender: _0x532ad6,
      senderNumber: _0xb34519,
      botNumber2: _0x501b5b,
      botNumber: _0x12ec76,
      pushname: _0x5e6d54,
      isMe: _0x596a47,
      isOwner: _0x92614f,
      groupMetadata: _0x2340a4,
      groupName: _0x136a53,
      participants: _0x143c6b,
      groupAdmins: _0x22e84c,
      isBotAdmins: _0x5ccd42,
      isAdmins: _0x3f4e71,
      reply: _0x155088,
    }
  ) => {
    try {
      await _0x3e9338
        .groupLeave(_0x2b47a2.chat)
        .then((_0x5ef8c1) => _0x155088(jsonformat(_0x5ef8c1)))
        .catch((_0x5244aa) => _0x155088(jsonformat(_0x5244aa)))
      const _0x500c11 = {
        text: '\u2705',
        key: _0x2b47a2.key,
      }
      const _0x5bf513 = { react: _0x500c11 }
      await _0x3e9338.sendMessage(_0x10c032, _0x5bf513)
    } catch (_0x1b2b3b) {
      _0x155088('*Error !!*')
      _0x505bbc(_0x1b2b3b)
    }
  }
)
