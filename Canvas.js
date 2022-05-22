const flights = [];
flights[0] = {airId:"EJA363",  dest:"FLL", type:"E55P", altd:090, speed:27, class:"E E", course:332};
flights[1] = {airId:"FFT2378", dest:"PHL", type:"A321", altd:091, speed:28, class:"F",   course:35};
flights[2] = {airId:"N300GB",  dest:"MIA", type:"BE40", altd:011, speed:16, class:"C",   course:53};
flights[3] = {airId:"AAL2189", dest:"PHL", type:"A319", altd:085, speed:27, class:"C",   course:270};
flights[4] = {airId:"FFT108",  dest:"SJU", type:"A321", altd:012, speed:16, class:"F E", course:145};
flights[5] = {airId:"GPD816",  dest:"OXC", type:"PC12", altd:088, speed:28, class:"B",   course:115};
flights[6] = {airId:"DAL2942", dest:"PHL", type:"B739", altd:090, speed:28, class:"E E", course:126};
flights[7] = {airId:"AAL646",  dest:"PHX", type:"A21N", altd:012, speed:15, class:"C",   course:154};
flights[8] = {airId:"DAL8839", dest:"BOS", type:"B752", altd:094, speed:27, class:"E F", course:22};
flights[9] = {airId:"JIA5358",dest:"MSP", type:"CRJ9", altd:011, speed:16, class:"B",   course:71};
flights[10] = {airId:"SWA893", dest:"DEN", type:"B737", altd:092, speed:29, class:"E", course:240};
flights[11] = {airId:"JIA5548",dest:"MEM", type:"CRJ7", altd:010, speed:15, class:"F", course:280};
flights[12] = {airId:"AAL551", dest:"PHL", type:"A321", altd:088, speed:26, class:"C", course:180};
flights[13] = {airId:"RPA4749",dest:"SOP", type:"E75L", altd:090, speed:28, class:"F E", course:290};
flights[14] = {airId:"AAL856", dest:"PHL", type:"LJ60", altd:089, speed:27, class:"B", course:351};


var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var timer = 0;
var isPause = true;
var count = 0;

$("#go").on('click',function() {
    var select = document.getElementById("getStrip").value;
    document.getElementById("table").style.display = "block";
    if(select == "15") {
        document.getElementById("table").style.display = "none";
    } else if(select == "0") {
        getFLightStrip(flights[0], "203", "6315", "P1142", "FXE", "090");
    }else if(select == "1") {
        getFLightStrip(flights[1], "311", "1511", "P0848", "LHR", "091");
    }else if(select == "2") {
        getFLightStrip(flights[2], "110", "4479", "P1300", "PHL", "090");
    }else if(select == "3") {
        getFLightStrip(flights[3], "158", "4120", "P1034", "UNV", "085");
    }else if(select == "4") {
        getFLightStrip(flights[4], "590", "5158", "P1315", "PHL", "091");
    }else if(select == "5") {
        getFLightStrip(flights[5], "662", "5275", "P1115", "SOP", "088");
    }else if(select == "6") {
        getFLightStrip(flights[6], "795", "1791", "P0929", "DAY", "090");
    }else if(select == "8") {
        getFLightStrip(flights[8], "172", "2476", "P0831", "ILM", "094");
    }else if(select == "7") {
        getFLightStrip(flights[7], "489", "5605", "P1345", "PHL", "091");
    }else if(select == "9") {
        getFLightStrip(flights[9], "789", "2579", "P1400", "PHL", "090");
    }else if(select == "10") {
        getFLightStrip(flights[10], "421", "7038", "P1244", "ATL", "092");
    }else if(select == "11") {
        getFLightStrip(flights[11], "275", "1124", "P1413", "PHL", "089");
    }else if(select == "12") {
        getFLightStrip(flights[12], "881", "6251", "P1212", "MIA", "088");
    }else if(select == "13") {
        getFLightStrip(flights[13], "919", "4616", "P1050", "MIC", "090");
    }else if(select == "14") {
        getFLightStrip(flights[14], "574", "4260", "P1120", "DFW", "089");
    }
});
$("#close").on('click',function() {
    document.getElementById("table").style.display = "none";
});


// pause or continue the animation on #pause click
$("#pause").on('click',function() {
    isPause=true;
});

$("#run").on('click',function(){
    if(isPause == true) {
        isPause = false;
        animate();
    }
});

