'use client'

import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Image from 'next/image'
import {Star} from 'lucide-react'

interface AcaiBowl {
    id: number;
    name: string;
    price: number;
    image: string;
    rating: number;
}

const acaiBowls: AcaiBowl[] = [
    {id: 1, name: 'Açaí elegante Tam P', price: 9.99, image: '/placeholder.svg?height=400&width=400', rating: 4.8},
    {id: 2, name: 'Açaí bora f1 Tam M', price: 11.99, image: '/placeholder.svg?height=400&width=400', rating: 4.9},
    {id: 3, name: 'Açaí larica Tam G', price: 10.99, image: '/placeholder.svg?height=400&width=400', rating: 4.7},
    {id: 4, name: 'Açaí Redenção Duplo', price: 12.99, image: '/placeholder.svg?height=400&width=400', rating: 4.6},
]

interface AcaiBowlCardProps {
    bowl: AcaiBowl;
    index: number;
}

function AcaiBowlCard({bowl, index}: AcaiBowlCardProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    // Função addToCart implementada localmente no componente
    const addToCart = () => {
        // Lógica da função, ex. enviar o item para o carrinho
        console.log(`Adicionando ${bowl.name} ao carrinho`);
    }

    return (
        <motion.div
            ref={ref}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            initial={{opacity: 0, y: 50}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.5, delay: index * 0.1}}
        >
            <div className="relative h-64">
                <Image
                    src={bowl.image}
                    alt={bowl.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-purple-700 dark:text-purple-300">{bowl.name}</h3>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-600 dark:text-gray-300 font-bold">${bowl.price.toFixed(2)}</p>
                    <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current"/>
                        <span className="ml-1 text-gray-600 dark:text-gray-300">{bowl.rating}</span>
                    </div>
                </div>
                <motion.button
                    onClick={addToCart}
                    className="w-full bg-purple-500 dark:bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-600 dark:hover:bg-purple-700 transition duration-300"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    )
}

interface FeaturedAcaiBowlsProps {
    addToCart?: () => void
}

export default function FeaturedAcaiBowls({}: FeaturedAcaiBowlsProps) {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200" id="menu">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-purple-800 dark:text-purple-200">Nossos Melhores
                    Produtos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {acaiBowls.map((bowl, index) => (
                        // Não passamos mais a prop addToCart aqui
                        <AcaiBowlCard key={bowl.id} bowl={bowl} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
