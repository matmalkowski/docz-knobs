[![NPM](https://img.shields.io/npm/v/docz-knobs.svg)](https://www.npmjs.com/package/docz-knobs)
[![build](https://travis-ci.org/matmalkowski/docz-knobs.svg?branch=master)](https://travis-ci.org/matmalkowski/docz-)

# 🎛 docz-knobs

> Knobs component set to use with your docz based documents!

[Docz](https://www.docz.site/) is a great `MDX` based framework for documenting your libraries and projects. With this simple `Knobs` component it enables even more features as in renders helper knobs/switches for your component to make the demo even more rebust and accessible! is a

## 🛠 Install

```bash
yarn add docz-knobs

npm install --save docz-knobs
```

## 📟 Usage

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

![Example Image](https://i.imgur.com/yrAUDKC.png)

For complex types you need to specify available values with options prop.

## License

MIT © [matmalkowski](https://github.com/matmalkowski)
