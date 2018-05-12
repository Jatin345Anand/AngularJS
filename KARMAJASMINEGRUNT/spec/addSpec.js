describe("AddTestSuite",function(){
     //test suite
     //   it(); 1.test suit
     //   it(); 2.test suit 
     it("should be add two numbers",function(){
        var expected=30;
        var result = add(10,20);
        expect(result).toBe(expected);
     });
     it("should be add two string numbers",function(){
         var expected =30;
         var result = add("10","20");
         expect(result).toBe(expected);
     });
});