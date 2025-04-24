const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923247116683";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_25_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MixcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgMjM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDUzLFxuICAgICAgICA5OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBTRnhRU29GTXJsbUYrQkJGdFVaVEkzaW1HWmFBcEE3QVZGZ0Y4QlRlVmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjU2SlhDSHZ0U2M2Tm15dkFJR3dpZWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGRkZjA4NDctN2U1Zi00YmNjLWExOTMtMmI2ZmQ3NjYxNjkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExLFxuICAgICAgMTA5LFxuICAgICAgMTMwLFxuICAgICAgMTQ1LFxuICAgICAgMTE4LFxuICAgICAgMjQ4LFxuICAgICAgMTU3LFxuICAgICAgMTYsXG4gICAgICAyLFxuICAgICAgMjMsXG4gICAgICAxODksXG4gICAgICA1NyxcbiAgICAgIDEwMCxcbiAgICAgIDIyMCxcbiAgICAgIDE5LFxuICAgICAgNzQsXG4gICAgICAxMTEsXG4gICAgICAxNDUsXG4gICAgICAyNDQsXG4gICAgICA5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgNzAsXG4gICAgICAxNDUsXG4gICAgICA4OSxcbiAgICAgIDk2LFxuICAgICAgMjA4LFxuICAgICAgNDksXG4gICAgICA2NixcbiAgICAgIDEyMCxcbiAgICAgIDE1OSxcbiAgICAgIDE5MyxcbiAgICAgIDUsXG4gICAgICAxMzIsXG4gICAgICAxMDksXG4gICAgICAyMjUsXG4gICAgICAxNjksXG4gICAgICAxMzksXG4gICAgICAyMDksXG4gICAgICAyMzMsXG4gICAgICAxNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlI1Qk5CUFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2o2K2RVQ0VQcUdxTUFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFZL085Z0dZNlRCUlA2MUxJMTZRSGI5TVFwNjIyUGVyNk9SaVJQYWJyYTVHSG9Idkg4aE5tRjk3YmZPemhpUUxxbHBzVlBIWmEweE9pdVJick9kZUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpLSWVjV210T0VlU0tZK0xBTTFJQTVjUTNpc3lYVGpRK0dJd1RuSWpSdzNPemhnR0g3MTlpaXFwc2ZlVUQyL3NRZkVaaGEwMWNSem9YcDJaQ2tPVEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU0ODY3MTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGc1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZzVC5qc29uIjogIntcImtleURhdGFcIjpcInBGaUhlZ0NMSkpSTWIzZGFKL0YvTE1XV05reVM1VWN6MkU4MERBcDByZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1MTcyODIxNDg4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
