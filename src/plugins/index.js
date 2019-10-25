const requireComponent = require.context('./', true, /\.vue$/)

const install = (Vue) =>{
	if(install.installed) return
	install.installed
	requireComponent.keys().map(component => {
		// 拿到组件
		const config = requireComponent(component)
		// 拿到组件名
		const componentName = config.default.name
		// 注册组件
		Vue.component(componentName, config.default || config)
	})
}

export default {
	install
}
