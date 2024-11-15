'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function HeroSection() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <motion.section
            ref={ref}
            className="bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 text-white py-20 transition-colors duration-200"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            id="home"
        >
            <div className="container mx-auto text-center px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    O açaí que tira seu tédio
                </motion.h2>
                <motion.p
                    className="text-xl mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Experimente o melhor do sabor brasileiro! Peça agora em 3 tamanhos ou no modelo duplo.
                </motion.p>
                <motion.button
                    className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 dark:hover:bg-gray-700 transition duration-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    Pedir agora!
                </motion.button>
            </div>
        </motion.section>
    )
}