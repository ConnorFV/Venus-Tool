export type Locale = 'en' | 'zh';

export const dictionaries = {
    en: {
        common: {
            more_details: "View Details",
            contact_us: "Contact Us",
            get_quote: "Get a Quote",
        },
        nav: {
            home: 'Home',
            product: 'Product Center',
            equipment: 'Enterprise Equipment',
            competitive: 'Core Advantages',
            about: 'About Us',
            contact: 'Contact Us',
        },
        home: {
            hero: {
                badge: 'To Be The Best Quality Mold Supplier',
                title1: 'Precision Engineering',
                title2: 'World-Class Quality',
                desc: 'Specializing in high-precision hardware mold design and production. We deliver progressive, transfer, and tandem dies with a commitment to excellence.',
                cta_primary: 'Explore Products',
                cta_secondary: 'Contact Us',
            },
            stats: {
                employees: 'Employees',
                facility: 'Facility Area',
                experience: 'Experience',
                precision: 'ISO 9001',
            },
            products: {
                title: 'Core Competencies',
                desc: 'We specialize in complex automotive and appliance tooling solutions, delivering robust dies for mass production.',
                p1_title: 'Progressive Dies',
                p1_desc: 'High-speed, high-precision progressive dies for mass production of complex parts.',
                p2_title: 'Transfer Dies',
                p2_desc: 'Versatile transfer systems suitable for deep drawing and large structural components.',
                p3_title: 'Tandem Dies-Line',
                p3_desc: 'Robust tandem line solutions for large-scale automotive body panels and frames.',
                learn_more: 'Learn more',
            },
            group: {
                title: 'Venus Wisdom & HaoRui',
                desc: 'Our group consists of specialized divisions located in Dongguan, China. **Venus-Wisdom** focuses on steel dies, while **Venus-HaoRui** specializes in cast dies. Together, we offer comprehensive tooling solutions for global clients.',
                loc1: 'Tangxia Town, Dongguan (Steel Dies)',
                loc2: 'Hengli Town, Dongguan (Cast Dies)',
                loc3: 'Headquarters in Central, Hong Kong',
                cta: 'About Our Company',
            },
            cta: {
                title: 'Ready to Start Your Project?',
                desc: 'Contact us today to discuss your tooling requirements. Our engineering team is ready to support you.',
                btn: 'Get a Quote',
            }
        },
        products: {
            title: 'Product Center',
            subtitle: 'Comprehensive Tooling Solutions for Global Industries',
            categories: {
                all: "All Products",
                progressive: "Progressive Dies",
                transfer: "Transfer Dies",
                tandem: "Tandem Dies",
                others: "Others"
            },
            items: [
                {
                    id: "p1",
                    category: "progressive",
                    title: "Automotive Connector Progressive Die",
                    desc: "High-precision progressive die for automotive electrical connectors. Features 1200SPM capability and carbide inserts.",
                },
                {
                    id: "p2",
                    category: "transfer",
                    title: "Deep Draw Transfer System",
                    desc: "Multi-station transfer die for motor housing manufacturing. Integrated with servo transfer system.",
                },
                {
                    id: "p3",
                    category: "tandem",
                    title: "Body Panel Tandem Line",
                    desc: "G1/G2 tandem line for automotive outer skin panels. High surface quality requirements.",
                },
                {
                    id: "p4",
                    category: "progressive",
                    title: "Home Appliance Motor Lamniation",
                    desc: "Interlocked motor core lamination die. Automatic stacking and rotation functions.",
                },
                {
                    id: "p5",
                    category: "others",
                    title: "Checking Fixtures",
                    desc: "High-precision CMM checking fixtures for stamped parts verification.",
                },
                {
                    id: "p6",
                    category: "others",
                    title: "Mechanical Hands",
                    desc: "Custom robotic end-effectors for automated press lines.",
                }
            ]
        },
        equipment: {
            title: 'Enterprise Equipment',
            subtitle: 'State-of-the-Art Manufacturing & Inspection Facilities',
            sections: {
                press: {
                    title: "Press Shop",
                    desc: "Our tryout center is equipped with a wide range of mechanical and hydraulic presses ranging from 200T to 1200T."
                },
                cnc: {
                    title: "CNC Machining",
                    desc: "High-speed and high-precision CNC centers ensure the accuracy of every die component."
                },
                qc: {
                    title: "Quality Control",
                    desc: "Advanced metrology lab with CMM and optical scanning ensures zero-defect delivery."
                }
            }
        },
        about: {
            title: "About Venus Tool",
            subtitle: "Professional Metal Mold Design & Manufacturing",
            intro: "VENUS TOOL is a group company with head office in Hong Kong and manufacturing facilities in Dongguan, China. Established with a vision to provide world-class tooling solutions, we have grown into a trusted partner for global automotive and home appliance manufacturers.",
            history: {
                title: "Company History",
                events: [
                    { year: "2008", desc: "Venus Tool Established in Hong Kong" },
                    { year: "2010", desc: "Set up Venus-Wisdom factory in Dongguan" },
                    { year: "2015", desc: "Expanded with Venus-HaoRui for Cast Dies" },
                    { year: "2020", desc: "Achieved ISO 9001:2015 Certification" },
                    { year: "2024", desc: "Expanded facility to 13,000 sqm" }
                ]
            },
            culture: {
                title: "Corporate Culture",
                values: [
                    { title: "Quality First", desc: "Quality is the life of enterprise." },
                    { title: "Customer Focus", desc: "We exist to serve our customers." },
                    { title: "Integrity", desc: "Honesty in all business dealings." },
                    { title: "Innovation", desc: "Continuous improvement in technology." }
                ]
            }
        },
        competitive: {
            title: "Core Advantages",
            subtitle: "Why Choose Venus Tool?",
            items: [
                {
                    title: "One-Stop Solution",
                    desc: "From initial design simulation (CAE) to manufacturing, assembly, and tryout, we provide end-to-end services under one roof."
                },
                {
                    title: "Global Standards",
                    desc: "We are well-versed in HASCO, DME, Misumi, and specific automotive standards for VW, GM, Ford, and Toyota."
                },
                {
                    title: "Advanced Technology",
                    desc: "Utilization of AutoForm for simulation and UG NX for 3D design to eliminate potential defects before manufacturing."
                },
                {
                    title: "Cost Efficiency",
                    desc: "Strategic location in Dongguan supply chain hub allows us to offer competitive pricing without compromising quality."
                },
                {
                    title: "Project Management",
                    desc: "Dedicated project managers for each client providing weekly progress reports and transparent communication."
                },
                {
                    title: "After-Sales Support",
                    desc: "Rapid response team for technical support and spare parts delivery to ensure your production never stops."
                }
            ]
        },
        contact: {
            title: "Contact Us",
            subtitle: "We look forward to hearing from you",
            form: {
                first_name: "First Name",
                last_name: "Last Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                submit: "Send Message"
            },
            info: {
                hk: "Hong Kong Headquarters",
                dg_wisdom: "Dongguan (Venus-Wisdom)",
                dg_haorui: "Dongguan (Venus-HaoRui)",
                phone: "Phone",
                email: "Email"
            }
        }
    },
    zh: {
        common: {
            more_details: "查看详情",
            contact_us: "联系我们",
            get_quote: "获取报价",
        },
        nav: {
            home: '首页',
            product: '产品中心',
            equipment: '企业设备',
            competitive: '核心优势',
            about: '关于我们',
            contact: '联系我们',
        },
        home: {
            hero: {
                badge: '致力于成为最好的优质模具供应商',
                title1: '精工细作',
                title2: '更高品质 客户满意',
                desc: '专业从事高精密五金模具设计与制造。我们致力于提供卓越的连续模、多工位机械手模具和单工序模具解决方案。',
                cta_primary: '浏览产品',
                cta_secondary: '联系我们',
            },
            stats: {
                employees: '员工人数',
                facility: '厂房面积',
                experience: '行业经验',
                precision: '认证标准',
            },
            products: {
                title: '核心业务',
                desc: '专注于汽车与家电行业的复杂模具解决方案，为大规模生产提供强有力的技术支持。',
                p1_title: '连续模 (Progressive Dies)',
                p1_desc: '适用于复杂零件大批量生产的高速、高精度连续模具。',
                p2_title: '机械手模具 (Transfer Dies)',
                p2_desc: '适用于深拉伸和大尺寸结构件的多工位传送系统。',
                p3_title: '工程模 (Tandem Dies)',
                p3_desc: '适用于大型汽车车身覆盖件和结构件的串联模具线。',
                learn_more: '了解更多',
            },
            group: {
                title: '劲鼎五金 & 浩瑞模具',
                desc: '集团在东莞设有两大专业制造分部。**劲鼎五金 (Venus-Wisdom)** 专注于钢板模具（连续/机械手/工程模），**浩瑞模具 (Venus-HaoRui)** 专注于铸铁模具。我们为全球客户提供一站式模具解决方案。',
                loc1: '东莞塘厦 (劲鼎 - 钢板模)',
                loc2: '东莞横沥 (浩瑞 - 铸铁模)',
                loc3: '香港中环 (集团总部)',
                cta: '了解公司概况',
            },
            cta: {
                title: '准备好开始您的项目了吗？',
                desc: '立即联系我们讨论您的模具需求。我们的工程团队随时准备为您提供支持。',
                btn: '获取报价',
            }
        },
        products: {
            title: '产品中心',
            subtitle: '面向全球工业的综合模具解决方案',
            categories: {
                all: "全部产品",
                progressive: "连续模",
                transfer: "机械手模具",
                tandem: "工程模",
                others: "其他产品"
            },
            items: [
                {
                    id: "p1",
                    category: "progressive",
                    title: "汽车连接器连续模",
                    desc: "用于汽车精密连接器的高速连续模具。具备1200SPM冲速能力，采用硬质合金镶件。",
                },
                {
                    id: "p2",
                    category: "transfer",
                    title: "电机外壳多工位模具",
                    desc: "用于电机外壳制造的多工位机械手传送模具。集成了伺服传送系统，适合深拉伸工艺。",
                },
                {
                    id: "p3",
                    category: "tandem",
                    title: "汽车覆盖件工程模",
                    desc: "用于汽车外板件（如门板、引擎盖）的G1/G2工程模线。拥有极高的表面质量要求。",
                },
                {
                    id: "p4",
                    category: "progressive",
                    title: "家电电机定转子模具",
                    desc: "具备自动叠铆和旋转积层功能的电机铁芯级进模具。",
                },
                {
                    id: "p5",
                    category: "others",
                    title: "检具 (Checking Fixtures)",
                    desc: "用于冲压件尺寸验证的高精度CMM支架检具。",
                },
                {
                    id: "p6",
                    category: "others",
                    title: "机械手/自动化末端",
                    desc: "为自动化冲压线定制的真空吸盘和夹具末端执行器。",
                }
            ]
        },
        equipment: {
            title: '企业设备',
            subtitle: '尖端的制造与检测设施',
            sections: {
                press: {
                    title: "冲压车间",
                    desc: "我们的试模中心配备了从 200T 到 1200T 的各类机械和液压压力机，满足不同吨位模具的试模需求。"
                },
                cnc: {
                    title: "CNC 加工中心",
                    desc: "高速、高精度的 CNC 加工中心确保了每一个模具零部件的精确度，最大行程可达 4 米。"
                },
                qc: {
                    title: "品质检测",
                    desc: "配备三坐标测量仪 (CMM)、蓝光扫描仪和光学投影仪的恒温实验室，确保零缺陷交付。"
                }
            }
        },
        about: {
            title: "关于我们",
            subtitle: "专业的五金模具设计与制造商",
            intro: "VENUS TOOL 是一家总部位于香港、生产基地位于中国东莞的集团公司。自成立以来，我们始终致力于提供世界级的模具解决方案，现已成长为全球汽车和家电制造商信赖的合作伙伴。",
            history: {
                title: "发展历程",
                events: [
                    { year: "2008", desc: "Venus Tool 在香港成立" },
                    { year: "2010", desc: "在东莞建立劲鼎 (Venus-Wisdom) 工厂" },
                    { year: "2015", desc: "扩展浩瑞 (Venus-HaoRui) 铸铁模分部" },
                    { year: "2020", desc: "通过 ISO 9001:2015 质量体系认证" },
                    { year: "2024", desc: "厂房面积扩建至 13,000 平方米" }
                ]
            },
            culture: {
                title: "企业文化",
                values: [
                    { title: "质量第一", desc: "质量是企业的生命。" },
                    { title: "客户至上", desc: "我们的存在是为了服务客户。" },
                    { title: "诚信正直", desc: "在所有商业往来中保持诚实。" },
                    { title: "持续创新", desc: "在技术和工艺上不断追求进步。" }
                ]
            }
        },
        competitive: {
            title: "核心优势",
            subtitle: "为什么选择 Venus Tool？",
            items: [
                {
                    title: "一站式解决方案",
                    desc: "从早期的 CAE 模流分析、结构设计，到制造、组装和试模，我们在内部提供全流程服务。"
                },
                {
                    title: "国际标准",
                    desc: "我们熟悉 HASCO, DME, Misumi 等国际标准，并精通大众、通用、福特、丰田等车企的特定模具规范。"
                },
                {
                    title: "先进技术",
                    desc: "使用 AutoForm 进行成型分析，使用 UG NX 进行全 3D 设计，在制造前消除潜在缺陷。"
                },
                {
                    title: "成本效益",
                    desc: "位于东莞这一全球制造中心，使我们能够提供极具竞争力的价格，同时不牺牲品质。"
                },
                {
                    title: "项目管理",
                    desc: "为每个客户指派专职项目经理，提供周报和透明的沟通，确保项目按期交付。"
                },
                {
                    title: "售后支持",
                    desc: "快速响应的技术支持团队和备件交付服务，确保您的生产永不停歇。"
                }
            ]
        },
        contact: {
            title: "联系我们",
            subtitle: "期待您的垂询",
            form: {
                first_name: "名",
                last_name: "姓",
                email: "电子邮箱",
                subject: "主题",
                message: "留言内容",
                submit: "发送消息"
            },
            info: {
                hk: "香港总部",
                dg_wisdom: "东莞工厂 (劲鼎)",
                dg_haorui: "东莞工厂 (浩瑞)",
                phone: "联系电话",
                email: "电子邮箱"
            }
        }
    }
};
