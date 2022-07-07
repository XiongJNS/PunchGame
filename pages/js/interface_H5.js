//适配不同平台封装的接口函数，这里做的是H5端的

function loadStage() {
	console.log('load success!');
}

function saveStage() {
	console.log('save success!');
}

function setStage(){
	console.log('setStage success!');
}


export default {
	loadStage,saveStage,setStage
}