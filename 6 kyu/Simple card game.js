const  winner = (deckSteve, deckJosh) => {
  const ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
  let stevePoints = 0;
  let joshPoints = 0;
  for(var i = 0; i<deckSteve.length; i++){
    ranks.indexOf(deckSteve[i]) > ranks.indexOf(deckJosh[i]) ? stevePoints ++ : (ranks.indexOf(deckSteve[i]) == ranks.indexOf(deckJosh[i]) ? null : joshPoints++);
  }
  return stevePoints > joshPoints ? `Steve wins ${stevePoints} to ${joshPoints}` : (stevePoints == joshPoints ? 'Tie' : `Josh wins ${joshPoints} to ${stevePoints}`);
}
