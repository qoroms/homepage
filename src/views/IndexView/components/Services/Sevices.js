import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, colors } from '@material-ui/core';
import { IconAlternate, SectionHeader } from 'components/molecules';
import { DescriptionListIcon, Section } from 'components/organisms';

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
}));

const data = [
  {
    icon: 'fas fa-layer-group',
    title: 'NFT Swap',
    subtitle:
      'We are building the underlying technology to support trusted NFT Swaps powered by Zora Score which will include Uniswap V3 LP tokens.',
  },
  {
    icon: 'fab fa-sketch',
    title: 'Algorithmic Credit',
    subtitle:
      'We are building an algorithmic approach to credit. Our credit rating will determine creditworthiness and a API will be used in DeFi ecosystem.',
  },
  {
    icon: 'fas fa-code',
    title: 'Decentralized Governance',
    subtitle:
      "Our developers just write code. Anyone can contribute to the project or join the growing community. Nobody is in charge.",
  },
];
const Services = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
   
  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Build accessible React apps&nbsp;
      <Typography component="span" variant="inherit" color="primary">with speed</Typography>
    </Typography>
  );

  const subtitle = 'Build a beautiful, modern website with flexible, fully customizable, atomic Material UI components.';

  return (
    <div className={className} {...rest}>
      <Section narrow className={classes.noPaddingBottom}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          titleProps={{
            variant: 'h2',
            color: 'textPrimary',
          }}
          data-aos="fade-up"
        />
      </Section>
      <Section className={classes.noPaddingTop}>
        <Grid container spacing={isMd ? 4 : 2}>
          {data.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} data-aos={'fade-up'}>
              <DescriptionListIcon
                title={item.title}
                subtitle={item.subtitle}
                icon={
                  <IconAlternate
                    fontIconClass={item.icon}
                    size="medium"
                    color={colors.indigo}
                  />
                }
                align="left"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
