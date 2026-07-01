import { DevData } from '@/types/devTypes'

export const pt: DevData = {
    name: "Amanda Oliveira",
    resume: "https://jauregao.github.io/cv/files/Desenvolvedora-Amanda_Oliveira.pdf",
    social: [
        {
            name: "github",
            link: "https://github.com/jauregao/",
            icon: "/assets/social/github.svg"
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/amandaj-/",
            icon: "/assets/social/linkedin.svg"
        },
        {
            name: "behance",
            link: "https://www.behance.net/amandaj/",
            icon: "/assets/social/behance.svg"
        },
        {
            name: "whatsapp",
            link: "https://wa.me/5521978911990/",
            icon: "/assets/social/whatsapp.svg"
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/amandajauregui.dev/",
            icon: "/assets/social/instagram.svg"
        }
    ],
    infos: {
        about: "Sou desenvolvedora Fullstack com foco em backend, atuando no desenvolvimento de aplicações seguras, escaláveis e bem estruturadas. Trabalho principalmente com Node.js, TypeScript, NestJS, PostgreSQL e Next.js, aplicando boas práticas de arquitetura, testes, integração de APIs e organização de sistemas no dia a dia./Tenho experiência em ambientes colaborativos e multidisciplinares, participando desde o levantamento de requisitos até a implementação de features, manutenção de aplicações, refatoração de código e definição de soluções técnicas. Também atuo com infraestrutura web, hospedagens, servidores VPS, bancos de dados e integração de serviços externos./Além da atuação como desenvolvedora, também trabalho com educação e mentoria técnica. Atualmente sou mentora no programa Aceleradora Ágil e Inclusiva da Tecnopuc, onde acompanho desenvolvedoras em formação, ministro aulas de desenvolvimento web, conduzo pair programming, reviso código e contribuo na construção de trilhas de aprendizado voltadas para prática de mercado e autonomia técnica./Minha trajetória me permitiu desenvolver forte capacidade de adaptação, aprendizado rápido e resolução prática de problemas. Tenho interesse especial em backend, arquitetura de software, microsserviços e cloud computing com AWS, buscando constantemente evoluir tecnicamente e participar de projetos que gerem impacto real./Atualmente curso Sistemas de Computação na Universidade Federal Fluminense, conciliando formação acadêmica com atuação prática no mercado de tecnologia.",
        techIcons: [
            {
                name: "Docker",
                path: "/assets/techs/Docker.svg"
            },
            {
                name: "Git",
                path: "/assets/techs/Git.svg"
            },
            {
                name: "JavaScript",
                path: "/assets/techs/JavaScript.svg"
            },
            { 
                name: "Jest",
                path: "/assets/techs/Jest.svg"
            },
            {
                name: "MongoDB",
                path: "/assets/techs/MongoDB.svg"
            },
            {
                name: "MySQL",
                path: "/assets/techs/MySQL-Dark.svg"
            },
            {
                name: "NestJS",
                path: "/assets/techs/NestJS-Dark.svg"
            },
            {
                name: "NextJS",
                path: "/assets/techs/NextJS-Dark.svg"
            },
            {
                name: "NodeJS",
                path: "/assets/techs/NodeJS-Dark.svg"
            },
            {
                name: "PostgreSQL",
                path: "/assets/techs/PostgreSQL-Dark.svg"
            },
            {
                name: "Postman",
                path: "/assets/techs/Postman.svg"
            },
            {
                name: "React",
                path: "/assets/techs/React-Dark.svg"
            },
            {
                name: "Tailwind",
                path: "/assets/techs/TailwindCSS-Dark.svg"
            },
            {
                name: "TypeScript",
                path: "/assets/techs/TypeScript.svg"
            },
            {
                name: "Redis",
                path: "/assets/techs/redis-logo.svg"
            },
            // {
            //     name: "GitHub Actions",
            //     path: "/assets/techs/githubactions.svg"
            // },
            {
                name: "AWS",
                path: "/assets/techs/AWS-Dark.svg"
            },
            {
                name: "Linux",
                path: "/assets/techs/Linux-Logo.wine.svg"
            },
            {
                name: "Figma",
                path: "/assets/techs/Figma-Dark.svg"
            },
            {
                name: "Wordpress",
                path: "/assets/techs/Wordpress.svg"
            },
            {
                name: "Elementor",
                path: "/assets/techs/elementor-icon.svg"
            },
        ]
    },
    ui: {
        aboutTitle: "Sobre Mim",
        hardSkills: "Hard Skills",
        projects: "Projetos",
        techUsed: "Tecnologias utilizadas",
        repository: "REPOSITÓRIO",
        deploy: "DEPLOY",
        fullstackDev: "Desenvolvedora FullStack",
        downloadCV: "Download CV",
        phone: "telefone",
        email: "email",
        location: "localização",
        copy: "Copiar",
        copied: "Copiado",
        langButton: "PORTUGUÊS",
    },
    projects: [
        { 
            id: 0,
            name: "Product Manager (Desafio Técnico)",
            stack: ["FullStack", "Monorepo"],
            path: "/assets/projects-img/pdv.jpg",
            description: "Monorepo fullstack para gerenciamento de produtos, desenvolvido como parte de desafio técnico da Coderlab. Possui backend em NestJS com Prisma e PostgreSQL, implementando regras de negócio robustas para produtos e categorias, além de frontend em React 19 com React Router, React Hook Form e Tailwind CSS. O backend entrega API RESTful, validações fortes, controladores e serviços desacoplados. O frontend prioriza clareza, organização por componentes e hooks, além de tipagem TypeScript explícita no contrato entre páginas e API. Infraestrutura local orquestrada com Docker Compose. Sem deploy externo com foco em arquitetura e código local.",
            techs: [
                "TypeScript",
                "NestJS",
                "Prisma",
                "PostgreSQL",
                "Docker Compose",
                "React 19",
                "React Router 7",
                "React Hook Form",
                "Tailwind CSS",
                "class-validator"
            ],
            repository: "https://github.com/jauregao/desafio-tec-coderlab",
            deploy: ""
        },
        {
            id: 12,
            name: "Finance Control",
            stack: ["BackEnd", "FrontEnd", "Mobile"],
            path: "/assets/projects-img/pdv.jpg",
            description: "Plataforma fullstack de controle financeiro pessoal desenvolvida de forma independente, com foco em arquitetura robusta, segurança e boas práticas de produção. O backend conta com autenticação Firebase + JWT, rate limiting, segurança HTTP com Helmet, interceptors globais, documentação Swagger e módulos de transações, categorias e metas de poupança. O app mobile possui autenticação Google OAuth, rotas protegidas, tema claro/escuro e build configurado para Android e iOS via EAS. A versão web está em desenvolvimento com Next.js.",
            techs: [
                "TypeScript",
                "NestJS",
                "PostgreSQL",
                "PrismaORM",
                "Firebase",
                "JWT",
                "PassportJS",
                "Docker",
                "Swagger",
                "Helmet",
                "Jest",
                "React Native",
                "Expo",
                "Axios",
                "Next.js"
            ],
            repository: "https://github.com/jauregao/finance-control",
            deploy: ""
        },
        {
            id: 1,
            name: "Rede Social para Esportistas",
            stack: ["BackEnd", "FrontEnd"],
            path: "/assets/projects-img/pdv.jpg",
            description: "Como parte de um projeto em conjunto com os instrutores da Cubo's Academy, desenvolvemos uma rede social para conectar esportistas.",
            techs: [
                "TypeScript",
                "NodeJS",
                "NestJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "Cors",
                "NodeMailer",
                "Supabase",
                "PostgreSQL",
                "PrismaORM",
                "PassportJS",
                "Jest",
                "Handlebars",
                "React",
                "Zod",
                "DateFNS",
                "Axios",
                "MUI",
                "React Hook Form",
                "React Cookie"
            ],
            repository: "https://github.com/orgs/Move-HandsOn/repositories",
            deploy: ""
        },
        {
            id: 2,
            name: "Sistema de Gerenciamento de Caixa",
            stack: ["BackEnd"],
            path: "/assets/projects-img/pdv.jpg",
            description: "Como projeto final do curso de BackEnd da Cubos Academy, criamos um sistema de gerenciamento de caixa para facilitar a administração de vendas. O sistema permite cadastro seguro de usuários, gestão de clientes e produtos, e criação de registros de venda com confirmação por e-mail. Liderando um time de cinco desenvolvedoras, organizei tarefas, gerenciei prazos e supervisionei testes e deploy. Em quatro sprints, concluímos o projeto de forma eficiente e pontual, garantindo funcionalidade e segurança. Esse projeto mostrou minha capacidade de liderança e gestão de projetos, destacando minha eficiência na resolução de problemas e entrega de soluções completas.",
            techs: [
                "JavaScript",
                "NodeJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "Cors",
                "NodeMailer",
                "AWS S3",
                "PostgreSQL",
                "Knex"
            ],
            repository: "https://github.com/jauregao/desafio-backend-modulo-05-sistema-pdv",
            deploy: ""
        },
        {
            id: 3,
            name: "Sistema de Autenticação",
            stack: ["BackEnd"],
            path: "/assets/projects-img/auth.jpg",
            description: "O Sistema de Autenticação é uma aplicação de gerenciamento de usuários, desenvolvida para facilitar a criação e autenticação de contas. Permite aos usuários criar contas e armazenar suas informações no banco de dados, além de realizar a autenticação, permitindo que alterem suas informações de cadastro e excluam suas contas.",
            techs: [
                "TypeScript",
                "NodeJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "PostgreSQL",
                "Knex"
            ],
            repository: "https://github.com/jauregao/auth-system",
            deploy: ""
        },
        {
            id: 4,
            name: "Mini Rede Social",
            stack: ["BackEnd"],
            path: "/assets/projects-img/networkl.jpg",
            description: "A Mini Rede Social é uma aplicação onde os usuários podem postar imagens e interagir com outros posts. Possui funcionalidades de cadastro de usuário, permitindo a criação, atualização, listagem, detalhamento e desativação de contas. Também permite a criação, atualização, listagem, detalhamento e exclusão de posts, além de oferecer curtidas únicas e comentários em cada post.",
            techs: [
                "TypeScript",
                "MongoDB",
                "AWS S3",
                "Express",
                "Mongoose",
                "Multer",
                "DotEnv",
                "Docker"
            ],
            repository: "https://github.com/jauregao/social-network-mongodb",
            deploy: ""
        },
        {
            id: 5,
            name: "Sistema de Cadastro de Vídeo Aulas",
            stack: ["BackEnd"],
            path: "/assets/projects-img/orm.jpg",
            description: "O Sistema de Cadastro de Vídeo Aulas é um aplicativo de gerenciamento de vídeo aulas que permite a usuários administradores cadastrar cursos e vídeo aulas para acesso dos alunos. O sistema permite o cadastro de usuários, possibilitando a criação e armazenamento de contas no banco de dados, bem como a autenticação dos usuários, com a opção de alterar informações de cadastro e excluir contas. Além disso, administradores podem cadastrar, atualizar e excluir cursos na plataforma.",
            techs: [
                "TypeScript",
                "NodeJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "PostgreSQL",
                "TypeORM"
            ],
            repository: "https://github.com/jauregao/restapi-w-typeorm/",
            deploy: ""
        },
        {
            id: 6,
            name: "Blog - Subverso",
            stack: ["LowCode"],
            path: "/assets/projects-img/subverso.png",
            description: "Blog desenvolvido a pedido do tatuador Darko Monteiro para tatuadores undergrounds.",
            techs: [
                "Wordpress",
                "Elementor"
            ],
            repository: "",
            deploy: "https://subverso.blog/"
        },
        {
            id: 7,
            name: "E-Commerce - CyberDarko",
            stack: ["LowCode"],
            path: "/assets/projects-img/cyberdarko.png",
            description: "E-Commerce desenvolvido para o tatuador Darko Monteiro, com venda de produtos e agendamento de sessões de tatuagem.",
            techs: [
                "Wordpress",
                "Elementor",
                "WooCommerce"
            ],
            repository: "",
            deploy: "https://cyberdarko.com"
        },
        {
            id: 8,
            name: "Site Institucional - Grupo Projese",
            stack: ["LowCode"],
            path: "/assets/projects-img/grupo-projese.jpg",
            description: "Site desenvolvido para a empresa Projese, como freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://projese.com.br/"
        },
        {
            id: 9,
            name: "Site Institucional - Administradora de Bens",
            stack: ["LowCode"],
            path: "/assets/projects-img/projese-adm.jpg",
            description: "Site desenvolvido para a empresa Projese, como freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://administracao.projese.com.br/"
        },
        {
            id: 10,
            name: "Site Institucional - Empreendimentos",
            stack: ["LowCode"],
            path: "/assets/projects-img/projese-empr.jpg",
            description: "Site desenvolvido para a empresa, como freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://empreendimentos.projese.com.br/"
        },
        {
            id: 11,
            name: "Site Institucional - Inteligência Imobiliária",
            stack: ["LowCode"],
            path: "/assets/projects-img/projese-inte.jpg",
            description: "Site desenvolvido para a empresa, como freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://inteligencia.projese.com.br/"
        },
    ]
};

