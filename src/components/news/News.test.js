import data from '../../data.json';

//Numbers
const numItems=data.results.length;
const newsData=data.results;

describe("Number Tests",()=>{
    test('number of items = 20',()=>
    {
      expect(numItems).toBe(20);
    });
    test('number of items to be greater than 20',()=>
    {
      expect(numItems).toBeGreaterThanOrEqual(20);
    });

});

//strings
const dataTest=data.results[0].title;
describe("String Tests",()=>{
    test('There is tech in this title',()=>
    {
      expect(dataTest).toMatch(/tech/);
    });
});
//objects
describe("Object Tests",()=>{
    test('News to have property of thumbnailImage',()=>
    {
      expect(newsData[1].thumbnailImage).not.toHaveProperty('thumbnailImage');
    });
});
