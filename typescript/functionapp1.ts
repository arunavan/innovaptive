class Account{
  // default param with function
    getEmi(amount :number=5000):void  
    {
    console.log("MonthlyEMI"+amount)
   }
   //optional param with function
   loanDetails(name: string, age?:number) {
       console.log(name+"  "+age);
   }
}
var obj =new Account();
obj.getEmi();
obj.getEmi(10000);
obj.loanDetails("ram",30);
obj.loanDetails("ravi");



