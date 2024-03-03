let radioGroupID = 1;
radio.setGroup(radioGroupID);
basic.showNumber(radioGroupID);
basic.pause(1000);
basic.clearScreen();

let messageString: string = "";
let finalMessage: string = "";

function sendMessage(message: string) {
    radio.sendString(message);
}

input.onButtonPressed(Button.A, function () {
    messageString = messageString + ".";
});

input.onButtonPressed(Button.B, function () {
    messageString = messageString + "-";
});

input.onButtonPressed(Button.AB, function () {
    let cutString = messageString.split(" ");
    for (let i = 0; i < cutString.length; i++) {
        if (cutString[i] == ".-") {
            finalMessage += "a";
        }
        if (cutString[i] == "-...") {
            finalMessage += "b";
        }
        if (cutString[i] == "-.-.") {
            finalMessage += "c";
        }
        if (cutString[i] == "-..") {
            finalMessage += "d";
        }
        if (cutString[i] == ".") {
            finalMessage += "e";
        }
        if (cutString[i] == "..-.") {
            finalMessage += "f";
        }
        if (cutString[i] == "--.") {
            finalMessage += "g";
        }
        if (cutString[i] == "....") {
            finalMessage += "h";
        }
        if (cutString[i] == "..") {
            finalMessage += "i";
        }
        if (cutString[i] == ".---") {
            finalMessage += "j";
        }
        if (cutString[i] == "-.-") {
            finalMessage += "k";
        }
        if (cutString[i] == ".-..") {
            finalMessage += "l";
        }
        if (cutString[i] == "--") {
            finalMessage += "m";
        }
        if (cutString[i] == "-.") {
            finalMessage += "n";
        }
        if (cutString[i] == "---") {
            finalMessage += "o";
        }
        if (cutString[i] == ".--.") {
            finalMessage += "p";
        }
        if (cutString[i] == "--.-") {
            finalMessage += "q";
        }
        if (cutString[i] == ".-.") {
            finalMessage += "r";
        }
        if (cutString[i] == "...") {
            finalMessage += "s";
        }
        if (cutString[i] == "-") {
            finalMessage += "t";
        }
        if (cutString[i] == "..-") {
            finalMessage += "u";
        }
        if (cutString[i] == "...-") {
            finalMessage += "v";
        }
        if (cutString[i] == ".--") {
            finalMessage += "w";
        }
        if (cutString[i] == "-..-") {
            finalMessage += "x";
        }
        if (cutString[i] == "-.--") {
            finalMessage += "y";
        }
        if (cutString[i] == "--..") {
            finalMessage += "z";
        }
        if (cutString[i] == "-.-.--") {
            finalMessage += "!";
        }
        if (cutString[i] == "..--..") {
            finalMessage += "?";
        }
        if (cutString[i] == ".-.-.-") {
            finalMessage += ".";
        }
    }
    sendMessage(finalMessage);
    finalMessage = "";
    messageString = "";
});

input.onGesture(Gesture.Shake, function() {
    messageString = "";
    basic.clearScreen();
});

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    messageString = messageString + " ";
});

input.onPinPressed(TouchPin.P1, function() {
    radioGroupID += 1;
    radio.setGroup(radioGroupID);
    basic.showNumber(radioGroupID);
    basic.pause(1000);
    basic.clearScreen();
});
input.onPinPressed(TouchPin.P2, function () {
    radioGroupID -= 1;
    radio.setGroup(radioGroupID);
    basic.showNumber(radioGroupID);
    basic.pause(1000);
    basic.clearScreen();
});

radio.onReceivedString(function (receivedString: string) {
    music.ringTone(Note.C);
    basic.pause(500);
    music.stopAllSounds()
    basic.showString(receivedString);
});