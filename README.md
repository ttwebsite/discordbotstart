# Discord Bot Example
To simply put it, with this you can start making a Discord Bot for TT. This already has a good command handler in it, so here is a little information on how to set it up!

# Tutorial
Step 1) Open the terminal and install all the following packages!

        > npm i dotenv
        > npm i discord.js
        > npm install transporttycoon
        > npm i fs
 
Step 2) Importing API Keys and getting a prefix.
        This is quite simple. If you open config.json in the root of the project, you see 3 lines. Here is where you can import API keys and change the prefix.
        
        > Discord_Token: This is the Discord Token API. (REMEMBER THIS IS THE TOKEN UNDER THE BOT TAB!!!)
        > TT_Token: This is the Transport Tycoon API Key. (DO /api key copy IN-GAME TO GET THE KEY!)
        > Prefix: This is the prefered prefix. This is what you have to do before you type in the command.
          (Lets say the command is called "example" and the prefix is "q/", then the command is "q/example".
          The reason I have 
     
Step 3) Test the bot!
        The example command has been set-up to check how many TT Charges (uses) you have left before you have to buy more charges!
        
        > Invite the bot to a new server.
        > Perform the command.
