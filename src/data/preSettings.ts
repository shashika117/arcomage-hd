/**
 * Pre-settings, i.e. taverns
 * (including 6 castles in Enroth that are
 *  not in the original game but added here for fun)
 */

import { ContinentsType, SettingsType } from '../types/state'

export const preSettings: SettingsType[] = [
  {
    // continent: 7,
    // name: 'On The House',
    // location: 'Harmondale',
    tower: 15,
    wall: 5,
    brickProd: 2,
    gemProd: 2,
    recruitProd: 2,
    bricks: 10,
    gems: 10,
    recruits: 10,
    winTower: 30,
    winResource: 100,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: "Griffin's Rest",
    // location: 'Erathia',
    tower: 20,
    wall: 5,
    brickProd: 2,
    gemProd: 2,
    recruitProd: 2,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 50,
    winResource: 150,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'Emerald Inn',
    // location: 'Tularean Forest',
    tower: 20,
    wall: 6,
    brickProd: 2,
    gemProd: 2,
    recruitProd: 2,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 50,
    winResource: 150,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'Snobbish Goblin',
    // location: 'Deyja',
    tower: 25,
    wall: 10,
    brickProd: 3,
    gemProd: 3,
    recruitProd: 3,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 75,
    winResource: 200,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'Familiar Place',
    // location: 'Bracada Desert',
    tower: 20,
    wall: 10,
    brickProd: 3,
    gemProd: 3,
    recruitProd: 3,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 75,
    winResource: 200,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'The Blessed Brew',
    // location: 'Celeste',
    tower: 30,
    wall: 15,
    brickProd: 4,
    gemProd: 4,
    recruitProd: 4,
    bricks: 10,
    gems: 10,
    recruits: 10,
    winTower: 100,
    winResource: 300,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'The Vampyre Lounge',
    // location: 'The Pit',
    tower: 30,
    wall: 16,
    brickProd: 4,
    gemProd: 4,
    recruitProd: 4,
    bricks: 10,
    gems: 10,
    recruits: 10,
    winTower: 100,
    winResource: 300,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'The Laughing Monk',
    // location: 'Evermorn Island',
    tower: 20,
    wall: 10,
    brickProd: 5,
    gemProd: 5,
    recruitProd: 5,
    bricks: 25,
    gems: 25,
    recruits: 25,
    winTower: 150,
    winResource: 400,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: "Fortune's Folly",
    // location: 'Nighon',
    tower: 20,
    wall: 10,
    brickProd: 1,
    gemProd: 1,
    recruitProd: 1,
    bricks: 15,
    gems: 15,
    recruits: 15,
    winTower: 200,
    winResource: 500,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: "Miner's Only",
    // location: 'Barrow Downs',
    tower: 20,
    wall: 50,
    brickProd: 1,
    gemProd: 1,
    recruitProd: 5,
    bricks: 5,
    gems: 5,
    recruits: 25,
    winTower: 100,
    winResource: 300,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'The Loyal Mercenary',
    // location: 'Tidewater',
    tower: 10,
    wall: 20,
    brickProd: 3,
    gemProd: 1,
    recruitProd: 2,
    bricks: 15,
    gems: 5,
    recruits: 10,
    winTower: 125,
    winResource: 350,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: 'The Potted Pixie',
    // location: 'Avlee',
    tower: 10,
    wall: 22,
    brickProd: 3,
    gemProd: 1,
    recruitProd: 2,
    bricks: 15,
    gems: 5,
    recruits: 10,
    winTower: 125,
    winResource: 350,
    cardsInHand: 5,
  },
  {
    // continent: 7,
    // name: "Grogg's Grog",
    // location: 'Stone City',
    tower: 50,
    wall: 50,
    brickProd: 5,
    gemProd: 3,
    recruitProd: 5,
    bricks: 20,
    gems: 10,
    recruits: 20,
    winTower: 100,
    winResource: 300,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: 'The Grog and Grub',
    // location: 'Dagger Wound Island',
    tower: 15,
    wall: 4,
    brickProd: 2,
    gemProd: 2,
    recruitProd: 2,
    bricks: 10,
    gems: 10,
    recruits: 10,
    winTower: 30,
    winResource: 100,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: "Kessel's Kantina",
    // location: 'Ravenshore',
    tower: 20,
    wall: 4,
    brickProd: 2,
    gemProd: 2,
    recruitProd: 2,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 50,
    winResource: 150,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: 'Profit House',
    // location: 'Alvar',
    tower: 20,
    wall: 3,
    brickProd: 2,
    gemProd: 2,
    recruitProd: 2,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 50,
    winResource: 150,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: 'Parched Throat',
    // location: 'Ironsand Desert',
    tower: 25,
    wall: 8,
    brickProd: 3,
    gemProd: 3,
    recruitProd: 3,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 75,
    winResource: 200,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: "Dragon's Blood Inn",
    // location: 'Garrote Gorge',
    tower: 20,
    wall: 8,
    brickProd: 3,
    gemProd: 3,
    recruitProd: 3,
    bricks: 5,
    gems: 5,
    recruits: 5,
    winTower: 75,
    winResource: 200,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: 'Black Company',
    // location: 'Shadowspire',
    tower: 30,
    wall: 14,
    brickProd: 4,
    gemProd: 4,
    recruitProd: 4,
    bricks: 10,
    gems: 10,
    recruits: 10,
    winTower: 100,
    winResource: 300,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: "Traveler's Rest",
    // location: 'Murmurwoods',
    tower: 30,
    wall: 12,
    brickProd: 4,
    gemProd: 4,
    recruitProd: 4,
    bricks: 10,
    gems: 10,
    recruits: 10,
    winTower: 100,
    winResource: 300,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: "Bull's Eye Inn",
    // location: 'Ravage Roaming',
    tower: 20,
    wall: 8,
    brickProd: 5,
    gemProd: 5,
    recruitProd: 5,
    bricks: 25,
    gems: 25,
    recruits: 25,
    winTower: 150,
    winResource: 400,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: "Pirate's Rest",
    // location: 'Regna',
    tower: 20,
    wall: 8,
    brickProd: 1,
    gemProd: 1,
    recruitProd: 1,
    bricks: 15,
    gems: 15,
    recruits: 15,
    winTower: 200,
    winResource: 500,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: 'The Dancing Ogre',
    // location: 'Ravenshore',
    tower: 20,
    wall: 45,
    brickProd: 1,
    gemProd: 1,
    recruitProd: 5,
    bricks: 5,
    gems: 5,
    recruits: 25,
    winTower: 100,
    winResource: 300,
    cardsInHand: 5,
  },
  {
    // continent: 8,
    // name: "Miho's Roadhouse",
    // location: 'Alvar',
    tower: 10,
    wall: 18,
    brickProd: 3,
    gemProd: 1,
    recruitProd: 2,
    bricks: 15,
    gems: 5,
    recruits: 10,
    winTower: 125,
    winResource: 350,
    cardsInHand: 5,
  },
  {
    // continent: 6,
    // name: 'Lord Osric Temper',
    // location: 'Free Haven',
    tower: 25,
    wall: 30,
    brickProd: 4,
    gemProd: 4,
    recruitProd: 4,
    bricks: 10,
    gems: 10,
    recruits: 10,
    winTower: 175,
    winResource: 500,
    cardsInHand: 6,
  },
  {
    // continent: 6,
    // name: 'Lord Anthony Stone',
    // location: 'Frozen Highlands',
    tower: 40,
    wall: 40,
    brickProd: 5,
    gemProd: 5,
    recruitProd: 2,
    bricks: 20,
    gems: 25,
    recruits: 10,
    winTower: 125,
    winResource: 450,
    cardsInHand: 4,
  },
  {
    // continent: 6,
    // name: 'Lord Erik von Stromgard',
    // location: 'Frozen Highlands',
    tower: 30,
    wall: 50,
    brickProd: 1,
    gemProd: 1,
    recruitProd: 5,
    bricks: 5,
    gems: 5,
    recruits: 30,
    winTower: 150,
    winResource: 500,
    cardsInHand: 4,
  },
  {
    // continent: 6,
    // name: 'Lady Loretta Fleise',
    // location: 'Silver Cove',
    tower: 10,
    wall: 10,
    brickProd: 1,
    gemProd: 1,
    recruitProd: 1,
    bricks: 0,
    gems: 0,
    recruits: 0,
    winTower: 125,
    winResource: 250,
    cardsInHand: 3,
  },
  {
    // continent: 6,
    // name: 'Lord Albert Newton',
    // location: 'Misty Islands',
    tower: 55,
    wall: 0,
    brickProd: 1,
    gemProd: 6,
    recruitProd: 1,
    bricks: 5,
    gems: 40,
    recruits: 5,
    winTower: 200,
    winResource: 600,
    cardsInHand: 4,
  },
  {
    // continent: 6,
    // name: 'Prince Nicolai Ironfist',
    // location: 'Castle Ironfist',
    tower: 60,
    wall: 60,
    brickProd: 5,
    gemProd: 5,
    recruitProd: 5,
    bricks: 25,
    gems: 25,
    recruits: 25,
    winTower: 250,
    winResource: 750,
    cardsInHand: 7,
  },
]

export const continents: ContinentsType = [
  { c: 7, count: 13 },
  { c: 8, count: 11 },
  { c: 6, count: 6 },
]
