const cat = {
    tiredness: 0,
    hunger: 0,
    lonliness: 0,
    happiness: 0,

  tiredness (){
     console.log('cat wants to sleep')
  },
  hunger (){
      console.log('cat wants to be fed')
      console.log('cat does not want to be fed')
  },
  lonliness(){
    console.log('cat wants to be petted')
  },
  happiness(){
    console.log('cat is very happy')
  }
}
cat.tiredness()
cat.hunger()
cat.lonliness()
cat.happiness()