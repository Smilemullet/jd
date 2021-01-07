
/* 接口地址：http://jx.xuzhixiang.top/ap/api/reg.php
接口请求方式：get
接口参数：
     username用户名
     password密码
使用方式
     http://jx.xuzhixiang.top/ap/api/reg.php?username=11&password=1212

服务器返回json数据 */
const regAPI = 'http://jx.xuzhixiang.top/ap/api/reg.php'

/* 接口地址：http://jx.xuzhixiang.top/ap/api/login.php
 接口请求方式：get
 接口参数：
      username用户名
      password密码
 使用方式
      http://jx.xuzhixiang.top/ap/api/login.php?username=11&password=1212

 服务器返回json数据 */

 const loginAPI = 'http://jx.xuzhixiang.top/ap/api/login.php'


//  接口地址：  http://jx.xuzhixiang.top/ap/api/goods/goods-add.php
/*      接口请求方式：post
     接口参数：

    1. 
pimg
    2. 
pname
    3. 
pprice
    4. 
pdesc
    5. 
uid  （可选）用户商品 */
const addProAPI = 'http://jx.xuzhixiang.top/ap/api/goods/goods-add.php'


/* 所有商品接口
get
参数
pagesize  每页获取几个数据
pagenum 获取第几页数据
uid  用户id
http://jx.xuzhixiang.top/ap/api/allproductlist.php?pagesize=20&pagenum=4 */

const proListAPI = 'http://jx.xuzhixiang.top/ap/api/allproductlist.php'


/* 
删除商品 接口

接口地址：    http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php
     接口请求方式：get
     接口参数：

            pid（必选）商品的id
            uid（必选）用户的id
            token（必选）登陆时候返回的token

      使用方式


 http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php?pid=2459

      服务器返回json数据 */

const delProAPI = 'http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php'



/* 根据商品id获取商品详情接口

 接口地址：http://jx.xuzhixiang.top/ap/api/detail.php
接口请求方式：get
接口参数：
id  商品的id
使用方式
获取id为1的商品的详情
http://jx.xuzhixiang.top/ap/api/detail.php?id=1
服务器返回json数据
 */

 const proDetailAPI = 'http://jx.xuzhixiang.top/ap/api/detail.php'


/*  修改商品 接口

接口地址：    http://jx.xuzhixiang.top/ap/api/goods/goods-update.php
     接口请求方式：get
     接口参数：

            pid（必选）商品的id
pname（必选）商品
pprice（必选）商品
pdesc（必选）商品

      使用方式


 http://jx.xuzhixiang.top/ap/api/goods/goods-delete.php?pid=2459


      服务器返回json数据 */
 const updateProAPI = 'http://jx.xuzhixiang.top/ap/api/goods/goods-update.php'