import api from './axios';

export const createNote = async (note) => {
    try {
        const response = await api.post('/notes', note);
        console.log('Created note:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating note:', error);
        throw error;
    }
}

export const getNotes = async () => {
    try {
        const response = await api.get('/notes');
        console.log('Fetched notes:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
    }
}

export const deleteNote = async (id) => {
    try {
        await api.delete(`/notes/${id}`);
        console.log(`Deleted note with id: ${id}`);
    } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
    }
}

export const updateNote = async (id, note) => {
    try {
        const response = await api.put(`/notes/${id}`, note);
        console.log('Updated note:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating note:', error);
        throw error;
    }
}