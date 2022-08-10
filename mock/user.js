module.exports = [
    {
        url: 'v1/auth/users/login',
        type: 'post',
        response: config=>{
            console.log(config);
            return {
                accessToken: '12345',
                username: 'nacos'
            }
        }
    }
]