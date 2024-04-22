export interface ChampionData {
  blurb: string;
  id: string;
  image: Image;
  info: Info;
  key: string;
  name: string;
  partype: string;
  stats: Stats;
  tags: string[];
  title: string;
}

export interface SingleChampionData {
  allytips: string[];
  blurb: string;
  enemytips: string[]
  id: string;
  image: Image;
  info: Info;
  key: string;
  lore: string;
  name: string;
  partype: string;
  passive: Passive;
  skins: Spell[];
  spells: [];
  stats: Stats;
  tags: string[];
  title: string;
}

export interface Spell{
  name: string;
  image: { full: string };
  description: string;
  whichIs: string
}

export interface ChampExtraInfo{
  whichIs: string;
  content: string[] | string;
}

export interface Passive {
  name: string;
  image: { full: string };
  description: string
}

export interface ApiReturnData{
  data: any,
  format: string,
  type: string,
  version: string
}

interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}