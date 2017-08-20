/**
 * Created by piotr on 20.08.17.
 */
function ChangeColor (tlo) {
    this.element=tlo;
    this.zmiana=0;
    this.zakres=255;
    this.animuj=true;
    this.start=function(czas){
        this.animacja=setInterval(
            function(){
                var kolor=this.zmiana;
                this.element.style.backgroundColor = 'rgb(' + kolor + ',' + kolor + ',' + kolor + ')';
                this.zmiana += (this.animuj === true ? 1 : -1);
                if(this.zmiana>this.zakres){
                    this.animuj=false;
                    this.zmiana=this.zakres}
                if(this.zmiana<0){
                    this.animuj=true;
                    this.zmiana=0
                }
            }.bind(this),czas/100
        )

    }
    this.stop=clearInterval(this.animacja)
}
var anim=new ChangeColor(document.body);
anim.start(3000);