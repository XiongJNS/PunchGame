<template>
	<view class="content">
		<view class="BattleArea">
			view
		</view>
	</view>
</template>

<script>
	import A from '@/pages/js/PVE.js';
	A.init();
	A.update();
</script>

<style>
	.BattleArea {
		height: 85vh;
		width: 80vw;
		margin: 2vw;
		border: 1px solid transparent;
		background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0/.6em .6em;
		animation: ants 12s linear infinite;
	}
</style>
