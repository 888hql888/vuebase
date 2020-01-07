# Vue框架学习 - 第3天

## 前日反馈

| ***  | 意见或建议                                                   |
| ---- | ------------------------------------------------------------ |
| ***  | 声音太大了**（好的，今天我这个声音小一点，嗓子也受不了咯！）** |
| ***  | 黑马老师一个比一个会讲人生道理（**我觉得，这位同学可以把这种“人生道理”，理解为一种经验分享。作为老师，站在讲台上传授知识，这个无可厚非，教学不敢耽搁。同时呢，作为职场前辈，传授一些个人经验，更多的也是希望同学们少走弯路。俗话说：以铜为镜可以正衣冠、以人为镜可以明得失、以史为镜可以知兴衰，就是这个道理。黑马的老师在教学间隙分享的经验，对很多很多同学以后的工作都有巨大的帮助！这一点是非常肯定的！**） |
| ***  | 难get到老师的点（**我不知道这个get的点是知识点学习呢？还是其他的沟通交流呢？如果是知识点的话，那说明你的基础掌握差距实在实在太大了，咱们班级整体掌握情况是远超其他班级的，就算是不抛弃、不放弃，也不能太多牺牲绝大多数同学的利益，所以，这位同学你一定要自己勤学苦练、多多加油啊！**） |
| ***  | 写作业中，很开心。**（你开心，我也开心！）**                 |
| ***  | 666666666666666666**（你666，我也开心！）**                  |



## 课程回顾

1.  计算属性computed基础使用

>   1.  Vue构造函数传参中和`el、data、methods`平级，声明一个对象`computed：{}`
>   2.  计算属性作为computed对象里面的一个方法，这个方法名就是计算属性
>   3.  这个方法依赖 data 中声明的相关属性
>   4.  这个方法必须return出来一个值
>   5.  使用的时候，方法名和data里面的属性一样使用在 `{{}}、v-bind:` 中
>   6.  计算属性所依赖data中声明的属性有变化的时候，计算属性会自动调用重新计算重新返回新值

2.  vue过滤器如何声明和使用的？

>   1.  Vue构造函数传参中和`el、data、methods、computed`平级，声明一个对象 `filters : {}`
>   2.  过滤器就是filters对象中定义的一个方法，这个方法名就是过滤器
>   3.  过滤器方法需要接收一个参数，参数就是要处理的数据
>   4.  内部处理完毕之后 return 新的值，页面会显示 返回出来的新值
>   5.  使用`{{ 数据 | 过滤器 }}`
>   6.  使用过滤器只是调用了一下 不会修改原始值
>   7.  当调用的的 `数据` 发生变化后，会自动调用这个过滤器方法返回一个新的值

3.  Vue生命周期钩子

>   1.  什么是生命周期？
>
>       一个人从生到死，比如18岁，28岁，比如学前端前和学前端后
>
>   2.  什么是钩子函数？
>
>       钩子函数就是回调函数
>
>   3.  什么是Vue生命周期钩子函数？
>
>       Vue提供给开发者的一系列的回调函数，方便我们添加自定义的逻辑，Vue的生命周期 创建到销毁，重要的节点挂载数据更新
>
>   4.  Vue生命周期钩子函数有哪些？
>
>       从创建到销毁有8个节点，8个事件发现的时候，Vue允许我们用回调函数的形式通知我们
>
>   5.  updated vue生命周期钩子函数是用来干什么的？
>
>       `updated`在数据改变，对应的视图异步更新完成后，会触发`updated`方法.
>
>   6.  如何定义及使用生命周期钩子函数？
>
>       钩子函数就是一个方法，方法名定义和`data，el、methods`是并列的



## 今日课程目标

- 理解Vue在更新Dom时是异步执行的
- 能够说出$nextTick的功能
- 能够使用axios发送get请求
- 能够使用axios发送post请求
- 能够使用vue实现过渡效果
- 能够使用$refs操作DOM
- 理解Vue生命周期钩子函数mounted



##  知心姐姐自动置底（$nextTick实现）

1.  理解Vue在更新Dom时是异步执行的
2.  使用 $nextTick 异步更新DOM

```js
this.$nextTick(()=>{
  $('.content').scrollTop(999999999)
})
```




## 网络请求库axios

1. 什么是axios，axios是用来干什么的？

   > 1. Vue专注于网络请求的一个**轻量**库，就是用来发请求，没有操作DOM的功能
   > 2. 调用方式
   >    1. `axios.get( url ).then( res => {} ).catch( err => {} )`
   >    2. `axios.post( url , data ).then( res => {} ).catch( err => {} )`
   > 3. 注意在成功或者失败时使用箭头函数声明回调函数，确保函数内部this指向当前vue实例对象

