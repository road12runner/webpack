
let login = (username, password) => {
    if (username !== 'admin' || password !== 'radical') {
        console.log('incorrect login');
    }
};


export default login;
//login('admin', 'pass');
