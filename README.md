# docz-knobs

> Knobs component set to use with your docz based documents!

[![NPM](https://img.shields.io/npm/v/docz-knobs.svg)](https://www.npmjs.com/package/docz-knobs)

## Install

```bash
yarn add docz-knobs

npm install --save docz-knobs
```

## Usage

Simply wrap your component in MDX file with the `Knobs` component.

```tsx
import * as React from "react";
import Knobs from "docz-knobs";

import { Button } from "./Button";

<Knobs
  options={{
    scale: ["small", "normal", "big"],
    kind: ["primary", "secondary", "cancel", "dark", "gray"]
  }}
>
  <Button>Click me</Button>
</Knobs>;
```

For complex types you need to specify available values with options prop.

## License

MIT © [matmalkowski](https://github.com/matmalkowski)
