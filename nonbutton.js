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
} = require('./lib/functions')
function btregex(_0x1c5587) {
  const _0x3c37e = '/({11})/'
  return h2k(_0x3c37e.test(_0x1c5587))
}
buttonMessage = async (_0x526b1e, _0xd32ad0) => {
  _0xd32ad0.forEach((_0x11d7c5, _0x1ca489) => {
    let _0x233efb = 1
    result += '\n*[' + mainNumber + '] ' + _0x11d7c5.title + '*\n'
    reply('*Select number' + _0x233efb++ + _0x1ca489 + result)
    _0x1ca489.push(Json(_0x526b1e))
  })
}
listMessage = async (_0x16a6d7, _0x3cbe99) => {
  _0x3cbe99.forEach((_0x30dc1e, _0x45de5a) => {
    let _0x1887d0 = 1
    result += '\n*[' + mainNumber + '] ' + _0x30dc1e.title + '*\n'
    reply('*Select number' + _0x1887d0++ + _0x45de5a + result)
    _0x45de5a.push(Json(_0x16a6d7))
  })
}
const _0x26855e = {}
_0x26855e.listMessage = listMessage
_0x26855e.buttonMessage = buttonMessage
_0x26855e.btregex = btregex
module.export = _0x26855e
