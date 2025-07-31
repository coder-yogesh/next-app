'use client';
import { useEffect, useState } from 'react';
import { createUser, getUsers } from '../../api/users';


// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
}

export default function About() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    getUsers().then(users => {
      setUsers(users);
    }).catch(console.error);
  }

  const handleCreateUser = async (e: any) => {
    e.preventDefault();
    try {
      console.log('create user', newUser)
      await createUser(newUser);
      setNewUser({ name: '', email: '' });
      setShowModal(false);
      loadUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="p-10">
      <div className='flex items-center justify-between'>
        <h2 className="text-3xl font-semibold text-black">Users</h2>
         <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create User
          </button>
      </div>
      <div className="mt-6">
        {users.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto rounded-md border border-gray-300">
              <thead className="bg-gray-100 text-black">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">ID</th>
                  <th className="px-4 py-2 border border-gray-300">Name</th>
                  <th className="px-4 py-2 border border-gray-300">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="text-black border border-gray-300">
                    <td className="px-4 py-2 border border-gray-300">{user.id}</td>
                    <td className="px-4 py-2 border border-gray-300">{user.name}</td>
                    <td className="px-4 py-2 borbor border-gray-300">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 z-50 flex justify-center items-center">
    {/* Semi-transparent black background */}
    <div className="absolute inset-0 bg-black opacity-30"></div>

    {/* Modal content */}
    <div className="relative bg-white p-6 rounded-lg w-full max-w-md shadow-lg z-10 text-black">
      <h2 className="text-xl font-semibold mb-4">Create New User</h2>
      <form onSubmit={handleCreateUser}>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
            className="border px-3 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
            className="border px-3 py-2 w-full rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
)}


    </main>
  );
}
