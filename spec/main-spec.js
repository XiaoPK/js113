const main = require('../main/main');

describe('taxi fee', function () {
    it('when the way is <= 2',function(){
        let distance = 1.5,waitTime = 0;
        let result = main(distance,waitTime);
        expect(result).toEqule(6);
    });

    it('whe the distance is 2-8',function(){
        let distance = 8,waitTime = 1;
        let result = main(distance,waitTime);
        expect(result).toEqule(11);
    })

    it('when the distance is > 8',function(){
        let distance = 10,waitTime = 1;
        let result = main(distance,waitTime);
        expect(result).toEqule(13);
    })
});
