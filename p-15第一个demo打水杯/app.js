new Vue({
    //元素
    el:'#my-vue',
    data(){
        return {
            // a:5,
            // b:10,
            // age:25,
            // mrChangeColor: false,
            // mrChangeLength: false,
            // error: false,
            // success: true,
            // netButton:'断开网络'
            // tmpList: ['小猪佩奇','黑猫警长','大头儿子','奥力给','老八','大司','宝蓝'],
            // users: [
            //     {
            //         name:'李老八',
            //         says:'奥利给',
            //         liked:'屎',
            //         dailyTalk:'兄弟吃了嘛，一日三餐不能少'
            //     }
            // ]
            health:100,
            ended:false
        }
    },
    methods:{
        punch(){
            this.$message('你朝着水杯发动了致命一击，造成了10点伤害');
            this.health -=10;
            if(this.health <= 0){
                this.$message('水杯君阵亡了，点击修复重来');
                this.ended = true;
            }
        },
        restart() {
            this.$message('你修复了水杯，又可以击打了');
            this.health = 100;
            this.ended = false
        }
        // listen(){
        //     if(this.error === true){
        //         console.log("修复网络链接");
        //         this.netButton = '断开网络';
        //         this.error = false;
        //         this.success = true
        //     } else {
        //         console.log("断开网络链接");
        //         this.netButton = '修复网络';
        //         this.error = true;
        //         this.success = false
        //     }
        //
        // }
        // logName(){
        //     console.log("正在输入名字......")
        // },
        // logAge(){
        //     console.log("正在输入年龄......")
        // }
        // getName() {
        //     this.name = this.$refs.name.value
        // },
        // getAge() {
        //     this.age = this.$refs.age.value
        // }
        // addToA(){
        //     console.log("addToA");
        //     return this.age + this.a
        // },
        // addToB(){
        //     console.log("addToB");
        //     return this.age + this.b
        // }
    },
    watch:{
        // name(val, oldVal){
        //     console.log(val, oldVal)
        // },
        // age(val, oldVal){
        //     console.log(val, oldVal)
        // }
    },
    computed:{

        // addToA(){
        //     console.log("addToA");
        //     return this.age + this.a
        // },
        // addToB(){
        //     console.log("addToB");
        //     return this.age + this.b
        // },
        // compClass(){
        //     return {
        //         ChangeColor:this.mrChangeColor,
        //         ChangeLength:this.mrChangeLength
        //     }
        // }
    }
});
