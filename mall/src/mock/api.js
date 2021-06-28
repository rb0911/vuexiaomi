import Mock from 'mockjs';

Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|10001-11000": 0,
        "username": "@name",
        "email": "admin@.qq.com",
        "phone": "@phone",
        "role": 0,
        "createtime": 147943209844,
        "updatetime": 147943209844
    }
});