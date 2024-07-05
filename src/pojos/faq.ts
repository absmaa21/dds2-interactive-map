export interface Faq {
    question: string,
    answer: string,
}

const faq: Faq[] = [
    {
        question: 'There are already other interactive maps. Why does this one exist?',
        answer: 'I have been working on this since release day, and I also provide features that other maps do not have.',
    },
    {
        question: 'What are your plans for the website?',
        answer: 'I want to add more marker types like warehouses, dead drops, party spots and more!',
    },
    {
        question: 'I found mismatching information, will you fix it?',
        answer: 'You can report it on my Discord server in the #bug-report channel.',
    },
    {
        question: 'I have other questions. How can I reach you?',
        answer: 'You can talk with me on my Discord server.',
    },
]

export const discordLink: string = 'https://discord.gg/UC3YpP7Wq7'

export default faq
