export type SocialLink = {
    name: string
    link: string
    icon: string
}

export type TechIcons = {
    name: string
    path: string
}

export type Infos = {
    about: string
    techIcons: TechIcons[]
}

export type Project = {
    id: number
    name: string
    description: string
    stack: string[]
    path: string
    techs: string[]
    repository: string
    deploy: string
}

export type UiStrings = {
    aboutTitle: string
    hardSkills: string
    projects: string
    techUsed: string
    repository: string
    deploy: string
    fullstackDev: string
    downloadCV: string
    phone: string
    email: string
    location: string
    copy: string
    copied: string
    langButton: string
}

export type DevData = {
    name: string
    resume: string
    social: SocialLink[]
    infos: Infos
    projects: Project[]
    ui: UiStrings
}
