<template>
    <div>
        这是新闻详情页----{{id}}
    </div>
</template>

<script>
export default {
    data (){
        return {
            id: this.$route.params.id
        }
    },
    created(){
    },
    methods: {

    }
}
</script>
