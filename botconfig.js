module.exports = {
  Admins: ["890973230783954955", "889751139791298620"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "#", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODkwNzk0NTA4NzI2NDM5OTY3.YU0_CQ.75rzztW_eXmMHRkc_6KKpS4mm2s", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "890794508726439967", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "H-6SvwkDMIjY2lE1sjifwbOoxyLQ3kRX", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://discord-musicbot.assamouo.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "anything as a password", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "f0f025988b294cee9882e0ffb5f77c51", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "9e64452683fd4661aeb0c8437fe5ae6e", //Spotify Client Secret
  },
};
