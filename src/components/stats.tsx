import { StatCard } from "./stat-card";
import { motion } from "framer-motion";

export function Stats() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <div className="min-h-screen bg-black relative py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    className="text-3xl md:text-[4rem] font-bold text-white mb-8 md:mb-16 leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="md:hidden">
                        WHY SHOULD <br />
                        YOU <span className="text-green-500">TRUST US?</span>
                    </span>
                    <span className="hidden md:block">
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            WHY SHOULD
                        </motion.span>
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            YOU{" "}
                            <span className="text-green-500">TRUST US?</span>
                        </motion.span>
                    </span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* First row */}
                    <motion.div
                        className="col-span-1 md:col-span-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <StatCard
                            title="CONVERSION RATE"
                            value="90%"
                            description="Our marketing campaigns achieve a 90% conversion rate, which is a testament to their effectiveness and efficiency."
                            index={1}
                        />
                    </motion.div>
                    <div className="hidden md:block md:col-span-4" />
                    <motion.div
                        className="col-span-1 md:col-span-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <StatCard
                            title="COMPLETED PROJECTS"
                            value="100+"
                            description="Our portfolio includes more than 100 successful projects that prove our professionalism and expertise."
                            index={2}
                        />
                    </motion.div>

                    {/* Second row */}
                    <div className="hidden md:block md:col-span-2" />
                    <motion.div
                        className="col-span-1 md:col-span-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <StatCard
                            title="SATISFIED CUSTOMERS"
                            value="70+"
                            description="More than 70 clients have entrusted us with their projects and were satisfied with the results of our work."
                            index={3}
                        />
                    </motion.div>
                    <motion.div
                        className="col-span-1 md:col-span-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <StatCard
                            title="SUPPORT"
                            value="24/7"
                            description="We provide round-the-clock support to help you whenever you need it."
                            index={4}
                        />
                    </motion.div>
                    <div className="hidden md:block md:col-span-2" />

                    {/* Third row */}
                    <motion.div
                        className="col-span-1 md:col-span-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <StatCard
                            title="POSITIVE FEEDBACK"
                            value="98%"
                            description="Our clients highly appreciate our work, as evidenced by 98% of positive feedback."
                            index={5}
                        />
                    </motion.div>
                    <motion.div
                        className="col-span-1 md:col-span-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <StatCard
                            title="EXPERTS IN THE TEAM"
                            value="20+"
                            description="Our team consists of more than 20 highly skilled professionals who are dedicated to your success."
                            index={6}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
