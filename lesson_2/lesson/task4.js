const peoples = [   {name:"Никита"  , age:20},
                    {name:"Василий" , age:14},
                    {name:"Настя"   , age:15},
                    {name:"Валя"    , age:13}]

                    
for (man in peoples) {
    if (peoples[man].age > 18){
        console.log(peoples[man].name + " не учится в школе")
    }
    else {
        console.log(peoples[man].name + " учится в школе")
    }

}

