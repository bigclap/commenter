import App from './App.svelte';

const target = document.createElement('div');
document.body.appendChild(target);

const app = new App({
	target,
	props: {
		name: 'world'
	}
});

chrome.runtime.onConnect.addListener(() => {

})

export default app;
