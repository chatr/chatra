:triangular_flag_on_post: **This package is intended for developers.** If you just want to add Chatra to your website, check our [Installation guides](https://chatra.com/help/cms/?utm_source=npm&utm_medium=readme&utm_campaign=npm) for popular e-commerce platforms and content management systems or just [add a small code snippet](https://chatra.com/help/?utm_source=npm&utm_medium=readme&utm_campaign=npm#install) to your website.

<img width="100" height="100" align="right"
     alt="Chatra logo" src="https://app.chatra.io/static/win-tile.png" />

# Official Chatra module

This module loads Chatra widget and passes methods to the [Javascript API](https://chatra.com/help/api/?utm_source=npm&utm_medium=readme&utm_campaign=npm#methods).

Key Features:

- Easy integration with your website or web app
- Works perfectly with React, Angular, Vue, and other frameworks
- Uses ES5, so it doesn’t require any dependencies.


## Installation

To add the chat widget to your website or web app, [sign up with Chatra](https://app.chatra.io/?utm_source=npm&utm_medium=readme&utm_campaign=npm&enroll=).

If you already have an account, install the package using your favorite package manager:

```bash
$ npm install chatra
```

```bash
$ yarn add chatra
```

## Configuration

Step 1. Go to the [Preferences section](https://app.chatra.io/settings/preferences?utm_source=npm&utm_medium=readme&utm_campaign=npm#apiKeys) of your Chatra dashboard in another browser tab and copy the Public key.

Step 2. Initialize the widget in your index.js or root controller

_index.js_
```js
let Chatra = require('chatra')

let config = {
    chatraID: 'Paste your Public key here'
}

Chatra('init', config)
```

:triangular_flag_on_post: You can customize the chat and button appearance, localization and lots of other settings by passing `setup` to the initialization config. Please check the [Javascript API](https://chatra.com/help/api/?utm_source=npm&utm_medium=readme&utm_campaign=npm#api-reference) for details. Also, you can update the settings dynamically by calling `'init'` again.

_index.js_
```js
let config = {
    chatraID: 'Paste your ChatraID here',
    setup: {
        buttonSize: 75
    }
}
```

Step 3 _(optional)_. Call `PageView` to enable [Targeted chats & triggers](https://app.chatra.io/settings/actions/?utm_source=npm&utm_medium=readme&utm_campaign=npm)

If your website or web app loads pages dynamically and updates the document’s URL without requiring a full page load, call the following method whenever the page changes to track these views and see them in the Chatra dashboard:

```js
Chatra('pageView')
```

We recommend to call this method in your router or page controllers.

## Advanced Usage

[Methods](https://chatra.com/help/api/?utm_source=npm&utm_medium=readme&utm_campaign=npm#methods) are used to dynamically change the behavior of the chat widget. Methods can be called anywhere after the widget initialization, for example:

```js
Chatra('expandWidget')
```

All method calls made before Chatra finished loading are put into a queue and executed when Chatra is ready.

## Contact us

If you have any questions feel free to [contact us](https://chatra.com/contact-us/).
