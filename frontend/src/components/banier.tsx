import composer from '../assets/composer.gif'
import ban from '../assets/ban.png'
import apple from '../assets/apple.png'
import water from '../assets/water.png'

export function Banier() {
    return (
        <div className="bg-[#2EB6BC] text-white p-4 h-[70vh] flex items-center justify-center mt-[80px] w-full">
            <div className='max-w-[600px]'>
                <h1 className="text-4xl font-bold mb-4">Des gourmets crémeux personnalisables</h1>
                <p>Créez votre gourmet parfait avec nos fruits frais, sauces délicieuses et céréales croquantes. Livraison rapide à domicile.</p>
                <div className="action flex space-x-4 rtl:space-x-reverse mt-6">
                    <button className="bg-white text-[#2EB6BC] font-bold py-2 px-4 rounded"><img src={composer} alt="baguette magique" className='inline-block mr-2 w-[28px] h-[32px]' />Composer mon gourmet</button>
                    <button className="bg-transparent border border-white rounded text-white font-bold py-2 px-4">Voir le menu</button>
                </div>
            </div>
            <div className='w-[400px] ml-10 relative'>
                <img src={ban} alt="Bannière" className='w-full h-auto rounded-2xl' />
                <div className='absolute bottom-[-50px] left-[-50px] bg-white text-[#374151] font-bold py-11 px-3 rounded-lg flex items-center space-x-3 rtl:space-x-reverse'>
                    <img src={apple} alt="Pomme" className='inline-block w-[28px] h-[32px]' />
                    Fruits frais
                </div>
                <div className='absolute top-[-50px] right-[-50px] bg-white text-[#374151] font-bold py-10 px-3 rounded-lg flex items-center space-x-3 rtl:space-x-reverse'>
                    <img src={water} alt="Eau" className='inline-block w-[28px] h-[32px]' />
                    Sauces
                </div>
            </div>
        </div>
    )
}