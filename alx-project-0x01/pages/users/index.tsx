import React, { useState } from 'react'
import UserCard from '@/components/common/UserCard'
import UserModal from '@/components/common/UserModal'
import Header from '@/components/layout/Header'
import { UserProps, UserData } from '@/interfaces'

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    const [users, setUsers] = useState<UserProps[]>(posts || []);
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log(posts)

    const handleAddUser = (userData: UserData) => {
        // Create new user with auto-generated ID
        const newUser: UserProps = {
            ...userData,
            id: Math.max(...users.map(u => u.id), 0) + 1
        };

        // Add the new user to the list
        setUsers(prevUsers => [...prevUsers, newUser]);

        console.log('New user added:', newUser);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">User Content</h1>
                    <button
                        onClick={openModal}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition duration-200"
                    >
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {
                        users?.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
                            <UserCard
                                id={id}
                                name={name}
                                username={username}
                                email={email}
                                address={address}
                                phone={phone}
                                website={website}
                                company={company}
                                key={key}
                            />
                        ))
                    }
                </div>
            </main>

            {/* User Modal */}
            {isModalOpen && (
                <UserModal
                    onClose={closeModal}
                    onSubmit={handleAddUser}
                />
            )}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default Users

