const getUsersHandler = (req, res) => {
    res.send('Get users route');
};

const getSingleUserHandler = (req, res) => {
    res.send(`Get user route. UserId ${req.params.userId}`);
};

const postUsersHandler = (req, res) => {
    res.send('Post users route');
};

module.exports = {
    getUsersHandler,
    getSingleUserHandler,
    postUsersHandler,
};
