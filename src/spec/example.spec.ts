import { Application } from 'spectron';
import assert from 'assert';

const app = new Application({
  path: '/Applications/MyApp.app/Contents/MacOS/MyApp',
});

app
  .start()
  .then(() =>
    // Check if the window is visible
    app.browserWindow.isVisible(),
  )
  .then((isVisible) => {
    // Verify the window is visible
    assert.strictEqual(isVisible, true);
  })
  .then(() =>
    // Get the window's title
    app.client.getTitle(),
  )
  .then((title) => {
    // Verify the window's title
    assert.strictEqual(title, 'My App');
  })
  .then(() =>
    // Stop the application
    app.stop(),
  )
  .catch((error) => {
    // Log any failures
    console.error('Test failed', error.message);
  });
