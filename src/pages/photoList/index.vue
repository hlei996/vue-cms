<template>
  <div>
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a :class="['mui-control-item',{'mui-active':item.id === 0}]" v-for="item in imgCategories" :key="item.id" @click="getImages(item.id)">{{item.title}}</a>
      </div>
    </div>
    <ul class="image-list">
        <router-link v-for="(item) in images" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
            <img :src="item.img_url" alt="">
            <div class="info">
                <h3 class="info-title">{{item.title}}</h3>
                <div v-html="item.zhaiyao" class="info-body"></div>
            </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "@/lib/mui/js/mui.js";
export default {
  data() {
    return {
        imgCategories: [],
        images: []
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created(){
      this.getImgCategory();
      this.getImages(0);
  },
  methods: {
      getImgCategory(){
          this.$http.get('getimgcategory').then(result => {
              if(result.body.status===0){
                  this.imgCategories = result.body.message
                  this.imgCategories.unshift({id: 0, title: '全部'})
              }
          })
      },
      getImages(cateId){
          this.$http.get("getimages/"+ cateId).then(result => {
              if(result.body.status === 0) {
                  this.images = result.body.message;
              }
          })
      }
  }
};
</script>


<style lang="less">
    * {
      touch-action: pan-y;
    }
    .image-list{
        padding: 0 10px;
        margin-top: 10px;
        li{
            margin: 10px 0;
            box-shadow: 0 0 9px #999;
            position: relative;
            word-wrap: break-word;
            overflow: hidden; 
            text-overflow: ellipsis; 
            img{
                width: 100%;
                vertical-align: middle
            }
            .info{
                color: white;
                background-color: rgba(0,0,0,.4);
                position: absolute;
                bottom: 0;
                left: 0;
                max-height: 90px;
                .info-title{
                    font-size:14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }
            
        }
    }
</style>

