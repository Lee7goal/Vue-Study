//创建全局变量
//这里的全局变量被改变时所有引用全局变量的位置都会发生改变
let data = {
    title:'我是全局组件的title',
    wechat:'fomous0829'
};



//创建全局组件
Vue.component("Greeting", {
   //html模板
    template:`
    <p>
    这是全局组件可以在任何实例容器中使用<br>
    我的名字是 {{title}}<br>
    我的微信是{{wechat}}
    <button @click="changeTitle">改名</button>
    </p>
    `,
   //属性
    //这里属于全局组件的独立属性，被引用时不会改变其他引用全局组件的属性
    data() {
        return data;
    },
    //方法
    methods:{
        changeTitle() {
            this.title = '我已改名成功'
        }
    }
});


const one = new Vue({
    el:'#vue-one',
    data:{

    },
    methods:{

    },
    computed:{

    },
    watch:{

    }
});

const two = new Vue({
    el:'#vue-two',
    data:{

    },
    methods:{

    },
    computed:{

    },
    watch:{

    }
});