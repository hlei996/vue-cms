<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第1楼  用户：匿名用户  发表时间：2019-02-13 19:26:32</div>
                <div class="cmt-body">前端23期湖北*王</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    
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