2. axios如何使用？

   > 1. 导包 
   >
   > 2. 用包
   >
   >    ``````js
   >axios.get('http://wthrcdn.etouch.cn/weather_mini?city=深圳')
   >         .then(function (response) {
   >           console.log(response);
   >         })
   >         .catch(function (error) {
   >           console.log(error);
   >         })
   >    ``````
   >    
   >       ``````js
   >  axios.post('http://www.tuling123.com/openapi/api', {
   >        key: '7b1cf467c0394dd5b3e49f32663f8b29',
   >    info: '知心姐姐你好美'
   >         })
   >         .then(function (response) {
   >           console.log(response);
   >         })
   >         .catch(function (error) {
   >           console.log(error);
   >         });
   >       ``````
   >    



## 案例：天知道

1. 实现最终效果演示
2. 实现步骤分析
    1. 输入框使用 v-model = "city" 
    2. 点击回车 @keyup.enter 点击按钮 @click = "searchWeather"
    3. 使用axios来发送数据请求
    4. 将请求的数据渲染到页面上
    5. 同步设置相应的动画
3. 代码结构演示
4. 开发过程演示
5. 所用知识及注意事项小结



## Vue单个元素过渡动画

[官方地址](https://cn.vuejs.org/v2/guide/transitions.html#%E5%8D%95%E5%85%83%E7%B4%A0-%E7%BB%84%E4%BB%B6%E7%9A%84%E8%BF%87%E6%B8%A1)

1.  什么叫vue过渡动画？

    >   vue实现动画是配合css中定义好的`css3样式实现的动画`，这种依靠css3实现的动画过程就叫做过渡动画

2.  什么是单个元素过渡动画？

    >   单个元素过渡动画，顾名思义就是将一个html标签包裹起来的元素配合css3实现动画的过程

3.  如何实现单个元素过渡动画？

    >   1.  使用 `transition` 标签将当前元素包裹起来
    >   2.  给 `transition` 标签声明一个name属性
    >   3.  触发时机，使用v-if/v-show切换显示的时候，显示和隐藏的过程配合css3定义好属性进而实现动画
    >
    >   ```html
    >   <transition name="fade">
    >        <img v-show="isShow" src="./img/sister.png" alt="" />
    >   </transition>
    >   ```
    >
    >   4.  我们使用css3定义好一组动画效果
    >
    >   ```css
    >   .fade-enter-active,
    >   .fade-leave-active {
    >        transition: opacity 0.5s;
    >   }
    >   .fade-enter, .fade-leave-to {
    >        opacity: 0;
    >   }
    >   ```
    >
    >   5.  vue在操作`v-if/v-show`的时候，会动态的在不同的时机为需要过渡的动画元素添加6个class，进而配合我们定义好的css3属性实现动画效果
    >
    >   ![Transition Diagram](https://cn.vuejs.org/images/transition.png)
    >
    >   6.  工作中使用动画的频率不高，基本上都是简单动画，直接copy定义好的css3属性后直接修改，复杂动画一般不会交给初级工程师来做，并且这个地方大家切忌不要死记硬背



## Vue列表元素过渡动画

[官方地址](https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E8%BF%87%E6%B8%A1)

1.  什么是列表过渡动画？

    >   列表过渡动画就是使用v-for遍历出来的，配合CSS3，列表在新增和删除的时候会自动调用的动画。

2.  如何实现列表过渡动画？

    >   1.  使用 `transition-group`标签将当前元素包裹起来。
    >   2.  给 `transition-group`标签声明一个name属性和一个tag属性，tag属性会被解析成为一个HTML的标签名。
    >   3.  transition-group包裹的循环生成的结构。
    >       1.  v-for
    >       2.  结合key属性，key的取值：字符串，数字
    >   4.  触发时机，动态的增删元素的，就会触发进入动画，以及移除动画。
    >
    >   ```html
    >   <div id="app">
    >   <button @click="add">添加</button>
    >   <button @click="remove">移除</button>
    >   <!-- 列表动画-->
    >   <transition-group name="fade" tag="ul">
    >     <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    >   </transition-group>
    >   </div>
    >   ```
    >
    >   5.  我们使用css3定义好一组动画效果。
    >
    >   ```css
    >   .fade-enter-active,
    >   .fade-leave-active {
    >     transition: opacity 0.5s;
    >   }
    >   .fade-enter, .fade-leave-to {
    >     opacity: 0;
    >   }
    >   ```
    >
    >   6.  vue在添加或者移除元素的时候，会动态的在不同的时机为需要过渡的动画元素添加6个class，进而配合我们定义好的css3属性实现动画效果
    >
    >   ![Transition Diagram](https://cn.vuejs.org/images/transition.png)
    >
    >   7.  工作中使用过渡动画的频率也不高，大家先学会模仿使用就可以

    

## 案例：天知道 - 整合过渡动画

>   1.  整合动画到搜索天气进入里面去，循环生成的标签用`transition-group`包裹
>       1.  name:list
>       2.  tag:ul
>       3.  动画的样式
>
>   ```css
>   .fade-enter-active,
>   .fade-leave-active {
>        transition: opacity 0.5s;
>   }
>   .fade-enter, .fade-leave-to {
>        opacity: 0;
>   }
>   ```
>
>   2.  第二次没有动画是为什么呢？
>       1.  元素的个数没有变
>       2.  每次查询天气的时候清空数组即可
>   3.  间隔动画
>       1.  使用transition-delay:让每一个元素比上一个的时间晚一些即可
>       2.  v-for的时候，动态的设置transitionDelay的值即可`{transitionDelay:index*50+'ms' }`



## 案例：悦听播放器

[网易云音乐API接口服务](https://autumnfish.cn/)

1.  实现最终效果演示

2.  实现步骤分析

    1.  搜索输入框 v-model = "keyworld"
    2.  点击回车或者点击搜索 @keyup.enter @click = "searchMusics"
    3.  发送axios请求
        1.  接收返回的musicList数据
        2.  将musicList数据渲染到页面上 v-for
        3.  设置列表过渡动画更好的体验效果
    4.  双击单个歌曲实现播放效果  
        1.  @dblclick = "playMusic"
        2.  使用 v-bind:src = "" 动态添加歌曲的地址就能自动播放
    5.  点击播放和暂停的时候
        1.  播放的指针要移动到对应的位置
        2.  播放的磁盘要转动起来

    >   获取搜索歌曲：<https://autumnfish.cn/search?keywords=星月神话>
    >
    >   获取当前歌曲： <https://autumnfish.cn/song/url?id=33894312> 
    >
    >   歌曲封面获取：<https://autumnfish.cn/song/detail?ids=347234> 
    >
    >   获取歌曲评论：<https://autumnfish.cn/comment/hot?type=0&id=186015> 

3.  代码结构演示

4.  开发过程演示

5.  所用知识及注意事项小结

    >   版权问题，企业中，如果要做播放器，一定要考虑版权问题，学习节点，个人玩耍，只要不商用，不盈利，不会涉及侵权



## iScroll平滑滚动插件

1.  iScroll平滑滚动插件是什么？[中文文档](http://caibaojian.com/iscroll-5/)

3.  iScroll滚动插件如何使用？

    >   1.  最外层元素div的高度要固定，给div设置一个高度和一个边框，并设置 `overflow:hidden ` 
    >   2.  导入iScroll这个包
    >   3.  创建一个iScroll对象，参数是最外层的div元素即可
    >   4.  设置一个按钮，动态添加li元素，发现这个时候再进行滚动的时候，新添加的元素无法滑动到底了
    >   5.  需要在动态添加li元素，内容更新了之后需要通过`refresh()`通知库，内容更新了，重新计算尺寸

```html
<script src="./lib/iscroll.js"></script>
<script>
  // 直接获取DOM元素，并作为参数直接传给IScroll
  const wrapper = document.querySelector('#wrapper')
  const myScroll = new IScroll(wrapper)
  // IScroll内置基础选择器功能，直接选择元素即可
  const myScroll = new IScroll('#wrapper')
</script>
```

```js
const myScroll = new IScroll("#wrapper", {
        mouseWheel: true,
        scrollbars: true
})
document.querySelector("button").onclick = function () {
        const li = document.createElement("li");
        li.innerHTML = "我是动态新添加的li元素";
        document.querySelector("ul").appendChild(li);
        myScroll.refresh();
}
```



## Vue生命周期钩子 - mounted

`mounted`生命周期钩子函数如何使用？[生命周期图示](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)

>   1.  声明方法，直接使用`mounted`声明一个函数即可
>   2.  执行时机，vue把内部的data和页面的内容初始化完毕并渲染挂载到页面上之后，自动执行mounted生命周期钩子函数
>   3.  mounted使用频率还是很高的，当我们碰到需要获取Vue解析的页面的DOM元素节点的时候，基本上都会写在这个钩子函数里
>   4.  mounted只会执行一次，就是HTML结构被Vue完全渲染挂载完成后
>   5.  如果data内部的数据发生改变后，DOM被更新后，则需要使用updated这个钩子函数了，updated这个钩子函数会被多次执行



## 使用$refs属性操作DOM

Vue给我们提供了一个专门用来获取DOM节点的方法 ，使用元素的ref属性，使用起来非常方便

>   1.  给要获取的元素添加`ref`属性，名字随便起：有意义即可
>   2.  通过`vue实例.$refs.属性名`即可获取标记的元素，我们在mounted钩子函数中调用可以直接使用this指向当前vue实例，这个才是vue推荐的元素获取方式
>   3.  如果ref重名后面的会吧前面的覆盖



## 播放器歌曲及评论列表平滑滚动优化

>   IScroll平滑滚动插件使用，第一个参数是当前DOM节点，第二个参数是对应的参数 [IScroll基础配置](http://caibaojian.com/iscroll-5/config.html)

```js
this.myScroll = new IScroll('.comment_list', {
    //是否支持鼠标滚动
	mouseWheel: true,
    //是否显示滚动条
	scrollbars: true
})
```



## 课程小结

- 理解Vue在更新Dom时是异步执行的
- 能够说出$nextTick的功能
- 能够使用axios发送get请求
- 能够使用axios发送post请求
- 能够使用vue实现过渡效果
- 能够使用$refs操作DOM
- 理解Vue生命周期钩子函数mounted
