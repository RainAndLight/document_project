<template>
    <!-- <my-markdown></my-markdown> -->
    <div class="typora-export os-windows">
        <el-backtop :bottom="100"></el-backtop>
        <el-backtop :bottom="150">
            <div
                style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
            >
                UP
            </div>
        </el-backtop>
        <div id="write" class="is-node">
            <h1><a name="系统操作手册" class="md-header-anchor"></a><span>系统操作手册</span></h1>
            <h2><a name="注册" class="md-header-anchor"></a><span>注册</span></h2>
            <h5><a name="说明" class="md-header-anchor"></a><span>说明</span></h5>
            <ul>
                <li><span>该系统面向所有人公开注册</span></li>
            </ul>
            <h5><a name="如何注册" class="md-header-anchor"></a><span>如何注册？</span></h5>
            <ul>
                <li><span>点击登录界面 </span><code>还没有账号?点击注册</code><span>，进度注册操作界面</span></li>
                <li>
                    <span
                        >根据界面提示，输入您的公司名称，用户名，密码，验证码等，注意公司名称和用户名是唯一不可重复的，如果提示您已注册，请联系管理员</span
                    >
                </li>
            </ul>
            <p>&nbsp;</p>
            <h2><a name="登录" class="md-header-anchor"></a><span>登录</span></h2>
            <ul>
                <li><span>如果您已注册，请输入您注册的用户名和密码以及4位验证码即可登录</span></li>
                <li>
                    <span
                        >登录成功后，您可以在左侧菜单栏中账户信息查看您的账户信息，以及在企业单位基本情况中填写您公司的信息</span
                    >
                </li>
                <li>
                    <span
                        >等待管理员审核您的账号，您可以稍后点击右上角管理员中的退出登录，然后重新登录，如果您可以看到左侧菜单栏中多了待办页面，就代表您通过了管理员的审核，否则请耐心等待，如有疑问，请联系管理员</span
                    >
                </li>
                <li>
                    <span
                        >如果您忘记您的密码，请联系管理员进行更改，注意，管理员也不知道您之前的密码是什么，只能更改新的密码</span
                    >
                </li>
            </ul>
            <p>&nbsp;</p>
            <h2><a name="企业单位基本信息" class="md-header-anchor"></a><span>企业单位基本信息</span></h2>
            <h5>
                <a name="您在此页面可以填写您的企业基本信息需要注意" class="md-header-anchor"></a
                ><span>您在此页面可以填写您的企业基本信息，需要注意：</span>
            </h5>
            <ul>
                <li><span>不可提交空表单</span></li>
                <li>
                    <span
                        >统一社会信用代码是唯一的，请检查您填写的准确性，如果提示您有人注册了您的信息，请与管理员联系</span
                    >
                </li>
                <li><span>填写完成后，页面最下面点击保存则可以保存您的信息</span></li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2><a name="待办" class="md-header-anchor"></a><span>待办</span></h2>
            <h5>
                <a
                    name="在此页面您可以申报物流企业经营状况表年度）-和-物流企业经营状况表季度）"
                    class="md-header-anchor"
                ></a
                ><span>在此页面，您可以申报</span><code>物流企业经营状况表（年度）</code><span> 和 </span
                ><code>物流企业经营状况表（季度）</code>
            </h5>
            <ul>
                <li><span>如果当前表格显示 暂无数据，则代表没有需要申报的信息</span></li>
                <li>
                    <span>您可以根据管理员发起的申报，点击当前数据的末尾</span><code>申报</code
                    ><span>按钮，跳转到申报页面</span>
                </li>
                <li>
                    <span
                        >请您及时在管理员设定的申报填写时间内，完成某一条数据的申报，你只可以在申报填写时间内进行申报，如有错过，请联系管理员</span
                    >
                </li>
                <li>
                    <span
                        >在申报结束之前，您可以重新修改提交您的申报信息，如果您的申报被驳回，请您重新修改并提交申报</span
                    >
                </li>
            </ul>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <br />
            <br />
            <h1><a name="管理员使用手册" class="md-header-anchor"></a><span>管理员使用手册</span></h1>
            <ul>
                <li>
                    <p><span>您的默认登录账号密码为</span></p>
                    <ul>
                        <li><span>账号：sys_admin</span></li>
                        <li><span>密码：123456</span></li>
                    </ul>
                </li>
                <li>
                    <p><span>您可以在账号列表中修改您的密码</span></p>
                </li>
                <li>
                    <p><span>如果您忘记管理员的账号密码，或者修改失误之类，您可以登录超极管理员账号进行修改</span></p>
                    <ul>
                        <li><span>账号：superAdmin</span></li>
                        <li><span>密码：admin123456</span></li>
                    </ul>
                </li>
                <li>
                    <p><span>我们推荐您 平时使用默认管理员账号，超极管理员账号 只用来处理您忘记管理员账号密码</span></p>
                </li>
            </ul>
            <p>&nbsp;</p>
            <br />
            <h2><a name="账号审核" class="md-header-anchor"></a><span>账号审核</span></h2>
            <ul>
                <li>
                    <p><span>新注册的用户列表都会在此页面显示</span></p>
                </li>
                <li>
                    <p><span>三种情况</span></p>
                    <ul>
                        <li>
                            <span
                                >点击同意：此用户通过审核，获得申报权限，该账号进入账号列表界面，此时用户重新登录即可看到待办页面</span
                            >
                        </li>
                        <li>
                            <span>点击拒绝：标记此用户账号审核状态为 </span><code>已拒绝</code
                            ><span>，同时进入账号列表中</span>
                        </li>
                        <li><span>点击查看：查看当前用户填写的企业单位基本情况</span></li>
                    </ul>
                </li>
            </ul>
            <p>&nbsp;</p>
            <br />
            <h2><a name="账号列表" class="md-header-anchor"></a><span>账号列表</span></h2>
            <h5><a name="您可以看到" class="md-header-anchor"></a><span>您可以看到：</span></h5>
            <p><span>在此页面你可以看到已经通过审核的账户和没有通过审核的用户</span></p>
            <p>&nbsp;</p>
            <h5><a name="您可以做" class="md-header-anchor"></a><span>您可以做：</span></h5>
            <ul>
                <li>
                    <p><span>点击下拉选框，分别查看已经通过的用户和没有通过的用户</span></p>
                </li>
                <li>
                    <p><span>操作</span></p>
                    <ul>
                        <li><span>查看：查看用户的企业单位基本信息</span></li>
                        <li><span>编辑：编辑用户的公司、账号、密码</span></li>
                        <li><span>删除：删除这个账号所有信息</span></li>
                        <li><span>重审：将该账号重新审核，该数据进入账号审核界面</span></li>
                    </ul>
                </li>
            </ul>
            <p>&nbsp;</p>
            <br />
            <h2><a name="操作" class="md-header-anchor"></a><span>操作</span></h2>
            <h5>
                <a
                    name="在此界面可以面向所有已经通过注册的用户发起一个申报用户对此进行申报"
                    class="md-header-anchor"
                ></a
                ><span>在此界面可以面向所有已经通过注册的用户发起一个申报，用户对此进行申报</span>
            </h5>
            <p><span>需要注意：</span></p>
            <ul>
                <li>
                    <span
                        >申报在起止日期开始的时候，用户可以申报，如果在申报期间有用户提交了数据，则不可以删除此次申报和编辑</span
                    >
                </li>
                <li><span>发起申报中，填写时间需要大于今天</span></li>
            </ul>
            <p>&nbsp;</p>
            <br />
            <h2><a name="申报进度" class="md-header-anchor"></a><span>申报进度</span></h2>
            <h5><a name="您可以做" class="md-header-anchor"></a><span>您可以做：</span></h5>
            <ul>
                <li><span>查看每一个发起申报的所有用户的申报进度</span></li>
                <li><span>2个卡片中间的线可以随意拖动来显示不同比例</span></li>
            </ul>
            <h5><a name="页面介绍" class="md-header-anchor"></a><span>页面介绍：</span></h5>
            <ol start="">
                <li>
                    <p><span>左侧卡片</span></p>
                    <ol start="">
                        <li><span>左侧为管理员分别发起的季度和年度的申报</span></li>
                        <li><span>点击季度，年度，可以随时切换列表</span></li>
                        <li><span>操作栏点击查看，右侧即可显示出此次申报所对应所有用户的申报情况</span></li>
                    </ol>
                </li>
                <li>
                    <p><span>右侧卡片</span></p>
                    <ol start="">
                        <li>
                            <p><span>点击左侧查看之后，右面会默认出现还未申报的用户数据</span></p>
                            <ol start="">
                                <li>
                                    <p>
                                        <span
                                            >点击上方显示未申报的下拉选，通过选择未申报、已提交、已驳回
                                            来查看不同的申报</span
                                        >
                                    </p>
                                </li>
                                <li>
                                    <p><span>操作栏</span></p>
                                    <ol start="">
                                        <li>
                                            <span
                                                >驳回：将该账号申报状态标记为已驳回，需要用户编辑提交的申报重新提交</span
                                            >
                                        </li>
                                        <li>
                                            <span
                                                >查看：对用户所提交上来的申报进行查看，同时管理员可以操作用户所提交上来的申报</span
                                            >
                                        </li>
                                        <li><span>导出：将一个公司的申报数据导出为Excel</span></li>
                                    </ol>
                                </li>
                                <li>
                                    <p>
                                        <span
                                            >如果您是查看季度申报，那么右侧上方会有一个合并导出EXCEL的按钮，可以导出所有已提交用户的申报信息</span
                                        >
                                    </p>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>
            </ol>
            <p>&nbsp;</p>
            <br />
            <h2><a name="关于页面适配" class="md-header-anchor"></a><span>关于页面适配</span></h2>
            <h5>
                <a
                    name="如果您的浏览器在任何页面出现没有滚动条内容宽度超出屏幕背景图片样式错乱等等问题请尝试以下方法"
                    class="md-header-anchor"
                ></a
                ><span
                    >如果您的浏览器在任何页面出现没有滚动条、内容宽度超出屏幕，背景图片样式错乱等等问题，请尝试以下方法</span
                >
            </h5>
            <ol start="">
                <li>
                    <p><span>方式一 </span></p>
                    <ul>
                        <li><span>刷新您的页面</span></li>
                    </ul>
                </li>
                <li>
                    <p><span>方式二</span></p>
                    <ul>
                        <li><span>切换内核，操作如下（以360浏览器为演示）</span></li>
                        <li><span>如果您是360浏览器用户，请点击如图所示字体图标</span></li>
                        <li>
                            <img
                                src="../../assets/img/1594867208739.png"
                                alt="1594867208739"
                                referrerPolicy="no-referrer"
                            />
                        </li>
                        <li>
                            <img
                                src="../../assets/img/1594867228446.png"
                                alt="1594867228446"
                                referrerPolicy="no-referrer"
                            />
                        </li>
                        <li><span>选择极速模式，然后刷新页面即可</span></li>
                    </ul>
                </li>
                <li>
                    <p><span>方式三 ， 如果以上方法都不行</span></p>
                    <ul>
                        <li><span>我们建议您使用谷歌浏览器，体验最完美的页面适配</span></li>
                        <li>
                            <img
                                src="../../assets/img/1594867330357.png"
                                alt="1594867330357"
                                referrerPolicy="no-referrer"
                            />
                        </li>
                        <li>
                            <span>谷歌浏览器下载地址：</span
                            ><a href="https://www.google.cn/chrome/" target="_blank" class="url"
                                >https://www.google.cn/chrome/</a
                            >
                        </li>
                        <li>
                            <img
                                src="../../assets/img/1594867450603.png"
                                alt="1594867450603"
                                referrerPolicy="no-referrer"
                            />
                        </li>
                        <li><span>点击页面中的下载，然后安装成功后，用谷歌浏览器打开次页面</span></li>
                    </ul>
                </li>
            </ol>
            <p>&nbsp;</p>
        </div>
    </div>
