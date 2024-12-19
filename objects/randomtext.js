class RandomText {
    constructor() {
        this.textObject = document.getElementById("random-text");
        this.text = "";
        this.lastQuote = "";
        this.quotes = [
            "Thanks for playing!",
            "Did you know this game was made by a dumb idiot?",
            "Dear player, you should stop playing this game. It's kinda garbage.",
            "Whoever made this game should kill themselves i think - some random guy probably",
            "Making a web game is hell.",
            "*peter griffin css gif*",
            "Hello everybody my name is markiplier and welcome back to five-",
            "Man this game kinda blows.",
            "YOU STUPID BI- ayo who said that",
            "rudy time",
            "why did i make a fps and memory counter for this",
            "as you can tell with some of these, i gave up with capitalization",
            "THEY JUMPIN ME, THEY JUMPIN ME-",
            "SEGAAAAAAAAAAAAAAAAAAAAAAAAA-",
            "reject twitter, embrace bluesky",
            "shoutout to crows nest",
            "To whoever created CSS, respectfully kys.",
            "throw bricks at pdf files",
            "boobs. thats all there is to it.",
            "FNF? I barely know her!",
            "im running out of quote ideas, send help",
            "ay bro watch yo jet, watch yo jet bro WATCH YO JET-",
            "cheeseburger",
            "ELEMENT OF SURPRISE- *EXPLOSION*",
            "if you think the fnf exe community is weird already, there were leaks of exeternal on xvideos",
            "im convinced princess peach gets kidnapped on purpose, freaky ass bitch",
            "I SEE AND HEAR NO EVIL, BLACK WRITINGS ON THE WALL-",
            "i just love latinas sonic",
            "i can't see the end of the horizon- HATSUNE MIKU!?!?!?!?!?!",
            "WHO POSTED MY NUDES ON TWITTER DOT COM?!?!?!?!",
            "I'VE COME TO MAKE AN ANNOUNCEMENT, SHADOW THE HEDGEHOG IS A BITCH ASS-",
            "Did you know that the amount of time this text takes to change is the same as the amount of time it takes to mine obsidian?",
            "carpal tunnel the game trademark logo",
            "why did i think making a web game was a good idea",
            "i underestimated the power of gallery-dl and accidently downloaded a newgrounds artsits ENTIRE art gallery which was 2.1k images",
            "\"what if i funkin.lua you\" - Morwen",
            "i need boobs in my mouth",
            "autoclickers are for losers",
            "whoever tells you this game is good, throw bricks at them",
            "shadow losing his shit after seeing a latina in his peripheral vision for one nanosecond",
            "\"I wish someone would flirt with me...\" - Ragatha",
            "This game is powered by my non-existent will to live and my very little sanity.",
            "neocities the goat",
            "source code soon i think"
        ];
        this.changeTimer = 0.0;
    }

    update(delta) {
        this.changeTimer += delta;
        if(this.changeTimer >= 6.0) { // change quote after 6 seconds
            this.changeTimer = 0.0;
            this.setQuote();
        }
    }

    setQuote() {
        this.setText(this.getQuote());
    }

    setText(newText) {
        if(this.text == newText) return;
        this.text = newText;
        this.textObject.innerHTML = newText;
    }

    getQuote() {
        let quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        if(this.lastQuote == quote) { // reroll
            quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        }
        this.lastQuote = quote;
        return quote;
    }
}

export { RandomText };