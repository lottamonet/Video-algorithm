function Video(title, uploader, seconds){
this.title = title;
this.uploader = uploader;
this.seconds = seconds;
}

Video.prototype.watch() = function (seconds){
    console.log(this.uploader +  " watched all " + seconds + " seconds of " + this.seconds + "of " + this.title + ".")
}

var videoOne = new Video("Gone in 60 Seconds", "Lotta", 60);
var videoTwo = new Video("The Little Mermaid Short", "Naomi", 8250);
var videoThree = new Video("Daniel Tiger's Neighborhood", "Nyla", 5400);
videoOne.watch();
videoTwo.watch(seconds);
videoThree.watch(seconds);

var data = [['Gone in 60 Seconds','Lotta', 60], ['The Little Mermaid','Naomi', 8250], ['Fast & Furious','Nyla', 100070], ['Set it Off','Tberry', 5687283], ['Tick, Tick, Boom!','G', 7894567]];
var instances = [];
for (let i = 0; i <= data.length; i++){
instances.push(new Video(data[i][0], data[i][1], data[i][2]));
}

console.log(instances);