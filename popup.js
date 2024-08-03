// popup.js
document.getElementById("start").addEventListener("click", () => {
  const minutes = parseInt(document.getElementById("minutes").value);
  if (!isNaN(minutes) && minutes > 0) {
    startPomodoro(minutes);
    document.getElementById(
      "message"
    ).innerText = `Pomodoro Timer started for ${minutes} minutes.`;
  } else {
    document.getElementById("message").innerText =
      "Please enter a valid number of minutes.";
  }
});

function startPomodoro(minutes) {
  console.log(`Pomodoro Timer started for ${minutes} minutes.`);
  setTimeout(
    () => {
      console.log("Pomodoro Timer completed!");
      alert("Pomodoro Timer completed!");
    },
    minutes * 60 * 1000
  );
}
