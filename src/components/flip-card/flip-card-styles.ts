import { buttonPrimary, geniusCardSkin, geniusCardSkinWithZeroMargin } from '../../styles/common-styles'
import { avenirBold, createStyles, smAndUp, mdAndUp, lgAndUp, proximaRegular } from '../../styles/styles'

export const flipCardStyles = createStyles({
    flipCard__mainContainer: {
        [smAndUp()]: {
            maxWidth: "400px",
            width: "calc(100% - 16px)",
            margin: "auto",
        },
    },
    webkit_scrollbar: {
        "display": "none"
    },
    flipCard: {
        "height": "max-content",
        "maxWidth": "400px",
        "perspective": "1000px",
        margin: 0,
        width: "100%",
        cursor: "pointer",
    },
    flipCard__header: {
        ...avenirBold,
        "color": "#222",
        "textTransform": "uppercase",
        "width": "100%",
        "textAlign": "center",
        "lineHeight": "1.4",
        "fontSize": "20px",
        padding: 4,
        [smAndUp()]: {
            fontSize: 22,
            padding: 6,
        },
        [mdAndUp()]: {
            fontSize: 24,
            padding: 8,
        },
        [lgAndUp()]: {
            fontSize: 26,
            padding: 10,
        },
        "display": "inline-block",
        "margin": "8px auto 0px"
    },
    flipCard__button: {
        ...buttonPrimary,
        zIndex: "5000",
        color: "#5cb860",
        backgroundColor: "white",
        border: "1.5px solid #5cb860",
        cursor: "pointer",
        "&:hover":{
            color: "white",
        backgroundColor: "#5cb860",
        }
    },
    flipCard__innerFront: {
        "position": "relative",
        "textAlign": "center",
        "transition": "transform 0.6s",
        "transformStyle": "preserve-3d",
        ...geniusCardSkinWithZeroMargin,
    },
    flipCard__innerBack: {
        "position": "relative",
        "textAlign": "center",
        "transition": "transform 0.6s",
        "transformStyle": "preserve-3d",
        "transform": "rotateY(-180deg)",
        ...geniusCardSkinWithZeroMargin,
    },
    flipCard__front: {
        "position": "absolute",
        "width": "100%",
        "height": "100%",
        "backfaceVisibility": "hidden",
        "color": "black",
        zIndex: "2"
    },
    flipCard__back: {
        "backfaceVisibility": "hidden",
        "color": "black",
        "transform": "rotateY(180deg)",
        zIndex: "1",
    },

    flipCard__imgContainer: {
        "width": "100%",
        padding: "0px !important",
    },
    flipCard__img: {
        "width": "100%"
    },
    flipCard__description: {
        "width": "100%",
        "padding": "8px 12px",
        "textAlign": "left",
        "lineHeight": "1.3",
        "fontSize": "16px",
        "& p":{
            margin: "8px",
        },
        [smAndUp()]: {
            "lineHeight": "1.4",
            "fontSize": "18px",
        },
    },
    flipCard__descriptionflash: {
        "width": "100%",
        "textAlign": "center",
        "lineHeight": "1.4",
        "fontSize": "24px",
        "letterSpacing": "0.5px"
    },
})
export type FlipCardClassKey = keyof typeof flipCardStyles
