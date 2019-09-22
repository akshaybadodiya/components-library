import * as React from "react";
import injectSheet, { ClassNameMap } from "react-jss";
import "./card-styles.scss";
import { Grid } from "../grid/grid";
// import { CardClassKey, templateStyles } from "./card-styles";

export interface CardFieldProps {}
export interface CardDispatchProps {}
export interface CardProps extends CardFieldProps, CardDispatchProps {}
interface _CardProps extends CardProps {}
interface _CardState {}
export class _CardComponent extends React.Component<_CardProps, _CardState> {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <div className="card-bg">
              <div className="card-overlay" />
              <div className="card-thumbnail">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: 'url("https://i.imgur.com/1fk52PJ.jpg")'
                  }}
                />
              </div>
            </div>
            <div className="card-news">
              <div className="card-title">
                Most poisonous dishes you must avoid
              </div>
              <div className="card-bottom">
                <div>Daily Health</div>
                <div>Jan 2, 2018</div>
              </div>
              <div className="card-tags" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <div className="card-bg">
              <div className="card-overlay" />
              <div className="card-thumbnail">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: 'url("https://i.imgur.com/1fk52PJ.jpg")'
                  }}
                />
              </div>
            </div>
            <div className="card-news">
              <div className="card-title">
                Most poisonous dishes you must avoid
              </div>
              <div className="card-bottom">
                <div>Daily Health</div>
                <div>Jan 2, 2018</div>
              </div>
              <div className="card-tags" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <div className="card-bg">
              <div className="card-overlay" />
              <div className="card-thumbnail">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: 'url("https://i.imgur.com/1fk52PJ.jpg")'
                  }}
                />
              </div>
            </div>
            <div className="card-news">
              <div className="card-title">
                Most poisonous dishes you must avoid
              </div>
              <div className="card-bottom">
                <div>Daily Health</div>
                <div>Jan 2, 2018</div>
              </div>
              <div className="card-tags" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <div className="card-bg">
              <div className="card-overlay" />
              <div className="card-thumbnail">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: 'url("https://i.imgur.com/1fk52PJ.jpg")'
                  }}
                />
              </div>
            </div>
            <div className="card-news">
              <div className="card-title">
                Most poisonous dishes you must avoid
              </div>
              <div className="card-bottom">
                <div>Daily Health</div>
                <div>Jan 2, 2018</div>
              </div>
              <div className="card-tags" />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div className="card">
            <div className="card-bg">
              <div className="card-overlay" />
              <div className="card-thumbnail">
                <div
                  className="card-image"
                  style={{
                    backgroundImage: 'url("https://i.imgur.com/1fk52PJ.jpg")'
                  }}
                />
              </div>
            </div>
            <div className="card-news">
              <div className="card-title">
                Most poisonous dishes you must avoid
              </div>
              <div className="card-bottom">
                <div>Daily Health</div>
                <div>Jan 2, 2018</div>
              </div>
              <div className="card-tags" />
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export const CardComponent = _CardComponent;
