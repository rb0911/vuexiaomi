let baseUrl;

console.log(process.env);
switch (process.env.NODE_ENV){
    case 'dev':
        baseUrl = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'production':
        baseUrl = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseUrl = 'http://dev-mall-pre.springboot.cn/api';
        break;
}

export default{
    baseUrl
}