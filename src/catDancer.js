// var makeTechnoDancer = function (top, left, timeBetweenSteps) {
//     makeDancer.call(this, top, left, timeBetweenSteps);
//     this.$node.removeClass("dancer")
//     this.$node.addClass("merkel")
// }

// makeTechnoDancer.prototype = Object.create(makeDancer.prototype);
// makeTechnoDancer.prototype.constructor = makeTechnoDancer;

// makeTechnoDancer.prototype.step = function () {
//     makeDancer.prototype.step.call(this);
//     this.$node.toggle();

//     // var styleSettings = {
//     //     border: "30px solid white"
//     // };
//     // this.$node.css(styleSettings);
// }

var makeCatDancer = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.removeClass("dancer")
    this.$node.addClass("Cat")
}

makeCatDancer.prototype = Object.create(makeDancer.prototype);
makeCatDancer.prototype.constructor = makeCatDancer;

makeCatDancer.prototype.step = function () {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
}

