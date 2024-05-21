export type SocialLink = {
    name: string;
    link: string;
    icon: string;
}

export type TechIcons = {
    docker: string;
    express: string;
    figma: string;
    git: string;
    javascript: string;
    jest: string;
    mongodb: string;
    mysql: string;
    nestjs: string;
    nextjs: string;
    nodejs: string;
    postgresql: string;
    postman: string;
    react: string;
    tailwind: string;
    typescript: string;
    ubuntu: string;
    wordpress: string;
}

export type Infos = {
    about: string;
    techIcons: TechIcons;
}

export type Project = {
    name: string;
    description: string;
    techs: string[];
    repository: string;
    deploy: string;
}

export type DevData = {
    name: string;
    resume: string;
    social: SocialLink[];
    infos: Infos;
    projects: Project[];
}
