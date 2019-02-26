var makeGrandmaDancer = function (top, left, timeBetweenSteps){
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.removeClass("dancer");
    this.$node.addClass('cabbage');
};

makeGrandmaDancer.prototype = Object.create(makeDancer.prototype)
makeGrandmaDancer.prototype.constructor = makeGrandmaDancer;

makeGrandmaDancer.prototype.step = function () {
    makeDancer.prototype.step.call(this)
    this.$node.toggle();
}