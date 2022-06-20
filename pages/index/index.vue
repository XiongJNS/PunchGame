<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<div class="button" v-on:click="startPVE">开始游戏</div>
		<div class="button" v-on:click="gotoHelp">帮助</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			
		},
		methods: {
			startPVE(){
				uni.navigateTo({
					url:'../PVE'
				})
			},
			gotoHelp(){
				uni.navigateTo({
					url:'../Help'
				})
			}
		}
		
	}
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.button{
		color:red;
		text-align: center;
		border-style: solid;
		border-color: burlywood;
		padding-top: 1.5rem;
		padding-bottom: 2rem;
		height:1rem;
		width:10rem;
		margin:1rem;
	}
</style>
