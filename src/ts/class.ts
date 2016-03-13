class Person {
    constructor(
        private name:string = 'dummy'
    ) {}

    public say():void {
       console.log('Hello, I\'m ' + this.name + '!!');
      //  alert("test");
    }
}
export default Person;