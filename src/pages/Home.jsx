import React from 'react'
import RecipeGrid from '../components/RecipeGrid'
import Search from '../components/Search'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Search />
            <RecipeGrid />
            <Footer />
        </div>
    )
}
