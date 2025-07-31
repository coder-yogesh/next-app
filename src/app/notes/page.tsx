'use client';
import { useEffect, useState } from 'react';
import { getNotes, createNote, deleteNote, updateNote } from '@/api/notes';
import NoteForm from '@/components/NoteForm';

interface Note {
    id: number;
    title: string;
    content: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editNote, setEditNote] = useState<Note | null>(null);

  const fetchNotes = async () => {
    const res = await getNotes();
    setNotes(res);
    setEditNote(null); // Clear edit mode after fetch
  };

  const handleAdd = async (note: any) => {
    await createNote(note);
    fetchNotes();
  };

  const handleUpdate = async (note: any) => {
    await updateNote(note.id, note);
    fetchNotes();
  };

  const handleDelete = async (id: any) => {
    await deleteNote(id);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="p-8 text-black">
      <h1 className="text-3xl font-bold mb-4 text-green-600">📝 Notes</h1>
      <NoteForm
        onSave={handleAdd}
        onUpdate={handleUpdate}
        onCancel={() => setEditNote(null)}
        initialData={
          editNote
            ? { ...editNote, id: String(editNote.id) }
            : null
        }
      />

      <ul className="mt-8 space-y-4">
        {notes.map((note) => (
          <li key={note.id} className="bg-white shadow-md rounded p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{note.title}</h3>
                <p className="text-gray-700 mt-1">{note.content}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button
                  onClick={() => setEditNote(note)}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
