
const { toMatchImageSnapshot } = require('jest-image-snapshot');
var wkhtmltoimage = require('wkhtmltoimage')

expect.extend({ toMatchImageSnapshot });

const html = '<html><body><h1>My First and last Heading</h1><p>My first paragraph.</p></body></html>'

it('compare async', () => {
   var stream = wkhtmltoimage(html);
    
   stream.on('data', (data) => {
       // needs to be png buffer instead of jpg buffer wkhtmltoimage has a -f command with output format but it seems to return empty cmd wkhtmltoimage works see test-slow.js
       expect(data).toMatchImageSnapshot();
   });

});