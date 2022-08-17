//When to use map , filter , reduce 

const fighter = [
    {name : "hossain hasan ", combatSkill: 50 } ,
    {name : "hasan hossain ", combatSkill: 60 } ,
    {name : "smith  ", combatSkill: 90 } ,
];

//problem 
// 1) Pick their names 
//2) Pick the fighters whose combatSkill >= 80
//3) sum of all ;combatSkills 

console.log(fighter.map((f) => f.name));
console.log(fighter.filter((f) => f.combatSkill >= 80));
console.log(fighter.reduce((sum ,f) => f.combatSkill, 0 ))

//end 