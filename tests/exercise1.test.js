const exercise1=require('../exercise1');
describe('fizzbuzz',()=>{
  it("it should return exception if input is not a number",()=>{
    expect(()=>{exercise1.fizzBuzz('a')}).toThrow();
  });
  it("it should return FizzBuzz if input is not divisible  by  3 and 5",()=>{
    const result=exercise1.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });
  it("it should return Fizz if input is only divisible by 3",()=>{
    const result=exercise1.fizzBuzz(3);
    expect(result).toBe('Fizz');
  });
  it("it should return Buzz if input is only divisible by 5",()=>{
    const result=exercise1.fizzBuzz(5);
    expect(result).toBe('Buzz');
  });
  it("it should return input if input is not divisible by 3 and 5",()=>{
    const result=exercise1.fizzBuzz(1);
    expect(result).toBe(1);
  });
});
