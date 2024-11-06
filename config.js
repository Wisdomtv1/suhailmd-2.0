const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169644468";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_46_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAzMixcbiAgICAgICAgMTczLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgNSxcbiAgICAgICAgODMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDYzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInUzTURUUlM3VkNzVVFPdVdnb1QrYWRXODNBcXdSSEcyTjFRNnNBSVVpWE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVWRVNycVJRUklleE9ZXzdqRmFOTUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjdlYTk5MjAtNjRmNi00MWYxLTk5MTMtYmRhMTc1MjU3N2JkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDExMSxcbiAgICAgIDExNSxcbiAgICAgIDcsXG4gICAgICAxNzIsXG4gICAgICAxOSxcbiAgICAgIDk5LFxuICAgICAgOTUsXG4gICAgICAyNyxcbiAgICAgIDE0NCxcbiAgICAgIDE5NixcbiAgICAgIDE3MSxcbiAgICAgIDI0MixcbiAgICAgIDI0NSxcbiAgICAgIDI0OCxcbiAgICAgIDE1MixcbiAgICAgIDIyOSxcbiAgICAgIDE1MyxcbiAgICAgIDExMCxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDE3NyxcbiAgICAgIDEyLFxuICAgICAgMTEwLFxuICAgICAgMTA4LFxuICAgICAgMjUzLFxuICAgICAgMTQwLFxuICAgICAgOCxcbiAgICAgIDE1NCxcbiAgICAgIDY2LFxuICAgICAgMTI1LFxuICAgICAgODIsXG4gICAgICA4MyxcbiAgICAgIDg3LFxuICAgICAgMTE3LFxuICAgICAgMTM0LFxuICAgICAgMTc4LFxuICAgICAgOTYsXG4gICAgICAxNTQsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjVZMlBUUDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjk2NDQ0Njg6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXSVNET00gRU5URVJQUklTRVNcIixcbiAgICBcImxpZFwiOiBcIjE4MzQ4NTcxNzMxOTcwNjoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQSDlwclVGRVBpT3I3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitvVzdheFMvL0NJQS9vamI4OWwxNDhsd2pKSENxbGlWVFdydTBhVFdXVWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOUxjdWYzN2Zoekhoem1xZmJsK0VjV1VvOWg1YkpuYmgwc29lVGhSdHJ1aitUY280dy9FZ0NJSnNaTUUxNCtpeHlFdXB5RWcvdWdhK00wZ1hKZUNPREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRkU2NFFIUHpLZEUvMUxDLzRwMGVqSnpZN1dDUGZkUUYvQ0JTMHhieWs4dmlkZHVqeVYzWXhhTFFEMmdnSnRPWUFjbUN6K2tMclpadloxNk1XZ1ZNaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2OTY0NDQ2ODoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5MjIzNjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
