//AKASHI
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BRa0dmWFZ4N0lMZVNBVEY3WFR4VTViRHpjclZuVHBXaTlMa2lSYVhuQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUg2UmVIb09XNDN0TTU0dG5oSlptL0Y5L2JyQzFDSGUxWEJaTm5ZZEVYRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNT1JIeHBwd2FTZ3RBYzU1ejlWTTRVV2lweW5nY3A4NnNQbVZXeHhkMFc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSMDZvMm9SQ1l1YVg3WGh6UVlXNW1jV2l2aEZXemxtMTRwaGd6L2I2SmtVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHTVpmZ253c0lqT1hzMlRKWW42MjhQRS9ETW9KYUhIbGowclhXYmtOMnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik81UGFEZEIzNXo0amJ3VDY0RVhzamhScUtlbnppeTdnN0plczFGWTZHaWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNko2bVIwUWNRcVZ5NDFFU25MWFZILzBDTXlid3BkTkhGMldDc3VVbEZVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkpGbVlZSUFLa3psQ2hBdVRVTGJFcDVlTGpBVTUrY2JUUnlvYS9mZXVSUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGem5ONm1SOG9yZTJ2b1ErZk5adDN0OGVpSU1KMUZOeE9POERvTEQ0UHpScnhlaDdYRVZpUWU1YTMwM3JGVHNXazZGekpibGpEakRzclo5N3M3QkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA3LCJhZHZTZWNyZXRLZXkiOiJRUUR3N0hvU2xqMkxFRVp2c2RUb05FL0JlZ0tRcVRnWkxyaW1sa1dnZStzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmLUNqeU1aOFEtaUlVTS1jVDduQ3d3IiwicGhvbmVJZCI6IjZjOWE5N2U3LTRmZWItNGYyMi1iOTYyLTA4NmZlNTc5ZTU2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMGhJdVUwVVZiWTlORmJ6ZFZtTFZ0YmlFRnc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnA0b0pNbVpSS2ZmakhOcTNxam5KYXcySklZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpXUjFZOFlTIiwibWUiOnsiaWQiOiIyMjQ2MTAzMDMwMDM6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZmOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMjgwOUlHRUxQaGw3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqd0hGLzVpYW43cDcrRHJjRVpSMytqTndlOG1CSmdmUHc0STJDd29xNldRPSIsImFjY291bnRTaWduYXR1cmUiOiJ6d1hPRytnMitMcWNaU1hEME80YXQyN1MvdHNGZUZuUnRYU1BEM3hTSWJFNlo1QTZFcGpxY3dpb2MyMHd2MitpbnIxR3NrRThBT0E1Tzc0T045Z0lDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN0JkOVVaNVVCQ096azV1dlpEc09IWlZtSVlwRFpzcFFjNUd4Z1E1VWJEbGhoUzFxM1pQckNSNjR2dVZPY0x4eHBPT1d6NEZIRlRnSklpVmVvN2s4QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjQ2MTAzMDMwMDM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZOEJ4ZitZbXArNmUvZzYzQkdVZC9vemNIdkpnU1lIejhPQ05nc0tLdWxrIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MzQ1NDA4fQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "22898555306";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "242067274660";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||"https://i.imgur.com/JSIcE3I.jpeg"
  process.env.IMAGE ||
  "https://i.imgur.com/JSIcE3I.jpeg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.imgur.com/JSIcE3I.jpeg,https://i.imgur.com/MTpI6aL.jpeg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©𝐷𝑒𝑎𝑡𝒉𝑠𝑔𝑢𝑛`",
  author: process.env.PACK_AUTHER || "𝐷𝑒𝑎𝑡𝒉𝑠𝑔𝑢𝑛",
  packname: process.env.PACK_NAME || "𝑺𝒂𝒔𝒂𝒌𝒊 𝑨𝒌𝒂𝒔𝒉𝒊",
  botname: process.env.BOT_NAME || "𝐷𝑒𝑎𝑡𝒉𝑠𝑔𝑢𝑛",
  ownername: process.env.OWNER_NAME || "Akashi Sasaki",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "teamsasaki1@gmail.com";
global.location = "Africa,france";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Deathsgun0001/Deathgun";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "242067274660";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://sasaki-akashi-session.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
