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

var makeReichstagDancer = function (top, left, timeBetweenSteps) {
    makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node.removeClass("dancer")
    this.$node.addClass("reichstag")
}

makeReichstagDancer.prototype = Object.create(makeDancer.prototype);
makeReichstagDancer.prototype.constructor = makeReichstagDancer;

makeReichstagDancer.prototype.step = function () {
    makeDancer.prototype.step.call(this);
    this.$node.toggle();
}

