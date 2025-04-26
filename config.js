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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_40_04_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NixcbiAgICAgICAgMTAxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMVmE4ektIQ1VqYVdDWk5iVmhYUGNCYmR4QzhmUTMvZC81NW1FdFhGYjlVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzLXlJLXdhU1FGYTVZT2NqaXFkSVZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNjNDExNDEyLTJiOWEtNDQ4Ny1iZmEwLTFhZmVlZWQ2ODE5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDE1MixcbiAgICAgIDk4LFxuICAgICAgMTMzLFxuICAgICAgMTc4LFxuICAgICAgOTUsXG4gICAgICAxMixcbiAgICAgIDE0NCxcbiAgICAgIDE1MCxcbiAgICAgIDEyOCxcbiAgICAgIDEwNyxcbiAgICAgIDEyNixcbiAgICAgIDE1LFxuICAgICAgODYsXG4gICAgICAxNTEsXG4gICAgICA4NixcbiAgICAgIDE4NCxcbiAgICAgIDIzNixcbiAgICAgIDIxNCxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxODEsXG4gICAgICAyNDMsXG4gICAgICA5MCxcbiAgICAgIDEzMSxcbiAgICAgIDIxMCxcbiAgICAgIDUzLFxuICAgICAgMixcbiAgICAgIDE1NCxcbiAgICAgIDE0MSxcbiAgICAgIDE3NixcbiAgICAgIDE0LFxuICAgICAgMTI2LFxuICAgICAgMjUsXG4gICAgICAxOCxcbiAgICAgIDk5LFxuICAgICAgNTQsXG4gICAgICAzNSxcbiAgICAgIDEyLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0VEUVpUS1JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0NzExNjY4Mzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti22YDZgNmA2YDZgNmA2K/bjCDZhdmA2YDZhNmA2YDaqeKBsMK5wrJcXG5cXG7igbBcXG7Cs1xcbsKyXFxu4oG0XFxu4oG3XFxuwrlcXG7CuVxcbuKBtlxcbuKBtlxcbuKBuFxcbsKzXFxuXFxuXFxuXFxu8J2QhfCdkIDwnZCM8J2QjvCdkJTwnZCSIFxcbvCdkJnwnZCi8J2Qg/CdkKIg8J2QjPCdkJrwnZCl8J2QovCdkKRcXG5cXG5cXG5cXG5cXG5cXG5cXG48M1wiLFxuICAgIFwibGlkXCI6IFwiMzc1NDI4NjI4MzE2NzQ6NTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy82K2RVQ0VOYjhzOEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0emxtUUJjMFNPUUozTm1VdHFUTHNOblM1U3JMSEVsalVhSGJkVGg2Y0RVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNyMTNiZVJOZlA3VFo1OE5jWXNUQ1ppaTB3QkRWNXpZdFdvK3VSTEg3bGx4dnpnUFB6VnhNSnVBKzY3MVJVOWQ1Y3hqSGMycVR6anp2cXE2anJBdkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjAwYytPbkkvellOUm5jbWZkNStjVHNwY3MrUVlpRStRQTBZR2JVTkNZU3dsNlFZZFhCM2h6NnZhNXFieHZJVFBmQVpwK3ZzenpkR0NqR0E1TFlWN2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI0NzExNjY4Mzo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDU2ODIwMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGc1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZzVC5qc29uIjogIntcImtleURhdGFcIjpcInBGaUhlZ0NMSkpSTWIzZGFKL0YvTE1XV05reVM1VWN6MkU4MERBcDByZ1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE3MTI3MDA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQ1MTcyODIxNDg4XCJ9Igp9"  // PUT your SESSION_ID 


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
