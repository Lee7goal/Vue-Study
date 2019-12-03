
const one = new Vue({
    //元素开头
    el:'#vue-app-1',
    data:{
        name:'我是容器一',
        age:28,
        male:'male',
        hobby:['guitar', 'program','music','computer game']
    },
    methods:{

    },
    computed:{
        greet(){
            return this.hobby
        }
    }
});

const two = new Vue({
    //元素开头
    el:'#vue-app-2',
    data:{
        name:'我是容器二',
        dailyTalk:'hello 米斯特李'
    },
    methods:{
        changeTitleOne(){
            one.name = '改变成功'
        }
    },
    computed:{
        greet(){
            return this.dailyTalk
        }
    }
});

two.t