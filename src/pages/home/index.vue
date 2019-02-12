<template>
    <div class="home-container">
        <!-- <h1>homeContainer</h1> -->
        <mt-swipe :auto="4000" class="banner">
            <mt-swipe-item v-for= "(item, index) of bannerList" :key="index">
                <a :href="item.url"><img :src="item.img" alt=""></a>
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="@/assets/menu1.png" alt="">
		        <div class="mui-media-body">新闻资讯</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="@/assets/menu2.png" alt="">		       
		        <div class="mui-media-body">图片分享</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="@/assets/menu3.png" alt="">
		        <div class="mui-media-body">商品购买</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="@/assets/menu4.png" alt="">
		        <div class="mui-media-body">留言反馈</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="@/assets/menu5.png" alt="">

		        <div class="mui-media-body">视频专区</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="@/assets/menu6.png" alt="">

		        <div class="mui-media-body">联系我们</div></a>
            </li>
		</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bannerList: []
        }
    },
    created (){
        this.getBanner();
    },
    methods: {
        getBanner() {
            this.$http.get('http://www.lovegf.cn:8899/api/getlunbo').then(result => {
                console.log(result.body)
                this.bannerList = result.body.message
            })
        }
    }
}
</script>

<style lang="less">
    .home-container{
        color: red;
        .banner{
            height: 200px;
            img{
                width:100%;
                height: 100%;
            }
        }
        .mui-grid-view {
            background-color: #fff;
            .mui-media{
                border: none;
                img{
                    width: 80%;
                    height: 80%;
                }
                div{
                    font-size: 14px!important;
                    color: #666!important;
                }
            }
        }
    }
</style>