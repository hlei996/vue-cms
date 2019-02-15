<template>
    <div class="photoinfo-container">
        <h3>{{imageInfo.title}}</h3>
        <p>
            <span>发表时间：{{imageInfo.add_time | dateFormat}}</span>
            <span>点击: {{imageInfo.click}}次</span>
        </p>
        <hr>
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in thumImages" :src="item.src" height="100" @click="$preview.open(index, thumImages)" :key="item.id">
        </div>
        <div v-html="imageInfo.content" class="content"></div>

        <comment :id="id"></comment>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            imageInfo: [],
            thumImages: [],
        }
    },
    created(){
        this.getImageInfo();
        this.getThumImages()
    },
    methods: {
        getImageInfo(){
            this.$http.get('getimageInfo/'+ this.id).then(result => {
                if(result.body.status == 0){
                    this.imageInfo = result.body.message[0]
                }
            })
        },
        getThumImages(){
            this.$http.get("getthumimages/" + this.id).then(result => {
                if(result.body.status === 0) {
                    this.thumImages = result.body.message;
                    this.thumImages.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                    })
                }
            })
        }
    }
}
</script>


<style lang="less">
    .photoinfo-container{
        padding: 0 5px;
        h3{
            text-align: center;
            margin: 15px 0;
            color: blue;
            font-size: 15px;
        }
        p{
            display: flex;
            font-size: 13px;
            justify-content: space-between;
        }
        .content{
            font-size: 14px;
            line-height: 30px;
        }
        .thumbs{
            img{
                margin: 10px;
                width: 130px;
            }
        }
    }
</style>