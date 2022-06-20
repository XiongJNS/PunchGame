<template>
	<view class="content">
		<div>这是帮助页面</div>

	</view>
	<view>
		<swiper class="helpBox" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">this is helpA</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">this is helpB</view>
			</swiper-item>
		</swiper>
	</view>

</template>

<script>
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.helpBox {
		background-color: yellow;
		height: 70vh;
		width: 100vw;
	}
</style>
