const config = require('../settings'),
  l = console.log,
  { cmd, commands } = require('../lib/command'),
  dl = require('@bochilteam/scraper'),
  ytdl = require('youtubedl-core'),
  api = require('caliph-api'),
  fs = require('fs-extra')
var videotime = 60000,
  request = require('request'),
  cheerio = require('cheerio')
let soundcloud = async (_0x487a2c) => {
    return new Promise((_0xa59c75, _0x2d6206) => {
      const _0x468cf4 = {}
      _0x468cf4['content-type'] = 'application/x-www-form-urlencoded'
      const _0x49fafd = {
        method: 'POST',
        url: 'https://www.klickaud.co/download.php',
        headers: _0x468cf4,
        formData: {},
      }
      _0x49fafd.formData.value = _0x487a2c
      _0x49fafd.formData[
        '2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37'
      ] = '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
      const _0x550552 = _0x49fafd
      request(_0x550552, async function (_0x568e71, _0x5a5eca, _0x4a09ac) {
        if (_0x568e71) {
          throw new Error(_0x568e71)
        }
        const _0x128dde = cheerio.load(_0x4a09ac)
        _0xa59c75({
          judul: _0x128dde(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)'
          ).text(),
          download_count: _0x128dde(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)'
          ).text(),
          thumb: _0x128dde(
            '#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img'
          ).attr('src'),
          link: _0x128dde('#dlMP3')
            .attr('onclick')
            .split("downloadFile('")[1]
            .split("',")[0],
        })
      })
    })
  },
  axios = require('axios')
async function ssearch(_0x3a43e4) {
  let _0xd250a6 = 'https://m.soundcloud.com',
    _0x276e58 = await axios.get(
      _0xd250a6 + '/search?q=' + encodeURIComponent(_0x3a43e4),
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
        },
      }
    ),
    _0xc3fd50 = cheerio.load(_0x276e58.data),
    _0x1d7360 = []
  return (
    _0xc3fd50('div > ul > li > div').each(function (_0x29ec9f, _0x1df3fa) {
      let _0x2a9428 = _0xc3fd50(_0x1df3fa).find('a').attr('aria-label'),
        _0x156f0c = _0xd250a6 + _0xc3fd50(_0x1df3fa).find('a').attr('href'),
        _0x1bc0be = _0xc3fd50(_0x1df3fa)
          .find('a > div > div > div > picture > img')
          .attr('src'),
        _0x1caf39 = _0xc3fd50(_0x1df3fa)
          .find('a > div > div > div')
          .eq(1)
          .text(),
        _0x232fc5 = _0xc3fd50(_0x1df3fa)
          .find('a > div > div > div > div > div')
          .eq(0)
          .text(),
        _0x44b0b0 = _0xc3fd50(_0x1df3fa)
          .find('a > div > div > div > div > div')
          .eq(1)
          .text(),
        _0x300a9e = _0xc3fd50(_0x1df3fa)
          .find('a > div > div > div > div > div')
          .eq(2)
          .text()
      const _0x2c4ec6 = {
        title: _0x2a9428,
        url: _0x156f0c,
        thumb: _0x1bc0be,
        artist: _0x1caf39,
        views: _0x232fc5,
        release: _0x300a9e,
        timestamp: _0x44b0b0,
      }
      _0x1d7360.push(_0x2c4ec6)
    }),
    {
      status: _0x276e58.status,
      creator: 'Caliph',
      result: _0x1d7360,
    }
  )
}
function ytreg(_0x35e6f0) {
  return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(
    _0x35e6f0
  )
}
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
    getsize,
    jsonformat,
  } = require('../lib/functions'),
  dl2 = require('inrl-dl')
