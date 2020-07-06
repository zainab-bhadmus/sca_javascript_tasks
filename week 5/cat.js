const cat = {
    tiredness: 0,
    hunger: 0,
    lonliness: 0,
    happiness: 0,
    play: function() {
      this.hunger += 5;
      this.hunger += 5;
      this.happiness += 20;
    },
    eat: function() {
      this.hunger -= 5;
      this.happiness += 5;
    },
    pet: function() {
      this.lonliness -= 5;
      this.tiredness += 5
    },
    sleep: function {
      this.tiredness -= 5;
    }