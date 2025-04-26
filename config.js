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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_19_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICA5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNixcbiAgICAgICAgODEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgODksXG4gICAgICAgIDUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU3LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA3MixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpsT0lUOUlydHkvSzdTQ0VydGlzTVRQMXUvcFRETGJ5VEZPRXpPTDE4ME09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNHXzdrbTNzVEkyRHJHZjZ3NkRjcXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQwM2E2ZTMtMmEzNC00YTBhLTliNDItYjdiYWI1ZjYzYTllXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NSxcbiAgICAgIDE3NyxcbiAgICAgIDcwLFxuICAgICAgNjMsXG4gICAgICAxODIsXG4gICAgICAxMzgsXG4gICAgICAxMjQsXG4gICAgICAxNTQsXG4gICAgICAyNTEsXG4gICAgICAxNjQsXG4gICAgICAzOCxcbiAgICAgIDIsXG4gICAgICAyMDAsXG4gICAgICAxMzcsXG4gICAgICA4NixcbiAgICAgIDM1LFxuICAgICAgNTgsXG4gICAgICA0NixcbiAgICAgIDMyLFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMjM5LFxuICAgICAgNjYsXG4gICAgICAyMDUsXG4gICAgICAxNTAsXG4gICAgICAyMTAsXG4gICAgICA4OSxcbiAgICAgIDE5OSxcbiAgICAgIDYxLFxuICAgICAgMTM2LFxuICAgICAgODYsXG4gICAgICAxNjYsXG4gICAgICAyMzUsXG4gICAgICAxNCxcbiAgICAgIDE4LFxuICAgICAgODcsXG4gICAgICAxNzcsXG4gICAgICAxNDgsXG4gICAgICAyNDYsXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIV0s5UlpZWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo2MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRDYrZFVDRUxxYnRjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSUp5dzF2cFdVaGpEaFR0Y0FBQTliOWF3akhEcFpTZk95M2J4RTY5Q0hhOVZkYVNBUHBrWDQvcnpPdGtOK21SZHM4dFVqWUI4TGtGZVdGUTl6bGl5RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicm5yd0VBMnNWdGdsTU5Tbjl2Z1hMZmJmejhNcUdTZjJNTDFaQldkZFpCQ2cxR09YTmFFM0I0bkVMWU4xaVQ2RWlyeUx0djI5QmZRRXpCbGdwODg1Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTcwMjMzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnNULmpzb24iOiAie1wia2V5RGF0YVwiOlwicEZpSGVnQ0xKSlJNYjNkYUovRi9MTVdXTmt5UzVVY3oyRTgwREFwMHJnUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDUxNzI4MjE0ODhcIn0iCn0="  // PUT your SESSION_ID 


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
