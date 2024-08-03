let sessionLength = 25 * 60; // Default session length in seconds
let breakLength = 5 * 60; // Default break length in seconds
let timer; // Timer variable
let isSession = true; // Track if it's a session or break
let timeLeft = sessionLength; // Time left in the current session/break

// Update the timer display
function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  $("#timer-display").val(
    `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
  );
}

// Start the timer
function startTimer() {
  if (timer) return; // Prevent multiple timers
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (isSession) {
        timeLeft = breakLength; // Switch to break
        isSession = false;
        $("#snd-endofbreak")[0].play(); // Play break sound
      } else {
        timeLeft = sessionLength; // Switch back to session
        isSession = true;
        $("#snd-endofsession")[0].play(); // Play session sound
      }
      updateDisplay(); // Update the display after switching
      timer = null; // Reset the timer variable
    }
  }, 1000);
}

// Reset the timer
function resetTimer() {
  clearInterval(timer);
  timer = null; // Clear timer variable
  timeLeft = sessionLength; // Reset to session length
  updateDisplay();
}

// Document ready function
$(document).ready(function () {
  updateDisplay(); // Initialize display

  // Initialize the knobs
  $("#session-length").jqxKnob({
    min: 1,
    max: 60,
    value: 25,
    angleOffset: 0,
    angleRange: 360,
    stopAngle: 180,
    rotation: "clockwise",
    width: 200,
    height: 200,
  });

  $("#break-length").jqxKnob({
    min: 1,
    max: 30,
    value: 5,
    angleOffset: 0,
    angleRange: 360,
    stopAngle: 180,
    rotation: "clockwise",
    width: 200,
    height: 200,
  });

  // Event listeners for knob changes
  $("#session-length").on("input change", function () {
    sessionLength = $(this).val() * 60; // Convert to seconds
    $("#session-value").text($(this).val() + " min");
    resetTimer(); // Reset timer when session length changes
  });

  $("#break-length").on("input change", function () {
    breakLength = $(this).val() * 60; // Convert to seconds
    $("#break-value").text($(this).val() + " min");
  });

  // Event listeners for button clicks
  $("#cmd-go").on("click", startTimer); // Start timer
  $("#cmd-reset").on("click", resetTimer); // Reset timer
});