export const en: DevData = {
    name: "Amanda Oliveira",
    resume: "https://jauregao.github.io/cv/files/Amanda_Oliveira_EN.pdf",
    social: [
        {
            name: "github",
            link: "https://github.com/jauregao/",
            icon: "/assets/social/github.svg"
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/amandaj-/",
            icon: "/assets/social/linkedin.svg"
        },
        {
            name: "behance",
            link: "https://www.behance.net/amandaj/",
            icon: "/assets/social/behance.svg"
        },
        {
            name: "whatsapp",
            link: "https://wa.me/5521978911990/",
            icon: "/assets/social/whatsapp.svg"
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/amandajauregui.dev/",
            icon: "/assets/social/instagram.svg"
        }
    ],
    infos: {
        about: "I'm a Fullstack developer focused on backend, working on building secure, scalable, and well-structured applications. I primarily work with Node.js, TypeScript, NestJS, PostgreSQL, and Next.js, applying best practices in architecture, testing, API integration, and system organization on a daily basis./I have experience in collaborative and multidisciplinary environments, participating from requirements gathering to feature implementation, application maintenance, code refactoring, and technical solution definition. I also work with web infrastructure, hosting, VPS servers, databases, and external service integration./In addition to development, I work in education and technical mentorship. I'm currently a mentor at the Aceleradora Ágil e Inclusiva program at Tecnopuc, where I support developers in training, teach web development classes, conduct pair programming sessions, review code, and contribute to building learning paths focused on market practice and technical autonomy./My journey has allowed me to develop strong adaptability, quick learning, and practical problem-solving skills. I have a special interest in backend, software architecture, microservices, and cloud computing with AWS, constantly seeking to evolve technically and participate in projects that generate real impact./I'm currently studying Computer Systems at Universidade Federal Fluminense, balancing academic education with hands-on experience in the tech market.",
        techIcons: [
            { name: "Docker", path: "/assets/techs/Docker.svg" },
            { name: "Git", path: "/assets/techs/Git.svg" },
            { name: "JavaScript", path: "/assets/techs/JavaScript.svg" },
            { name: "Jest", path: "/assets/techs/Jest.svg" },
            { name: "MongoDB", path: "/assets/techs/MongoDB.svg" },
            { name: "MySQL", path: "/assets/techs/MySQL-Dark.svg" },
            { name: "NestJS", path: "/assets/techs/NestJS-Dark.svg" },
            { name: "NextJS", path: "/assets/techs/NextJS-Dark.svg" },
            { name: "NodeJS", path: "/assets/techs/NodeJS-Dark.svg" },
            { name: "PostgreSQL", path: "/assets/techs/PostgreSQL-Dark.svg" },
            { name: "Postman", path: "/assets/techs/Postman.svg" },
            { name: "React", path: "/assets/techs/React-Dark.svg" },
            { name: "Tailwind", path: "/assets/techs/TailwindCSS-Dark.svg" },
            { name: "TypeScript", path: "/assets/techs/TypeScript.svg" },
            { name: "Redis", path: "/assets/techs/redis-logo.svg" },
            { name: "AWS", path: "/assets/techs/AWS-Dark.svg" },
            { name: "Linux", path: "/assets/techs/Linux-Logo.wine.svg" },
            { name: "Figma", path: "/assets/techs/Figma-Dark.svg" },
            { name: "Wordpress", path: "/assets/techs/Wordpress.svg" },
            { name: "Elementor", path: "/assets/techs/elementor-icon.svg" },
        ]
    },
    ui: {
        aboutTitle: "About Me",
        hardSkills: "Hard Skills",
        projects: "Projects",
        techUsed: "Technologies used",
        repository: "REPOSITORY",
        deploy: "DEPLOY",
        fullstackDev: "FullStack Developer",
        downloadCV: "Download Resume",
        phone: "phone",
        email: "email",
        location: "location",
        copy: "Copy",
        copied: "Copied",
        langButton: "ENGLISH",
    },
    projects: [
        {
            id: 0,
            name: "Product Manager (Technical Challenge)",
            stack: ["FullStack", "Monorepo"],
            path: "/assets/projects-img/pdv.jpg",
            description: "Fullstack monorepo for product management, developed as part of a technical challenge from Coderlab. Features a NestJS backend with Prisma and PostgreSQL, implementing robust business rules for products and categories, plus a React 19 frontend with React Router, React Hook Form, and Tailwind CSS. The backend delivers a RESTful API with strong validations, decoupled controllers and services. The frontend prioritizes clarity, organization by components and hooks, and explicit TypeScript typing in the contract between pages and API. Local infrastructure orchestrated with Docker Compose. No external deployment, focusing on architecture and local code.",
            techs: [
                "TypeScript",
                "NestJS",
                "Prisma",
                "PostgreSQL",
                "Docker Compose",
                "React 19",
                "React Router 7",
                "React Hook Form",
                "Tailwind CSS",
                "class-validator"
            ],
            repository: "https://github.com/jauregao/desafio-tec-coderlab",
            deploy: ""
        },
        {
            id: 12,
            name: "Finance Control",
            stack: ["BackEnd", "FrontEnd", "Mobile"],
            path: "/assets/projects-img/pdv.jpg",
            description: "Fullstack personal finance control platform developed independently, focusing on robust architecture, security, and production best practices. The backend features Firebase + JWT authentication, rate limiting, HTTP security with Helmet, global interceptors, Swagger documentation, and modules for transactions, categories, and savings goals. The mobile app features Google OAuth authentication, protected routes, light/dark theme, and build configured for Android and iOS via EAS. The web version is under development with Next.js.",
            techs: [
                "TypeScript",
                "NestJS",
                "PostgreSQL",
                "PrismaORM",
                "Firebase",
                "JWT",
                "PassportJS",
                "Docker",
                "Swagger",
                "Helmet",
                "Jest",
                "React Native",
                "Expo",
                "Axios",
                "Next.js"
            ],
            repository: "https://github.com/jauregao/finance-control",
            deploy: ""
        },
        {
            id: 1,
            name: "Social Network for Athletes",
            stack: ["BackEnd", "FrontEnd"],
            path: "/assets/projects-img/pdv.jpg",
            description: "As part of a joint project with Cubo's Academy instructors, we developed a social network to connect athletes.",
            techs: [
                "TypeScript",
                "NodeJS",
                "NestJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "Cors",
                "NodeMailer",
                "Supabase",
                "PostgreSQL",
                "PrismaORM",
                "PassportJS",
                "Jest",
                "Handlebars",
                "React",
                "Zod",
                "DateFNS",
                "Axios",
                "MUI",
                "React Hook Form",
                "React Cookie"
            ],
            repository: "https://github.com/orgs/Move-HandsOn/repositories",
            deploy: ""
        },
        {
            id: 2,
            name: "Cash Management System",
            stack: ["BackEnd"],
            path: "/assets/projects-img/pdv.jpg",
            description: "As the final project for Cubos Academy's BackEnd course, we created a cash management system to streamline sales administration. The system enables secure user registration, customer and product management, and sales record creation with email confirmation. Leading a team of five developers, I organized tasks, managed deadlines, and oversaw testing and deployment. In four sprints, we completed the project efficiently and on time, ensuring functionality and security. This project showcased my leadership and project management skills, highlighting my efficiency in problem-solving and delivering complete solutions.",
            techs: [
                "JavaScript",
                "NodeJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "Cors",
                "NodeMailer",
                "AWS S3",
                "PostgreSQL",
                "Knex"
            ],
            repository: "https://github.com/jauregao/desafio-backend-modulo-05-sistema-pdv",
            deploy: ""
        },
        {
            id: 3,
            name: "Authentication System",
            stack: ["BackEnd"],
            path: "/assets/projects-img/auth.jpg",
            description: "The Authentication System is a user management application developed to facilitate account creation and authentication. It allows users to create accounts and store their information in the database, as well as perform authentication, enabling them to change their registration information and delete their accounts.",
            techs: [
                "TypeScript",
                "NodeJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "PostgreSQL",
                "Knex"
            ],
            repository: "https://github.com/jauregao/auth-system",
            deploy: ""
        },
        {
            id: 4,
            name: "Mini Social Network",
            stack: ["BackEnd"],
            path: "/assets/projects-img/networkl.jpg",
            description: "The Mini Social Network is an application where users can post images and interact with other posts. It features user registration, allowing creation, updating, listing, detailing, and deactivation of accounts. It also allows creating, updating, listing, detailing, and deleting posts, in addition to offering unique likes and comments on each post.",
            techs: [
                "TypeScript",
                "MongoDB",
                "AWS S3",
                "Express",
                "Mongoose",
                "Multer",
                "DotEnv",
                "Docker"
            ],
            repository: "https://github.com/jauregao/social-network-mongodb",
            deploy: ""
        },
        {
            id: 5,
            name: "Video Lesson Registration System",
            stack: ["BackEnd"],
            path: "/assets/projects-img/orm.jpg",
            description: "The Video Lesson Registration System is a video lesson management application that allows admin users to register courses and video lessons for student access. The system enables user registration, allowing creation and storage of accounts in the database, as well as user authentication, with the option to change registration information and delete accounts. Additionally, admins can register, update, and delete courses on the platform.",
            techs: [
                "TypeScript",
                "NodeJS",
                "Express",
                "JsonWebToken",
                "Bcrypt",
                "DotEnv",
                "PostgreSQL",
                "TypeORM"
            ],
            repository: "https://github.com/jauregao/restapi-w-typeorm/",
            deploy: ""
        },
        {
            id: 6,
            name: "Blog - Subverso",
            stack: ["LowCode"],
            path: "/assets/projects-img/subverso.png",
            description: "Blog developed at the request of tattoo artist Darko Monteiro for underground tattoo artists.",
            techs: [
                "Wordpress",
                "Elementor"
            ],
            repository: "",
            deploy: "https://subverso.blog/"
        },
        {
            id: 7,
            name: "E-Commerce - CyberDarko",
            stack: ["LowCode"],
            path: "/assets/projects-img/cyberdarko.png",
            description: "E-Commerce developed for tattoo artist Darko Monteiro, with product sales and tattoo session scheduling.",
            techs: [
                "Wordpress",
                "Elementor",
                "WooCommerce"
            ],
            repository: "",
            deploy: "https://cyberdarko.com"
        },
        {
            id: 8,
            name: "Institutional Website - Grupo Projese",
            stack: ["LowCode"],
            path: "/assets/projects-img/grupo-projese.jpg",
            description: "Website developed for Projese, as a freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://projese.com.br/"
        },
        {
            id: 9,
            name: "Institutional Website - Property Management",
            stack: ["LowCode"],
            path: "/assets/projects-img/projese-adm.jpg",
            description: "Website developed for Projese, as a freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://administracao.projese.com.br/"
        },
        {
            id: 10,
            name: "Institutional Website - Developments",
            stack: ["LowCode"],
            path: "/assets/projects-img/projese-empr.jpg",
            description: "Website developed for the company, as a freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://empreendimentos.projese.com.br/"
        },
        {
            id: 11,
            name: "Institutional Website - Real Estate Intelligence",
            stack: ["LowCode"],
            path: "/assets/projects-img/projese-inte.jpg",
            description: "Website developed for the company, as a freelancer.",
            techs: [
                "Wordpress",
                "Elementor",
            ],
            repository: "",
            deploy: "https://inteligencia.projese.com.br/"
        },
    ]
};
