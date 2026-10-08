/* ============ ① 侧边导航数据：以后改这里就行 ============ */
const navGroups = [
    {
        name: "参加比赛",
        folder: "contests",
        open: false,
        items: [{ text: "241201 记一次街边音乐", file: "2024-12-01-music.html" }]
    },
    {
        name: "心情随笔",
        folder: "essays",          // 文件夹是组的属性，写一次
        open: true,
        items: [
            { text: "思维花园（2026年8月22日）", file: "PaintedCat@202610042219.html" },
            { text: "内心独白（2025）", file: "inner-2025.html" }
        ]
    },
    {
        name: "前端学习",
        folder: "frontend",
        open: false,
        items: [{ text: "Flex 布局笔记", file: "flex-layout.html" }]
    },

    {
        name: "读书笔记",
        folder: "reading",
        open: false,
        items: [{ text: "《C#入门经典（第7版）》", file: "cs-classic-7th.html" }]
    },

    {
        name: "工具箱",
        folder: "tools",
        open: false,
        items: [{ text: "示例网页", file: "demo.html" }]
    }
];


/* ============ ② 生成侧边导航 ============ */
const allOpen = window.NAV_ALL_OPEN === true;   // 首页置 true → 全展开
let articleTitle = "花脸猫的秘密花园";

const activeFolder = currentFolder();
const currentFile = location.pathname.split("/").pop();   // 当前页文件名，如 "garden.html"

const aside = document.querySelector("aside");
if (aside) {

    /* —— 点击 logo 回主页 —— */
    const home = document.createElement("a");
    home.href = upPrefix() + "index.html";   // 文章页是 "../index.html"；首页是 "index.html"

    const p = document.createElement("p");
    p.textContent = "花脸猫的秘密花园";
    home.appendChild(p);      // 把 p 放进链接里
    aside.appendChild(home);   // 链接放进侧栏

    const nav = document.createElement("nav");
    aside.appendChild(nav);

    navGroups.forEach(g => {
        const details = document.createElement("details");
        details.open = g.open || allOpen || (g.folder === activeFolder);   // 当前组展开，其余收起

        const summary = document.createElement("summary");
        summary.textContent = g.name;
        details.appendChild(summary);

        const ul = document.createElement("ul");
        g.items.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = upPrefix() + g.folder + "/" + item.file;        // 相对路径，点击跳转
            a.textContent = item.text; // textContent 防特殊字符
            /* 高亮只在本组内判断：组文件夹 = 当前文件夹 且 文件名 = 当前页文件名 */
            if (g.folder === activeFolder && item.file === currentFile) {
                a.className = "active";
                articleTitle = item.text;
            }
            li.appendChild(a);
            ul.appendChild(li);
        });
        details.appendChild(ul);
        nav.appendChild(details);
    });
}

/* ===== 生成顶栏（按钮 + 标题），插到 article 前面 ===== */
const main = document.querySelector("main");
if (main && !main.querySelector("header")) {      // 防重复插入
    const header = document.createElement("header");

    const btn = document.createElement("button"); // ☰ 按钮
    btn.textContent = "☰";
    header.appendChild(btn);

    // const title = document.createElement("h1"); // 文章标题位
    // header.appendChild(title);

    main.insertBefore(header, main.firstChild);   // 插到 article 之前

    /* 自动填标题：取 article 里的 h1；首页没有则显示站名 */
    // const articleTitle = document.querySelector("article h1");
    // title.textContent = articleTitle;
}

/* 当前页在哪个分组的文件夹里（首页不在任何文件夹 → null） */
function currentFolder() {
    const dir = location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1);
    const hit = navGroups.find(g => dir.includes("/" + g.folder + "/"));
    return hit ? hit.folder : null;
}

/* 当前页在某个分组文件夹里 → 链接要 ../；当前页在根目录（首页）→ 不要 ../ */
function upPrefix() {
    const dir = location.pathname.slice(0, location.pathname.lastIndexOf("/") + 1);
    return navGroups.some(g => dir.includes("/" + g.folder + "/")) ? "../" : "";
}

