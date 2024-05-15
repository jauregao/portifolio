export type DevData = {
    name: string
    role: string[]
    social: {
        github: string
        linkedin: string
        behance: string
        whatsapp: string
        instagram: string
        resume: string
    }
    infos: {
        about: string
        techIcon: {
            css: string
            docker: string
            express: string
            figma: string
            git: string
            html: string
            javascript: string
            jest: string
            mongodb: string
            mysql: string
            nestjs: string
            nextjs: string
            nodejs: string
            postgresql: string
            postman: string
            react: string
            tailwind: string
            typescript: string
            ubuntu: string
            wordpress: string
        }
    }
        projects: {
            name: string
            description: string
            techs: string[]
            repository: string
            deploy: string
        }[]
    }


export interface IDevData {
        infos: {
            techIcon: Record<string, string>
        }
}