$("#restart").on('click',function(){
    if(isPause == true) {
        isPause = false;
        animate();
    }
    timer = 0; count = 0;
    resetAllFlight();
    x1=0   ; y1=100;
    x2=0   ; y2=500;
    x3=301 ; y3=303;
    x4=301 ; y4=0;
    x5=301 ; y5=303;
    x6=600 ; y6=500;
    x7=500 ; y7=600;
    x9=75  ; y9=600;
    x8=301 ; y8=303;
    x10=301; y10=303;
    x11=500; y11=0;
    x12=301; y12=303;
    x13=600; y13=303;
    x14=200; y14=0;
    x15=0  ; y15=250;
});

$("#kb").on('click',function() {
    document.getElementById("keyboard").style.display = "flex";
});

$("#closeKb").on('click',function() {
    document.getElementById("keyboard").style.display = "none";
});

$("#ENTER").on('click',function() {
    let cmd = document.getElementById("cmd").value;
    let isFound = false;
    for(let i = 0; i < 15; i++) {
        if(cmd.includes(flights[i].airId)) {
            let index = flights[i].airId.length;
            let value = cmd.slice(index+1, cmd.length);

            if(cmd.charAt(index) == "A") {
                isFound = true;
                flights[i].altd = value;
            } else if(cmd.charAt(index) == "S") {
                isFound = true;
                flights[i].speed = value;
            } else if(cmd.charAt(index) == "H") {
                isFound = true;
                flights[i].course = value;
            }
        }
    }
    if(!isFound) {
        document.getElementById("cmd").value = "Invalid Command!";
    } else {
         document.getElementById("cmd").value = "";
    }
});

var x1=0   ; var y1=100;
var x2=0   ; var y2=500;
var x3=301 ; var y3=303;
var x4=301 ; var y4=0;
var x5=301 ; var y5=303;
var x6=600 ; var y6=500;
var x7=500 ; var y7=600;
var x9=75  ; var y9=600;
var x8=301 ; var y8=303;
var x10=301; var y10=303;
var x11=500; var y11=0;
var x12=301; var y12=303;
var x13=600; var y13=303;
var x14=200; var y14=0;
var x15=0  ; var y15=250;

