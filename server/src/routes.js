module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send({
            message:'Your user has been register!'
        })
    })
}