var descv = ''
if (config.LANG === 'SI') {
  descv = 'Youtube වෙතින් videos බාගත කරයි.'
} else {
  descv = 'Download videos from Youtube.'
}
var descs = ''
if (config.LANG === 'SI') {
  descs = 'Youtube වෙතින් songs බාගත කරයි.'
} else {
  descs = 'Download songs from Youtube.'
}
var descyt = ''
if (config.LANG === 'SI') {
  descyt = 'Youtube වෙතින් video සහ songs බාගත කරයි.'
} else {
  descyt = 'Download videos and songs from Youtube.'
}
var descsh = ''
if (config.LANG === 'SI') {
  descsh = 'Youtube search බාගත කරයි.'
} else {
  descsh = 'Search and get details from youtube.'
}
var N_FOUND = ''
if (config.LANG === 'SI') {
  N_FOUND = '*මට කිසිවක් සොයාගත නොහැකි විය :(*'
} else {
  N_FOUND = "*I couldn't find anything :(*"
}
var urlneed = ''
if (config.LANG === 'SI') {
  urlneed = '*කරුණාකර Youtube url එකක් ලබා දෙන්න*'
} else {
  urlneed = '*Please give me youtube url..*'
}
var urlneed1 = ''
if (config.LANG === 'SI') {
  urlneed1 = 'එය soundcloud වෙතින් songs බාගත කරයි.'
} else {
  urlneed1 = 'It downloads songs from soundcloud.'
}
var imgmsg = ''
if (config.LANG === 'SI') {
  imgmsg = '```කරුණාකර වචන කිහිපයක් ලියන්න!```'
} else {
  imgmsg = '```Please write a few words!```'
}
var sizetoo = ''
if (config.LANG === 'SI') {
  sizetoo =
    '_This file size is too big_\n \u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*'
} else {
  sizetoo =
    '_This file size is too big_\n\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B\u200B *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*'
}
const _0x12d354 = {}
_0x12d354.pattern = 'play'
_0x12d354.react = '\uD83D\uDCF1'
_0x12d354.desc = urlneed1
_0x12d354.category = 'download'
_0x12d354.use = '.soundcloud lelena'
_0x12d354.filename = __filename
cmd(
  _0x12d354,
  async (
    _0x1fc2d6,
    _0x48ebe5,
    _0x48c894,
    {
      from: _0x2c7f4a,
      prefix: _0x2eda0d,
      l: _0x3843a9,
      quoted: _0x14cecc,
      body: _0x49c39f,
      isCmd: _0x45a24c,
      command: _0x3e5da2,
      args: _0x24bf37,
      q: _0x477198,
      isGroup: _0x512825,
      sender: _0x58685d,
      senderNumber: _0x53b9f1,
      botNumber2: _0x37cef9,
      botNumber: _0x3f142d,
      pushname: _0x3c3cc2,
      isMe: _0x35857c,
      isOwner: _0x130fe2,
      groupMetadata: _0x153d1d,
      groupName: _0x5c7837,
      participants: _0x527346,
      groupAdmins: _0x32c84a,
      isBotAdmins: _0x13d44c,
      isAdmins: _0xa8bd1e,
      reply: _0x15f1b8,
    }
  ) => {
    try {
      const _0x1615c0 = { text: imgmsg }
      const _0x280e0a = { quoted: _0x48ebe5 }
      if (!_0x477198) {
        return await _0x1fc2d6.sendMessage(_0x2c7f4a, _0x1615c0, _0x280e0a)
      }
      const _0x4e5e35 = await ssearch(_0x477198),
        _0x21ab7d = _0x4e5e35.result,
        _0x5c2f97 = { text: N_FOUND }
      const _0x154626 = { quoted: _0x48ebe5 }
      if (_0x21ab7d.length < 1) {
        return await _0x1fc2d6.sendMessage(_0x2c7f4a, _0x5c2f97, _0x154626)
      }
      var _0x1b7c02 = []
      for (var _0x59115b = 0; _0x59115b < _0x21ab7d.length; _0x59115b++) {
        _0x21ab7d[_0x59115b].thumb &&
          !_0x21ab7d[_0x59115b].views.includes('Follow') &&
          _0x1b7c02.push({
            title: _0x59115b + 0,
            description:
              _0x21ab7d[_0x59115b].title +
              ' | ' +
              _0x21ab7d[_0x59115b].artist +
              ' | ' +
              _0x21ab7d[_0x59115b].views +
              ' | ' +
              _0x21ab7d[_0x59115b].release +
              ' | ' +
              _0x21ab7d[_0x59115b].timestamp,
            rowId: _0x2eda0d + 'selectaud3 ' + _0x21ab7d[_0x59115b].url,
          })
      }
      const _0x5aaaa5 = {
        title: '_[Result from m.soundcloud.com]_',
        rows: _0x1b7c02,
      }
      const _0x4d9284 = [_0x5aaaa5],
        _0x1ce95d = {
          text:
            '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SOUNDCLOUD DOWNLOADER*\n\n*\uD83D\uDCF1 Entered Name:* ' +
            _0x477198,
          footer: config.FOOTER,
          title: 'Result from m.soundcloud.com \uD83D\uDCF2',
          buttonText: '*\uD83D\uDD22 Reply below number*',
          sections: _0x4d9284,
        }
      const _0x15f769 = _0x1ce95d,
        _0x491732 = { quoted: _0x48ebe5 }
      await _0x1fc2d6.replyList(_0x2c7f4a, _0x15f769, _0x491732)
    } catch (_0x4e5759) {
      _0x15f1b8('*ERROR !!*'), _0x3843a9(_0x4e5759)
    }
  }
)
const _0x5c1537 = {}
_0x5c1537.alias = ['selectaud3']
_0x5c1537.filename = __filename
cmd(
  _0x5c1537,
  async (
    _0x1c24cb,
    _0x5a2b89,
    _0x42e8f8,
    {
      from: _0x56d9f7,
      l: _0x3dc564,
      quoted: _0x1747fd,
      prefix: _0x75d9c7,
      body: _0x933030,
      isCmd: _0x3f8bb5,
      command: _0x5d4398,
      args: _0x2533e8,
      q: _0x4e15d7,
      isGroup: _0x1111d6,
      sender: _0x2ae0f9,
      senderNumber: _0x5e4085,
      botNumber2: _0x552af5,
      botNumber: _0x481996,
      pushname: _0xe69439,
      isMe: _0x61d482,
      isOwner: _0x2dd161,
      groupMetadata: _0x129f15,
      groupName: _0xec33a,
      participants: _0x41ce54,
      groupAdmins: _0x411ac4,
      isBotAdmins: _0x1df7eb,
      isAdmins: _0x3098b3,
      reply: _0x3e63fb,
    }
  ) => {
    try {
      let _0x424d25 =
        '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *SELECT VIDEO QUALITY*'
      const _0x501bcb = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId: _0x75d9c7 + 'soundaud ' + _0x4e15d7,
                description: 'Normal type song \uD83C\uDFB6',
              },
              {
                title: '2',
                rowId: _0x75d9c7 + 'sounddoc ' + _0x4e15d7,
                description: 'Document type song \uD83D\uDCC1',
              },
            ],
          },
        ],
        _0x47f3d2 = {
          text: _0x424d25,
          footer: config.FOOTER,
          buttonText: '\uD83D\uDD22 Reply below number,',
          sections: _0x501bcb,
          contextInfo: {},
        }
      _0x47f3d2.contextInfo.externalAdReply = {}
      _0x47f3d2.contextInfo.externalAdReply.title =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
      _0x47f3d2.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
      _0x47f3d2.contextInfo.externalAdReply.mediaType = 1
      _0x47f3d2.contextInfo.externalAdReply.sourceUrl = ''
      _0x47f3d2.contextInfo.externalAdReply.thumbnailUrl =
        'https://telegra.ph/file/b4caa5682d75220623b83.jpg'
      _0x47f3d2.contextInfo.externalAdReply.renderLargerThumbnail = false
      _0x47f3d2.contextInfo.externalAdReply.showAdAttribution = true
      const _0x2d968c = _0x47f3d2,
        _0x2ff206 = {}
      return (
        (_0x2ff206.quoted = _0x5a2b89),
        await _0x1c24cb.replyList(_0x56d9f7, _0x2d968c, _0x2ff206)
      )
    } catch (_0x32cc71) {
      _0x3e63fb(N_FOUND), _0x3dc564(_0x32cc71)
    }
  }
)
const _0x609c5b = {}
_0x609c5b.pattern = 'sounddoc'
_0x609c5b.dontAddCommandList = true
_0x609c5b.filename = __filename
cmd(
  _0x609c5b,
  async (
    _0x56d9a9,
    _0x22b332,
    _0x596069,
    {
      from: _0x34bb90,
      l: _0x471b79,
      quoted: _0x509281,
      body: _0x10e417,
      isCmd: _0x592285,
      command: _0x4d48ee,
      args: _0xedd4d,
      q: _0x1aa9f5,
      isGroup: _0x39983f,
      sender: _0x36160a,
      senderNumber: _0x5fd095,
      botNumber2: _0x455b58,
      botNumber: _0x1b07af,
      pushname: _0x327868,
      isMe: _0xc3d447,
      isOwner: _0x26a0b4,
      groupMetadata: _0xaabb4d,
      groupName: _0x587f24,
      participants: _0x494f7e,
      groupAdmins: _0x21fe9a,
      isBotAdmins: _0x4c70a3,
      isAdmins: _0x4f7cd5,
      reply: _0x442bfc,
    }
  ) => {
    try {
      const _0x472b10 = {
        text: '\uD83D\uDCE5',
        key: _0x22b332.key,
      }
      const _0x10f6ca = { react: _0x472b10 }
      await _0x56d9a9.sendMessage(_0x34bb90, _0x10f6ca)
      const _0x45d632 = { text: '*Need link...*' }
      const _0x580c32 = { quoted: _0x22b332 }
      if (!_0x1aa9f5) {
        return await _0x56d9a9.sendMessage(_0x34bb90, _0x45d632, _0x580c32)
      }
      const _0x3e71f5 = await soundcloud(_0x1aa9f5)
      let _0x48ee78 =
        '*\uD83D\uDCDA Name :* ' +
        _0x3e71f5.judul +
        '\n*\uD83D\uDCFA Down Count :* ' +
        _0x3e71f5.download_count
      const _0x35e74d = { url: _0x3e71f5.thumb }
      const _0x96b836 = {
        image: _0x35e74d,
        caption: _0x48ee78,
      }
      const _0x1c49f3 = { quoted: _0x22b332 }
      await _0x56d9a9.sendMessage(_0x34bb90, _0x96b836, _0x1c49f3)
      const _0x49c231 = { url: _0x3e71f5.link }
      const _0x1a5f96 = { quoted: _0x22b332 }
      let _0x4ed109 = await _0x56d9a9.sendMessage(
        _0x34bb90,
        {
          document: _0x49c231,
          mimetype: 'audio/mpeg',
          fileName: _0x3e71f5.judul + '.' + 'mp3',
        },
        _0x1a5f96
      )
      const _0x1b5106 = {
        text: '\uD83D\uDCC1',
        key: _0x4ed109.key,
      }
      const _0x1b2834 = { react: _0x1b5106 }
      await _0x56d9a9.sendMessage(_0x34bb90, _0x1b2834)
      const _0x21fe36 = {
        text: '\u2714',
        key: _0x22b332.key,
      }
      const _0x2fbc67 = { react: _0x21fe36 }
      await _0x56d9a9.sendMessage(_0x34bb90, _0x2fbc67)
    } catch (_0x27577b) {
      _0x442bfc('*ERROR !!*')
      _0x471b79(_0x27577b)
    }
  }
)
const _0x3a9dae = {}
_0x3a9dae.pattern = 'soundaud'
_0x3a9dae.dontAddCommandList = true
_0x3a9dae.filename = __filename
cmd(
  _0x3a9dae,
  async (
    _0x301500,
    _0xf4e642,
    _0x47ac84,
    {
      from: _0x24dcde,
      l: _0x2ecde4,
      quoted: _0x46cf15,
      body: _0x3f3061,
      isCmd: _0x3be745,
      command: _0x183a7a,
      args: _0x1a5330,
      q: _0x1394f2,
      isGroup: _0x145ee2,
      sender: _0x44519c,
      senderNumber: _0x1b5d07,
      botNumber2: _0x35a8b9,
      botNumber: _0x2fd496,
      pushname: _0x597fd9,
      isMe: _0x5bcca1,
      isOwner: _0x336222,
      groupMetadata: _0x52aca2,
      groupName: _0x44d9db,
      participants: _0x5855fe,
      groupAdmins: _0x592d01,
      isBotAdmins: _0x3c3836,
      isAdmins: _0x43233b,
      reply: _0x2cc747,
    }
  ) => {
    try {
      const _0x267b38 = {
        text: '\uD83D\uDCE5',
        key: _0xf4e642.key,
      }
      const _0x5f550c = { react: _0x267b38 }
      await _0x301500.sendMessage(_0x24dcde, _0x5f550c)
      const _0x1d88c6 = { text: '*Need link...*' }
      const _0x697845 = { quoted: _0xf4e642 }
      if (!_0x1394f2) {
        return await _0x301500.sendMessage(_0x24dcde, _0x1d88c6, _0x697845)
      }
      const _0x22b5e6 = await soundcloud(_0x1394f2)
      let _0x3e1c62 =
        '*\uD83D\uDCDA Name :* ' +
        _0x22b5e6.judul +
        '\n*\uD83D\uDCFA Down Count :* ' +
        _0x22b5e6.download_count
      const _0x5b8ccf = { url: _0x22b5e6.thumb }
      const _0x1ec2d8 = {
        image: _0x5b8ccf,
        caption: _0x3e1c62,
      }
      const _0x136e6c = { quoted: _0xf4e642 }
      await _0x301500.sendMessage(_0x24dcde, _0x1ec2d8, _0x136e6c)
      const _0x309b83 = { url: _0x22b5e6.link }
      const _0x3392b7 = {
        audio: _0x309b83,
        mimetype: 'audio/mpeg',
        fileName: _0x22b5e6.judul + '.' + 'mp3',
      }
      const _0x3882e8 = { quoted: _0xf4e642 }
      let _0x5b093d = await _0x301500.sendMessage(
        _0x24dcde,
        _0x3392b7,
        _0x3882e8
      )
      const _0x87f57d = {
        text: '\uD83D\uDCC1',
        key: _0x5b093d.key,
      }
      const _0x243235 = { react: _0x87f57d }
      await _0x301500.sendMessage(_0x24dcde, _0x243235)
      const _0x2c9f37 = {
        text: '\u2714',
        key: _0xf4e642.key,
      }
      const _0x2b3d4d = { react: _0x2c9f37 }
      await _0x301500.sendMessage(_0x24dcde, _0x2b3d4d)
    } catch (_0x49b8e9) {
      _0x2cc747('*ERROR !!*')
      _0x2ecde4(_0x49b8e9)
    }
  }
)
const _0x5f444d = {}
_0x5f444d.pattern = 'yts'
_0x5f444d.alias = ['ytsearch']
_0x5f444d.use = '.yts lelena'
_0x5f444d.react = '\uD83D\uDD0E'
_0x5f444d.desc = descsh
_0x5f444d.category = 'search'
_0x5f444d.filename = __filename
cmd(
  _0x5f444d,
  async (
    _0x1e9624,
    _0x5dc555,
    _0xa7cd43,
    {
      from: _0x173bee,
      l: _0x27d43d,
      quoted: _0x4f71dc,
      body: _0x510d9a,
      isCmd: _0x2e17fe,
      command: _0x4ddf5d,
      args: _0x1208a5,
      q: _0x63b88e,
      isGroup: _0x1bdb3e,
      sender: _0xabebbf,
      senderNumber: _0xdd385c,
      botNumber2: _0x346b91,
      botNumber: _0xaac05d,
      pushname: _0x44da6f,
      isMe: _0x14227c,
      isOwner: _0x3a9571,
      groupMetadata: _0x2b310e,
      groupName: _0x11a933,
      participants: _0x33da2b,
      groupAdmins: _0x14df8f,
      isBotAdmins: _0x1e2f62,
      isAdmins: _0x4aedcc,
      reply: _0x448a76,
    }
  ) => {
    try {
      if (!_0x63b88e) {
        return await _0x448a76(imgmsg)
      }
      if (isUrl(_0x63b88e) && !ytreg(_0x63b88e)) {
        return await _0x448a76(imgmsg)
      }
      try {
        let _0x418728 = require('yt-search')
        var _0x23889e = await _0x418728(_0x63b88e)
      } catch (_0x409d98) {
        _0x27d43d(_0x409d98)
        const _0x589e49 = { text: '*Error !!*' }
        const _0x33171a = {}
        return (
          (_0x33171a.quoted = _0x5dc555),
          await _0x1e9624.sendMessage(_0x173bee, _0x589e49, _0x33171a)
        )
      }
      var _0xb82448 = ''
      _0x23889e.all.map((_0x5245b9) => {
        _0xb82448 +=
          ' *\uD83D\uDDB2️' +
          _0x5245b9.title +
          '*\n\uD83D\uDD17 ' +
          _0x5245b9.url +
          '\n\n'
      })
      const _0x410b7f = { text: _0xb82448 }
      const _0x27f5d5 = { quoted: _0x5dc555 }
      await _0x1e9624.sendMessage(_0x173bee, _0x410b7f, _0x27f5d5)
    } catch (_0xc740c4) {
      _0x27d43d(_0xc740c4), _0x448a76('*Error !!*')
    }
  }
)
const _0xa4e715 = {}
_0xa4e715.pattern = 'yt'
_0xa4e715.use = '.yt [song name or link]'
_0xa4e715.react = '\uD83C\uDFAC'
_0xa4e715.desc = descyt
_0xa4e715.category = 'download'
_0xa4e715.filename = __filename
cmd(
  _0xa4e715,
  async (
    _0x48a45d,
    _0x10e073,
    _0x1fb314,
    {
      from: _0x26e6c1,
      prefix: _0x2b82dc,
      l: _0x25a42c,
      quoted: _0x355cb0,
      body: _0x4580a1,
      isCmd: _0x417df1,
      command: _0x14b66f,
      args: _0x299e21,
      q: _0x389da3,
      isGroup: _0x23550f,
      sender: _0x235470,
      senderNumber: _0x372126,
      botNumber2: _0x227f6,
      botNumber: _0x319bf0,
      pushname: _0x5662e6,
      isMe: _0xf51347,
      isOwner: _0x5d775d,
      groupMetadata: _0x3cd017,
      groupName: _0x2e5023,
      participants: _0x22835b,
      groupAdmins: _0x23f6ff,
      isBotAdmins: _0x2a1e05,
      isAdmins: _0x37b3ac,
      reply: _0x2e4f1e,
    }
  ) => {
    try {
      if (!_0x389da3) {
        return await _0x2e4f1e(imgmsg)
      }
      if (isUrl(_0x389da3) && !ytreg(_0x389da3)) {
        return await _0x2e4f1e(imgmsg)
      }
      if (isUrl(_0x389da3) && _0x389da3.includes('/shorts')) {
        let _0x554fe2 =
          '*\uD83C\uDFAC\uD83D\uDCE5VAJIRA-MD YT DOWNLOADER*\n\n*\u270F️ ʀᴇꜱᴜʟᴛ:*\n*\uD83C\uDFAD ʀᴇǫᴜᴇꜱᴛᴇʀ:*\n\n*\u25EF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25EF*_'
        const _0x3392b4 = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x2b82dc + 'selectaud ' + _0x389da3,
                  description: 'DOWNLOAD SONG \uD83C\uDF99️',
                },
                {
                  title: '2',
                  rowId: _0x2b82dc + 'selectvid ' + _0x389da3,
                  description: 'DOWNLOAD VIDEO \uD83C\uDF9E️',
                },
              ],
            },
          ],
          _0x5e8324 = {
            text: _0x554fe2,
            footer:
              '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x3392b4,
          }
        const _0x27247f = _0x5e8324,
          _0x4fc15a = {}
        return (
          (_0x4fc15a.quoted = _0x10e073),
          await _0x48a45d.replyList(_0x26e6c1, _0x27247f, _0x4fc15a)
        )
      }
      if (ytreg(_0x389da3)) {
        let _0x49df9a =
          '*\uD83C\uDFAC\uD83D\uDCE5VAJIRA-MD YT DOWNLOADER*\n\n*\u270F️ ʀᴇꜱᴜʟᴛ:*\n*\uD83C\uDFAD ʀᴇǫᴜᴇꜱᴛᴇʀ:*\n\n*\u25EF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25EF*_'
        const _0x29b83e = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x2b82dc + 'ytdocs ' + _0x389da3,
                  description: 'DOWNLOAD SONG \uD83C\uDF99️',
                },
                {
                  title: '2',
                  rowId: _0x2b82dc + 'ytdocv ' + _0x389da3,
                  description: 'DOWNLOAD VIDEO \uD83C\uDF9E️',
                },
              ],
            },
          ],
          _0x2527c1 = {
            text: _0x49df9a,
            footer:
              '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x29b83e,
          }
        const _0x5ac66b = _0x2527c1,
          _0x568ddb = {}
        return (
          (_0x568ddb.quoted = _0x10e073),
          await _0x48a45d.replyList(_0x26e6c1, _0x5ac66b, _0x568ddb)
        )
      }
      let _0x16f73c = require('yt-search'),
        _0x420acc = await _0x16f73c(_0x389da3),
        _0x3a9f75 = _0x420acc.videos[0]
      const _0x18ba54 =
          '*\uD83C\uDFAC\uD83D\uDCE5VAJIRA-MD YT DOWNLOADER*\n\n*\uD83C\uDFBC ꜱᴏɴɢ ɴᴀᴍᴇ: ' +
          _0x3a9f75.title +
          '*\n*\uD83C\uDFBB ᴄʜᴀɴɴᴇʟ: ' +
          _0x3a9f75.author.name +
          '*\n\n*\u25EF\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25EF*_',
        _0x65a4c2 = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId: _0x2b82dc + 'selectaud ' + _0x3a9f75.url,
                description: 'DOWNLOAD SONG \uD83C\uDF99️',
              },
              {
                title: '2',
                rowId: _0x2b82dc + 'selectvid ' + _0x3a9f75.url,
                description: 'DOWNLOAD VIDEO \uD83C\uDF9E️',
              },
            ],
          },
        ],
        _0x172fc9 = { url: _0x3a9f75.thumbnail }
      const _0x234cfe = {
        image: _0x172fc9,
        caption: _0x18ba54,
        footer: config.FOOTER,
        buttonText: '\uD83D\uDD22 Reply below number,',
        sections: _0x65a4c2,
        contextInfo: {},
      }
      _0x234cfe.contextInfo.externalAdReply = {}
      _0x234cfe.contextInfo.externalAdReply.title =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ -  ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
      _0x234cfe.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
      _0x234cfe.contextInfo.externalAdReply.mediaType = 1
      _0x234cfe.contextInfo.externalAdReply.sourceUrl = ''
      _0x234cfe.contextInfo.externalAdReply.thumbnailUrl =
        'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg'
      _0x234cfe.contextInfo.externalAdReply.renderLargerThumbnail = false
      _0x234cfe.contextInfo.externalAdReply.showAdAttribution = true
      const _0x36bf46 = _0x234cfe,
        _0x2f4f6f = { quoted: _0x10e073 }
      await _0x48a45d.replyList(_0x26e6c1, _0x36bf46, _0x2f4f6f)
    } catch (_0x24a1e7) {
      _0x2e4f1e(N_FOUND)
      _0x25a42c(_0x24a1e7)
    }
  }
)
const _0x5cfb07 = {}
_0x5cfb07.pattern = 'video'
_0x5cfb07.alias = ['ytvideo']
_0x5cfb07.use = '.video lelena'
_0x5cfb07.react = '\uD83D\uDCFD️'
_0x5cfb07.desc = descv
_0x5cfb07.category = 'download'
_0x5cfb07.filename = __filename
cmd(
  _0x5cfb07,
  async (
    _0x32388b,
    _0x32e5e4,
    _0x177089,
    {
      from: _0x23295c,
      prefix: _0x572e8c,
      l: _0x5856f8,
      quoted: _0x884817,
      body: _0x10d622,
      isCmd: _0x54a4b8,
      command: _0x39c86a,
      args: _0x432d3e,
      q: _0x5c075b,
      isGroup: _0x31c71e,
      sender: _0x3d0e75,
      senderNumber: _0xba408e,
      botNumber2: _0x2e231d,
      botNumber: _0x179d58,
      pushname: _0x509516,
      isMe: _0x57885c,
      isOwner: _0x381546,
      groupMetadata: _0xb7ae22,
      groupName: _0x47f94c,
      participants: _0x2b78f8,
      groupAdmins: _0x35567b,
      isBotAdmins: _0x48c1f2,
      isAdmins: _0x5e853e,
      reply: _0x40e89b,
    }
  ) => {
    try {
      if (!_0x5c075b) {
        return await _0x40e89b(imgmsg)
      }
      if (isUrl(_0x5c075b) && !ytreg(_0x5c075b)) {
        return await _0x40e89b(imgmsg)
      }
      if (isUrl(_0x5c075b) && _0x5c075b.includes('/shorts')) {
        let _0xf677ef =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SELECT VIDEO TYPE*'
        const _0x5e7578 = [
            {
              title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
              rows: [
                {
                  title: '    1.1',
                  rowId: _0x572e8c + '240p ' + _0x5c075b,
                  description: '```240p```',
                },
                {
                  title: '    1.2',
                  rowId: _0x572e8c + '360p ' + _0x5c075b,
                  description: '```320p```',
                },
                {
                  title: '    1.3',
                  rowId: _0x572e8c + '480p ' + _0x5c075b,
                  description: '```480p```',
                },
                {
                  title: '    1.4',
                  rowId: _0x572e8c + '720p ' + _0x5c075b,
                  description: '```720p```',
                },
                {
                  title: '    1.5',
                  rowId: _0x572e8c + '1080p ' + _0x5c075b,
                  description: '```1080p```',
                },
              ],
            },
            {
              title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
              rows: [
                {
                  title: '    2.1',
                  rowId: _0x572e8c + '24p ' + _0x5c075b,
                  description: '```240p```',
                },
                {
                  title: '    2.2',
                  rowId: _0x572e8c + '36p ' + _0x5c075b,
                  description: '```360p```',
                },
                {
                  title: '    2.3',
                  rowId: _0x572e8c + '48p ' + _0x5c075b,
                  description: '```480p```',
                },
                {
                  title: '    2.4',
                  rowId: _0x572e8c + '72p ' + _0x5c075b,
                  description: '```720p```',
                },
                {
                  title: '    2.5',
                  rowId: _0x572e8c + '108p ' + _0x5c075b,
                  description: '```1080p```',
                },
              ],
            },
          ],
          _0x3bdfac = {
            text: _0xf677ef,
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x5e7578,
            contextInfo: {},
          }
        _0x3bdfac.contextInfo.externalAdReply = {}
        _0x3bdfac.contextInfo.externalAdReply.title =
          '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
        _0x3bdfac.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
        _0x3bdfac.contextInfo.externalAdReply.mediaType = 1
        _0x3bdfac.contextInfo.externalAdReply.sourceUrl = ''
        _0x3bdfac.contextInfo.externalAdReply.thumbnailUrl =
          'https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg'
        _0x3bdfac.contextInfo.externalAdReply.renderLargerThumbnail = false
        _0x3bdfac.contextInfo.externalAdReply.showAdAttribution = true
        const _0x294bbe = _0x3bdfac,
          _0x21ce49 = {}
        return (
          (_0x21ce49.quoted = _0x32e5e4),
          await _0x32388b.replyList(_0x23295c, _0x294bbe, _0x21ce49)
        )
      }
      if (ytreg(_0x5c075b)) {
        let _0x2ff576 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n*SELECT VIDEO TYPE*'
        const _0x153fd0 = [
            {
              title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
              rows: [
                {
                  title: '    1.1',
                  rowId: _0x572e8c + '240p ' + _0x5c075b,
                  description: '```240p```',
                },
                {
                  title: '    1.2',
                  rowId: _0x572e8c + '360p ' + _0x5c075b,
                  description: '```320p```',
                },
                {
                  title: '    1.3',
                  rowId: _0x572e8c + '480p ' + _0x5c075b,
                  description: '```480p```',
                },
                {
                  title: '    1.4',
                  rowId: _0x572e8c + '720p ' + _0x5c075b,
                  description: '```720p```',
                },
                {
                  title: '    1.5',
                  rowId: _0x572e8c + '1080p ' + _0x5c075b,
                  description: '```1080p```',
                },
              ],
            },
            {
              title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
              rows: [
                {
                  title: '    2.1',
                  rowId: _0x572e8c + '24p ' + _0x5c075b,
                  description: '```240p```',
                },
                {
                  title: '    2.2',
                  rowId: _0x572e8c + '36p ' + _0x5c075b,
                  description: '```360p```',
                },
                {
                  title: '    2.3',
                  rowId: _0x572e8c + '48p ' + _0x5c075b,
                  description: '```480p```',
                },
                {
                  title: '    2.4',
                  rowId: _0x572e8c + '72p ' + _0x5c075b,
                  description: '```720p```',
                },
                {
                  title: '    2.5',
                  rowId: _0x572e8c + '108p ' + _0x5c075b,
                  description: '```1080p```',
                },
              ],
            },
          ],
          _0x5c487c = {
            text: _0x2ff576,
            footer: config.FOOTER,
            buttonText: '\uD83D\uDD22 Reply below number,',
            sections: _0x153fd0,
          }
        const _0x427706 = _0x5c487c,
          _0x429be5 = {}
        return (
          (_0x429be5.quoted = _0x32e5e4),
          await _0x32388b.replyList(_0x23295c, _0x427706, _0x429be5)
        )
      }
      let _0x1d0e4c = require('yt-search'),
        _0x4557f2 = await _0x1d0e4c(_0x5c075b),
        _0x5e2ab8 = _0x4557f2.videos[0]
      const _0x1e65b2 =
          '\uD83D\uDCFD️ *ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴠɪᴅᴇᴏ-ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*\uD83D\uDCFD️\n\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n*ℹ️ Title:* ' +
          _0x5e2ab8.title +
          '\n*\uD83D\uDC41️‍\uD83D\uDDE8️ Views:* ' +
          _0x5e2ab8.views +
          '\n*\uD83D\uDD58 Duration:* ' +
          _0x5e2ab8.timestamp +
          '\n*\uD83D\uDD17 Url:* ' +
          _0x5e2ab8.url +
          ' \n\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500',
        _0x157b6a = [
          {
            title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
            rows: [
              {
                title: '    1.1',
                rowId: _0x572e8c + '240p ' + _0x5e2ab8.url,
                description: '```240p```',
              },
              {
                title: '    1.2',
                rowId: _0x572e8c + '360p ' + _0x5e2ab8.url,
                description: '```320p```',
              },
              {
                title: '    1.3',
                rowId: _0x572e8c + '480p ' + _0x5e2ab8.url,
                description: '```480p```',
              },
              {
                title: '    1.4',
                rowId: _0x572e8c + '720p ' + _0x5e2ab8.url,
                description: '```720p```',
              },
              {
                title: '    1.5',
                rowId: _0x572e8c + '1080p ' + _0x5e2ab8.url,
                description: '```1080p```',
              },
            ],
          },
          {
            title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
            rows: [
              {
                title: '    2.1',
                rowId: _0x572e8c + '24p ' + _0x5e2ab8.url,
                description: '```240p```',
              },
              {
                title: '    2.2',
                rowId: _0x572e8c + '36p ' + _0x5e2ab8.url,
                description: '```360p```',
              },
              {
                title: '    2.3',
                rowId: _0x572e8c + '48p ' + _0x5e2ab8.url,
                description: '```480p```',
              },
              {
                title: '    2.4',
                rowId: _0x572e8c + '72p ' + _0x5e2ab8.url,
                description: '```720p```',
              },
              {
                title: '    2.5',
                rowId: _0x572e8c + '108p ' + _0x5e2ab8.url,
                description: '```1080p```',
              },
            ],
          },
        ],
        _0x372e8c = { url: _0x5e2ab8.thumbnail }
      const _0x426534 = {
        image: _0x372e8c,
        caption: _0x1e65b2,
        footer: config.FOOTER,
        buttonText: '\uD83D\uDD22 Reply below number,',
        sections: _0x157b6a,
        contextInfo: {},
      }
      _0x426534.contextInfo.externalAdReply = {}
      _0x426534.contextInfo.externalAdReply.title =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ -  ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
      _0x426534.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
      _0x426534.contextInfo.externalAdReply.mediaType = 1
      _0x426534.contextInfo.externalAdReply.sourceUrl = ''
      _0x426534.contextInfo.externalAdReply.thumbnailUrl =
        'https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg'
      _0x426534.contextInfo.externalAdReply.renderLargerThumbnail = false
      _0x426534.contextInfo.externalAdReply.showAdAttribution = true
      const _0xb79cef = _0x426534,
        _0x44014d = { quoted: _0x32e5e4 }
      await _0x32388b.replyList(_0x23295c, _0xb79cef, _0x44014d)
    } catch (_0x496465) {
      _0x40e89b(N_FOUND), _0x5856f8(_0x496465)
    }
  }
)
const _0x328f51 = {}
_0x328f51.pattern = 'song'
_0x328f51.alias = ['ytsong']
_0x328f51.use = '.song lelena'
_0x328f51.react = '\uD83C\uDFA7'
_0x328f51.desc = descs
_0x328f51.category = 'download'
_0x328f51.filename = __filename
cmd(
  _0x328f51,
  async (
    _0xb4194,
    _0x30169a,
    _0x4c8b8b,
    {
      from: _0xe3a972,
      prefix: _0x2a2aa7,
      l: _0x1da599,
      quoted: _0x218f2a,
      body: _0x2e870c,
      isCmd: _0x5992c4,
      command: _0x40fdd0,
      args: _0x542894,
      q: _0x5d1dcc,
      isGroup: _0x3eab76,
      sender: _0x5712e8,
      senderNumber: _0x14ca1a,
      botNumber2: _0x10825e,
      botNumber: _0x3b64f3,
      pushname: _0x4cdb40,
      isMe: _0x5927bb,
      isOwner: _0x4f5253,
      groupMetadata: _0x28a80a,
      groupName: _0x500ae2,
      participants: _0x1924d2,
      groupAdmins: _0x4c3791,
      isBotAdmins: _0x364eb0,
      isAdmins: _0x538600,
      reply: _0x37cb57,
    }
  ) => {
    try {
      if (!_0x5d1dcc) {
        return await _0x37cb57(imgmsg)
      }
      if (isUrl(_0x5d1dcc) && !ytreg(_0x5d1dcc)) {
        return await _0x37cb57(imgmsg)
      }
      if (isUrl(_0x5d1dcc) && _0x5d1dcc.includes('/shorts')) {
        let _0xdc0187 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SELECT SONG TYPE*'
        const _0x4577fd = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x2a2aa7 + 'ytmp3 ' + _0x5d1dcc,
                  description: 'Normal type song \uD83C\uDFB6',
                },
                {
                  title: '2',
                  rowId: _0x2a2aa7 + 'ytdocs ' + _0x5d1dcc,
                  description: 'Document type song \uD83D\uDCC2',
                },
              ],
            },
          ],
          _0x29f89c = {
            text: _0xdc0187,
            footer:
              '*ᴠᴀᴊɪʀᴀ ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText:
              '```\uD83D\uDD22 Reply below number you need song type,```',
            sections: _0x4577fd,
          }
        const _0x35e782 = _0x29f89c,
          _0x5a92c9 = {}
        return (
          (_0x5a92c9.quoted = _0x30169a),
          await _0xb4194.replyList(_0xe3a972, _0x35e782, _0x5a92c9)
        )
      }
      if (ytreg(_0x5d1dcc)) {
        let _0x1d0c6b =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n*SELECT SONG TYPE*'
        const _0x10222c = [
            {
              title: '',
              rows: [
                {
                  title: '1',
                  rowId: _0x2a2aa7 + 'ytmp3 ' + _0x5d1dcc,
                  description: 'Normal type song \uD83C\uDFB6',
                },
                {
                  title: '2',
                  rowId: _0x2a2aa7 + 'ytdocs ' + _0x5d1dcc,
                  description: 'Document type song \uD83D\uDCC2',
                },
              ],
            },
          ],
          _0x4047f6 = {
            text: _0x1d0c6b,
            footer:
              '*ᴠᴀᴊɪʀᴀ-ᴍᴅ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ:ᴠ-ɪ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ*',
            buttonText:
              '```\uD83D\uDD22 Reply below number you need song type,```',
            sections: _0x10222c,
          }
        const _0x22e8b8 = _0x4047f6,
          _0x153542 = {}
        return (
          (_0x153542.quoted = _0x30169a),
          await _0xb4194.replyList(_0xe3a972, _0x22e8b8, _0x153542)
        )
      }
      let _0x3d1d09 = require('yt-search'),
        _0x1ca4a0 = await _0x3d1d09(_0x5d1dcc),
        _0x242841 = _0x1ca4a0.videos[0]
      const _0x2af528 =
          '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n   *SONG DOWNLOADER*\n\n*\uD83D\uDCC3 Title:* ' +
          _0x242841.title +
          '\n\n*\uD83D\uDCFA Views:* ' +
          _0x242841.views +
          '\n\n*\uD83D\uDD79️ Duration:* ' +
          _0x242841.timestamp +
          '\n\n*\uD83D\uDD17 Url:* ' +
          _0x242841.url,
        _0x84e381 = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId: _0x2a2aa7 + 'ytmp3 ' + _0x242841.url,
                description: 'Normal type song \uD83C\uDFB6',
              },
              {
                title: '2',
                rowId: _0x2a2aa7 + 'ytdocs ' + _0x242841.url,
                description: 'Document type song \uD83D\uDCC2',
              },
            ],
          },
        ],
        _0x320cd1 = { url: _0x242841.thumbnail }
      const _0x6245cf = {
        image: _0x320cd1,
        caption: _0x2af528,
        footer: config.FOOTER,
        buttonText: '\uD83D\uDD22 Reply below number,',
        sections: _0x84e381,
        contextInfo: {},
      }
      _0x6245cf.contextInfo.externalAdReply = {}
      _0x6245cf.contextInfo.externalAdReply.title =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ -  ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
      _0x6245cf.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
      _0x6245cf.contextInfo.externalAdReply.mediaType = 1
      _0x6245cf.contextInfo.externalAdReply.sourceUrl = ''
      _0x6245cf.contextInfo.externalAdReply.thumbnailUrl =
        'https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg'
      _0x6245cf.contextInfo.externalAdReply.renderLargerThumbnail = false
      _0x6245cf.contextInfo.externalAdReply.showAdAttribution = true
      const _0x35aedf = _0x6245cf,
        _0x37f5e6 = { quoted: _0x30169a }
      await _0xb4194.replyList(_0xe3a972, _0x35aedf, _0x37f5e6)
    } catch (_0x1dbcd4) {
      _0x37cb57(N_FOUND), _0x1da599(_0x1dbcd4)
    }
  }
)
const _0x5c9253 = {}
_0x5c9253.alias = ['selectaud']
_0x5c9253.filename = __filename
cmd(
  _0x5c9253,
  async (
    _0x3d9a58,
    _0x601dd0,
    _0x29accc,
    {
      from: _0xeea73f,
      l: _0x66a54a,
      quoted: _0x59a907,
      prefix: _0x231d36,
      body: _0x3efac0,
      isCmd: _0x48c1f4,
      command: _0x3182f9,
      args: _0x1cfa54,
      q: _0x46bdfb,
      isGroup: _0x4dc6b4,
      sender: _0x5e1590,
      senderNumber: _0x33eb21,
      botNumber2: _0x15f442,
      botNumber: _0x1e4b9f,
      pushname: _0x288ca3,
      isMe: _0x2e4bfe,
      isOwner: _0x15a4aa,
      groupMetadata: _0xc46a02,
      groupName: _0x1a0d71,
      participants: _0x40dd9d,
      groupAdmins: _0x5a7128,
      isBotAdmins: _0x290efb,
      isAdmins: _0x440b85,
      reply: _0x35b3fd,
    }
  ) => {
    try {
      let _0x556064 =
        '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *SELECT VIDEO QUALITY*'
      const _0x36e0fa = [
          {
            title: '',
            rows: [
              {
                title: '1',
                rowId: _0x231d36 + 'ytmp3 ' + _0x46bdfb,
                description: 'Normal type song \uD83C\uDFB6',
              },
              {
                title: '2',
                rowId: _0x231d36 + 'ytdocs ' + _0x46bdfb,
                description: 'Document type video \uD83D\uDCC1',
              },
            ],
          },
        ],
        _0x1dcb53 = {
          text: _0x556064,
          footer: config.FOOTER,
          buttonText: '\uD83D\uDD22 Reply below number,',
          sections: _0x36e0fa,
          contextInfo: {},
        }
      _0x1dcb53.contextInfo.externalAdReply = {}
      _0x1dcb53.contextInfo.externalAdReply.title =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
      _0x1dcb53.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
      _0x1dcb53.contextInfo.externalAdReply.mediaType = 1
      _0x1dcb53.contextInfo.externalAdReply.sourceUrl = ''
      _0x1dcb53.contextInfo.externalAdReply.thumbnailUrl =
        'https://telegra.ph/file/b4caa5682d75220623b83.jpg'
      _0x1dcb53.contextInfo.externalAdReply.renderLargerThumbnail = false
      _0x1dcb53.contextInfo.externalAdReply.showAdAttribution = true
      const _0x35c5de = _0x1dcb53,
        _0x45ad97 = {}
      return (
        (_0x45ad97.quoted = _0x601dd0),
        await _0x3d9a58.replyList(_0xeea73f, _0x35c5de, _0x45ad97)
      )
    } catch (_0x30a71d) {
      _0x35b3fd(N_FOUND), _0x66a54a(_0x30a71d)
    }
  }
)
const _0x4a7321 = {}
_0x4a7321.alias = ['selectvid']
_0x4a7321.filename = __filename
cmd(
  _0x4a7321,
  async (
    _0x2a4b5e,
    _0x452dfd,
    _0x20a17c,
    {
      from: _0x3c5d61,
      l: _0x51b809,
      quoted: _0x4f70d3,
      prefix: _0x182757,
      body: _0x10778c,
      isCmd: _0x5ef6d3,
      command: _0x1e3a20,
      args: _0x26a32c,
      q: _0x572bba,
      isGroup: _0x493ae1,
      sender: _0x2ea9f9,
      senderNumber: _0x179024,
      botNumber2: _0xfe2ee,
      botNumber: _0x2ccb39,
      pushname: _0x4be681,
      isMe: _0x424548,
      isOwner: _0x2638ab,
      groupMetadata: _0x418dec,
      groupName: _0x1f2548,
      participants: _0x46ed2c,
      groupAdmins: _0x5abd1c,
      isBotAdmins: _0x1e8117,
      isAdmins: _0x41d7c8,
      reply: _0x21d3fd,
    }
  ) => {
    try {
      let _0xb09142 =
        '[\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB]\n\n  *SELECT VIDEO QUALITY*'
      const _0x5a0b25 = [
          {
            title: '*[1] NORMAL QUALITY \uD83C\uDFB6*',
            rows: [
              {
                title: '    2.4',
                rowId: _0x182757 + '240p ' + _0x572bba,
                description: '```240p```',
              },
              {
                title: '    1.1',
                rowId: _0x182757 + '360p ' + _0x572bba,
                description: '```320p```',
              },
              {
                title: '    1.2',
                rowId: _0x182757 + '480p ' + _0x572bba,
                description: '```480p```',
              },
              {
                title: '    1.3',
                rowId: _0x182757 + '720p ' + _0x572bba,
                description: '```720p```',
              },
              {
                title: '    1.4',
                rowId: _0x182757 + '1080p ' + _0x572bba,
                description: '```1080p```',
              },
            ],
          },
          {
            title: '*[2] DOCUMENT QUALITY \uD83D\uDCC2*',
            rows: [
              {
                title: '    2.1',
                rowId: _0x182757 + '24p ' + _0x572bba,
                description: '```240p```',
              },
              {
                title: '    2.2',
                rowId: _0x182757 + '36p ' + _0x572bba,
                description: '```360p```',
              },
              {
                title: '    2.3',
                rowId: _0x182757 + '48p ' + _0x572bba,
                description: '```480p```',
              },
              {
                title: '    2.4',
                rowId: _0x182757 + '72p ' + _0x572bba,
                description: '```720p```',
              },
              {
                title: '    2.5',
                rowId: _0x182757 + '108p ' + _0x572bba,
                description: '```1080p```',
              },
            ],
          },
        ],
        _0x3f6c1d = {
          text: _0xb09142,
          footer: config.FOOTER,
          buttonText: '\uD83D\uDD22 Reply below number,',
          sections: _0x5a0b25,
          contextInfo: {},
        }
      _0x3f6c1d.contextInfo.externalAdReply = {}
      _0x3f6c1d.contextInfo.externalAdReply.title =
        '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB'
      _0x3f6c1d.contextInfo.externalAdReply.body = 'ᴀɴ ᴜꜱᴇʀ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ'
      _0x3f6c1d.contextInfo.externalAdReply.mediaType = 1
      _0x3f6c1d.contextInfo.externalAdReply.sourceUrl = ''
      _0x3f6c1d.contextInfo.externalAdReply.thumbnailUrl =
        'https://telegra.ph/file/b4caa5682d75220623b83.jpg'
      _0x3f6c1d.contextInfo.externalAdReply.renderLargerThumbnail = false
      _0x3f6c1d.contextInfo.externalAdReply.showAdAttribution = true
      const _0x2e75c6 = _0x3f6c1d,
        _0x18efe8 = {}
      return (
        (_0x18efe8.quoted = _0x452dfd),
        await _0x2a4b5e.replyList(_0x3c5d61, _0x2e75c6, _0x18efe8)
      )
    } catch (_0x148ebd) {
      _0x21d3fd(N_FOUND), _0x51b809(_0x148ebd)
    }
  }
)
const _0x22f2e9 = {}
_0x22f2e9.pattern = '240p'
_0x22f2e9.use = '.240p <video url>'
_0x22f2e9.react = '\uD83D\uDCFD️'
_0x22f2e9.desc = 'Download yt videos.'
_0x22f2e9.category = ''
_0x22f2e9.filename = __filename
cmd(
  _0x22f2e9,
  async (
    _0x2cd2c5,
    _0x2584b3,
    _0x27d0d0,
    {
      from: _0x19ddc7,
      l: _0x392142,
      quoted: _0x2f46e6,
      body: _0x47fedc,
      isCmd: _0x1e4c2a,
      command: _0x383931,
      args: _0x5d2b42,
      q: _0x4d1140,
      isGroup: _0x8d9cbb,
      sender: _0x4ed85b,
      senderNumber: _0x5b42e3,
      botNumber2: _0x2a7e10,
      botNumber: _0x66c732,
      pushname: _0xcc19e5,
      isMe: _0x4b1055,
      isOwner: _0xaaddd5,
      groupMetadata: _0x4d71c5,
      groupName: _0x42f37d,
      participants: _0x3af6a4,
      groupAdmins: _0x55d3f6,
      isBotAdmins: _0x4bcae6,
      isAdmins: _0x18a811,
      reply: _0xb02b69,
    }
  ) => {
    try {
      if (!ytreg(_0x4d1140)) {
        return await _0xb02b69(urlneed)
      }
      const _0x703dd2 = await dl.youtubedl(_0x4d1140)
      let _0x670517 = _0x703dd2,
        _0xfeb6df = await getsize(await _0x670517.video['240p'].download())
      const _0x2e3d65 = { quoted: _0x2584b3 }
      let _0x334ada = await _0x2cd2c5.sendMessage(
        _0x19ddc7,
        {
          video: { url: await _0x670517.video['240p'].download() },
          caption: config.FOOTER,
        },
        _0x2e3d65
      )
      const _0x4c5ec8 = {
        text: '\uD83C\uDFA5',
        key: _0x334ada.key,
      }
      const _0x3ba779 = { react: _0x4c5ec8 }
      await _0x2cd2c5.sendMessage(_0x19ddc7, _0x3ba779)
    } catch (_0x29be6e) {
      _0xb02b69(N_FOUND)
      _0x392142(_0x29be6e)
    }
  }
)
const _0x392e34 = {}
_0x392e34.pattern = '360p'
_0x392e34.use = '.360p <video url>'
_0x392e34.react = '\uD83D\uDCFD️'
_0x392e34.desc = 'Download yt videos.'
_0x392e34.category = ''
_0x392e34.filename = __filename
cmd(
  _0x392e34,
  async (
    _0x4954d5,
    _0x1539f4,
    _0x38903a,
    {
      from: _0x114fe6,
      l: _0x58cfad,
      quoted: _0xa35eb5,
      body: _0x1daae2,
      isCmd: _0x18d1fe,
      command: _0x2d6c2c,
      args: _0x4c2c7c,
      q: _0x3152fc,
      isGroup: _0x132cd5,
      sender: _0x409ce2,
      senderNumber: _0x35a7e1,
      botNumber2: _0x582ded,
      botNumber: _0x2aefd4,
      pushname: _0xac5ae0,
      isMe: _0x110ebd,
      isOwner: _0x249f52,
      groupMetadata: _0x71bc8c,
      groupName: _0x1887f7,
      participants: _0x1ccef4,
      groupAdmins: _0x3f27e8,
      isBotAdmins: _0x2dbc62,
      isAdmins: _0xc0fb19,
      reply: _0x5b11e0,
    }
  ) => {
    try {
      if (!ytreg(_0x3152fc)) {
        return await _0x5b11e0(urlneed)
      }
      const _0x13b065 = await dl.youtubedl(_0x3152fc)
      let _0x3438ab = _0x13b065,
        _0x35334d = await getsize(await _0x3438ab.video['360p'].download())
      const _0x1a3420 = { quoted: _0x1539f4 }
      let _0x236da7 = await _0x4954d5.sendMessage(
        _0x114fe6,
        {
          video: { url: await _0x3438ab.video['360p'].download() },
          caption: config.FOOTER,
        },
        _0x1a3420
      )
      const _0x1baa57 = {
        text: '\uD83C\uDFA5',
        key: _0x236da7.key,
      }
      const _0x2c8741 = { react: _0x1baa57 }
      await _0x4954d5.sendMessage(_0x114fe6, _0x2c8741)
    } catch (_0xd9e789) {
      _0x5b11e0(N_FOUND)
      _0x58cfad(_0xd9e789)
    }
  }
)
const _0x137c47 = {}
_0x137c47.pattern = '480p'
_0x137c47.use = '.480p <video url>'
_0x137c47.react = '\uD83D\uDCFD️'
_0x137c47.desc = 'Download yt videos.'
_0x137c47.category = ''
_0x137c47.filename = __filename
cmd(
  _0x137c47,
  async (
    _0x50ae12,
    _0x247acc,
    _0x5b9d47,
    {
      from: _0x87f118,
      l: _0x27ad57,
      quoted: _0x4d653b,
      body: _0x24f2b0,
      isCmd: _0x13faab,
      command: _0x11e522,
      args: _0x365e0e,
      q: _0x4d122b,
      isGroup: _0x4335ef,
      sender: _0x17310a,
      senderNumber: _0xe1ac23,
      botNumber2: _0x5c7c94,
      botNumber: _0x3bef9b,
      pushname: _0x56747b,
      isMe: _0x36c60a,
      isOwner: _0x965496,
      groupMetadata: _0x11e268,
      groupName: _0x318d18,
      participants: _0xc5409,
      groupAdmins: _0x342810,
      isBotAdmins: _0x7f876,
      isAdmins: _0x4c7a9e,
      reply: _0xc97ef6,
    }
  ) => {
    try {
      if (!ytreg(_0x4d122b)) {
        return await _0xc97ef6(urlneed)
      }
      const _0x5ba6d2 = await dl.youtubedl(_0x4d122b)
      let _0x4322b3 = _0x5ba6d2,
        _0x43169a = await getsize(await _0x4322b3.video['480p'].download())
      const _0x13f4f0 = { quoted: _0x247acc }
      let _0x2434f3 = await _0x50ae12.sendMessage(
        _0x87f118,
        {
          video: { url: await _0x4322b3.video['480p'].download() },
          caption: config.FOOTER,
        },
        _0x13f4f0
      )
      const _0x2f5576 = {
        text: '\uD83C\uDFA5',
        key: _0x2434f3.key,
      }
      const _0x255c2c = { react: _0x2f5576 }
      await _0x50ae12.sendMessage(_0x87f118, _0x255c2c)
    } catch (_0xdba8f0) {
      _0xc97ef6(N_FOUND)
      _0x27ad57(_0xdba8f0)
    }
  }
)
const _0x4c9480 = {}
_0x4c9480.pattern = '720p'
_0x4c9480.use = '.720p <video url>'
_0x4c9480.react = '\uD83D\uDCFD️'
_0x4c9480.desc = 'Download yt videos.'
_0x4c9480.category = ''
_0x4c9480.filename = __filename
cmd(
  _0x4c9480,
  async (
    _0x189d7f,
    _0x57c3ea,
    _0x434df3,
    {
      from: _0x276e88,
      l: _0x375e21,
      quoted: _0x29a8f4,
      body: _0x39e62a,
      isCmd: _0x5dfda0,
      command: _0x18875f,
      args: _0x5e6a33,
      q: _0x395824,
      isGroup: _0x549c2f,
      sender: _0x26b3a4,
      senderNumber: _0x16e410,
      botNumber2: _0xc2f311,
      botNumber: _0x2a4f50,
      pushname: _0x585256,
      isMe: _0x347ffb,
      isOwner: _0x4bc5d5,
      groupMetadata: _0x4bf086,
      groupName: _0x9eaeb7,
      participants: _0x1a7560,
      groupAdmins: _0x452919,
      isBotAdmins: _0x58ed26,
      isAdmins: _0x531175,
      reply: _0x477cb9,
    }
  ) => {
    try {
      if (!ytreg(_0x395824)) {
        return await _0x477cb9(urlneed)
      }
      const _0x520c0f = await dl.youtubedl(_0x395824)
      let _0x4eb1ce = _0x520c0f,
        _0x2bbe52 = await getsize(await _0x4eb1ce.video['720p'].download())
      const _0x148470 = { quoted: _0x57c3ea }
      let _0x4749d4 = await _0x189d7f.sendMessage(
        _0x276e88,
        {
          video: { url: await _0x4eb1ce.video['720p'].download() },
          caption: config.FOOTER,
        },
        _0x148470
      )
      const _0x4ec383 = {
        text: '\uD83C\uDFA5',
        key: _0x4749d4.key,
      }
      const _0x5bdfea = { react: _0x4ec383 }
      await _0x189d7f.sendMessage(_0x276e88, _0x5bdfea)
    } catch (_0x151455) {
      _0x477cb9(N_FOUND), _0x375e21(_0x151455)
    }
  }
)
const _0x12ed3d = {}
_0x12ed3d.pattern = '1080p'
_0x12ed3d.use = '.1080p <video url>'
_0x12ed3d.react = '\uD83D\uDCFD️'
_0x12ed3d.desc = 'Download yt videos.'
_0x12ed3d.category = ''
_0x12ed3d.filename = __filename
cmd(
  _0x12ed3d,
  async (
    _0x27c6af,
    _0x5d3080,
    _0x53a23c,
    {
      from: _0x6a25bb,
      l: _0x525ca7,
      quoted: _0x2a50a1,
      body: _0x2c01b1,
      isCmd: _0x34b30a,
      command: _0x52b9d0,
      args: _0x305517,
      q: _0x412135,
      isGroup: _0xb10f4,
      sender: _0x2d1505,
      senderNumber: _0x313744,
      botNumber2: _0x3a2b0f,
      botNumber: _0x4c7a2a,
      pushname: _0x323c89,
      isMe: _0x633904,
      isOwner: _0x5fd6e5,
      groupMetadata: _0x29704b,
      groupName: _0x58c37f,
      participants: _0x1efa29,
      groupAdmins: _0x16e83d,
      isBotAdmins: _0x40789e,
      isAdmins: _0x2c4c2a,
      reply: _0x481c34,
    }
  ) => {
    try {
      if (!ytreg(_0x412135)) {
        return await _0x481c34(urlneed)
      }
      const _0x4a41b2 = await dl.youtubedl(_0x412135)
      let _0x1192b2 = _0x4a41b2,
        _0x521478 = await getsize(await _0x1192b2.video['1080p'].download())
      const _0x4d558a = { quoted: _0x5d3080 }
      let _0x3b5092 = await _0x27c6af.sendMessage(
        _0x6a25bb,
        {
          video: { url: await _0x1192b2.video['1080p'].download() },
          caption: config.FOOTER,
        },
        _0x4d558a
      )
      const _0x4f3ff1 = {
        text: '\uD83C\uDFA5',
        key: _0x3b5092.key,
      }
      const _0x3ce529 = { react: _0x4f3ff1 }
      await _0x27c6af.sendMessage(_0x6a25bb, _0x3ce529)
    } catch (_0x1ea742) {
      _0x481c34(N_FOUND)
      _0x525ca7(_0x1ea742)
    }
  }
)
const _0x4ac1ab = {}
_0x4ac1ab.pattern = 'ytmp3'
_0x4ac1ab.use = '.ytmp3 <yt url>'
_0x4ac1ab.react = '\uD83C\uDFA7'
_0x4ac1ab.desc = 'Download yt song.'
_0x4ac1ab.category = 'download'
_0x4ac1ab.filename = __filename
cmd(
  _0x4ac1ab,
  async (
    _0x25be69,
    _0x4297aa,
    _0x398f4d,
    {
      from: _0x549f95,
      l: _0x549b1f,
      quoted: _0x52bf9d,
      body: _0x72e112,
      isCmd: _0x2293a4,
      command: _0x10621e,
      args: _0xafbfd1,
      q: _0x285fd1,
      isGroup: _0xe8b274,
      sender: _0x15b99f,
      senderNumber: _0x573855,
      botNumber2: _0x17b9f2,
      botNumber: _0x5b02ef,
      pushname: _0x44cac1,
      isMe: _0xd93819,
      isOwner: _0x35481f,
      groupMetadata: _0x4dc9e,
      groupName: _0x41fb34,
      participants: _0x12df02,
      groupAdmins: _0x458a5c,
      isBotAdmins: _0x5174a6,
      isAdmins: _0x22ab06,
      reply: _0x126d00,
    }
  ) => {
    try {
      if (!ytreg(_0x285fd1)) {
        return await _0x126d00(urlneed)
      }
      let _0x21a7c4 = await ytdl.getInfo(_0x285fd1)
      if (_0x21a7c4.videoDetails.lengthSeconds >= videotime) {
        _0x126d00(sizetoo)
        return
      }
      let _0x39a0b3 = _0x21a7c4.videoDetails.title,
        _0x3928be = getRandom('.mp3')
      const _0x46bbd4 = {
        filter: (_0x24fa0e) =>
          _0x24fa0e.audioBitrate == 160 || _0x24fa0e.audioBitrate == 128,
      }
      const _0x508600 = ytdl(_0x285fd1, _0x46bbd4).pipe(
        fs.createWriteStream('./' + _0x3928be)
      )
      await new Promise((_0x5470e7, _0x2b7ee8) => {
        _0x508600.on('error', _0x2b7ee8), _0x508600.on('finish', _0x5470e7)
      })
      let _0x550cd7 = fs.statSync('./' + _0x3928be)
      const _0x22e1fd = { quoted: _0x4297aa }
      let _0x33bf11 = await _0x25be69.sendMessage(
        _0x549f95,
        {
          audio: fs.readFileSync('./' + _0x3928be),
          mimetype: 'audio/mpeg',
          fileName: _0x39a0b3 + '.mp3',
        },
        _0x22e1fd
      )
      const _0x223b77 = {
        text: '\uD83C\uDFBC',
        key: _0x33bf11.key,
      }
      const _0x2f01fb = {}
      return (
        (_0x2f01fb.react = _0x223b77),
        await _0x25be69.sendMessage(_0x549f95, _0x2f01fb),
        fs.unlinkSync('./' + _0x3928be)
      )
    } catch (_0x20ffa3) {
      _0x126d00(N_FOUND)
      _0x549b1f(_0x20ffa3)
    }
  }
)
const _0x13acdb = {}
_0x13acdb.pattern = 'ytmp4'
_0x13acdb.use = '.ytmp3 <yt url>'
_0x13acdb.react = '\uD83C\uDFA7'
_0x13acdb.desc = 'Download yt song.'
_0x13acdb.category = 'download'
_0x13acdb.filename = __filename
cmd(
  _0x13acdb,
  async (
    _0x350ef8,
    _0x1f5745,
    _0x38c55,
    {
      from: _0x5bf490,
      l: _0xcae838,
      quoted: _0x17cb20,
      body: _0x4e04ba,
      isCmd: _0x206ddb,
      command: _0x1d1487,
      args: _0x47bf0d,
      q: _0x49fe60,
      isGroup: _0x5c2ab7,
      sender: _0x4b56de,
      senderNumber: _0x1413f4,
      botNumber2: _0x15c173,
      botNumber: _0x54b110,
      pushname: _0x33d130,
      isMe: _0x1815cf,
      isOwner: _0x5a8acb,
      groupMetadata: _0x2a8a3a,
      groupName: _0x58a46d,
      participants: _0x20fc4f,
      groupAdmins: _0x3089f7,
      isBotAdmins: _0x2fb502,
      isAdmins: _0x3d63b2,
      reply: _0x33d15f,
    }
  ) => {
    try {
      if (!ytreg(_0x49fe60)) {
        return await _0x33d15f(urlneed)
      }
      let _0x2ae87a = await ytdl.getInfo(_0x49fe60)
      if (_0x2ae87a.videoDetails.lengthSeconds >= videotime) {
        _0x33d15f(sizetoo)
        return
      }
      let _0x159192 = _0x2ae87a.videoDetails.title,
        _0x59a7aa = getRandom('.mp3')
      const _0x8cd735 = {
        filter: (_0x184b99) =>
          _0x184b99.audioBitrate == 160 || _0x184b99.audioBitrate == 128,
      }
      const _0x1d47cf = ytdl(_0x49fe60, _0x8cd735).pipe(
        fs.createWriteStream('./' + _0x59a7aa)
      )
      await new Promise((_0x2e3fbc, _0x3338ef) => {
        _0x1d47cf.on('error', _0x3338ef)
        _0x1d47cf.on('finish', _0x2e3fbc)
      })
      let _0x34e16c = fs.statSync('./' + _0x59a7aa)
      const _0x48491a = { quoted: _0x1f5745 }
      let _0x260d7e = await _0x350ef8.sendMessage(
        _0x5bf490,
        {
          video: fs.readFileSync('./' + _0x59a7aa),
          mimetype: 'video/mp4',
          fileName: _0x159192 + '.mp3',
        },
        _0x48491a
      )
      const _0x3900ce = {
        text: '\uD83C\uDFBC',
        key: _0x260d7e.key,
      }
      const _0x24e260 = {}
      return (
        (_0x24e260.react = _0x3900ce),
        await _0x350ef8.sendMessage(_0x5bf490, _0x24e260),
        fs.unlinkSync('./' + _0x59a7aa)
      )
    } catch (_0x276b6d) {
      _0x33d15f(N_FOUND)
      _0xcae838(_0x276b6d)
    }
  }
)
const _0x54891f = {}
_0x54891f.pattern = 'ytdocs'
_0x54891f.use = '.ytdoc <yt url>'
_0x54891f.react = '\uD83C\uDFA7'
_0x54891f.desc = 'Download yt song.'
_0x54891f.category = 'download'
_0x54891f.filename = __filename
cmd(
  _0x54891f,
  async (
    _0x34bfc1,
    _0x286d5d,
    _0x58d18c,
    {
      from: _0x3557a1,
      l: _0x27b35a,
      quoted: _0x3101bf,
      body: _0x25e286,
      isCmd: _0x12c42c,
      command: _0x749ba2,
      args: _0x932fb8,
      q: _0x218436,
      isGroup: _0x20fbb1,
      sender: _0x156e4f,
      senderNumber: _0xcf5c61,
      botNumber2: _0x486cc3,
      botNumber: _0x73ee01,
      pushname: _0x49ab27,
      isMe: _0x56d01e,
      isOwner: _0x4771f1,
      groupMetadata: _0x316908,
      groupName: _0x5ac6c6,
      participants: _0x40aede,
      groupAdmins: _0xd40d40,
      isBotAdmins: _0x1b4416,
      isAdmins: _0x4b71b7,
      reply: _0x1f0c78,
    }
  ) => {
    try {
      if (!ytreg(_0x218436)) {
        return await _0x1f0c78(urlneed)
      }
      let _0x5712a0 = await ytdl.getInfo(_0x218436)
      if (_0x5712a0.videoDetails.lengthSeconds >= videotime) {
        _0x1f0c78(sizetoo)
        return
      }
      let _0x14b184 = _0x5712a0.videoDetails.title,
        _0x1a5732 = getRandom('.mp3')
      const _0x3f1687 = {
        filter: (_0x2a0a07) =>
          _0x2a0a07.audioBitrate == 160 || _0x2a0a07.audioBitrate == 128,
      }
      const _0x499178 = ytdl(_0x218436, _0x3f1687).pipe(
        fs.createWriteStream('./' + _0x1a5732)
      )
      await new Promise((_0x3c8321, _0x582975) => {
        _0x499178.on('error', _0x582975)
        _0x499178.on('finish', _0x3c8321)
      })
      let _0x2082cd = fs.statSync('./' + _0x1a5732)
      const _0x1eca21 = { quoted: _0x286d5d }
      let _0x4fd99b = await _0x34bfc1.sendMessage(
        _0x3557a1,
        {
          document: fs.readFileSync('./' + _0x1a5732),
          mimetype: 'audio/mpeg',
          fileName: _0x14b184 + '.mp3',
          caption: config.FOOTER,
        },
        _0x1eca21
      )
      const _0x40a8a4 = {
        text: '\uD83C\uDFBC',
        key: _0x4fd99b.key,
      }
      const _0x532be0 = {}
      return (
        (_0x532be0.react = _0x40a8a4),
        await _0x34bfc1.sendMessage(_0x3557a1, _0x532be0),
        fs.unlinkSync('./' + _0x1a5732)
      )
    } catch (_0x9d0e89) {
      _0x1f0c78(N_FOUND), _0x27b35a(_0x9d0e89)
    }
  }
)
const _0x24de33 = {}
_0x24de33.pattern = 'ytdocv'
_0x24de33.use = '.ytdoc <yt url>'
_0x24de33.react = '\uD83C\uDFA7'
_0x24de33.desc = 'Download yt song.'
_0x24de33.category = 'download'
_0x24de33.filename = __filename
cmd(
  _0x24de33,
  async (
    _0x10ba18,
    _0x52a8ba,
    _0x29cb89,
    {
      from: _0x488042,
      l: _0x5eadeb,
      quoted: _0x3fc876,
      body: _0xe43512,
      isCmd: _0x595298,
      command: _0x558afa,
      args: _0x4822f4,
      q: _0x131d2a,
      isGroup: _0x87552f,
      sender: _0xdf159d,
      senderNumber: _0x5ea2df,
      botNumber2: _0x3e809b,
      botNumber: _0x24da0a,
      pushname: _0x437424,
      isMe: _0x228c72,
      isOwner: _0xd60e2d,
      groupMetadata: _0x187d3f,
      groupName: _0x12d0e8,
      participants: _0x5c721a,
      groupAdmins: _0x5a92e6,
      isBotAdmins: _0x3686d7,
      isAdmins: _0x210189,
      reply: _0x4c4aa5,
    }
  ) => {
    try {
      if (!ytreg(_0x131d2a)) {
        return await _0x4c4aa5(urlneed)
      }
      let _0x4360d3 = await ytdl.getInfo(_0x131d2a)
      if (_0x4360d3.videoDetails.lengthSeconds >= videotime) {
        _0x4c4aa5(sizetoo)
        return
      }
      let _0x3453cb = _0x4360d3.videoDetails.title,
        _0x4a1052 = getRandom('.mp4')
      const _0x369734 = {
        filter: (_0x553ae5) => _0x553ae5.itag == 22 || _0x553ae5.itag == 18,
      }
      const _0x5ea306 = ytdl(_0x131d2a, _0x369734).pipe(
        fs.createWriteStream('./' + _0x4a1052)
      )
      await new Promise((_0x350596, _0x260eb) => {
        _0x5ea306.on('error', _0x260eb), _0x5ea306.on('finish', _0x350596)
      })
      let _0x279c87 = fs.statSync('./' + _0x4a1052)
      const _0x5554e4 = { quoted: _0x52a8ba }
      let _0x4ed97b = await _0x10ba18.sendMessage(
        _0x488042,
        {
          document: fs.readFileSync('./' + _0x4a1052),
          mimetype: 'document/mp4',
          fileName: _0x3453cb + '.mp4',
          caption: config.FOOTER,
        },
        _0x5554e4
      )
      const _0x27fc7b = {
        text: '\uD83C\uDFBC',
        key: _0x4ed97b.key,
      }
      const _0x5eb711 = {}
      return (
        (_0x5eb711.react = _0x27fc7b),
        await _0x10ba18.sendMessage(_0x488042, _0x5eb711),
        fs.unlinkSync('./' + _0x4a1052)
      )
    } catch (_0x3f5775) {
      _0x4c4aa5(N_FOUND)
      _0x5eadeb(_0x3f5775)
    }
  }
)
const _0x4148b6 = {}
_0x4148b6.pattern = '24p'
_0x4148b6.use = '.240p <video url>'
_0x4148b6.react = '\uD83D\uDCFD️'
_0x4148b6.desc = 'Download yt videos.'
_0x4148b6.category = ''
_0x4148b6.filename = __filename
cmd(
  _0x4148b6,
  async (
    _0xe69864,
    _0x2f1463,
    _0x5bc95c,
    {
      from: _0x5a0c06,
      l: _0x561ffb,
      quoted: _0x25d42d,
      body: _0x18f740,
      isCmd: _0x239514,
      command: _0x5bf6a5,
      args: _0x19bbfd,
      q: _0x1f10c3,
      isGroup: _0x1d70ee,
      sender: _0x51f699,
      senderNumber: _0x282e13,
      botNumber2: _0x595adf,
      botNumber: _0x3127fc,
      pushname: _0x30f162,
      isMe: _0x54196c,
      isOwner: _0x414f41,
      groupMetadata: _0x25ee24,
      groupName: _0x1f8208,
      participants: _0x1d7553,
      groupAdmins: _0x150779,
      isBotAdmins: _0x22a05b,
      isAdmins: _0x147d67,
      reply: _0x5029fd,
    }
  ) => {
    try {
      if (!ytreg(_0x1f10c3)) {
        return await _0x5029fd(urlneed)
      }
      const _0x181d2a = await dl.youtubedl(_0x1f10c3)
      let _0x6b7f33 = _0x181d2a,
        _0x10b71c = await getsize(await _0x6b7f33.video['240p'].download())
      const _0x339e85 = { quoted: _0x2f1463 }
      let _0x4ffc19 = await _0xe69864.sendMessage(
        _0x5a0c06,
        {
          document: { url: await _0x6b7f33.video['240p'].download() },
          fileName: 'video.mp4',
          mimetype: 'video/mp4',
          caption: config.FOOTER,
        },
        _0x339e85
      )
      const _0x5e9960 = {
        text: '\uD83C\uDFA5',
        key: _0x4ffc19.key,
      }
      const _0x1aba93 = { react: _0x5e9960 }
      await _0xe69864.sendMessage(_0x5a0c06, _0x1aba93)
    } catch (_0x423b94) {
      _0x5029fd(N_FOUND)
      _0x561ffb(_0x423b94)
    }
  }
)
const _0x124e99 = {}
_0x124e99.pattern = '36p'
_0x124e99.use = '.240p <video url>'
_0x124e99.react = '\uD83D\uDCFD️'
_0x124e99.desc = 'Download yt videos.'
_0x124e99.category = ''
_0x124e99.filename = __filename
cmd(
  _0x124e99,
  async (
    _0x5e43da,
    _0x1f4690,
    _0x2f60ab,
    {
      from: _0x15f293,
      l: _0x5f97d,
      quoted: _0x2f7aaa,
      body: _0x287eee,
      isCmd: _0x4980cc,
      command: _0x14bb02,
      args: _0x5446b0,
      q: _0x2f23ab,
      isGroup: _0x7e6f7f,
      sender: _0x3e6dff,
      senderNumber: _0x560ec7,
      botNumber2: _0x5c0c0d,
      botNumber: _0x486fcf,
      pushname: _0x2682a7,
      isMe: _0x1e8251,
      isOwner: _0x9a59fc,
      groupMetadata: _0x2a734b,
      groupName: _0x413c12,
      participants: _0x445b2a,
      groupAdmins: _0xd3f6ca,
      isBotAdmins: _0xe46974,
      isAdmins: _0xedb1d2,
      reply: _0x44d471,
    }
  ) => {
    try {
      if (!ytreg(_0x2f23ab)) {
        return await _0x44d471(urlneed)
      }
      const _0x17e25f = await dl.youtubedl(_0x2f23ab)
      let _0x49c5ba = _0x17e25f,
        _0x3b3ea8 = await getsize(await _0x49c5ba.video['360p'].download())
      const _0x167a03 = { quoted: _0x1f4690 }
      let _0x525254 = await _0x5e43da.sendMessage(
        _0x15f293,
        {
          document: { url: await _0x49c5ba.video['360p'].download() },
          fileName: 'video.mp4',
          mimetype: 'video/mp4',
          caption: config.FOOTER,
        },
        _0x167a03
      )
      const _0x3d858b = {
        text: '\uD83C\uDFA5',
        key: _0x525254.key,
      }
      const _0x1204b8 = { react: _0x3d858b }
      await _0x5e43da.sendMessage(_0x15f293, _0x1204b8)
    } catch (_0x4c03b0) {
      _0x44d471(N_FOUND)
      _0x5f97d(_0x4c03b0)
    }
  }
)
const _0x87770a = {}
_0x87770a.pattern = '48p'
_0x87770a.use = '.480p <video url>'
_0x87770a.react = '\uD83D\uDCFD️'
_0x87770a.desc = 'Download yt videos.'
_0x87770a.category = ''
_0x87770a.filename = __filename
cmd(
  _0x87770a,
  async (
    _0x2e388e,
    _0x5d676d,
    _0x1948d0,
    {
      from: _0xd01a79,
      l: _0x554d12,
      quoted: _0x39d17e,
      body: _0x193efd,
      isCmd: _0x27025d,
      command: _0x549370,
      args: _0x276977,
      q: _0x18a570,
      isGroup: _0x4669a0,
      sender: _0x39e6f4,
      senderNumber: _0x585399,
      botNumber2: _0x1b4f06,
      botNumber: _0xe11be4,
      pushname: _0xc7b12d,
      isMe: _0x4e56f4,
      isOwner: _0x2fe70b,
      groupMetadata: _0x1aeb2f,
      groupName: _0x1fd351,
      participants: _0x3a4db4,
      groupAdmins: _0x439af8,
      isBotAdmins: _0x1c1ff9,
      isAdmins: _0x1ed427,
      reply: _0x1a69fd,
    }
  ) => {
    try {
      if (!ytreg(_0x18a570)) {
        return await _0x1a69fd(urlneed)
      }
      const _0x4ffa2e = await dl.youtubedl(_0x18a570)
      let _0x49d850 = _0x4ffa2e,
        _0x2ec460 = await getsize(await _0x49d850.video['480p'].download())
      const _0x28f8e4 = { quoted: _0x5d676d }
      let _0x8a9afe = await _0x2e388e.sendMessage(
        _0xd01a79,
        {
          document: { url: await _0x49d850.video['480p'].download() },
          fileName: 'video.mp4',
          mimetype: 'video/mp4',
          caption: config.FOOTER,
        },
        _0x28f8e4
      )
      const _0x43e6b2 = {
        text: '\uD83C\uDFA5',
        key: _0x8a9afe.key,
      }
      const _0xbc4041 = { react: _0x43e6b2 }
      await _0x2e388e.sendMessage(_0xd01a79, _0xbc4041)
    } catch (_0x4a5484) {
      _0x1a69fd(N_FOUND), _0x554d12(_0x4a5484)
    }
  }
)
const _0xf4ecf2 = {}
_0xf4ecf2.pattern = '72p'
_0xf4ecf2.use = '.720p <video url>'
_0xf4ecf2.react = '\uD83D\uDCFD️'
_0xf4ecf2.desc = 'Download yt videos.'
_0xf4ecf2.category = ''
_0xf4ecf2.filename = __filename
cmd(
  _0xf4ecf2,
  async (
    _0xe78730,
    _0x131862,
    _0x133bfa,
    {
      from: _0x70007e,
      l: _0x142384,
      quoted: _0x4ee956,
      body: _0x228bba,
      isCmd: _0x66ba4b,
      command: _0x5a56b1,
      args: _0x7a549d,
      q: _0xf6ee07,
      isGroup: _0x3ae55e,
      sender: _0xc4f49d,
      senderNumber: _0x25b121,
      botNumber2: _0x175a11,
      botNumber: _0x4fb6f8,
      pushname: _0x26e459,
      isMe: _0x27d58d,
      isOwner: _0x42a83b,
      groupMetadata: _0x24749a,
      groupName: _0x4d4dae,
      participants: _0x32e985,
      groupAdmins: _0x9c36bc,
      isBotAdmins: _0x250756,
      isAdmins: _0x24c5d3,
      reply: _0x3a921e,
    }
  ) => {
    try {
      if (!ytreg(_0xf6ee07)) {
        return await _0x3a921e(urlneed)
      }
      const _0x522ad6 = await dl.youtubedl(_0xf6ee07)
      let _0x11de97 = _0x522ad6,
        _0x2d6e66 = await getsize(await _0x11de97.video['720p'].download())
      const _0x2956f2 = { quoted: _0x131862 }
      let _0x2cf54e = await _0xe78730.sendMessage(
        _0x70007e,
        {
          document: { url: await _0x11de97.video['720p'].download() },
          fileName: 'video.mp4',
          mimetype: 'video/mp4',
          caption: config.FOOTER,
        },
        _0x2956f2
      )
      const _0x4bd74f = {
        text: '\uD83C\uDFA5',
        key: _0x2cf54e.key,
      }
      const _0x48522f = { react: _0x4bd74f }
      await _0xe78730.sendMessage(_0x70007e, _0x48522f)
    } catch (_0x1582a8) {
      _0x3a921e(N_FOUND), _0x142384(_0x1582a8)
    }
  }
)
const _0x5404d2 = {}
_0x5404d2.pattern = '108p'
_0x5404d2.use = '.1080p <video url>'
_0x5404d2.react = '\uD83D\uDCFD️'
_0x5404d2.desc = 'Download yt videos.'
_0x5404d2.category = ''
_0x5404d2.filename = __filename
cmd(
  _0x5404d2,
  async (
    _0x4e35ff,
    _0x2809a4,
    _0x33057f,
    {
      from: _0x4badc7,
      l: _0x2f54de,
      quoted: _0x28bd51,
      body: _0xce3b3b,
      isCmd: _0x232004,
      command: _0x4f6683,
      args: _0x34cdc1,
      q: _0x14fbf6,
      isGroup: _0x4546c5,
      sender: _0x156730,
      senderNumber: _0xcb0571,
      botNumber2: _0x30b55f,
      botNumber: _0x144d92,
      pushname: _0x177a17,
      isMe: _0x3b3d1c,
      isOwner: _0x3fb023,
      groupMetadata: _0x4b381a,
      groupName: _0x9f33ce,
      participants: _0x4260e7,
      groupAdmins: _0x23e562,
      isBotAdmins: _0x3ea720,
      isAdmins: _0x5d32fb,
      reply: _0x2b3002,
    }
  ) => {
    try {
      if (!ytreg(_0x14fbf6)) {
        return await _0x2b3002(urlneed)
      }
      const _0xb8137b = await dl.youtubedl(_0x14fbf6)
      let _0x2d3582 = _0xb8137b,
        _0x4700ea = await getsize(await _0x2d3582.video['1080p'].download())
      const _0x506ec3 = { quoted: _0x2809a4 }
      let _0x336bb2 = await _0x4e35ff.sendMessage(
        _0x4badc7,
        {
          document: { url: await _0x2d3582.video['1080p'].download() },
          fileName: 'video.mp4',
          mimetype: 'video/mp4',
          caption: config.FOOTER,
        },
        _0x506ec3
      )
      const _0xcff858 = {
        text: '\uD83C\uDFA5',
        key: _0x336bb2.key,
      }
      const _0x3a70f3 = { react: _0xcff858 }
      await _0x4e35ff.sendMessage(_0x4badc7, _0x3a70f3)
    } catch (_0x743c85) {
      _0x2b3002(N_FOUND)
      _0x2f54de(_0x743c85)
    }
  }
)
