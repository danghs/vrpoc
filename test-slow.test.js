
const { toMatchImageSnapshot } = require('jest-image-snapshot');
var cmd=require('node-cmd');
var fs=require('fs');

expect.extend({ toMatchImageSnapshot });

it('compare', () => {
   cmd.get('wkhtmltoimage -f png ./test.html image-to-compare.png');
   //poc sometimes above command wont finish before below 
   var imageToCompare = fs.readFileSync('image-to-compare.png');
   expect(imageToCompare).toMatchImageSnapshot();

});