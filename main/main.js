module.exports = function main(distance,waitTime) {
    let money;
    if(distance <= 2){
        money = 6 + waitTime*0.25;
    }else if(distance <= 8){
        money = 6 + (distance - 2)*0.8 + waitTime*0.25;
    }else{
        money = 6 + 6*0.8 + (distance - 8)*1.2 + waitTime*0.25;
    }
    console.log(money);
    return Math.round(money);
};