</template>

<script>
// import myMarkdown from './assets/cpu.md'
export default {
    // components: {
    //     myMarkdown
    // }
}
</script>

<style scoped>
html {
    overflow-x: initial !important;
}
:root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --select-text-bg-color: #b5d6fc;
    --select-text-font-color: auto;
    --monospace: 'Lucida Console', Consolas, 'Courier', monospace;
}
html {
    font-size: 14px;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}
body {
    margin: 0px;
    padding: 0px;
    height: auto;
    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    font-size: 1rem;
    line-height: 1.42857;
    overflow-x: hidden;
    background: inherit;
    tab-size: 4;
}
iframe {
    margin: auto;
}
a.url {
    word-break: break-all;
}
a:active,
a:hover {
    outline: 0px;
}
.in-text-selection,
::selection {
    text-shadow: none;
    background: var(--select-text-bg-color);
    color: var(--select-text-font-color);
}
#write {
    margin: 0px auto;
    height: auto;
    width: inherit;
    word-break: normal;
    overflow-wrap: break-word;
    position: relative;
    white-space: normal;
    overflow-x: visible;
    padding-top: 40px;
}
#write.first-line-indent p {
    text-indent: 2em;
}
#write.first-line-indent li p,
#write.first-line-indent p * {
    text-indent: 0px;
}
#write.first-line-indent li {
    margin-left: 2em;
}
.for-image #write {
    padding-left: 8px;
    padding-right: 8px;
}
body.typora-export {
    padding-left: 30px;
    padding-right: 30px;
}
.typora-export .footnote-line,
.typora-export li,
.typora-export p {
    white-space: pre-wrap;
}
@media screen and (max-width: 500px) {
    body.typora-export {
        padding-left: 0px;
        padding-right: 0px;
    }
    #write {
        padding-left: 20px;
        padding-right: 20px;
    }
    .CodeMirror-sizer {
        margin-left: 0px !important;
    }
    .CodeMirror-gutters {
        display: none !important;
    }
}
#write li > figure:last-child {
    margin-bottom: 0.5rem;
}
#write ol,
#write ul {
    position: relative;
}
img {
    max-width: 100%;
    vertical-align: middle;
}
button,
input,
select,
textarea {
    color: inherit;
    font: inherit;
}
input[type='checkbox'],
input[type='radio'] {
    line-height: normal;
    padding: 0px;
}
*,
::after,
::before {
    box-sizing: border-box;
}
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6,
#write p,
#write pre {
    width: inherit;
}
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6,
#write p {
    position: relative;
}
p {
    line-height: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    break-after: avoid-page;
    break-inside: avoid;
    orphans: 2;
}
p {
    orphans: 4;
}
h1 {
    font-size: 2rem;
}
h2 {
    font-size: 1.8rem;
}
h3 {
    font-size: 1.6rem;
}
h4 {
    font-size: 1.4rem;
}
h5 {
    font-size: 1.2rem;
}
h6 {
    font-size: 1rem;
}
.md-math-block,
.md-rawblock,
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.hidden {
    display: none;
}
.md-blockmeta {
    color: rgb(204, 204, 204);
    font-weight: 700;
    font-style: italic;
}
a {
    cursor: pointer;
}
sup.md-footnote {
    padding: 2px 4px;
    background-color: rgba(238, 238, 238, 0.7);
    color: rgb(85, 85, 85);
    border-radius: 4px;
    cursor: pointer;
}
sup.md-footnote a,
sup.md-footnote a:hover {
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
}
#write input[type='checkbox'] {
    cursor: pointer;
    width: inherit;
    height: inherit;
}
figure {
    overflow-x: auto;
    margin: 1.2em 0px;
    max-width: calc(100% + 16px);
    padding: 0px;
}
figure > table {
    margin: 0px !important;
}
tr {
    break-inside: avoid;
    break-after: auto;
}
thead {
    display: table-header-group;
}
table {
    border-collapse: collapse;
    border-spacing: 0px;
    width: 100%;
    overflow: auto;
    break-inside: auto;
    text-align: left;
}
table.md-table td {
    min-width: 32px;
}
.CodeMirror-gutters {
    border-right: 0px;
    background-color: inherit;
}
.CodeMirror-linenumber {
    user-select: none;
}
.CodeMirror {
    text-align: left;
}
.CodeMirror-placeholder {
    opacity: 0.3;
}
.CodeMirror pre {
    padding: 0px 4px;
}
.CodeMirror-lines {
    padding: 0px;
}
div.hr:focus {
    cursor: none;
}
#write pre {
    white-space: pre-wrap;
}
#write.fences-no-line-wrapping pre {
    white-space: pre;
}
#write pre.ty-contain-cm {
    white-space: normal;
}
.CodeMirror-gutters {
    margin-right: 4px;
}
.md-fences {
    font-size: 0.9rem;
    display: block;
    break-inside: avoid;
    text-align: left;
    overflow: visible;
    white-space: pre;
    background: inherit;
    position: relative !important;
}
.md-diagram-panel {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    padding-top: 0px;
    padding-bottom: 8px;
    overflow-x: auto;
}
#write .md-fences.mock-cm {
    white-space: pre-wrap;
}
.md-fences.md-fences-with-lineno {
    padding-left: 0px;
}
#write.fences-no-line-wrapping .md-fences.mock-cm {
    white-space: pre;
    overflow-x: auto;
}
.md-fences.mock-cm.md-fences-with-lineno {
    padding-left: 8px;
}
.CodeMirror-line,
twitterwidget {
    break-inside: avoid;
}
.footnotes {
    opacity: 0.8;
    font-size: 0.9rem;
    margin-top: 1em;
    margin-bottom: 1em;
}
.footnotes + .footnotes {
    margin-top: 0px;
}
.md-reset {
    margin: 0px;
    padding: 0px;
    border: 0px;
    outline: 0px;
    vertical-align: top;
    background: 0px 0px;
    text-decoration: none;
    text-shadow: none;
    float: none;
    position: static;
    width: auto;
    height: auto;
    white-space: nowrap;
    cursor: inherit;
    -webkit-tap-highlight-color: transparent;
    line-height: normal;
    font-weight: 400;
    text-align: left;
    box-sizing: content-box;
    direction: ltr;
}
li div {
    padding-top: 0px;
}
blockquote {
    margin: 1rem 0px;
}
li .mathjax-block,
li p {
    margin: 0.5rem 0px;
}
li {
    margin: 0px;
    position: relative;
}
blockquote > :last-child {
    margin-bottom: 0px;
}
blockquote > :first-child,
li > :first-child {
    margin-top: 0px;
}
.footnotes-area {
    color: rgb(136, 136, 136);
    margin-top: 0.714rem;
    padding-bottom: 0.143rem;
    white-space: normal;
}
#write .footnote-line {
    white-space: pre-wrap;
}
@media print {
    body,
    html {
        border: 1px solid transparent;
        height: 99%;
        break-after: avoid;
        break-before: avoid;
    }
    #write {
        margin-top: 0px;
        padding-top: 0px;
        border-color: transparent !important;
    }
    .typora-export * {
        -webkit-print-color-adjust: exact;
    }
    html.blink-to-pdf {
        font-size: 13px;
    }
    .typora-export #write {
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 0px;
        break-after: avoid;
    }
    .typora-export #write::after {
        height: 0px;
    }
}
.footnote-line {
    margin-top: 0.714em;
    font-size: 0.7em;
}
a img,
img a {
    cursor: pointer;
}
pre.md-meta-block {
    font-size: 0.8rem;
    min-height: 0.8rem;
    white-space: pre-wrap;
    background: rgb(204, 204, 204);
    display: block;
    overflow-x: hidden;
}
p > .md-image:only-child:not(.md-img-error) img,
p > img:only-child {
    display: block;
    margin: auto;
}
p > .md-image:only-child {
    display: inline-block;
    width: 100%;
}
#write .MathJax_Display {
    margin: 0.8em 0px 0px;
}
.md-math-block {
    width: 100%;
}
.md-math-block:not(:empty)::after {
    display: none;
}
[contenteditable='true']:active,
[contenteditable='true']:focus {
    outline: 0px;
    box-shadow: none;
}
.md-task-list-item {
    position: relative;
    list-style-type: none;
}
.task-list-item.md-task-list-item {
    padding-left: 0px;
}
.md-task-list-item > input {
    position: absolute;
    top: 0px;
    left: 0px;
    margin-left: -1.2em;
    margin-top: calc(1em - 10px);
    border: none;
}
.math {
    font-size: 1rem;
}
.md-toc {
    min-height: 3.58rem;
    position: relative;
    font-size: 0.9rem;
    border-radius: 10px;
}
.md-toc-content {
    position: relative;
    margin-left: 0px;
}
.md-toc-content::after,
.md-toc::after {
    display: none;
}
.md-toc-item {
    display: block;
    color: rgb(65, 131, 196);
}
.md-toc-item a {
    text-decoration: none;
}
.md-toc-inner:hover {
    text-decoration: underline;
}
.md-toc-inner {
    display: inline-block;
    cursor: pointer;
}
.md-toc-h1 .md-toc-inner {
    margin-left: 0px;
    font-weight: 700;
}
.md-toc-h2 .md-toc-inner {
    margin-left: 2em;
}
.md-toc-h3 .md-toc-inner {
    margin-left: 4em;
}
.md-toc-h4 .md-toc-inner {
    margin-left: 6em;
}
.md-toc-h5 .md-toc-inner {
    margin-left: 8em;
}
.md-toc-h6 .md-toc-inner {
    margin-left: 10em;
}
@media screen and (max-width: 48em) {
    .md-toc-h3 .md-toc-inner {
        margin-left: 3.5em;
    }
    .md-toc-h4 .md-toc-inner {
        margin-left: 5em;
    }
    .md-toc-h5 .md-toc-inner {
        margin-left: 6.5em;
    }
    .md-toc-h6 .md-toc-inner {
        margin-left: 8em;
    }
}
a.md-toc-inner {
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
}
.footnote-line a:not(.reversefootnote) {
    color: inherit;
}
.md-attr {
    display: none;
}
.md-fn-count::after {
    content: '.';
}
code,
pre,
samp,
tt {
    font-family: var(--monospace);
}
kbd {
    margin: 0px 0.1em;
    padding: 0.1em 0.6em;
    font-size: 0.8em;
    color: rgb(36, 39, 41);
    background: rgb(255, 255, 255);
    border: 1px solid rgb(173, 179, 185);
    border-radius: 3px;
    box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px, rgb(255, 255, 255) 0px 0px 0px 2px inset;
    white-space: nowrap;
    vertical-align: middle;
}
.md-comment {
    color: rgb(162, 127, 3);
    opacity: 0.8;
    font-family: var(--monospace);
}
code {
    text-align: left;
    vertical-align: initial;
}
a.md-print-anchor {
    white-space: pre !important;
    border-width: initial !important;
    border-style: none !important;
    border-color: initial !important;
    display: inline-block !important;
    position: absolute !important;
    width: 1px !important;
    right: 0px !important;
    outline: 0px !important;
    background: 0px 0px !important;
    text-decoration: initial !important;
    text-shadow: initial !important;
}
.md-inline-math .MathJax_SVG .noError {
    display: none !important;
}
.html-for-mac .inline-math-svg .MathJax_SVG {
    vertical-align: 0.2px;
}
.md-math-block .MathJax_SVG_Display {
    text-align: center;
    margin: 0px;
    position: relative;
    text-indent: 0px;
    max-width: none;
    max-height: none;
    min-height: 0px;
    min-width: 100%;
    width: auto;
    overflow-y: hidden;
    display: block !important;
}
.MathJax_SVG_Display,
.md-inline-math .MathJax_SVG_Display {
    width: auto;
    margin: inherit;
    display: inline-block !important;
}
.MathJax_SVG .MJX-monospace {
    font-family: var(--monospace);
}
.MathJax_SVG .MJX-sans-serif {
    font-family: sans-serif;
}
.MathJax_SVG {
    display: inline;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    zoom: 90%;
    text-indent: 0px;
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    word-spacing: normal;
    overflow-wrap: normal;
    white-space: nowrap;
    float: none;
    direction: ltr;
    max-width: none;
    max-height: none;
    min-width: 0px;
    min-height: 0px;
    border: 0px;
    padding: 0px;
    margin: 0px;
}
.MathJax_SVG * {
    transition: none 0s ease 0s;
}
.MathJax_SVG_Display svg {
    vertical-align: middle !important;
    margin-bottom: 0px !important;
    margin-top: 0px !important;
}
.os-windows.monocolor-emoji .md-emoji {
    font-family: 'Segoe UI Symbol', sans-serif;
}
.md-diagram-panel > svg {
    max-width: 100%;
}
[lang='mermaid'] svg,
[lang='flow'] svg {
    max-width: 100%;
    height: auto;
}
[lang='mermaid'] .node text {
    font-size: 1rem;
}
table tr th {
    border-bottom: 0px;
}
video {
    max-width: 100%;
    display: block;
    margin: 0px auto;
}
iframe {
    max-width: 100%;
    width: 100%;
    border: none;
}
.highlight td,
.highlight tr {
    border: 0px;
}

