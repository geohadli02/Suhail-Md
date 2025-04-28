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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_15_04_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY2LFxuICAgICAgICA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDQ0LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMSxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc2LFxuICAgICAgICA5OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAxNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI4YkJ2N08rYUpTV3gvNWhQcUVDM2xrbnZPeUJORHBwNjErL0Y2REE3MzJVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0bDVLb0duTFFRT09WeXZMRWdGR2xRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5ZThkOTNkLTRhMWQtNDA5MC04NmM2LTAzMjhjOWIxYzg2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzksXG4gICAgICAxNSxcbiAgICAgIDIxOSxcbiAgICAgIDEzOCxcbiAgICAgIDMyLFxuICAgICAgMTQ1LFxuICAgICAgMTQ0LFxuICAgICAgMjMxLFxuICAgICAgMTIxLFxuICAgICAgNjAsXG4gICAgICAxMDgsXG4gICAgICAyMTYsXG4gICAgICAyMDUsXG4gICAgICAyMDMsXG4gICAgICA3MCxcbiAgICAgIDkxLFxuICAgICAgMTA0LFxuICAgICAgMTg1LFxuICAgICAgMjUxLFxuICAgICAgMTc3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUwLFxuICAgICAgMTQzLFxuICAgICAgMTU5LFxuICAgICAgMTUwLFxuICAgICAgMzYsXG4gICAgICAxOTMsXG4gICAgICAxOTAsXG4gICAgICAxMjcsXG4gICAgICAzNSxcbiAgICAgIDEzMCxcbiAgICAgIDIzNSxcbiAgICAgIDIxLFxuICAgICAgMjcsXG4gICAgICAxMDcsXG4gICAgICA5NixcbiAgICAgIDE4OCxcbiAgICAgIDgsXG4gICAgICA3NixcbiAgICAgIDMzLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTVKOEJEUUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGI2K2RVQ0VQZit2Y0FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk9oUU9IOGpqOUFxTDIzRG1pQTROU3JvRjl1bGMvUTJsdlhkRktqbmtocEw4SjJtR3I3ckpVVktvTm12cUp0SVVFUFdObWF3SCtLVUttUENKeVFPV0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxnUTJva3U0eUdaSW4vcTlqNm5sNmsyWEhjMGcvVmc5ZENBNjkzeVE5cXF5R2JmUWE1d2RwSXZwOCtyRzR6Z0dIclFpUG9HVXc5amx0bkJvdjVpcWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU4NDYxMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGdERcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZ0RC5qc29uIjogIntcImtleURhdGFcIjpcIjZWMGt6cjk2TzJRUkd1MGE1Q1NmcWVFeEtuanhyVmFvcUJsVUV0clQzQTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1ODQ2MDY3MTI1XCJ9Igp9"  // PUT your SESSION_ID 


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
