const {
        default: makeWASocket,
        useMultiFileAuthState,
        getAggregateVotesInPollMessage,
        DisconnectReason,
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
        jidDecode
    } = require('@whiskeysockets/baileys'), fs = require('fs'), P = require('pino');
var os = require('os');
const farrkey = require('xfarr-api'), X = require('./settings.js');
;
var config = require('./settings');
const fonts = require('./lib/font.js'), moment = require('moment-timezone'), qrcode = require('qrcode-terminal'), NodeCache = require('node-cache'), util = require('util'), {Boom} = require('@hapi/boom'), {imageToWebp, videoToWebp, writeExifImg, writeExifVid} = require('./lib/exif'), {addPremiumUser, getPremiumExpired, getPremiumPosition, expiredPremiumCheck, checkPremiumUser, getAllPremiumUser} = require('./lib/premium'), {getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat, clockString, fetchBuffer, getFile} = require('./lib/functions'), {pinterest, wallpaper, wikimedia, quotesAnime, aiovideodl, umma, ringtone, styletext, sync, updatedb, syncgit} = require('./lib/scraper'), {sms, downloadMediaMessage} = require('./lib/msg');
let banUser = JSON.parse(fs.readFileSync('./lib/bugs/banUser.json'));
const owner = JSON.parse(fs.readFileSync('./lib/bugs/owner.json'));
let premium = JSON.parse(fs.readFileSync('./lib/bugs/premium.json'));
const _buruan = JSON.parse(fs.readFileSync('./lib/bugs/vajira_rathnayaka.json')), axios = require('axios'), {File} = require('megajs'), path = require('path'), msgRetryCounterCache = new NodeCache(), prefix = config.PREFIX[0], ownerNumber = '94719199757', l = console.log;
var {updateCMDStore, isbtnID, getCMDStore, getCmdForCmdId, connectdb, input, get, updb, updfb} = require('./lib/database'), {get_set, input_set} = require('./lib/database/set_db');
const {izumitext1} = require('./lib/bugs/izumitext1'), {izumitext2} = require('./lib/bugs/izumitext2'), {izumitext3} = require('./lib/bugs/izumitext3'), {izumitext4} = require('./lib/bugs/izumitext4'), {izumitext5} = require('./lib/bugs/izumitext5'), {izumitext6} = require('./lib/bugs/izumitext6'), {bugpdf} = require('./lib/bugs/bugpdf.js'), {travadoc} = require('./lib/bugs/travadoc.js');
;
const {thejo} = require('./lib/bugs/thejo');
if (!fs.existsSync(__dirname + '/session/creds.json')) {
    if (config.SESSION_ID) {
        const sessdata = config.SESSION_ID.replace('VAJIRA-MD=', ''), filer = File.fromURL('https://mega.nz/file/' + sessdata);
        filer.download((_0x3d55a8, _0x2e8d69) => {
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            ;
            if (_0x3d55a8) {
                throw _0x3d55a8;
            }
            ;
            fs.writeFile(__dirname + '/session/creds.json', _0x2e8d69, () => {
                ;
                ;
                console.log('Session download completed !! \u2713');
            });
        });
    }
}
const express = require('express'), app = express(), port = process.env.PORT || 8000;
async function connectToWA() {
    ;
    console.log('using WA v' + _0x28467c.join('.') + ', isLatest: ' + _0x3247fd);
    ;
    _0xe2462d.ev.on('connection.update', async _0xda40 => {
        ;
        ;
        ;
        ;
        ;
        const {
            connection: _0x18e250,
            lastDisconnect: _0xa023dd
        } = _0xda40;
        if (_0x56cc55.bEDyh(_0x18e250, _0x56cc55.VDvFQ)) {
            _0x56cc55.PINec('IbnYl', _0x56cc55.OfFgy) ? _0x56cc55.MnObp(_0x565a3e, _0x1c6f84.format(_0x15dfad)) : _0xa023dd.error.output.statusCode !== DisconnectReason.loggedOut && connectToWA();
        } else {
            if (_0x56cc55.bEDyh(_0x18e250, _0x56cc55.wLDqu)) {
                console.log(_0x56cc55.eniyK);
                console.log(_0x56cc55.Pqphh);
                console.log(_0x56cc55.zSBFa);
                console.log(_0x56cc55.dmiGd);
                const _0x4726d5 = _0x56cc55.MnObp(require, _0x56cc55.qrkRR);
                fs.readdirSync(_0x56cc55.HlJra).forEach(_0x57bf25 => {
                    ;
                    ;
                    _0x56cc55.DwkJu('bveWI', 'USwtO') ? _0x56cc55.QALun(_0x4726d5.extname(_0x57bf25).toLowerCase(), _0x56cc55.UxDhJ) && _0x56cc55.njWlI(require, _0x56cc55.MxVND(_0x56cc55.HlJra, _0x57bf25)) : _0x26bb97.sendPresenceUpdate('composing', _0x43628e);
                });
                console.log(_0x56cc55.Pqphh);
                await _0x56cc55.iOgME(connectdb);
                await _0x56cc55.iOgME(updb);
                console.log(_0x56cc55.DXPWt);
            }
        }
    });
    _0xe2462d.serializeM = _0x3380f1 => smsg(_0xe2462d, mek, store);
    _0xe2462d.ev.on(_0x56cc55.Eypkp, async _0x412252 => {
        ;
        const _0x51572d = {
            'HgaSN': function (_0x5c334e, _0x4d9093) {
                ;
                return _0x56cc55.gXukh(_0x5c334e, _0x4d9093);
            },
            'HUWxY': _0x56cc55.pFDqi
        };
        ;
        if (_0x56cc55.FdULW !== _0x56cc55.BJutq) {
            const {
                connection: _0x5a2d0a,
                lastDisconnect: _0x326d17
            } = _0x412252;
            if (_0x56cc55.bEDyh(_0x5a2d0a, _0x56cc55.VDvFQ)) {
                let _0x27a466 = new Boom(_0x326d17?.error)?.output.statusCode;
                if (_0x56cc55.bEDyh(_0x27a466, DisconnectReason.badSession)) {
                    console.log('Bad Session File, Please Delete Session and Scan Again');
                    _0xe2462d.logout();
                } else {
                    if (_0x56cc55.IimDT(_0x27a466, DisconnectReason.connectionClosed)) {
                        console.log(_0x56cc55.eGlkv);
                        _0x56cc55.iOgME(startconn);
                    } else {
                        if (_0x56cc55.PINec(_0x27a466, DisconnectReason.connectionLost)) {
                            if ('jEOzZ' !== _0x56cc55.ZPsmy) {
                                console.log(_0x56cc55.VieqJ);
                                _0x56cc55.iOgME(startconn);
                            } else {
                                const _0x195337 = '' + _0x56cc55.MxVND(_0x3fd206, 1);
                                _0x3247e0 += '\n[' + _0x195337 + '] ' + _0x54c688.title + '\n';
                                _0x5525f1.rows.forEach((_0x35d56e, _0x203116) => {
                                    const _0x4b6b34 = _0x195337 + '.' + _0x51572d.HgaSN(_0x203116, 1), _0x505a9e = '   ' + _0x4b6b34 + ' | ' + _0x35d56e.title;
                                    _0x98165e += _0x505a9e + '\n';
                                    ;
                                    _0x35d56e.description && (_0x57cb49 += '   ' + _0x35d56e.description + '\n\n');
                                    ;
                                    const _0x307837 = {
                                        cmdId: _0x4b6b34,
                                        cmd: _0x35d56e.rowId
                                    };
                                    ;
                                    ;
                                    _0x48c914.push(_0x307837);
                                });
                            }
                        } else {
                            if (_0x56cc55.bEDyh(_0x27a466, DisconnectReason.connectionReplaced)) {
                                console.log(_0x56cc55.LAyTK);
                                _0xe2462d.logout();
                            } else {
                                if (_0x27a466 === DisconnectReason.loggedOut) {
                                    console.log('Device Logged Out, Please Scan Again And Run.');
                                    _0xe2462d.logout();
                                } else {
                                    if (_0x56cc55.hjGkl(_0x27a466, DisconnectReason.restartRequired)) {
                                        console.log(_0x56cc55.UpFTu);
                                        _0x56cc55.iOgME(startconn);
                                    } else {
                                        if (_0x56cc55.hjGkl(_0x27a466, DisconnectReason.timedOut)) {
                                            console.log(_0x56cc55.jFKWF);
                                            startconn();
                                        } else {
                                            _0x56cc55.iahNJ(_0x27a466, DisconnectReason.Multidevicemismatch) ? (console.log(_0x56cc55.hFYcU), _0xe2462d.logout()) : _0xe2462d.end('Unknown DisconnectReason: ' + _0x27a466 + '|' + _0x5a2d0a);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                if (_0x56cc55.KqgZt(_0x5a2d0a, _0x56cc55.wLDqu)) {
                    console.log('Connected...', _0x412252);
                    const _0x317e2e = { text: '*hi bro! I\'m VAJIRA MD V4 \uD83E\uDEE1*\n_\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB bot has successfully connected to the server\nNow enjoy the bot\n\n*OWNER NO :-* https://wa.me/94719199757\n*MY CHANNEL :-* https://youtube.com/@gamingewingyt6216?si=IHmBhi2R69ao6jcG_' };
                    ;
                    _0xe2462d.sendMessage(_0x56cc55.ShqNQ, _0x317e2e);
                }
            }
        } else {
            _0x4ef0e2.sendPresenceUpdate(_0x51572d.HUWxY, _0x32e7ba);
        }
    });
    ;
    _0xe2462d.public = true;
    _0xe2462d.ev.on(_0x56cc55.cTDxi, _0x1d0d1);
    ;
    _0xe2462d.ev.on(_0x56cc55.ktawy, async _0xe81ba9 => {
        ;
        ;
        ;
        if (_0x56cc55.ZTLpZ(_0x56cc55.hteOg, 'tFirc')) {
            ;
            _0x5adeb3.download((_0x4036ef, _0x16185e) => {
                ;
                ;
                ;
                ;
                ;
                if (_0x4036ef) {
                    throw _0x4036ef;
                }
                _0x17d327.writeFile(_0x3200ad.rkJcr(_0x469831, _0x3200ad.UMnEb), _0x16185e, () => {
                    ;
                    ;
                    _0x2bc690.log('Session download completed !! \u2713');
                });
            });
        } else {
            try {
                if (_0x56cc55.MIiIV(_0x56cc55.LtmkE, 'kfrmP')) {
                    _0x342ab8.zPiSS(_0x270f42, _0xf9caa8.format(_0x1a95f4));
                } else {
                    _0xe81ba9 = _0xe81ba9.messages[0];
                    if (!_0xe81ba9.message) {
                        return;
                    }
                    ;
                    _0xe81ba9.message = _0x56cc55.VNQnu(getContentType(_0xe81ba9.message), 'ephemeralMessage') ? _0xe81ba9.message.ephemeralMessage.message : _0xe81ba9.message;
                    if (_0xe81ba9.key && _0x56cc55.mryfl(_0xe81ba9.key.remoteJid, _0x56cc55.pzLaz)) {
                        return;
                    }
                    ;
                    ;
                    ;
                    ;
                    if (_0x4153bd.quoted && _0x4153bd.quoted.fromMe && await _0x44896f.check(_0x4153bd.quoted.id)) {
                        if (_0x56cc55.MVJaA(_0x56cc55.uIssJ, _0x56cc55.cMnCE)) {
                            if (_0x5050be.startsWith(prefix)) {
                                _0x5050be = _0x5050be.replace(prefix, '');
                            }
                            ;
                            _0x397364.cmd && (_0x5ebab6 = true, _0x580c6f = _0x397364.cmd.startsWith(prefix) ? _0x397364.cmd.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '', _0x4f58a6 = _0x397364.cmd.trim().split(/ +/).slice(1), _0x46d646 = _0x4f58a6.join(' '));
                        } else {
                            if (_0x56cc55.QALun(_0x3f9154, 94719199757)) {
                                ;
                                _0x56cc55.fLgtL(_0x125602, _0x2ba275, (_0xb1c959, _0x46300f) => {
                                    if (_0xb1c959) {
                                        return _0x342ab8.PUIYT(_0x2047ad, _0x342ab8.FXXXN('-------\n\n', _0xb1c959));
                                    }
                                    ;
                                    ;
                                    if (_0x46300f) {
                                        return _0x342ab8.NSgPh(_0x4bc85d, _0x342ab8.KCtaY('-------\n\n', _0x46300f));
                                    }
                                });
                            }
                        }
                    }
                    console.log(_0x580c6f);
                    ;
                    autoreadsw = false;
                    ;
                    function _0x40d3a7(_0x3b8a28, _0x4e864a) {
                        ;
                        ;
                        if (_0x56cc55.UqzGR !== _0x56cc55.UqzGR) {
                            _0x14bfd3.error(_0x342ab8.axgPL, _0x896ed2);
                        } else {
                            for (var _0x459146 in _0x4e864a) {
                                _0x3b8a28[_0x459146] = _0x4e864a[_0x459146];
                            }
                            return _0x3b8a28;
                        }
                    }
                    ;
                    config = await _0x56cc55.oByDS(_0x40d3a7, config, _0x29b15b);
                    _0xe2462d.replyad = async _0x2f745d => {
                        const _0x1a3f7a = {
                            newsletterJid: '120363182681793169@newsletter',
                            serverMessageId: 127
                        };
                        ;
                        ;
                        const _0x2d383f = {
                            title: _0x342ab8.rVHEI,
                            body: _0x342ab8.msTfD,
                            mediaType: 1,
                            sourceUrl: _0x342ab8.BTgWQ,
                            thumbnailUrl: _0x342ab8.UPGpr,
                            renderLargerThumbnail: false,
                            showAdAttribution: true
                        };
                        ;
                        ;
                        ;
                        ;
                        ;
                        ;
                        ;
                        ;
                        const _0x2901a0 = {
                            mentionedJid: [''],
                            groupMentions: [],
                            forwardingScore: 1,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: _0x1a3f7a,
                            externalAdReply: _0x2d383f
                        };
                        ;
                        ;
                        ;
                        ;
                        ;
                        ;
                        ;
                        const _0xac47e8 = {
                            text: _0x2f745d,
                            contextInfo: _0x2901a0
                        };
                        ;
                        ;
                        const _0x199761 = {};
                        return _0x199761.quoted = _0xe81ba9, await _0xe2462d.sendMessage(_0x4dd610, _0xac47e8, _0x199761);
                    };
                    ;
                    _0xe2462d.buttonMessage2 = async (_0x4918bd, _0x15b291, _0x3e0f84) => {
                        ;
                        ;
                        ;
                        if (_0x342ab8.BxeGF === _0x342ab8.BxeGF) {
                            if (!_0x31b133) {
                                await _0xe2462d.sendMessage(_0x4918bd, _0x15b291);
                            } else {
                                if (_0x31b133) {
                                    let _0x23b31d = '';
                                    const _0xc213a1 = [];
                                    _0x15b291.buttons.forEach((_0x1a24d6, _0x578755) => {
                                        const _0x317849 = '' + _0x342ab8.KCtaY(_0x578755, 1);
                                        _0x23b31d += '\n' + _0x317849 + ' | ' + _0x1a24d6.buttonText.displayText + '\n';
                                        ;
                                        const _0x375174 = {
                                            cmdId: _0x317849,
                                            cmd: _0x1a24d6.buttonId
                                        };
                                        ;
                                        ;
                                        ;
                                        _0xc213a1.push(_0x375174);
                                    });
                                    if (_0x342ab8.AjRBm(_0x15b291.headerType, 1)) {
                                        if (_0x342ab8.FfHrz('iFzGj', _0x342ab8.Mfopw)) {
                                            const _0x3439ec = _0x15b291.text + '\n\n\uD83D\uDD22 Reply you want number,' + _0x23b31d + '\n' + _0x15b291.footer, _0x4cbcce = {
                                                    newsletterJid: '120363182681793169@newsletter',
                                                    serverMessageId: 127
                                                };
                                            ;
                                            ;
                                            const _0x557d20 = {
                                                title: _0x342ab8.rVHEI,
                                                body: _0x342ab8.msTfD,
                                                mediaType: 1,
                                                sourceUrl: _0x342ab8.BTgWQ,
                                                thumbnailUrl: _0x342ab8.UPGpr,
                                                renderLargerThumbnail: false,
                                                showAdAttribution: true
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x4f1be4 = {
                                                mentionedJid: [''],
                                                groupMentions: [],
                                                forwardingScore: 1,
                                                isForwarded: true,
                                                forwardedNewsletterMessageInfo: _0x4cbcce,
                                                externalAdReply: _0x557d20
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x56b335 = {
                                                text: _0x3439ec,
                                                contextInfo: _0x4f1be4
                                            };
                                            ;
                                            ;
                                            const _0x35a6df = await _0xe2462d.sendMessage(_0x4dd610, _0x56b335, { 'quoted': _0x342ab8.RcJqO(_0x3e0f84, _0xe81ba9) });
                                            await updateCMDStore(_0x35a6df.key.id, _0xc213a1);
                                        } else {
                                            const _0x188fb1 = _0x3d2c21 + '.' + _0x342ab8.CZcUS(_0x506e8d, 1), _0x3c43f4 = '   ' + _0x188fb1 + ' | ' + _0x409c0a.title;
                                            _0x9078a += _0x3c43f4 + '\n';
                                            _0x4d4a75.description && (_0x3e0c8e += '   ' + _0x5b10e3.description + '\n\n');
                                            const _0x132adb = {
                                                cmdId: _0x188fb1,
                                                cmd: _0x200e66.rowId
                                            };
                                            ;
                                            ;
                                            _0x3f64d5.push(_0x132adb);
                                        }
                                    } else {
                                        if (_0x342ab8.Xomik(_0x15b291.headerType, 4)) {
                                            const _0x3afe0a = _0x15b291.caption + '\n\n\uD83D\uDD22 Reply you want number,' + _0x23b31d + '\n' + _0x15b291.footer, _0xe33f7c = {
                                                    newsletterJid: _0x342ab8.rtMVx,
                                                    serverMessageId: 127
                                                };
                                            ;
                                            ;
                                            const _0x3a2809 = {
                                                title: _0x342ab8.rVHEI,
                                                body: _0x342ab8.msTfD,
                                                mediaType: 1,
                                                sourceUrl: _0x342ab8.BTgWQ,
                                                thumbnailUrl: _0x342ab8.UPGpr,
                                                renderLargerThumbnail: false,
                                                showAdAttribution: true
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x57eef5 = {
                                                mentionedJid: [''],
                                                groupMentions: [],
                                                forwardingScore: 1,
                                                isForwarded: true,
                                                forwardedNewsletterMessageInfo: _0xe33f7c,
                                                externalAdReply: _0x3a2809
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x3e8c5f = {
                                                image: _0x15b291.image,
                                                caption: _0x3afe0a,
                                                contextInfo: _0x57eef5
                                            };
                                            ;
                                            ;
                                            ;
                                            const _0x349607 = { quoted: _0x3e0f84 || _0xe81ba9 };
                                            ;
                                            const _0x39eb52 = await _0xe2462d.sendMessage(_0x4918bd, _0x3e8c5f, _0x349607);
                                            await _0x342ab8.ITIka(updateCMDStore, _0x39eb52.key.id, _0xc213a1);
                                        }
                                    }
                                }
                            }
                        } else {
                            const {exec: _0x5a4ccc} = _0x342ab8.PUIYT(_0x2403d1, _0x342ab8.WNZxZ);
                            _0x342ab8.ITIka(_0x5a4ccc, _0x78b679, (_0x3b8d93, _0x282fd2) => {
                                ;
                                ;
                                if (_0x3b8d93) {
                                    return _0xd1360e('-------\n\n' + _0x3b8d93);
                                }
                                if (_0x282fd2) {
                                    return _0xbfd4e5(_0x342ab8.BUctG('-------\n\n', _0x282fd2));
                                }
                            });
                        }
                    };
                    _0xe2462d.replyList = async (_0x15c5fb, _0x5ca086, _0x5c875f) => {
                        const _0x3de828 = {
                            'ttaeB': _0x342ab8.NztTK,
                            'XcrKL': function (_0x54694a, _0x5c4aa0) {
                                ;
                                return _0x342ab8.AjRBm(_0x54694a, _0x5c4aa0);
                            },
                            'pZZVr': function (_0x37169a, _0x56f07e) {
                                return _0x37169a === _0x56f07e;
                            },
                            'WWgri': _0x342ab8.HaLXj,
                            'Tlqqq': function (_0x2058e0, _0x41aeb6) {
                                ;
                                return _0x342ab8.PKwEG(_0x2058e0, _0x41aeb6);
                            }
                        };
                        function _0x1dd59d(_0xc88626) {
                            ;
                            ;
                            ;
                            if (_0x3de828.pZZVr(_0x3de828.WWgri, _0x3de828.WWgri)) {
                                let _0xa8ea78 = '';
                                return _0xc88626.forEach((_0x58c6b1, _0x2236b7) => {
                                    _0xa8ea78 += _0x58c6b1.title ? _0x58c6b1.title + '\n' : '';
                                    _0x58c6b1.rows.forEach((_0xb725df, _0x42192d) => {
                                        _0xa8ea78 += _0xb725df.title + ' || ' + _0xb725df.description;
                                        ;
                                        ;
                                        _0xa8ea78 += _0x3de828.XcrKL(_0x42192d, _0x58c6b1.rows.length - 1) ? '' : '\n';
                                    });
                                    ;
                                    ;
                                    _0xa8ea78 += _0x2236b7 === _0xc88626.length - 1 ? '' : '\n\n';
                                }), _0xa8ea78;
                            } else {
                                const _0x999957 = { url: _0x4fb764[_0x2d26d1] };
                                ;
                                const _0x33741c = {
                                    sticker: _0x999957,
                                    package: _0x3de828.ttaeB
                                };
                                ;
                                ;
                                const _0x303025 = { quoted: _0x43e295 };
                                ;
                                if (new _0x2eba02('\\b' + _0x429104 + '\\b', 'gi').test(_0x17d08e)) {
                                    _0x49ab1e.sendMessage(_0x106cce, _0x33741c, _0x303025);
                                }
                            }
                        }
                        if (!_0x5ca086.sections) {
                            return false;
                        }
                        _0x5ca086[_0x5ca086.caption ? _0x342ab8.hOGYl : _0x342ab8.qZVvj] = _0x342ab8.WfmtP(_0x342ab8.VAdpS(_0x342ab8.KOGoD(_0x342ab8.TSwue(_0x342ab8.CZcUS(_0x342ab8.WfmtP(_0x5ca086.title ? _0x5ca086.title + '\n\n' : '', _0x5ca086.caption ? _0x5ca086.caption : _0x5ca086.text) + '\n\n', _0x5ca086.buttonText), '\n\n'), await _0x342ab8.zPiSS(_0x1dd59d, _0x5ca086.sections)), '\n\n'), _0x5ca086.footer);
                        const _0x16dfd9 = { ..._0x5ca086 };
                        var _0x453f1f = _0x16dfd9;
                        delete _0x5ca086.sections;
                        delete _0x5ca086.footer;
                        ;
                        delete _0x5ca086.buttonText;
                        ;
                        delete _0x5ca086.title;
                        const _0x42679e = await _0xe2462d.sendMessage(_0x15c5fb, _0x5ca086, _0x5c875f), _0x3cbd6c = [];
                        _0x453f1f.sections.forEach(_0x10e104 => {
                            ;
                            ;
                            _0x342ab8.FfHrz(_0x342ab8.KBlTn, _0x342ab8.KBlTn) ? _0x4eafa3.updateProfileStatus('Hey, future leaders! \uD83C\uDF1F Vajira-Md is here to inspire and lead, thanks to Vajira Rathnayaka, Inc. \uD83D\uDE80 ' + _0x3de828.Tlqqq(_0x2162f7, _0xc93d89.uptime()) + ' ').catch(_0x44b43d => _0x44b43d) : _0x10e104.rows.forEach(_0x100198 => {
                                const _0x200a40 = {
                                    rowId: _0x100198.rowId,
                                    title: _0x100198.title
                                };
                                ;
                                ;
                                ;
                                ;
                                _0x3cbd6c.push(_0x200a40);
                            });
                        });
                        for (let _0x2f43aa = 0; _0x342ab8.KmKoE(_0x2f43aa, _0x3cbd6c.length); _0x2f43aa++) {
                            await _0x44896f.input_data(_0x3cbd6c[_0x2f43aa].rowId, _0x3cbd6c[_0x2f43aa].title, _0x42679e.key.id);
                        }
                    };
                    _0xe2462d.buttonMessage = async (_0x27b28a, _0x22de48, _0x201e6d) => {
                        ;
                        ;
                        if (_0x56cc55.SXCbW(_0x56cc55.ueYRR, _0x56cc55.ybfli)) {
                            if (!_0x31b133) {
                                await _0xe2462d.sendMessage(_0x27b28a, _0x22de48);
                            } else {
                                if (_0x31b133) {
                                    let _0xe86185 = '';
                                    const _0x4e110f = [];
                                    _0x22de48.buttons.forEach((_0x5dbdec, _0x46f472) => {
                                        const _0x16cc1b = '' + _0x342ab8.URwgu(_0x46f472, 1);
                                        _0xe86185 += '\n' + _0x16cc1b + ' | ' + _0x5dbdec.buttonText.displayText + '\n';
                                        const _0x25f42d = {
                                            cmdId: _0x16cc1b,
                                            cmd: _0x5dbdec.buttonId
                                        };
                                        ;
                                        ;
                                        ;
                                        ;
                                        _0x4e110f.push(_0x25f42d);
                                    });
                                    if (_0x56cc55.bEDyh(_0x22de48.headerType, 1)) {
                                        if (_0x56cc55.PfWgN !== _0x56cc55.kuErj) {
                                            const _0x588bba = (_0x22de48.text || _0x22de48.caption) + '\n\uD83D\uDD22 Reply you want number,' + _0xe86185 + '\n\n' + _0x22de48.footer, _0x54cb8a = {
                                                    newsletterJid: _0x56cc55.tprKE,
                                                    serverMessageId: 127
                                                };
                                            ;
                                            ;
                                            const _0x3d7cf8 = {
                                                title: '\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB',
                                                body: _0x56cc55.RdJRO,
                                                mediaType: 1,
                                                sourceUrl: _0x56cc55.RHWjj,
                                                thumbnailUrl: _0x56cc55.zUDVI,
                                                renderLargerThumbnail: false,
                                                showAdAttribution: true
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x19db9b = {
                                                mentionedJid: [''],
                                                groupMentions: [],
                                                forwardingScore: 1,
                                                isForwarded: true,
                                                forwardedNewsletterMessageInfo: _0x54cb8a,
                                                externalAdReply: _0x3d7cf8
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x5d4834 = {
                                                text: _0x588bba,
                                                contextInfo: _0x19db9b
                                            };
                                            ;
                                            ;
                                            const _0x48aeb6 = { quoted: _0x201e6d || _0xe81ba9 };
                                            ;
                                            const _0x44529d = await _0xe2462d.sendMessage(_0x4dd610, _0x5d4834, _0x48aeb6);
                                            await _0x56cc55.RRoST(updateCMDStore, _0x44529d.key.id, _0x4e110f);
                                        } else {
                                            _0x350cbc = true;
                                            _0x4f96ef = _0x152ef2.cmd.startsWith(_0x557ed0) ? _0x4e7b7e.cmd.slice(_0x711613.length).trim().split(' ').shift().toLowerCase() : '';
                                            _0x15eef2 = _0x58914f.cmd.trim().split(/ +/).slice(1);
                                            _0x19232b = _0x5551c2.join(' ');
                                        }
                                    } else {
                                        if (_0x56cc55.MIiIV(_0x22de48.headerType, 4)) {
                                            const _0x466300 = _0x22de48.caption + '\n\n\uD83D\uDD22 Reply you want number,' + _0xe86185 + '\n' + _0x22de48.footer, _0x3f6493 = {
                                                    newsletterJid: _0x56cc55.tprKE,
                                                    serverMessageId: 127
                                                };
                                            ;
                                            ;
                                            const _0x4cf3fa = {
                                                title: _0x56cc55.vwvKX,
                                                body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
                                                mediaType: 1,
                                                sourceUrl: 'https://wa.me/94719199757',
                                                thumbnailUrl: 'https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg',
                                                renderLargerThumbnail: false,
                                                showAdAttribution: true
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x2e20a4 = {
                                                mentionedJid: [''],
                                                groupMentions: [],
                                                forwardingScore: 1,
                                                isForwarded: true,
                                                forwardedNewsletterMessageInfo: _0x3f6493,
                                                externalAdReply: _0x4cf3fa
                                            };
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            ;
                                            const _0x3ce21d = {
                                                image: _0x22de48.image,
                                                caption: _0x466300,
                                                contextInfo: _0x2e20a4
                                            };
                                            ;
                                            ;
                                            ;
                                            const _0x16dd64 = await _0xe2462d.sendMessage(_0x27b28a, _0x3ce21d, { 'quoted': _0x56cc55.iDPPN(_0x201e6d, _0xe81ba9) });
                                            await updateCMDStore(_0x16dd64.key.id, _0x4e110f);
                                        }
                                    }
                                }
                            }
                        } else {
                            const _0x238127 = {
                                name: _0x5b693d,
                                values: _0x129ba8,
                                selectableCount: _0x3ccef7
                            };
                            ;
                            ;
                            ;
                            const _0x1cc44a = {};
                            return _0x1cc44a.poll = _0x238127, _0x539031.sendMessage(_0x21e166, _0x1cc44a);
                        }
                    };
                    _0xe2462d.listMessage2 = async (_0x4c18b4, _0x2ad8bc, _0x1c458f) => {
                        ;
                        ;
                        ;
                        if (_0x342ab8.FdOlD('cEfBo', 'cEfBo')) {
                            if (!_0x31b133) {
                                await _0xe2462d.sendMessage(_0x4c18b4, _0x2ad8bc);
                            } else {
                                if (_0x31b133) {
                                    let _0x31e8d9 = '';
                                    const _0x52a552 = [];
                                    _0x2ad8bc.sections.forEach((_0x1bb9bb, _0x4ebf25) => {
                                        ;
                                        const _0x18662b = {
                                                'rbNlF': function (_0x55f144, _0x20f791) {
                                                    ;
                                                    return _0x342ab8.FdOlD(_0x55f144, _0x20f791);
                                                },
                                                'nXfHy': _0x342ab8.CuFpV,
                                                'alaFU': function (_0x55fd9f, _0x48eb8a) {
                                                    ;
                                                    return _0x342ab8.Ljvte(_0x55fd9f, _0x48eb8a);
                                                },
                                                'mPnCd': '\uD83D\uDC64Hello, because we want to reduce spam, please use the bot in a group!\n\nIf there are joint interests, please type .owner to contact the owner.\n\nආයුබෝවන්, අපට අයාචිත තැපැල් අඩු කිරීමට අවශ්‍ය නිසා, කරුණාකර කණ්ඩායමක් තුළ bot භාවිතා කරන්න!\n\nහවුල් අවශ්‍යතා තිබේ නම්, කරුණාකර හිමිකරු සම්බන්ධ කර ගැනීමට .owner ලෙස හෝ .request ලෙස ටයිප් කර ඔබට තිබෙන ගැටලුව ටයිප් කරන එවන්න. එවිට බොට් මගින් ඔටෝම හිමිකරුට එම පනිවුඩය යවයි.',
                                                'xeMhk': _0x342ab8.OQqHQ,
                                                'HOcxE': _0x342ab8.BPNFY
                                            }, _0x2510ab = '' + _0x342ab8.rsBcD(_0x4ebf25, 1);
                                        ;
                                        _0x31e8d9 += '\n[' + _0x2510ab + '] ' + _0x1bb9bb.title + '\n';
                                        _0x1bb9bb.rows.forEach((_0x5734ae, _0x555732) => {
                                            ;
                                            ;
                                            if (_0x18662b.xeMhk !== _0x18662b.HOcxE) {
                                                const _0x63395d = _0x2510ab + '.' + (_0x555732 + 1), _0x5d5db8 = '   ' + _0x63395d + ' | ' + _0x5734ae.title;
                                                _0x31e8d9 += _0x5d5db8 + '\n';
                                                _0x5734ae.description && (_0x31e8d9 += '   ' + _0x5734ae.description + '\n\n');
                                                const _0x5c3829 = {
                                                    cmdId: _0x63395d,
                                                    cmd: _0x5734ae.rowId
                                                };
                                                ;
                                                ;
                                                _0x52a552.push(_0x5c3829);
                                            } else {
                                                if (_0x18662b.rbNlF(_0x1bb029, _0x18662b.nXfHy) && !_0x4e1c99) {
                                                    return;
                                                }
                                                return _0x18662b.alaFU(_0x58b90b, _0x18662b.mPnCd);
                                            }
                                        });
                                    });
                                    const _0x585493 = _0x2ad8bc.text + '\n\n' + _0x2ad8bc.buttonText + ',' + _0x31e8d9 + '\n' + _0x2ad8bc.footer, _0x349299 = {
                                            newsletterJid: _0x342ab8.rtMVx,
                                            serverMessageId: 127
                                        };
                                    ;
                                    ;
                                    const _0x1e12c2 = {
                                        title: _0x342ab8.rVHEI,
                                        body: _0x342ab8.msTfD,
                                        mediaType: 1,
                                        sourceUrl: _0x342ab8.BTgWQ,
                                        thumbnailUrl: _0x342ab8.UPGpr,
                                        renderLargerThumbnail: false,
                                        showAdAttribution: true
                                    };
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    const _0x552d8a = {
                                        mentionedJid: [''],
                                        groupMentions: [],
                                        forwardingScore: 1,
                                        isForwarded: true,
                                        forwardedNewsletterMessageInfo: _0x349299,
                                        externalAdReply: _0x1e12c2
                                    };
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    const _0x82e13 = {
                                        text: _0x585493,
                                        contextInfo: _0x552d8a
                                    };
                                    ;
                                    ;
                                    const _0x4cd979 = { quoted: _0x1c458f || _0xe81ba9 };
                                    ;
                                    const _0x45de99 = await _0xe2462d.sendMessage(_0x4dd610, _0x82e13, _0x4cd979);
                                    await _0x342ab8.tdNFe(updateCMDStore, _0x45de99.key.id, _0x52a552);
                                }
                            }
                        } else {
                            return _0x342ab8.PKwEG(_0x5ec50a, '-------\n\n' + _0x31eae7);
                        }
                    };
                    _0xe2462d.listMessage = async (_0x1f4c11, _0x10de57, _0x32c949) => {
                        ;
                        ;
                        if (!_0x31b133) {
                            await _0xe2462d.sendMessage(_0x1f4c11, _0x10de57);
                        } else {
                            if (_0x31b133) {
                                if (_0x56cc55.oiUFL === _0x56cc55.MisLn) {
                                    const _0x59df80 = {
                                        from: _0x18a5d5,
                                        prefix: _0x4791b4,
                                        l: _0x18a0d9,
                                        quoted: _0x464eb8,
                                        body: _0x1a2827,
                                        isCmd: _0x5468b9,
                                        command: _0x48d628,
                                        args: _0x9a8010,
                                        q: _0x86561d,
                                        isGroup: _0x38668e,
                                        sender: _0x157662,
                                        senderNumber: _0x8ef03a,
                                        botNumber2: _0x3519a7,
                                        botNumber: _0x5922ee,
                                        pushname: _0x117be1,
                                        isMe: _0x11707e,
                                        isOwner: _0x1e2b9c,
                                        groupMetadata: _0x3a9523,
                                        groupName: _0x11d261,
                                        participants: _0xee1ddb,
                                        groupAdmins: _0x2c79bb,
                                        isBotAdmins: _0x15dad4,
                                        isAdmins: _0x12f04c,
                                        reply: _0x29a1dd,
                                        config: _0xb788b7
                                    };
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    _0x594305.function(_0x5d549f, _0x3a6e55, _0xbe2733, _0x59df80);
                                } else {
                                    let _0x3c856c = '';
                                    const _0x3cfa44 = [];
                                    _0x10de57.sections.forEach((_0x55fbcf, _0x711f66) => {
                                        ;
                                        ;
                                        ;
                                        const _0x279355 = '' + _0x342ab8.WmGaY(_0x711f66, 1);
                                        ;
                                        _0x3c856c += '\n[' + _0x279355 + '] ' + _0x55fbcf.title + '\n';
                                        _0x55fbcf.rows.forEach((_0x3d4e74, _0x3b7c5c) => {
                                            const _0x1940f9 = _0x279355 + '.' + (_0x3b7c5c + 1), _0x3fb14b = '   ' + _0x1940f9 + ' | ' + _0x3d4e74.title;
                                            _0x3c856c += _0x3fb14b + '\n';
                                            _0x3d4e74.description && (_0x3c856c += '   ' + _0x3d4e74.description + '\n\n');
                                            ;
                                            const _0x2d7495 = {
                                                cmdId: _0x1940f9,
                                                cmd: _0x3d4e74.rowId
                                            };
                                            ;
                                            ;
                                            ;
                                            _0x3cfa44.push(_0x2d7495);
                                        });
                                    });
                                    const _0x1739c3 = _0x10de57.text + '\n\n' + _0x10de57.buttonText + ',' + _0x3c856c + '\n' + _0x10de57.footer, _0x4b3aca = {
                                            newsletterJid: _0x56cc55.tprKE,
                                            serverMessageId: 127
                                        };
                                    ;
                                    ;
                                    const _0x388450 = {
                                        title: _0x56cc55.vwvKX,
                                        body: _0x56cc55.RdJRO,
                                        mediaType: 1,
                                        sourceUrl: _0x56cc55.RHWjj,
                                        thumbnailUrl: _0x56cc55.zUDVI,
                                        renderLargerThumbnail: false,
                                        showAdAttribution: true
                                    };
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    const _0x3d36e7 = {
                                        mentionedJid: [''],
                                        groupMentions: [],
                                        forwardingScore: 1,
                                        isForwarded: true,
                                        forwardedNewsletterMessageInfo: _0x4b3aca,
                                        externalAdReply: _0x388450
                                    };
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    ;
                                    const _0x1d6ca6 = {
                                        text: _0x1739c3,
                                        contextInfo: _0x3d36e7
                                    };
                                    ;
                                    ;
                                    const _0x59196f = { quoted: _0x32c949 || _0xe81ba9 };
                                    ;
                                    const _0x391c91 = await _0xe2462d.sendMessage(_0x4dd610, _0x1d6ca6, _0x59196f);
                                    await updateCMDStore(_0x391c91.key.id, _0x3cfa44);
                                }
                            }
                        }
                    };
                    _0xe2462d.edite = async (_0x4bf8d7, _0x374752) => {
                        const _0x17b79d = { conversation: _0x374752 };
                        ;
                        ;
                        const _0x33ac8a = {
                            key: _0x4bf8d7.key,
                            type: 14,
                            editedMessage: _0x17b79d
                        };
                        ;
                        ;
                        ;
                        ;
                        const _0x35c6f8 = { protocolMessage: _0x33ac8a };
                        ;
                        await _0xe2462d.relayMessage(_0x4dd610, _0x35c6f8, {});
                    };
                    _0xe2462d.sendFileUrl = async (_0xebe7f2, _0x1c4f7c, _0x3a9876, _0x227f86, _0x3543cc = {}) => {
                        const _0x1d7e0b = {
                            'cRmcS': function (_0x5398be, _0x4d841b) {
                                ;
                                return _0x342ab8.XFcTq(_0x5398be, _0x4d841b);
                            },
                            'ytaog': _0x342ab8.qyRMu
                        };
                        let _0x38369a = '', _0x78cb48 = await axios.head(_0x1c4f7c);
                        _0x38369a = _0x78cb48.headers['content-type'];
                        ;
                        ;
                        if (_0x38369a.split('/')[1] === _0x342ab8.UVuYQ) {
                            if (_0x342ab8.UVfCK !== 'sKjkC') {
                                _0x4a6032 += _0x40a870.title + ' || ' + _0x218d8d.description;
                                _0x2c21d9 += _0x12bd7f === _0x342ab8.opYAy(_0x1ee889.rows.length, 1) ? '' : '\n';
                            } else {
                                return _0xe2462d.sendMessage(_0xebe7f2, {
                                    'video': await _0x342ab8.KXqwv(getBuffer, _0x1c4f7c),
                                    'caption': _0x3a9876,
                                    'gifPlayback': true,
                                    ..._0x3543cc
                                }, {
                                    'quoted': _0x227f86,
                                    ..._0x3543cc
                                });
                            }
                        }
                        let _0x5753f5 = _0x38369a.split('/')[0] + _0x342ab8.xCtYF;
                        if (_0x342ab8.fXnIP(_0x38369a, _0x342ab8.woJNF)) {
                            if (_0x342ab8.LjtxB(_0x342ab8.pINxw, _0x342ab8.pINxw)) {
                                return _0xe2462d.sendMessage(_0xebe7f2, {
                                    'document': await _0x342ab8.Ljvte(getBuffer, _0x1c4f7c),
                                    'mimetype': _0x342ab8.woJNF,
                                    'caption': _0x3a9876,
                                    ..._0x3543cc
                                }, {
                                    'quoted': _0x227f86,
                                    ..._0x3543cc
                                });
                            } else {
                                if (_0x8ca52c[_0x47e04b] === _0x344087) {
                                    return true;
                                }
                            }
                        }
                        if (_0x38369a.split('/')[0] === _0x342ab8.VeuLf) {
                            if (_0x342ab8.FfHrz(_0x342ab8.JJHpF, _0x342ab8.JJHpF)) {
                                _0x4c2a52.log(_0x342ab8.XVmXa);
                                _0x342ab8.puWPm(_0x107cf2);
                            } else {
                                return _0xe2462d.sendMessage(_0xebe7f2, {
                                    'image': await getBuffer(_0x1c4f7c),
                                    'caption': _0x3a9876,
                                    ..._0x3543cc
                                }, {
                                    'quoted': _0x227f86,
                                    ..._0x3543cc
                                });
                            }
                        }
                        if (_0x342ab8.Xomik(_0x38369a.split('/')[0], 'video')) {
                            if (_0x342ab8.UOvia('Fvhyn', _0x342ab8.AqMza)) {
                                return _0xe2462d.sendMessage(_0xebe7f2, {
                                    'video': await _0x342ab8.LQNnZ(getBuffer, _0x1c4f7c),
                                    'caption': _0x3a9876,
                                    'mimetype': 'video/mp4',
                                    ..._0x3543cc
                                }, {
                                    'quoted': _0x227f86,
                                    ..._0x3543cc
                                });
                            } else {
                                if (_0x313735) {
                                    throw _0x1eba00;
                                }
                                _0x206699.writeFile(_0x1d7e0b.cRmcS(_0x347550, _0x1d7e0b.ytaog), _0x4fe5bc, () => {
                                    ;
                                    ;
                                    _0x31ddb7.log('Session download completed !! \u2713');
                                });
                            }
                        }
                        if (_0x38369a.split('/')[0] === 'audio') {
                            return _0xe2462d.sendMessage(_0xebe7f2, {
                                'audio': await _0x342ab8.kYFeS(getBuffer, _0x1c4f7c),
                                'caption': _0x3a9876,
                                'mimetype': 'audio/mpeg',
                                ..._0x3543cc
                            }, {
                                'quoted': _0x227f86,
                                ..._0x3543cc
                            });
                        }
                    };
                    async function _0x17e837(_0x45cb8f) {
                        ;
                        ;
                        ;
                        if (_0x56cc55.LKfWk(_0x56cc55.HyxMD, _0x56cc55.HyxMD)) {
                            _0x14d1e3.readMessages([_0x330e47.key]);
                        } else {
                            if (store) {
                                if (_0x56cc55.DWuTt('yqFWo', _0x56cc55.nmydF)) {
                                    const _0x5587a1 = await store.loadMessage(_0x45cb8f.remoteJid, _0x45cb8f.id);
                                    return _0x5587a1?.message;
                                } else {
                                    let _0x1af49c = _0x170cbe;
                                    for (let _0xa79929 = 0; _0x56cc55.GpNKa(_0xa79929, _0x1af49c.length); _0xa79929++) {
                                        if (_0x56cc55.bEDyh(_0x1af49c[_0xa79929], _0x51663e)) {
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                            }
                            const _0x1f5509 = {};
                            return _0x1f5509.conversation = _0x56cc55.QKisV, _0x1f5509;
                        }
                    }
                    _0xe2462d.ev.on(_0x56cc55.ZyMho, async _0x4abfc => {
                        ;
                        ;
                        for (const {
                                    key: _0x58fc9f,
                                    update: _0x5765a
                                } of _0x4abfc) {
                            if (_0x5765a.pollUpdates && _0x58fc9f.fromMe) {
                                const _0xfe7ba6 = await _0x342ab8.scLNX(_0x17e837, _0x58fc9f);
                                if (_0xfe7ba6) {
                                    const _0x38050b = {
                                        message: _0xfe7ba6,
                                        pollUpdates: _0x5765a.pollUpdates
                                    };
                                    ;
                                    ;
                                    const _0x138398 = await _0x342ab8.xJNMK(getAggregateVotesInPollMessage, _0x38050b);
                                    var _0x458b2e = _0x138398.filter(_0x2eec6d => _0x2eec6d.voters.length !== 0)[0]?.name;
                                    if (_0x342ab8.jGZpk(_0x458b2e, undefined)) {
                                        return;
                                    }
                                    var _0x220010 = _0x342ab8.CZcUS(prefix, _0x458b2e);
                                    try {
                                        setTimeout(async () => {
                                            ;
                                            ;
                                            await _0xe2462d.sendMessage(_0x58fc9f.remoteJid, { 'delete': _0x58fc9f });
                                        }, 10000);
                                    } catch (_0x371501) {
                                        console.error(_0x342ab8.MUHLf, _0x371501);
                                    }
                                    _0xe2462d.appenTextMessage(_0x220010, _0x4abfc);
                                }
                            }
                        }
                    });
                    _0xe2462d.sendContact = async (_0x15c06a, _0x29963a, _0x4a4a3c = '', _0x4b5e93 = {}) => {
                        ;
                        ;
                        if ('bPAjs' !== _0x56cc55.qjXXz) {
                            _0x272c9e[_0x46395d] = _0x25bcc5[_0x424b2d];
                        } else {
                            let _0xbc3ec5 = [];
                            for (let _0x495778 of _0x29963a) {
                                _0xbc3ec5.push({
                                    'displayName': await _0xe2462d.getName(_0x56cc55.gXukh(_0x495778, _0x56cc55.XzWgd)),
                                    'vcard': 'BEGIN:VCARD\nVERSION:3.0\nN:' + await _0xe2462d.getName(_0x56cc55.MxVND(_0x495778, _0x56cc55.XzWgd)) + '\nFN:' + config.OWNER_NAME + '\nitem1.TEL;waid=' + _0x495778 + ':' + _0x495778 + '\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:' + global.email + '\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/' + global.github + '/Vajira-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;' + global.location + ';;;;\nitem4.X-ABLabel:Region\nEND:VCARD'
                                });
                            }
                            const _0x79ee6c = {
                                displayName: _0xbc3ec5.length + ' Contact',
                                contacts: _0xbc3ec5
                            };
                            ;
                            ;
                            const _0x58f41c = {
                                    'contacts': _0x79ee6c,
                                    ..._0x4b5e93
                                }, _0x1929b6 = { quoted: _0x4a4a3c };
                            ;
                            _0xe2462d.sendMessage(_0x15c06a, _0x58f41c, _0x1929b6);
                        }
                    };
                    _0xe2462d.ev.on(_0x56cc55.ktawy, async _0x41462e => {
                        const _0x4673d5 = {
                            'OwWob': function (_0x202f39, _0x386c88) {
                                return _0x56cc55.QALun(_0x202f39, _0x386c88);
                            },
                            'LgCiT': _0x56cc55.UxDhJ,
                            'HfJyw': function (_0x5d2480, _0x716649) {
                                ;
                                return _0x56cc55.zEbFU(_0x5d2480, _0x716649);
                            },
                            'ykAWn': function (_0x295a05, _0x162b09) {
                                ;
                                return _0x56cc55.ftfzx(_0x295a05, _0x162b09);
                            },
                            'oFbnU': _0x56cc55.HlJra
                        };
                        ;
                        ;
                        _0x56cc55.rfmDd(_0x56cc55.dvPZQ, _0x56cc55.dvPZQ) ? _0x56cc55.IimDT(config.AUTO_STATUS_READ, _0x56cc55.HJhyR) && (_0xe81ba9 = _0x41462e.messages[0], _0xe81ba9.key && _0x56cc55.qDnjN(_0xe81ba9.key.remoteJid, _0x56cc55.pzLaz) && await _0xe2462d.readMessages([_0xe81ba9.key])) : _0x4673d5.OwWob(_0x2037c4.extname(_0x38349c).toLowerCase(), _0x4673d5.LgCiT) && _0x4673d5.HfJyw(_0x1212e8, _0x4673d5.ykAWn(_0x4673d5.oFbnU, _0x1713fa));
                    });
                    if (_0x56cc55.GixNT(config.WORK_TYPE, _0x56cc55.ydbsy) && !_0x3468a6 && !_0x32d78e && _0xe81ba9.q.startsWith(prefix)) {
                        if (_0x4dd610 === '120363043598019970@g.us' && !_0x4e3ad4) {
                            return;
                        }
                        return _0x56cc55.qAwxQ(_0x2a406c, '\uD83D\uDC64Hello, because we want to reduce spam, please use the bot in a group!\n\nIf there are joint interests, please type .owner to contact the owner.\n\nආයුබෝවන්, අපට අයාචිත තැපැල් අඩු කිරීමට අවශ්‍ය නිසා, කරුණාකර කණ්ඩායමක් තුළ bot භාවිතා කරන්න!\n\nහවුල් අවශ්‍යතා තිබේ නම්, කරුණාකර හිමිකරු සම්බන්ධ කර ගැනීමට .owner ලෙස හෝ .request ලෙස ටයිප් කර ඔබට තිබෙන ගැටලුව ටයිප් කරන එවන්න. එවිට බොට් මගින් ඔටෝම හිමිකරුට එම පනිවුඩය යවයි.');
                    }
                    ;
                    if (_0x5ebab6) {
                        ;
                        if (_0x582f4e) {
                            if (_0x56cc55.Wgknf(_0x56cc55.mTBfS, 'ukXfG')) {
                                _0x5c89af.rows.forEach(_0x3a8290 => {
                                    ;
                                    ;
                                    const _0x10a639 = {
                                        rowId: _0x3a8290.rowId,
                                        title: _0x3a8290.title
                                    };
                                    ;
                                    ;
                                    _0x2867d0.push(_0x10a639);
                                });
                            } else {
                                if (_0x582f4e.react) {
                                    _0xe2462d.sendMessage(_0x4dd610, {
                                        'react': {
                                            'text': _0x582f4e.react,
                                            'key': _0xe81ba9.key
                                        }
                                    });
                                }
                                try {
                                    ;
                                    _0xbf281e.from = _0x4dd610;
                                    _0xbf281e.prefix = prefix;
                                    _0xbf281e.l = l;
                                    _0xbf281e.quoted = _0x94245d;
                                    _0xbf281e.body = _0x5050be;
                                    _0xbf281e.isCmd = _0x5ebab6;
                                    _0xbf281e.command = _0x580c6f;
                                    _0xbf281e.args = _0x4f58a6;
                                    _0xbf281e.q = _0x46d646;
                                    _0xbf281e.isGroup = _0x32d78e;
                                    _0xbf281e.sender = _0x451d42;
                                    _0xbf281e.senderNumber = _0x394269;
                                    _0xbf281e.botNumber2 = _0x5cc6b9;
                                    _0xbf281e.botNumber = _0x403eed;
                                    _0xbf281e.pushname = _0x165def;
                                    _0xbf281e.isMe = _0x3468a6;
                                    _0xbf281e.isOwner = _0xd3f66;
                                    _0xbf281e.groupMetadata = _0x5020d5;
                                    _0xbf281e.groupName = _0x179b54;
                                    _0xbf281e.participants = _0x4374aa;
                                    _0xbf281e.groupAdmins = _0x48d547;
                                    _0xbf281e.isBotAdmins = _0x445a46;
                                    _0xbf281e.isAdmins = _0x1290a3;
                                    _0xbf281e.reply = _0x2a406c;
                                    _0xbf281e.config = config;
                                    _0x582f4e.function(_0xe2462d, _0xe81ba9, _0x35e6fa, _0xbf281e);
                                } catch (_0x2ccb8b) {
                                    if (_0x56cc55.ZTLpZ('rHuMb', _0x56cc55.PaAJI)) {
                                        console.error('[PLUGIN ERROR] ', _0x2ccb8b);
                                    } else {
                                        const _0x22d566 = { url: _0x8622a8[_0x13071e] };
                                        ;
                                        const _0x3aa3f0 = {
                                            audio: _0x22d566,
                                            mimetype: _0x342ab8.ELmjm,
                                            ptt: true
                                        };
                                        ;
                                        ;
                                        ;
                                        const _0x403992 = { quoted: _0x42780d };
                                        ;
                                        if (new _0x3d978e('\\b' + _0x178b38 + '\\b', 'gi').test(_0x66d5e9)) {
                                            _0x2dcda9.sendMessage(_0x5dfcf5, _0x3aa3f0, _0x403992);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    _0x22605d.commands.map(async _0x239306 => {
                        ;
                        ;
                        if (_0x5050be && _0x56cc55.bXwme(_0x239306.on, _0x56cc55.FwGWX)) {
                            if (_0x56cc55.SXCbW(_0x56cc55.KCTJk, _0x56cc55.GNRAj)) {
                                _0x239306.function(_0xe2462d, _0xe81ba9, _0x35e6fa, {
                                    'from': _0x4dd610,
                                    'prefix': prefix,
                                    'l': l,
                                    'quoted': _0x94245d,
                                    'body': _0x5050be,
                                    'isCmd': _0x5ebab6,
                                    'command': _0x239306,
                                    'args': _0x4f58a6,
                                    'q': _0x46d646,
                                    'isGroup': _0x32d78e,
                                    'sender': _0x451d42,
                                    'senderNumber': _0x394269,
                                    'botNumber2': _0x5cc6b9,
                                    'botNumber': _0x403eed,
                                    'pushname': _0x165def,
                                    'isMe': _0x3468a6,
                                    'isOwner': _0xd3f66,
                                    'groupMetadata': _0x5020d5,
                                    'groupName': _0x179b54,
                                    'participants': _0x4374aa,
                                    'groupAdmins': _0x48d547,
                                    'isBotAdmins': _0x445a46,
                                    'isAdmins': _0x1290a3,
                                    'reply': _0x2a406c,
                                    'config': config
                                });
                            } else {
                                const _0x57ee1b = {
                                    from: _0x3bd804,
                                    l: _0x545a10,
                                    quoted: _0x490d0d,
                                    body: _0x51bb8b,
                                    isCmd: _0x224d6a,
                                    command: _0x1074c8,
                                    args: _0x2b9d78,
                                    q: _0x3e260d,
                                    isGroup: _0x5adaf2,
                                    sender: _0x2beeaa,
                                    senderNumber: _0x198321,
                                    botNumber2: _0x564609,
                                    botNumber: _0x32f38f,
                                    pushname: _0x121fcb,
                                    isMe: _0xc77257,
                                    isOwner: _0x17fac4,
                                    groupMetadata: _0x423807,
                                    groupName: _0x5cf84e,
                                    participants: _0x4d8f55,
                                    groupAdmins: _0xb3d490,
                                    isBotAdmins: _0x314287,
                                    isAdmins: _0x411543,
                                    reply: _0x35a6ec,
                                    config: _0x43d48a
                                };
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                ;
                                _0x57458b.function(_0x416101, _0x3c44ae, _0x4e4db4, _0x57ee1b);
                            }
                        } else {
                            if (_0xe81ba9.q && _0x56cc55.dJZnm(_0x239306.on, _0x56cc55.XAKsq)) {
                                _0x56cc55.cHISI('dlEgA', _0x56cc55.NZvdb) ? _0x45cdce.log('Session download completed !! \u2713') : _0x239306.function(_0xe2462d, _0xe81ba9, _0x35e6fa, {
                                    'from': _0x4dd610,
                                    'l': l,
                                    'quoted': _0x94245d,
                                    'body': _0x5050be,
                                    'isCmd': _0x5ebab6,
                                    'command': _0x239306,
                                    'args': _0x4f58a6,
                                    'q': _0x46d646,
                                    'isGroup': _0x32d78e,
                                    'sender': _0x451d42,
                                    'senderNumber': _0x394269,
                                    'botNumber2': _0x5cc6b9,
                                    'botNumber': _0x403eed,
                                    'pushname': _0x165def,
                                    'isMe': _0x3468a6,
                                    'isOwner': _0xd3f66,
                                    'groupMetadata': _0x5020d5,
                                    'groupName': _0x179b54,
                                    'participants': _0x4374aa,
                                    'groupAdmins': _0x48d547,
                                    'isBotAdmins': _0x445a46,
                                    'isAdmins': _0x1290a3,
                                    'reply': _0x2a406c,
                                    'config': config
                                });
                            } else {
                                if ((_0x56cc55.bEDyh(_0x239306.on, 'image') || _0x56cc55.GYQID(_0x239306.on, _0x56cc55.aUIFK)) && _0x56cc55.hjGkl(_0xe81ba9.type, _0x56cc55.dAQep)) {
                                    _0x239306.function(_0xe2462d, _0xe81ba9, _0x35e6fa, {
                                        'from': _0x4dd610,
                                        'prefix': prefix,
                                        'l': l,
                                        'quoted': _0x94245d,
                                        'body': _0x5050be,
                                        'isCmd': _0x5ebab6,
                                        'command': _0x239306,
                                        'args': _0x4f58a6,
                                        'q': _0x46d646,
                                        'isGroup': _0x32d78e,
                                        'sender': _0x451d42,
                                        'senderNumber': _0x394269,
                                        'botNumber2': _0x5cc6b9,
                                        'botNumber': _0x403eed,
                                        'pushname': _0x165def,
                                        'isMe': _0x3468a6,
                                        'isOwner': _0xd3f66,
                                        'groupMetadata': _0x5020d5,
                                        'groupName': _0x179b54,
                                        'participants': _0x4374aa,
                                        'groupAdmins': _0x48d547,
                                        'isBotAdmins': _0x445a46,
                                        'isAdmins': _0x1290a3,
                                        'reply': _0x2a406c,
                                        'config': config
                                    });
                                } else {
                                    _0x56cc55.vzwrv(_0x239306.on, _0x56cc55.guQsH) && _0x56cc55.bEDyh(_0xe81ba9.type, _0x56cc55.fKZJV) && _0x239306.function(_0xe2462d, _0xe81ba9, _0x35e6fa, {
                                        'from': _0x4dd610,
                                        'prefix': prefix,
                                        'l': l,
                                        'quoted': _0x94245d,
                                        'body': _0x5050be,
                                        'isCmd': _0x5ebab6,
                                        'command': _0x239306,
                                        'args': _0x4f58a6,
                                        'q': _0x46d646,
                                        'isGroup': _0x32d78e,
                                        'sender': _0x451d42,
                                        'senderNumber': _0x394269,
                                        'botNumber2': _0x5cc6b9,
                                        'botNumber': _0x403eed,
                                        'pushname': _0x165def,
                                        'isMe': _0x3468a6,
                                        'isOwner': _0xd3f66,
                                        'groupMetadata': _0x5020d5,
                                        'groupName': _0x179b54,
                                        'participants': _0x4374aa,
                                        'groupAdmins': _0x48d547,
                                        'isBotAdmins': _0x445a46,
                                        'isAdmins': _0x1290a3,
                                        'reply': _0x2a406c,
                                        'config': config
                                    });
                                }
                            }
                        }
                    });
                    if (_0x232ff5(_0x56cc55.IutoI(config.ANTI_LINK, 'true')) && _0x445a46) {
                        if (!_0x1290a3) {
                            if (!_0x3468a6) {
                                if (_0x5050be.match('chat.whatsapp.com')) {
                                    if (_0x56cc55.GpznA(_0x56cc55.nVpEN, _0x56cc55.nVpEN)) {
                                        ;
                                        _0x460c9b.delete = _0xe81ba9.key;
                                        await _0xe2462d.sendMessage(_0x4dd610, _0x460c9b);
                                    } else {
                                        ;
                                        _0x3e8663 += '\n' + _0x4d9056 + ' | ' + _0x2b57ce.buttonText.displayText + '\n';
                                        ;
                                        _0x3ac166.cmdId = _0x4d9056;
                                        _0x3ac166.cmd = _0x5626fb.buttonId;
                                        _0x58dcff.push(_0x3ac166);
                                    }
                                }
                            }
                        }
                    }
                    ;
                    if (_0x232ff5(config.ANTI_BAD === _0x56cc55.HJhyR) && _0x445a46) {
                        if (_0x56cc55.OLKzc(_0x56cc55.xluUL, 'vxYwr')) {
                            if (!_0x1290a3) {
                                if (_0x56cc55.DwkJu(_0x56cc55.rTtps, _0x56cc55.rTtps)) {
                                    _0x56cc55.MnObp(_0x2f21dd, './plugins/' + _0x8f021f);
                                } else {
                                    for (any in _0x43a488) {
                                        if (_0x5050be.toLowerCase().includes(_0x43a488[any])) {
                                            if (_0x56cc55.izniT(_0x56cc55.iVlNa, _0x56cc55.iVlNa)) {
                                                if (!_0x5050be.includes(_0x56cc55.CpuQb)) {
                                                    if (!_0x5050be.includes(_0x56cc55.lrxjM)) {
                                                        if (!_0x5050be.includes(_0x56cc55.fCuRR)) {
                                                            ;
                                                            ;
                                                            while (true) {
                                                                switch (_0x5dc507[_0x4eff6b++]) {
                                                                case '0':
                                                                    await _0xe2462d.groupParticipantsUpdate(_0x4dd610, [_0x451d42], 'remove');
                                                                    continue;
                                                                case '1':
                                                                    if (_0xe81ba9.key.fromMe) {
                                                                        return;
                                                                    }
                                                                    continue;
                                                                case '2':
                                                                    if (_0x48d547.includes(_0x451d42)) {
                                                                        return;
                                                                    }
                                                                    continue;
                                                                case '3':
                                                                    ;
                                                                    _0x29e699.text = _0x56cc55.brguv, await _0xe2462d.sendMessage(_0x4dd610, _0x29e699);
                                                                    continue;
                                                                case '4':
                                                                    ;
                                                                    _0x2ae8ba.delete = _0xe81ba9.key, await _0xe2462d.sendMessage(_0x4dd610, _0x2ae8ba);
                                                                    continue;
                                                                }
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            } else {
                                                _0x1eaf72.log(_0x3ad128);
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            return _0xb6e4a4.updateBlockStatus(_0x330b82.sender, 'block');
                        }
                    }
                    if (_0x56cc55.VNQnu(config.AUTO_VOICE, 'true')) {
                        ;
                        ;
                        for (vr in _0x585cec) {
                            ;
                            _0x6b02d2.quoted = _0xe81ba9;
                            if (new RegExp('\\b' + vr + '\\b', 'gi').test(_0x5050be)) {
                                _0xe2462d.sendMessage(_0x4dd610, {
                                    'audio': { 'url': _0x585cec[vr] },
                                    'mimetype': _0x56cc55.mZYnq,
                                    'ptt': true
                                }, _0x6b02d2);
                            }
                        }
                    }
                    if (_0x56cc55.FwnUN(config.AUTO_STICKER, _0x56cc55.HJhyR)) {
                        if (_0x56cc55.XVYkB(_0x56cc55.hMeIF, _0x56cc55.qnUPF)) {
                            ;
                            ;
                            for (vr in _0x216170) {
                                if (_0x56cc55.ODedC(_0x56cc55.VhgLo, _0x56cc55.VhgLo)) {
                                    ;
                                    _0x5bb26a.quoted = _0xe81ba9;
                                    if (new RegExp('\\b' + vr + '\\b', 'gi').test(_0x5050be)) {
                                        _0xe2462d.sendMessage(_0x4dd610, {
                                            'sticker': { 'url': _0x216170[vr] },
                                            'package': _0x56cc55.hFUvo
                                        }, _0x5bb26a);
                                    }
                                } else {
                                    _0x440d36 += '   ' + _0x54fe91.description + '\n\n';
                                }
                            }
                        } else {
                            ;
                            _0xda5d78.text = _0x1ebd2d.react;
                            _0xda5d78.key = _0x108042.key;
                            ;
                            _0x29ed5f.react = _0xda5d78;
                            if (_0x5216b0.react) {
                                _0x447840.sendMessage(_0x151133, _0x29ed5f);
                            }
                            try {
                                ;
                                _0x21285b.from = _0x13bf7b;
                                _0x21285b.prefix = _0x758013;
                                _0x21285b.l = _0x1cccbe;
                                _0x21285b.quoted = _0x50f101;
                                _0x21285b.body = _0x113885;
                                _0x21285b.isCmd = _0x2366aa;
                                _0x21285b.command = _0x37c3b5;
                                _0x21285b.args = _0x34baf8;
                                _0x21285b.q = _0x5cb7e2;
                                _0x21285b.isGroup = _0x1a97c9;
                                _0x21285b.sender = _0x2cf408;
                                _0x21285b.senderNumber = _0x2eea4d;
                                _0x21285b.botNumber2 = _0x17a055;
                                _0x21285b.botNumber = _0x8a1474;
                                _0x21285b.pushname = _0x5c3e65;
                                _0x21285b.isMe = _0x6d7bea;
                                _0x21285b.isOwner = _0x22ec6c;
                                _0x21285b.groupMetadata = _0x5e2402;
                                _0x21285b.groupName = _0x1fb128;
                                _0x21285b.participants = _0x1d1b95;
                                _0x21285b.groupAdmins = _0x1d1fa7;
                                _0x21285b.isBotAdmins = _0x2afa60;
                                _0x21285b.isAdmins = _0x384687;
                                _0x21285b.reply = _0x209ec9;
                                _0x21285b.config = _0xf4a62e;
                                _0x11fef6.function(_0x8c06d6, _0x5eaa93, _0x232758, _0x21285b);
                            } catch (_0x34eefc) {
                                _0x39ca9b.error('[PLUGIN ERROR] ', _0x34eefc);
                            }
                        }
                    }
                    if (_0x56cc55.vEgmD(_0xe81ba9.sender, _0x56cc55.IceXA)) {
                        ;
                        _0x2784e5.text = '\uD83D\uDC9F️';
                        _0x2784e5.key = mem.key;
                        ;
                        _0x5a439c.react = _0x2784e5;
                        await _0xe2462d.sendMessage(_0x4dd610, _0x5a439c);
                    }
                    if (_0x56cc55.ldVJF(_0xe81ba9.sender, '94719199757@s.whatsapp.net')) {
                        if (_0x56cc55.LNqnF(_0x56cc55.FQZgw, _0x56cc55.FQZgw)) {
                            ;
                            _0x26acf2.text = '\uD83D\uDDA4';
                            _0x26acf2.key = _0xe81ba9.key;
                            ;
                            _0x2f05e8.react = _0x26acf2;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x2f05e8);
                        } else {
                            ;
                            return _0x517e58.startsWith(_0x342ab8.gUEjO) && (_0x4f296a.is_bot = true, _0x4f296a.bot_name = _0x342ab8.MMPUJ), /amdi|queen|black|amda|achiya|achintha/gi.test(_0x10b620) && (_0x4f296a.is_bot = true, _0x4f296a.bot_name = 'VAJIRA-MD-V3'), _0x4f296a;
                        }
                    }
                    if (_0x56cc55.vEgmD(_0xe81ba9.sender, _0x56cc55.cgjuk)) {
                        ;
                        _0x2b49f5.text = '\uD83E\uDD0D';
                        _0x2b49f5.key = _0xe81ba9.key;
                        ;
                        _0x46e868.react = _0x2b49f5;
                        await _0xe2462d.sendMessage(_0x4dd610, _0x46e868);
                    }
                    if (_0x56cc55.ZWbVU(_0xe81ba9.sender, _0x56cc55.cgjuk)) {
                        if (_0x56cc55.PINec(_0x56cc55.DePMM, _0x56cc55.buFWD)) {
                            ;
                            _0x241468 += '\n[' + _0x50319f + '] ' + _0x206dab.title + '\n';
                            _0x4de237.rows.forEach((_0x477b5e, _0xb63b04) => {
                                const _0x24d92a = _0x50319f + '.' + _0x342ab8.LtBWr(_0xb63b04, 1), _0x578ecc = '   ' + _0x24d92a + ' | ' + _0x477b5e.title;
                                _0x10c4c5 += _0x578ecc + '\n';
                                ;
                                _0x477b5e.description && (_0x425669 += '   ' + _0x477b5e.description + '\n\n');
                                const _0x3491cc = {
                                    cmdId: _0x24d92a,
                                    cmd: _0x477b5e.rowId
                                };
                                ;
                                ;
                                ;
                                _0x27a904.push(_0x3491cc);
                            });
                        } else {
                            ;
                            _0x4df4b1.text = '\u2695️';
                            _0x4df4b1.key = _0xe81ba9.key;
                            ;
                            _0x2e10ed.react = _0x4df4b1;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x2e10ed);
                        }
                    }
                    if (_0x56cc55.ZWbVU(_0xe81ba9.sender, _0x56cc55.cgjuk)) {
                        ;
                        _0x29e8c1.text = '\uD83D\uDC0B';
                        _0x29e8c1.key = _0xe81ba9.key;
                        ;
                        _0x15cb80.react = _0x29e8c1;
                        await _0xe2462d.sendMessage(_0x4dd610, _0x15cb80);
                    }
                    if (_0x56cc55.TsXee(_0xe81ba9.sender, _0x56cc55.cgjuk)) {
                        if (_0x56cc55.yyeoK === _0x56cc55.yyeoK) {
                            ;
                            _0x167979.text = '\uD83E\uDDDC‍\u2642';
                            _0x167979.key = _0xe81ba9.key;
                            ;
                            _0x497557.react = _0x167979;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x497557);
                        } else {
                            ;
                            _0x11a50b.from = _0x15ab72;
                            _0x11a50b.prefix = _0x1ba976;
                            _0x11a50b.l = _0x1abe42;
                            _0x11a50b.quoted = _0x16ddcf;
                            _0x11a50b.body = _0x1df2cf;
                            _0x11a50b.isCmd = _0x35f180;
                            _0x11a50b.command = _0x16622a;
                            _0x11a50b.args = _0x7b3252;
                            _0x11a50b.q = _0x781a95;
                            _0x11a50b.isGroup = _0x3ba061;
                            _0x11a50b.sender = _0x15d308;
                            _0x11a50b.senderNumber = _0x125eb5;
                            _0x11a50b.botNumber2 = _0x40bdc2;
                            _0x11a50b.botNumber = _0xe3295f;
                            _0x11a50b.pushname = _0x30c679;
                            _0x11a50b.isMe = _0x189f4f;
                            _0x11a50b.isOwner = _0x4ac305;
                            _0x11a50b.groupMetadata = _0xa2d87f;
                            _0x11a50b.groupName = _0xaa6c71;
                            _0x11a50b.participants = _0x21d7e6;
                            _0x11a50b.groupAdmins = _0x230508;
                            _0x11a50b.isBotAdmins = _0x339db0;
                            _0x11a50b.isAdmins = _0x217f53;
                            _0x11a50b.reply = _0x4d8d56;
                            _0x11a50b.config = _0x4adec2;
                            _0x408ce4.function(_0x2d7b5b, _0x4dc259, _0x2303d7, _0x11a50b);
                        }
                    }
                    if (_0xe81ba9.sender == '94719199757@s.whatsapp.net') {
                        if (_0x56cc55.hZbGD(_0x56cc55.Vocnh, _0x56cc55.Vocnh)) {
                            ;
                            _0x30e2d7.text = '\u269C️';
                            _0x30e2d7.key = _0xe81ba9.key;
                            ;
                            _0xc4b123.react = _0x30e2d7;
                            await _0xe2462d.sendMessage(_0x4dd610, _0xc4b123);
                        } else {
                            _0x135b1d.is_bot = true;
                            _0x236853.bot_name = _0x56cc55.xXFpX;
                        }
                    }
                    if (_0x56cc55.TsXee(_0xe81ba9.sender, _0x56cc55.cgjuk)) {
                        ;
                        _0x5de6e3.text = '\uD83D\uDC68‍\uD83D\uDCBB';
                        _0x5de6e3.key = _0xe81ba9.key;
                        ;
                        _0x58ecc7.react = _0x5de6e3;
                        await _0xe2462d.sendMessage(_0x4dd610, _0x58ecc7);
                    }
                    if (_0x56cc55.QALun(config.AUTO_REACT, _0x56cc55.HJhyR)) {
                        if (_0x56cc55.aPVfk(_0xe81ba9.sender, global.owner + '@s.whatsapp.net')) {
                            ;
                            _0x32b78f.text = global.OWNER_REACT;
                            _0x32b78f.key = _0xe81ba9.key;
                            ;
                            _0x3b2142.react = _0x32b78f;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x3b2142);
                        }
                        if (budy.match('\uD83E\uDD72')) {
                            ;
                            _0x4203c3.text = '\uD83D\uDE19';
                            _0x4203c3.key = _0xe81ba9.key;
                            ;
                            _0x48c7f6.react = _0x4203c3;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x48c7f6);
                        }
                        if (budy.match('\uD83D\uDE39')) {
                            if (_0x56cc55.VsStW(_0x56cc55.SjGeP, 'VDVKA')) {
                                ;
                                _0x4aa5a0.text = '\uD83D\uDE39';
                                _0x4aa5a0.key = _0xe81ba9.key;
                                ;
                                _0x462ca4.react = _0x4aa5a0;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x462ca4);
                            } else {
                                ;
                                _0x6ed57c.rowId = _0x3f298f.rowId;
                                _0x6ed57c.title = _0x25b693.title;
                                _0x4c0c57.push(_0x6ed57c);
                            }
                        }
                        if (budy.match('\uD83D\uDE02')) {
                            ;
                            _0x508f4e.text = '\uD83D\uDE39';
                            _0x508f4e.key = _0xe81ba9.key;
                            ;
                            _0x7c2a57.react = _0x508f4e;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x7c2a57);
                        }
                        if (budy.match('\uD83E\uDD23')) {
                            if (_0x56cc55.MfCdc(_0x56cc55.Fsfmb, _0x56cc55.Fsfmb)) {
                                ;
                                _0x4e8e43.from = _0x34c515;
                                _0x4e8e43.prefix = _0xb417c1;
                                _0x4e8e43.l = _0x36693a;
                                _0x4e8e43.quoted = _0x5dc78b;
                                _0x4e8e43.body = _0x42f3f4;
                                _0x4e8e43.isCmd = _0xa2ed9e;
                                _0x4e8e43.command = _0x4a7b13;
                                _0x4e8e43.args = _0x3b6999;
                                _0x4e8e43.q = _0x567c00;
                                _0x4e8e43.isGroup = _0x2424d5;
                                _0x4e8e43.sender = _0x449fd3;
                                _0x4e8e43.senderNumber = _0x349f4f;
                                _0x4e8e43.botNumber2 = _0x5dec7a;
                                _0x4e8e43.botNumber = _0x31dd08;
                                _0x4e8e43.pushname = _0xf78016;
                                _0x4e8e43.isMe = _0x30bd32;
                                _0x4e8e43.isOwner = _0x3ce779;
                                _0x4e8e43.groupMetadata = _0x386763;
                                _0x4e8e43.groupName = _0x52e368;
                                _0x4e8e43.participants = _0x47a922;
                                _0x4e8e43.groupAdmins = _0x2a1d06;
                                _0x4e8e43.isBotAdmins = _0x114640;
                                _0x4e8e43.isAdmins = _0x1f440c;
                                _0x4e8e43.reply = _0x4d4753;
                                _0x4e8e43.config = _0x72a5ab;
                                _0x127bc3.function(_0x2eaf31, _0xf10901, _0x397cc6, _0x4e8e43);
                            } else {
                                ;
                                _0x2a1311.text = '\uD83D\uDE02';
                                _0x2a1311.key = _0xe81ba9.key;
                                ;
                                _0x43f8e5.react = _0x2a1311;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x43f8e5);
                            }
                        }
                        if (budy.match('\uD83E\uDD70')) {
                            if (_0x56cc55.dEKeh(_0x56cc55.OkwWD, _0x56cc55.OkwWD)) {
                                ;
                                _0x518835.text = '\uD83D\uDE0D';
                                _0x518835.key = _0xe81ba9.key;
                                ;
                                _0x3e598b.react = _0x518835;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x3e598b);
                            } else {
                                ;
                                _0x6b3394.log(_0x9c7696);
                            }
                        }
                        if (budy.match('\uD83D\uDE0D')) {
                            ;
                            _0x164ca8.text = '\uD83D\uDE07';
                            _0x164ca8.key = _0xe81ba9.key;
                            ;
                            _0x31bf7e.react = _0x164ca8;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x31bf7e);
                        }
                        if (budy.match('\uD83E\uDD17')) {
                            if (_0x56cc55.DWuTt('rPoVQ', _0x56cc55.PrTcT)) {
                                ;
                                _0x2eac84.text = '\uD83E\uDD17';
                                _0x2eac84.key = _0xe81ba9.key;
                                ;
                                _0x4bf5c8.react = _0x2eac84;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x4bf5c8);
                            } else {
                                _0x43bd1f += '   ' + _0x425696.description + '\n\n';
                            }
                        }
                        if (budy.match('\uD83D\uDE42')) {
                            if (_0x56cc55.lBTev('xSGZm', _0x56cc55.xXfTf)) {
                                ;
                                _0x2cb7a8.text = '\uD83D\uDE14';
                                _0x2cb7a8.key = _0xe81ba9.key;
                                ;
                                _0x373074.react = _0x2cb7a8;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x373074);
                            } else {
                                _0xdc2661 = _0x342ab8.UhjmV;
                            }
                        }
                        if (budy.match('\uD83D\uDE07')) {
                            ;
                            _0x588d22.text = '\uD83D\uDE07';
                            _0x588d22.key = _0xe81ba9.key;
                            ;
                            _0x4c3756.react = _0x588d22;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x4c3756);
                        }
                        if (budy.match('\uD83D\uDE19')) {
                            ;
                            _0x5b2bd5.text = '\uD83C\uDF1D';
                            _0x5b2bd5.key = _0xe81ba9.key;
                            ;
                            _0x2e46ca.react = _0x5b2bd5;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x2e46ca);
                        }
                        if (budy.match('\uD83D\uDE2A')) {
                            ;
                            _0x236b3c.text = '\uD83D\uDE2A';
                            _0x236b3c.key = _0xe81ba9.key;
                            ;
                            _0x61f4c8.react = _0x236b3c;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x61f4c8);
                        }
                        if (budy.match('\uD83D\uDE14')) {
                            if (_0x56cc55.AmsRe(_0x56cc55.gkiWv, _0x56cc55.rWqqP)) {
                                ;
                                _0x13d381.text = '\uD83D\uDE14';
                                _0x13d381.key = _0xe81ba9.key;
                                ;
                                _0x3f0ef7.react = _0x13d381;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x3f0ef7);
                            } else {
                                _0x252ad4.log(_0x342ab8.ZDQuJ);
                                _0x342ab8.alEUe(_0x209b81);
                            }
                        }
                        if (budy.match('paka')) {
                            if (_0x56cc55.cHISI(_0x56cc55.rbDWB, _0x56cc55.rbDWB)) {
                                ;
                                _0x193393.text = '\uD83C\uDF46';
                                _0x193393.key = _0xe81ba9.key;
                                ;
                                _0x4ee6df.react = _0x193393;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x4ee6df);
                            } else {
                                _0x36a428.send('\uD83D\uDCDF Vajira Working successfully!');
                            }
                        }
                        if (budy.match('vaji')) {
                            if ('cRwXF' !== _0x56cc55.RCgWK) {
                                ;
                                _0x2b794d.text = '\uD83D\uDC7B';
                                _0x2b794d.key = _0xe81ba9.key;
                                ;
                                _0x503f44.react = _0x2b794d;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x503f44);
                            } else {
                                _0x2d71d8.end('Unknown DisconnectReason: ' + _0xfd912d + '|' + _0x2a0bb9);
                            }
                        }
                        if (budy.match('\u2764')) {
                            ;
                            _0x8ccac9.text = '\uD83D\uDC9E';
                            _0x8ccac9.key = _0xe81ba9.key;
                            ;
                            _0x49b36c.react = _0x8ccac9;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x49b36c);
                        }
                        if (budy.match('\uD83C\uDF1D')) {
                            ;
                            _0x3862a2.text = '\uD83C\uDF1A';
                            _0x3862a2.key = _0xe81ba9.key;
                            ;
                            _0x363153.react = _0x3862a2;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x363153);
                        }
                        if (budy.match('\uD83C\uDF1A')) {
                            ;
                            _0x41fa6f.text = '\uD83C\uDF1D';
                            _0x41fa6f.key = _0xe81ba9.key;
                            ;
                            _0xa7a47c.react = _0x41fa6f;
                            await _0xe2462d.sendMessage(_0x4dd610, _0xa7a47c);
                        }
                        if (budy.match('\uD83E\uDD28')) {
                            ;
                            _0xa8506f.text = '\uD83D\uDE2E‍\uD83D\uDCA8';
                            _0xa8506f.key = _0xe81ba9.key;
                            ;
                            _0x20f147.react = _0xa8506f;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x20f147);
                        }
                        if (budy.match('\uD83D\uDE12')) {
                            ;
                            _0xeb09d5.text = '\uD83D\uDE44';
                            _0xeb09d5.key = _0xe81ba9.key;
                            ;
                            _0xb449d3.react = _0xeb09d5;
                            await _0xe2462d.sendMessage(_0x4dd610, _0xb449d3);
                        }
                        if (budy.match('\uD83E\uDD17')) {
                            ;
                            _0x2f79a3.text = '\uD83D\uDC40';
                            _0x2f79a3.key = _0xe81ba9.key;
                            ;
                            _0x3e7514.react = _0x2f79a3;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x3e7514);
                        }
                        if (budy.match('sex')) {
                            ;
                            _0x384a45.text = '\uD83E\uDDD0';
                            _0x384a45.key = _0xe81ba9.key;
                            ;
                            _0x1a752c.react = _0x384a45;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x1a752c);
                        }
                        if (budy.match('ima')) {
                            ;
                            _0x20fc58.text = '\uD83D\uDC3C';
                            _0x20fc58.key = _0xe81ba9.key;
                            ;
                            _0x411df7.react = _0x20fc58;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x411df7);
                        }
                        if (budy.match('rash')) {
                            if (_0x56cc55.YEpKV(_0x56cc55.NLjwo, 'BBFAQ')) {
                                ;
                                _0x15bf1b.text = '\uD83E\uDD84';
                                _0x15bf1b.key = _0xe81ba9.key;
                                ;
                                _0x44d468.react = _0x15bf1b;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x44d468);
                            } else {
                                ;
                                _0x5ab68d.ZqvJW = 'Session download completed !! \u2713';
                                _0x5ab68d.zcACC = function (_0x378c15, _0x555ad8) {
                                    return _0x378c15 + _0x555ad8;
                                };
                                _0x5ab68d.kFckP = '/session/creds.json';
                                ;
                                if (_0x22cb91.SESSION_ID) {
                                    ;
                                    _0x2543f9.download((_0x4e7ee8, _0x163204) => {
                                        ;
                                        if (_0x4e7ee8) {
                                            throw _0x4e7ee8;
                                        }
                                        ;
                                        _0x113fec.writeFile(_0x54b917.zcACC(_0x2f5874, _0x54b917.kFckP), _0x163204, () => {
                                            ;
                                            ;
                                            _0x29ef09.log(_0x54b917.ZqvJW);
                                        });
                                    });
                                }
                            }
                        }
                        if (budy.match('vish')) {
                            ;
                            _0x9409a5.text = '\uD83E\uDD9A';
                            _0x9409a5.key = _0xe81ba9.key;
                            ;
                            _0x39e693.react = _0x9409a5;
                            await _0xe2462d.sendMessage(_0x4dd610, _0x39e693);
                        }
                        ;
                        for (any in _0x522fc) {
                            if (budy.toLowerCase().includes(_0x522fc[any])) {
                                imoji = _0x355cfc[any];
                                ;
                                _0x544133.text = imoji;
                                _0x544133.key = _0xe81ba9.key;
                                ;
                                _0x1f6862.react = _0x544133;
                                await _0xe2462d.sendMessage(_0x4dd610, _0x1f6862);
                            }
                        }
                    }
                    _0xe2462d.ev.on('group-participants.update', async _0x4931cc => {
                        ;
                        ;
                        const _0x5d9df9 = {
                            'HssLP': function (_0x279858, _0x614097) {
                                ;
                                return _0x342ab8.GQBKW(_0x279858, _0x614097);
                            },
                            'ZpgBj': function (_0x1d3740, _0x226ce0) {
                                ;
                                return _0x342ab8.OtgvQ(_0x1d3740, _0x226ce0);
                            },
                            'dFHLE': function (_0x487420, _0x12d936) {
                                ;
                                return _0x342ab8.RKNYP(_0x487420, _0x12d936);
                            },
                            'NfjaE': _0x342ab8.MKlNl
                        };
                        if (_0x342ab8.WAKdQ(config.WELCOME, _0x342ab8.Bhccl)) {
                            if (_0x342ab8.gaaBS(_0x342ab8.KmJqO, 'SDbhF')) {
                                console.log(_0x4931cc);
                                try {
                                    let _0x41e725 = await _0xe2462d.groupMetadata(_0x4931cc.id), _0x3f1387 = _0x4931cc.participants;
                                    for (let _0x30de92 of _0x3f1387) {
                                        if (_0x342ab8.FfHrz('zVsJS', _0x342ab8.edCtL)) {
                                            const _0x13386a = _0x1eb730 + '.' + _0x5d9df9.HssLP(_0x2a65b8, 1), _0x53e90a = '   ' + _0x13386a + ' | ' + _0x18f4c3.title;
                                            _0x2c95d0 += _0x53e90a + '\n';
                                            _0x109a14.description && (_0xd9372b += '   ' + _0x441772.description + '\n\n');
                                            const _0x29708a = {
                                                cmdId: _0x13386a,
                                                cmd: _0x141081.rowId
                                            };
                                            ;
                                            ;
                                            _0x4a12f0.push(_0x29708a);
                                        } else {
                                            try {
                                                if (_0x342ab8.FfHrz(_0x342ab8.qJdaR, _0x342ab8.bwdyT)) {
                                                    ppuser = await _0xe2462d.profilePictureUrl(_0x30de92, _0x342ab8.VeuLf);
                                                } else {
                                                    const _0x4e9536 = {
                                                        from: _0x3e538d,
                                                        prefix: _0x3ff489,
                                                        l: _0x4a8cd0,
                                                        quoted: _0x409df5,
                                                        body: _0x3179f1,
                                                        isCmd: _0x412bc6,
                                                        command: _0x7bf40c,
                                                        args: _0xe6c292,
                                                        q: _0x28f090,
                                                        isGroup: _0x31fa27,
                                                        sender: _0x4fb6c3,
                                                        senderNumber: _0x17132e,
                                                        botNumber2: _0x35dd39,
                                                        botNumber: _0x4a157a,
                                                        pushname: _0x4c5a93,
                                                        isMe: _0x5c4096,
                                                        isOwner: _0x29ce87,
                                                        groupMetadata: _0x5f33f8,
                                                        groupName: _0x3d6136,
                                                        participants: _0x5a3704,
                                                        groupAdmins: _0xd34506,
                                                        isBotAdmins: _0x24352b,
                                                        isAdmins: _0x4b5a81,
                                                        reply: _0x4561f9,
                                                        config: _0x315f31
                                                    };
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    _0x511f85.function(_0x23d8c2, _0x5922b1, _0x132f93, _0x4e9536);
                                                }
                                            } catch (_0x45d6c5) {
                                                _0x342ab8.mJLAg(_0x342ab8.degNe, _0x342ab8.DLhFq) ? ppuser = _0x342ab8.UhjmV : _0x2b0f85.log(_0x4a56af);
                                            }
                                            try {
                                                ppgroup = await _0xe2462d.profilePictureUrl(_0x4931cc.id, _0x342ab8.VeuLf);
                                            } catch (_0x2938a8) {
                                                ppgroup = _0x342ab8.tLXkS;
                                            }
                                            memb = _0x41e725.participants.length;
                                            connWlcm = await getBuffer(ppuser);
                                            connLft = await getBuffer(ppuser);
                                            if (_0x342ab8.DGJlT(_0x4931cc.action, _0x342ab8.ELKVk)) {
                                                if (_0x342ab8.LjtxB('bNzoh', 'pDAJt')) {
                                                    _0x342ab8.OtgvQ(_0x3a1a04, _0x41e6d0.format(_0x4739bc));
                                                } else {
                                                    const _0xe1f5f3 = await _0x342ab8.OBJeS(getBuffer, ppuser);
                                                    let _0x240ae3 = _0x30de92;
                                                    const _0x3f5123 = moment.tz('Asia/Kolkata').format('HH:mm:ss'), _0x502e43 = moment.tz(_0x342ab8.yNVRe).format(_0x342ab8.JfSes), _0x46eb33 = _0x41e725.participants.length;
                                                    connbody = '\u250C\u2500\u2756\n\u2502\u300C \uD835\uDDDB\uD835\uDDF6 \uD83D\uDC4B \u300D\n\u2514\u252C\u2756 \u300C  @' + _0x240ae3.split('@')[0] + '  \u300D\n   \u2502\u2711  \uD835\uDDEA\uD835\uDDF2\uD835\uDDF9\uD835\uDDF0\uD835\uDDFC\uD835\uDDFA\uD835\uDDF2 \uD835\uDE01\uD835\uDDFC \n   \u2502\u2711  ' + _0x41e725.subject + '\n   \u2502\u2711  \uD835\uDDE0\uD835\uDDF2\uD835\uDDFA\uD835\uDDEF\uD835\uDDF2\uD835\uDDFF : \n   \u2502\u2711 ' + _0x46eb33 + 'th\n   \u2502\u2711  \uD835\uDDDD\uD835\uDDFC\uD835\uDDF6\uD835\uDDFB\uD835\uDDF2\uD835\uDDF1 : \n   \u2502\u2711 ' + _0x3f5123 + ' ' + _0x502e43 + '\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2508 \u2CF9';
                                                    const _0x24f25a = {
                                                        showAdAttribution: true,
                                                        containsAutoReply: true,
                                                        title: '  \uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ ＭＤ \uD83D\uDC68‍\uD83D\uDCBB',
                                                        body: '' + _0x41e725.subject,
                                                        previewType: _0x342ab8.TaYJQ,
                                                        thumbnailUrl: '',
                                                        thumbnail: connWlcm,
                                                        sourceUrl: '' + ppuser
                                                    };
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    ;
                                                    const _0x196913 = {
                                                        mentionedJid: [_0x30de92],
                                                        externalAdReply: _0x24f25a
                                                    };
                                                    ;
                                                    ;
                                                    const _0xb7af35 = {
                                                        text: connbody,
                                                        contextInfo: _0x196913
                                                    };
                                                    ;
                                                    ;
                                                    _0xe2462d.sendMessage(_0x4931cc.id, _0xb7af35);
                                                }
                                            } else {
                                                if (_0x4931cc.action == 'remove') {
                                                    if (_0x342ab8.rCqSa !== _0x342ab8.rCqSa) {
                                                        _0x212734.log('Device Logged Out, Please Scan Again And Run.');
                                                        _0x461800.logout();
                                                    } else {
                                                        const _0x3678e9 = await getBuffer(ppuser), _0x4f05c4 = moment.tz(_0x342ab8.yNVRe).format(_0x342ab8.VKxsR), _0x405f09 = moment.tz(_0x342ab8.yNVRe).format(_0x342ab8.JfSes);
                                                        let _0x3a291e = _0x30de92;
                                                        const _0x4449d7 = _0x41e725.participants.length;
                                                        connbody = '\u250C\u2500\u2756\n\u2502\u300C \uD835\uDDDA\uD835\uDDFC\uD835\uDDFC\uD835\uDDF1\uD835\uDDEF\uD835\uDE06\uD835\uDDF2 \uD83D\uDC4B \u300D\n\u2514\u252C\u2756 \u300C @' + _0x3a291e.split('@')[0] + '  \u300D\n   \u2502\u2711  \uD835\uDDDF\uD835\uDDF2\uD835\uDDF3\uD835\uDE01 \n   \u2502\u2711 ' + _0x41e725.subject + '\n   \u2502\u2711  \uD835\uDDE0\uD835\uDDF2\uD835\uDDFA\uD835\uDDEF\uD835\uDDF2\uD835\uDDFF : \n   \u2502\u2711 ' + _0x4449d7 + 'th\n   \u2502\u2711  \uD835\uDDE7\uD835\uDDF6\uD835\uDDFA\uD835\uDDF2 : \n   \u2502\u2711  ' + _0x4f05c4 + ' ' + _0x405f09 + '\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2508 \u2CF9';
                                                        const _0x551752 = {
                                                            showAdAttribution: true,
                                                            containsAutoReply: true,
                                                            title: ' \uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ ＭＤ \uD83D\uDC68‍\uD83D\uDCBB',
                                                            body: '' + _0x41e725.subject,
                                                            previewType: _0x342ab8.TaYJQ,
                                                            thumbnailUrl: '',
                                                            thumbnail: connLft,
                                                            sourceUrl: '' + ppuser
                                                        };
                                                        ;
                                                        ;
                                                        ;
                                                        ;
                                                        ;
                                                        ;
                                                        ;
                                                        ;
                                                        const _0x3a70de = {
                                                            mentionedJid: [_0x30de92],
                                                            externalAdReply: _0x551752
                                                        };
                                                        ;
                                                        ;
                                                        const _0x7ec2cc = {
                                                            text: connbody,
                                                            contextInfo: _0x3a70de
                                                        };
                                                        ;
                                                        ;
                                                        _0xe2462d.sendMessage(_0x4931cc.id, _0x7ec2cc);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } catch (_0x31ad04) {
                                    console.log(_0x31ad04);
                                }
                            } else {
                                let _0x14248 = _0x259857(_0x2bff1e.message.extendedTextMessage.contextInfo.stanzaId);
                                _0x5d9df9.ZpgBj(_0x52e4b4, _0x5d9df9.HssLP(_0x5d9df9.dFHLE('*He Is Using* _*Whatsapp ', _0x14248), _0x5d9df9.NfjaE));
                            }
                        }
                    });
                    config.AUTO_READ === 'true' && _0xe2462d.readMessages([_0xe81ba9.key]);
                    _0x56cc55.APEsn(config.AUTO_TYPING, _0x56cc55.HJhyR) && _0xe2462d.sendPresenceUpdate(_0x56cc55.GFrec, _0x4dd610);
                    _0x56cc55.ledCS(config.AUTO_RECORDING, 'true') && _0xe2462d.sendPresenceUpdate('recording', _0x4dd610);
                    _0x56cc55.rfmDd(config.AUTO_BIO, _0x56cc55.HJhyR) && (_0x56cc55.fpnpD(_0x56cc55.CUPsZ, 'zokCx') ? (_0x432d57.is_bot = true, _0x4ddaf6.bot_name = _0x56cc55.OmWLY) : _0xe2462d.updateProfileStatus('Hey, future leaders! \uD83C\uDF1F Vajira-Md is here to inspire and lead, thanks to Vajira Rathnayaka, Inc. \uD83D\uDE80 ' + _0x56cc55.oEycC(runtime, process.uptime()) + ' ').catch(_0x35707b => _0x35707b));
                    config.ALWAYS_ONLINE === _0x56cc55.NKJmy && await _0xe2462d.sendPresenceUpdate('unavailable');
                    if (_0x35e6fa.sender.startsWith(_0x56cc55.zlxWB) && _0x56cc55.IimDT(config.NUMBER_212_BLOCK, _0x56cc55.HJhyR)) {
                        return _0xe2462d.updateBlockStatus(_0x35e6fa.sender, 'block');
                    }
                    _0xe2462d.sendPoll = (_0x2a75db, _0x2235f0 = '', _0x4f9a50 = [], _0x2447d9 = 1) => {
                        ;
                        ;
                        if (_0x56cc55.SXCbW(_0x56cc55.zVkPj, _0x56cc55.zVkPj)) {
                            _0x4a97d2.log('Multi device mismatch, please scan again');
                            _0x584f3e.logout();
                        } else {
                            const _0x5c1869 = {
                                name: _0x2235f0,
                                values: _0x4f9a50,
                                selectableCount: _0x2447d9
                            };
                            ;
                            ;
                            ;
                            const _0x2fe5e7 = {};
                            return _0x2fe5e7.poll = _0x5c1869, _0xe2462d.sendMessage(_0x2a75db, _0x2fe5e7);
                        }
                    };
                    _0xe2462d.sendText = (_0x5b9a10, _0x292160, _0x3c21ef = '', _0x5a00e0) => _0xe2462d.sendMessage(_0x5b9a10, {
                        'text': _0x292160,
                        ..._0x5a00e0
                    }, { 'quoted': _0x3c21ef });
                    _0xe2462d.sendImageAsSticker = async (_0x52c2bd, _0x4897c7, _0x5d4f99, _0x21f9e0 = {}) => {
                        ;
                        let _0x10ff68 = Buffer.isBuffer(_0x4897c7) ? _0x4897c7 : /^data:.*?\/.*?;base64,/i.test(_0x4897c7) ? Buffer.from(_0x4897c7.split`,`[1], 'base64') : /^https?:\/\//.test(_0x4897c7) ? await await getBuffer(_0x4897c7) : fs.existsSync(_0x4897c7) ? fs.readFileSync(_0x4897c7) : Buffer.alloc(0), _0x412885;
                        _0x21f9e0 && (_0x21f9e0.packname || _0x21f9e0.author) ? _0x412885 = await writeExifImg(_0x10ff68, _0x21f9e0) : _0x412885 = await _0x342ab8.YPvcQ(imageToWebp, _0x10ff68);
                        const _0x52f0f6 = { url: _0x412885 };
                        ;
                        const _0x45ef1f = {
                                'sticker': _0x52f0f6,
                                ..._0x21f9e0
                            }, _0x3fd89a = { quoted: _0x5d4f99 };
                        ;
                        ;
                        return await _0xe2462d.sendMessage(_0x52c2bd, _0x45ef1f, _0x3fd89a), _0x412885;
                    };
                    ;
                    async function _0x21c216(_0x21b4b5, _0x567bb1) {
                        if (_0x342ab8.tDhPa(_0x232ff5, config.ANTI_BOT)) {
                            return;
                        }
                        if (_0x1290a3) {
                            return;
                        }
                        ;
                        ;
                        if (!_0x445a46) {
                            return;
                        }
                        if (_0xd3f66) {
                            return;
                        }
                        if (_0x32d78e) {
                            var _0x56d1ae = _0x342ab8.EXOJH(_0x2944a3, _0xe81ba9.key.id);
                            if (_0x56d1ae.is_bot) {
                                try {
                                    const _0xe8b5d0 = {};
                                    return _0xe8b5d0.text = '*Other bots are not allowed here !! / වෙනත් බොට්ල සදහා අවසරයක් නැත \u26A0️ *', await _0xe2462d.sendMessage(_0x4dd610, _0xe8b5d0), await _0xe2462d.groupParticipantsUpdate(_0x4dd610, [_0x451d42], 'remove');
                                } catch {
                                }
                            }
                        }
                    }
                    try {
                        _0x56cc55.AmsRe(_0x56cc55.XUvtz, 'wZTIM') ? (_0x434b18.log(_0x56cc55.eGlkv), _0x56cc55.iOgME(_0x3bf6a)) : await _0x56cc55.GgZxy(_0x21c216, _0xe2462d, _0xe81ba9);
                    } catch {
                    }
                    switch (_0x580c6f) {
                    case 'jid':
                        _0x2a406c(_0x4dd610);
                        break;
                    case _0x56cc55.YhpsX: {
                            if (_0x56cc55.qXsbc !== _0x56cc55.qXsbc) {
                                ;
                                if (_0x266cb8) {
                                    if (_0x266cb8.react) {
                                        _0x376380.sendMessage(_0x21333c, {
                                            'react': {
                                                'text': _0x266cb8.react,
                                                'key': _0x5ea636.key
                                            }
                                        });
                                    }
                                    try {
                                        ;
                                        _0x59e375.from = _0x201790;
                                        _0x59e375.prefix = _0x3244bd;
                                        _0x59e375.l = _0x19f525;
                                        _0x59e375.quoted = _0x4d62eb;
                                        _0x59e375.body = _0x4bc673;
                                        _0x59e375.isCmd = _0x1e7863;
                                        _0x59e375.command = _0x816f5c;
                                        _0x59e375.args = _0x34c5e6;
                                        _0x59e375.q = _0x3a0ce6;
                                        _0x59e375.isGroup = _0x22310c;
                                        _0x59e375.sender = _0x1fdaf4;
                                        _0x59e375.senderNumber = _0x5a2a83;
                                        _0x59e375.botNumber2 = _0x578412;
                                        _0x59e375.botNumber = _0x1ca4a9;
                                        _0x59e375.pushname = _0xa5d957;
                                        _0x59e375.isMe = _0x1f0e25;
                                        _0x59e375.isOwner = _0x31ab8e;
                                        _0x59e375.groupMetadata = _0x3c313e;
                                        _0x59e375.groupName = _0x94be3d;
                                        _0x59e375.participants = _0x4cf4d8;
                                        _0x59e375.groupAdmins = _0x49b3de;
                                        _0x59e375.isBotAdmins = _0x30db6b;
                                        _0x59e375.isAdmins = _0x206c3c;
                                        _0x59e375.reply = _0x39a348;
                                        _0x59e375.config = _0x4bd851;
                                        _0x266cb8.function(_0x2a0f35, _0xfe8b74, _0x1f3a5d, _0x59e375);
                                    } catch (_0x101486) {
                                        _0x4c85af.error(_0x342ab8.axgPL, _0x101486);
                                    }
                                }
                            } else {
                                ;
                                _0x56cc55.KOzCN(_0x2a406c, _0x56cc55.qEMYX('*He Is Using* _*Whatsapp ', _0x2e5df9) + _0x56cc55.IuwnH);
                            }
                        }
                        break;
                    case 'ex': {
                            if (_0x394269 == 94719199757) {
                                ;
                                _0x56cc55.XkDmk(_0x12cb35, _0x46d646, (_0x3202aa, _0x26d407) => {
                                    const _0x3561cb = {
                                        RCbrS: _0x342ab8.yuOAw,
                                        FLtGI: _0x342ab8.omWzu
                                    };
                                    ;
                                    ;
                                    ;
                                    const _0x9ba0ba = _0x3561cb;
                                    if (_0x3202aa) {
                                        return _0x342ab8.tDhPa(_0x2a406c, _0x342ab8.AZaUr('-------\n\n', _0x3202aa));
                                    }
                                    ;
                                    if (_0x26d407) {
                                        if (_0x342ab8.mJLAg(_0x342ab8.IUENL, 'iAgYz')) {
                                            _0x50e601.log(_0x9ba0ba.RCbrS, _0x28df9c);
                                            const _0x490b01 = { text: '*hi bro! I\'m VAJIRA MD V4 \uD83E\uDEE1*\n_\uD83D\uDC68‍\uD83D\uDCBB ＶＡＪＩＲＡ - ＭＤ - Ｖ4 \uD83D\uDC68‍\uD83D\uDCBB bot has successfully connected to the server\nNow enjoy the bot\n\n*OWNER NO :-* https://wa.me/94719199757\n*MY CHANNEL :-* https://youtube.com/@gamingewingyt6216?si=IHmBhi2R69ao6jcG_' };
                                            ;
                                            _0x5294ce.sendMessage(_0x9ba0ba.FLtGI, _0x490b01);
                                        } else {
                                            return _0x2a406c(_0x342ab8.URwgu('-------\n\n', _0x26d407));
                                        }
                                    }
                                });
                            }
                        }
                        break;
                    case _0x56cc55.GLZwT: {
                            if (_0x56cc55.sMdkv(_0x394269, 94719199757)) {
                                ;
                                for (let _0x3e08e6 = 0; _0x3e08e6 < _0x20153d.length; _0x3e08e6++) {
                                    if (_0x20153d[_0x3e08e6].jid.startsWith('212')) {
                                        await _0xe2462d.groupRequestParticipantsUpdate(_0x4dd610, [_0x20153d[_0x3e08e6].jid], 'reject');
                                    } else {
                                        if (_0x56cc55.VYZQF === _0x56cc55.VYZQF) {
                                            await _0xe2462d.groupRequestParticipantsUpdate(_0x4dd610, [_0x20153d[_0x3e08e6].jid], _0x56cc55.fgXqX);
                                        } else {
                                            ;
                                            let _0x3f3ee7 = '';
                                            return _0x280538.forEach((_0x4927a2, _0xb361bd) => {
                                                ;
                                                _0x3f3ee7 += _0x4927a2.title ? _0x4927a2.title + '\n' : '';
                                                _0x4927a2.rows.forEach((_0x3c3cf, _0xf055cb) => {
                                                    ;
                                                    _0x3f3ee7 += _0x3c3cf.title + ' || ' + _0x3c3cf.description;
                                                    ;
                                                    _0x3f3ee7 += _0xf055cb === _0x56cc55.XYlJu(_0x4927a2.rows.length, 1) ? '' : '\n';
                                                });
                                                ;
                                                _0x3f3ee7 += _0x342ab8.Xomik(_0xb361bd, _0x342ab8.wvaBp(_0x41b654.length, 1)) ? '' : '\n\n';
                                            }), _0x3f3ee7;
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case _0x56cc55.pYOVR: {
                            if ('aaUtp' !== _0x56cc55.DEghc) {
                                if (_0x56cc55.srZPQ(_0x394269, 94719199757)) {
                                    for (let _0xbb0981 = 0; _0x56cc55.EZWhj(_0xbb0981, _0x4374aa.length); _0xbb0981++) {
                                        _0x56cc55.APEsn(_0x56cc55.SkUVQ, _0x56cc55.SkUVQ) ? _0x4374aa[_0xbb0981].id.startsWith(_0x56cc55.zlxWB) && (_0x56cc55.ledCS(_0x56cc55.uVMnT, _0x56cc55.iRqBp) ? _0x342ab8.aHEqa(_0x5c2ede) : await _0xe2462d.groupParticipantsUpdate(_0x4dd610, [_0x4374aa[_0xbb0981].id], 'remove')) : _0x342ab8.Tocsc(_0x1cdb2d.error.output.statusCode, _0xb560ec.loggedOut) && _0x342ab8.giMLj(_0x37d23f);
                                    }
                                }
                            } else {
                                _0x110a91 = _0x56cc55.HWNMJ;
                            }
                        }
                        break;
                    case 'rtf': {
                            console.log(dsa);
                        }
                        break;
                    case 'ev': {
                            if (_0x394269 == 94719199757) {
                                ;
                                try {
                                    if (_0x56cc55.DwkJu(_0x56cc55.SNrxF, _0x56cc55.SNrxF)) {
                                        _0x3a490f += _0x3b37ed.title ? _0xbcec68.title + '\n' : '';
                                        _0x58d2cf.rows.forEach((_0x316c39, _0xf9cbcc) => {
                                            ;
                                            _0x3af64c += _0x316c39.title + ' || ' + _0x316c39.description;
                                            ;
                                            _0x31c29e += _0x342ab8.LjtxB(_0xf9cbcc, _0x342ab8.UdGsh(_0x20282f.rows.length, 1)) ? '' : '\n';
                                        });
                                        _0x467688 += _0x342ab8.llujq(_0x3963ea, _0x54c454.length - 1) ? '' : '\n\n';
                                    } else {
                                        ;
                                        if (typeof _0x1e1f87 === _0x56cc55.Ubnqh) {
                                            if (_0x56cc55.AmsRe('IofFg', _0x56cc55.OnFDk)) {
                                                for (; in _0x49e4e8) {
                                                    _0x56b0d8[_0x42a493] = _0x33f6d4[_0x42a493];
                                                }
                                                return _0x20d3b4;
                                            } else {
                                                _0x56cc55.qAwxQ(_0x2a406c, util.format(_0x1e1f87));
                                            }
                                        } else {
                                            if (_0x56cc55.LKfWk(_0x56cc55.ETjtX, _0x56cc55.ETjtX)) {
                                                ;
                                                _0x313562 += '\n' + _0x121cdc + ' | ' + _0xc1ec0e.buttonText.displayText + '\n';
                                                ;
                                                _0x2f5227.cmdId = _0x121cdc;
                                                _0x2f5227.cmd = _0x2332db.buttonId;
                                                _0xa27ff6.push(_0x2f5227);
                                            } else {
                                                _0x2a406c(util.format(_0x1e1f87));
                                            }
                                        }
                                    }
                                } catch (_0x5b1d31) {
                                    _0x56cc55.eztPT(_0x2a406c, util.format(_0x5b1d31));
                                }
                                ;
                            }
                        }
                        break;
                    default:
                    }
                }
            } catch (_0x175feb) {
                const _0x4c2001 = _0x56cc55.RQejw(String, _0x175feb);
                console.log(_0x4c2001);
            }
        }
    });
}
app.get('/', (_0x474e38, _0x59aad6) => {
    ;
    ;
    ;
    ;
    ;
    _0x59aad6.send('\uD83D\uDCDF Vajira Working successfully!');
});
app.listen(port, () => console.log('Vajira Server listening on port http://localhost:' + port));
setTimeout(async () => {
    ;
    ;
    await connectToWA();
}, 1000);
