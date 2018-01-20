function setup() {
    createCanvas(320,640);
    background(127);
     
}

function draw() {
 var xloc = randomGaussian();
 var yloc = randomGaussian();

    var xsd = 100;
    var ysd = 40;
    

    var xmean = width /2;
    var ymean = height /2;
    xloc = (xloc * xsd) + xmean;
    yloc = (yloc * ysd) + ymean;
    
    var rColor = 233;
    
    fill(rColor, 50);
    noStroke();
    ellipse(xloc, yloc, 16, 16);
}