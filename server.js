const express = require("express");
const app = express();

// 博客数据
let blogList = [
  {
    id: 1,
    title: "ASP.NET三层架构及短信发送案例（一）",
    content: `一、首先，简单讲述下ASP.NET三层架构。 所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。 一、首先，简单讲述下ASP.NET三层架构。
    所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。一、首先，简单讲述下ASP.NET三层架构。
    所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。一、首先，简单讲述下ASP.NET三层架构。
    所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。`,
    blogType: "计算机",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://p1.itc.cn/images01/20201118/6edae5059a9b423db5c029c61c6dfd0e.jpeg'
  },
  {
    id: 2,
    title: "ASP.NET三层架构及短信发送案例（二）",
    content: `一、首先，简单讲述下ASP.NET三层架构。 所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。 一、首先，简单讲述下ASP.NET三层架构。
    所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。一、首先，简单讲述下ASP.NET三层架构。
    所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。一、首先，简单讲述下ASP.NET三层架构。
    所谓ASP.NET三层架构主要包括：
    界面层（UI）：通俗说就是用户使用某系统时的操作界面。
    业务逻辑层(BLL)：对具体问题的操作、对数据层的操作。
    数据访问层（DAL）：对数据库进行操作，主要是进行数据的增、删、改、查。
    当然，有些细心的朋友可能会说，不是还有Model层吗。
    其实Model并不能算是一个层，它只是一个实体类，可有可无。
    Model的主要作用是传递数据。具体的取舍，主要看你项目的复杂程度，简单则可不用。
    我画一个草图，来说明他们之间的关系。
    二、下面，结合具体的案例，先做些准备工作。 先看下我们的案例，用Visual
    Studio 2012以及SQL Server2008R2开发的。 使用之前，得先还原数据库。
    打开SQL Server，在数据库上右键-》选择还原数据库。
    根据图所示，选择本地要还原的库。 一路确定。
    刷新，即可看到还原的数据库。 完成后，让我们先在VS中打开工程看一下。
    可以看到，已经搭建好了ASP.NET三层架构。
    在使用之前，先双击打开IDBO.xml文件，修改数据库连接字符串。
    服务器名获取，看下图。
    sa账户一般是数据库默认开启的，未开启请自行设置。进状态可以启用sa账户。
    填写完成后，就可以运行系统了。 默认管理员账户：admin 密码：123456
    登录成功后，就是这个样子。`,
    blogType: "计算机",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://img2.baidu.com/it/u=2942695078,3216148297&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=319'
  },
  {
    id: 3,
    title: "ASP.NET三层架构及短信发送案例（三）",
    content: `第三步，将生成的代码，拷贝到VS工程里面对应的位置。
    具体看操作。先拷贝Model类。选择Model类，右键添加类，
    这里主要是名称要和Codesmith生成的一样。
    然后只需将生成的代码粘贴到页面上即可。
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。`,
    blogType: "计算机",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://img1.baidu.com/it/u=1934157005,275125827&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'
  },
  {
    id: 4,
    title: "ASP.NET三层架构及短信发送案例（四）",
    content: `接下来，要做的事情就是，实现短信发送功能了。
    要想在ASP.NET页面实现短信发送， 首先需要一个第三方的接口。
    市面上有很多大公司都提供短信业务，都是需要付费的，
    好多是一次性打包上千上万条卖，大家百度即可。
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。`,
    blogType: "计算机",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://img1.baidu.com/it/u=3149721907,2112240739&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500'
  },
  {
    id: 5,
    title: "ASP.NET三层架构及短信发送案例（五）",
    content: `前几天，我们已经完成了短信发送的案例。
    因为时间关系，有些功能没有补充。在这里一并说了。
    功能一，网页查询功能的实现。 首先，我们先看下本系统中，所采用的控件。
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。数据访问层（DAL）：对数据库进行操作，
    主要是进行数据的增、删、改、查。`,
    blogType: "计算机",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://img1.baidu.com/it/u=1080384635,1939579093&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=250'
  },
  {
    id: 6,
    title: "The Doctor Who",
    content: `神秘博士`,
    blogType: "小说",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://img0.baidu.com/it/u=2326889330,804723425&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  },
  {
    id: 7,
    title: "测试小说",
    content: `啪啪啪啪啪`,
    blogType: "小说",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://img2.baidu.com/it/u=3100978914,1633030869&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500'
  },
  {
    id: 8,
    title: "俄罗斯队长",
    content: `普京大帝`,
    blogType: "小说",
    accountNum: "1234567",
    thumbnailPicUrl:'https://img2.baidu.com/it/u=3921031004,1301420635&fm=253&fmt=auto&app=138&f=JPEG?w=336&h=500'
  },
  {
    id: 9,
    title: "19个超赞的数据科学和机器学习工具，编程小白必看！（附资料）赶紧来吧",
    content: `19个超赞的数据科学和机器学习工具，编程小白必看！（附资料）赶紧来吧`,
    blogType: "工具",
    accountNum: "1234567",
    thumbnailPicUrl:'https://img2.baidu.com/it/u=821648956,4272374378&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
  },
  {
    id: 10,
    title: "cpp一键删库工具",
    content: `还在为删库承担责任而烦恼么？`,
    blogType: "工具",
    accountNum: "A0062750",
    thumbnailPicUrl:'https://img0.baidu.com/it/u=203714374,1178080890&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
  },
];
// 文章评论数据
let blogCommentList = [
    {
        id:"1",
        blogId:"1",
        accountNum:"A0062750",
        alias: "翊",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"2",
        blogId:"3",
        accountNum:"A0062750",
        alias: "翊",
        commentDate:"2023-02-01 00:07:56",
        content:"真的很不错～"
    
    },
    {
        id:"3",
        blogId:"5",
        accountNum:"A0062750",
        alias: "翊",
        commentDate:"2023-03-11 12:59:30",
        content:"没啥可说了"
    
    },
    {
        id:"4",
        blogId:"7",
        accountNum:"A0062750",
        alias: "翊",
        commentDate:"2023-05-17 16:34:09",
        content:"哎呦不错哟～"
    
    },
    {
        id:"5",
        blogId:"9",
        accountNum:"A0062750",
        alias: "翊",
        commentDate:"2023-01-22 11:10:32",
        content:"毁灭吧，赶紧的"
    
    },
    {
        id:"6",
        blogId:"2",
        accountNum:"965840507",
        alias: "中正",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"7",
        blogId:"4",
        accountNum:"965840507",
        alias: "中正",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"8",
        blogId:"6",
        accountNum:"965840507",
        alias: "中正",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"9",
        blogId:"7",
        accountNum:"965840507",
        alias: "中正",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"10",
        blogId:"8",
        accountNum:"965840507",
        alias: "中正",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"11",
        blogId:"9",
        accountNum:"965840507",
        alias: "中正",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"12",
        blogId:"1",
        accountNum:"965840507",
        alias: "中正",
        commentDate:"2023-05-17 16:07:32",
        content:"哎呦不错哟～"
    
    },
    {
        id:"13",
        blogId:"2",
        accountNum:"965840507",
        alias: "翊",
        commentDate:"2023-05-17 16:07:32",
        content:"🐮B clas～"
    
    },
]

// 用户数据
let userList = [
  {
    accountNum: "A0062750",
    password: "123456",
    userName: "iy",
    userRealName: "关浩宇",
    alias: "翊",
    age: 21,
  },
  {
    accountNum: "965840507",
    accountPwd: "123456",
    userName: "校长",
    userRealName: "蒋盖石",
    alias: "中正",
    age: 108,
  },
];

class SuccessRes {
  constructor(code, msg, data) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
  code = 200;
  msg = "测试成功";
  data = null;
  flag = true;
}
class ErrorRes {
  constructor(code, msg) {
    this.code = code;
    this.msg = msg;
  }
  code = 500;
  msg = "服务器异常";
  data = null;
  flag = false;
}
// 跨域设置
//设置跨域访问（设置在所有的请求前面即可）
app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method == "OPTIONS") res.sendStatus(200); //让options尝试请求快速结束
  else next();
});

