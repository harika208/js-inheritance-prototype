//1Q
const parent={
    calc(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}
const child1=Object.create(parent);
child1.firstname="Harika";
child1.lastname="Hamsa";
child1.calc();
const child2=Object.create(child1);
child2.firstname="Jyothi"
child2.calc();
//Output:
//Harika Hamsa
//Jyothi Hamsa


//2Q

const obj = {
    a: 1,
    b: 2,
    d: 8,
    __proto__: {
      b: 3,
      c: 4,
      __proto____proto__:{
        b:5,
        d:6,
      }
    },
  };
  console.log(obj.a);
  console.log(obj.b);
  console.log(obj.c);
  console.log(obj.d);
  //Output:
  //1
  //2
  //4
  //8

// 3Q.
const Addsum={
    add:function(a){
        let sum=0;
        for(let i=0;i<a.length;i++){
            sum=sum+a[i];
        }
        console.log(sum);
    }
 }
 Addsum.add([1,2,3,4,5]);

 //4Q.
 const obj1 = {
    a: 1,
    toString(){
       return `[object obj1]`;
    }
   
  };
  
  console.log(Object.getOwnPropertyNames(obj1));
  obj1.toString();

// output:
//  ['a', 'toString']