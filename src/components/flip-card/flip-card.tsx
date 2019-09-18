import * as React from 'react'
import injectSheet, { ClassNameMap } from 'react-jss'
import { Grid } from '../grid/grid'
import { FlipCardClassKey, flipCardStyles } from './flip-card-styles'

export interface FlipCardFieldProps {
    imgSrc: string
    description: string
}
export interface FlipCardDispatchProps {

}

export interface FlipCardProps extends FlipCardFieldProps, FlipCardDispatchProps {

}
interface _FlipCardProps extends FlipCardProps {
    classes: ClassNameMap<FlipCardClassKey>
}
interface _FlipCardState {
    cardSide: "front" | "back"
}
export class _FlipCardComponent extends React.Component<_FlipCardProps, _FlipCardState> {
    constructor(props: _FlipCardProps) {
        super(props)
        this.state = {
            cardSide: "front"
        }
    }

    toggleCardSide = () => {
        const flipCardSide = this.state.cardSide
        const newflipCardSide = flipCardSide == "front" ? "back" : "front"
        this.setState({ cardSide: newflipCardSide })
    }
    render() {
        const { classes, imgSrc, description } = this.props
        const flipCardSide = this.state.cardSide
        const innerClassName = flipCardSide == "front" ? classes.flipCard__innerFront : classes.flipCard__innerBack
        return <Grid container spacing={16} className={classes.flipCard__mainContainer}>
            <Grid item xs={12} className={classes.flipCard__header}>
                Flash card
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={16} className={classes.flipCard} onClick={this.toggleCardSide}>
                    <Grid item xs={12} className={innerClassName} >
                        <Grid container spacing={16} className={classes.flipCard__front}>
                            <Grid item xs={12} className={classes.flipCard__imgContainer}>
                                <img src={imgSrc} className={classes.flipCard__img} />
                            </Grid>
                            <Grid item xs={12} className={classes.flipCard__description}>
                                <p>{description}</p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={16} className={classes.flipCard__back}>
                            <Grid item xs={12} className={classes.flipCard__imgContainer}>
                                <img src={imgSrc} className={classes.flipCard__img} />
                            </Grid>
                            <Grid item xs={12} className={classes.flipCard__description}>
                                <p>We overcome the
                                <u style={{ color: 'green', display: 'inline', fontWeight: 700 }}>kinetic</u>
                                    (static/ kinetic/ sliding) friction.</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <button className={classes.flipCard__button} onClick={this.toggleCardSide}>Flip</button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    }
}

export const FlipCardComponent = injectSheet(flipCardStyles)(_FlipCardComponent)