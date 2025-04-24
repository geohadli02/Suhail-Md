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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_04_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDcyLFxuICAgICAgICA1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlekFtVmpLUGJURlpUNWNQRWNmRmZKU3hIU3ZtY1dJNFlwRDlsZjBGYTl3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvV3JHR1djUFFsTzRNcmNJNXY3b1l3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU2YzVmMTY5LWMxODUtNGUyZi1iMWIxLWJlNzJiOGNlYzg3OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAxNzMsXG4gICAgICAxOTgsXG4gICAgICAxODksXG4gICAgICAxOTgsXG4gICAgICA1LFxuICAgICAgMjUwLFxuICAgICAgMTUwLFxuICAgICAgMjMxLFxuICAgICAgOTgsXG4gICAgICAyNSxcbiAgICAgIDcyLFxuICAgICAgMTAsXG4gICAgICA5NixcbiAgICAgIDEwOSxcbiAgICAgIDI0OSxcbiAgICAgIDE2NSxcbiAgICAgIDE2NSxcbiAgICAgIDE3NixcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxNjQsXG4gICAgICA4MSxcbiAgICAgIDg2LFxuICAgICAgMTA3LFxuICAgICAgMTYsXG4gICAgICA5NyxcbiAgICAgIDgzLFxuICAgICAgMTE3LFxuICAgICAgMTI1LFxuICAgICAgMjA3LFxuICAgICAgMTczLFxuICAgICAgMjM3LFxuICAgICAgMjMxLFxuICAgICAgMjExLFxuICAgICAgMTM1LFxuICAgICAgMTA5LFxuICAgICAgNTksXG4gICAgICAyMDgsXG4gICAgICAxMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjczMjg0RE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2Y2K2RVQ0VKT2Nwc0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZuVTRaUHVxN25WZ2E3Qm1rNkQ0OE5wNmt5anlSRU1MZFhnakV1RnZoNjlRZVBlRXltejdJOUpTd1hWRlJLUVI1VjlCdlFMcjlMb0lBelVjcytRekRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRhWmRnVXR1dzRBV0Z5cHMwY0RrVktDUFRpRE1kSGhudkpnVmFGaG1TcUZxa1ovTHNOc0JFWlFMc2ZOQmtNYmpHYXBmNzYrb1M5VFNnNGpQMUNjSGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU0NTY2NjJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
