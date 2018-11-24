const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const args = minimist(process.argv.slice(2), {
  alias: {
    name: 'n',
  }
});

const componentName = args.name;

fs.mkdirSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName)
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
  `export default from './${componentName}';`,
);

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.sass`),
  `.${componentName}`,
);

const componentCode = `import './${componentName}.sass';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class ${componentName} extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="${componentName}"></div>
    )
  }
}`;

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
  componentCode,
);
