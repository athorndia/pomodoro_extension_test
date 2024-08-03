$(document).ready(function () {
  $("container").jqxKnob({
    value: 60,
    min: 0,
    max: 120,
    startAngle: 120,
    endAngle: 420,
    snapToStep: true,
    rotation: "clockwise",
    // size: 150, // Adjust this value to make the knob smaller or larger
    style: {
      stroke: "#dfe3e9",
      strokeWidth: 3,
      fill: {
        color: "#fefefe",
        gradientType: "linear",
        gradientStops: [
          [0, 1],
          [50, 0.9],
          [100, 1],
        ],
      },
    },
    marks: {
      colorRemaining: { color: "grey", border: "grey" },
      colorProgress: { color: "#00a4e1", border: "#00a4e1" },
      type: "line",
      offset: "71%",
      thickness: 3,
      size: "6%",
      majorSize: "9%",
      majorInterval: 10,
      minorInterval: 2,
    },
    labels: {
      offset: "88%",
      step: 10,
      visible: true,
    },
    progressBar: {
      style: { fill: "#00a4e1", stroke: "grey" },
      size: "9%",
      offset: "60%",
      background: { fill: "grey", stroke: "grey" },
    },
    pointer: {
      type: "arrow",
      style: { fill: "#00a4e1", stroke: "grey" },
      size: "59%",
      offset: "49%",
      thickness: 20,
    },
  });

  var input = $('<div class="inputField">');

  $("container").append(input);
  var inputOptions = {
    width: 180,
    height: "40px",
    decimal: 60, // starting value same as widget
    min: 0, // same as widget
    max: 100, // same as widget
    textAlign: "center",
    decimalDigits: 1,
    inputMode: "simple",
  };

  $(input).jqxNumberInput(inputOptions);

  $(input).on("mousedown", function (event) {
    event.stopPropagation();
  });

  $(input).on("keyup", function () {
    var val = $(this).val();
    $("#container").val(val);
  });

  $(input).on("change", function () {
    var val = $(this).val();
    $("container").val(val);
  });
  $("container").on("change", function (event) {
    if (
      event.args.changeSource == "propertyChange" ||
      event.args.changeSource == "val"
    ) {
      return;
    }
    $(input).val(event.args.value);
  });
});
