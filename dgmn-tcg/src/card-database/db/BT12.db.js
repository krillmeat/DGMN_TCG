/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::                                                                         ::::::::::::::::::::
::::::::::::::::::::  BT12 - Across Time                                                     ::::::::::::::::::::
::::::::::::::::::::                                                                         ::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

export const BT12 = [
  {},{},
  { type:'egg', name:'Koromon', no:3, set:'BT12', rarity: 'U', block: '02',
    level: 2, colors: ['yellow'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<Your Turn>> <<Once Per Turn>> When one of your","yellow or red Tamers becomes suspended, 1 of","your opponent's Digimon gets -1000 DP for the","turn."]},
  {},{},{}, // 6
  

  
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::::::::  RED                                                                    ::::::::::::::::::::
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  {},{},{},{}, // 10
  {},{},{},{},{},{},{},{}, // 18
  
  
  
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::::::::  BLUE                                                                   ::::::::::::::::::::
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  {},{},
  { type:'dgmn', name: 'Veemon', no:21, set:'BT12', rarity:'C',
    level: 3, colors: ['blue'],
    form: 'Rookie', attr: 'Free', traits: ['Mini Dragon'],
    dp: 1, cost: 3, evoCost: {value: 0, colors: ['blue','green']},
    effect: ["<<On Play>> Reveal the top 3 cards of your deck. Add 1","Digimon card with [Imperialdramon] in its name or","[Free] in its traits and 1 Tamer card with [Davis","Motomiya] in its name from among them to your hand.","Place the rest at the bottom of the deck in any order."],
    inherit: ["<<End of Your Turn>> You may DNA digivolve this","Digimon and one of your other Digimon in play","into a Digimon card in your hand by paying its","DNA digivolve cost."],
    modClasses: ["effect-five-line"]},
  

  { type:'dgmn', name: 'ExVeemon', no:22, set:'BT12', rarity:'U',
    level: 4, colors: ['blue'],
    form: 'Champion', attr: 'Free', traits: ['Mythical Dragon'],
    dp: 4, cost: 4, evoCost: [2,2],
    effect: ["<<Your Turn>> When this Digimon would DNA Digivolve into","a green Digimon, gain 1 memory."],
    inherit: ["<<Your Turn>> While this Digimon has","[Imperialdramon] in its name or [Free] in its","traits, it gains <<Jamming>>."],
    special:["evo-color-diff-blue-green"]},
    
    {},
    { type:'dgmn', name: 'Ranamon', no:24, set:'BT12', rarity:'U',
      level: 4, colors: ['blue'],
      form: 'Hybrid', attr: 'Variable', traits: ['Fairy'],
      dp: 4, cost: 5, evoCost: [2],
      effect: ["You may digivolve this card from your hand onto one of your","blue Tamers as if the Tamer is a level 3 blue Digimon.","<<When Digivolving>> By placing 1 level 3 Digimon card from your","hand at the bottom of 1 of your blue Digimon's digivolution","cards, this Digimon gains <<Jamming>> for the turn."],
      inherit: ["-"],
      special: ["cnd-1"]},
      
    {},{},{},
    
    { type:'dgmn', name: 'Paildramon', no:28, set:'BT12', rarity:'R',
      level: 5, colors: ['blue','green'],
      form: 'Ultimate', attr: 'Free', traits: ['Dragonkin'],
      dp: 8, cost: 8, evoCost: [4,4],
      effect: ["<<When Digivolving>> Trash the top 3 digivolution cards of all of","your opponent's Digimon. Then, when DNA Digivolving, 2 of","your opponent's Digimon with no digivolution cards can't","attack until the end of your opponent's next turn."],
      inherit: ["<<End of Attack>> If this Digimon has","[Imperialdramon] in its name or [Free] in its","traits, gain 1 memory."],
      special:["cnd-1","dna-evo-0-4-blue-green"]},
    
    {},{},
  
  { type:'dgmn', name: 'Imperialdramon: Fighter Mode', no:31, set:'BT12', rarity:'SR',
    level: 6, colors: ['blue','green'],
    form: 'Mega', attr: 'Free', traits: ['Ancient Dragonkin'],
    dp: 13, cost: 13, evoCost: [5,5],
    effect: ["<<When Digivolving>> Suspend all of your opponent's Digimon with no digivolution","cards. Then, return 1 of your opponent's suspended Digimon to its owner's hand. By","returning 1 [Imperialdramon Dragon Mode] from this Digimon's digivolution cards","to its owner's hand, return all of your opponent's suspended Digimon to the"," bottom of their owner's deck instead.","<<All Turns>> This Digimon gets +1000 DP for each color in its digivolution cards.","While this Digimon has 2 or more colors in its digivolution cards, it gains","<<Security Attack +1>> and <<Blocker>>."],
    inherit: [],
    modClasses: ['name-cnd-5']},

    {},
    
    
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::::::::  YELLOW                                                                 ::::::::::::::::::::
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

    {},
    { type:'dgmn', name: 'Agumon', no:34, set:'BT12', rarity:'C',
      level: 3, colors: ['yellow','red'],
      form: 'Rookie', attr: 'Vaccine', traits: ['Dinosaur'],
      dp: 2, cost: 3, evoCost: {value:1, colors: ['red','yellow']},
      effect: [""],
      inherit: ["<<Your Turn>> <<Once Per Turn>> When one of your","yellow or red Tamers becomes suspended, 1 of","your opponent's Digimon gets -2000 DP for the","turn."]},{},{},{},
      
      
      { type:'dgmn', name: 'GeoGreymon', no:38, set:'BT12', rarity:'C',
        level: 4, colors: ['yellow','red'],
        form: 'Champion', attr: 'Vaccine', traits: ['Dinosaur'],
        dp: 5, cost: 5, evoCost: {value:3, colors: ['red','yellow']},
        effect: ["<<When Digivolving>> If you don't have [Marcus Damon] in","play, you may play 1 [Marcus Damon] from your hand","without paying the cost."],
        inherit: ["<<Your Turn>> <<Once Per Turn>> When one of your","yellow or red Tamers becomes suspended, 1 of","your opponent's Digimon gets -2000 DP for the","turn."]},
      {},{},
  {},
  { type:'dgmn', name: 'RizeGreymon', no:42, set:'BT12', rarity:'R',
    level: 5, colors: ['yellow','red'],
    form: 'Ultimate', attr: 'Vaccine', traits: ['Cyborg'],
    dp: 7, cost: 7, evoCost: {value:4, colors: ['red','yellow']},
    effect: ["<<When Digivolving>> If you have a yellow or red Tamer in","play, gain 1 memory."],
    inherit: ["<<All Turns>> <<Once Per Turn>> When one of your","Tamers is deleted, place 1 [Marcus Damon]","from your trash on top of your security stack","face down."],
    specEvo:"Digivolve: 3 from [GeoGreymon]"},
    
    
    { type:'dgmn', name: 'ShineGreymon', no:43, set:'BT12', rarity:'SR',
      level: 6, colors: ['yellow','red'],
      form: 'Mega', attr: 'Vaccine', traits: ['Light Dragon'],
      dp: 12, cost: 12, evoCost: {value:4, colors: ['red','yellow']},
      effect: ["<<When Digivolving>> For each yellow and/or red Tamer you have in","play, 1 of your opponent's Digimon and all of your opponent's","Security Digimon get -3000 DP for the turn.","<<Your Turn>> All of your [Marcus Damon]s in play get +3000 DP and","gain <<Security Attack +1>>."],
      inherit: [""],
      specEvo:"Digivolve: 3 from Lv.5 w/[RizeGreymon] in name",
      modClasses: ["effect-cnd-1","effect-sm-2"]
    },{},

  

  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::::::::  GREEN                                                                  ::::::::::::::::::::
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  
  {},{},
  
  { type:'dgmn', name: 'Wormmon', no:47, set:'BT12', rarity:'U',
    level: 3, colors: ['green'],
    form: 'Rookie', attr: 'Free', traits: ['Larva'],
    dp: 1, cost: 3, evoCost: [0,0],
    effect: ["<<On Play>> Reveal the top 3 cards of your deck. Add 1","Digimon card with [Imperialdramon] in its name or","[Free] in its traits and 1 Tamer card with [Ken Ichijoji] in","its name from among them to your hand. Place the rest","at the bottom of the deck in any order."],
    inherit: ["<<End of Your Turn>> You may DNA digivolve this","Digimon and one of your other Digimon in play","into a Digimon card in your hand by paying its","DNA digivolve cost."],
    special:["evo-color-diff-blue-green"]},

  {},{},
  
  { type:'dgmn', name: 'Stingmon', no:50, set:'BT12', rarity:'U',
    level: 4, colors: ['green'],
    form: 'Champion', attr: 'Free', traits: ['Insectoid'],
    dp: 4, cost: 4, evoCost: [2,2],
    effect: ["<<Your Turn>> When this Digimon would DNA digivolve into","a blue Digimon card, gain 1 memory."],
    inherit: ["<<Your Turn>> While this Digimon has","[Imperialdramon] in its name or [Free] in its","traits, it gains <<Piercing>>."],
    special:["evo-color-diff-blue-green"]},

  {},{},{},{},
  { type:'dgmn', name: 'Dinobeemon', no:55, set:'BT12', rarity:'R',
    level: 5, colors: ['green','blue'],
    form: 'Ultimate', attr: 'Free', traits: ['Mutant'],
    dp: 8, cost: 8, evoCost: [4,4],
    effect: ["<<When Digivolving>> When DNA Digivolving, suspend 1 of","your opponent's Digimon and this Digimon gets +3000","DP for this turn. Then, this Digimon can attack your","opponent's Digimon."],
    inherit: ["<<Your Turn>> <<Once Per Turn>> When your Digimon with","[Imperialdramon] in its name or [Free] in its","traits deletes 1 of your opponent's Digimon by","battle, trash the top card of your opponent's security."],
    special:["evo-color-diff-green-blue","dna-evo-0-4-green-blue"]},
  {},{},{},{},{},
  {},{},{},{},{},{},{},{},{},{},
  {},{},



  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::::::::  PURPLE                                                                 ::::::::::::::::::::
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  { type:'dgmn', name: 'Impmon (X Antibody)', no:73, set:'BT12', rarity:'C',
    level: 3, colors: ['purple'],
    form: 'Rookie', attr: 'Virus', traits: ['Evil','X Antibody'],
    dp: 2, cost: 4, evoCost: [0],
    effect: ["<<On Play>> <<When Digivolving>> By trashing 1 Option card from","your hand, you may return 1 Digimon card with [Evil],","[Wizard], or [Demon Lord] in its traits from your trash to your hand."],
    inherit: ["<<When Attacking>> <<Once Per Turn>> Trash the top 2","cards of your deck"],
    modClasses: ['name-cnd-2']},{},{},{},{},

  { type:'dgmn', name: 'Wizardmon (X Antibody)', no:78, set:'BT12', rarity:'C',
    level: 4, colors: ['purple'],
    form: 'Champion', attr: 'Data', traits: ['Wizard','X Antibody'],
    dp: 6, cost: 6, evoCost: [2],
    effect: ["<<When Digivolving>> Trash the top 2 cards of your deck. If this","Digimon has [Wizardmon] or [X Antobody] in its","digivolution cards, this Digimon gains <<Blocker>> until the","end of your opponent's turn instead."],
    inherit: ["<<When Attacking>> <<Once Per Turn>> Trash the top 2","cards of your deck."],
    modClasses: ['name-cnd-3']}
    ,{},{},
  {},
  
  { type:'dgmn', name: 'Baalmon (X Antibody)', no:82, set:'BT12', rarity:'R',
    level: 5, colors: ['purple'],
    form: 'Ultimate', attr: 'Free', traits: ['Wizard','X Antibody'],
    dp: 8, cost: 8, evoCost: [3],
    effect: ["<<When Digivolving>> Return 1 [X Antibody] from your trash to","your hand.","<<When Digivolving>> Trash the top 3 cards of your deck. If this","Digimon has [Baalmon] or [X Antibody] in its digivolution","cards, delete 1 of your opponent's level 4 or lower","Digimon instead."],
    inherit: ["<<Your Turn>> While this Digimon has [Wizard] or","[Demon Lord] in its traits, it gets +2000 DP."],
    special: ["spec-evo-0-[Baalmon]","name-cnd-4","lead-sm-3"]},{},{},

  { type:'dgmn', name: 'Beelzemon (X Antibody)', no:85, set:'BT12', rarity:'SR',
    level: 6, colors: ['purple'],
    form: 'Mega', attr: 'Virus', traits: ['Demon Lord','Seven Great Demon Lords','X Antibody'],
    dp: 12, cost: 13, evoCost: [4],
    effect: ["<<When Digivolving>> If this Digimon has [Beelzemon] or","[X Antibody] in its digivolution cards, for every 10 cards in","your trash, trash the top card of your opponent's security stack.","<<On Deletion>> You may play 1 Digimon card with [Impmon] in its","name from your trash without paying its memory cost"],
    inherit: [],
    special: ["cnd-3","name-cnd-5","spec-evo-1-[Beelzemon]"]},{},{},{},{},{}, // 90
  {},
  { type:'tamer', name: 'Marcus Damon', no:92, set:'BT12', rarity:'R',
    colors: ['yellow','red'],
    traits: [],
    cost: 4,
    effect: ["<<Start of Your Main Phase>> If you have a Digimon with [Agumon]","or [Greymon] in its name in play, by paying 1 memory, for the turn,","this Tamer is also treated as a 3000 DP Digimon that can't digivolve","<<Your Turn>> When this Tamer becomes suspended, 1 of your Digimon","may digivolve into a yellow card with [Greymon] in its name in your","hand without paying the cost."],
    inherit: ["<<Security>> Play this card without paying the cost."],
    modClasses: ['effect-cnd-2','effect-sm-1','effect-six-lines']},
  {},{},{},{},{},{},{},{}, // 100
  {},{},{},{},{},{},{},{},{},{},
  {},{}
]
