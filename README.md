### 项目简述

Douya activity organizing platform Wechat App.
Aiming at Chinese located in Japan. The App contain offline activity, online activity, my, my activity registered, comment and detail of activities.
Contain both frontend(client) and backend(server)
use mysql database
notice that Wechat App only support Https protocal, already written in server

### 如何部署

本项目需要依赖服务端及数据库等应用，所以需要大家进行服务端及数据库部署，这里以本地服务及数据库搭建为例，具体步骤如下：

* 安装并启动 mysql
* 新建数据库，
* 更改 `client` 下 `config/config.js` 文件中的 `baseUrl`，将 `[your port]` 改为后台服务对应的端口，默认为`3003`
* 更改 `server` 下 `conf/app.js` 文件中的 `appid` 和 `secret` ，填入自己小程序对应的 appid 和 小程序密钥
* 更改 `server` 下 `conf/db.js` 文件中的相关配置，如下：

| 配置参数 | 描述 |
| ------ | ---- |
| host | 本地：127.0.0.1，远程：服务器ip |
| user | 数据库账户 |
| password | 数据库账户密码 |
| database | 数据库 |
| port | 数据库服务端口，默认为3306 |

* 进入 `server` 目录，使用命令 `$ npm install && npm start` (需要先安装nodejs)
* 将 `client` 目录作为小程序项目根目录，在开发者工具面板上添加项目，并导入该目录

#### 导入数据库表

1. 创建并选择数据库

```shell
mysql> create database wxapp;
mysql> use wxapp;
```

2. 设置数据库编码

```shell
mysql> set names utf8mb4;
```

3. 导入数据

```shell
mysql> source [sql文件路径]
```
