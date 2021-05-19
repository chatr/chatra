<img width="100" height="100" align="right"
     alt="Chatra logo" src="https://app.chatra.io/static/win-tile.png" />

# Chatra Client

This client loads Chatra widget and passes methods to the [Javascript API](https://chatra.com/help/api/?utm_source=npm&utm_medium=readme&utm_campaign=npm#methods).

The Key Features:

- Easy integration to your website or web app
- The package works perfectly with React, Angular, Vue, and other frameworks
- The client uses ES5, so it doesn’t require any dependencies.

:triangular_flag_on_post: Check our website [Installation guides](https://chatra.com/help/cms/?utm_source=npm&utm_medium=readme&utm_campaign=npm) for popular e-commerce and content management systems.

## Installation

To add the chat widget to your website or web app, [sign up with Chatra](https://app.chatra.io/?utm_source=npm&utm_medium=readme&utm_campaign=npm).

If you already have an account, install the package using your favorite package manager:

```bash
$ npm install chatra-widget --save
```

## Configuration

Step 1. Go to the [Chat Widget section](https://app.chatra.io/settings/integrations/widget/?utm_source=npm&utm_medium=readme&utm_campaign=npm) of your Chatra dashboard in another browser tab and copy the ChatraID parameter from the widget code. The parameter looks like this: ChatraID = "XXXXXXXXXXXXXXXXX", where XXXXXXXXXXXXXXXXX is what you need to copy.

Step 2. Initialize the widget in your index.js or root controller

__index.js__
```js
let Chatra = require('chatra-client')

let config = {
    chatraID: 'Paste your ChatraID here'
}

Chatra('init', config)
```

:triangular_flag_on_post: You can customize the chat and button appearance, localization and lots of another settings by passing `setup` to the initialization config. Please check [Javascript API](https://chatra.com/help/api/?utm_source=npm&utm_medium=readme&utm_campaign=npm#api-reference) for the details.

__index.js__
```js
let config = {
    chatraID: 'Paste your ChatraID here',
    setup: {
        buttonSize: 75
    }
}
```

Step 3 _(optional)_. Call `PageView` to enable [Targeted chats & triggers](https://app.chatra.io/settings/actions/?utm_source=npm&utm_medium=readme&utm_campaign=npm)

If your website or web app loads pages dynamically and updates the document’s URL without requiring a full page load, add the following method to track these views and see them in the Chatra dashboard:

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

If you have any questions feel free to [contact us](hello@chatra.com).