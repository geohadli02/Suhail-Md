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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_09_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICA3OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYxLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWFB0dHVvZzBncS91SEZWVVlJTEhnbzZUbDRsbGowWnpKOEpjKzVlNmEyRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieVc2ZXVJMzdSay1TWk55S1JnNGtzQVwiLFxuICBcInBob25lSWRcIjogXCI0NWUzZDExYy05ODIyLTQyM2QtODYzMi02ZTQ3NTRjNjUxZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICA4LFxuICAgICAgMTE3LFxuICAgICAgMjQ4LFxuICAgICAgMjQ5LFxuICAgICAgNCxcbiAgICAgIDg2LFxuICAgICAgNjAsXG4gICAgICAxMTUsXG4gICAgICAyNSxcbiAgICAgIDI0MyxcbiAgICAgIDQyLFxuICAgICAgMTIxLFxuICAgICAgMTAsXG4gICAgICAyNTMsXG4gICAgICAyMjYsXG4gICAgICAxMzMsXG4gICAgICAxMjksXG4gICAgICAxNDksXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxNyxcbiAgICAgIDM1LFxuICAgICAgMTE0LFxuICAgICAgMTE1LFxuICAgICAgODcsXG4gICAgICAyMDQsXG4gICAgICAxNTMsXG4gICAgICAxMjUsXG4gICAgICAyMjAsXG4gICAgICAxOTYsXG4gICAgICAyMzksXG4gICAgICA4NixcbiAgICAgIDgzLFxuICAgICAgMTQwLFxuICAgICAgMTc1LFxuICAgICAgMTI1LFxuICAgICAgMTM5LFxuICAgICAgNDksXG4gICAgICAzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RkgzRk1SU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo1MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbjYrZFVDRVBPTHFjQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVpmWTk4WFEwdXp4S3ovRDFSSmdLSmZibUZPSzR1cEVsMTltVVkzaVhLTUhHRmoxL3RxQVp5UEFZNXM3SU9wNWExb3NYTlpKMVU0Z3NFcExFQnVFQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjlUeDNYZW1rSmt1dXNDTTFwV1RXWUhZTHE5Vng4dmkrSitkdTFrNXBUN21lNFJzV0dzSjdkeFA2L0RaMW9jNzVIajJEVXI5QjN3a0Z3SkQwd3Y1Q1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTUwMzczNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZzVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnNULmpzb24iOiAie1wia2V5RGF0YVwiOlwicEZpSGVnQ0xKSlJNYjNkYUovRi9MTVdXTmt5UzVVY3oyRTgwREFwMHJnUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDUxNzI4MjE0ODhcIn0iCn0="  // PUT your SESSION_ID 


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