function animate() {
    if(timer > 1550){
        isPause = true;
        location.reload();
    }
    if(isPause){return;}
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    var multiplier = document.getElementById("multiplier");
    var m = multiplier.value;
    document.getElementById("time").value = getTime(timer);
    displayFlightInfo();
    
    count += .015;
    timer += .0167*m;

    // #1 Flight enroute-1
    if(timer > 65) {
        draw(x1, y1);
        flight(flights[0], x1, y1);
        var vx1 = getVx(flights[0]);
        var vy1 = getVy(flights[0]);
        x1 += vx1*m;
        y1 -= vy1*m;
    }

    // #2 Flight arrival-1
    if(timer > 120 && flights[1].altd > 10){
        draw(x2, y2);
        flight(flights[1], x2, y2);
        var vx2 = getVx(flights[1]);
        var vy2 = getVy(flights[1]);
        x2 += vx2*m;
        y2 -= vy2*m;
        flights[1].speed -= .0032*m/6;
        flights[1].altd -= .0033*m;
    }

    // #3 Flight departure-1
    if(timer > 152){
        draw(x3, y3);
        flight(flights[2], x3, y3);
        var vx3 = getVx(flights[2]);
        var vy3 = getVy(flights[2]);
        x3 += vx3*m;
        y3 -= vy3*m;
        flights[2].speed += .0032*m/6;
        flights[2].altd += .0032*m;
    }

    // #4 Flight arrival-2
    if(timer > 243 && flights[3].altd > 10){
        draw(x4, y4);
        flight(flights[3], x4, y4);
        var vx4 = getVx(flights[3]);
        var vy4 = getVy(flights[3]);
        x4 += vx4*m;
        y4 -= vy4*m;
        flights[3].speed -= .0032*m/6;
        flights[3].altd -= .0035*m;
    }

    // #5 Flight departure-2
    if(timer > 288){
        draw(x5, y5);
        flight(flights[4], x5, y5);
        var vx5 = getVx(flights[4]);
        var vy5 = getVy(flights[4]);
        x5 += vx5*m;
        y5 -= vy5*m;
        flights[4].speed += .0032*m/6;
        flights[4].altd += .0032*m;
    }

    // #6 Flight enroute-2
    if(timer > 310) {
        draw(x6, y6);
        flight(flights[5], x6, y6);
        var vx6 = getVx(flights[5]);
        var vy6 = getVy(flights[5]);
        x6 += vx6*m;
        y6 -= vy6*m;
    }

    // #7 Flight arrival-3
    if(timer > 410 && flights[6].altd>10){
        draw(x7, y7);
        flight(flights[6], x7, y7);
        var vx7 = getVx(flights[6]);
        var vy7 = getVy(flights[6]);
        x7 += vx7*m;
        y7 -= vy7*m;
        flights[6].speed -= .0031*m/6;
        flights[6].altd -= .0031*m;
    }

    // #8 Flight enroute-3
    if(timer > 502) {
        draw(x9, y9);
        flight(flights[8], x9, y9);
        var vx9 = getVx(flights[8]);
        var vy9 = getVy(flights[8]);
        x9 += vx9*m;
        y9 -= vy9*m;
    }

    // #9 Flight departure-3
    if(timer > 645){
        draw(x8, y8);
        flight(flights[7], x8, y8);
        var vx8 = getVx(flights[7]);
        var vy8 = getVy(flights[7]);
        x8 += vx8*m;
        y8 -= vy8*m;
        flights[7].speed += .0032*m/6;
        flights[7].altd += .0032*m;
    }

    // #10 Flight departure-4
    if(timer > 740){
        draw(x10, y10);
        flight(flights[9], x10, y10);
        var vx10 = getVx(flights[9]);
        var vy10 = getVy(flights[9]);
        x10 += vx10*m;
        y10 -= vy10*m;
        flights[9].speed += .0032*m/6;
        flights[9].altd += .0032*m;
    }

    // #11 Flight enroute-4
    if(timer > 808) {
        draw(x11, y11);
        flight(flights[10], x11, y11);
        var vx11 = getVx(flights[10]);
        var vy11 = getVy(flights[10]);
        x11 += vx11*m;
        y11 -= vy11*m;
    }

    // #12 Flight departure-5
    if(timer > 865) {
        draw(x12, y12);
        flight(flights[11], x12, y12);
        var vx12 = getVx(flights[11]);
        var vy12 = getVy(flights[11]);
        x12 += vx12*m;
        y12 -= vy12*m;
        flights[11].speed += .0032*m/6;
        flights[11].altd += .0032*m;
    }

    // #13 Flight arrival-4
    if(timer > 910  && flights[12].altd > 10) {
        draw(x13, y13);
        flight(flights[12], x13, y13);
        var vx13 = getVx(flights[12]);
        var vy13 = getVy(flights[12]);
        x13 += vx13*m;
        y13 -= vy13*m;
        flights[12].speed -= .0032*m/6;
        flights[12].altd -= .0034*m;
    }

    // #14 Flight enroute-5
    if(timer > 934) {
        draw(x14, y14);
        flight(flights[13], x14, y14);
        var vx14 = getVx(flights[13]);
        var vy14 = getVy(flights[13]);
        x14 += vx14*m;
        y14 -= vy14*m;
    }

    // #15 Flight arrival-5
    if(timer > 1031  && flights[14].altd > 12) {
        draw(x15, y15);
        flight(flights[14], x15, y15);
        var vx15 = getVx(flights[14]);
        var vy15 = getVy(flights[14]);
        x15 += vx15*m;
        y15 -= vy15*m;
        flights[14].speed -= .0032*m/6;
        flights[14].altd -= .0036*m;
    }
}


function draw(inputX, inputY) {
    c.beginPath();
    c.lineWidth = "1.5";
    c.strokeStyle = "white";
    c.fillStyle = "white";
    c.arc(inputX,inputY, 4.2, 0, 2 * Math.PI);
    c.fill();
    c.moveTo(inputX+2, inputY-2);
    c.lineTo(inputX+12,inputY-18);
    c.stroke();
    c.fillStyle = "black";
    c.fillText("V", inputX-3, inputY+4);
}

function flight(obj, x, y) {
    c.fillStyle = "white";
    c.fillText(obj.airId, x+15, y-15);
    if (count%2 < 1){
        c.fillText(obj.dest, x+12, y-5);
        c.fillText(obj.type, x+38, y-5)
    } else {
        if(Math.round(obj.altd) < 100){
        c.fillText("0".concat(Math.round(obj.altd)), x+12, y-5);
        } else{c.fillText(Math.round(obj.altd), x+12, y-5);}
        c.fillText(Math.round(obj.speed), x+38, y-5);
        c.fillText(obj.class, x+50, y-5);
    }
}

function getTime(t) {
    var min  = parseInt(t/60);
    var sec = parseInt(t % 60);
    let time = "";
    if(min <10){
        if(sec < 10){time += "0"+min+":0"+sec;}
        else{time += "0"+min+":"+sec;}
    } else {
        if(sec < 10){time += min+":0"+sec;}
        else{time += min+":"+sec;}
    }
    return time;
}

