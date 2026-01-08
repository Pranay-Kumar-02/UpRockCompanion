import { motion } from "framer-motion";

const features = [
    { title: "Listens", desc: "Always attentive to your voice and emotion" },
    { title: "Understands", desc: "Learns your patterns over time" },
    { title: "Supports", desc: "Responds with empathy and clarity" }
];

export default function Features() {
    return (
        <section className="features">
            {features.map((f, i) => (
                <motion.div
                    className="card"
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                >
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                </motion.div>
            ))}
        </section>
    );
}