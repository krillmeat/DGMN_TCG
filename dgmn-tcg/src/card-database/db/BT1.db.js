export const BT1 = [
  { type:'egg', name:'Yokomon', no:1, set:'BT1', rarity: 'R',
    level: 2, colors: ['red'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<When Attacking>> When you attack an opponent's","Digimon, this Digimon gets +1000 DP for the ","turn"]},
  { type:'egg', name:'Bebydomon', no:2, set:'BT1', rarity: 'R',
    level: 2, colors: ['red'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<Your Turn>> While this Digimon has <<Piercing>>, it","gets +2000 DP."]},
  { type:'egg', name:'Upamon', no:3, set:'BT1', rarity: 'R',
    level: 2, colors: ['blue'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<When Attacking>> <<Once Per Turn>> If your opponent","has a Digimon with no digivolution cards in","play, trigger <<Draw 1>>."]},
  { type:'egg', name:'Wanyamon', no:4, set:'BT1', rarity: 'R',
    level: 2, colors: ['blue'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<Your Turn>> While your opponent has 2 or more","Digimon with no digivolution cards in play, this","Digimon gets +2000 DP."]},
  { type:'egg', name:'Kyaromon', no:5, set:'BT1', rarity: 'R',
    level: 2, colors: ['yellow'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<Your Turn>> While you have 6 or more security","cards, this Digimon gets +2000 DP."]},
  { type:'egg', name:'Cupimon', no:6, set:'BT1', rarity: 'R',
    level: 2, colors: ['yellow'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<When Attacking>> If you have 5 or more security","cards, trigger <<Draw 1>>."]},
  { type:'egg', name:'Tanemon', no:7, set:'BT1', rarity: 'R',
    level: 2, colors: ['green'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<When Attacking>> If you've digivolved this turn,","this Digimon gets +1000 DP for the turn."]},
  { type:'egg', name:'Frimon', no:8, set:'BT1', rarity: 'R',
    level: 2, colors: ['green'],
    form: 'In-Training', traits: ['Lesser'],
    inherit: ["<<Your Turn>> While your opponent has 2 or more","suspended Digimon in play, this Digimon gets","+2000 DP."]},



  { type:'dgmn', name: 'Monodramon', no:9, set:'BT1', rarity:'C',
    level: 3, colors: ['red'],
    form: 'Rookie', attr: 'Vaccine', traits: ['Mini-Dragon'],
    dp: 3, cost: 2, evoCost: [0],
    effect: [],
    inherit: ["-"]},
  { type:'dgmn', name: 'Agumon', no:10, set:'BT1', rarity:'R',
    level: 3, colors: ['red'],
    form: 'Rookie', attr: 'Vaccine', traits: ['Reptile'],
    dp: 2, cost: 3, evoCost: [0],
    effect: ["<<On Play>> Reveal 5 cards from the top of your deck. Add 1","Tamer cards among them to your hand. Place the","remaining cards at the bottom of your deck in any order."],
    inherit: ["-"]},
  { type:'dgmn', name: 'Agumon Expert', no:11, set:'BT1', rarity:'C',
    level: 3, colors: ['red'],
    form: 'Rookie', attr: 'Vaccine', traits: ['Dinosaur'],
    dp: 1, cost: 3, evoCost: [0],
    effect: ["<<On Play>> Return 1 Digimon card with [Agumon] in its","name from your trash to your hand."],
    inherit: ["-"]},
  { type:'dgmn', name: 'Biyomon', no:12, set:'BT1', rarity:'U',
    level: 3, colors: ['red'],
    form: 'Rookie', attr: 'Vaccine', traits: ['Bird'],
    dp: 2, cost: 3, evoCost: [0],
    effect: [],
    inherit: ["<<Your Turn>> When this Digimon is blocked, it gets","+2000 DP."]},
  { type:'dgmn', name: 'Muchomon', no:13, set:'BT1', rarity:'C',
    level: 3, colors: ['red'],
    form: 'Rookie', attr: 'Data', traits: ['Avian'],
    dp: 5, cost: 3, evoCost: [1],
    effect: [],
    inherit: ["-"]},
  { type:'dgmn', name: 'Kokatorimon', no:14, set:'BT1', rarity:'C',
    level: 4, colors: ['red'],
    form: 'Champion', attr: 'Data', traits: ['Giant Bird'],
    dp: 4, cost: 3, evoCost: [2],
    effect: [],
    inherit: ["-"]},
  { type:'dgmn', name: 'Greymon', no:15, set:'BT1', rarity:'U',
    level: 4, colors: ['red'],
    form: 'Champion', attr: 'Vaccine', traits: ['Dinosaur'],
    dp: 4, cost: 4, evoCost: [2],
    effect: [],
    inherit: ["<<Your Turn>> This Digimon gets +2000 DP."]},
  { type:'dgmn', name: 'Tyrannomon', no:16, set:'BT1', rarity:'R',
    level: 4, colors: ['red'],
    form: 'Champion', attr: 'Data', traits: ['Dinosaur'],
    dp: 4, cost: 4, evoCost: [2],
    effect: ["<<Jamming>>"],
    inherit: ["-"]},
  { type:'dgmn', name: 'Birdramon', no:17, set:'BT1', rarity:'U',
    level: 4, colors: ['red'],
    form: 'Champion', attr: 'Vaccine', traits: ['Giant Bird'],
    dp: 4, cost: 4, evoCost: [2],
    effect: ["<<On Play>> 1 of your Digimon gains <<Security Attack +1>>."],
    inherit: ["-"]},
  { type:'dgmn', name: 'Flarerizamon', no:18, set:'BT1', rarity:'C',
    level: 4, colors: ['red'],
    form: 'Champion', attr: 'Data', traits: ['Fire Dragon'],
    dp: 4, cost: 5, evoCost: [2],
    effect: ["<<Your Turn>> While you have 3 or more memory, this","Digimon gains <<Security Attack +1>>."],
    inherit: ["-"]},
  { type:'dgmn', name: 'DarkTyrannomon', no:19, set:'BT1', rarity:'C',
    level: 4, colors: ['red'],
    form: 'Champion', attr: 'Virus', traits: ['Dinosaur'],
    dp: 6, cost: 6, evoCost: [1],
    effect: [],
    inherit: ["-"]},
  { type:'dgmn', name: 'Groundramon', no:20, set:'BT1', rarity:'U',
    level: 5, colors: ['red'],
    form: 'Ultimate', attr: 'Virus', traits: ['Earth Dragon'],
    dp: 6, cost: 5, evoCost: [2],
    effect: [],
    inherit: ["-"]},
  { type:'dgmn', name: 'MetalGreymon', no:21, set:'BT1', rarity:'U',
    level: 5, colors: ['red'],
    form: 'Ultimate', attr: 'Vaccine', traits: ['Cyborg'],
    dp: 7, cost: 6, evoCost: [3],
    effect: ["<<When Attacking>> Gain 3 memory. At end of turn, lose 3","memory"],
    inherit: ["-"]},
  { type:'dgmn', name: 'Garudamon', no:22, set:'BT1', rarity:'SR',
    level: 5, colors: ['red'],
    form: 'Ultimate', attr: 'Vaccine', traits: ['Birdkin'],
    dp: 7, cost: 7, evoCost: [3],
    effect: ["<<Piercing>>"],
    inherit: ["<<Your Turn>> When this Digimon is blocked,","trigger <<Draw 1>>."]},
  { type:'dgmn', name: 'SkullGreymon', no:23, set:'BT1', rarity:'R',
    level: 5, colors: ['red'],
    form: 'Ultimate', attr: 'Virus', traits: ['Undead'],
    dp: 7, cost: 7, evoCost: [3],
    effect: ["<<On Play>> Delete 1 of your opponent's Digimon with","<<Blocker>>."],
    inherit: ["-"]},
  { type:'dgmn', name: 'MetalTyrannomon', no:24, set:'BT1', rarity:'C',
    level: 5, colors: ['red'],
    form: 'Ultimate', attr: 'Virus', traits: ['Cyborg'],
    dp: 10, cost: 7, evoCost: [3],
    effect: [],
    inherit: ["-"]},
  { type:'dgmn', name: 'WarGreymon', no:25, set:'BT1', rarity:'SR',
    level: 6, colors: ['red'],
    form: 'Mega', attr: 'Vaccine', traits: ['Dragonkin'],
    dp: 11, cost: 12, evoCost: [3],
    effect: ["<<When Digivolving>> This Digimon gains <<Security Attack +1>>","for the turn.","<<Your Turn>> This Digimon doesn't activate <<Security>> skills","on Option cards it checks."],
    inherit: [],
    special: ["no-inherit"]},
  { type:'dgmn', name: 'Breakdramon', no:26, set:'BT1', rarity:'U',
    level: 6, colors: ['red'],
    form: 'Mega', attr: 'Virus', traits: ['Machine Dragon'],
    dp: 11, cost: 12, evoCost: [3],
    effect: ["<<Piercing>>"],
    inherit: [],
    special: ["no-inherit"]},
  {},{},{},{}, // 30
  {},{},{},{},{},{},{},{},{},{}, // 40
  {},{},{},{},{},{},{},{},{},{}, // 50
  {},{},{},{},{},{},{},{},{},{}, // 60
  {},{},{},{},{},{},{},{},{},{}, // 70
  {},{},{},{},{},{},{},{},{},{}, // 80
  {},{},{},{},{},{},
  
  { type:'tamer', name: 'T.K. Takaishi', no:87, set:'BT1', rarity:'R',
    colors: ['yellow'],
    traits: [],
    cost: 4,
    effect: ["<<Start of Your Turn>> If you have 2 or less memory, set your","memory to 3.","<<On Play>> Look at your security stack, then reveal 1 card in it and","add it to your hand. If that card is yellow, trigger","<<Recovery +1 ≪Deck≫>>."],
    inherit: ["<<Security>> Play this card without paying the cost."],
    modClasses:['effect-sm-1']},
  {},
  {
    type:'tamer', name:'Mimi Tachikawa', no: 89, set: 'BT1', rarity: 'R',
    colors: ['green'],
    traits: [],
    cost: 4,
    effect:["<<Start of Your Turn>> If you have 2 or less memory, set your","memory to 3.","<<Main>> If you have a level 5 or higher green Digimon in play, you","can suspend this Tamer to hatch 1 Digi-Egg card to an empty","space in your breeding area, or move 1 level 3 or higher Digimon","from your breeding area to your battle area."],
    inherit: ["<<Security>> Play this card without paying its","memory cost."],
    special: ['condensed-card-effect']
  },{}, // 90
  {},{},{},{},{},{},{},{},{},{}, // 100
  {},{},{},{},{},{},{},{},{},{}, // 110
  {},{} // 112
]