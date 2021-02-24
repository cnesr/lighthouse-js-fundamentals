const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  const pos = [0, 0];

  for (const move of moves) {
    const x = 0;
    const y = 0;
    if (move === 'west') {
      pos[0] -= 1;
    } else if (move === 'east') {
      pos[0] += 1;
    } else if (move === 'north') {
      pos[1] += 1;
    } else if (move === 'south') {
      pos[1] -= 1;
    }
  }
  return pos;
}

finalPosition(moves);