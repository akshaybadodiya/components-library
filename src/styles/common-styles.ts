import { mdAndUp, proximaRegular, smAndUp, lgAndUp } from './styles'

export const buttonPrimarySkin = {
    "backgroundColor": "#5cb860",
    "color": "#fff",
    "border": "0",
    "outline": "none",
    "borderRadius": "2px",
}

export const defaultViewRootEleCSS = {
    marginTop: "48px",
    [smAndUp()]: {
        maxWidth: "600px",
        marginTop: "64px",
        width: "calc(100% - 100px)",
        margin: "64px auto 0px auto"
    },
    [mdAndUp()]: {
        //TODO fill here
    }
}

export const widerViewRootEleCSS = {
    marginTop: "48px",
    [smAndUp()]: {
        maxWidth: "1000px",
        marginTop: "64px",
        width: "calc(100% - 16px)",
        margin: "64px auto 0px auto"
    },
    [mdAndUp()]: {
        maxWidth: "1000px",
        marginTop: "64px",
        width: "calc(100% - 24px)",
        margin: "64px auto 0px auto"
    }
}

export const buttonPrimary = {
    ...proximaRegular,
    ...buttonPrimarySkin,
    "display": "block",
    "textAlign": "center",
    "textTransform": "uppercase",
    "fontWeight": "700",
    "fontSize": "18px",
    [smAndUp()]: {
        "fontSize": "18px",
    },
    [mdAndUp()]: {
        "fontSize": "20px",
    },
    [lgAndUp()]: {
        "fontSize": "22px",
    },
    "letterSpacing": "1.5px",
    "padding": "12px 12px",
    "width": "100%",
}

export const avenirBoldTitle = {
    "fontSize": "18px",
        [smAndUp()]: {
            fontSize: 18,
        },
        [mdAndUp()]: {
            fontSize: 20,
        },
        [lgAndUp()]: {
            fontSize: 22,
        },
        "fontFamily": "AvenirNextCondensed-Bold,sans-serif",
        "color": "#222",
        "textTransform": "uppercase",
        "textAlign": "center",
        "lineHeight": "1.4"
}

export const gridContainerZeroMargin = {
    margin: 0,
    width: "100%"
}

export const gridContainerWithZeroHorizontalMargin = {
    width: "100%",
    marginLeft: 0,
    marginRight: 0
}

export const geniusCardSkin = {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px 0 rgba(51,51,51,.21)",
    borderRadius: "2px",
    border: "1px solid #d0d0d0"
}

export const geniusCardSkinWithZeroMargin = {
    ...geniusCardSkin,
    ...gridContainerZeroMargin
}