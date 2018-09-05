
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    },50)
}

function writemarkDown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 70)
}


var result = `/*
*面试官，您好
*我叫王航
*我将以动画的形式介绍我自己
*
*只用文字的话太无聊了
*那我就以代码的形式介绍吧
*
*接下来让我先来添加一些样式
*/
*{
    margin:0;
    padding:0;
    transition: all 0.5s;
}
html{
    background: #b8b2b7;
    font-size:16px;
}
#code{
    height: 100vh;
    width:30%; 
    border:1px solid #FFF;
    position:fixed;
    left:0;
    padding:16px;
    margin:16px 16px;
}
/*
*哎呀，马上要出现滚动条了，我们把它干掉吧！
*/
::-webkit-scrollbar {display:none}
#code{
    overflow-y: scroll;
}

/*
*接下来我们把代码高亮一下吧
*/
#code{
    color: #555;
}
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/*
*我们把border隐藏起来好了
*顺便给它加个呼吸效果好了
*/
#code{
    border:transparent;
    animation: breath 1s infinite alternate-reverse;
}


/*
*好了～样式就先写到这里
*下面来准备一片区域，来做一下自我介绍吧
*/
#paper{
    position:fixed;
    right:0;
    width:30%;
    height:100vh;
    border: 1px solid black;
    margin:16px 16px;
    padding:16px;
    background: #b8b2b7;
    display:fix;
    justify-content:center;
    align-items:center;
}
/*给它也加上呼吸效果好了*/
#paper{
    border:transparent;
    animation: breath 1s infinite alternate-reverse;
}
`

var result2 = `/*
*来让我在右侧纸中简单介绍一下我自己
*/
`

var result3 =`
/*
*接下来我们把它变成markdown的形式吧
*/
`
var result4 =`
/*好了，以上就是我的动画简历
*谢谢您的观看
*/
`
var md = `
# 自我介绍

我叫王航
1992 年 10 月出生

西安交通大学成人自考在读

自学前端半年

想要应聘贵公司的前端开发岗位

# 技能介绍

- 对HTML、css、js都可熟练使用
- 对前后端交互熟悉

# 项目介绍
- [轮播图](https://from-wh.github.io/slides-demo-3/)
- [Canvas画板](https://from-wh.github.io/Canvas-2018/canvas3.0/)
- [导航网站](https://from-wh.github.io/Work/%E5%AF%BC%E8%88%AA%E7%BD%91%E7%AB%99/index%E5%B0%81%E8%A3%85%E6%88%90%E5%87%BD%E6%95%B0.html)

# 兴趣爱好
- 码代码
- 健身
- 看动漫
- 陪女朋友逛街
`

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result , result2, () => {
            writemarkDown(md, () => {
                writeCode(result + result2 , result3,()=>{
                    convertMarkdownToHtml(()=>{
                        writeCode(result + result2 + result3 , result4)
                    })
                })
            })
        })
    })
})



function createPaper(fn){
    var paper = document.createElement('div') 
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
  }
  
  function convertMarkdownToHtml(fn){
    var div = document.createElement('div')  
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
  }
