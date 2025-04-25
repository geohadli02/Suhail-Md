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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_18_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc3LFxuICAgICAgICA3NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5LFxuICAgICAgICA1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDY1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1SNVlNSmV0dFJvWHBxZEdKZTZtVXFEdnkrQWI1WDh6V0E3dm9XZmphZ2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdaYjF2UHJjUjVDdzNXeDFmZVpUSlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjlhMjFjOWMtNDI5OC00NTc5LTk1ZjctZjBmY2ExYTU2OWMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgOCxcbiAgICAgIDI0OSxcbiAgICAgIDE3NixcbiAgICAgIDg2LFxuICAgICAgMTI4LFxuICAgICAgMTQ3LFxuICAgICAgNTAsXG4gICAgICAxNixcbiAgICAgIDM5LFxuICAgICAgMjM1LFxuICAgICAgMTMxLFxuICAgICAgOTksXG4gICAgICAyMjksXG4gICAgICAxMjEsXG4gICAgICAxMDcsXG4gICAgICAyMTIsXG4gICAgICA5MSxcbiAgICAgIDY2LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTk1LFxuICAgICAgMjQwLFxuICAgICAgMTksXG4gICAgICAyMjgsXG4gICAgICAyMDQsXG4gICAgICA5NyxcbiAgICAgIDY0LFxuICAgICAgMTMsXG4gICAgICAxODEsXG4gICAgICAxMTYsXG4gICAgICAyMDEsXG4gICAgICAzMCxcbiAgICAgIDExMSxcbiAgICAgIDQ4LFxuICAgICAgMzMsXG4gICAgICAxNDUsXG4gICAgICAxNyxcbiAgICAgIDE2MyxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhOOEg5UkNDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092NitkVUNFSWJmcmNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5cGVRaVVyS0FnSVYwUzF1Y0pieXp5MTJFb25FZFJneWVzV29QVWs0SUhha093ZXZJSUI3azBINFl6YWh3a1hpd0RuRDBWeHo1aG1qak1VRSs2ZTJCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMZlFDZm5XWjB4ekNEQ285YVdra0EraURHUFp6M0N3N1haRVJlcFg3cGZBMVEyem1VaXd6SndrMzhkd2NGSGxwZlZxU0UvbEUvcytXUnZxRHlYQ0VqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1NTc5OTE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnNUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGc1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwRmlIZWdDTEpKUk1iM2RhSi9GL0xNV1dOa3lTNVVjejJFODBEQXAwcmdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzAwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTE3MjgyMTQ4OFwifSIKfQ=="  // PUT your SESSION_ID 


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
