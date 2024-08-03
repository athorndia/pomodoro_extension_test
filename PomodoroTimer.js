function startPomodoro(minutes) {
  console.log(`Pomodoro Timer started for ${minutes} minutes.`);
  setTimeout(
    () => {
      console.log("Pomodoro Timer completed!");
    },
    minutes * 60 * 1000
  );
}

// Example usage
startPomodoro(25);
