# Abstract
> 代码输出的混淆工具。

> 保持项目结构原样输出。
 
> 将项目中的.js .jsx文件转换为es5。同时uglify项目中的.js文件。

## Usage
### 1、下载此工具

直接下载zip文件或者运行一下命令。

```
git clone git@github.com:ToBeNumerOne/tool-uglify.git
```

### 2、配置babel
在gulp/babel.config.js中配置babel。首先通过npm install安装babel所需要的依赖。

配置时依据项目架构，配置babel的presets和plugins等选项。此文件最终导出一个有关babel的配置对象。相关配置例如：

```javascript
const config = {
    presets:[
        'es2015',
        'react',
        'stage-0'
    ],
    plugins: [
        'transform-class-properties',
        'add-module-exports',
        'transform-decorators-legacy'
    ],
    compact: true
};
module.exports = config;
```

### 3、将项目(排除node_modules)的根目录放在entry文件夹下面

### 4、安装依赖

```
npm install
```

### 5、备份源项目

备份之后的项目会出现在middle文件夹下

```
npm run bak
```

### 6、混淆代码

```
npm start
```