/* 打开/关闭抽屉 */
const menuBtn = document.querySelector("main header button");
const overlay = document.querySelector(".overlay");


if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        aside.classList.toggle("open");   // 抽屉滑进/滑出
        overlay.classList.toggle("show"); // 遮罩淡入/淡出
    });
}
if (overlay) {
    overlay.addEventListener("click", () => {   // 点遮罩 → 关闭
        aside.classList.remove("open");
        overlay.classList.remove("show");
    });
}

/* ===== 字数统计：自动追加到文章末尾 ===== */
function countWords(html) {        // 你的原函数，保留不动
    var t = document.createElement('div');
    t.innerHTML = html;
    var count = 0;
    (function walk(node) {
        node.childNodes.forEach(function (child) {
            if (child.nodeType === 3) {
                count += child.nodeValue.replace(/\s+/g, '').length;
            } else if (!/^(CODE|PRE|SCRIPT|STYLE)$/.test(child.tagName)) {
                walk(child);
            }
        });
    })(t);
    return count;
}

const article = document.querySelector("article");
if (article && !article.querySelector("footer")) {   // 防重复追加
    const footer = document.createElement("footer");
    footer.textContent = countWords(article.innerHTML) + " 字";
    if (!allOpen) {
        article.appendChild(footer);
    }
}


/* ===== 语法高亮：添加prism到网页中 ===== */

// 需要什么语言，就把文件名写进数组，不用的删掉
const loadLangs = [
    "prism-python.js",
    "prism-javascript.js",
    "prism-c.js",
    "prism-cpp.js",
    "prism-markup.js", // HTML
    "prism-css.js",
    "prism-sql.js",
    "prism-java.js",
    "prism-bash.js"
];

