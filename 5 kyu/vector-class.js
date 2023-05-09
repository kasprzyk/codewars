class Vector {
    constructor(components){
       this.vector = components;
     }
     
     add ({vector}) {
       if(vector.length != this.vector.length){
         throw new Error()
       }
       return new Vector (this.vector.map((element, i)=>
         element + vector[i]
       ))
     }
     
     equals ({vector}) {
       return this.vector.every((val, i) => val == vector[i]);
     }
     
     subtract({vector}){
       if(vector.length != this.vector.length){
         throw new Error()
       }
       return new Vector (this.vector.map((element, i)=>
         element - vector[i]
       ))
     }
     
     dot({vector}){
      if (this.vector.length !== vector.length) throw new Error();
   
       return this.vector.reduce((a, b, i) => a + b * vector[i], 0);
     }
     
     norm() {
       return Math.hypot(...this.vector);
     }
     
     toString() {
       return `(${this.vector})`;
     }
     
   }