app.get("/test", function (req, res) {
  let sucRes = new SuccessRes();
  sucRes.data = [
    {
      name: "张三",
      age: 18,
    },
    {
      name: "李四",
      age: 19,
    },
  ];
  //   res.send(sucRes);
  res.send(sucRes);
});
// 获取用户信息
app.get("/query/userInfo", function (req, res) {
  accountNum = req.query.accountNum;
  isExists = false;
  let userObj = {};
  userList.forEach((user) => {
    if (user.accountNum === accountNum) {
      isExists = true;
      userObj = user;
      return;
    }
  });
  if (isExists) {
    console.log("查询成功");
    res.send(new SuccessRes(200, "查询成功", userObj));
  } else {
    console.log("用户不存在");
    res.send(new ErrorRes(5001, "用户不存在"));
  }
});
// 根据账号获取某个用户的博客的文章列表
app.get("/search/getBlogListByAccountNum", function (req, res) {
  let respList = [];
  console.log(req.query)
  if ("" === req.query.accountNum) {
    res.send(respList);
    return;
  }
  blogList.forEach((blog) => {
    if ("" !== req.query.blogType) {
      if (
        req.query.blogType === blog.blogType &&
        req.query.accountNum === blog.accountNum
      ) {
        respList.push(blog);
      }
    } else {
      if (req.query.accountNum === blog.accountNum) {
        respList.push(blog);
      }
    }
  });
  res.send(respList);
});

// 获取个人博客的单个文章详细内容
app.get("/query/blog/blogContent", function (req, res) {
  console.log(req.query);
  let content = {};
  blogList.forEach((x) => {
    if (req.query.id == x.id) {
      content = x;
    }
  });
  res.send(content);
});

// 获取热门文章
app.get("/search/hotBlogList", function (req, res) {
  let resList = [];
  resList = blogList;
  res.send(resList);
});

// 获取所有博客分类
app.get("/search/allBlogTypes", function (req, res) {
  let resList = [];
  blogList.forEach(x=>{
    resList.push(x.blogType)
  })
  resList = Array.from(new Set(resList));
  res.send(resList)
});

// 获取评论
app.get("/search/getBlogComments",function(req,res){
    let resList = []
    blogCommentList.forEach(x=>{
        if(req.query.blogId === x.blogId) {
            resList.push(x)
        }
    })
    res.send(resList)
})

app.get('/login',function(req,res){
    let err = new ErrorRes()
    let suc = new SuccessRes()
    if(req.query.accountNum === '' || '' === req.query.password){
        err.msg = '用户名或密码不能为空'
        res.send(err)
        return;
    }
    userList.forEach(x=>{
    if(req.query.accountNum === x.accountNum) {
        if(req.query.password === x.password) {
            suc.msg = '登录成功'
            let user = {
                accountNum:x.accountNum,
                password:x.password
            }
            suc.data = user
            res.send(suc)
            return
        }else{
            err.msg = '密码错误'
            res.send(err)
            return
        }
    }else{
        err.msg = '账号不存在'
        res.send(err)
        return
    }

    })
})

app.listen(5001, (err) => {
  if (!err) {
    console.log("服务器启动成功");
  }
});
