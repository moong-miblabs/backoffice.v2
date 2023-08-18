# Backoffice v2
## Nice Admin by Bootstraps 5
## Vue 3 (Composition Api) + Vue Router + Pinia + Vite

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Theme Base : Nice Admin by Bootstrap 5

### Depedencies Include

1. NPM Packeges
	1. @vuepic/vue-datepicker
	2. axios
	3. dateformat (@/helper/dateformat.js) for import use `import * as dateFormat from '@/helper/dateformat'`
	4. pinia
		1. pinia-plugin-persistedstate
	5. sweetalert2
	6. vue
	7. vue-loading-overlay
	8. vue-router
	9. vuelidate (@vuelidate/core @vuelidate/validators)
2. Vendor from Theme Nice Admin
	1. Bootstrap 5
	2. Icon
		1. Bootstrap Icons
		2. Remix Icons
		3. Boxicons
	3. Chart
		1. Chart.js
		2. ApexCharts
		3. ECharts
3. Downloaded libraries
	1. DataTables with JQuery
	2. font awesome 4

### Note

1. `src/constant.js` as enviroment, you can copy from `src/constant.js.example`
2. /node_modules/axios/lib/defaults/index.js change as below to accept all response status
```js
validateStatus: function validateStatus(status) {
	return true;
	// return status >= 200 && status < 300;
},
```