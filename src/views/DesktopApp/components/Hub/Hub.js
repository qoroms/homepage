import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  placementGrid: {
    display: 'flex',
  },
  placementGridItemMiddle: {
    margin: `0 ${theme.spacing(3)}px`,
  },
  coverImage: {
    boxShadow:
      '25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)',
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="/images/5.png"
            alt="..."
            className={classes.coverImage}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    Use Zora token
                    <br />
                    <Typography component="span" variant="inherit" color="primary">
                      to provide liquidity
                    </Typography>
                  </span>
                }
                subtitle="Along with governance functionality, holders will be able to provide liquidity to Uniswap V3 and access Zora Credit Lines with an applicable score."
                align="left"
                fadeUp
                disableGutter
                titleVariant="h3"
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={1000}
                    label="Holders"
                    textColor="primary"
                    suffix="+"
                  />
                </div>
                <div className={classes.placementGridItemMiddle}>
                  <CountUpNumber
                    end={10}
                    label="Total Supply"
                    textColor="primary"
                    suffix="k"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={500}
                    label="Zora Score"
                    textColor="primary"
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
