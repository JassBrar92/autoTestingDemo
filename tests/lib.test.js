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
