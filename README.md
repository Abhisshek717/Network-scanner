# Network Scanner

This is a Node.js application that scans for nearby Wi-Fi networks and sorts them by quality. The application uses the `node-wifi` module to scan for networks and the `express` module to create a simple API that returns the list of networks.

## Prerequisites

- Node.js
- `node-wifi` module
- `express` module

## Getting Started

1. Clone the repository or download the code.
2. Install the dependencies by running `npm install`.
3. Run the application using `node index.js`.

## Usage

### Route

The application has one route:

- `/networks`: Returns a list of nearby Wi-Fi networks sorted by quality.

### Interval

The application also sets up an interval to fetch the list of networks every 10 seconds. The list of networks is logged to the console.

## Notes

- The `iface` property of the `wifi.init` options object is set to `null`, which means that a random Wi-Fi interface will be used. If you want to use a specific interface, you can set this property to the name of the interface.
- The `PORT` constant is set to `process.env.PORT || 3000`, which means that the application will listen on the port specified in the `PORT` environment variable (if it exists) or port `3000` by default.


Sure, here's an example of how you can add a "Contributing" section to your README:

## Contributing

We welcome contributions from the community! Here are some ways you can help:

- Report bugs and suggest improvements by creating a [new issue](https://github.com/yourusername/yourproject/issues).
- Contribute code by forking the repository and creating a pull request. Make sure to read our [contribution guidelines](contributing.md) first.
- Spread the word! Tell your friends and colleagues about our project and encourage them to contribute.

Thank you for your interest in contributing to our project!
