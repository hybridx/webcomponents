# Copyright-x 👋
![Version](https://img.shields.io/badge/version-1.0.2-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/hybridx/webcomponents#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/hybridx/webcomponents/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/hybridx/webcomponents)](https://github.com/hybridx/webcomponents/blob/master/LICENSE)

> A lib for web components(custom components) by hybridx

### ✨ [Demo](https://hybridx.github.io/webcomponents)

## Run tests

```
npm run test
```
## Usage
### Install hybridx webcomponents
- Use npm package manager to install components
```
npm install --save copyright-x
```
- Include component
```
import '@hybridxweb/copyright-x/dist/copyright-x';
```
- Usage
```
<copyright-x></copyright-x>

<copyright-x>
  <span slot="name">hybridX</span>
</copyright-x>

<copyright-x year="2020">
</copyright-x>
```

### To use it in React
```
<script>
require('~/node_modules/@hybridxweb/copyright-x/dist/copyright-x);
</script>

<copyright-x></copyright-x>

<copyright-x>
  <span slot="name">hybridX</span>
</copyright-x>

<copyright-x year="2020">
</copyright-x>
```

### To use it in Angular
- Install and import the component in app.module and add CUSTOM_ELEMENT_SCHEMA
```
import '@hybridxweb/copyright-x/dist/copyright-x';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Using style API
- Pass using css variables 
```
<style>
  copyright-x {
    --fontSize: 1rem;
    --fontColor: #72767B;
  }
</style>
```

## Author

👤 **Deepesh Nair**

* Website: https://hybridx.github.io
* Github: [@hybridx](https://github.com/hybridx)
* LinkedIn: [@Deepesh Nair](https://linkedin.com/in/hybridx)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/hybridx/webcomponents/issues). You can also take a look at the [contributing guide](https://github.com/hybridx/webcomponents/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [Deepesh Nair](https://github.com/hybridx).

This project is [MIT](https://github.com/hybridx/webcomponents/blob/master/LICENSE) licensed.

***

