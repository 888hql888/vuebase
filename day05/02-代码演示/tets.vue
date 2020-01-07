<template>
    <div class="mybox">
        <h2>这里是vue文件的模板html结构部分</h2>
        <p>这里和之前的指令操作是一模一样的</p>
    </div>
</template>

<script>
export default {
    // 这里就不用再写咯，因为模板已经是默认的上面定义的了
    //template:"#abox"
    data(){
        return {
            msg:"这是一个很寂寞的天"
        }
    },
    methods:{

    },
    updated(){

    },
    created(){

    }
}
</script>

<style>
.mybox{
    border: 2px solid #333;
    padding: 20px;
}
</style>