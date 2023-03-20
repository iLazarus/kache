> tsc 不可以启用 **strict** (strictNullChecks:true)严格模式，否则module中会存在将undefined赋值给指定了类型的变量,导致无法执行build

> 需要有.npmignore文件指定排除那些文件，否则使用.gitignore的规则，导致npm pack打包后包中缺失dist文件夹内容

> 打包后没有输出，第三方引用后无法调用,需要使用tsc index.ts 编译后再npm pack打包
