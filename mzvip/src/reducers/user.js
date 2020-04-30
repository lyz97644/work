function user(state={
    isLogin:false,
    data:{}
},action){
    switch(action.type){
        case "LOGIN_IS":
            return {
                data:{},
                isLogin:false
            }
        case "LOGIN_IS_SUCC":
            return {
                data:action.data,
                isLogin:true
            }
        case "LOGIN_IS_ERROR":
            return {
                data:{},
                isLogin:false
            }
        default:
            return state;
    }
}

export default user;