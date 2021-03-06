const fs = require('fs');
const { expect } = require('chai');

const genKiCad = require('../src/kicad');

describe('KiCad', () => {
  it('does something', () => {
    const layout = fs.readFileSync('fixtures/elevate.json', 'utf8');
    const arr = genKiCad(layout, { gap: 5, x: 20, y: 20 });
    fs.writeFileSync('output/new.sch', arr[0]);
    fs.writeFileSync('output/new.kicad_pcb', arr[1]);
  });
})
