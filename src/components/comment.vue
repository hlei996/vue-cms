<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120" v-model="commentContent"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item"  v-for="(item, index) in comments" :key="index">
                <div class="cmt-title">第{{index + 1}}楼  用户: {{item.user_name}}  发表时间：{{item.add_time | dateFormat}}</div>
                <div class="cmt-body">{{item.content}}</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            comments: [],
            pageIndex: 1,
            commentContent: '',
        }
    },
    created(){
        this.getComments()
    },
    methods: {
        getComments (){
            this.$http.get('getcomments/'+ this.id +'?pageindex=' + this.pageIndex).then(result => {
                if(result.body.status ===0 ){
                    this.comments = [...this.comments,...result.body.message]              
                }
            })
        },
        getMore(){
            this.pageIndex ++
            this.getComments();
        },
        postComment(){
            if(this.commentContent.trim().lenght ===0) {
                return Toast('评论的内容不能为空!!!')
            }
            this.$http.post('postcomment/' + this.id,{content: this.commentContent}).then(result => {
                if(result.body.status === 0){
                    Toast('添加评论成功!!!')
                    this.comments=[];
                    this.pageIndex = 1;
                    this.getComments();
                    this.commentContent = ''
                }
            })
        }
    },
    props: ["id"]
    
}
</script>


<style lang="less">
    .comment-container{
        h3{
            margin: 15px 0 7px;
            font-size: 18px;
        }
        textarea{
            margin-bottom:0;
            height:85px;
            font-size: 14px;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                font-size:14px;
                .cmt-title{
                    background-color: #ccc;
                    height: 60px;
                    line-height: 30px;
                }
                .cmt-body{
                    line-height: 40px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>
