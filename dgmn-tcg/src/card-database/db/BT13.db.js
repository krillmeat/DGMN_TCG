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
    dp: 2, cost: 3, evoCost: {value:1, colors: ['red','yellow']},
    effect: ["<<Main>> <<Once Per Turn>> 1 of your [Marcus Damon] is also","treated as a 3000 DP Digimon for the turn that can't","digivolve."],
    inherit: ["<<Your Turn>> <<Once Per Turn>> When one of your red","or yellow Tamers becomes suspended, you may","delete 1 of your opponent's Digimon with 3000","DP or less."],
    specEvo: "Digivolve: 0 from [Koromon]"
  }
    ,{},{}, // 10
  {},
  { type:'dgmn', name: 'GeoGreymon', no:12, set:'BT13', rarity:'C',
    level: 4, colors: ['red','yellow'],
    form: 'Champion', attr: 'Vaccine', traits: ['Dinosaur'],
    dp: 5, cost: 5, evoCost: {value:3, colors: ['red','yellow']},
    effect: ["<<When Digivolving>> Search your security stack, and you may","play 1 red or yellow Tamer card among it without paying","the cost. If you did, <<Recovery +1 ≪Deck≫>>. Then, shuffle","your security stack."],
    inherit: ["<<Your Turn>> <<Once Per Turn>> When one of your red","or yellow Tamers becomes suspended, you may","delete 1 of your opponent's Digimon with 3000","DP or less."],
    specEvo: "Digivolve: 2 from Lv.3 w/[Agumon] in name and [Dinosaur] trait"},
    {},{},
  { type:'dgmn', name: 'RizeGreymon', no:15, set:'BT13', rarity:'C',
    level: 5, colors: ['red','yellow'],
    form: 'Ultimate', attr: 'Vaccine', traits: ['Cyborg'],
    dp: 7, cost: 7, evoCost: {value:4, colors: ['red','yellow']},
    effect: ["<<When Digivolving>> You may play 1 [Marcus Damon] from","your hand without paying the cost.","<<All Turns>> <<Once Per Turn>> When one of your red or yellow","Tamers is deleted, place 1 [Marcus Damon] from your","trash on top of your security face down."],
    inherit: ["<<All Turns>> <<Once Per Turn>> When one of your red","or yellow Tamers is deleted, place 1","[Marcus Damon] from your trash on top of your","security stack face down."],
    modClasses: ["effect-five-line"],
    specEvo: "Digivolve: 3 from [GeoGreymon]"},
  {},{},
  { type:'dgmn', name: 'ShineGreymon', no:18, set:'BT13', rarity:'R', rotation:'02', 
    level: 6, colors: ['red','yellow'],
    form: 'Mega', attr: 'Vaccine', traits: ['Light Dragon'],
    dp: 12, cost: 12, evoCost: {value:4, colors: ['red','yellow']},
    effect: ["<<Start of Your Main Phase>> <<When Digivolving>> Until the end of","your opponent's turn, 1 of your [Marcus Damon]s is also treated as a ","3000 DP Digimon, can't digivolve, and gains <<Blocker>>.","<<All Turns>> <<Once Per Turn>> When one of your red or yellow","Tamers becomes suspended, 1 of your opponent's Digimon gets","-6000 DP for the turn."],
    inherit: [""],
    modClasses: ["effect-six-line", "effect-cnd-1","effect-sm-1"],
    specEvo: "Digivolve: 3 from Lv.5 w/[RizeGreymon] in name"},
  {}, // 19
  { type:'dgmn', name: 'ShineGreymon: Burst Mode', no:20, set:'BT13', rarity:'SR', rotation:'02',
    level: 7, colors: ['red','yellow'],
    form: 'Mega', attr: 'Vaccine', traits: ['Light Dragon'],
    dp: 15, cost: 15, evoCost: {value:5, colors: ['red','yellow']},
    effect: ["<<When Digivolving>> You may play 1 [Marcus Damon] from your","hand without paying the cost. For the turn, the Tamer played by this","effect is also treated as a 12000 DP Digimon, can't digivolve, and","gains <<Rush>>.","<<Your Turn>> <<Once Per Turn>> When one of your Tamers becomes","suspended, trash the top card of your opponent's security stack."],
    inherit: [""],
    modClasses: ["name-cnd-4", "effect-six-line", "effect-cnd-1","effect-sm-1", "burst-evo"],
    specEvo: "Burst Digivolve: 0 from [ShineGreymon] by returning 1 [Marcus Damon] to hand\n At the end of the burst digivolution turn, trash this Digimon's top card"}, // 20
]
