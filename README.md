# react-popopo

Smart popover component for React. Closes when you click away, no need to reclick the trigger button to close it.

For full docs and demo see https://dapi.github.io/react-popopo/

## Installation

```bash
npm i react-popover -S
```

or 

```bash
yarn add react-popover
```

## Usage

```javascript
import React from 'react';
import Popover from 'react-popopo';

// optional, you can bring your own styles if you want
import '@terebentina/react-popover/lib/styles.css';

class MyComponent extends React.Component {
 render() {
    return (
      <div>
        If you want to see a nice popover 
        <Popover position="bottom" className="awesome" trigger="click me">
          here I am in all my glory!
        </Popover>
      </div>
    );
```

## License

[The MIT License](./LICENSE)

Copyright (c) 2019 Danil Pismenny
Copyright (c) 2016 Dan Caragea
