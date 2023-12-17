const lib=require('../lib');
const db=require('../db');
const mail=require('../mail');
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

describe('registerUser',()=>{
  it(' should throw exception for falsy value',()=>{
    const args=[null,NaN,false,'',undefined];
    args.forEach(a=>{
      expect(()=>{lib.registerUser(a)}).toThrow();
    });
  });
  it(' should return user object',()=>{
    const result=lib.registerUser('jass');
    expect(result).toMatchObject({username:'jass'});
    expect(result.id).toBeGreaterThan(0);
  });
});

describe('applyDiscount',()=>{
  it("should give 10% discount if customer has more than 10 points",()=>{
    db.getCustomerSync=function(customerId){
      console.log('Fake reading...');
      return{id:customerId,points:20}
    }
    const order={id:1,totalPrice:10};
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
describe('notifyCustomer',()=>{
  it("should send email to customer",()=>
  {
    db.getCustomerSync=jest.fn().mockReturnValue({email:'a'});
    /*db.getCustomerSync=function(customerId){
      return {email:'a'};
    }*/
    
    mail.send=jest.fn();
    /*let emailSent=false;
    mail.send=function({email,message}){
    emailSent=true;
    }*/
    lib.notifyCustomer({customerId:1});
 
    expect(mail.send).toHaveBeenCalled();
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);

    //expect(emailSent).toBe(true);

  });
});