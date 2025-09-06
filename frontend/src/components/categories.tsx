import { Card } from "./card"
export function Categories() {
    return (
        <div className="max-w-screen-xl mx-auto my-10 px-4">
            <h1 className="text-3xl font-bold text-center">Nos catégories</h1>
            <p className="text-center text-gray-500 font-medium">Découvrez notre sélection de gourmets authentiques</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}