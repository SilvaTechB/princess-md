const _0x49a402 = (function () {
    let _0x73fc7c = true
    return function (_0x17ecb1, _0x2227cb) {
      const _0x2ed102 = _0x73fc7c
        ? function () {
            if (_0x2227cb) {
              const _0x9c0a51 = _0x2227cb.apply(_0x17ecb1, arguments)
              return (_0x2227cb = null), _0x9c0a51
            }
          }
        : function () {}
      return (_0x73fc7c = false), _0x2ed102
    }
  })(),
  _0x19e342 = _0x49a402(this, function () {
    return _0x19e342
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x19e342)
      .search('(((.+)+)+)+$')
  })
_0x19e342()
const _0x340a42 = (function () {
  let _0x154ac0 = true
  return function (_0x3c1856, _0x3c21a6) {
    const _0xb8d8f9 = _0x154ac0
      ? function () {
          if (_0x3c21a6) {
            const _0x546caa = _0x3c21a6.apply(_0x3c1856, arguments)
            return (_0x3c21a6 = null), _0x546caa
          }
        }
      : function () {}
    return (_0x154ac0 = false), _0xb8d8f9
  }
})()
;(function () {
  _0x340a42(this, function () {
    const _0x2bb4ac = new RegExp('function *\\( *\\)'),
      _0x2cc648 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x431d47 = _0x42d47b('init')
    if (
      !_0x2bb4ac.test(_0x431d47 + 'chain') ||
      !_0x2cc648.test(_0x431d47 + 'input')
    ) {
      _0x431d47('0')
    } else {
      _0x42d47b()
    }
  })()
})()
const { DataTypes, Sequelize } = require('sequelize'),
  _0x2a0008 = {}
_0x2a0008.require = true
_0x2a0008.rejectUnauthorized = false
const _0x218327 = {}
_0x218327.ssl = _0x2a0008
const _0x1fb03c = {}
_0x1fb03c.dialectOptions = _0x218327
_0x1fb03c.logging = false
const _0x17c701 = {}
_0x17c701.dialect = 'sqlite'
_0x17c701.storage = './database/id.db'
_0x17c701.logging = false
const DATABASE = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, _0x1fb03c)
  : new Sequelize(_0x17c701)
async function check(_0x4a3bd2) {
  const _0x360af6 = {
    type: DataTypes.DOUBLE,
    allowNull: false,
    primaryKey: true,
  }
  const _0xe02ab7 = {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  const _0x548aae = {
    num: _0x360af6,
    cmd: _0xe02ab7,
  }
  const _0x54e3ec = { timestamps: false }
  const _0x325a34 = DATABASE.define(_0x4a3bd2, _0x548aae, _0x54e3ec)
  await DATABASE.sync()
  var _0x3b96b5 = await _0x325a34.findAll()
  if (_0x3b96b5.length < 1) {
    return false
  }
  return true
}
async function input_data(_0x28315c, _0x52e69f, _0x20425f) {
  const _0x29dbe2 = {
    type: DataTypes.DOUBLE,
    allowNull: false,
    primaryKey: true,
  }
  const _0x3ac5af = {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  const _0x3fcb99 = {
    num: _0x29dbe2,
    cmd: _0x3ac5af,
  }
  const _0x2e8ed4 = { timestamps: false }
  const _0x3a14db = DATABASE.define(_0x20425f, _0x3fcb99, _0x2e8ed4)
  await DATABASE.sync()
  const _0x628b8 = { num: _0x52e69f }
  const _0xa7190f = { where: _0x628b8 }
  var _0x3e6f7a = await _0x3a14db.findAll(_0xa7190f)
  if (_0x3e6f7a.length < 1) {
    const _0x581bda = {}
    return (
      (_0x581bda.num = _0x52e69f),
      (_0x581bda.cmd = _0x28315c),
      await _0x3a14db.create(_0x581bda)
    )
  } else {
    const _0x30a803 = {}
    return (
      (_0x30a803.num = _0x52e69f),
      (_0x30a803.cmd = _0x28315c),
      await _0x3e6f7a[0].update(_0x30a803)
    )
  }
}
async function get_data(_0x42c292, _0x26b848) {
  const _0x31fcdc = {
    type: DataTypes.DOUBLE,
    allowNull: false,
    primaryKey: true,
  }
  const _0x524264 = {
    type: DataTypes.TEXT,
    allowNull: false,
  }
  const _0x2293e2 = {
    num: _0x31fcdc,
    cmd: _0x524264,
  }
  const _0x49c541 = { timestamps: false }
  const _0x4522c8 = DATABASE.define(_0x42c292, _0x2293e2, _0x49c541)
  await DATABASE.sync()
  const _0x5d58ae = { num: _0x26b848 }
  const _0xd868b5 = { where: _0x5d58ae }
  var _0x105c77 = await _0x4522c8.findAll(_0xd868b5)
  if (_0x105c77.length < 1) {
    return false
  } else {
    return _0x105c77[0].dataValues
  }
}
const _0xb90ab5 = {}
_0xb90ab5.input_data = input_data
_0xb90ab5.get_data = get_data
_0xb90ab5.check = check
module.exports = _0xb90ab5
function _0x42d47b(_0x4fed11) {
  function _0xb92c38(_0x39194d) {
    if (typeof _0x39194d === 'string') {
      return function (_0x2c238e) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      if (('' + _0x39194d / _0x39194d).length !== 1 || _0x39194d % 20 === 0) {
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
    _0xb92c38(++_0x39194d)
  }
  try {
    if (_0x4fed11) {
      return _0xb92c38
    } else {
      _0xb92c38(0)
    }
  } catch (_0x147ae5) {}
}
