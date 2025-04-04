/*
 * 0：通用学习 1：个人博客 2：
 *
 *
 */
// 列表标题数组
var labels = ["通用学习", "个人博客", "前端学习", "java学习", "视频直播",
    "我的笔记"];

labe = JSON.parse(text);


//===========================================================

// 创建标题部分
function createLabel() {
    var like = document.querySelector('#like');
    // 遍历标题并创建标题栏
    for (var i = 0; i < labe.labels.length; i++) {
        var mydiv = document.createElement('div');
        mydiv.innerHTML = "<div class=\"box-title\"><span class=\"angle\"></span><span>" + labe.labels[i].name + "</span>(<span>0</span>)</div> <div class=\"box-list\"></div>";
        mydiv.classList.add("box");
        like.appendChild(mydiv);
    }
}

// 根据所属标题，创建链接并添加标题点击事件
function creatItems() {
    // 遍历标题添加点击事件
    for (var i = 0; i < titles.length; i++) {
        (function (j) {
            titles[j].onclick = function () {
                if (lists[j].style.display === "block") {
                    closeList(j);
                } else {
                    openList(j);
                }
            };
        })(i)
        count[i] = 0;
    }
    // 遍历网址信息，创建链接点
    for (var i = 0; i < webs.length; i++) {
        var items = webs[i].split("@");
        // console.log(items);
        var aitem = document.createElement('a');
        var iitem = document.createElement('img');
        var sitem = document.createElement('span');
        aitem.href = items[3];
        aitem.target = "_blank";
        iitem.src = items[2];
        // iitem.src = '#';
        sitem.innerHTML = items[1];
        sitem.title = items[1];
        aitem.appendChild(iitem);
        aitem.appendChild(sitem);
        var index = findIndex(items[0])
        lists[index].appendChild(aitem);
        count[index]++;
        titles[index].children[2].innerHTML = count[index];
    }
    openList(0);
    openList(1);
    // openList(2);
}

// 查找对应的关键值
function findIndex(key) {
    for (var i = 0; i < labe.labels.length; i++) {
        if (labe.labels[i].id === key) {
            return i;
        }
    }
    return 0;
}
// 链接主体显示函数
function openList(j) {
    lists[j].style.display = "block";
    titles[j].children[0].style.WebkitTransform = "rotate(90deg)";
    titles[j].children[0].style.marginRight = "5px";
    titles[j].children[0].style.marginTop = "10px";
}

// 链接主体隐藏函数
function closeList(j) {
    lists[j].style.display = "none";
    titles[j].children[0].style.WebkitTransform = "rotate(0deg)";
    titles[j].children[0].style.marginRight = "0";
    titles[j].children[0].style.marginTop = "5px";
}

// 全局tab事件，关闭所有标题
var isOpen = false;
window.onkeydown = function () {
    if (32 == event.keyCode) {
        if (isOpen) {
            for (var i = 0; i < titles.length; i++) {
                closeList(i);
            }
            isOpen = false;
        } else {
            for (var i = 0; i < titles.length; i++) {
                openList(i);
            }
            isOpen = true;
        }
    }

    if (17 == event.keyCode) {
        for (var i = 0; i < titles.length; i++) {
            closeList(i);
        }
        isOpen = false;
    }
}
