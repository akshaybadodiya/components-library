import * as React from "react";
import injectSheet, { ClassNameMap } from "react-jss";

import { Grid } from "../grid/grid";
import { CardStackClassKey, cardStackStyles } from "./card-stack-styles";
import Button from "@material-ui/core/Button";

export interface CardProps {
  imgSrc: string;
  heading: string;
  description: string;
  id: number;
}
export interface CardStackFieldProps {
  cardList: CardProps[];
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
  callApi() {
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    fetch("https://www.reddit.com/r/reactjs.json")
      .then(result => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      })
      .then(jsonResult => {
        // Do something with the result
        console.log(jsonResult);
      });
  }

  render() {
    const { classes, cardList } = this.props;
    return (
      <Grid container spacing={16} className={classes.cardStack}>
        <Grid item xs={12} className={classes.cardStack__header}>
          Card Stack
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={16} className={classes.cardStack}>
            {cardList.map(card => {
              return (
                <Grid
                  key={card.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className={classes.cardStack__gridItemSpacing}
                >
                  <Grid
                    container
                    spacing={12}
                    className={classes.cardStack__card}
                  >
                    <Grid item xs={12} className={classes.cardStack__img}>
                      <img
                        src={card.imgSrc}
                        className={classes.cardStack__imgStyles}
                      ></img>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      className={classes.cardStack__description}
                    >
                      <h3 className={classes.cardStack__cardHeading}>
                        {card.heading}
                      </h3>
                      <p className={classes.cardStack__description}>
                        {card.description}
                      </p>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        spacing={12}
                        className={classes.cardStack__buttonContainer}
                      >
                        <Grid item xs={6}>
                          <button
                            className={classes.cardStack__button}
                            onClick={this.callApi}
                          >
                            SHARE
                          </button>
                        </Grid>
                        <Grid item xs={6}>
                          <button className={classes.cardStack__button}>
                            LEARN MORE
                          </button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.cardStack__buttonSpecial}
                          >
                            Hello World
                          </Button>{" "}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export const CardStackComponent = injectSheet(cardStackStyles)(
  _CardStackComponent
);
