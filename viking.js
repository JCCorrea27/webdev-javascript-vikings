// Soldier
class Soldier {

constructor(health, strength){
    this.health = health;
    this.strength = strength;
}
attack(){
    return this.strength;
}

receiveDamage(damage){
    
    this.health = this.health - damage

}

}

// Viking
class Viking extends Soldier {

    constructor(name, health, strength){
        super(name, health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
}

// Saxon
class Saxon {}

// War
class War {}
