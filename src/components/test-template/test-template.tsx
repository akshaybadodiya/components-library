import * as React from "react";
import injectSheet, { ClassNameMap } from "react-jss";

import { Grid } from "../grid/grid";
import {
  TestTemplateClassKey,
  testTemplateStyles
} from "./test-template-styles";

export interface TestTemplateFieldProps {}
export interface TestTemplateDispatchProps {}
export interface TestTemplateProps
  extends TestTemplateFieldProps,
    TestTemplateDispatchProps {}
interface _TestTemplateProps extends TestTemplateProps {
  classes: ClassNameMap<TestTemplateClassKey>;
}
interface _TestTemplateState {}
export class _TestTemplateComponent extends React.Component<
  _TestTemplateProps,
  _TestTemplateState
> {
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className={classes.testTemplate}>
        <Grid item xs>
          <Grid container spacing={12}>
            <Grid item xs className={classes.testTemplate__gridItem}>
              xs-12
            </Grid>
            <Grid item xs={6} className={classes.testTemplate__gridItem}>
              xs-6
            </Grid>
            <Grid item xs className={classes.testTemplate__gridItem}>
              xs-6
            </Grid>
            <Grid item xs className={classes.testTemplate__gridItem}>
              xs-4
            </Grid>
            <Grid item xs className={classes.testTemplate__gridItem}>
              xs-6
            </Grid>
            <Grid item xs className={classes.testTemplate__gridItem}>
              xs-4
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={12}
            //   direction="column"
          >
            <Grid item xs className={classes.testTemplate__gridItem}>
              xs-12
            </Grid>
            <Grid item xs className={classes.testTemplate__gridItem}>
              xs-6
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export const TestTemplateComponent = injectSheet(testTemplateStyles)(
  _TestTemplateComponent
);
