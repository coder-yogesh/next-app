const { Note } = require('../models');

exports.createNote = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const note = await Note.create({ title, content, userId });
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ message: "Failed to create note", error: error.message });
    }
}

exports.getAllNotes = async (req, res) => {
    try {
        const { id } = req.params;
        
        const notes = await Note.findAll({
            where: { userId: id },
            order: [['createdAt', 'DESC']] // Order by createdAt in descending order
        });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch notes", error: error.message });
    }
}

exports.updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        await Note.update({ title, content }, { where: { id } });
        res.status(200).json({ message: "Note updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to update note", error: error.message });
    }
}

exports.deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        await Note.destroy({ where: { id }, truncate: true, restartIdentity: true });
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete note", error: error.message });
    }
}
