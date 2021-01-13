module.exports = function(app, client) {
    let db = client.db('testDB')
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title }
        db.collection('notes').insert(note, (err, result) => {
            if(err) {
                res.send({ 'error': 'An error has occur' })
            } else {
                res.send(result.ops[0])
            }
            client.close();
        })
    })
}