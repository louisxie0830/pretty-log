# Pretty Log

A TypeScript library for enhancing and formatting log messages.

## Features

- Pretty-print log messages in different styles.
- Supports both CommonJS and ES modules.
- Written in TypeScript with type definitions included.
- Easy to use and integrate into any project.

## Installation

You can install directly from GitHub:

```bash
npm install git+https://github.com/louisxie0830/pretty-log.git
```

## Examples

Here are examples of how to import and use this library in different projects:

### CommonJS

```javascript
const prettyLog = require('pretty-log').default;

const logger = prettyLog({ enabled: true });
logger.info('Hello, World!');
logger.error('Hello, World!');
logger.warn('Hello, World!');
logger.success('Hello, World!');
```

### ES Modules

```javascript
import prettyLog from 'pretty-log';

const logger = prettyLog({ enabled: true });
logger.info('Hello, World!');
logger.error('Hello, World!');
logger.warn('Hello, World!');
logger.success('Hello, World!');
```

### TypeScript

```typescript
import prettyLog from 'pretty-log';

const logger = prettyLog({ enabled: true });
logger.info('Hello, World!');
logger.error('Hello, World!');
logger.warn('Hello, World!');
logger.success('Hello, World!');
```

## API

### `prettyLog(options)`

- **options**: An object with the following properties:
  - **enabled**: `boolean` - Enable or disable logging.

#### Methods

- **info(message: string, content?: string)**: Logs an informational message.
- **error(message: string, content?: string)**: Logs an error message.
- **warn(message: string, content?: string)**: Logs a warning message.
- **success(message: string, content?: string)**: Logs a success message.
- **setEnabled(enabled: boolean)**: Enables or disables logging.

## Development

### Building the Project

To build the project, run:

```bash
npm run build
```

This will generate the CommonJS and ES module versions of the library in the `dist` directory.

### Running Tests

To run tests, use:

```bash
npm test
```

This will run the tests using Jest.

### Linting and Formatting

To lint the code, use:

```bash
npm run lint
```

To format the code, use:

```bash
npm run format
```

### Project Structure

- `src/`: Source code files.
- `tests/`: Test files.
- `dist/`: Compiled output files.
- `package.json`: Project metadata and dependencies.
- `tsconfig.json`: TypeScript configuration.
- `tsconfig.cjs.json`: TypeScript configuration for CommonJS modules.
- `tsconfig.esm.json`: TypeScript configuration for ES modules.
- `jest.config.js`: Jest configuration.
- `.eslintrc.json`: ESLint configuration.
- `.prettierrc`: Prettier configuration.
- `.prettierignore`: Files ignored by Prettier.
- `.eslintignore`: Files ignored by ESLint.
- `.gitignore`: Files ignored by Git.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Author: Nil Xie  
Email: bfgh2678@gmail.com  
GitHub: [louisxie0830](https://github.com/louisxie0830)
