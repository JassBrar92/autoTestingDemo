const lib=require('../lib');
describe('absulate',()=>{
  it("should be positive number if input is positive number",()=>{
    const result=lib.absolute(1);
    expect(result).toBe(1);
    });
    
    it("should be positive number if input is negative number",()=>{
      const result=lib.absolute(-1);
      expect(result).toBe(1);
      });
    
    it("should be 0 if input is 0",()=>{
      const result=lib.absolute(0);
      expect(result).toBe(0);
     });      
});

describe("greet",()=>{
  it('it should be greeting message',()=>{
    const result=lib.greet("Jass");
    //expect(result).toMatch('Welcome Jass');
    expect(result).toContain('Welcome Jass');
  });
});

describe('getcurrencies',()=>{
  it(" should contain all available currencies",()=>{
    const result=lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(['EUR','USD','AUD']));
  });
});

describe('getProducts',()=>{
  it(' should contain object with id and price properties',()=>{
    const result=lib.getProduct(1);
    //expect(result).toEqual({id:1, price:10});
    expect(result).toMatchObject({id:1, price:10});
    //expect(result).toHaveProperty('id',1);
  });
});
