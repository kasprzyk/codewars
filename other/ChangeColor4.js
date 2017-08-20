/**
 * Created by piotr on 20.08.17.
 */
function ChangeColor (tlo) {
    this.element=tlo;
    this.zmiana=0;
    this.start=function(czas){
        this.animacja=setInterval(function (){
            this.zmiana+=1;
            if(this.zmiana%2!==0){this.element.style.backgroundColor='black'}
            else {this.element.style.backgroundColor='white'}

        }.bind(this),czas/2)


    }
    this.stop=function(){clearInterval(this.animacja)}
}
var x=new ChangeColor(document.body)
x.start(3000)
