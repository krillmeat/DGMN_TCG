/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::                                                                         ::::::::::::::::::::
::::::::::::::::::::  BT13 - VS Royal Knights                                                ::::::::::::::::::::
::::::::::::::::::::                                                                         ::::::::::::::::::::
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

export const BT13 = [
  {},{},{},{},{},{}, // 6

    

  
  /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  ::::::::::::::::::::  RED                                                                    ::::::::::::::::::::
  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
  {},
  { type:'dgmn', name: 'Agumon', no:8, set:'BT13', rarity:'C', rotation:'02',
    level: 3, colors: ['red','yellow'],
    form: 'Rookie', attr: 'Vaccine', traits: ['Dinosaur'],
    dp: 2, cost: 3, evoCost: [1,1],
    effect: ["<<Main>> <<Once Per Turn>> 1 of your [Marcus Damon] is also","treated as a 3000 DP Digimon for the turn that can't","digivolve."],
    inherit: ["<<Your Turn>> <<Once Per Turn>> When one of your red","or yellow Tamers becomes suspended, you may","delete 1 of your opponent's Digimon with 3000","DP or less."],
    // modClasses: ['inherit-cnd-1','inherit-four-lines']
  }
    ,{},{}, // 10
  {},
  { type:'dgmn', name: 'GeoGreymon', no:12, set:'BT13', rarity:'C',
    level: 4, colors: ['red','yellow'],
    form: 'Champion', attr: 'Vaccine', traits: ['Dinosaur'],
    dp: 5, cost: 5, evoCost: [3],
    effect: ["-"],
    inherit: ["<<Your Turn>> <<Once Per Turn>> When one of your red","or yellow Tamers becomes suspended, you may","delete 1 of your opponent's Digimon with 3000","DP or less."]},
    {},{},
  { type:'dgmn', name: 'RizeGreymon', no:15, set:'BT13', rarity:'C',
    level: 5, colors: ['red','yellow'],
    form: 'Ultimate', attr: 'Vaccine', traits: ['Cyborg'],
    dp: 7, cost: 7, evoCost: [4],
    effect: [],
    inherit: ["<<All Turns>> <<Once Per Turn>> When one of your red","or yellow Tamers is deleted, place 1","[Marcus Damon] from your trash on top of your","security stack face down."]},
  {},{},
  { type:'dgmn', name: 'ShineGreymon', no:18, set:'BT13', rarity:'R', rotation:'02', 
    level: 6, colors: ['red','yellow'],
    form: 'Mega', attr: 'Vaccine', traits: ['Light Dragon'],
    dp: 12, cost: 12, evoCost: [4],
    effect: ["-"],
    inherit: ["-"]},
  {}, // 19
  { type:'dgmn', name: 'ShineGreymon: Burst Mode', no:20, set:'BT13', rarity:'SR', rotation:'02',
    level: 7, colors: ['red','yellow'],
    form: 'Mega', attr: 'Vaccine', traits: ['Light Dragon'],
    dp: 15, cost: 15, evoCost: [5],
    effect: ["-"],
    inherit: ["-"]}, // 20
]
