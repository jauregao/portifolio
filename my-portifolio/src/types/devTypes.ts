export type SocialLink = {
    name: string
    link: string
    icon: string
}

export type TechIcons = {
    name: string
    link: string
}

export type Infos = {
    about: string
    techIcons: TechIcons[]
}

export type Project = {
    name: string
    description: string
    stack: string
    image: string
    techs: TechIcons[]
    repository: string
    deploy: string
}

export type DevData = {
    name: string
    resume: string
    social: SocialLink[]
    infos: Infos
    projects: Project[]
}
