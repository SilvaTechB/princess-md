const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
global.email = 'sylivanusmomanyi@gmail.com'
global.github = 'https://github.com/SilvaTechB/princess-md'
global.location = 'Nairobi Kenya'
global.packname = '𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢';
global.author = '𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉';
global.mess = {
    banned: '`princess md has *Banned* you fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands by princess md!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`princess md is not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
}

global.owner = [process.env.OWNER_NUMBER] || ['254743706010'] // Owner number , (silva )

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'youre session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
LANG:  process.env.LANG || 'EN' ,    
ANTI_BAD: process.env.ANTI_BAD || `false`  ,
AUTO_REACT:  process.env.AUTO_REACT  || `false`  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,    
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,            
WORK_TYPE: process.env.WORK_TYPE || 'public'  ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
OWNER_NUMBER: process.env.OWNER_NUMBER || '254743706010'  ,    
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || '𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉' ,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true` ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false'  ,
AUTO_STICKER: process.env.AUTO_STICKER || false`  ,
WELCOME:  process.env.WELCOME  || false ,    
NUMBER_212_BLOCK: process.env.NUMBER_212_BLOCK || false  ,
FOOTER: process.env.FOOTER ||  '©PRINCESS - ＭＤ - Ｖ1',
LOGO: process.env.LOGO || `https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg` ,
IMAGE: process.env.IMAGE || `https://telegra.ph/file/03f1eccdcb525a5e1a6ad.jpg`     
};
