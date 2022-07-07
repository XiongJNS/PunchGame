import H5 from "./interface_H5.js"


const Card={
	getEnergy:{
		name:"集气",
		type:'r',
		cost:-1,
		atk:0,
		def:0,
		effect:function(){
			
		}
	},
	woodAtk:{
		name:"木剑",
		type:'a',
		cost:1,
		atk:1,
		def:0,
		effect:function(){		
		}
	},
	woodDef:{
		name:"木盾",
		type:"d",
		cost:0,
		atk:0,
		def:1,
		effect:function(){
		}
	}
	
	
}

function init() {
	H5.loadStage();
	console.log('init success!');
}

function update() {
	console.log('update success!');
	
	
}

function test(){
	//console.log(GameFlagState.GameState);
}

export default {
	init,update,Card,test
}
