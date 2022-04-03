interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map(item => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map(r => r.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 20,
  },
  {
    name: 'Pikachu',
    hp: 25,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
