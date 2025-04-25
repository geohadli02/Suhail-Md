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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_18_04_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDYzLFxuICAgICAgICA2NixcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDExLFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQK0htMGYvcXlsY2h0VjhHUG4xMVlCMzB1elR2WUZJVC9ESUZvWENORHZNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4aVV1Ti0zRVE3LXIycV9lS0FyUmpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1NmQ2MDlkLTVmY2ItNDFhNC1hOTc1LTJlZmRiYmUzZDEzZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNyxcbiAgICAgIDc4LFxuICAgICAgMTYwLFxuICAgICAgMTk0LFxuICAgICAgMTgsXG4gICAgICAxMjQsXG4gICAgICA3LFxuICAgICAgMTI2LFxuICAgICAgMCxcbiAgICAgIDEwMSxcbiAgICAgIDExMCxcbiAgICAgIDc0LFxuICAgICAgNDAsXG4gICAgICAxMDAsXG4gICAgICAyMDAsXG4gICAgICAyMTUsXG4gICAgICA5MCxcbiAgICAgIDIxMCxcbiAgICAgIDE5OSxcbiAgICAgIDEzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICA5NCxcbiAgICAgIDE1NSxcbiAgICAgIDE4OCxcbiAgICAgIDg1LFxuICAgICAgOTEsXG4gICAgICAxMTQsXG4gICAgICAxMTYsXG4gICAgICAyMzUsXG4gICAgICAzMSxcbiAgICAgIDIyOCxcbiAgICAgIDE5LFxuICAgICAgMTc0LFxuICAgICAgMTU3LFxuICAgICAgNzMsXG4gICAgICA0NCxcbiAgICAgIDEyNyxcbiAgICAgIDM3LFxuICAgICAgNzMsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKSFhESFBRWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo1M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcjYrZFVDRU5ERnE4QUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVW1Wa3ZHYVdieHgvblVGTUV6V1VGK05pZVRlYXlkdWVQby9xcmFPZEJZaWxwVllvcW5OdUFURWJzWkxlRi90Z3BEWkFMdWVjeTBGR1lPMFBJcitDQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM0o4clFyRFEzT1FpaXRTWUxzdjdzNW90MVVOcU9DaUtRY1NqMlhsQUYreTdZL3Y2ak9VNVRsL1NFYzJ1Y1VoOXhSc3ZvZ1kvWDdwN2RBSXUvczZjakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTU0Mzg5MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnNULmpzb24iOiAie1wia2V5RGF0YVwiOlwicEZpSGVnQ0xKSlJNYjNkYUovRi9MTVdXTmt5UzVVY3oyRTgwREFwMHJnUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDUxNzI4MjE0ODhcIn0iCn0="  // PUT your SESSION_ID 


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
