const { cmd, commands } = require('../lib/command'),
  config = require('../settings')
var { get_set, input_set } = require('../lib/database/set_db')
const {
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
var BOTOW = ''
if (config.LANG === 'SI') {
  BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
} else {
  BOTOW = "*You are not bot's owner or moderator !*"
}
const _0x423172 = {}
_0x423172.pattern = 'autovoice'
_0x423172.react = '\uD83D\uDDE3️'
_0x423172.desc = ''
_0x423172.category = ''
_0x423172.use = '.autovoice on/off'
_0x423172.filename = __filename
cmd(
  _0x423172,
  async (
    _0x5351f,
    _0x1672b5,
    _0x87ad5f,
    {
      from: _0x44b21f,
      prefix: _0x2b8df0,
      l: _0x264d07,
      quoted: _0x38fe7a,
      body: _0x5b3039,
      isCmd: _0x2e4de5,
      command: _0x46e632,
      args: _0x1e8cc1,
      q: _0x40ee86,
      isGroup: _0x468c1e,
      sender: _0x20a0fe,
      senderNumber: _0x408669,
      botNumber2: _0x28c720,
      botNumber: _0xa242da,
      pushname: _0x2fd120,
      isMe: _0x591b3a,
      isOwner: _0x5a75d2,
      groupMetadata: _0x74939b,
      groupName: _0x3bb463,
      participants: _0x21f3f5,
      groupAdmins: _0x4d9855,
      isBotAdmins: _0x490ce0,
      isAdmins: _0x492d3d,
      reply: _0x14d81a,
      config: _0x2613fe,
    }
  ) => {
    try {
      if (!_0x591b3a) {
        return await _0x14d81a(BOTOW)
      }
      if (_0x40ee86 == 'on') {
        if (_0x2613fe.AUTO_VOICE == 'true') {
          return _0x14d81a('already on ')
        }
        return (
          await input_set('AUTO_VOICE', 'true'),
          _0x14d81a('autovoice turned on')
        )
      }
      if (_0x40ee86 == 'off') {
        if (_0x2613fe.AUTO_VOICE !== 'true') {
          return _0x14d81a('already off')
        }
        return (
          await input_set('AUTO_VOICE', 'false'),
          _0x14d81a('autovoice turned off')
        )
      }
    } catch (_0x31ee53) {
      _0x14d81a('*Error !!*'), _0x264d07(_0x31ee53)
    }
  }
)
const _0x5c806d = {}
_0x5c806d.pattern = 'autosticker'
_0x5c806d.react = '\uD83D\uDDE3️'
_0x5c806d.desc = ''
_0x5c806d.category = ''
_0x5c806d.use = '.autosticmer on/off'
_0x5c806d.filename = __filename
cmd(
  _0x5c806d,
  async (
    _0x363934,
    _0x32f36a,
    _0x26f817,
    {
      from: _0x5d6980,
      prefix: _0x2ffb35,
      l: _0x3b5fad,
      quoted: _0x39da46,
      body: _0x23ce07,
      isCmd: _0x280630,
      command: _0x5e7e1b,
      args: _0x3bdee1,
      q: _0x293347,
      isGroup: _0x26cb07,
      sender: _0x501eb6,
      senderNumber: _0x25b3c2,
      botNumber2: _0x3f722f,
      botNumber: _0x29d2f4,
      pushname: _0xc4ef94,
      isMe: _0x320163,
      isOwner: _0x44b1f0,
      groupMetadata: _0x3d043b,
      groupName: _0x4414f5,
      participants: _0x26d1d1,
      groupAdmins: _0x4fd961,
      isBotAdmins: _0xfe18ae,
      isAdmins: _0x3aa82,
      reply: _0x346d31,
      config: _0x1a773d,
    }
  ) => {
    try {
      if (!_0x320163) {
        return await _0x346d31(BOTOW)
      }
      if (_0x293347 == 'on') {
        if (_0x1a773d.AUTO_STICKER == 'true') {
          return _0x346d31('already on ')
        }
        return (
          await input_set('AUTO_STICKER', 'true'),
          _0x346d31('autosticker turned on')
        )
      }
      if (_0x293347 == 'off') {
        if (_0x1a773d.AUTO_STICKER !== 'true') {
          return _0x346d31('already off')
        }
        return (
          await input_set('AUTO_STICKER', 'false'),
          _0x346d31('autosticker turned off')
        )
      }
    } catch (_0x2ce4f9) {
      _0x346d31('*Error !!*'), _0x3b5fad(_0x2ce4f9)
    }
  }
)
const _0x563371 = {}
_0x563371.pattern = 'autobio'
_0x563371.react = '\uD83D\uDDE3️'
_0x563371.desc = ''
_0x563371.category = ''
_0x563371.use = '.autobio on/off'
_0x563371.filename = __filename
cmd(
  _0x563371,
  async (
    _0xecda7b,
    _0xf01782,
    _0x39cc67,
    {
      from: _0x2cddd1,
      prefix: _0x4dc55e,
      l: _0x5da5bd,
      quoted: _0x4a57af,
      body: _0xe0e634,
      isCmd: _0x56ec02,
      command: _0xd6b03a,
      args: _0xdf43cd,
      q: _0x3482fe,
      isGroup: _0x4852ff,
      sender: _0x452d22,
      senderNumber: _0x37bd2d,
      botNumber2: _0x479a1c,
      botNumber: _0x36d4b4,
      pushname: _0x149e4a,
      isMe: _0x2ba37f,
      isOwner: _0x1e9b6b,
      groupMetadata: _0x43837d,
      groupName: _0x7db4ae,
      participants: _0x17130f,
      groupAdmins: _0x47ab28,
      isBotAdmins: _0x51ea16,
      isAdmins: _0x22efd2,
      reply: _0x495fac,
      config: _0x6a5244,
    }
  ) => {
    try {
      if (!_0x2ba37f) {
        return await _0x495fac(BOTOW)
      }
      if (_0x3482fe == 'on') {
        if (_0x6a5244.AUTO_BIO == 'true') {
          return _0x495fac('already on ')
        }
        return (
          await input_set('AUTO_BIO', 'true'), _0x495fac('autobio turned on')
        )
      }
      if (_0x3482fe == 'off') {
        if (_0x6a5244.AUTO_BIO !== 'true') {
          return _0x495fac('already off')
        }
        return (
          await input_set('AUTO_BIO', 'false'), _0x495fac('autobio turned off')
        )
      }
    } catch (_0x214657) {
      _0x495fac('*Error !!*'), _0x5da5bd(_0x214657)
    }
  }
)
const _0x56be99 = {}
_0x56be99.pattern = 'autowelcome'
_0x56be99.react = '\uD83D\uDDE3️'
_0x56be99.desc = ''
_0x56be99.category = ''
_0x56be99.use = '.autowelcome on/off'
_0x56be99.filename = __filename
cmd(
  _0x56be99,
  async (
    _0x2bc69b,
    _0x2de8c5,
    _0x23e62f,
    {
      from: _0x29b20d,
      prefix: _0x500cf2,
      l: _0x5a07ed,
      quoted: _0xd1a7fd,
      body: _0x439b09,
      isCmd: _0x59a8b6,
      command: _0x2bde19,
      args: _0x422510,
      q: _0x3f1f0c,
      isGroup: _0x59b9f0,
      sender: _0x5c9967,
      senderNumber: _0x3e67fd,
      botNumber2: _0xffbd7d,
      botNumber: _0x5a6920,
      pushname: _0x2adaf5,
      isMe: _0x569e1e,
      isOwner: _0x2b01bf,
      groupMetadata: _0x274748,
      groupName: _0x546c01,
      participants: _0x394b38,
      groupAdmins: _0x2f4138,
      isBotAdmins: _0x5156b5,
      isAdmins: _0x4ae106,
      reply: _0x388c57,
      config: _0x41a451,
    }
  ) => {
    try {
      if (!_0x569e1e) {
        return await _0x388c57(BOTOW)
      }
      if (_0x3f1f0c == 'on') {
        if (_0x41a451.AUTO_WELCOME == 'true') {
          return _0x388c57('already on ')
        }
        return (
          await input_set('AUTO_WELCOME', 'true'),
          _0x388c57('autowelcome turned on')
        )
      }
      if (_0x3f1f0c == 'off') {
        if (_0x41a451.AUTO_WELCOME !== 'true') {
          return _0x388c57('already off')
        }
        return (
          await input_set('AUTO_WELCOME', 'false'),
          _0x388c57('autowelcome turned off')
        )
      }
    } catch (_0x5bee8e) {
      _0x388c57('*Error !!*')
      _0x5a07ed(_0x5bee8e)
    }
  }
)
const _0x185004 = {}
_0x185004.pattern = 'antibot'
_0x185004.react = '\uD83D\uDDE3️'
_0x185004.desc = ''
_0x185004.category = ''
_0x185004.use = '.antibot on/off'
_0x185004.filename = __filename
cmd(
  _0x185004,
  async (
    _0x2f5088,
    _0x3e0061,
    _0x2dfb64,
    {
      from: _0x41a544,
      prefix: _0x10abcb,
      l: _0xe02698,
      quoted: _0x188102,
      body: _0x5a1e59,
      isCmd: _0x1dd6f4,
      command: _0x3f7e98,
      args: _0x3fe910,
      q: _0x4c0bc0,
      isGroup: _0x5e89d9,
      sender: _0x545a6d,
      senderNumber: _0x2dfa81,
      botNumber2: _0x21cd9f,
      botNumber: _0xe001d4,
      pushname: _0x1c1499,
      isMe: _0x2b956c,
      isOwner: _0x54a702,
      groupMetadata: _0x38b9ce,
      groupName: _0x177d07,
      participants: _0x3be35a,
      groupAdmins: _0x2b1379,
      isBotAdmins: _0x40aac1,
      isAdmins: _0xd8a966,
      reply: _0x136bef,
      config: _0x3c9d9c,
    }
  ) => {
    try {
      if (!_0x2b956c) {
        return await _0x136bef(BOTOW)
      }
      if (_0x4c0bc0 == 'on') {
        if (_0x3c9d9c.ANTI_BOT == 'true') {
          return _0x136bef('already on ')
        }
        return (
          await input_set('ANTI_BOT', 'true'), _0x136bef('antibot turned on')
        )
      }
      if (_0x4c0bc0 == 'off') {
        if (_0x3c9d9c.ANTI_BOT !== 'true') {
          return _0x136bef('already off')
        }
        return (
          await input_set('ANTI_BOT', 'false'), _0x136bef('antibot turned off')
        )
      }
    } catch (_0x596d4e) {
      _0x136bef('*Error !!*')
      _0xe02698(_0x596d4e)
    }
  }
)
const _0x2fcf78 = {}
_0x2fcf78.pattern = 'antilink'
_0x2fcf78.react = '\uD83D\uDDE3️'
_0x2fcf78.desc = ''
_0x2fcf78.category = ''
_0x2fcf78.use = '.antilink on/off'
_0x2fcf78.filename = __filename
cmd(
  _0x2fcf78,
  async (
    _0x535905,
    _0xe65bc3,
    _0x33f74d,
    {
      from: _0x13409c,
      prefix: _0x3598e1,
      l: _0x430498,
      quoted: _0x5b799b,
      body: _0x5da2e6,
      isCmd: _0x3e8f6b,
      command: _0x5d3cbf,
      args: _0xb45896,
      q: _0x3dd37e,
      isGroup: _0xe3f523,
      sender: _0x2509c8,
      senderNumber: _0xd236e2,
      botNumber2: _0x287fc2,
      botNumber: _0x3c9b93,
      pushname: _0x94f0e7,
      isMe: _0x1f142b,
      isOwner: _0x625b68,
      groupMetadata: _0x5208d0,
      groupName: _0x3af1ef,
      participants: _0x2b7ced,
      groupAdmins: _0x34907c,
      isBotAdmins: _0xc557b0,
      isAdmins: _0xf08e31,
      reply: _0x439555,
      config: _0x35d4df,
    }
  ) => {
    try {
      if (!_0x1f142b) {
        return await _0x439555(BOTOW)
      }
      if (_0x3dd37e == 'on') {
        if (_0x35d4df.ANTI_LINK == 'true') {
          return _0x439555('already on ')
        }
        return (
          await input_set('ANTI_LINK', 'true'), _0x439555('antilink turned on')
        )
      }
      if (_0x3dd37e == 'off') {
        if (_0x35d4df.ANTI_LINK !== 'true') {
          return _0x439555('already off')
        }
        return (
          await input_set('ANTI_LINK', 'false'),
          _0x439555('antilink turned off')
        )
      }
    } catch (_0x22f2ab) {
      _0x439555('*Error !!*')
      _0x430498(_0x22f2ab)
    }
  }
)
const _0x576a9f = {}
_0x576a9f.pattern = 'antibad'
_0x576a9f.react = '\uD83D\uDDE3️'
_0x576a9f.desc = ''
_0x576a9f.category = ''
_0x576a9f.use = '.antibad on/off'
_0x576a9f.filename = __filename
cmd(
  _0x576a9f,
  async (
    _0x4c5202,
    _0x5321d5,
    _0x1b7e7c,
    {
      from: _0x1a2268,
      prefix: _0x5be40a,
      l: _0x2815cc,
      quoted: _0x8c6ce6,
      body: _0x5ba37b,
      isCmd: _0x487249,
      command: _0x530d61,
      args: _0x3d0ae8,
      q: _0x134707,
      isGroup: _0x4798f4,
      sender: _0x34e82,
      senderNumber: _0xca3348,
      botNumber2: _0xaaa9fc,
      botNumber: _0x47fbed,
      pushname: _0x334bed,
      isMe: _0x3c18fd,
      isOwner: _0x67275e,
      groupMetadata: _0x2e9a77,
      groupName: _0x583216,
      participants: _0x51b7b1,
      groupAdmins: _0x31d730,
      isBotAdmins: _0xeaff45,
      isAdmins: _0x5548da,
      reply: _0x45b70c,
      config: _0x1d1a40,
    }
  ) => {
    try {
      if (!_0x3c18fd) {
        return await _0x45b70c(BOTOW)
      }
      if (_0x134707 == 'on') {
        if (_0x1d1a40.ANTI_BAD == 'true') {
          return _0x45b70c('already on ')
        }
        return (
          await input_set('ANTI_BAD', 'true'), _0x45b70c('antibad turned on')
        )
      }
      if (_0x134707 == 'off') {
        if (_0x1d1a40.ANTI_BAD !== 'true') {
          return _0x45b70c('already off')
        }
        return (
          await input_set('ANTI_BAD', 'false'), _0x45b70c('antibad turned off')
        )
      }
    } catch (_0x392077) {
      _0x45b70c('*Error !!*')
      _0x2815cc(_0x392077)
    }
  }
)
const _0x3eb907 = {}
_0x3eb907.pattern = 'autostatus'
_0x3eb907.react = '\uD83D\uDDE3️'
_0x3eb907.desc = ''
_0x3eb907.category = ''
_0x3eb907.use = '.autostatus on/off'
_0x3eb907.filename = __filename
cmd(
  _0x3eb907,
  async (
    _0x14b5b0,
    _0x536422,
    _0x21340e,
    {
      from: _0x4c050d,
      prefix: _0x3feaf1,
      l: _0x3d8964,
      quoted: _0x1028e7,
      body: _0x2e9977,
      isCmd: _0x29369b,
      command: _0x4ace84,
      args: _0x108a61,
      q: _0x4476bb,
      isGroup: _0x29acf2,
      sender: _0x39b650,
      senderNumber: _0x48f812,
      botNumber2: _0x4104d1,
      botNumber: _0xcce414,
      pushname: _0x56bb36,
      isMe: _0x4f68e5,
      isOwner: _0xcc9454,
      groupMetadata: _0x2792c9,
      groupName: _0x45417a,
      participants: _0x242f21,
      groupAdmins: _0x4d6dea,
      isBotAdmins: _0x1e70c3,
      isAdmins: _0x410fbf,
      reply: _0x2ec249,
      config: _0x5d548c,
    }
  ) => {
    try {
      if (!_0x4f68e5) {
        return await _0x2ec249(BOTOW)
      }
      if (_0x4476bb == 'on') {
        if (_0x5d548c.AUTO_STATUS_READ == 'true') {
          return _0x2ec249('already on ')
        }
        return (
          await input_set('AUTO_STATUS_READ', 'true'),
          _0x2ec249('autostatus turned on')
        )
      }
      if (_0x4476bb == 'off') {
        if (_0x5d548c.AUTO_STATUS_READ !== 'true') {
          return _0x2ec249('already off')
        }
        return (
          await input_set('AUTO_STATUS_READ', 'false'),
          _0x2ec249('autostatus turned off')
        )
      }
    } catch (_0x12179b) {
      _0x2ec249('*Error !!*')
      _0x3d8964(_0x12179b)
    }
  }
)
const _0x160b18 = {}
_0x160b18.pattern = 'autotyping'
_0x160b18.react = '\uD83D\uDDE3️'
_0x160b18.desc = ''
_0x160b18.category = ''
_0x160b18.use = '.autotyping on/off'
_0x160b18.filename = __filename
cmd(
  _0x160b18,
  async (
    _0x32252d,
    _0x122971,
    _0x276683,
    {
      from: _0x22247f,
      prefix: _0x42ed9e,
      l: _0x510d2d,
      quoted: _0x5ac043,
      body: _0x8ede90,
      isCmd: _0x1727a4,
      command: _0x5f4dd0,
      args: _0x2779ab,
      q: _0x5b5161,
      isGroup: _0x453e6e,
      sender: _0xe8eb01,
      senderNumber: _0x55403b,
      botNumber2: _0x3081ca,
      botNumber: _0x25a39f,
      pushname: _0x16f606,
      isMe: _0x31ed82,
      isOwner: _0x273487,
      groupMetadata: _0x4b088c,
      groupName: _0x2774bc,
      participants: _0xe0b5b8,
      groupAdmins: _0x3e4c4f,
      isBotAdmins: _0x3487fd,
      isAdmins: _0x4e285e,
      reply: _0x3245e4,
      config: _0x114800,
    }
  ) => {
    try {
      if (!_0x31ed82) {
        return await _0x3245e4(BOTOW)
      }
      if (_0x5b5161 == 'on') {
        if (_0x114800.AUTO_TYPING == 'true') {
          return _0x3245e4('already on ')
        }
        return (
          await input_set('AUTO_TYPING', 'true'),
          _0x3245e4('autotyping turned on')
        )
      }
      if (_0x5b5161 == 'off') {
        if (_0x114800.AUTO_TYPING !== 'true') {
          return _0x3245e4('already off')
        }
        return (
          await input_set('AUTO_TYPING', 'false'),
          _0x3245e4('autotyping turned off')
        )
      }
    } catch (_0x7aeac7) {
      _0x3245e4('*Error !!*')
      _0x510d2d(_0x7aeac7)
    }
  }
)
const _0x4acb3c = {}
_0x4acb3c.pattern = 'autorecording'
_0x4acb3c.react = '\uD83D\uDDE3️'
_0x4acb3c.desc = ''
_0x4acb3c.category = ''
_0x4acb3c.use = '.autorecording on/off'
_0x4acb3c.filename = __filename
cmd(
  _0x4acb3c,
  async (
    _0x7f2d3a,
    _0x40d151,
    _0x484c10,
    {
      from: _0x140364,
      prefix: _0x2315fd,
      l: _0x465558,
      quoted: _0x234df3,
      body: _0xb0ec09,
      isCmd: _0x1e346f,
      command: _0x37ed4d,
      args: _0x265e0a,
      q: _0x209eee,
      isGroup: _0x418b3d,
      sender: _0x5240df,
      senderNumber: _0x1501e5,
      botNumber2: _0x4d5cca,
      botNumber: _0x20ca2a,
      pushname: _0x565ec1,
      isMe: _0x12666d,
      isOwner: _0x5adb57,
      groupMetadata: _0x23a62b,
      groupName: _0x3b90fb,
      participants: _0x592979,
      groupAdmins: _0x5bd498,
      isBotAdmins: _0x5e3620,
      isAdmins: _0x175ab0,
      reply: _0x22c987,
      config: _0x23fab6,
    }
  ) => {
    try {
      if (!_0x12666d) {
        return await _0x22c987(BOTOW)
      }
      if (_0x209eee == 'on') {
        if (_0x23fab6.AUTO_RECORDING == 'true') {
          return _0x22c987('already on ')
        }
        return (
          await input_set('AUTO_RECORDING', 'true'),
          _0x22c987('autorecording turned on')
        )
      }
      if (_0x209eee == 'off') {
        if (_0x23fab6.AUTO_RECORDING !== 'true') {
          return _0x22c987('already off')
        }
        return (
          await input_set('AUTO_RECORDING', 'false'),
          _0x22c987('autorecording turned off')
        )
      }
    } catch (_0x5ce75d) {
      _0x22c987('*Error !!*')
      _0x465558(_0x5ce75d)
    }
  }
)
const _0x4f86bb = {}
_0x4f86bb.pattern = 'autoread'
_0x4f86bb.react = '\uD83D\uDDE3️'
_0x4f86bb.desc = ''
_0x4f86bb.category = ''
_0x4f86bb.use = '.autotyping on/off'
_0x4f86bb.filename = __filename
cmd(
  _0x4f86bb,
  async (
    _0x2c4a2e,
    _0x901b01,
    _0x243f44,
    {
      from: _0x445947,
      prefix: _0x21178e,
      l: _0x2a2dd6,
      quoted: _0x4da4c1,
      body: _0x16745c,
      isCmd: _0x40119c,
      command: _0x312866,
      args: _0x1026e9,
      q: _0x42bf27,
      isGroup: _0x54ee5e,
      sender: _0x4c1ffd,
      senderNumber: _0x11a9cb,
      botNumber2: _0x328099,
      botNumber: _0x4e8ced,
      pushname: _0x28facc,
      isMe: _0x827894,
      isOwner: _0x14d6c4,
      groupMetadata: _0x505ab4,
      groupName: _0x2a89e9,
      participants: _0x54e925,
      groupAdmins: _0x1c6b90,
      isBotAdmins: _0x33a04f,
      isAdmins: _0x4f419c,
      reply: _0x456836,
      config: _0x5e148c,
    }
  ) => {
    try {
      if (!_0x827894) {
        return await _0x456836(BOTOW)
      }
      if (_0x42bf27 == 'on') {
        if (_0x5e148c.AUTO_READ == 'true') {
          return _0x456836('already on ')
        }
        return (
          await input_set('AUTO_READ', 'true'), _0x456836('autoread turned on')
        )
      }
      if (_0x42bf27 == 'off') {
        if (_0x5e148c.AUTO_READ !== 'true') {
          return _0x456836('already off')
        }
        return (
          await input_set('AUTO_READ', 'false'),
          _0x456836('autoread turned off')
        )
      }
    } catch (_0x1c567e) {
      _0x456836('*Error !!*')
      _0x2a2dd6(_0x1c567e)
    }
  }
)
const _0x48370e = {}
_0x48370e.pattern = 'autoreact'
_0x48370e.react = '\uD83D\uDDE3️'
_0x48370e.desc = ''
_0x48370e.category = ''
_0x48370e.use = '.autoreact on/off'
_0x48370e.filename = __filename
cmd(
  _0x48370e,
  async (
    _0x51e481,
    _0x4908f6,
    _0x19da71,
    {
      from: _0x1cf961,
      prefix: _0x5cbaad,
      l: _0x193de8,
      quoted: _0x24a662,
      body: _0x513866,
      isCmd: _0x5096d5,
      command: _0x14d718,
      args: _0x228236,
      q: _0x22b578,
      isGroup: _0x4ef2ce,
      sender: _0x53b652,
      senderNumber: _0x15cc3a,
      botNumber2: _0xb05e6f,
      botNumber: _0x84ad1f,
      pushname: _0x358349,
      isMe: _0x259ea7,
      isOwner: _0x30d609,
      groupMetadata: _0x1ade8d,
      groupName: _0x4e2940,
      participants: _0x47ee9e,
      groupAdmins: _0x5e77e8,
      isBotAdmins: _0x2578de,
      isAdmins: _0x5a3504,
      reply: _0x4fdc73,
      config: _0x23fde9,
    }
  ) => {
    try {
      if (!_0x259ea7) {
        return await _0x4fdc73(BOTOW)
      }
      if (_0x22b578 == 'on') {
        if (_0x23fde9.AUTO_REACT == 'true') {
          return _0x4fdc73('already on ')
        }
        return (
          await input_set('AUTO_REACT', 'true'),
          _0x4fdc73('autoreact turned on')
        )
      }
      if (_0x22b578 == 'off') {
        if (_0x23fde9.AUTO_REACT !== 'true') {
          return _0x4fdc73('already off')
        }
        return (
          await input_set('AUTO_REACT', 'false'),
          _0x4fdc73('autoreact turned off')
        )
      }
    } catch (_0x147c80) {
      _0x4fdc73('*Error !!*')
      _0x193de8(_0x147c80)
    }
  }
)
const _0x332387 = {}
_0x332387.pattern = 'alwaysonline'
_0x332387.react = '\uD83D\uDDE3️'
_0x332387.desc = ''
_0x332387.category = ''
_0x332387.use = '.alwaysonline on/off'
_0x332387.filename = __filename
cmd(
  _0x332387,
  async (
    _0x3f7f30,
    _0x29d8a8,
    _0x5e1cdf,
    {
      from: _0x5e667f,
      prefix: _0x2c2f91,
      l: _0x4df4b0,
      quoted: _0x3cec2f,
      body: _0x152dcc,
      isCmd: _0x52d419,
      command: _0xcb21d0,
      args: _0x13e175,
      q: _0xdeeef6,
      isGroup: _0x5ca468,
      sender: _0x385fe6,
      senderNumber: _0x2bef7b,
      botNumber2: _0x22638f,
      botNumber: _0x46d93e,
      pushname: _0x4cfc3b,
      isMe: _0x417ee0,
      isOwner: _0x1ab26e,
      groupMetadata: _0x584c78,
      groupName: _0x37ffe1,
      participants: _0x526555,
      groupAdmins: _0x5112c8,
      isBotAdmins: _0x41aa6b,
      isAdmins: _0x21e391,
      reply: _0x3840c3,
      config: _0x2aaf17,
    }
  ) => {
    try {
      if (!_0x417ee0) {
        return await _0x3840c3(BOTOW)
      }
      if (_0xdeeef6 == 'on') {
        if (_0x2aaf17.ALWAYS_ONLINE == 'true') {
          return _0x3840c3('already on ')
        }
        return (
          await input_set('ALWAYS_ONLINE', 'true'),
          _0x3840c3('alwaysonline turned on')
        )
      }
      if (_0xdeeef6 == 'off') {
        if (_0x2aaf17.ALWAYS_ONLINE !== 'true') {
          return _0x3840c3('already off')
        }
        return (
          await input_set('ALWAYS_ONLINE', 'false'),
          _0x3840c3('alwaysonline turned off')
        )
      }
    } catch (_0x1ca6f6) {
      _0x3840c3('*Error !!*')
      _0x4df4b0(_0x1ca6f6)
    }
  }
)
const _0x33f0ff = {}
_0x33f0ff.pattern = '212block'
_0x33f0ff.react = '\uD83D\uDDE3️'
_0x33f0ff.desc = ''
_0x33f0ff.category = ''
_0x33f0ff.use = '.212block on/off'
_0x33f0ff.filename = __filename
cmd(
  _0x33f0ff,
  async (
    _0x406ac2,
    _0x16e3c3,
    _0x2e2278,
    {
      from: _0x21d7d3,
      prefix: _0x2b9282,
      l: _0x2b7ca0,
      quoted: _0x1b30f2,
      body: _0x29c4e5,
      isCmd: _0x51a16b,
      command: _0x3bb627,
      args: _0x308e16,
      q: _0x37ef96,
      isGroup: _0x5afdae,
      sender: _0x1bce5b,
      senderNumber: _0x283fa4,
      botNumber2: _0x4c4ae6,
      botNumber: _0x2a78a8,
      pushname: _0x5b54f3,
      isMe: _0x20a5bd,
      isOwner: _0x2cfa46,
      groupMetadata: _0x27a897,
      groupName: _0x486f95,
      participants: _0x18694b,
      groupAdmins: _0x581296,
      isBotAdmins: _0x1f5559,
      isAdmins: _0x3b28ae,
      reply: _0x4699b6,
      config: _0x55269d,
    }
  ) => {
    try {
      if (!_0x20a5bd) {
        return await _0x4699b6(BOTOW)
      }
      if (_0x37ef96 == 'on') {
        if (_0x55269d.NUMBER_212_BLOCK == 'true') {
          return _0x4699b6('already on ')
        }
        return (
          await input_set('NUMBER_212_BLOCK', 'true'),
          _0x4699b6('212block turned on')
        )
      }
      if (_0x37ef96 == 'off') {
        if (_0x55269d.NUMBER_212_BLOCK !== 'true') {
          return _0x4699b6('already off')
        }
        return (
          await input_set('NUMBER_212_BLOCK', 'false'),
          _0x4699b6('212block turned off')
        )
      }
    } catch (_0x42347f) {
      _0x4699b6('*Error !!*')
      _0x2b7ca0(_0x42347f)
    }
  }
)
const _0x48b575 = {}
_0x48b575.pattern = 'settings'
_0x48b575.react = '\u2699️'
_0x48b575.desc = 'setting list'
_0x48b575.category = 'main'
_0x48b575.use = '.settings'
_0x48b575.filename = __filename
cmd(
  _0x48b575,
  async (
    _0x159a3b,
    _0x41ad5d,
    _0xe9374d,
    {
      from: _0x6b2219,
      l: _0x2bb988,
      quoted: _0x18f9e8,
      prefix: _0x54a35b,
      body: _0x291515,
      isCmd: _0x5c2830,
      command: _0x2ad158,
      args: _0x420c35,
      q: _0x2f0348,
      isGroup: _0x3cd282,
      sender: _0x324395,
      senderNumber: _0x31e6b6,
      botNumber2: _0xeb2181,
      botNumber: _0x225a82,
      pushname: _0x15b164,
      isMe: _0x5948b1,
      isOwner: _0x2bed05,
      groupMetadata: _0x2ec97d,
      groupName: _0x1123d9,
      participants: _0x2be255,
      groupAdmins: _0x4259c7,
      isBotAdmins: _0xe50d42,
      isAdmins: _0x24104c,
      reply: _0x12346b,
    }
  ) => {
    try {
      if (!_0x5948b1) {
        return await _0x12346b(BOTOW)
      }
      let _0x34b49a =
        '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *VAJIRA MD SETTINGS*'
      const _0x476cad = [
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[1] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDE9\uD835\uDDE2\uD835\uDDDC\uD835\uDDD6\uD835\uDDD8 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    1.1',
                rowId: _0x54a35b + 'autovoice on ' + _0x2f0348,
                description: 'To Enable Auto Voice \uD83D\uDD11',
              },
              {
                title: '    1.2',
                rowId: _0x54a35b + 'autovoice off ' + _0x2f0348,
                description: 'To Disable Auto Voice Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[2] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDE6\uD835\uDDE7\uD835\uDDDC\uD835\uDDD6\uD835\uDDDE\uD835\uDDD8\uD835\uDDE5 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    2.1',
                rowId: _0x54a35b + 'autosticker on ' + _0x2f0348,
                description: 'To Enable Auto Sticker On \uD83D\uDD11',
              },
              {
                title: '    2.2',
                rowId: _0x54a35b + 'autosticker off ' + _0x2f0348,
                description: 'To Disable Auto Sticker Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[3] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDD5\uD835\uDDDC\uD835\uDDE2 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    3.1',
                rowId: _0x54a35b + 'autobio on ' + _0x2f0348,
                description: 'To Enable Auto Bio On \uD83D\uDD11',
              },
              {
                title: '    3.2',
                rowId: _0x54a35b + 'autobio off ' + _0x2f0348,
                description: 'To Disable Auto Bio Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[4] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDE6\uD835\uDDE7\uD835\uDDD4\uD835\uDDE7\uD835\uDDE8\uD835\uDDE6 \uD835\uDDE9\uD835\uDDDC\uD835\uDDD8\uD835\uDDEA \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    4.1',
                rowId: _0x54a35b + 'autostatus on ' + _0x2f0348,
                description: 'To Enable Auto Status On \uD83D\uDD11',
              },
              {
                title: '    4.2',
                rowId: _0x54a35b + 'autostatus off ' + _0x2f0348,
                description: 'To Disable Auto Status Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[5] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDE7\uD835\uDDEC\uD835\uDDE3\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    5.1',
                rowId: _0x54a35b + 'autotyping on ' + _0x2f0348,
                description: 'To Enable Auto Typing On \uD83D\uDD11',
              },
              {
                title: '    5.2',
                rowId: _0x54a35b + 'autotyping off ' + _0x2f0348,
                description: 'To Disable Auto Typing Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[6] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDE5\uD835\uDDD8\uD835\uDDD6\uD835\uDDE2\uD835\uDDE5\uD835\uDDD7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    6.1',
                rowId: _0x54a35b + 'autorecording on ' + _0x2f0348,
                description: 'To Enable Auto Recording On \uD83D\uDD11',
              },
              {
                title: '    6.2',
                rowId: _0x54a35b + 'autorecording off ' + _0x2f0348,
                description: 'To Disable Auto Recording Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[7] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDE5\uD835\uDDD8\uD835\uDDD4\uD835\uDDD7 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    7.1',
                rowId: _0x54a35b + 'autoread on ' + _0x2f0348,
                description: 'To Enable Auto Read On \uD83D\uDD11',
              },
              {
                title: '    7.2',
                rowId: _0x54a35b + 'autoread off ' + _0x2f0348,
                description: 'To Disable Auto Read Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[8] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDE5\uD835\uDDD8\uD835\uDDD4\uD835\uDDD6\uD835\uDDE7 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    8.1',
                rowId: _0x54a35b + 'autoreact on ' + _0x2f0348,
                description: 'To Enable Auto React On \uD83D\uDD11',
              },
              {
                title: '    8.2',
                rowId: _0x54a35b + 'autoreact off ' + _0x2f0348,
                description: 'To Disable Auto React Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[9] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDD4\uD835\uDDDF\uD835\uDDEA\uD835\uDDD4\uD835\uDDEC\uD835\uDDE6 \uD835\uDDE2\uD835\uDDE1\uD835\uDDDF\uD835\uDDDC\uD835\uDDE1\uD835\uDDD8 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    9.1',
                rowId: _0x54a35b + 'alwaysonline on ' + _0x2f0348,
                description: 'To Enable Always Online On \uD83D\uDD11',
              },
              {
                title: '    9.2',
                rowId: _0x54a35b + 'alwaysonline off ' + _0x2f0348,
                description: 'To Disable Always Online Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[10] 212 \uD835\uDDE1\uD835\uDDE2 \uD835\uDDD5\uD835\uDDDF\uD835\uDDE2\uD835\uDDD6\uD835\uDDDE \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    10.1',
                rowId: _0x54a35b + '212block on ' + _0x2f0348,
                description: 'To Enable Block 212 On \uD83D\uDD11',
              },
              {
                title: '    10.2',
                rowId: _0x54a35b + '212block off ' + _0x2f0348,
                description: 'To Disable Block 212 Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[11] \uD835\uDDD4\uD835\uDDE8\uD835\uDDE7\uD835\uDDE2 \uD835\uDDEA\uD835\uDDD8\uD835\uDDDF\uD835\uDDD6\uD835\uDDE2\uD835\uDDE0\uD835\uDDD8 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    11.1',
                rowId: _0x54a35b + 'autowelcome on ' + _0x2f0348,
                description: 'To Enable Auto Welcome On \uD83D\uDD11',
              },
              {
                title: '    11.2',
                rowId: _0x54a35b + 'autowelcome off ' + _0x2f0348,
                description: 'To Disable Auto Welcome Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[12] \uD835\uDDD4\uD835\uDDE1\uD835\uDDE7\uD835\uDDDC \uD835\uDDD5\uD835\uDDE2\uD835\uDDE7 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    12.1',
                rowId: _0x54a35b + 'antibot on ' + _0x2f0348,
                description: 'To Enable AntiBot On \uD83D\uDD11',
              },
              {
                title: '    12.2',
                rowId: _0x54a35b + 'antibot off ' + _0x2f0348,
                description: 'To Disable AntiBot Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[13] \uD835\uDDD4\uD835\uDDE1\uD835\uDDE7\uD835\uDDDC \uD835\uDDDF\uD835\uDDDC\uD835\uDDE1\uD835\uDDDE \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    13.1',
                rowId: _0x54a35b + 'antilink on ' + _0x2f0348,
                description: 'To Enable AntiLink On \uD83D\uDD11',
              },
              {
                title: '    13.2',
                rowId: _0x54a35b + 'antilink off ' + _0x2f0348,
                description: 'To Disable AntiLink Off \uD83D\uDD12',
              },
            ],
          },
          {
            title:
              '\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n`[14] \uD835\uDDD4\uD835\uDDE1\uD835\uDDE7\uD835\uDDDC \uD835\uDDD5\uD835\uDDD4\uD835\uDDD7 \uD835\uDDE6\uD835\uDDD8\uD835\uDDE7\uD835\uDDE7\uD835\uDDDC\uD835\uDDE1\uD835\uDDDA`',
            rows: [
              {
                title: '    14.1',
                rowId: _0x54a35b + 'antibad on ' + _0x2f0348,
                description: 'To Enable AntiBad On \uD83D\uDD11',
              },
              {
                title: '    14.2',
                rowId: _0x54a35b + 'antibad off ' + _0x2f0348,
                description: 'To Disable AntiBad Off \uD83D\uDD12',
              },
            ],
          },
        ],
        _0x2527cf = { url: 'https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg' }
      const _0x29e59d = {
        caption: '\u2699️ VAJIRA MD V4 SETTINGS \u2699️',
        image: _0x2527cf,
        footer: config.FOOTER,
        buttonText: '\uD83D\uDD22 Reply below number,',
        sections: _0x476cad,
        contextInfo: {},
      }
      _0x29e59d.contextInfo.externalAdReply = {}
      _0x29e59d.contextInfo.externalAdReply.title =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ -  ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
      _0x29e59d.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
      _0x29e59d.contextInfo.externalAdReply.mediaType = 1
      _0x29e59d.contextInfo.externalAdReply.sourceUrl = ''
      _0x29e59d.contextInfo.externalAdReply.thumbnailUrl =
        'https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg'
      _0x29e59d.contextInfo.externalAdReply.renderLargerThumbnail = false
      _0x29e59d.contextInfo.externalAdReply.showAdAttribution = true
      const _0x484844 = _0x29e59d,
        _0x23a5d7 = {}
      return (
        (_0x23a5d7.quoted = _0x41ad5d),
        await _0x159a3b.replyList(_0x6b2219, _0x484844, _0x23a5d7)
      )
    } catch (_0x33e045) {
      _0x12346b()
      _0x2bb988(_0x33e045)
    }
  }
)
