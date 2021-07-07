$(document).ready(function () {
  $("#start").click(function () {
    circles.setWidth(parseInt($("#width")[0].value));
    circles.setGrowth(parseInt($("#growth")[0].value));
    circles.setInterval(parseInt($("#interval")[0].value));
    circles.setNumber(parseInt($("#number")[0].value));

    for (let i = 0; i < circles.getNumber(); i++)
      buildCircle(
        circles.getWidth(),
        circles.getGrowth(),
        circles.getInterval(),
        i
      );
  });
});
class Circle {
  getWidth() {
    return this.width;
  }
  setWidth(width) {
    this.width = width;
  }
  getGrowth() {
    return this.growth;
  }
  setGrowth(growth) {
    this.growth = growth;
  }
  getInterval() {
    return this.interval;
  }
  setInterval(interval) {
    this.interval = interval;
  }
  getNumber() {
    return this.number;
  }
  setNumber(number) {
    this.number = number;
  }
}

const circles = new Circle();

$(".circle").click(function () {
  circle.hide();
});

let extender = (myCircle, growth) => {
  myCircle.css({
    width: parseInt(myCircle.css("width")) + growth + "px",
    height: parseInt(myCircle.css("height")) + growth + "px",
  });
};

let buildCircle = (width, growth, interval, id) => {
  let myCircle = $("<div>", {
    id: "circle" + id++,
    class: "circle",
  });

  myCircle
    .css("width", width)
    .css("height", width)
    .css("left", id + Math.floor(Math.random() * 85) + "%")
    .css("top", id + Math.floor(Math.random() * 85) + "%")
    .css(
      "background-color",
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`
    )
    .click(() => {
      myCircle.remove();
    });

  $(".circle-container").prepend(myCircle);
  let extenderInterval = setInterval(extender, interval, myCircle, growth);
  myCircle.click(() => {
    clearInterval(extenderInterval);
  });
};
