# Pomodoro Timer Chrome Extension

## Table of Contents

- [Step 1: Set Up Your Project Folder](#step-1-set-up-your-project-folder)
- [Step 2: Create the Files](#step-2-create-the-files)
- [Step 3: Load the Extension in Chrome](#step-3-load-the-extension-in-chrome)
- [Step 4: Test the Extension](#step-4-test-the-extension)
- [Step 5: Debugging (if needed)](#step-5-debugging-if-needed)
- [Additional Tips](#additional-tips)

## Step 1: Set Up Your Project Folder

1. **Create a New Folder / Create GitHub Repository**:

   - Open your file explorer and create a new folder for your Chrome extension, e.g., `PomodoroTimerExtension`.

2. **Open VS Code**:

   - Launch Visual Studio Code.

3. **Open the Folder in VS Code / Git Clone Repository and Open the Folder**:
   - Go to `File > Open Folder...` and select the folder you just created.

## Step 2: Create the Files

1. **Create the Necessary Files**:

   - Inside the `PomodoroTimerExtension` folder, create the following files:
     - `manifest.json`
     - `background.js`
     - `popup.html`
     - `popup.js`
     - (Optional) An icon file named `icon.png` for your extension.

2. **Copy the Code**:
   - Copy the code snippets provided earlier into their respective files:
     - Paste the `manifest.json` code into `manifest.json`.
     - Paste the `background.js` code into `background.js`.
     - Paste the `popup.html` code into `popup.html`.
     - Paste the `popup.js` code into `popup.js`.

## Step 3: Load the Extension in Chrome

1. **Open Chrome**:

   - Launch Google Chrome.

2. **Go to Extensions Page**:

   - Type `chrome://extensions/` in the address bar and press Enter.

3. **Enable Developer Mode**:

   - In the top right corner, toggle the "Developer mode" switch to turn it on.

4. **Load Unpacked Extension**:
   - Click on the "Load unpacked" button.
   - In the file dialog, select the `PomodoroTimerExtension` folder you created.

## Step 4: Test the Extension

1. **Open the Extension**:

   - You should see your Pomodoro Timer extension icon in the Chrome toolbar.
   - Click on the icon to open the popup.

2. **Use the Timer**:
   - Enter the number of minutes you want for the Pomodoro Timer and click "Start."
   - You should see console messages in the background and an alert when the timer completes.

## Step 5: Debugging (if needed)

1. **View Console Logs**:

   - To see console logs from `background.js`, right-click on the extension icon, select "Inspect," and navigate to the "Console" tab.

2. **Check for Errors**:
   - If something isn't working, check the console for any error messages.

## Additional Tips

- **Editing Files**: You can edit the files directly in VS Code. Changes will take effect after you refresh the extension in Chrome (click the refresh icon on the extensions page).
- **Live Server**: If you want to test the HTML file separately, consider using the Live Server extension in VS Code.

Music / Audio Credit:

1. Downfall 3 (downfall-3-208028.mp3) Sound Effect by <a href="https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=208028">Jurij</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=208028">Pixabay</a>

2. DEEP STRANGE WHOOSH Sound Effect by <a href="https://pixabay.com/users/aiko_changing-30278997/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=183845">Aiko Matsuda</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=183845">Pixabay</a>

3. Countdown Sound Sound Effect by <a href="https://pixabay.com/users/lesiakower-25701529/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=151797">Lesiakower</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=151797">Pixabay</a>

4. Clock Ticking (60 second countdown) Sound Effect by <a href="https://pixabay.com/users/studiokolomna-2073170/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=118231">StudioKolomna</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=118231">Pixabay</a>

![contextmenu](https://github.com/hellopao/view-in-browser/raw/master/./images/contextmenu.png)

![knob](https://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxknob/jquery-knob-getting-started.htm)

https://www.jqwidgets.com/jquery-widgets-documentation/documentation/jqxbutton/jquery-button-getting-started.htm?search=
