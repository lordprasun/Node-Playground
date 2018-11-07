module.exports = (app)=>{
    const notes = require('../controller/notes.controller');

    app.post('/notes',notes.create);

    app.get('/notes',notes.getAll);

    app.get('/notes/:noteId',notes.findOne);

    app.put('/notes/:noteId',notes.update);

    app.delete('notes/:noteId',notes.delete);
}