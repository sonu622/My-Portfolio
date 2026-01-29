import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

const themeConfig: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        colorPrimary: '#722ed1',
        colorBgBase: '#050505', // Deeper Black for premium feel
        colorBgContainer: '#141414', // Slightly lighter for cards/containers
        colorTextBase: '#ffffff',
        borderRadius: 8,
    },
    components: {
        Button: {
            fontWeight: 600,
        },
        Layout: {
            bodyBg: '#050505',
            headerBg: 'rgba(5, 5, 5, 0.8)',
        },
    },
};

export default themeConfig;
