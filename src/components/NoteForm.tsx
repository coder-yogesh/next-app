// components/NoteForm.tsx
'use client';
import { useState, useEffect } from 'react';

interface Note {
  id?: string;
  title: string;
  content: string;
}

export default function NoteForm({
  onSave,
  onUpdate,
  onCancel,
  initialData,
}: {
  onSave?: (note: Note) => void;
  onUpdate?: (note: Note) => void;
  onCancel?: () => void;
  initialData?: { id: string; title: string; content: string } | null;
}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const note = { title, content };
    if (initialData && onUpdate) {
      onUpdate({ ...note, id: initialData.id });
    } else if (onSave) {
      onSave(note);
    }
    setTitle('');
    setContent('');
  };

  const handleCancel = () => {
    setTitle('');
    setContent('');
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow p-4 rounded">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full border px-3 py-2 rounded"
      />
        <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
            {initialData ? 'Update Note' : 'Add Note'}
        </button>
        <button
        type="button"
        onClick={handleCancel}
        className="px-4 py-2 ml-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
        Cancel
        </button>
    </form>
  );
}
