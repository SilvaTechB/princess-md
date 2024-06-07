var _0x20655e = (function () {
  var _0x26f84b = true
  return function (_0x193477, _0x5a4094) {
    var _0x5024ca = _0x26f84b
      ? function () {
          if (_0x5a4094) {
            var _0x259a4a = _0x5a4094.apply(_0x193477, arguments)
            return (_0x5a4094 = null), _0x259a4a
          }
        }
      : function () {}
    return (_0x26f84b = false), _0x5024ca
  }
})()
var _0xcde429 = _0x20655e(this, function () {
  return _0xcde429
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0xcde429)
    .search('(((.+)+)+)+$')
})
_0xcde429()
var _0x4b3a10 = (function () {
  var _0x468522 = true
  return function (_0x420ed6, _0x5b9e42) {
    var _0x171af3 = _0x468522
      ? function () {
          if (_0x5b9e42) {
            var _0x259af2 = _0x5b9e42.apply(_0x420ed6, arguments)
            return (_0x5b9e42 = null), _0x259af2
          }
        }
      : function () {}
    return (_0x468522 = false), _0x171af3
  }
})()
;(function () {
  _0x4b3a10(this, function () {
    var _0x17aadf = new RegExp('function *\\( *\\)'),
      _0x2a7015 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x17a907 = _0x25449d('init')
    if (
      !_0x17aadf.test(_0x17a907 + 'chain') ||
      !_0x2a7015.test(_0x17a907 + 'input')
    ) {
      _0x17a907('0')
    } else {
      _0x25449d()
    }
  })()
})()
const { DataTypes, Sequelize } = require('sequelize')
var _0x13ba55 = {}
_0x13ba55.require = true
_0x13ba55.rejectUnauthorized = false
var _0x37656f = {}
_0x37656f.ssl = _0x13ba55
var _0x3e3fb1 = {}
_0x3e3fb1.dialectOptions = _0x37656f
_0x3e3fb1.logging = false
var _0x4e3813 = {}
_0x4e3813.dialect = 'sqlite'
_0x4e3813.storage = './database/settings.db'
_0x4e3813.logging = false
const DATABASE = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, _0x3e3fb1)
  : new Sequelize(_0x4e3813)
async function get_set(_0x1250d1) {
  var _0x54de39 = {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  var _0x422941 = { json: _0x54de39 }
  var _0x8d4b5d = { timestamps: false }
  const _0x441ede = DATABASE.define('settings', _0x422941, _0x8d4b5d)
  await DATABASE.sync()
  var _0x2e10f8 = await _0x441ede.findAll()
  if (_0x2e10f8.length < 1) {
    return {}
  } else {
    var _0x4a2b30 = JSON.parse(_0x2e10f8[0].dataValues.json)
    if (_0x1250d1 == 'all') {
      return _0x4a2b30
    }
    if (_0x4a2b30[_0x1250d1]) {
      return _0x4a2b30[_0x1250d1]
    }
    return false
  }
}
async function input_set(_0x533dc5, _0x4363a4) {
  var _0x2a2fe1 = {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  var _0x54444e = { json: _0x2a2fe1 }
  var _0xcb7fcd = { timestamps: false }
  const _0x33d2f = DATABASE.define('settings', _0x54444e, _0xcb7fcd)
  await DATABASE.sync()
  var _0x5d0852 = await _0x33d2f.findAll()
  if (_0x5d0852.length < 1) {
    var _0x41eb79 = {}
    return (
      (_0x41eb79[_0x533dc5] = _0x4363a4),
      await _0x33d2f.create({ json: JSON.stringify(_0x41eb79) })
    )
  } else {
    var _0x41eb79 = JSON.parse(_0x5d0852[0].dataValues.json)
    return (
      (_0x41eb79[_0x533dc5] = _0x4363a4),
      await _0x5d0852[0].update({ json: JSON.stringify(_0x41eb79) })
    )
  }
}
var _0x21deb1 = {}
_0x21deb1.get_set = get_set
_0x21deb1.input_set = input_set
module.exports = _0x21deb1
function _0x25449d(_0x406c37) {
  function _0x18cc73(_0x1cf02d) {
    if (typeof _0x1cf02d === 'string') {
      return function (_0x351ab4) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x1cf02d / _0x1cf02d).length !== 1 || _0x1cf02d % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    _0x18cc73(++_0x1cf02d)
  }
  try {
    if (_0x406c37) {
      return _0x18cc73
    } else {
      _0x18cc73(0)
    }
  } catch (_0x4abcfd) {}
}
