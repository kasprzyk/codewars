/**
 * Created by piotr on 20.08.17.
 */
function zmiana(tlo) {
    this.COLORS_RANGE = 255;
    this.element = tlo;
    this.colorPartial = 0;
    this.animateForward = true;
}

zmiana.prototype.start = function (czas) {
    this.animationIntervalId = setInterval(function () {
        var partial = this.colorPartial;
        this.element.style.backgroundColor = 'rgb(' + partial + ',' + partial + ',' + partial + ')';

        this.colorPartial += (this.animateForward === true ? 1 : -1);

        if (this.colorPartial > this.COLORS_RANGE) {
            this.colorPartial = this.COLORS_RANGE;
            this.animateForward = false;
        }

        if (this.colorPartial < 0) {
            this.colorPartial = 0;
            this.animateForward = true;
        }

    }.bind(this), czas / 100);
}

zmiana.prototype.stop = function () {
    clearInterval(this.animationIntervalId);
}

var anim = new zmiana(document.body);
anim.start(3000);