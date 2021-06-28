let baseUrl;

console.log(process.env);
switch (process.env.NODE_ENV){
    case 'development':
        baseUrl = '/api';
        break;
    case 'production':
        baseUrl = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseUrl = 'http://dev-mall-pre.springboot.cn/api';
        break;
}

console.log(baseUrl);

export default{
    baseUrl: baseUrl
}