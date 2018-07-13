var checkbox = $("#telemetry-on");
var telemetryFeedback = $("#telemetrySection");
var serialOutputSection = $("#serialOutputSection");

var serialOutputExpand = "col-sm-12 col-md-12 col-lg-12 fadeInLeft";
var serialOutputShrink = "col-sm-12 col-md-12 col-lg-5";

console.log("Does this work??");

checkbox.on("click", function() {
  if ($(this).is(":checked")) {
    //Telemetry Feedback will show
    //Serial output should have class of col-sm-12, col-md-12, col-lg-5

    console.log("Telemetry Feedback appears");

    telemetryFeedback.show();
    telemetryFeedback.find("input").attr("required", true);

    serialOutputSection
      .removeClass(serialOutputExpand)
      .addClass(serialOutputShrink);
  } else {
    //Telemetry Feedback will hide
    //Serial Output should have class of col-sm-12, col-md-12, col-lg-12

    console.log("Telemetry Feedback hides");

    telemetryFeedback.hide();
    telemetryFeedback.find("input").attr("required", false);

    serialOutputSection
      .removeClass(serialOutputShrink)
      .addClass(serialOutputExpand);
  }
});
