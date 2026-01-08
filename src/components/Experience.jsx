import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                A calm presence in a noisy world
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                Companion adapts, remembers, and evolves — just like a real presence.
            </motion.p>
        </section>
    );
}