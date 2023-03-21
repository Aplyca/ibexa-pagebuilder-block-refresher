# Description
This module help you refresing the blockspreview in Ibexa admin. You can specific a function to render Vue Components, React Components or anything that you need rendering after edit blocks fields. This module supports Ibexa Platform, Ibexa DXP 3.* and Ibexa DXP 4.*
  
# Considerations
It may seem confusing, but you should install this in your Frontend project or wherever you make use of your Javascript framework. It doesn't matter your version of Vue, React, etc. You just have to make sure that you specify the version of Ibexa that you are using and a fallback function that renders the block in an instance. 

# How can use it?
## 1. Install
```bash

npm i ibexa-pagebuilder-block-refresher

```
## 2. Import
You need to import the module in the same file that you create the framework instance.  Por example in this case we use Vue.js and import it in `src/main.js` 
```bash

import { IbexaPageBuilderBlockRefresher } from  'ibexa-pagebuilder-block-refresher';

```
## 3. Render, and that's all!
In the same file that you create the framework instance, you must call the IbexaPageBuilderBlockRefresher function with two parameters, the first one must be a fallback and the second one the Ibexa version. The supported versions are: `ezplatform`, `3.*` and `4.*`
```bash

IbexaPageBuilderBlockRefresher("3.*", function(blockElement) {
	// Your code
});

``` 
It is recommended that your code be a new instance. Remember that there are no problems if a new instance is created in the same project, since in this case we will use a DOM element `blockElement` that is temporarily generated by Ibexa, here is an example with Vue.JS

```bash
IbexaPageBuilderBlockRefresher("3.*", function(blockElement) {
	// Create a new instance of blockElement div (its a temporary instance in the administrator)
	new Vue({
		el: blockElement
	});
});

```