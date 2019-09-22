import { createStyles, smAndUp, mdAndUp, lgAndUp } from '../../styles/styles'

export const templateStyles = createStyles({
    template: {
        margin: 0,
        width: "100%",
        padding: 8,
    },
    template__gridItem: {
        border: "1px solid blue",
    }
})
export type TemplateClassKey = keyof typeof templateStyles