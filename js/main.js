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
    transition: all 0.5s;
}
html{
    background: rgb(63, 82, 99);
    font-size:18px;
}
#code{
    border:1px solid #FFF;
    padding:16px;
}
/*
*接下来我们把代码高亮一下吧
*/
#code{
    color: #DDD;
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

#code{
    position:fixed;
    width:30%; 
    height: 100vh;
    left:0;
    border:1px solid transparent;
}

/* 加一个好看的呼吸效果吧 */
#code{
  animation: breath 0.5s infinite alternate-reverse;
}
/*哎呀，这个滚动条好丑呀，我们把它干掉吧*/
::-webkit-scrollbar {display:none}
#code{
    overflow-y: scroll;
}
/*下面我们来准备一张白纸吧*/
#paper{
    position:fixed;
    right:0;
    width:30%;
    height:100vh;
    background:rgb(63, 82, 99);
    display:fix;
    justify-content:center;
    align-items:center;
    padding:16px;
    margin:16px 0 16px;
    transform:rotate(360deg);
    overflowhiden
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
var result3 =`
/*好了，以上就是我的动画简历
*谢谢您的观看
*/
`
var md = `
# 自我介绍

我叫王航

1992 年 10 月出生
自学前端半年
想要应聘贵公司的前端开发岗位

# 技能介绍

- 对HTML、css、js都可熟练使用

# 项目介绍
- 轮播图
- Canvas画板
- 导航网站

# 兴趣爱好
- 打篮球
- 踢足球
# 兴趣爱好
- 打篮球
- 踢足球
# 兴趣爱好
- 打篮球
- 踢足球
# 兴趣爱好
- 打篮球
- 踢足球
`



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
    }, 0)
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
    }, 0)
}


writeCode('', result, () => {
    createPaper(() => {
        writeCode(result , result2, () => {
            writemarkDown(md, () => {
                writeCode(result + result2 , result3,()=>{
                    convertMarkdownToHtml(result + result2 + result3,()=>{

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