export const pt = {
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
        about: "Sou desenvolvedora backend e estudante de Matemática na UFF. Tenho experiência com Node.js, TypeScript, NestJS, PostgreSQL, MongoDB e AWS, focando na construção de APIs seguras e escaláveis. Atualmente, estou me aprofundando em microsserviços e cloud computing.\nAtualmente, trabalho com educação em tecnologia como monitora Fullstack, auxiliando alunos no aprendizado, resolução de bugs e boas práticas de desenvolvimento. Além disso, faço freelancers com WordPress, Elementor e WooCommerce, cuidando de hospedagens compartilhadas, VPS, DNS, bancos de dados e integrações com API's externas. Também comecei a explorar o frontend para ampliar meu repertório e entender melhor o outro lado do desenvolvimento.\nMinha experiência anterior na educação como monitora de design gráfico me trouxe habilidades valiosas em comunicação, organização e resolução de problemas, que aplico diariamente para estruturar soluções eficientes e bem planejadas.\nEstou sempre buscando novos desafios e projetos que me façam evoluir.",
        techIcons: [
            { 
                name: "Docker",
                path: "/assets/techs/Docker.svg"
            },
            // { 
            //     name: "ExpressJS",
            //     path: "/assets/techs/ExpressJS-Dark.svg"
            // },
            { 
                name: "Git",
                path: "/assets/techs/Git.svg"
            },
            { 
                name: "JavaScript",
                path: "/assets/techs/JavaScript.svg"
            },
            // { 
            //     name: "Jest",
            //     path: "/assets/techs/Jest.svg"
            // },
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
                name: "Ubuntu",
                path: "/assets/techs/Ubuntu-Dark.svg"
            },
            { 
                name: "Wordpress",
                path: "/assets/techs/Wordpress.svg"
            },
            { 
                name: "Elementor",
                path: "/assets/techs/elementor-icon.svg"
            }
        ]
        },
        projects: [
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
                id: 7,
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
                id: 8,
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
                id: 9,
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
