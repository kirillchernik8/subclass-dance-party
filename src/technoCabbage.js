var makeCabbageDancer = function (top, left, timeBetweenSteps){
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.removeClass("dancer");
    this.$node.addClass('cabbage');
};

makeCabbageDancer.prototype = Object.create(makeDancer.prototype)
makeCabbageDancer.prototype.constructor = makeCabbageDancer;

makeCabbageDancer.prototype.step = function () {
    makeDancer.prototype.step.call(this)
    this.$node.toggle();
}