(function loadLocalPrism() {
    // 1.加载本地prism.css
    const prismCss = document.createElement('link');
    prismCss.rel = "stylesheet";
    // prismCss.href = upPrefix() + "css/prism-okaidia.css";
    prismCss.href = upPrefix() + "css/prism.css";
    document.head.appendChild(prismCss);

    function extendArkts() {
        // 复制 JavaScript 基础语法，不使用extend避免覆盖bug
        const jsLang = Prism.languages.javascript;
        Prism.languages.arkts = Object.assign({}, jsLang);

        // 【优先级最高，放最前面】装饰器 @xxx
        Prism.languages.arkts['decorator'] = {
            pattern: /@(Entry|Component|Builder|State|Prop|Link|Watch|BuilderParam|CustomDialog|Reusable|Track)/,
            alias: 'keyword'
        };

        // ArkTS 关键字，合并原有js关键字，追加鸿蒙独有
        Prism.languages.arkts['keyword'] = {
            pattern: /\b(struct|namespace|declare|implements|abstract|readonly)\b/,
            alias: 'keyword'
        };

        // ArkUI 内置组件 Column/Row/Text...
        Prism.languages.arkts['ark-component'] = {
            pattern: /\b(Column|Row|Stack|Flex|Text|Image|Button|TextInput|List|ListItem|Scroll|Grid|GridItem|Swiper|Divider|Blank|Slider|Checkbox|Radio|Toggle|Progress|TextArea|AlertDialog)\b(?=\s*\()/,
            alias: 'function'
        };

        // 内置类型
        Prism.languages.arkts['ark-type'] = {
            pattern: /\b(Resource|Length|Dimension|Padding|Margin|BorderRadiuses|Color|Font|FontWeight|ImageFit|ImageRepeat|Visibility|Align|Axis|Edge)\b/,
            alias: 'type'
        };

        // 内置变量API $$ $r $raw
        Prism.languages.arkts['builtin-var'] = {
            pattern: /\$r|\$\$|\$raw|getContext|getUIContext|registerUIExtension|getShared|postCardAction/,
            alias: 'variable'
        };

        // 别名：language-ark 同样生效
        Prism.languages.ark = Prism.languages.arkts;
    }

    // 创建JavaScript连接
    function createScript(src, onLoad) {
        const s = document.createElement('script');
        s.src = src;
        s.onload = onLoad;
        document.head.appendChild(s);
    }


    // 串行加载语言包，递归
    function loadLangList(langFiles, index = 0) {
        if (index >= langFiles.length) {
            // 添加ArkTS扩展
            extendArkts();
            // 全部语言加载完毕，执行高亮
            if (window.Prism) {
                Prism.highlightAll();
            }
            return;
        }
        const file = upPrefix() + "js/components/" + langFiles[index];
        createScript(file, () => {
            loadLangList(langFiles, index + 1);
        })
    }

    // 先加载prism核心，再加载语言包
    createScript(upPrefix() + "js/prism.js", function () {
        // createScript(upPrefix() + "js/prism-line-numbers.js", function () {
        //     createScript(upPrefix() + "js/toolbar/prism-copy-to-clipboard.js", function () {
        loadLangList(loadLangs);
        // })
        // })
    })
})();

/** ========给代码添加复制按钮，并处理复制相关工作=============== */

// 页面加载完成后，自动给所有 <pre> 添加复制按钮
document.addEventListener('DOMContentLoaded', function () {
    const preList = document.querySelectorAll('pre');

    preList.forEach(preEl => {
        // 创建按钮
        const copyBtn = document.createElement('button');
        copyBtn.innerText = '复制';
        copyBtn.className = 'pre-copy-btn';

        // 绑定复制监听事件
        copyBtn.addEventListener('click', async function () {
            const codeEl = preEl.querySelector('code');
            // textContent 自动解码HTML实体，拿到原生代码
            const rawCode = codeEl.textContent;
            let successFlag = false;

            try {
                // 降级：DocumentFragment 内存复制，不插入body
                const frag = document.createDocumentFragment();
                const textNode = document.createTextNode(rawCode);
                frag.appendChild(textNode);

                const range = document.createRange();
                range.selectNodeContents(textNode);

                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);

                // execCommand返回布尔，标记是否成功
                successFlag = document.execCommand('copy');
                sel.removeAllRanges();

            } catch (e) {
                await navigator.clipboard.writeText(rawCode);
                successFlag = true;
            } finally {
                // finally 无论成功失败，都会执行
                if (successFlag) {
                    copyBtn.textContent = "已复制!";
                    copyBtn.classList.add("success");
                } else {
                    copyBtn.innerText = '复制失败';
                }
                setTimeout(() => {
                    copyBtn.textContent = "复制";
                    copyBtn.classList.remove("success");
                }, 1200);
            }

        })

        // 把按钮塞进pre内部
        preEl.appendChild(copyBtn);
    })
})

// <!-- ========= 右侧目录导航JS ========= -->
function buildToc() {
    const tocList = document.getElementById('toc');
    // 限定只抓取 main article 内部标题，防止拿到页面其他地方的h标签
    const headers = document.querySelectorAll('main article h1, h2, h3, h4, h5, h6');
    const headerArr = Array.from(headers);
    headerArr.forEach((h, idx) => {
        if (!h.id) {
            h.id = `toc-heading-${idx}`;
        }
        const li = document.createElement('li');
        li.classList.add(`level-${h.tagName.toLowerCase()}`);
        const a = document.createElement('a');
        a.href = `#${h.id}`;
        a.textContent = h.textContent;
        a.addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById(h.id).scrollIntoView({
                behavior: 'smooth'
            })
        })
        li.appendChild(a);
        tocList.appendChild(li);
    })

    const scrollContainer = document.querySelector('main article');
    // 滚动监听，高亮当前标题
    scrollContainer.addEventListener('scroll', () => {
        let currentId = '';
        // 倒序遍历，找到第一个符合条件的标题，break跳出
        for (let i = headerArr.length - 1; i >= 0; i--) {
            const h = headerArr[i];
            // 标题相对于滚动容器顶部的距离（纯数字）
            const relativeTop = h.offsetTop - scrollContainer.scrollTop;
            if (relativeTop <= 120) {
                currentId = h.id;
                break;
            }
        }
        // ✅ 修改选择器，从 #toc-list 改成 #toc
        document.querySelectorAll('#toc a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
            }
        })
    })
}
buildToc();

