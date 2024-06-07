
const { cmd, commands } = require('../lib/command')
let { img2url } = require('@blackamda/telegram-image-url')
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
  } = require('../lib/functions'),
  config = require('../settings'),
  fs = require('fs'),
  got = require('got')
let { unlink } = require('fs/promises')
const translate = require('translate-google-api'),
  { promisify } = require('util'),
  FormData = require('form-data'),
  stream = require('stream'),
  pipeline = promisify(stream.pipeline),
  fileType = require('file-type'),
  { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter'),
  path = require('path'),
  { tmpdir } = require('os'),
  { spawn } = require('child_process'),
  Crypto = require('crypto'),
  ffmpegPath = require('@ffmpeg-installer/ffmpeg').path,
  ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)
async function videoToWebp(_0x152248) {
  const _0x5649ad = path.join(
      tmpdir(),
      Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + '.webp'
    ),
    _0x28e44b = path.join(
      tmpdir(),
      Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + '.mp4'
    )
  fs.writeFileSync(_0x28e44b, _0x152248)
  await new Promise((_0x4ed747, _0x5032e0) => {
    ffmpeg(_0x28e44b)
      .on('error', _0x5032e0)
      .on('end', () => _0x4ed747(true))
      .addOutputOptions([
        '-vcodec',
        'libwebp',
        '-vf',
        "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
        '-loop',
        '0',
        '-ss',
        '00:00:00',
        '-t',
        '00:00:05',
        '-preset',
        'default',
        '-an',
        '-vsync',
        '0',
      ])
      .toFormat('webp')
      .save(_0x5649ad)
  })
  const _0x224fb9 = fs.readFileSync(_0x5649ad)
  fs.unlinkSync(_0x5649ad)
  fs.unlinkSync(_0x28e44b)
  return _0x224fb9
}
function toAudio(_0x30f35c, _0x2cbe34) {
  return ffmpeg(
    _0x30f35c,
    ['-vn', '-ac', '2', '-b:a', '128k', '-ar', '44100', '-f', 'mp3'],
    _0x2cbe34,
    'mp3'
  )
}
function toPTT(_0x3fe676, _0x5b947b) {
  return ffmpeg(
    _0x3fe676,
    [
      '-vn',
      '-c:a',
      'libopus',
      '-b:a',
      '128k',
      '-vbr',
      'on',
      '-compression_level',
      '10',
    ],
    _0x5b947b,
    'opus'
  )
}
function toVideo(_0x39ceaa, _0x586ed6) {
  return ffmpeg(
    _0x39ceaa,
    [
      '-c:v',
      'libx264',
      '-c:a',
      'aac',
      '-ab',
      '128k',
      '-ar',
      '44100',
      '-crf',
      '32',
      '-preset',
      'slow',
    ],
    _0x586ed6,
    'mp4'
  )
}
var desct = ''
if (config.LANG === 'SI') {
  desct = 'එය ලබා දී ඇති රූපය url එකක් බවට පරිවර්තනය කරයි.'
} else {
  desct = 'It convert given image to url.'
}
var imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = '*ඡායාරූපයකට mention දෙන්න !*'
} else {
  imgmsg = '*Reply to a photo !*'
}
var cantf = ''
if (config.LANG === 'SI') {
  cantf = '*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*'
} else {
  cantf = '*Server is busy. Try again later.!*'
}
var imgmsgs = ''
if (config.LANG === 'SI') {
  imgmsgs = '*මට anime නමක් දෙන්න !*'
} else {
  imgmsgs = '*Give me a anime name !*'
}
var descgs = ''
if (config.LANG === 'SI') {
  descgs = 'එය ලබා දී ඇති anime නම පිළිබඳ විස්තර සපයයි.'
} else {
  descgs = 'It gives details of given anime name.'
}
var cants = ''
if (config.LANG === 'SI') {
  cants = 'I cant find this anime.'
} else {
  cants = 'I cant find this anime.'
}
var descg = ''
if (config.LANG === 'SI') {
  descg = 'එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.'
} else {
  descg = 'It converts your replied photo to sticker.'
}
var imgmsg2 = ''
if (config.LANG === 'SI') {
  imgmsg2 = '*ස්ටිකරයකට mention දෙන්න !*'
} else {
  imgmsg2 = '*Reply to a sticker !*'
}
var descg2 = ''
if (config.LANG === 'SI') {
  descg2 = 'එය ඔබගේ mention දුන් sticker img බවට පරිවර්තනය කරයි.'
} else {
  descg2 = 'It converts your replied sticker to img.'
}
var desct1 = ''
if (config.LANG === 'SI') {
  desct1 = 'එය ලබා දී ඇති රූපය anime image එකක් බවට පරිවර්තනය කරයි.'
} else {
  desct1 = 'It convert given image to anime image.'
}
var desct2 = ''
if (config.LANG === 'SI') {
  desct2 = 'එය ලබා දී ඇති text එකක් ai image එකක් බවට පරිවර්තනය කරයි.'
} else {
  desct2 = 'It convert given text to ai image.'
}
var imgmsg3 = ''
if (config.LANG === 'SI') {
  imgmsg3 = '*උදාහරණයක්: .imagine woman,hair cut collor red,full body,bokeh*'
} else {
  imgmsg3 = '*Example: .imagine woman,hair cut collor red,full body,bokeh*'
}
var imgmsg1 = ''
if (config.LANG === 'SI') {
  imgmsg1 = '*වීඩියෝවක් mention දෙන්න !*'
} else {
  imgmsg1 = '*Reply to a video !*'
}
var descg3 = ''
if (config.LANG === 'SI') {
  descg3 = 'එය ඔබගේ mention දුන් වීඩියෝව audio බවට පරිවර්තනය කරයි.'
} else {
  descg3 = 'It converts your replied video to audio [mp3].'
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට මෙම වීඩියෝව audio බවට පරිවර්තනය කළ නොහැකි විය :(*'
} else {
  N_FOUND = '*I cant convert this video to audio :(*'
}
var imgmsg4 = ''
if (config.LANG === 'SI') {
  imgmsg4 = '*කරුණාකර මට text එකක් දෙන්න !*'
} else {
  imgmsg4 = '*Please give me a text !*'
}
var descg1 = ''
if (config.LANG === 'SI') {
  descg1 = 'එය text එකක් gif ස්ටිකරයක් බවට පරිවර්තනය කරයි'
} else {
  descg = 'it converts a text to gif sticker.'
}
var descdg1 = ''
if (config.LANG === 'SI') {
  descdg = 'එය text එකක් ස්ටිකරයක් බවට පරිවර්තනය කරයි'
} else {
  descdg = 'it converts a text to sticker.'
}
if (config.LANG === 'SI') {
  cant = 'මට මෙම රූපයේ පසුබිම ඉවත් කළ නොහැක.'
} else {
  cant = "I can't remove background on this image."
}
const _0x2a5e55 = {}
_0x2a5e55.pattern = 'vcloner'
_0x2a5e55.react = '\uD83D\uDE01'
_0x2a5e55.desc = 'To clone a voice'
_0x2a5e55.category = 'main'
_0x2a5e55.use = '.vcloner'
_0x2a5e55.filename = __filename
cmd(
  _0x2a5e55,
  async (
    _0x1963d3,
    _0xf23e54,
    _0x3227d7,
    {
      from: _0x58546b,
      prefix: _0x3d7412,
      l: _0x1620c8,
      quoted: _0x1fa667,
      body: _0x5c3995,
      isCmd: _0x19997e,
      command: _0x511f41,
      args: _0x5d9f74,
      q: _0x349780,
      isGroup: _0x15030c,
      sender: _0x2bc5f4,
      senderNumber: _0xced395,
      botNumber2: _0x4b7b25,
      botNumber: _0x2e2afe,
      pushname: _0x38254f,
      isMe: _0xd489e7,
      isOwner: _0x2f08b7,
      groupMetadata: _0x1c7d1c,
      groupName: _0x4e5f29,
      participants: _0x2807e5,
      groupAdmins: _0x563457,
      isBotAdmins: _0xc40b3f,
      isAdmins: _0x508227,
      reply: _0x4f0dc5,
    }
  ) => {
    try {
      if (!_0x349780) {
        return _0x4f0dc5('*Provide valid input text.*')
      }
      const _0x456927 = _0x349780.split('|')
      if (_0x456927.length !== 2) {
        return _0x4f0dc5(
          '*Invalid input format. Provide two audio URLs separated by "|".*'
        )
      }
      const _0x10bf37 = _0x456927[0].trim(),
        _0x84a8fd = _0x456927[1].trim(),
        _0x265886 =
          'https://matrixcoder.vercel.app/api/VoiceCloner?init_audio=' +
          encodeURIComponent(_0x10bf37) +
          '&target_audio=' +
          encodeURIComponent(_0x84a8fd) +
          '&key=' +
          vcapiKey,
        _0x2130c1 = await fetch(_0x265886)
      if (!_0x2130c1.ok) {
        return _0x4f0dc5(
          'Invalid response from the API. Status code: ' + _0x2130c1.status
        )
      }
      const _0x33e003 = await _0x2130c1.json()
      console.log('API Response:', _0x33e003)
      if (
        _0x33e003.status === 'success' &&
        _0x33e003.output &&
        _0x33e003.output.length > 0
      ) {
        const _0x46ebb7 = _0x33e003.output[0],
          _0x62692d = { url: _0x46ebb7 }
        const _0x16dc86 = {
          audio: _0x62692d,
          mimetype: 'audio/mp4',
          ptt: true,
          fileName: _0x349780 + '.mp3',
        }
        const _0x9f18fa = { quoted: _0xf23e54 }
        await _0x1963d3.sendMessage(_0x58546b, _0x16dc86, _0x9f18fa)
      } else {
        return _0x4f0dc5(
          'Invalid or unexpected API response. ' + JSON.stringify(_0x33e003)
        )
      }
      const _0x50b980 = {
        text: '\u2705',
        key: _0xf23e54.key,
      }
      const _0x499db0 = { react: _0x50b980 }
      await _0x1963d3.sendMessage(_0x58546b, _0x499db0)
    } catch (_0x4c7f9b) {
      return _0x4f0dc5(
        'An error occurred while processing the request. ' + _0x4c7f9b.message
      )
      _0x1620c8(_0x4c7f9b)
    }
  }
)
const _0x599ac7 = {}
_0x599ac7.pattern = 'emojimix'
_0x599ac7.react = '\uD83D\uDE01'
_0x599ac7.desc = 'To convert 2 imoji to 1'
_0x599ac7.category = 'main'
_0x599ac7.use = '.emojimix'
_0x599ac7.filename = __filename
cmd(
  _0x599ac7,
  async (
    _0x34f922,
    _0x1898fd,
    _0x3edd07,
    {
      from: _0x502509,
      prefix: _0x1c649a,
      l: _0x26abdc,
      quoted: _0x133d05,
      body: _0x555bab,
      isCmd: _0xfa41d8,
      command: _0x115cc6,
      args: _0xc73606,
      q: _0x60cef5,
      isGroup: _0x5eeb00,
      sender: _0x52baa4,
      senderNumber: _0x1d5294,
      botNumber2: _0x8805e5,
      botNumber: _0x39c69a,
      pushname: _0x2d16eb,
      isMe: _0x3fb2bb,
      isOwner: _0x538605,
      groupMetadata: _0x48ac3c,
      groupName: _0x44f5db,
      participants: _0x9fd962,
      groupAdmins: _0x8f3f05,
      isBotAdmins: _0x2ef3df,
      isAdmins: _0x3358e9,
      reply: _0xf226c2,
    }
  ) => {
    try {
      let [_0x4ce4d7, _0xc01094] = _0x60cef5.split`+`
      if (!_0x4ce4d7) {
        throw (
          'Example: ' + (_0x1c649a + _0x115cc6) + ' \uD83D\uDE05+\uD83E\uDD14'
        )
      }
      if (!_0xc01094) {
        throw (
          'Example: ' + (_0x1c649a + _0x115cc6) + ' \uD83D\uDE05+\uD83E\uDD14'
        )
      }
      let _0x8e6708 = await fetchJson(
        'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' +
          encodeURIComponent(_0x4ce4d7) +
          '_' +
          encodeURIComponent(_0xc01094)
      )
      for (let _0x4e36c6 of _0x8e6708.results) {
        let _0x91cf71 = await _0x34f922.sendImageAsSticker(
          _0x502509,
          _0x4e36c6.url,
          _0x1898fd,
          {
            packname: global.packname,
            author: global.author,
            categories: _0x4e36c6.tags,
          }
        )
        await fs.unlinkSync(_0x91cf71)
      }
      const _0x5e3dd3 = {
        text: '\u2705',
        key: _0x1898fd.key,
      }
      const _0x36d717 = { react: _0x5e3dd3 }
      await _0x34f922.sendMessage(_0x502509, _0x36d717)
    } catch (_0x43a444) {
      _0xf226c2('*Error !!*')
      _0x26abdc(_0x43a444)
    }
  }
)
const _0x4b915c = {}
_0x4b915c.pattern = 'trt'
_0x4b915c.react = '\uD83D\uDD16'
_0x4b915c.desc = 'To convert languages'
_0x4b915c.category = 'main'
_0x4b915c.use = '.trt'
_0x4b915c.filename = __filename
cmd(
  _0x4b915c,
  async (
    _0x13cbd1,
    _0x131062,
    _0x1b4078,
    {
      from: _0x362361,
      prefix: _0x4d9340,
      l: _0x3f2a1b,
      quoted: _0x43beef,
      body: _0x331624,
      isCmd: _0x52bcd5,
      command: _0x39e350,
      args: _0x285abb,
      q: _0x314fee,
      isGroup: _0xe380fb,
      sender: _0x3871fd,
      senderNumber: _0x1b9a0c,
      botNumber2: _0x5927b5,
      botNumber: _0x545076,
      pushname: _0x42df28,
      isMe: _0xd44871,
      isOwner: _0x206c80,
      groupMetadata: _0x413516,
      groupName: _0x977cdd,
      participants: _0x147da0,
      groupAdmins: _0x2fde5a,
      isBotAdmins: _0x56dad3,
      isAdmins: _0x1b93ba,
      reply: _0x57bf48,
    }
  ) => {
    try {
      if (!_0x314fee) {
        return mreply('Usage: .trt <language code> <text> or reply message')
      }
      if (_0x314fee && _0x131062.quoted && _0x131062.quoted.text) {
        let _0x19ad96 = _0x314fee.slice(0, 2)
        try {
          let _0x427016 = _0x131062.quoted.q
          const _0x30d190 = { to: _0x19ad96 }
          let _0x546ea7 = await translate('' + _0x427016, _0x30d190)
          _0x57bf48(_0x546ea7[0])
        } catch {
          return _0x57bf48(' Language code not supported.')
        }
      } else {
        if (_0x314fee) {
          let _0x386f7c = _0x314fee.slice(0, 2),
            _0x38b66a = _0x314fee.substring(2).trim()
          const _0x15c470 = { to: _0x386f7c }
          let _0x1ee8c5 = await translate('' + _0x38b66a, _0x15c470)
          _0x57bf48(_0x1ee8c5[0])
        }
      }
      const _0x33d1f7 = {
        text: '\u2705',
        key: _0x131062.key,
      }
      const _0x3c041f = { react: _0x33d1f7 }
      await _0x13cbd1.sendMessage(_0x362361, _0x3c041f)
    } catch (_0x58be70) {
      _0x57bf48('*Error !!*'), _0x3f2a1b(_0x58be70)
    }
  }
)
const _0x4ca4a2 = {}
_0x4ca4a2.pattern = 'removebg'
_0x4ca4a2.react = '\uD83D\uDD2E'
_0x4ca4a2.alias = ['rmbg']
_0x4ca4a2.desc = descg
_0x4ca4a2.category = 'convert'
_0x4ca4a2.use = '.removebg <Reply to image>'
_0x4ca4a2.filename = __filename
cmd(
  _0x4ca4a2,
  async (
    _0x27916e,
    _0x1b8cf8,
    _0x3b260b,
    {
      from: _0x2aff0c,
      l: _0x47915e,
      quoted: _0x375ff5,
      prefix: _0x4dc215,
      body: _0x55b7c2,
      isCmd: _0x133094,
      command: _0x206c9a,
      args: _0x4fe058,
      q: _0xeed7be,
      isGroup: _0x5a6f1d,
      sender: _0x54a824,
      senderNumber: _0x355a25,
      botNumber2: _0x813837,
      botNumber: _0x32f71a,
      pushname: _0x2e95a8,
      isMe: _0x36ae4e,
      isOwner: _0x4b2f1d,
      groupMetadata: _0x1f3a18,
      groupName: _0x5f39ce,
      participants: _0x4fe886,
      groupAdmins: _0x5be890,
      isBotAdmins: _0x153e89,
      isAdmins: _0x50a72d,
      reply: _0x6b144a,
    }
  ) => {
    try {
      const _0x4cb1f3 = _0x3b260b.quoted
          ? _0x3b260b.quoted.type === 'viewOnceMessage'
          : false,
        _0xcf6c7b = _0x3b260b.quoted
          ? _0x3b260b.quoted.type === 'imageMessage' ||
            (_0x4cb1f3 ? _0x3b260b.quoted.msg.type === 'imageMessage' : false)
          : false,
        _0x459f83 = _0x3b260b.quoted
          ? _0x3b260b.quoted.type === 'videoMessage' ||
            (_0x4cb1f3 ? _0x3b260b.quoted.msg.type === 'videoMessage' : false)
          : false,
        _0xe2c780 = _0x3b260b.quoted
          ? _0x3b260b.quoted.type === 'stickerMessage'
          : false
      if (_0x3b260b.type === 'imageMessage' || _0xcf6c7b) {
        var _0x4448cb = getRandom(''),
          _0x36e7d7 = getRandom('')
        let _0x4cf3cc = _0xcf6c7b
            ? await _0x3b260b.quoted.download(_0x4448cb)
            : await _0x3b260b.download(_0x4448cb),
          _0x4f2ad4 = await fileType.fromBuffer(_0x4cf3cc)
        await fs.promises.writeFile('./' + _0x4f2ad4.ext, _0x4cf3cc)
        var _0x43416c = new FormData()
        _0x43416c.append(
          'image_file',
          fs.createReadStream('./' + _0x4f2ad4.ext)
        )
        _0x43416c.append('size', 'auto')
        var _0x27bc56 = await got.stream.post(
          'https://api.remove.bg/v1.0/removebg',
          {
            body: _0x43416c,
            headers: { 'X-Api-Key': 'fLYByZwbPqdyqkdKK6zcBN9H' },
          }
        )
        await pipeline(_0x27bc56, fs.createWriteStream(_0x36e7d7 + '.png'))
        let _0x50ca25 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *\uD83C\uDF06 BACKGROUND REMOVER*\n\n'
        const _0x4c9adb = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x4dc215 + 'rbgi ' + _0x36e7d7 + '.png',
                  description: 'IMAGE',
                },
                {
                  title: '2',
                  rowId: _0x4dc215 + 'rebgs ' + _0x36e7d7 + '.png',
                  description: 'STICKER',
                },
                {
                  title: '3',
                  rowId: _0x4dc215 + 'rbgd ' + _0x36e7d7 + '.png',
                  description: 'DOCUMENT',
                },
              ],
            },
          ],
          _0x2a5c2c = {
            text: _0x50ca25,
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x4c9adb,
            contextInfo: {},
          }
        _0x2a5c2c.contextInfo.externalAdReply = {}
        _0x2a5c2c.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x2a5c2c.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x2a5c2c.contextInfo.externalAdReply.mediaType = 1
        _0x2a5c2c.contextInfo.externalAdReply.sourceUrl = ''
        _0x2a5c2c.contextInfo.externalAdReply.thumbnailUrl =
          'https://telegra.ph/file/b4caa5682d75220623b83.jpg'
        _0x2a5c2c.contextInfo.externalAdReply.renderLargerThumbnail = false
        _0x2a5c2c.contextInfo.externalAdReply.showAdAttribution = true
        const _0x57b45d = _0x2a5c2c,
          _0x2a7ca5 = {}
        return (
          (_0x2a7ca5.quoted = _0x1b8cf8),
          await _0x27916e.replyList(_0x2aff0c, _0x57b45d, _0x2a7ca5)
        )
      } else {
        return await _0x6b144a(imgmsg)
      }
    } catch (_0x3ae8fe) {
      _0x6b144a(cant)
      _0x47915e(_0x3ae8fe)
    }
  }
)
const _0x55a2b1 = {}
_0x55a2b1.pattern = 'rbgi'
_0x55a2b1.dontAddCommandList = true
_0x55a2b1.filename = __filename
cmd(
  _0x55a2b1,
  async (
    _0x40b621,
    _0x5ba474,
    _0x2bee17,
    {
      from: _0x44dcb7,
      l: _0x1a2b2c,
      quoted: _0x115cb4,
      body: _0x33f451,
      isCmd: _0x228e2e,
      command: _0x2338c0,
      args: _0x50d090,
      q: _0x1b9547,
      isGroup: _0x557847,
      sender: _0x1724d0,
      senderNumber: _0x2a2649,
      botNumber2: _0x3a1927,
      botNumber: _0x5e32b3,
      pushname: _0x571b2d,
      isMe: _0x24745c,
      isOwner: _0x9cb000,
      groupMetadata: _0x1d9ce2,
      groupName: _0x56e6f8,
      participants: _0x1d4509,
      groupAdmins: _0x46c541,
      isBotAdmins: _0x15fc83,
      isAdmins: _0x4f1083,
      reply: _0x5a6c0f,
    }
  ) => {
    try {
      const _0x2deec1 = {
        text: '\uD83D\uDCE5',
        key: _0x5ba474.key,
      }
      const _0x6249a0 = { react: _0x2deec1 }
      await _0x40b621.sendMessage(_0x44dcb7, _0x6249a0)
      const _0x39c4c1 = { quoted: _0x5ba474 }
      await _0x40b621.sendMessage(
        _0x44dcb7,
        {
          image: fs.readFileSync(_0x1b9547),
          caption: config.FOOTER,
        },
        _0x39c4c1
      )
      const _0x564a6f = {
        text: '\u2714',
        key: _0x5ba474.key,
      }
      const _0x3cdf4f = { react: _0x564a6f }
      await _0x40b621.sendMessage(_0x44dcb7, _0x3cdf4f)
    } catch (_0x1f6d38) {
      _0x5a6c0f('*ERROR !!*'), _0x1a2b2c(_0x1f6d38)
    }
  }
)
const _0x19a56f = {}
_0x19a56f.pattern = 'rebgs'
_0x19a56f.dontAddCommandList = true
_0x19a56f.filename = __filename
cmd(
  _0x19a56f,
  async (
    _0x102db1,
    _0x2d1f68,
    _0x512d42,
    {
      from: _0x32bc3a,
      l: _0xcb0411,
      quoted: _0x5e679a,
      body: _0x52bde0,
      isCmd: _0x2d60ba,
      command: _0x26796f,
      args: _0x6b964c,
      q: _0x38e5c7,
      isGroup: _0x359128,
      sender: _0x228d38,
      senderNumber: _0x1b9446,
      botNumber2: _0x3f8c43,
      botNumber: _0x1c17e0,
      pushname: _0x127557,
      isMe: _0x305387,
      isOwner: _0x59b2d8,
      groupMetadata: _0x509b05,
      groupName: _0x5ee7b4,
      participants: _0x333808,
      groupAdmins: _0x1434ce,
      isBotAdmins: _0x590f16,
      isAdmins: _0x213904,
      reply: _0x1c4a9d,
    }
  ) => {
    try {
      const _0x13f05a = {
        text: '\uD83D\uDCE5',
        key: _0x2d1f68.key,
      }
      const _0x458d3b = { react: _0x13f05a }
      await _0x102db1.sendMessage(_0x32bc3a, _0x458d3b)
      let _0x99a30a = new Sticker(_0x38e5c7, {
        pack: _0x127557,
        author: '',
        type: _0x38e5c7.includes('--crop' || '-c')
          ? StickerTypes.CROPPED
          : StickerTypes.FULL,
        categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
        id: '12345',
        quality: 75,
        background: 'transparent',
      })
      const _0x29ed67 = await _0x99a30a.toBuffer(),
        _0x61b512 = { sticker: _0x29ed67 }
      const _0x5b7638 = { quoted: _0x2d1f68 }
      await _0x102db1.sendMessage(_0x32bc3a, _0x61b512, _0x5b7638)
      const _0x1a2d65 = {
        text: '\u2714',
        key: _0x2d1f68.key,
      }
      const _0x2c8ae9 = { react: _0x1a2d65 }
      await _0x102db1.sendMessage(_0x32bc3a, _0x2c8ae9)
    } catch (_0x5d37a5) {
      _0x1c4a9d('*ERROR !!*'), _0xcb0411(_0x5d37a5)
    }
  }
)
const _0x2d0366 = {}
_0x2d0366.pattern = 'rbgd'
_0x2d0366.dontAddCommandList = true
_0x2d0366.filename = __filename
cmd(
  _0x2d0366,
  async (
    _0x781cad,
    _0x379cbe,
    _0xfefd9e,
    {
      from: _0x7ab824,
      l: _0x1ef998,
      quoted: _0x584c5b,
      body: _0x165c0a,
      isCmd: _0x157d32,
      command: _0x50d9cf,
      args: _0x264c39,
      q: _0x33b6f3,
      isGroup: _0x189092,
      sender: _0x3ba500,
      senderNumber: _0x536dd1,
      botNumber2: _0x2fb0d5,
      botNumber: _0x128ab1,
      pushname: _0x45474e,
      isMe: _0x3f3cfa,
      isOwner: _0x218ba4,
      groupMetadata: _0xd4d259,
      groupName: _0x2ddbfd,
      participants: _0x386943,
      groupAdmins: _0x346336,
      isBotAdmins: _0x3d0031,
      isAdmins: _0x43312c,
      reply: _0x40b177,
    }
  ) => {
    try {
      const _0xd671dc = {
        text: '\uD83D\uDCE5',
        key: _0x379cbe.key,
      }
      const _0xf92faf = { react: _0xd671dc }
      await _0x781cad.sendMessage(_0x7ab824, _0xf92faf)
      const _0x21e400 = { quoted: _0x379cbe }
      await _0x781cad.sendMessage(
        _0x7ab824,
        {
          document: fs.readFileSync(_0x33b6f3),
          mimetype: 'image/x-png',
          fileName: 'Removebg.png',
          caption: config.FOOTER,
        },
        _0x21e400
      )
      const _0x3b1f60 = {
        text: '\u2714',
        key: _0x379cbe.key,
      }
      const _0x4135dd = { react: _0x3b1f60 }
      await _0x781cad.sendMessage(_0x7ab824, _0x4135dd)
    } catch (_0x43d1a4) {
      _0x40b177('*ERROR !!*'), _0x1ef998(_0x43d1a4)
    }
  }
)
const _0x5ee534 = {}
_0x5ee534.pattern = 'attp'
_0x5ee534.react = '\u2728'
_0x5ee534.alias = ['texttogif']
_0x5ee534.desc = descg1
_0x5ee534.category = 'convert'
_0x5ee534.use = '.attp HI'
_0x5ee534.filename = __filename
cmd(
  _0x5ee534,
  async (
    _0x39ce6f,
    _0x289f8c,
    _0x519f45,
    {
      from: _0x5a966a,
      l: _0x3054fe,
      quoted: _0x5e317c,
      body: _0x4aa5b0,
      isCmd: _0x2af324,
      command: _0x139a1a,
      args: _0x10938d,
      q: _0x374113,
      isGroup: _0x39e707,
      sender: _0x3bd3cc,
      senderNumber: _0x108791,
      botNumber2: _0x32d588,
      botNumber: _0x230504,
      pushname: _0x16bc3a,
      isMe: _0x2ee2bc,
      isOwner: _0x29feb4,
      groupMetadata: _0x3f4ad4,
      groupName: _0x11d155,
      participants: _0x8c0c2c,
      groupAdmins: _0x49f701,
      isBotAdmins: _0x12bd33,
      isAdmins: _0x1f0a4d,
      reply: _0x35f2fe,
    }
  ) => {
    try {
      if (!_0x374113) {
        return await _0x35f2fe(imgmsg4)
      }
      let _0x227438 = await getBuffer(
        'https://vihangayt.me/maker/text2gif?q=' + _0x374113
      )
      const _0x5a1019 = { quoted: _0x289f8c }
      await _0x39ce6f.sendMessage(
        _0x5a966a,
        { sticker: await videoToWebp(_0x227438) },
        _0x5a1019
      )
    } catch (_0x2f9574) {
      _0x35f2fe('*Error !!*'), _0x3054fe(_0x2f9574)
    }
  }
)
const _0xb503bd = {}
_0xb503bd.pattern = 'ttp'
_0xb503bd.react = '\u2728'
_0xb503bd.alias = ['ttp', 'texttoimg']
_0xb503bd.desc = descdg1
_0xb503bd.category = 'convert'
_0xb503bd.use = '.ttp HI'
_0xb503bd.filename = __filename
cmd(
  _0xb503bd,
  async (
    _0x1400c0,
    _0x445a3f,
    _0x474ea4,
    {
      from: _0x12aecd,
      l: _0x43716c,
      quoted: _0x39f022,
      body: _0x2734a9,
      isCmd: _0x4b2fe8,
      command: _0x53c8f5,
      args: _0x379fa1,
      q: _0x239f74,
      isGroup: _0x1890a3,
      sender: _0x50d19e,
      senderNumber: _0x1fbb36,
      botNumber2: _0x2ee57e,
      botNumber: _0x2a61b8,
      pushname: _0x22c140,
      isMe: _0x2f7f49,
      isOwner: _0x262d88,
      groupMetadata: _0x118697,
      groupName: _0x371346,
      participants: _0x2c4846,
      groupAdmins: _0xbb87ce,
      isBotAdmins: _0x4e37a9,
      isAdmins: _0x39672c,
      reply: _0x3ef60f,
    }
  ) => {
    try {
      if (!_0x239f74) {
        return await _0x3ef60f(imgmsg4)
      }
      let _0x5d9d5b = await getBuffer(
          'https://vihangayt.me/maker/text2img?q=' + _0x239f74
        ),
        _0x1fa122 = new Sticker(_0x5d9d5b, {
          pack: _0x22c140,
          author: '',
          type: _0x239f74.includes('--crop' || '-c')
            ? StickerTypes.CROPPED
            : StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 75,
          background: 'transparent',
        })
      const _0x430fb4 = await _0x1fa122.toBuffer(),
        _0x664f4f = { sticker: _0x430fb4 }
      const _0x46a15c = {}
      return (
        (_0x46a15c.quoted = _0x445a3f),
        _0x1400c0.sendMessage(_0x12aecd, _0x664f4f, _0x46a15c)
      )
    } catch (_0x5bc58a) {
      _0x3ef60f('*Error !!*')
      _0x43716c(_0x5bc58a)
    }
  }
)
const _0x4aee3f = {}
_0x4aee3f.pattern = 'toptt'
_0x4aee3f.react = '\uD83D\uDD0A'
_0x4aee3f.alias = ['toaudio']
_0x4aee3f.desc = descg3
_0x4aee3f.category = 'convert'
_0x4aee3f.use = '.toptt <Reply to video>'
_0x4aee3f.filename = __filename
cmd(
  _0x4aee3f,
  async (
    _0x25e674,
    _0x870e30,
    _0x4b1295,
    {
      from: _0x2b0b08,
      l: _0x20a0bc,
      quoted: _0x150cf9,
      body: _0x19c377,
      isCmd: _0x31d8a4,
      command: _0x447c1d,
      args: _0xe0aee4,
      q: _0x213377,
      isGroup: _0x3e5c17,
      sender: _0x2374fd,
      senderNumber: _0x4286f3,
      botNumber2: _0x518c96,
      botNumber: _0x1608bb,
      pushname: _0x216d55,
      isMe: _0x12415b,
      isOwner: _0x44e2d1,
      groupMetadata: _0x491d09,
      groupName: _0x5b2e31,
      participants: _0x367534,
      groupAdmins: _0x4c2f92,
      isBotAdmins: _0x38f652,
      isAdmins: _0x5c216b,
      reply: _0x3a4d1e,
    }
  ) => {
    try {
      let _0x88b4b8 = _0x4b1295.quoted
        ? _0x4b1295.quoted.type === 'videoMessage'
        : _0x4b1295
        ? _0x4b1295.type === 'videoMessage'
        : false
      if (!_0x88b4b8) {
        return await _0x3a4d1e(imgmsg1)
      }
      let _0x290b8e = _0x4b1295.quoted
          ? await _0x4b1295.quoted.download()
          : await _0x4b1295.download(),
        _0x193ca6 = await toPTT(_0x290b8e, 'mp4')
      const _0x384422 = {
        audio: _0x193ca6.options,
        mimetype: 'audio/mpeg',
      }
      let _0x230ed9 = await _0x25e674.sendMessage(_0x4b1295.chat, _0x384422, {
        quoted: _0x4b1295,
      })
      const _0x4c6e22 = {
        text: '\uD83C\uDFBC',
        key: _0x230ed9.key,
      }
      const _0x4809f9 = { react: _0x4c6e22 }
      await _0x25e674.sendMessage(_0x2b0b08, _0x4809f9)
    } catch (_0x7fcd18) {
      _0x3a4d1e('*Error !!*')
      _0x20a0bc(_0x7fcd18)
    }
  }
)
const _0x46b3fa = {}
_0x46b3fa.pattern = 'imagine'
_0x46b3fa.alias = ['texttoimage', 'toimage', 'aiimage']
_0x46b3fa.react = '\uD83E\uDD16'
_0x46b3fa.desc = desct2
_0x46b3fa.category = 'search'
_0x46b3fa.use = '.imagine  woman,hair cut collor red,full body,bokeh'
_0x46b3fa.filename = __filename
cmd(
  _0x46b3fa,
  async (
    _0x1642dd,
    _0x55ba82,
    _0x22dd72,
    {
      from: _0x109053,
      l: _0x70614e,
      prefix: _0x5bba7e,
      quoted: _0x32edb5,
      body: _0x10e05b,
      isCmd: _0x2a8516,
      command: _0x485dbf,
      args: _0x9a0c86,
      q: _0x2a442b,
      isGroup: _0x38201e,
      sender: _0x5b73f0,
      senderNumber: _0x50963f,
      botNumber2: _0x4f7ac6,
      botNumber: _0x537f16,
      pushname: _0xadbc1a,
      isMe: _0x34ada0,
      isOwner: _0x4fc402,
      groupMetadata: _0x374dc5,
      groupName: _0x4c4ff5,
      participants: _0xb20b65,
      groupAdmins: _0x599ce7,
      isBotAdmins: _0x178787,
      isAdmins: _0x5323ca,
      reply: _0x4aa7b6,
    }
  ) => {
    try {
      if (!_0x2a442b) {
        return _0x4aa7b6(imgmsg3)
      }
      let _0x5c88af = await fetchJson(
          'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
        ),
        _0xbac3e4 = _0x5c88af.users,
        _0x32e4c8 = _0xbac3e4[Math.floor(Math.random() * _0xbac3e4.length)]
      const _0x3432ec = await fetchJson(
          _0x5c88af.xz +
            'api/text-to-image?text=' +
            encodeURIComponent(_0x2a442b) +
            '&apikey=' +
            _0x32e4c8
        ),
        _0x1860b9 = {}
      return (
        (_0x1860b9.quoted = _0x55ba82),
        await _0x1642dd.sendMessage(
          _0x109053,
          {
            image: await getBuffer(_0x3432ec.imageUrl),
            caption: '\n*' + _0x3432ec.promptEn + '*\n',
          },
          _0x1860b9
        )
      )
    } catch (_0x1a5b97) {
      _0x4aa7b6(cantf)
      _0x70614e(_0x1a5b97)
    }
  }
)
const _0x2fd047 = {}
_0x2fd047.pattern = 'img2url'
_0x2fd047.react = '\uD83D\uDD17'
_0x2fd047.alias = ['tourl', 'imgurl', 'telegraph', 'imgtourl']
_0x2fd047.desc = desct
_0x2fd047.category = 'convert'
_0x2fd047.use = '.img2url <reply image>'
_0x2fd047.filename = __filename
cmd(
  _0x2fd047,
  async (
    _0x3071dd,
    _0xe09423,
    _0xd4c163,
    {
      from: _0x35076e,
      l: _0x40072d,
      prefix: _0x3855d6,
      quoted: _0x1f4cff,
      body: _0x58116d,
      isCmd: _0x27feb9,
      command: _0x3f5126,
      args: _0x299f37,
      q: _0x264bb8,
      isGroup: _0x1a90a9,
      sender: _0x2f5250,
      senderNumber: _0x26a73c,
      botNumber2: _0x5c1784,
      botNumber: _0x2405cf,
      pushname: _0x37e635,
      isMe: _0x4c79cf,
      isOwner: _0x77f364,
      groupMetadata: _0x88a26d,
      groupName: _0x36464a,
      participants: _0x2a13a4,
      groupAdmins: _0x614a71,
      isBotAdmins: _0xa551de,
      isAdmins: _0x54e7f0,
      reply: _0x5ed664,
    }
  ) => {
    try {
      const _0x3c10cb = _0xd4c163.quoted
          ? _0xd4c163.quoted.type === 'viewOnceMessage'
          : false,
        _0x476f1b = _0xd4c163.quoted
          ? _0xd4c163.quoted.type === 'imageMessage' ||
            (_0x3c10cb ? _0xd4c163.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0xd4c163.type === 'imageMessage' || _0x476f1b) {
        const _0x45292b = require('file-type')
        var _0x29f78e = getRandom('')
        let _0x251686 = _0x476f1b
            ? await _0xd4c163.quoted.download(_0x29f78e)
            : await _0xd4c163.download(_0x29f78e),
          _0x1e5f77 = await _0x45292b.fromBuffer(_0x251686)
        await fs.promises.writeFile('./' + _0x1e5f77.ext, _0x251686)
        img2url('./' + _0x1e5f77.ext).then(async (_0x24eb7d) => {
          await _0x5ed664('\n' + _0x24eb7d + '\n')
        })
      } else {
        return _0x5ed664(imgmsg)
      }
    } catch (_0x51c751) {
      _0x5ed664(cantf)
      _0x40072d(_0x51c751)
    }
  }
)
const _0x172ce6 = {}
_0x172ce6.pattern = 'enhance'
_0x172ce6.react = '\u2197️'
_0x172ce6.alias = ['imgenhance', 'quality', 'qualityimage', 'tohd']
_0x172ce6.desc = desct
_0x172ce6.category = 'convert'
_0x172ce6.use = '.enhance <reply low quality image>'
_0x172ce6.filename = __filename
cmd(
  _0x172ce6,
  async (
    _0x3d6989,
    _0x5a9685,
    _0x1c39a0,
    {
      from: _0x4e4a46,
      l: _0x5ab36f,
      prefix: _0x596778,
      quoted: _0x5231e7,
      body: _0x36cef5,
      isCmd: _0xf4788e,
      command: _0x43002c,
      args: _0x3e69ef,
      q: _0x28d5b6,
      isGroup: _0x324bcd,
      sender: _0x22f8f3,
      senderNumber: _0x124db7,
      botNumber2: _0x1499dd,
      botNumber: _0x2e977c,
      pushname: _0x3a9194,
      isMe: _0x4a28a6,
      isOwner: _0x5c1926,
      groupMetadata: _0x4c19a7,
      groupName: _0x4bdff4,
      participants: _0x123406,
      groupAdmins: _0x59b8a1,
      isBotAdmins: _0x1d0a5f,
      isAdmins: _0x23db00,
      reply: _0x23cc83,
    }
  ) => {
    try {
      const _0xee4963 = _0x1c39a0.quoted
          ? _0x1c39a0.quoted.type === 'viewOnceMessage'
          : false,
        _0x4ab309 = _0x1c39a0.quoted
          ? _0x1c39a0.quoted.type === 'imageMessage' ||
            (_0xee4963 ? _0x1c39a0.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0x1c39a0.type === 'imageMessage' || _0x4ab309) {
        const _0x7d9d85 = require('file-type')
        var _0x5d44f6 = getRandom('')
        let _0x59ff55 = _0x4ab309
            ? await _0x1c39a0.quoted.download(_0x5d44f6)
            : await _0x1c39a0.download(_0x5d44f6),
          _0x25d471 = await _0x7d9d85.fromBuffer(_0x59ff55)
        await fs.promises.writeFile('./' + _0x25d471.ext, _0x59ff55)
        img2url('./' + _0x25d471.ext).then(async (_0xfd8613) => {
          const _0x103a0e = { quoted: _0x5a9685 }
          await _0x3d6989.sendMessage(
            _0x4e4a46,
            {
              image: await getBuffer(
                'https://vihangayt.me/tools/enhance?url=' + _0xfd8613
              ),
              caption: config.FOOTER,
            },
            _0x103a0e
          )
        })
      } else {
        return _0x23cc83(imgmsg)
      }
    } catch (_0x36a0cb) {
      _0x23cc83(cantf)
      _0x5ab36f(_0x36a0cb)
    }
  }
)
const _0x34ed71 = {}
_0x34ed71.pattern = 'colorize'
_0x34ed71.react = '\uD83C\uDFA8'
_0x34ed71.alias = ['colorizer', 'tocolour', 'colourize']
_0x34ed71.desc = desct
_0x34ed71.category = 'convert'
_0x34ed71.use = '.colorize <reply black & white image>'
_0x34ed71.filename = __filename
cmd(
  _0x34ed71,
  async (
    _0x5db6de,
    _0x521058,
    _0x5f0a67,
    {
      from: _0x45ac31,
      l: _0x5a95e1,
      prefix: _0x3e21a8,
      quoted: _0x2429f9,
      body: _0x4d3d32,
      isCmd: _0x599070,
      command: _0x4d643d,
      args: _0x4936c3,
      q: _0x1c753b,
      isGroup: _0x17b816,
      sender: _0x5afdc5,
      senderNumber: _0x49183a,
      botNumber2: _0x1cd7e3,
      botNumber: _0x1ae840,
      pushname: _0x426c8d,
      isMe: _0x1190e6,
      isOwner: _0x130074,
      groupMetadata: _0x3e2c40,
      groupName: _0x1b16da,
      participants: _0x22567c,
      groupAdmins: _0x4fe7cf,
      isBotAdmins: _0x39547f,
      isAdmins: _0x497835,
      reply: _0x1cc0d8,
    }
  ) => {
    try {
      const _0x270c99 = _0x5f0a67.quoted
          ? _0x5f0a67.quoted.type === 'viewOnceMessage'
          : false,
        _0x39957a = _0x5f0a67.quoted
          ? _0x5f0a67.quoted.type === 'imageMessage' ||
            (_0x270c99 ? _0x5f0a67.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0x5f0a67.type === 'imageMessage' || _0x39957a) {
        const _0x1cbd69 = require('file-type')
        var _0x3b2dee = getRandom('')
        let _0x4b7dba = _0x39957a
            ? await _0x5f0a67.quoted.download(_0x3b2dee)
            : await _0x5f0a67.download(_0x3b2dee),
          _0x50a695 = await _0x1cbd69.fromBuffer(_0x4b7dba)
        await fs.promises.writeFile('./' + _0x50a695.ext, _0x4b7dba)
        img2url('./' + _0x50a695.ext).then(async (_0x3d02a4) => {
          try {
            const _0x9e16d1 = { quoted: _0x521058 }
            await _0x5db6de.sendMessage(
              _0x45ac31,
              {
                image: await getBuffer(
                  'https://vihangayt.me/tools/colorize?url=' + _0x3d02a4
                ),
                caption: config.FOOTER,
              },
              _0x9e16d1
            )
          } catch (_0x2dffcb) {
            let _0x220a40 = await fetchJson(
                'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
              ),
              _0x441630 = _0x220a40.users,
              _0x3adf8a =
                _0x441630[Math.floor(Math.random() * _0x441630.length)]
            const _0x4bcce4 = { quoted: _0x521058 }
            await _0x5db6de.sendMessage(
              _0x45ac31,
              {
                image: {
                  url:
                    _0x220a40.xz +
                    'api/colorizer?url=' +
                    _0x3d02a4 +
                    '&apikey=' +
                    _0x3adf8a,
                },
                caption: config.FOOTER,
              },
              _0x4bcce4
            )
          }
        })
      } else {
        return _0x1cc0d8(imgmsg)
      }
    } catch (_0x438116) {
      _0x1cc0d8(cantf)
      _0x5a95e1(_0x438116)
    }
  }
)
const _0x3ef997 = {}
_0x3ef997.pattern = 'anime'
_0x3ef997.alias = ['animesearch', 'sanime']
_0x3ef997.react = '\u26E9️'
_0x3ef997.desc = descgs
_0x3ef997.category = 'search'
_0x3ef997.use = '.anime astro'
_0x3ef997.filename = __filename
cmd(
  _0x3ef997,
  async (
    _0x4b6971,
    _0x31f2f8,
    _0x316a9b,
    {
      from: _0x17835f,
      l: _0x4d66ec,
      prefix: _0x5f21d0,
      quoted: _0x5be0ca,
      body: _0x559b5d,
      isCmd: _0x1bbc41,
      command: _0x308434,
      args: _0x559eda,
      q: _0x3263e9,
      isGroup: _0x5b99e2,
      sender: _0x2f5633,
      senderNumber: _0x1f56ab,
      botNumber2: _0x45372a,
      botNumber: _0x3ba375,
      pushname: _0x284136,
      isMe: _0x448b19,
      isOwner: _0x120658,
      groupMetadata: _0x5b9848,
      groupName: _0x3c5fcf,
      participants: _0x46a41d,
      groupAdmins: _0x9d763b,
      isBotAdmins: _0x1d21e7,
      isAdmins: _0x467874,
      reply: _0x11e694,
    }
  ) => {
    try {
      if (!_0x3263e9) {
        return _0x11e694(imgmsgs)
      }
      let _0x34ebe6 = await fetchJson(
          'https://api.jikan.moe/v4/anime?q=' + _0x3263e9
        ),
        _0x34c5d1 = []
      for (let _0x2d0f44 of _0x34ebe6.data) {
        const _0x459639 = {
          title: '' + _0x2d0f44.title,
          rows: [
            {
              title: _0x2d0f44 + 1,
              description: '' + _0x2d0f44.title,
              rowId: _0x5f21d0 + 'animeeg ' + _0x2d0f44.mal_id,
            },
          ],
        }
        _0x34c5d1.push(_0x459639)
      }
      const _0x484f10 = {
        text:
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *ANIME SEARCH*\n   \n*Search Results From* ' +
          _0x3263e9,
        footer: config.FOOTER,
        title: '',
        buttonText: '*\uD83D\uDD22 Reply below number*',
        sections: _0x34c5d1,
      }
      let _0x55a579 = _0x484f10
      await _0x4b6971.listMessage(_0x17835f, _0x55a579, _0x31f2f8)
    } catch (_0x15269f) {
      _0x11e694(cants)
      _0x4d66ec(_0x15269f)
    }
  }
)
const _0x5d0684 = {}
_0x5d0684.pattern = 'animeeg'
_0x5d0684.dontAddCommandList = true
_0x5d0684.filename = __filename
cmd(
  _0x5d0684,
  async (
    _0xf5983,
    _0x2ecf30,
    _0x470bdf,
    {
      from: _0x5ee185,
      l: _0x420bab,
      quoted: _0x5ad313,
      body: _0x4cad46,
      isCmd: _0x3c0451,
      command: _0x2e9f6b,
      args: _0x2714e9,
      q: _0x2452f4,
      isGroup: _0x88041f,
      sender: _0x8b2aba,
      senderNumber: _0x262fc8,
      botNumber2: _0x4e91bc,
      botNumber: _0x2a2609,
      pushname: _0x19131d,
      isMe: _0x40da2e,
      isOwner: _0x27f79b,
      groupMetadata: _0x2f4845,
      groupName: _0x487bcf,
      participants: _0x53274a,
      groupAdmins: _0x341d4a,
      isBotAdmins: _0x1c693a,
      isAdmins: _0x545bde,
      reply: _0x4f1674,
    }
  ) => {
    try {
      const _0x27387f = {
        text: '\uD83D\uDD03',
        key: _0x2ecf30.key,
      }
      const _0x3d9df2 = { react: _0x27387f }
      await _0xf5983.sendMessage(_0x5ee185, _0x3d9df2)
      res = await fetchJson('https://api.jikan.moe/v4/anime/' + _0x2452f4)
      let _0xe5418b =
        '*TITLE:* *' +
        res.data.title +
        '*\n*ENGLISH:* *' +
        res.data.title_english +
        '*\n*JAPANESE:* *' +
        res.data.title_japanese +
        '*\n*TYPE ANIME:* *' +
        res.data.type +
        '*\n*ADAPTER:* *' +
        res.data.source +
        '*\n*TOTAL EPISODE:* *' +
        res.data.episodes +
        '*\n*STATUS:* *' +
        res.data.status +
        '*\n*ONGOING:* *' +
        (res.data.airing ? 'Ya' : 'DRIS') +
        '*\n*AIRED:* *' +
        res.data.aired.string +
        '*\n*DURATION:* *' +
        res.data.duration +
        '*\n*RATING:* *' +
        res.data.rating +
        '*\n*SCORE:* *' +
        res.data.score +
        '*\n*RANK:* *' +
        res.data.rank +
        '*\n*STUDIO:* *' +
        res.data.studios[0].name +
        '* '
      const _0x19f76c = { url: res.data.images.jpg.image_url }
      const _0x4073c5 = {
        image: _0x19f76c,
        caption: _0xe5418b,
      }
      const _0x2a86f7 = { quoted: _0x2ecf30 }
      _0xf5983
        .sendMessage(_0x5ee185, _0x4073c5, _0x2a86f7)
        .catch((_0x15efb2) => _0x4f1674(''))
      const _0x4ca8cc = {
        text: '\u2714',
        key: _0x2ecf30.key,
      }
      const _0x3d407a = { react: _0x4ca8cc }
      await _0xf5983.sendMessage(_0x5ee185, _0x3d407a)
    } catch (_0x1ceb24) {
      _0x4f1674(cants)
      _0x420bab(_0x1ceb24)
    }
  }
)
const _0x19aa55 = {}
_0x19aa55.pattern = 'toanime'
_0x19aa55.react = '\uD83C\uDFEE'
_0x19aa55.alias = ['imgtoanime', 'animeimg']
_0x19aa55.desc = desct1
_0x19aa55.category = 'convert'
_0x19aa55.use = '.toanime <reply image>'
_0x19aa55.filename = __filename
cmd(
  _0x19aa55,
  async (
    _0x31e02a,
    _0x472f54,
    _0x333df5,
    {
      from: _0x2213ce,
      l: _0x445f50,
      prefix: _0x4840fc,
      quoted: _0x53eca5,
      body: _0x39619f,
      isCmd: _0x542cb3,
      command: _0x3b5545,
      args: _0x4081b3,
      q: _0x2d46b3,
      isGroup: _0x3d2df9,
      sender: _0x48ffa8,
      senderNumber: _0x5635a0,
      botNumber2: _0x54e837,
      botNumber: _0x35df9a,
      pushname: _0x3bb41c,
      isMe: _0x5adbf8,
      isOwner: _0x17a032,
      groupMetadata: _0x36e134,
      groupName: _0x3fcb84,
      participants: _0x12bdc4,
      groupAdmins: _0x34d269,
      isBotAdmins: _0x4e5b02,
      isAdmins: _0x2aba22,
      reply: _0xc65142,
    }
  ) => {
    try {
      const _0x260b68 = _0x333df5.quoted
          ? _0x333df5.quoted.type === 'viewOnceMessage'
          : false,
        _0x50dc04 = _0x333df5.quoted
          ? _0x333df5.quoted.type === 'imageMessage' ||
            (_0x260b68 ? _0x333df5.quoted.msg.type === 'imageMessage' : false)
          : false
      if (_0x333df5.type === 'imageMessage' || _0x50dc04) {
        const _0x5b4d9e = require('file-type')
        var _0x146b2a = getRandom('')
        let _0x39cf02 = _0x50dc04
            ? await _0x333df5.quoted.download(_0x146b2a)
            : await _0x333df5.download(_0x146b2a),
          _0x42b477 = await _0x5b4d9e.fromBuffer(_0x39cf02)
        await fs.promises.writeFile('./' + _0x42b477.ext, _0x39cf02)
        img2url('./' + _0x42b477.ext).then(async (_0x475bd6) => {
          try {
            const _0x292ea4 = { quoted: _0x472f54 }
            await _0x31e02a.sendMessage(
              _0x2213ce,
              {
                image: await getBuffer(
                  'https://vihangayt.me/tools/toanime?url=' + _0x475bd6
                ),
                caption: config.FOOTER,
              },
              _0x292ea4
            )
          } catch (_0x19ba89) {
            let _0x2782e0 = await fetchJson(
                'https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json'
              ),
              _0x654ef1 = _0x2782e0.users,
              _0x184fc5 =
                _0x654ef1[Math.floor(Math.random() * _0x654ef1.length)]
            const _0x10b9cc = { quoted: _0x472f54 }
            await _0x31e02a.sendMessage(
              _0x2213ce,
              {
                image: {
                  url:
                    _0x2782e0.xz +
                    'api/toanime?url=' +
                    _0x475bd6 +
                    '&apikey=' +
                    _0x184fc5,
                },
                caption: config.FOOTER,
              },
              _0x10b9cc
            )
          }
        })
      } else {
        return _0xc65142(imgmsg)
      }
    } catch (_0x18b472) {
      _0xc65142(cantf)
      _0x445f50(_0x18b472)
    }
  }
)
const _0xe09da6 = {}
_0xe09da6.pattern = 'sticker'
_0xe09da6.react = '\uD83D\uDD2E'
_0xe09da6.alias = ['s', 'stic']
_0xe09da6.desc = descg
_0xe09da6.category = 'convert'
_0xe09da6.use = '.sticker <Reply to image>'
_0xe09da6.filename = __filename
cmd(
  _0xe09da6,
  async (
    _0x4da258,
    _0x5a3dc8,
    _0x3dfaab,
    {
      from: _0x1a5806,
      l: _0x3cb3e3,
      quoted: _0x318092,
      body: _0x332bf1,
      isCmd: _0x3bccbe,
      command: _0x51ceb0,
      args: _0x2d896e,
      q: _0x44232a,
      isGroup: _0x522cef,
      sender: _0x198ef1,
      senderNumber: _0x1929a1,
      botNumber2: _0x2a9d65,
      botNumber: _0x1aa933,
      pushname: _0x2728e9,
      isMe: _0x124bb5,
      isOwner: _0x9e68af,
      groupMetadata: _0x6508c6,
      groupName: _0x53fff0,
      participants: _0x4ffe08,
      groupAdmins: _0x1780e7,
      isBotAdmins: _0x26294a,
      isAdmins: _0x57e13d,
      reply: _0x19de56,
    }
  ) => {
    try {
      const _0x1e7e56 = _0x3dfaab.quoted
          ? _0x3dfaab.quoted.type === 'viewOnceMessage'
          : false,
        _0x1b1364 = _0x3dfaab.quoted
          ? _0x3dfaab.quoted.type === 'imageMessage' ||
            (_0x1e7e56 ? _0x3dfaab.quoted.msg.type === 'imageMessage' : false)
          : false,
        _0x55afc3 = _0x3dfaab.quoted
          ? _0x3dfaab.quoted.type === 'videoMessage' ||
            (_0x1e7e56 ? _0x3dfaab.quoted.msg.type === 'videoMessage' : false)
          : false,
        _0x6d3f94 = _0x3dfaab.quoted
          ? _0x3dfaab.quoted.type === 'stickerMessage'
          : false
      if (_0x3dfaab.type === 'imageMessage' || _0x1b1364) {
        var _0x4692af = getRandom('')
        _0x1b1364
          ? await _0x3dfaab.quoted.download(_0x4692af)
          : await _0x3dfaab.download(_0x4692af)
        let _0xd82f09 = new Sticker(_0x4692af + '.jpg', {
          pack: _0x2728e9,
          author: '',
          type: _0x44232a.includes('--crop' || '-c')
            ? StickerTypes.CROPPED
            : StickerTypes.FULL,
          categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
          id: '12345',
          quality: 75,
          background: 'transparent',
        })
        const _0x3cfafe = await _0xd82f09.toBuffer(),
          _0x5699f7 = { sticker: _0x3cfafe }
        const _0x2edece = {}
        return (
          (_0x2edece.quoted = _0x5a3dc8),
          _0x4da258.sendMessage(_0x1a5806, _0x5699f7, _0x2edece)
        )
      } else {
        if (_0x6d3f94) {
          var _0x1f1a29 = getRandom('')
          await _0x3dfaab.quoted.download(_0x1f1a29)
          let _0x30573d = new Sticker(_0x1f1a29 + '.webp', {
            pack: _0x2728e9,
            author: '',
            type: _0x44232a.includes('--crop' || '-c')
              ? StickerTypes.CROPPED
              : StickerTypes.FULL,
            categories: ['\uD83E\uDD29', '\uD83C\uDF89'],
            id: '12345',
            quality: 75,
            background: 'transparent',
          })
          const _0x25b049 = await _0x30573d.toBuffer(),
            _0x4079bc = { sticker: _0x25b049 }
          const _0x4b8d7c = {}
          return (
            (_0x4b8d7c.quoted = _0x5a3dc8),
            _0x4da258.sendMessage(_0x1a5806, _0x4079bc, _0x4b8d7c)
          )
        } else {
          return await _0x19de56(imgmsg)
        }
      }
    } catch (_0x56bd30) {
      _0x19de56('*Error !!*')
      _0x3cb3e3(_0x56bd30)
    }
  }
)
const _0x59088c = {}
_0x59088c.pattern = 'toimg'
_0x59088c.react = '\uD83D\uDD2E'
_0x59088c.alias = ['s', 'stic']
_0x59088c.desc = descg2
_0x59088c.category = 'convert'
_0x59088c.use = '.sticker <Reply to image>'
_0x59088c.filename = __filename
cmd(
  _0x59088c,
  async (
    _0x5b473d,
    _0x19bbd0,
    _0x348033,
    {
      from: _0x52bea0,
      l: _0x9fb4c,
      quoted: _0xfaf4ce,
      body: _0x3d1224,
      isCmd: _0x45a627,
      command: _0x190a04,
      args: _0x543bbb,
      q: _0x5a52ad,
      isGroup: _0x82bf33,
      sender: _0x2b3d0f,
      senderNumber: _0xb18a18,
      botNumber2: _0xec84dd,
      botNumber: _0x5b175c,
      pushname: _0x5a2f9e,
      isMe: _0x4481b9,
      isOwner: _0x460efc,
      groupMetadata: _0x1694bf,
      groupName: _0x18c7ce,
      participants: _0x13ae64,
      groupAdmins: _0x196617,
      isBotAdmins: _0x3b1497,
      isAdmins: _0x34ef41,
      reply: _0x552158,
    }
  ) => {
    try {
      const _0x46d295 = _0x348033.quoted
          ? _0x348033.quoted.type === 'viewOnceMessage'
          : false,
        _0x36550a = _0x348033.quoted
          ? _0x348033.quoted.type === 'imageMessage' ||
            (_0x46d295 ? _0x348033.quoted.msg.type === 'imageMessage' : false)
          : false,
        _0xa843a1 = _0x348033.quoted
          ? _0x348033.quoted.type === 'videoMessage' ||
            (_0x46d295 ? _0x348033.quoted.msg.type === 'videoMessage' : false)
          : false,
        _0x320af8 = _0x348033.quoted
          ? _0x348033.quoted.type === 'stickerMessage'
          : false
      if (_0x320af8) {
        var _0x556317 = getRandom('')
        let _0x42eece = _0x320af8
            ? await _0x348033.quoted.download(_0x556317)
            : await _0x348033.download(_0x556317),
          _0x3f2bdf = await fileType.fromBuffer(_0x42eece)
        await fs.promises.writeFile('./' + _0x3f2bdf.ext, _0x42eece)
        const _0xcc054d = { quoted: _0x19bbd0 }
        await _0x5b473d.sendMessage(
          _0x52bea0,
          {
            image: fs.readFileSync('./' + _0x3f2bdf.ext),
            caption: config.FOOTER,
          },
          _0xcc054d
        )
      } else {
        return await _0x552158(imgmsg2)
      }
    } catch (_0x3864bd) {
      _0x552158('*Error !!*')
      _0x9fb4c(_0x3864bd)
    }
  }
)
