import * as React from "react";
import injectSheet, { ClassNameMap } from "react-jss";

import { Grid } from "../grid/grid";
import { CardStackClassKey, cardStackStyles } from "./card-stack-styles";
import { gridContainerZeroMargin } from "../../styles/common-styles";

export interface CardStackFieldProps {
  imgSrc: string;
  heading: string;
  description: string;
}
export interface CardStackDispatchProps {}
export interface CardStackProps
  extends CardStackFieldProps,
    CardStackDispatchProps {}
interface _CardStackProps extends CardStackProps {
  classes: ClassNameMap<CardStackClassKey>;
}
interface _CardStackState {}
export class _CardStackComponent extends React.Component<
  _CardStackProps,
  _CardStackState
> {
  render() {
    const { classes, imgSrc, heading, description } = this.props;
    return (
      <Grid container spacing={24} className={classes.cardStack}>
        <Grid item xs={12} className={classes.cardStack__header}>
          Card Stack
        </Grid>
        <Grid item xs={12} className={classes.cardStack__gridItem}>
          <Grid container spacing={24} className={classes.cardStack}>
            {[0, 1, 2, 3].map(value => (
            <Grid key={value} item xs={12} sm={6} md={4} lg={3} >
              <Grid container spacing={12} className={classes.cardStack__card}>
                <Grid item xs={12} className={classes.cardStack__img}>
                  <img
                    src={imgSrc}
                    className={classes.cardStack__imgStyles}
                  ></img>
                </Grid>
                <Grid item xs={12} className={classes.cardStack__description}>
                  <h3 className={classes.cardStack__cardHeading}>{heading}</h3>
                  <p className={classes.cardStack__description}>
                    {description}
                  </p>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={12}>
                        <Grid item xs={4}>
                        <button className={classes.cardStack__button}>Share</button>
                        </Grid>
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export const CardStackComponent = injectSheet(cardStackStyles)(
  _CardStackComponent
);