// Return individual flight details
function getFlightInfo(obj, t, route, place) {
    time = getTime(parseInt(t))
    let info = "";
    info += time;
    info += " " + route + " " + obj.airId;
    info += "\t" + obj.type;
    info += " " + obj.dest;
    document.getElementById(place).value = info;
    if(timer > parseInt(t)){
        document.getElementById(place).style.backgroundColor = "#ACD0E8";
    }
}

// Display all flight details
function displayFlightInfo() {
    getFlightInfo(flights[0], "65", "E", "info1");
    getFlightInfo(flights[1], "120", "A", "info2");
    getFlightInfo(flights[2], "152", "D", "info3");
    getFlightInfo(flights[3], "243", "A", "info4");
    getFlightInfo(flights[4], "288", "D", "info5");
    getFlightInfo(flights[5], "310", "E", "info6");
    getFlightInfo(flights[6], "410", "A", "info7");
    getFlightInfo(flights[8], "502", "E", "info8");
    getFlightInfo(flights[7], "645", "D", "info9");
    getFlightInfo(flights[9], "740", "D", "info10");
    getFlightInfo(flights[10], "808", "E", "info11");
    getFlightInfo(flights[11], "865", "D", "info12");
    getFlightInfo(flights[12], "910", "A", "info13");
    getFlightInfo(flights[13], "934", "E", "info14");
    getFlightInfo(flights[14], "1031", "A", "info15");
}

function getFLightStrip(obj, planId, squawk, pTime, dep, altitude) {
    document.getElementById("airId").value = obj.airId;
    let type = obj.type + "/" + obj.class;
    document.getElementById("type").value = type;
    document.getElementById("planId").value = planId;
    document.getElementById("squawk").value = squawk;
    document.getElementById("pTime").value = pTime;
    document.getElementById("altd").value = altitude;
    document.getElementById("airport").value = dep;
    let route = dep + "  ";
    if(dep != "PHL" && obj.dest!= "PHL") {
        route += "PHL  ";
    }
    route += obj.dest;
    document.getElementById("route").value = route;
}

function getVx(obj) {
    var rads = obj.course * Math.PI / 180;
    var vx = Math.cos(rads)*obj.speed/60;
    return vx/25;
}

function getVy(obj) {
    var rads = obj.course * Math.PI / 180;
    var vy = Math.sin(rads)*obj.speed/60;
    return vy/25;
}

function resetFlight(obj, a, s, c) {
    obj.altd = a;
    obj.speed = s;
    obj.course = c;
}

function resetAllFlight() {
    resetFlight(flights[0], 090, 27, 332);
    resetFlight(flights[1], 091, 28, 35);
    resetFlight(flights[2], 011, 16, 53);
    resetFlight(flights[3], 085, 27, 270);
    resetFlight(flights[4], 012, 16, 145);
    resetFlight(flights[5], 088, 28, 115);
    resetFlight(flights[6], 090, 28, 126);
    resetFlight(flights[7], 012, 15, 154);
    resetFlight(flights[8], 094, 27, 22);
    resetFlight(flights[9], 011, 16, 71);
    resetFlight(flights[10], 092, 29, 240);
    resetFlight(flights[11], 010, 15, 280);
    resetFlight(flights[12], 088, 26, 180);
    resetFlight(flights[13], 090, 28, 290);
    resetFlight(flights[14], 089, 27, 351);
    document.getElementById("info1").style.backgroundColor = "#FFEFCB";
    document.getElementById("info2").style.backgroundColor = "#FFEFCB";
    document.getElementById("info3").style.backgroundColor = "#FFEFCB";
    document.getElementById("info4").style.backgroundColor = "#FFEFCB";
    document.getElementById("info5").style.backgroundColor = "#FFEFCB";
    document.getElementById("info6").style.backgroundColor = "#FFEFCB";
    document.getElementById("info7").style.backgroundColor = "#FFEFCB";
    document.getElementById("info8").style.backgroundColor = "#FFEFCB";
    document.getElementById("info9").style.backgroundColor = "#FFEFCB";
    document.getElementById("info10").style.backgroundColor = "#FFEFCB";
    document.getElementById("info11").style.backgroundColor = "#FFEFCB";
    document.getElementById("info12").style.backgroundColor = "#FFEFCB";
    document.getElementById("info13").style.backgroundColor = "#FFEFCB";
    document.getElementById("info14").style.backgroundColor = "#FFEFCB";
    document.getElementById("info15").style.backgroundColor = "#FFEFCB";
}

animate();