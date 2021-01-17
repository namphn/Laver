const SENT_MAIL = "SENT EMAIL";
const ERROR = {
    header: "ERROR",
    content: "There is a system error or network's broblem"
}; 
const EMAIL_ALREADY_EXISTS = {
    header: "EMAIL ALREADY EXISTS",
    content: "Your email was registered."
};
const INVALID_EMAIL = {
    header: "INVALID EMAIL ADDRESS",
    content: "Your email does not exist."
};
const ACCEPT = "ACCEPT";
const INVALID_PASSWORD = {
    header: "INVALID PASSWORD",
    content: "Your password you input is wrong!"
};
const ACCOUNT_IS_INACTIVE = {
    header: "ACCOUNT IS INACTIVE",
    content: "Check your email to active account."
} 

const INTERNAL_SERVER = {
    header: "INTERNAL SERVER ERROR",
    content: "Something went wrong. Please contact us about this problem"
}

const HAVE_NOT_ACCOUNT = {
    header: "HAVE NOT ACCOUNT",
    content: "Check your email address or create a new account"
}

const SUCCESS = "SUCCESS";

export {
    SENT_MAIL,
    ERROR,
    EMAIL_ALREADY_EXISTS,
    INVALID_EMAIL,
    ACCEPT,
    INVALID_PASSWORD,
    ACCOUNT_IS_INACTIVE,
    INTERNAL_SERVER,
    HAVE_NOT_ACCOUNT,
    SUCCESS
}