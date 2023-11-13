import React from 'react';
export const Questions = [
    //1
    {quest: 'Are you new to League of Legends?',
    answ1: 'Yes', answ2: 'No', 
    top1: 5, top2: 0, mid1: 4, mid2: 1, jg1: 1, jg2: 3, adc1: 2, adc2: 1, sup1: 3, sup2: 2},
    //2 
    {quest: 'Unkillable tank or deadly assassin?', 
    answ1: 'Tank', answ2: 'Assasin', 
    top1: 5, top2: 2, mid1: 0, mid2: 5, jg1: 3, jg2: 1, adc1: 0, adc2: 5, sup1: 2, sup2: 2},
    //3
    {quest: 'Do you like to play alone, fight 1 against everyone, or arrange teamfights and ambushes with a team?', 
    answ1: 'Alone', answ2: 'With team', 
    top1: 4, top2: 0, mid1: 5, mid2: 2, jg1: 1, jg2: 3, adc1: 0, adc2: 5, sup1: 0, sup2: 4},
    //4 
    {quest: 'What would you use? Teleport (the ability to move a long distance on the map) or ignition (set the enemy on fire so that he does not run away at low HP)?', 
    answ1: 'Teleport', answ2: 'Ignition', 
    top1: 5, top2: 1, mid1: 4, mid2: 2, jg1: 0, jg2: 0, adc1: 1, adc2: 0, sup1: 0, sup2: 0},
    //5
    {quest: 'Would you spend your free time studying the minds of champions?', 
    answ1: 'Yes', answ2: 'No', 
    top1: 3, top2: 2, mid1: 4, mid2: 1, jg1: 5, jg2: 0, adc1: 1, adc2: 4, sup1: 1, sup2: 4},
    //6
    {quest: "Are you good at farm minions? (if you don't know what this is, then answer no)?", 
    answ1: 'Yes', answ2: 'No', 
    top1: 4, top2: 0, mid1: 5, mid2: 0, jg1: 0, jg2: 3, adc1: 5, adc2: 0, sup1: 0, sup2: 5},
    //7
    {quest: 'You would like to stay in your lane most of the time or walk around the map to help your allies', 
    answ1: 'Stay', answ2: 'Walk', 
    top1: 1, top2: 4, mid1: 3, mid2: 1, jg1: 5, jg2: 0, adc1: 0, adc2: 5, sup1: 4, sup2: 1},
    //8
    {quest: "Do you often look at the minimap? (if you don't know what this is, then answer no)", 
    answ1: 'Yes', answ2: 'No',  
    top1: 2, top2: 4, mid1: 3, mid2: 2, jg1: 5, jg2: 0, adc1: 1, adc2: 4, sup1: 4, sup2: 1},
    //9
    {quest: 'What do you like more: dealing a lot of damage or buff your allies?', 
    answ1: 'Deal damage', answ2: 'Buff', 
    top1: 4, top2: 0, mid1: 4, mid2: 1, jg1: 3, jg2: 0, adc1: 5, adc2: 0, sup1: 2, sup2: 5},
    //10
    {quest: 'Choose: magic or sword.', 
    answ1: 'Magic', answ2: 'Sword', 
    top1: 1, top2: 2, mid1: 4, mid2: 1, jg1: 2, jg2: 2, adc1: 1, adc2: 4, sup1: 5, sup2: 0},
    //11
    {quest: 'Choose: melee combat or ranged combat.', 
    answ1: 'Melee', answ2: 'Range', 
    top1: 4, top2: 1, mid1: 1, mid2: 4, jg1: 4, jg2: 1, adc1: 0, adc2: 5, sup1: 2, sup2: 2},
    //12
    {quest: 'Choose: quietly farm (stand in lane and get gold from minions) or more action and kills?', 
    answ1: 'Farm', answ2: 'Kills', 
    top1: 4, top2: 1, mid1: 2, mid2: 5, jg1: 1, jg2: 3, adc1: 5, adc2: 0, sup1: 0, sup2: 2},
    //13
    {quest: 'Choose: a fast and risky game or a long game, but with a sure result?', 
    answ1: 'Fast', answ2: 'Slow', 
    top1: 2, top2: 4, mid1: 3, mid2: 3, jg1: 5, jg2: 0, adc1: 0, adc2: 5, sup1: 1, sup2: 0},
    //14
    {quest: 'What do you like more: teamfights or duels?', 
    answ1: 'Teamfights', answ2: 'Duels', 
    top1: 0, top2: 5, mid1: 3, mid2: 3, jg1: 4, jg2: 0, adc1: 5, adc2: 0, sup1: 5, sup2: 0},
    //15
    {quest: 'Do you place wards often? (wards are things that create visible areas on the map', 
    answ1: 'Yes', answ2: 'No', 
    top1: 3, top2: 2, mid1: 3, mid2: 2, jg1: 2, jg2: 3, adc1: 4, adc2: 1, sup1: 0, sup2: 5}
]
export const ResultContext = React.createContext();
export const ResultProvider = ({ children }) => {
  const [result, setResult] = React.useState('');

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};
