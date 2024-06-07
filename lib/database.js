const fetch = require('node-fetch'),
  axios = require('axios'),
  config = require('../settings'),
  userName = 'VajiraTech',
  token = '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',
  repoName = 'izumimd-db'
async function githubApiRequest(_0x8cbeb3, _0x26774c = 'GET', _0x50f18b = {}) {
  try {
    const _0xd27a56 = {
      method: _0x26774c,
      headers: {
        Authorization:
          'Basic ' + Buffer.from(userName + ':' + token).toString('base64'),
        'Content-Type': 'application/json',
      },
    }
    if (_0x26774c === 'GET' || _0x26774c === 'HEAD') {
      delete _0xd27a56.body
    } else {
      _0xd27a56.body = JSON.stringify(_0x50f18b)
    }
    const _0x5a3a0e = await fetch(_0x8cbeb3, _0xd27a56)
    return await _0x5a3a0e.json()
  } catch (_0x387dfd) {
    throw new Error('GitHub API request failed: ' + _0x387dfd.message)
  }
}
async function checkRepoAvailability() {
  try {
    const _0x402391 =
        'https://api.github.com/repos/' + userName + '/' + repoName,
      _0x1510a3 = { Authorization: 'Bearer ' + token }
    const _0x3f4306 = _0x1510a3,
      _0x101b61 = { headers: _0x3f4306 }
    const _0x135f81 = await axios.get(_0x402391, _0x101b61)
    if (_0x135f81.status === 200) {
      return true
    } else {
      return false
    }
  } catch (_0x2a1008) {
    if (_0x2a1008.response && _0x2a1008.response.status === 404) {
      return false
    } else {
      console.error('Error:', _0x2a1008.message)
    }
  }
}
async function githubSearchFile(_0x594158, _0x33504b) {
  const _0x378833 =
      'https://api.github.com/repos/' +
      userName +
      '/' +
      repoName +
      '/contents/' +
      _0x594158 +
      '?ref=main',
    _0x1f1856 = await githubApiRequest(_0x378833)
  return _0x1f1856.find((_0x4fcc97) => _0x4fcc97.name === _0x33504b)
}
async function githubCreateNewFile(_0x30e2a9, _0x9a63f8, _0x1ca8eb) {
  const _0x185f4d =
    'https://api.github.com/repos/' +
    userName +
    '/' +
    repoName +
    '/contents/' +
    _0x30e2a9 +
    '/' +
    _0x9a63f8
  const _0x596932 = {
    message: 'Create new file: ' + _0x9a63f8,
    content: Buffer.from(_0x1ca8eb).toString('base64'),
  }
  return await githubApiRequest(_0x185f4d, 'PUT', _0x596932)
}
async function githubDeleteFile(_0xb22384, _0x26aa66) {
  const _0x41e41b = await githubSearchFile(_0xb22384, _0x26aa66)
  if (!_0x41e41b) {
    throw new Error('File not found on GitHub.')
  }
  const _0x314b36 =
      'https://api.github.com/repos/' +
      userName +
      '/' +
      repoName +
      '/contents/' +
      _0xb22384 +
      '/' +
      _0x26aa66,
    _0x2b814d = {
      message: 'Delete file: ' + _0x26aa66,
      sha: _0x41e41b.sha,
    }
  const _0x5b32f5 = _0x2b814d
  await githubApiRequest(_0x314b36, 'DELETE', _0x5b32f5)
}
async function githubGetFileContent(_0x167370, _0x259169) {
  const _0x4f31d7 = await githubSearchFile(_0x167370, _0x259169)
  if (!_0x4f31d7) {
    throw new Error('File not found on GitHub.')
  }
  const _0x9497a9 = _0x4f31d7.download_url
  const _0x2d9d3f = await fetch(_0x9497a9)
  return await _0x2d9d3f.text()
}
async function githubClearAndWriteFile(_0x2b5529, _0x5971d8, _0x2dd5ff) {
  const _0x16c61f = await githubSearchFile(_0x2b5529, _0x5971d8)
  if (!_0x16c61f) {
    await githubCreateNewFile(_0x5971d8, _0x2dd5ff)
  } else {
    const _0xac65d8 =
        'https://api.github.com/repos/' +
        userName +
        '/' +
        repoName +
        '/contents/' +
        _0x2b5529 +
        '/' +
        _0x5971d8,
      _0x2e6c82 = {
        message: 'Modify file: ' + _0x5971d8,
        content: Buffer.from(_0x2dd5ff).toString('base64'),
        sha: _0x16c61f.sha,
      }
    return await githubApiRequest(_0xac65d8, 'PUT', _0x2e6c82)
  }
}
async function githubDeleteAndUploadFile(_0x3fe824, _0x3cece9) {
  await githubDeleteFile(_0x3fe824)
  await githubCreateNewFile(_0x3fe824, _0x3cece9)
}
async function updateCMDStore(_0x4cec3e, _0x458e85) {
  try {
    let _0x68614d = JSON.parse(
      await githubGetFileContent('Non-Btn', 'data.json')
    )
    const _0x2b7e51 = { _0x4cec3e: _0x458e85 }
    _0x68614d.push(_0x2b7e51)
    var _0x38b5ab = await githubClearAndWriteFile(
      'Non-Btn',
      'data.json',
      JSON.stringify(_0x68614d, null, 2)
    )
    return true
  } catch (_0x1aad3d) {
    return console.log(_0x1aad3d), false
  }
}
async function isbtnID(_0x47c3f4) {
  try {
    let _0x325f1e = JSON.parse(
        await githubGetFileContent('Non-Btn', 'data.json')
      ),
      _0x2e48aa = null
    for (const _0x204d86 of _0x325f1e) {
      if (_0x204d86[_0x47c3f4]) {
        _0x2e48aa = _0x204d86[_0x47c3f4]
        break
      }
    }
    if (_0x2e48aa) {
      return true
    } else {
      return false
    }
  } catch (_0x1e7681) {
    return false
  }
}
async function getCMDStore(_0xcc62f3) {
  try {
    let _0x42e635 = JSON.parse(
        await githubGetFileContent('Non-Btn', 'data.json')
      ),
      _0xd4f674 = null
    for (const _0x574f62 of _0x42e635) {
      if (_0x574f62[_0xcc62f3]) {
        _0xd4f674 = _0x574f62[_0xcc62f3]
        break
      }
    }
    return _0xd4f674
  } catch (_0x283757) {
    return console.log(_0x283757), false
  }
}
function getCmdForCmdId(_0x4febe3, _0x145fdf) {
  const _0x35b624 = _0x4febe3.find((_0x43d907) => _0x43d907.cmdId === _0x145fdf)
  return _0x35b624 ? _0x35b624.cmd : null
}
const connectdb = async () => {
  let _0x4eb5cf = await checkRepoAvailability()
  if (!_0x4eb5cf) {
    const _0x125ce9 = {
      name: repoName,
      private: true,
    }
    const _0x5cab78 = { Authorization: 'Bearer ' + token }
    const _0x4f348a = { headers: _0x5cab78 }
    const _0xa1f90d = await axios.post(
        'https://api.github.com/user/repos',
        _0x125ce9,
        _0x4f348a
      ),
      _0x4eb215 = {
        LANG: 'EN',
        ANTI_BAD: [],
        MAX_SIZE: 100,
        ONLY_GROUP: false,
        ANTI_LINK: [],
        ANTI_BOT: [],
        ALIVE: 'default',
        FOOTER: '\xA9ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
        LOGO: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg',
      }
    let _0x4c76a9 = _0x4eb215
    await githubCreateNewFile(
      'settings',
      'settings.json',
      JSON.stringify(_0x4c76a9)
    )
    console.log(
      'Database "' + repoName + '" created successfully \uD83D\uDEE2️'
    )
  } else {
    console.log('Database connected \uD83D\uDEE2️')
  }
}
async function input(_0x28ee10, _0x2df69a) {
  let _0x34edf2 = JSON.parse(
    await githubGetFileContent('settings', 'settings.json')
  )
  if (_0x28ee10 == 'LANG') {
    return (
      (_0x34edf2.LANG = _0x2df69a),
      (config.LANG = _0x2df69a),
      await githubClearAndWriteFile(
        'settings',
        'settings.json',
        JSON.stringify(_0x34edf2)
      )
    )
  } else {
    if (_0x28ee10 == 'ANTI_BAD') {
      return (
        (_0x34edf2.ANTI_BAD = _0x2df69a),
        (config.ANTI_BAD = _0x2df69a),
        await githubClearAndWriteFile(
          'settings',
          'settings.json',
          JSON.stringify(_0x34edf2)
        )
      )
    } else {
      if (_0x28ee10 == 'MAX_SIZE') {
        return (
          (_0x34edf2.MAX_SIZE = _0x2df69a),
          (config.MAX_SIZE = _0x2df69a),
          await githubClearAndWriteFile(
            'settings',
            'settings.json',
            JSON.stringify(_0x34edf2)
          )
        )
      } else {
        if (_0x28ee10 == 'ONLY_GROUP') {
          return (
            (_0x34edf2.ONLY_GROUP = _0x2df69a),
            (config.ONLY_GROUP = _0x2df69a),
            await githubClearAndWriteFile(
              'settings',
              'settings.json',
              JSON.stringify(_0x34edf2)
            )
          )
        } else {
          if (_0x28ee10 == 'ANTI_LINK') {
            return (
              (_0x34edf2.ANTI_LINK = _0x2df69a),
              (config.ANTI_LINK = _0x2df69a),
              await githubClearAndWriteFile(
                'settings',
                'settings.json',
                JSON.stringify(_0x34edf2)
              )
            )
          } else {
            if (_0x28ee10 == 'ANTI_BOT') {
              return (
                (_0x34edf2.ANTI_BOT = _0x2df69a),
                (config.ANTI_BOT = _0x2df69a),
                await githubClearAndWriteFile(
                  'settings',
                  'settings.json',
                  JSON.stringify(_0x34edf2)
                )
              )
            } else {
              if (_0x28ee10 == 'ALIVE') {
                return (
                  (_0x34edf2.ALIVE = _0x2df69a),
                  (config.ALIVE = _0x2df69a),
                  await githubClearAndWriteFile(
                    'settings',
                    'settings.json',
                    JSON.stringify(_0x34edf2)
                  )
                )
              } else {
                if (_0x28ee10 == 'FOOTER') {
                  return (
                    (_0x34edf2.FOOTER = _0x2df69a),
                    (config.FOOTER = _0x2df69a),
                    await githubClearAndWriteFile(
                      'settings',
                      'settings.json',
                      JSON.stringify(_0x34edf2)
                    )
                  )
                } else {
                  if (_0x28ee10 == 'LOGO') {
                    return (
                      (_0x34edf2.LOGO = _0x2df69a),
                      (config.LOGO = _0x2df69a),
                      await githubClearAndWriteFile(
                        'settings',
                        'settings.json',
                        JSON.stringify(_0x34edf2)
                      )
                    )
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
async function get(_0x537440) {
  let _0x17cace = JSON.parse(
    await githubGetFileContent('settings', 'settings.json')
  )
  if (_0x537440 == 'LANG') {
    return _0x17cace.LANG
  } else {
    if (_0x537440 == 'ANTI_BAD') {
      return _0x17cace.ANTI_BAD
    } else {
      if (_0x537440 == 'MAX_SIZE') {
        return _0x17cace.MAX_SIZE
      } else {
        if (_0x537440 == 'ONLY_GROUP') {
          return _0x17cace.ONLY_GROUP
        } else {
          if (_0x537440 == 'ANTI_LINK') {
            return _0x17cace.ANTI_LINK
          } else {
            if (_0x537440 == 'ANTI_BOT') {
              return _0x17cace.ANTI_BOT
            } else {
              if (_0x537440 == 'ALIVE') {
                return _0x17cace.ALIVE
              } else {
                if (_0x537440 == 'FOOTER') {
                  return _0x17cace.FOOTER
                } else {
                  if (_0x537440 == 'LOGO') {
                    return _0x17cace.LOGO
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
async function updb() {
  let _0x472ef8 = JSON.parse(
    await githubGetFileContent('settings', 'settings.json')
  )
  config.LANG = _0x472ef8.LANG
  config.MAX_SIZE = Number(_0x472ef8.MAX_SIZE)
  config.ALIVE = _0x472ef8.ALIVE
  config.FOOTER = _0x472ef8.FOOTER
  config.LOGO = _0x472ef8.LOGO
  config.ANTI_BAD = _0x472ef8.ANTI_BAD
  config.ONLY_GROUP = _0x472ef8.ONLY_GROUP
  config.ANTI_LINK = _0x472ef8.ANTI_LINK
  config.ANTI_BOT = _0x472ef8.ANTI_BOT
  console.log('Database writed \u2705')
}
async function updfb() {
  const _0x298fcc = {
    LANG: 'EN',
    ANTI_BAD: [],
    MAX_SIZE: 100,
    ONLY_GROUP: false,
    ANTI_LINK: [],
    ANTI_BOT: [],
    ALIVE: 'default',
    FOOTER: '\xA9ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ',
    LOGO: 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg',
  }
  let _0x42e59a = _0x298fcc
  await githubClearAndWriteFile(
    'settings',
    'settings.json',
    JSON.stringify(_0x42e59a)
  )
  config.LANG = 'EN'
  config.MAX_SIZE = 100
  config.ALIVE = 'default'
  config.FOOTER = '\xA9ＱＵＥＥＮ -ＩＺＵＭＩ - ＭＤ'
  config.LOGO = 'https://telegra.ph/file/ba8ea739e63bf28c30b37.jpg'
  config.ANTI_BAD = []
  config.ONLY_GROUP = false
  config.ANTI_LINK = []
  config.ANTI_BOT = []
  console.log('Database writed \u2705')
}
const _0x5e0ca2 = {}
_0x5e0ca2.updateCMDStore = updateCMDStore
_0x5e0ca2.isbtnID = isbtnID
_0x5e0ca2.getCMDStore = getCMDStore
_0x5e0ca2.getCmdForCmdId = getCmdForCmdId
_0x5e0ca2.connectdb = connectdb
_0x5e0ca2.input = input
_0x5e0ca2.get = get
_0x5e0ca2.updb = updb
_0x5e0ca2.updfb = updfb
module.exports = _0x5e0ca2
