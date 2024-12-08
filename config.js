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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_35_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY1LFxuICAgICAgICAzNSxcbiAgICAgICAgOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIks2NHRnbzFCK2JCZ1cxazQzalNkQ1lJNEgyNkFKSzRwNEFuMkVmMTZiaTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhCTkdhcVBGU0ZTRjAybkdWZnVMV1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGNkYzM4NjItOTM3MC00NWE1LTg0MTQtNDc3OWNkOGNlZDU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDI0LFxuICAgICAgNjIsXG4gICAgICAxMzAsXG4gICAgICAyMDksXG4gICAgICAzMyxcbiAgICAgIDEwLFxuICAgICAgMTEsXG4gICAgICA5NCxcbiAgICAgIDY0LFxuICAgICAgMTM0LFxuICAgICAgNDMsXG4gICAgICAxNTAsXG4gICAgICAxODUsXG4gICAgICAxNTgsXG4gICAgICAyMTYsXG4gICAgICAzNixcbiAgICAgIDIzLFxuICAgICAgMjIwLFxuICAgICAgMTQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTM3LFxuICAgICAgMTA5LFxuICAgICAgMTQzLFxuICAgICAgMTE1LFxuICAgICAgMyxcbiAgICAgIDE1NixcbiAgICAgIDU2LFxuICAgICAgMzUsXG4gICAgICA1MixcbiAgICAgIDEyNCxcbiAgICAgIDE2MSxcbiAgICAgIDExMSxcbiAgICAgIDIwMSxcbiAgICAgIDE0NCxcbiAgICAgIDQzLFxuICAgICAgNTYsXG4gICAgICAyMTUsXG4gICAgICAxMjEsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUDFLV1dETlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2OTY0NDQ2ODozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIldJU0RPTSBFTlRFUlBSSVNFU1wiLFxuICAgIFwibGlkXCI6IFwiMTgzNDg1NzE3MzE5NzA2OjMwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BYOXByVUZFTVRhMkxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiK29XN2F4Uy8vQ0lBL29qYjg5bDE0OGx3akpIQ3FsaVZUV3J1MGFUV1dVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1V25Pd0tUTkJya0dVZXZJLy9uRE9pdnVmaVpjekkrYU8yTEd4Y0NiNm83VTg5NnQxbkNOZUhoZWxMandON0tqWmdjSUJmZE1PaU5nbnpyQnNhS3pBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKZGl0WWlGdDlyL0tEamloTyt4YWxwNU1pMFBRWVl1T2V0OWlzMUFTeEZHOC9PSTVNcWVUcXQ5L2p4V2g4d3JyUFRsdzBrTm04TDZlMGhBRzdWczZCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY5NjQ0NDY4OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzcwMDkzOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
