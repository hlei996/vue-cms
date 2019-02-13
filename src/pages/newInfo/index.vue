<template>
    <div class="newInfo-container">
        <h1 class="title">{{newInfo.title}}</h1>
        <p class="subTitle">
            <span>发表时间：{{newInfo.add_time | dateFormat}}</span>
            <span>点击: {{newInfo.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="newInfo.content"></div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            id: this.$route.params.id,
            newInfo: []
        }
    },
    created(){
        this.getNewInfo();
    },
    methods: {
        getNewInfo(){
            this.$http.get('getnew/'+this.id).then(result => {
                this.newInfo = result.body.message[0];
            })
        }
    }
}
</script>


<style lang="less">
    .newInfo-container{
        padding: 0 5px;
        .title{
            text-align: center;
            font-size: 16px;
            color: red;
            margin: 10px 0;
        }
        .subTitle{
            display: flex;
            justify-content: space-between
        }
    }
</style>
