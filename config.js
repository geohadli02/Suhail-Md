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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_04_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NixcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICA1NixcbiAgICAgICAgNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICA4OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDcsXG4gICAgICAgIDE5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5OSxcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDM1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlk4UUpTbUJCUnFrK012WElOM2dJRndraXVycVVXcHc3YW9ub01pSmhJbXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlmLW9lOTBLVFNxRVI5MjlZM01kOFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjhjYjRmMWYtYjM1NS00OTU5LTg0ODgtOGM0MWYzMDJlZmIwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkzLFxuICAgICAgNjIsXG4gICAgICA4MCxcbiAgICAgIDgsXG4gICAgICAxMDYsXG4gICAgICAyMDIsXG4gICAgICAyMTQsXG4gICAgICAxMixcbiAgICAgIDE0NixcbiAgICAgIDc3LFxuICAgICAgMTU0LFxuICAgICAgNDgsXG4gICAgICAxOTMsXG4gICAgICAyNDEsXG4gICAgICAxNTcsXG4gICAgICAxMzMsXG4gICAgICAyMTcsXG4gICAgICA0NSxcbiAgICAgIDI1LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQwLFxuICAgICAgMjUyLFxuICAgICAgMjQxLFxuICAgICAgMjE1LFxuICAgICAgMTYsXG4gICAgICAxNDcsXG4gICAgICAyOSxcbiAgICAgIDExNyxcbiAgICAgIDE1LFxuICAgICAgMjUsXG4gICAgICAyMyxcbiAgICAgIDE3NCxcbiAgICAgIDk4LFxuICAgICAgMTI0LFxuICAgICAgMTg5LFxuICAgICAgNjcsXG4gICAgICAyMzIsXG4gICAgICAxMjcsXG4gICAgICAyMzEsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5NVpCODJZM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjQ3MTE2NjgzOjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2LbZgNmA2YDZgNmA2YDYr9uMINmF2YDZgNmE2YDZgNqp4oGwwrnCslxcblxcbuKBsFxcbsKzXFxuwrJcXG7igbRcXG7igbdcXG7CuVxcbsK5XFxu4oG2XFxu4oG2XFxu4oG4XFxuwrNcXG5cXG5cXG5cXG7wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIgXFxu8J2QmfCdkKLwnZCD8J2QoiDwnZCM8J2QmvCdkKXwnZCi8J2QpFxcblxcblxcblxcblxcblxcblxcbjwzXCIsXG4gICAgXCJsaWRcIjogXCIzNzU0Mjg2MjgzMTY3NDo2NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVDYrZFVDRU9yVHVzQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjR6bG1RQmMwU09RSjNObVV0cVRMc05uUzVTckxIRWxqVWFIYmRUaDZjRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMHZOZzBNbWd1TGFlb3RuNUU1eExyT0JaQm1YQk5OQ0t2bXBUbDdRL3ovcDhhNnZyOUN1SzR6L2FYLzQwbGhFampBZ2FPbEdEWm9ReHo5UEJKYlVXRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiU2Z0Tmw1TmRXQkxLWG5iR1c1MVd5UjlPOGFCWlEyU3pVT1h4TUxzWU5NdGExRDlNTE94cXdHV1VKc3pJNjliYWFXTkMyK3FPY21kaEpDdUt2MEN2RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQ3MTE2NjgzOjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0NTc5MTQ3MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZzN1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRnM3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNTdSdFZoVEc5ZkJzckF4dTRUUjA0OG5xS3lFRmFlay9GL1l4T1BLalVIcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MTcxMjcwMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
