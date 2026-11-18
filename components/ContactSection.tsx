'use client';

import React from 'react';
import { Typography, Form, Input, Button, Row, Col } from 'antd';
import { SendOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactSection = () => {
    const [form] = Form.useForm();

    const onFinish = (values: { name: string; email: string; subject: string; message: string }) => {
        const mailtoLink = `mailto:sonupal99082@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-24 bg-transparent text-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <Title level={2} className="text-glow" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}>
                        Connect
                    </Title>
                    <Paragraph className="text-gray-400 text-lg">
                        Let&apos;s build something <span className="text-[#722ed2] font-bold">legendary</span> together.
                    </Paragraph>
                   
                </div>

                {/* Direct Contact Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
                >
                    <a
                        href="mailto:sonupal99082@gmail.com"
                        className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-[#722ed2] hover:bg-white/[0.08] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#722ed2]/20 flex items-center justify-center text-[#722ed2] text-xl group-hover:scale-110 transition-transform">
                            <MailOutlined />
                        </div>
                        <div className="overflow-hidden">
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Email Me</div>
                            <div className="text-white font-medium text-sm group-hover:text-[#722ed2] transition-colors truncate">
                                sonupal99082@gmail.com
                            </div>
                        </div>
                    </a>

                    <a
                        href="tel:8729004969"
                        className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/10 hover:border-[#2e72d2] hover:bg-white/[0.08] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[#2e72d2]/20 flex items-center justify-center text-[#2e72d2] text-xl group-hover:scale-110 transition-transform">
                            <PhoneOutlined />
                        </div>
                        <div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Call / WhatsApp</div>
                            <div className="text-white font-medium text-sm group-hover:text-[#2e72d2] transition-colors">
                                +91 8729004969
                            </div>
                        </div>
                    </a>

                    <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/10">
                        <div className="w-12 h-12 rounded-xl bg-[#10b981]/20 flex items-center justify-center text-[#10b981] text-xl">
                            <EnvironmentOutlined />
                        </div>
                        <div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold">Location</div>
                            <div className="text-white font-medium text-sm">
                                Mohali, Punjab, India
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 md:p-12 rounded-[2rem] border-white/5"
                >
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        size="large"
                        className="contact-form"
                    >
                        <Row gutter={24}>
                            <Col xs={24} md={12}>
                                <Form.Item name="name" rules={[{ required: true, message: 'Who are you?' }]}>
                                    <Input
                                        placeholder="Full Name"
                                        className="bg-white/5 border-white/10 text-white rounded-xl h-14 hover:border-[#722ed2] focus:border-[#722ed2] focus:bg-white/10 transition-all duration-300"
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item name="email" rules={[{ required: true, message: 'Where can I reach you?' }, { type: 'email', message: 'Invalid address!' }]}>
                                    <Input
                                        placeholder="Email Address"
                                        className="bg-white/5 border-white/10 text-white rounded-xl h-14 hover:border-[#722ed2] focus:border-[#722ed2] focus:bg-white/10 transition-all duration-300"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item name="subject" rules={[{ required: true, message: 'What is this about?' }]}>
                            <Input
                                placeholder="Subject"
                                className="bg-white/5 border-white/10 text-white rounded-xl h-14 hover:border-[#722ed2] focus:border-[#722ed2] focus:bg-white/10 transition-all duration-300"
                            />
                        </Form.Item>

                        <Form.Item name="message" rules={[{ required: true, message: 'Tell me everything!' }]}>
                            <TextArea
                                rows={5}
                                placeholder="Your Message..."
                                className="bg-white/5 border-white/10 text-white rounded-xl hover:border-[#722ed2] focus:border-[#722ed2] focus:bg-white/10 transition-all duration-300 pt-4"
                            />
                        </Form.Item>

                        <Form.Item className="text-center mb-0 mt-4">
                            <Button
                                type="primary"
                                htmlType="submit"
                                icon={<SendOutlined />}
                                size="large"
                                className="glass-btn bg-[#722ed2] hover:!bg-[#9254de] border-none px-12 h-16 rounded-2xl font-bold text-lg"
                            >
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
