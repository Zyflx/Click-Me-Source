class DebugDisplay {
    constructor() {
        this.fpsCounter = document.getElementById("fps");
        this.memoryCounter = document.getElementById("memory");
        this.memoryText = document.getElementById("memory-display")
        this.units = ["Bytes", "kB", "MB", "GB", "TB", "PB"];
        this.isFirefox = navigator.userAgent.indexOf("Firefox") != -1;
        this.tryDisableMem();
    }

    tryDisableMem() {
        if(this.isFirefox) {
            this.memoryText.style.display = "none";
            this.memoryCounter.style.display = "none";
        }
    }

    update(fps, bytes) {
        this.fpsCounter.innerHTML = Math.floor(fps);
        if(!this.isFirefox) {
            this.memoryCounter.innerHTML = this.formatBytes(bytes);
        }
    }

    // stolen from flixel LOL
    // moved the units array out of here to not create a new array every single time
    formatBytes(bytes) {
        let index = 0;
        while(bytes >= 1024 && index < this.units.length - 1) {
            bytes /= 1024;
            index++;
        }
        return this.decimalRound(bytes, 2) + this.units[index];
    }
    
    decimalRound(v, d) {
        let mult = 1;
        for(let i = 0; i < d; i++) {
            mult *= 10;
        }
        return Math.floor(v * mult) / mult;
    }
}

export { DebugDisplay };