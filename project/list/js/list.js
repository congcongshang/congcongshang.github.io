/*
 *        0 - 通用学习
 *        1 - 个人博客
 *        2 - 前端学习
 *        3 - java学习
 *        4 - 视频直播
 *        5 - 我的笔记
 *///  链接信息数组 /favicon.ico
 var text = '{ "labels" : [' +
 '{ "id":"-1","name":"不索何获"},' +
 '{ "id":"0","name":"通用学习"},' +
 '{ "id":"1","name":"学习练习"},' +
 '{ "id":"2","name":"个人博客"},' +
 '{ "id":"3","name":"前端学习"},' +
 '{ "id":"4","name":"后端学习"},' +
 '{ "id":"5","name":"视频直播"},' +
 '{ "id":"6","name":"放松娱乐"},' +
 '{ "id":"7","name":"日常用品"},' +
 '{ "id":"8","name":"UI素材"}' +
 ']}';
 var webs = [
        "-1@百度一下@images/baidu.ico@http://www.baidu.com/",
        "-1@org.FCC@images/freecode.ico@https://www.freecodecamp.org/learn",
        "-1@FCC社区@images/freecode.ico@https://chinese.freecodecamp.org/forum/",
        "-1@CODEPEN@images/codepen.ico@https://codepen.io/",
        "-1@GITTER@images/gitter.ico@https://gitter.im/",
        "-1@LeetCode@images/leetcode.ico@https://leetcode-cn.com/",
        "-1@牛客网@images/nowcoder.png@https://www.nowcoder.com/",
        "-1@REPL@images/repl.ico@https://repl.it/",
        "-1@ProcessOn@images/processon.ico@https://www.processon.com/",
        "-1@GitHub@images/github.png@https://github.com/",
        "-1@极客时间@images/geekbang.png@https://time.geekbang.org/",
        "-1@大鹏教育@images/ijjctyun.png@http://www.dapengjiaoyu.com/",
        "-1@微信读书@images/weread.png@https://weread.qq.com/",
        "-1@阿里云大学@images/aliyun.ico@https://edu.aliyun.com/",
        "-1@花脸猫@images/myco.ico@https://shangcongcong.com/",
        // "-1@省业务网@images/baidu.ico@http://10.13.254.168/",
        // "-1@市业务网@images/baidu.ico@http://10.8.1.13/pds/",
        // "-1@运维系统@images/baidu.ico@http://10.8.1.15:9080/topoms/WebUI.do?path=login",

        // 通用学习 0 /favicon.ico
        "0@MDN@images/mozilla.png@https://developer.mozilla.org/zh-CN/",
        "0@w3school@images/w3school.png@https://www.w3school.com.cn",
        "0@runoob@images/runoob.ico@http://www.runoob.com/",
        "0@华为学云@images/huaweixy.ico@https://ilearningx.huawei.com/",
        "0@华为课堂@images/huaweixy.ico@https://classroom.devcloud.huaweicloud.com/home",
        "0@CCF CSP@images/ccfcsp.ico@https://www.cspro.org/",
        "0@CSDN@images/csdn.ico@https://www.csdn.net/",
        "0@博客园@images/cnblogs.ico@https://www.cnblogs.com/",
        "0@51CTO@images/51cto.ico@http://www.51cto.com/",
        "0@哔哩哔哩@images/bilibili.ico@https://www.bilibili.com/",
        "0@学堂在线@images/xuetangx.ico@http://www.xuetangx.com/",
        "0@新浪微博@images/weibo.ico@https://weibo.com/",
        "0@ZCOOL站酷@images/zcool.ico@https://www.zcool.com.cn/",
        "0@花瓣@images/huaban.ico@https://huaban.com/",
        "0@觅元素@images/51yuansu.ico@http://www.51yuansu.com/",
        "0@千库网@images/588ku.ico@https://588ku.com/",
        "0@阿里图标@images/iconfont.ico@https://www.iconfont.cn/",
        "0@ZDZN@images/ZDZN.ico@https://www.zdzn.net/",

        // 学习练习 1 /favicon.ico
        "1@高中课本@images/freecode.ico@http://www.dzkbw.com/books/gaozhong-wuli/",
        "1@高中物理@images/freecode.ico@http://gaozhongwuli.com/",
        "1@又拍@images/yupoo.ico@https://x.yupoo.com/",
        "1@w3cschool@images/w3cschool.ico@https://www.w3cschool.cn",
        "1@W3@images/W3.ico@https://www.w3.org",
        "1@cn.FCC@images/freecode.ico@https://www.freecodecamp.cn/",
        "1@one.FCC@images/freecode.ico@https://learn.freecodecamp.one",
        "1@JS秘密花园@images/Garden.ico@http://bonsaiden.github.io/JavaScript-Garden/zh/",
        "1@语雀@images/yuque.png@https://www.yuque.com/",
        "1@金山文档@images/wps.ico@https://docs.wps.cn/",
        "1@ExcelHome@images/excelhome.ico@http://www.excelhome.net/",
        "1@.net官方文档@images/microsoft.png@https://docs.microsoft.com/zh-cn/dotnet/",
        "1@TheList@images/thelist.ico@https://listproducer.com/",
        "1@普通话@images/pthxx.ico@http://www.pthxx.com/",
        "1@163邮箱@images/163.ico@https://mail.163.com",
        "1@Flutter@images/jsdelivr.png@https://flutterchina.club/",
        "1@密码学会@images/cacrnet.ico@https://www.cacrnet.org.cn/",
        "1@简书@images/jianshu.ico@https://www.jianshu.com/",
        "1@Theme森林@images/themeforest.ico@https://themeforest.net/",
        "1@码良@images/godspen.png@https://godspen.ymm56.com/",
        "1@HTML颜色@images/html-color-codes.ico@https://html-color-codes.info/",
        "1@颜色调节@images/colorme.ico@https://colorme.io/",
        "1@网页颜色@images/htmlcolorcodes.ico@https://htmlcolorcodes.com/",

        // 个人博客 2 /favicon.ico
        "2@杨青青@images/yangqq.ico@https://www.yangqq.com/",
        "2@廖雪峰@images/liaoxuefeng.ico@https://www.liaoxuefeng.com/",
        "2@fly63前端网@images/fly63.ico@http://www.fly63.com/",
        "2@卢松松@images/lusongsong.ico@https://lusongsong.com/",
        "2@张鑫旭@images/zhangxinxu.ico@https://www.zhangxinxu.com/",
        "2@志文工作室@images/lzw.ico@https://lzw.me/",
        "2@杨陈伟@images/chengweiyang.png@http://www.chengweiyang.cn/",
        "2@简单之美@images/shiyanjun.ico@http://shiyanjun.cn/",
        "2@西部牛仔@images/zhenganwen.png@http://zhenganwen.top/",
        "2@小土刀@images/wdxmzy.ico@https://wdxmzy.com/",
        "2@超越代码@images/deerchao.ico@http://deerchao.net/",
        "2@彬菌@images/idaobin.png@https://www.idaobin.com/",
        "2@春原庄的雪@images/zouwang.ico@https://zouwang.vip/",
        "2@enboys@images/eyhn.png@https://eyhn.in/",
        "2@nottingham@images/mnot.png@https://www.mnot.net/",
        "2@绿叶学习网@images/lvyestudy.ico@http://www.lvyestudy.com/",
        "2@七空幻音@images/acgxt.ico@https://www.acgxt.com/",

        // 前端学习 3 /favicon.ico
        "3@在线工具@images/oschina.ico@http://tool.oschina.net/",
        "3@node中文网@images/nodejs.png@http://nodejs.cn/",
        "3@react文档@images/reactdocschina.ico@https://react.docschina.org/",
        "3@Vue.js@images/vuejs.png@https://cn.vuejs.org/v2/guide/",
        "3@TypeScript@images/tslang.png@https://www.tslang.cn/",
        "3@在线工具@images/tool.ico@https://tool.lu/",
        "3@axios中文网@images/axios.png@http://www.axios-js.com/zh-cn/",
        "3@mock.js@images/mock.svg@http://mockjs.com/",
        "3@H5-Tricks@images/html5tricks.ico@https://www.html5tricks.com/",
        "3@electron.js@images/electronjs.ico@https://electronjs.org/",
        "3@Layui@images/layui.ico@https://www.layui.com/",
        "3@BS中文网@images/bootcss.png@http://www.bootcss.com/",
        "3@jQ插件库@images/jq22.ico@http://www.jq22.com/",
        "3@dowebok@images/dowebok.ico@http://www.dowebok.com/",
        "3@jQ之家@images/htmleaf.ico@http://www.htmleaf.com/",
        "3@anime动画@images/animejs.png@https://animejs.com/",
        "3@express.js@images/expressjs.png@http://www.expressjs.com.cn/",
        "3@socket.io@images/socket.png@https://socket.io/",
        "3@cytoscape@images/cytoscape.png@http://js.cytoscape.org/",
        "3@observable@images/observable.png@https://observablehq.com/",
        "3@d3js@images/d3js.ico@https://d3js.org.cn/",
        "3@ruff.js@images/ruff.png@https://ruff.io/",
        "3@iviewUI@images/iviewui.ico@https://www.iviewui.com/",

        // 后端学习 4 /favicon.ico
        "4@Linux私房菜@images/vbird.ico@http://linux.vbird.org/",
        "4@TensorFlow@images/tensorfly.ico@http://www.tensorfly.cn/",
        "4@scikit-learn@images/scikit.ico@https://scikit-learn.org/",
        "4@git@images/git-scm.ico@https://git-scm.com/book/zh/v2",
        "4@Java分享网@images/java1234.ico@http://www.java1234.com/",
        "4@码友网@images/codedefault.ico@https://codedefault.com/",
        "4@C#微软@images/microsoft.png@https://docs.microsoft.com/zh-cn/dotnet/csharp/",
        "4@葡萄城@images/grapecity.png@https://www.grapecity.com.cn/",
        "4@CSkin@images/cskin.ico@http://www.cskin.net/",

        // 视频直播 5 /favicon.ico
        "5@Coursera@images/coursera.ico@https://www.coursera.org/",
        "5@网易公开课@images/open163.ico@https://open.163.com/",
        "5@网易云课堂@images/study163.ico@https://study.163.com/",
        "5@腾讯课堂@images/keqq.ico@https://ke.qq.com/",
        "5@粉笔网@images/fenbi.ico@https://fenbi.com",
        "5@MOOC中国@images/moocn.ico@http://www.mooc.cn/",
        "5@华文慕课@images/chinesemooc.ico@http://www.chinesemooc.org/",
        "5@中国大学@images/icourse163.png@https://www.icourse163.org/",
        "5@传智播客@images/chuanzhiboke.ico@http://stu.ityxb.com",
        "5@博学谷@images/boxuegu.ico@https://www.boxuegu.com/",
        "5@珠峰培训@images/javascriptpeixun.png@http://www.javascriptpeixun.cn",
        "5@黑马程序员@images/itheima.ico@http://yun.itheima.com/course",
        "5@潭州课堂@images/tanzhou.ico@https://www.shiguangkey.com/",
        "5@万门大学@images/wanmen.png@https://www.wanmen.org/",
        "5@我要自学网@images/51zxw.ico@https://www.51zxw.net/",
        "5@极客学院@images/jikexueyuan.ico@http://www.jikexueyuan.com/",
        "5@汇智网@images/hubwiz.ico@http://www.hubwiz.com/",
        "5@慕课网@images/imooc.ico@https://www.imooc.com/",
        "5@北京尚学堂@images/bjsxt.ico@http://www.bjsxt.com/",
        "5@51CTO学院@images/edu51cto.ico@https://edu.51cto.com/",


        // 放松娱乐 6 /favicon.ico
        "6@AcFun@images/acfun.ico@http://www.acfun.cn/",
        "6@美拍视频@images/meipai.ico@https://www.meipai.com/",
        "6@斗鱼直播@images/douyu.ico@https://www.douyu.com/2636",
        "6@vip视频解析@images/qmaile.ico@http://peng3.com/vip",
        "6@vip全民影视@images/daga.ico@https://www.daga.cc/",
        "6@在线拼图@images/jigsawplanet.ico@https://www.jigsawplanet.com/",
        "6@嘀哩嘀哩@images/dilidili.ico@http://www.dilidili.name/",
        // "6@vip视频解析@images/qmaile.ico@http://www.qmaile.com/",
        "6@古诗文网@images/gushiwen.ico@https://www.gushiwen.org/",
        "6@诗词名句@images/shicimingju.ico@http://www.shicimingju.com/",
        "6@句子控@images/juzikong.ico@https://www.juzikong.com/",
        "6@句子迷@images/juzimi.ico@https://www.juzimi.com/",
        "6@经典语录@images/weiweiqi.ico@https://www.weiweiqi.com/",
        "6@自律人生@images/zilvrs.ico@https://www.zilvrs.com/",
        "6@人生意义@images/rsdyy.ico@https://www.rsdyy.com/",
        "6@爱奇艺@images/iqiyi.ico@http://www.iqiyi.com/",
        "6@优酷视频@images/youku.ico@https://movie.youku.com/",
        "6@腾讯视频@images/siqq.ico@https://v.qq.com/",
        "6@暴风视频@images/baofeng.ico@http://www.baofeng.com/",
        "6@美剧天堂@images/meijutt.ico@https://www.meijutt.com/",
        "6@美剧鸟@images/meijuniao.ico@http://www.meijuniao.com/",
        "6@豆瓣官网@images/douban.ico@https://www.douban.com/",
        "6@知乎@images/zhihu.ico@https://www.zhihu.com/",

        // 日常用品 7 /favicon.ico
        "7@淘宝网@images/taobao.ico@https://www.taobao.com/",
        "7@当当网@images/dangdang.ico@http://www.dangdang.com/",
        "7@京东网@images/jd.ico@https://www.jd.com/",
        "7@孔夫子网@images/kongfz.ico@http://www.kongfz.com/",
        "7@亚马逊网@images/amazon.ico@https://www.amazon.cn/",


        // UI素材  /favicon.ico
        "8@SSYER素材@images/ssyer.ico@https://www.ssyer.com/",
        "8@包图网@images/ibaotu.ico@https://ibaotu.com/",
        "8@easyicon@images/easyicon.ico@https://www.easyicon.net/",
        "8@动画@images/easyicon.ico@https://www.climber.io/",
        "8@动画@images/easyicon.ico@https://timroussilhe.com/",
        "8@易企秀@images/eqxiu.ico@https://www.eqxiu.com/",
        "8@H5案例@images/h5anli.ico@https://www.h5anli.com/",
        "8@MAKA@images/maka.ico@https://www.maka.im/",
        "8@未来应用@images/h6app.ico@https://www.h6app.com/",
        ];
