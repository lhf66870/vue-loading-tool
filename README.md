# loading-tool

### 在线体验地址：

​		

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### NPM 使用

```
npm i loading-tool
```

### API：

```
	this.$refs.loading.loadModal(contla,time)
        control:boolean,控制loading显示
        time:number,控制loading展示时间
```



### 使用方式

```
min.js:
    import loading from 'loading-tool'
    import '../node_modules/loading-tool/lib/loading-tool.css'
	 Vue.use(loading)
	 
html:
	<vue-loading ref='loading' />
	
js:
	this.$refs.loading.loadModal(true,3000)
	
```

