<template>
	<view class="content">
		<view class="BattleArea">
			<view id="EnemyStateArea">
				血量:{{state.Enemy.hp}} 能量：{{state.Enemy.energy}}
			</view>
			<view id="EnemyBoxArea">

			</view>

			<view id="MainArea">

			</view>

			<view id="PlayerBoxArea">

			</view>

			<view id="PlayerStateArea">
				血量:{{state.Player.hp}} 能量：{{state.Player.energy}}
			</view>

			<view id="FixHandArea">

			</view>

			<view id="SwiperArea">

			</view>
			<view id="TestArea">
				{{GameFlagState.GameState}}
			</view>
		</view>
	</view>
</template>

<script>
	import A from '@/pages/js/PVE.js';
	export default {
		data() {
			return {
				GameFlagState: {
					GameOver: false,
					GameState: "ready",
				},
				state: {
					Player: {
						hp: 1,
						energy: 0,
						items: []
					},
					Enemy: {
						hp: 1,
						energy: 0,
						item: []
					}
				}
			}
		},
		onLoad() {

		},
		mounted: function() {
			this.$nextTick(() => {
				this.Start();
			})
		},
		methods: {
			Start() {

				A.init();
			//	var Timer=setInterval(()=>{A.update()},50);
			}
		}

	}
</script>



<style>
	@import url("@/pages/css/PVE.css");
</style>
