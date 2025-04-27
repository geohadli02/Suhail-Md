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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_02_04_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICA3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk3LFxuICAgICAgICA1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NixcbiAgICAgICAgMjQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc2LFxuICAgICAgICA4NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDksXG4gICAgICAgIDY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQyLFxuICAgICAgICA3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhZlRSYlY2ZWlYRDNWQVVTYmt3YkNLWEtySk1jNG5kZEVFUTNxTkhsV0pvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItSDg4ZWxxdVN5Q2NqUnNiVlRld1ZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhNDczMGJmLTM2MGUtNGJjNy1iMDQ5LTU3ZWRjMjYzZTU2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxMDMsXG4gICAgICAxNjAsXG4gICAgICAxMDgsXG4gICAgICAxMzAsXG4gICAgICA1MixcbiAgICAgIDEwOCxcbiAgICAgIDgwLFxuICAgICAgMTE0LFxuICAgICAgODEsXG4gICAgICA3NyxcbiAgICAgIDExMixcbiAgICAgIDIzMSxcbiAgICAgIDQ4LFxuICAgICAgODMsXG4gICAgICAxMTQsXG4gICAgICA1MCxcbiAgICAgIDIyNixcbiAgICAgIDE2MSxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAyNSxcbiAgICAgIDE3NSxcbiAgICAgIDE5LFxuICAgICAgMTIxLFxuICAgICAgMzEsXG4gICAgICAyNDIsXG4gICAgICAxNTksXG4gICAgICAyMCxcbiAgICAgIDE0NyxcbiAgICAgIDE2NixcbiAgICAgIDIyMyxcbiAgICAgIDQ5LFxuICAgICAgNTMsXG4gICAgICAxMyxcbiAgICAgIDEyMSxcbiAgICAgIDEyMixcbiAgICAgIDk4LFxuICAgICAgMTczLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5XNDZWU0tTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNDcxMTY2ODM6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYttmA2YDZgNmA2YDZgNiv24wg2YXZgNmA2YTZgNmA2qnigbDCucKyXFxuXFxu4oGwXFxuwrNcXG7CslxcbuKBtFxcbuKBt1xcbsK5XFxuwrlcXG7igbZcXG7igbZcXG7igbhcXG7Cs1xcblxcblxcblxcbvCdkIXwnZCA8J2QjPCdkI7wnZCU8J2QkiBcXG7wnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCa8J2QpfCdkKLwnZCkXFxuXFxuXFxuXFxuXFxuXFxuXFxuPDNcIixcbiAgICBcImxpZFwiOiBcIjM3NTQyODYyODMxNjc0OjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BMNitkVUNFT2JWdU1BR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNHpsbVFCYzBTT1FKM05tVXRxVExzTm5TNVNyTEhFbGpVYUhiZFRoNmNEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJESFZhQ1hJTk40TkI2OXdWRmMwYW1kKzVBVUN2SVQ2RkhhK3BSSW1TVDZ2R2JlUlpoNSs0ak5PWGZEUTdsTVFTNTZ4b1Z3ZGcxaDBVVyt4bVVtelZCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1ZTZuL1ZCekV0YzR6cFJPaXJWYTZUUmMwNjg5QXY1SnZ3cXdTTElOeC91bVZHYms3YWpkWmlOcWJrVzNXRkNsQ2lsOFJDQjZ6NVRaQmk2elNMZzBBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyNDcxMTY2ODM6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1NzU4OTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnNUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGc1QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwRmlIZWdDTEpKUk1iM2RhSi9GL0xNV1dOa3lTNVVjejJFODBEQXAwcmdRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNzEyNzAwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NTE3MjgyMTQ4OFwifSIKfQ=="  // PUT your SESSION_ID 


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
