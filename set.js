const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'FLASH-MD-WA-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlCMWZxUU03d090SThRa2M2TmpFVSsrcGlOMUQ2anlxZ05Jc1RHUEMyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHNIbTJSMTdHNXVOODdrRFFsZVdPM0JaSFRDaW9MN0RLZFptbVZEblFsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRGY3ejZDZnkra3N3WnRBMDRGZzdzbWdYTlAxTFZpMG13WmRGMTNUOUZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJORk9GbmlvdjR6RktQOUNjNTNRSitpSE9LOS93YnpjblNyWWlveW9nMjE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBbGpVREJ1aUxSVkFVMDFaQmtOWURXUTN4WHdXMzZydnE3R1VLYm1IMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFMjJ4azNLYk1nTGxVRHJwZE5UOXgybmc0Q0hmVXVvVjFiZkIxbWZBUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxYN3dhNEMwaERFY0U2QTFjc2FpMFVLdG9NeEhLcTZPVUpmeHhBTldYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTMvZjZsSDhzQ09HeTJ5WDJpbkJTTnlML08wcGg3V2VLeWtWeThNZFdSMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd6Y0xQQmoxRmUwRDZrTEJpTCtnSTg3bzE3ZGhlZ3YyY2VQajZ2Mk05VWlGRGx1T0NNOXhPSG9GOXdCelQ3SERpL0VPNEpxdi9GRE9nQWVxVnNOM2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiI0c1dJSG03YmJ1cGVUVHhsUWdWWkZmSW8zYkVpZmVVQUxoUHM4d3dLemFzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJndE40RlQ4Z1JOLWxMUWk4MDl6Q2ZnIiwicGhvbmVJZCI6ImE3NzE1NzNkLTljZWQtNGY0Yy1hOGM0LWVmMGYyZjZjMmVkMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxc1FWZEhicm1JT0lwNkVqS21kVC9sdldRZVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmJpYUtIUm56b0t6clM1WGlDazVWRWluZHBNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVHTDkzWFJLIiwibWUiOnsiaWQiOiIyNTQxMDU5MTUwNjE6MThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRkxBU0gtTUQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tITmw4MEJFS2lId0xFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJjd1JYY2MyZ0d3WlZQTnkzM3VCbUxOaGJIajhVcmtkTytDUWRsbzc1alE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik8xZEZzcENjRlZkYmpQbXQrUk9RUVpkWU4rWUhnTUcyQlRCWklpRC9WTEN2V01sSnpoUXhoYVpLQ25DODBGdlpBZzdCYjdLWFhLRllKUElsdWJKbEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYYkJtekxHSEVEeHhKUWxZNmZ6ODlmSUNkOW1oWnU5NGtBT0lxdEJwbGFDY1NXZG90QWp6TThoNnc3OHBWNjVwZTdMUkRJa2xRc3NaK3lGQncvZHdpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDEwNTkxNTA2MToxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRWE1FVjNITm9Cc0dWVHpjdDk3Z1ppellXeDQvRks1SFR2Z2tIWmFPK1kwIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0NDIyNzEwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9qMCJ9',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "France King",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254105915061",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'FLASH-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://static.animecorner.me/2023/08/op2.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
