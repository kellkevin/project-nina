var GAME = new Object();
var Player = new Object();

var intTimeLine; // timeline 

function Sprite() {
    // Moving certain ways
    // collision 
} // 

function Character() {
    Sprite.call(this);
    //
}

Character.prototype = new Sprite();

function ActiveChar() { // A battle character. Also represents a story character
    Character.call(this);
}

ActiveChar.prototype = new Character();

with(ActiveChar) {
    hp = 10;
    mp = 10;
    agl = 10;
    str = 10;
    atk = 10;
    def = 10;
    cons = 10;
    mov = 10;
    xp = 0;
    level = 1;
    rArm = "";
    lArm = "";
    dualHand = "";
    headHelm = "";
    bodyArmor = "";
    legWear = "";
    classType = "";
}

ActiveChar.prototype.die = function() {
    delete this;
}

ActiveChar.prototype.checkForDeath = function() {
    if (this.hp <= 0) this.die;
}


ActiveChar.prototype.equip = function(clothing, unequip) {
    for (iStat in clothing) { // change the clothing stat based on item
        if (typeof clothing[iStat] == Number) { // Stats mostly.
            if (unequip != true) {
                ActiveChar[iStat] + clothing[iStat];
            } else { // also can un equip
                ActiveChar[iStat] - clothing[iStat];
            }
        }
    }
}

ActiveChar.prototype.attack = function(victim) {
    // Attack a character
    var diff = this.atk - victim.def;
    victim.hp = victim.hp - diff;
    victim.checkForDeath();
}


ActiveChar.prototype.levelUp = function(classType) {
    // Increase the level and boost stats. 
    this.level + 1;
    for (iStats in classType) { // increment based on class type stats 
        classType[iStats] + this[iStats];
    }
}