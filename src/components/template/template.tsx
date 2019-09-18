import * as React from 'react'
import injectSheet, { ClassNameMap } from 'react-jss'

import { Grid } from '../grid/grid'
import { TemplateClassKey, templateStyles } from './template-styles'

export interface TemplateFieldProps {

}
export interface TemplateDispatchProps {

}

export interface TemplateProps extends TemplateFieldProps, TemplateDispatchProps {

}
interface _TemplateProps extends TemplateProps {
    classes: ClassNameMap<TemplateClassKey>
}
interface _TemplateState {

}
export class _TemplateComponent extends React.Component<_TemplateProps, _TemplateState> {
    render() {
        const { classes } = this.props
        return <Grid container spacing={16} className={classes.template}>
            <Grid item xs={12} className={classes.template__gridItem}>
                xs-12
            </Grid>
            <Grid item xs={6} className={classes.template__gridItem}>
                xs-6
            </Grid>
            <Grid item xs={6} className={classes.template__gridItem}>
                xs-6
            </Grid>
            <Grid item xs={4} className={classes.template__gridItem}>
                xs-4
            </Grid>
            <Grid item xs={4} className={classes.template__gridItem}>
                xs-4
            </Grid>
            <Grid item xs={4} className={classes.template__gridItem}>
                xs-4
            </Grid>
            <Grid item xs={3} className={classes.template__gridItem}>
                xs-3
            </Grid>
            <Grid item xs={3} className={classes.template__gridItem}>
                xs-3
            </Grid>
            <Grid item xs={3} className={classes.template__gridItem}>
                xs-3
            </Grid>
            <Grid item xs={3} className={classes.template__gridItem}>
                xs-3
            </Grid>
            <Grid item xs={2} className={classes.template__gridItem}>
                xs-2
            </Grid>
            <Grid item xs={2} className={classes.template__gridItem}>
                xs-2
            </Grid>
            <Grid item xs={2} className={classes.template__gridItem}>
                xs-2
            </Grid>
            <Grid item xs={2} className={classes.template__gridItem}>
                xs-2
            </Grid>
            <Grid item xs={2} className={classes.template__gridItem}>
                xs-2
            </Grid>
            <Grid item xs={2} className={classes.template__gridItem}>
                xs-2
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
            <Grid item xs={1} className={classes.template__gridItem}>
                xs-1
            </Grid>
        </Grid>
    }
}

export const TemplateComponent = injectSheet(templateStyles)(_TemplateComponent)