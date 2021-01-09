export const EDGE_CASES = {
    authorizationFailed:{
        imageName : "authorization-failed",
        title : "Authorisation failed",
        description : "You’ve reached the 3 consecutive attempts allowed for entering a correct OTP.  As a result, your transaction has been cancelled. Please try again later."
    },
    sessionTimeOut:{
        imageName : "session-time-out",
        title : "Session time out",
        description : "Your session has expired. Please start again to continue."
    },
    somethingWentWrong:{
        imageName : "something-went-wrong",
        title:"Something went wrong",
        description:`We are trying to fix the problem, it may take some time.<br> Please try again later.`
    },
    comeSeeUs:{
        imageName:"come-see-us",
        title:"Come see us",
        description:`Please visit your nearest MCB branch to update your latest mobile number with us.`
    }
}

export const SESSION_KEYS = {
    userInfo : "user-info"
}