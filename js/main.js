/*jshint browser: true*/
//var lomakkeet = document.querySelectorAll('form');

var lomake = document.querySelector('form');

var validoi = function (evt) {
    // resetoidaan kenttien värit:
    // valitse kaikki input elementit
    // silmukan sisällä poista style-attribuutti
    // removeAttribute()

    // valitse kentät joissa on required-attribuutti
    var rKentat = document.querySelectorAll('input[required]');
    // käy kentät läpi for-silmukalla
    for (var i = 0; i < rKentat.length; i++) {
        // jos kentän value-attribuutti on tyhjä
        if (rKentat[i].value.length === 0) {
            evt.preventDefault();
            // lisää kentän ympärille punainen border
            rKentat[i].style.border = '1px red solid';
        }
    }

    // valitse kentät joissa on pattern-attribuutti
    var pKentat = document.querySelectorAll('input[pattern]');
    // käy kentät läpi for-silmukalla
    for (var j = 0; j < pKentat.length; j++) {
        // hae pattern-attribuutin arvo ja tee siitä säännöllinen lauseke
        var pattern = new RegExp(pKentat[j].pattern);
        console.log(pattern);
        // exec()-funktiolla voi testata säännöllisiä lausekkeita
        // jos kentän value ei ole patternin mukainen
        if (pattern.exec(pKentat[j].value) === null) {
            evt.preventDefault();
            // lisää kentän ympärille punainen border
            pKentat[j].style.border = '1px red solid';
        }
    }
};

lomake.addEventListener('submit', validoi);
