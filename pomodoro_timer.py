import time


def pomodoro_timer(minutes):
    print("Pomodoro Timer started for {} minutes.".format(minutes))
    time.sleep(minutes * 60)
    print("Pomodoro Timer completed!")


# Example usage
pomodoro_timer(25)
