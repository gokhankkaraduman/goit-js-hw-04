const profile ={
    username: "Jacob",
    playTime: 300,
    changeUsername(newName){
        return this.username = newName;
    },
    updatePlayTime(saatler){
        return this.playTime+= saatler
    },
    getInfo(){
        return `${this.username} has ${this.playTime} active hours!`
    }
}


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
profile.updatePlayTime(1220);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