:root {
    --side-bar-bg-color: #fff;
    --control-text-color: #777;
}
html {
    font-size: 14px;
}
body {
    color: rgb(52, 73, 94);
    -webkit-font-smoothing: antialiased;
    line-height: 1.6rem;
    letter-spacing: 0px;
    margin: 0px;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif !important;
}
#write {
    max-width: 860px;
    margin: 0px auto;
    padding: 20px 30px 100px;
}
#write p {
    line-height: 1.6rem;
    word-spacing: 0.05rem;
}
#write ol li {
    text-indent: 0.5rem;
}
#write > ul:first-child,
#write > ol:first-child {
    margin-top: 30px;
}
body > :first-child {
    margin-top: 0px !important;
}
body > :last-child {
    margin-bottom: 0px !important;
}
a {
    color: rgb(66, 185, 131);
    font-weight: 600;
    padding: 0px 2px;
    text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    position: relative;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
    line-height: 1.4;
    cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
    text-decoration: none;
}
h1 tt,
h1 code {
    font-size: inherit !important;
}
h2 tt,
h2 code {
    font-size: inherit !important;
}
h3 tt,
h3 code {
    font-size: inherit !important;
}
h4 tt,
h4 code {
    font-size: inherit !important;
}
h5 tt,
h5 code {
    font-size: inherit !important;
}
h6 tt,
h6 code {
    font-size: inherit !important;
}
h2 a,
h3 a {
    color: rgb(52, 73, 94);
}
h1 {
    padding-bottom: 0.4rem;
    font-size: 2.2rem;
    line-height: 1.3;
}
h2 {
    font-size: 1.75rem;
    line-height: 1.225;
    margin: 35px 0px 15px;
    padding-bottom: 0.5em;
    border-bottom: 1px solid rgb(221, 221, 221);
}
h3 {
    font-size: 1.4rem;
    line-height: 1.43;
    margin: 20px 0px 7px;
}
h4 {
    font-size: 1.2rem;
}
h5 {
    font-size: 1rem;
}
h6 {
    font-size: 1rem;
    color: rgb(119, 119, 119);
}
p,
blockquote,
ul,
ol,
dl,
table {
    margin: 0.8em 0px;
}
li > ol,
li > ul {
    margin: 0px;
}
hr {
    height: 2px;
    padding: 0px;
    margin: 16px 0px;
    background-color: rgb(231, 231, 231);
    border: 0px none;
    overflow: hidden;
    box-sizing: content-box;
}
body > h2:first-child {
    margin-top: 0px;
    padding-top: 0px;
}
body > h1:first-child {
    margin-top: 0px;
    padding-top: 0px;
}
body > h1:first-child + h2 {
    margin-top: 0px;
    padding-top: 0px;
}
body > h3:first-child,
body > h4:first-child,
body > h5:first-child,
body > h6:first-child {
    margin-top: 0px;
    padding-top: 0px;
}
a:first-child h1,
a:first-child h2,
a:first-child h3,
a:first-child h4,
a:first-child h5,
a:first-child h6 {
    margin-top: 0px;
    padding-top: 0px;
}
h1 p,
h2 p,
h3 p,
h4 p,
h5 p,
h6 p {
    margin-top: 0px;
}
li p.first {
    display: inline-block;
}
ul,
ol {
    padding-left: 30px;
}
ul:first-child,
ol:first-child {
    margin-top: 0px;
}
ul:last-child,
ol:last-child {
    margin-bottom: 0px;
}
blockquote {
    border-left: 4px solid rgb(66, 185, 131);
    padding: 10px 15px;
    color: rgb(119, 119, 119);
    background-color: rgba(66, 185, 131, 0.1);
}
table {
    padding: 0px;
    word-break: initial;
}
table tr {
    border-top: 1px solid rgb(223, 226, 229);
    margin: 0px;
    padding: 0px;
}
table tr:nth-child(2n),
thead {
    background-color: rgb(250, 250, 250);
}
table tr th {
    font-weight: bold;
    border-width: 1px 1px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-top-color: rgb(223, 226, 229);
    border-right-color: rgb(223, 226, 229);
    border-left-color: rgb(223, 226, 229);
    border-image: initial;
    border-bottom-style: initial;
    border-bottom-color: initial;
    text-align: left;
    margin: 0px;
    padding: 6px 13px;
}
table tr td {
    border: 1px solid rgb(223, 226, 229);
    text-align: left;
    margin: 0px;
    padding: 6px 13px;
}
table tr th:first-child,
table tr td:first-child {
    margin-top: 0px;
}
table tr th:last-child,
table tr td:last-child {
    margin-bottom: 0px;
}
#write strong {
    padding: 0px 1px;
}
#write em {
    padding: 0px 5px 0px 2px;
}
#write table thead th {
    background-color: rgb(242, 242, 242);
}
#write .CodeMirror-gutters {
    border-right: none;
}
#write .md-fences {
    border: 1px solid rgb(244, 244, 244);
    -webkit-font-smoothing: initial;
    line-height: 1.43rem;
    border-radius: 2px;
    font-size: 0.85rem;
    overflow-wrap: normal;
    margin: 0.8rem 0px !important;
    padding: 0.3rem 0px !important;
    background-color: rgb(248, 248, 248) !important;
    font-family: 'Roboto Mono', 'Source Sans Pro', Monaco, courier, monospace !important;
}
#write .CodeMirror-wrap .CodeMirror-code pre {
    padding-left: 12px;
}
#write code,
tt {
    margin: 0px 2px;
    padding: 2px 4px;
    border-radius: 2px;
    font-size: 0.92rem;
    color: rgb(233, 105, 0);
    background-color: rgb(248, 248, 248);
    font-family: 'Roboto Mono', 'Source Sans Pro', Monaco, courier, monospace !important;
}
#write .md-footnote {
    background-color: rgb(248, 248, 248);
    color: rgb(233, 105, 0);
}
#write mark {
    background-color: rgb(235, 255, 235);
    border-radius: 2px;
    padding: 2px 4px;
    margin: 0px 2px;
    color: rgb(34, 34, 34);
    font-weight: 500;
}
#write del {
    padding: 1px 2px;
}
.cm-s-inner .cm-link,
.cm-s-inner.cm-link {
    color: rgb(34, 162, 201);
}
.cm-s-inner .cm-string {
    color: rgb(34, 162, 201);
}
.md-task-list-item > input {
    margin-left: -1.3em;
}
@media print {
    html {
        font-size: 13px;
    }
    table,
    pre {
        break-inside: avoid;
    }
    pre {
        overflow-wrap: break-word;
    }
}
.md-fences {
    background-color: rgb(248, 248, 248);
}
#write pre.md-meta-block {
    padding: 1rem;
    font-size: 85%;
    line-height: 1.45;
    background-color: rgb(247, 247, 247);
    border: 0px;
    border-radius: 3px;
    color: rgb(119, 119, 119);
    margin-top: 0px !important;
}
.mathjax-block > .code-tooltip {
    bottom: 0.375rem;
}
#write > h3.md-focus::before {
    left: -1.5625rem;
    top: 0.375rem;
}
#write > h4.md-focus::before {
    left: -1.5625rem;
    top: 0.285714rem;
}
#write > h5.md-focus::before {
    left: -1.5625rem;
    top: 0.285714rem;
}
#write > h6.md-focus::before {
    left: -1.5625rem;
    top: 0.285714rem;
}
.md-image > .md-meta {
    border-radius: 3px;
    font-family: Consolas, 'Liberation Mono', Courier, monospace;
    padding: 2px 0px 0px 4px;
    font-size: 0.9em;
    color: inherit;
}
.md-tag {
    color: inherit;
}
.md-toc {
    margin-top: 20px;
    padding-bottom: 20px;
}
.sidebar-tabs {
    border-bottom: none;
}
#typora-quick-open {
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(248, 248, 248);
}
#typora-quick-open-item {
    background-color: rgb(250, 250, 250);
    border-color: rgb(254, 254, 254) rgb(229, 229, 229) rgb(229, 229, 229) rgb(238, 238, 238);
    border-style: solid;
    border-width: 1px;
}
#md-notification::before {
    top: 10px;
}
.on-focus-mode blockquote {
    border-left-color: rgba(85, 85, 85, 0.12);
}
header,
.context-menu,
.megamenu-content,
footer {
    font-family: 'Segoe UI', Arial, sans-serif;
}
.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state {
    visibility: visible;
}
.mac-seamless-mode #typora-sidebar {
    background-color: var(--side-bar-bg-color);
}
.md-lang {
    color: rgb(180, 101, 77);
}
.html-for-mac .context-menu {
    --item-hover-bg-color: #e6f0fe;
}

.typora-export li,
.typora-export p,
.typora-export,
.footnote-line {
    white-space: normal;
}
</style>
