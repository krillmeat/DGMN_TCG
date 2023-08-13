export const BT9 = [
  {},{},{},{},{},{},{},{},{},{},
  {},{},{},{},{},{},{},{},{},{},
  {},{},{},{},{},{},{},{},{},{},
  {},{},{},{},{},{},{},{},{},{},
  { type:'dgmn', name: 'RizeGreymon (X Antibody)', no:41, set:'BT9', rarity:'R',
    level: 5, colors: ['yellow','red'],
    form: 'Ultimate', attr: 'Vaccine', traits: ['Cyborg','X Antibody'],
    dp: 8, cost: 8, evoCost: {value: 4, colors: ['yellow','red']},
    effect: ["<<When Digivolving>> You may play 1 yellow or red Tamer card from your","hand without paying its memory cost. Then, if [RizeGreymon] or ","[X Antibody] is in this Digimon's digivolution cards, 1 of your opponent's","Digimon gets -2000 DP for the turn for each yellow or red Tamer you have in","play.","<<Your Turn>> For each Tamer you have in play, this Digimon gets +1000 DP."],
    inherit: ["-"],
    specEvo: "Digivolve: 1 from [RizeGreymon]",
    modClasses: ['name-cnd-1','effect-sm-1','effect-cnd-1','effect-six-lines']
  },
  {},{},{},{},{},{},{},{},{}, // 50
  {},{},{},{},{},{},{},{},{},{},
  {},{},{},{},{},{},{},{},{},{},
  {},{},{},{},{},{},{},{},{},{},
  {},{},{},{},{},{},{},{},{},{},
  {},
  { type:'tamer', name: 'Cool Boy', no:92, set:'BT9', rarity:'R',
    colors: ['white'],
    traits: [],
    cost: 2,
    effect: ["<<On Play>> Reveal the top 3 cards of your deck. Add 1 Digimon card with","[X Antibody] in its traits and 1 Option card with [X Antibody] in its traits among","them to your hand. Place the rest at the bottom of your deck in any order.","<<Your Turn>> When one of your Digimon digivolves into a same-level Digimon","with [X Antibody] in its traits, you may suspend this Tamer to gain 1"," memory and <<Draw 1>>."],
    inherit: ["<<Security>> Play this card without paying its","memory cost."],
    special: ["cnd-3","txt-sm-2","lead-sm-2"/*,"full-art"*/]
  },{},{},{},{},{},{},{},{}, // 100
  {},{},{},{},{},{},{},{},{},{},
  {},
  { type:'dgmn', name: 'DeathXmon', no:112, set:'BT9', rarity:'SEC',
    level: 7, colors: ['purple','black'],
    form: 'Mega', attr: 'Virus', traits: ['Unanalyzable/X Program'],
    dp: 15, cost: 20, evoCost: [6,6],
    effect: ["When you would play this card, reduce its memory cost by 3 for each","Digimon and Tamer your opponent has in play.","<<On Play>> <<When Digivolving>> <<De-Digivolve 1>> all of your opponent's","Digimon. Then, delete all of your opponent's level 4 or lower Digimon.","<<End of Opponent's Turn>> <<Once Per Turn>> Delete all of your","opponent's Digimon with the lowest play cost."],
    inherit: [],
    special: ["cnd-2","txt-sm-1","lead-sm-1"]},
]