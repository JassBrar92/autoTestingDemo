const lib=require('../lib');
test("Result should be positive number if input is positive number",()=>{
const result=lib.absolute(1);
expect(result).toBe(1);
});

test("Result should be positive number if input is negative number",()=>{
  const result=lib.absolute(-1);
  expect(result).toBe(1);
  });

test("Result should be 0 if input is 0",()=>{
  const result=lib.absolute(0);
  expect(result).toBe(0);
 });
    
