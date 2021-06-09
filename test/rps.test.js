const fs = require('fs');

window.document.body.innerHTML = fs.readFileSync('./index.html');
const functions = require('../scripts/rock-paper-scissors');

describe('Rock Paper Scissors', () => {
  it('Computer hand selection randomness', () => {
    let rockCount = 0;
    let paperCount = 0;
    let scissorsCount = 0;
    let result;
    const loopCount = 10000;

    for (let i = 0; i < loopCount; i++) {
      result = functions.computerPlay();
      result === 'Rock' ? rockCount++ : (rockCount += 0);
    }

    const handPercent = (rockCount / loopCount) * 100;
    expect(handPercent).toBeGreaterThanOrEqual(28);
    expect(handPercent).toBeLessThanOrEqual(38);
  });
});
