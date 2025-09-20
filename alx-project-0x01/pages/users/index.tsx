import React from 'react'
import Header from '@/components/layout/Header'

const Users = () => {
    return (
        <div>
            <Header />
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

