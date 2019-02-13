<template>
    <div class="newList-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item of newsList" :key="item.id">
                <router-link :to="'/home/newInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <!-- 可以传递参数 -->
                            <span>发表时间: {{item.add_time | dateFormat('YY-MM-DD')}}</span>
                            <span>点击: {{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data (){
        return {
            newsList: []
        }
    },
    created() {
        this.getNewsListData()
    },
    methods: {
        getNewsListData(){
            this.$http.get('getnewslist').then((result) => {
                this.newsList = result.body.message;
            })
        }
    }
}
</script>

<style lang="less">
    .newList-container{
        li{
            h1{
                font-size:14px;
                text-align: center;
            }
            p{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                color: #666;
            }
        }
    }
</style>




