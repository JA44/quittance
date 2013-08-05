var number2letter = (function(){
    var convertHundred = function(number){
        if (number > 100) {
            
        }
        
    }
    
    var convertUnity = function(number, suffixe) {
        if (arguments.length === 1) {
            suffixe = false;
        }
        switch(number){
            case 1:
                return ((suffixe) ? '-et-': '') + 'un';
            case 2:
                return ((suffixe) ? ' ' : '') + 'deux';
            case 3:
                return ((suffixe) ? ' ' : '') + 'trois';
            case 4:
                return ((suffixe) ? ' ' : '') + 'quatre';
            case 5:
                return ((suffixe) ? ' ' : '') + 'cinq';
            case 6:
                return ((suffixe) ? ' ' : '') + 'siz';
            case 7:
                return ((suffixe) ? ' ' : '') + 'sept';
            case 8:
                return ((suffixe) ? ' ' : '') + 'huit';
            case 9:
                return ((suffixe) ? ' ' : '') + 'neuf';
            case 0:
                return '';
        }
    }
    
    var convertThousand = function(number) {
        var thousand = Math.floor(number / 100);
        var decade = convertDecade(number % 100);
        if(thousand === 0){
            return decade;
        }
        
        var plurial = thousand > 1;
        var sThousant = 'cent';
        
        if (plurial && decade != '') {
            sThousant += 's';
        }
        
        thousand = convertDecade(thousand);
        return (decade != '') ? thousand + ' ' + sThousant + ' '+ decade : thousand + ' ' + sThousant; 
    }
    
    var convertDecade = function(number) {
        var decade = '';
        if (number >= 90) {
            decade = 'quatre-vingt';
            return decade + convertUnity(number - 90);
        }
        if (number >= 80) {
            decade = 'quatre-vingt';
            return decade + convertUnity(number - 80);
        }
        if (number >= 70) {
            decade = 'soixante-dix';
            return decade + convertUnity(number - 70);
        }
        if (number >= 60) {
            decade = 'soixante';
            return decade + convertUnity(number - 60, true);
        }

        if (number >= 50) {
            decade = 'cinquante';
            return decade + convertUnity(number - 50, true);
        }
        
        if (number >= 40) {
            decade = 'quarante';
            return decade + convertUnity(number - 40, true);
        }
        
        if (number >= 30) {
            decade = 'trente';
            return decade + convertUnity(number - 30, true);
        }
        
        if (number >= 20) {
            decade = 'vingt';
            return decade + convertUnity(number - 20, true);
        }
        
        if (number >= 17) {
            decade = 'dix-';
            return decade + convertUnity(number - 10);
        }
        
        if (number > 10) {
            switch(number % 10){
               case 1:
                return 'onze';
            case 2:
                return 'douze';
            case 3:
                return 'treize';
            case 4:
                return 'quatorze';
            case 5:
                return 'quize';
            case 6:
                return 'seize'; 
            }
        }
        if(number == 10) return 'dix';
        return convertUnity(number);
    }
    this.convert = function (number){
        return convertThousand(number);
    }
    return this;  
})();
