
//Filter methode 
const users = [
    {name:'ahmed' , age:23 , travail:true},
    {name:'aziz' , age:50 , travail:false},
    {name:'ali' , age:34 , travail:true},
    {name:'mohamed' , age:45 , travail:true},
    {name:'samir' , age:33 , travail:true},
    {name:'morad' , age:21 , travail:true},
    {name:'fettah' , age:77 , travail:true}
    
];
//filter methode

console.log('filter methode')
const TAB = users.filter((user) =>{
    return user.travail
});


const tab = [12,13,178,90,34,5,77,23,103]
const chercher_chiffre = tab.filter((T)=>{
    return T>59 
})

console.log(chercher_chiffre)
console.log(TAB);

// Map methode 

console.log('Map methode ')

const map2 = tab.map((tab) => {
    return tab/2
})


console.log(map2)

//Reduce Methode 

console.log('Reduce Methode')
const rd = tab.reduce((acc,curr)=>{
    if(curr >100){
        acc++
    }
    return acc

},
0
)

const game =[
    {name:"ahmed", score:120},
    {name:"ali", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"morad", score:120},
    {name:"ali", score:120},
    {name:"ali", score:120},
    {name:"ali", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"morad", score:120},
    {name:"ali", score:1230},
    {name:"ali", score:120},
    {name:"ali", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},
    {name:"ahmed", score:120},

]


const game2 = game.reduce((acc,curr) =>{
    if(curr.name=="ali"){
        acc+=curr.score
    }
    return acc

},
0)

console.log(rd)
console.log(game2)


//sort methode

console.log('sort methode')

const t =["ahmed","zaid","laila","eida"];
console.log(t.sort())
