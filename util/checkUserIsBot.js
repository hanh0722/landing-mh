const checkUserIsBot = (request) => {
    if(!request){
        return;
    }
    const userAgent = request.headers['user-agent'];
    if(!userAgent){
        return;
    }
    return userAgent.includes('bot');
}

export default checkUserIsBot;