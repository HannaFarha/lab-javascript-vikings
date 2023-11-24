// Soldier
class Soldier{
    constructor(health, strength) {
        this.health =health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health-=damage;
       
       }

    }

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
     }
    
     receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
          return `${this.name} has received ${damage} points of damage`;
        } else {
          return `${this.name} has died in act of combat`;
        }
     }
     
     battleCry() {
        return "Odin Owns You All!";
     }
    }


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
       super(health, strength);
    }
   
    attack() {
       return this.strength;
    }
   
    receiveDamage(damage) {
       super.receiveDamage(damage);
       if (this.health > 0) {
         return `A Saxon has received ${damage} points of damage`;
       } else {
         return "A Saxon has died in combat";
       }
    }
   }

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(objekt){
        
            this.vikingArmy.push(objekt)
    
    }
    addSaxon(objekt){
        
            this.saxonArmy.push(objekt)
            
            }
    vikingAttack(){
        let result = '';
        this.saxonArmy = this.saxonArmy.filter(saxon => {
          let damage = this.vikingArmy[0].attack();
          let saxonResult = saxon.receiveDamage(damage);
          if (saxonResult.includes('died'))  {
            result += `${saxonResult}\n`;
           } else {
            result += `${saxonResult}\n`;
           }
          return saxon.health > 0;
           });
        return result;
     };
  
     saxonAttack() {
        let result = '';
        this.vikingArmy = this.vikingArmy.filter(viking => {
          let damage = this.saxonArmy[0].attack();
          let vikingResult = viking.receiveDamage(damage);
          if (vikingResult.includes('died')) {
            result += `${vikingResult}\n`;
          } else {
            result += `${vikingResult}\n`;
          }
          return viking.health > 0;
        });
        return result;
     }
showStatus(){


        if (this.saxonArmy.length === 0) {
          return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
          return "Saxons have fought for their lives and survived another day...";
        } else {
          return "Vikings and Saxons are still in the thick of battle.";
        }
     }
}
