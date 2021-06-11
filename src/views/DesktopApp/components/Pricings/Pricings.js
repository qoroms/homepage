import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Grid, Typography, Button , Box} from '@material-ui/core';
import { Icon, LearnMoreLink } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardPricingStandard } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
}));

const Pricings = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="As Mentioned In"
        subtitle=""
        data-aos="fade-up"
      />
      <div style={{
        flexDirection: "row",
        display: "flex",
        marginBottom: "40px"
      }}>
        <Box style={{
          width: "200px",
          cursor: "pointer",
          userSelect: "none"
        }}>
          <a href="https://coinmarketcap.com/currencies/zoracles/" target="_blank">
            <img src="/images/section/coinmarketcap.png" style={{width: "100%"}}/>
          </a>
        </Box>
        <Box style={{
          width: "200px",
          cursor: "pointer",
          userSelect: "none",
          marginLeft: "50px"
        }}>
          <a href="https://www.coingecko.com/en/coins/zoracles" target="_blank">
            <img src="/images/section/coingecko.png" style={{width: "100%"}}/>
          </a>
        </Box>
        <Box style={{
          width: "200px",
          cursor: "pointer",
          userSelect: "none",
          marginLeft: "50px"
        }}>
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0xd8e3fb3b08eba982f2754988d70d57edc0055ae6&use=V2" target="_blank">
            <img src="/images/section/uniswap.png" style={{width: "100%"}}/>
          </a>
        </Box>
        <Box style={{
          width: "200px",
          cursor: "pointer",
          userSelect: "none",
          marginLeft: "50px"
        }}
        >
          <a href="https://www.bloomberg.com/press-releases/2020-11-23/zoracles-launches-snarks-as-a-service-for-confidential-credit-checks" target="_blank">
            <img src="/images/section/bloomberg.png" style={{width: "100%"}}/>
          </a>
        </Box>
      </div>
      <div style={{
        flexDirection: "row",
        display: "flex",
      }}>
        <Box style={{
            width: "150px",
            cursor: "pointer",
            userSelect: "none",
            marginLeft: "50px"
          }}>
          <a href="https://finance.yahoo.com/news/zoracles-launches-snarks-confidential-credit-163000563.html" target="_blank">
            <img src="/images/section/yahoo.png" style={{width: "100%"}}/>
          </a>
        </Box>
        <Box style={{
          width: "150px",
          cursor: "pointer",
          userSelect: "none",
          marginLeft: "50px"
        }}>
          <a href="https://www.entrepreneur.com/article/362584" target="_blank">
            <img src="/images/section/entrepreneur.png" style={{width: "100%"}}/>
          </a>
        </Box>
        <Box style={{
          width: "150px",
          cursor: "pointer",
          userSelect: "none",
          marginLeft: "50px"
        }}>
          <a href="https://hackernoon.com/crypto-series-2-zero-knowledge-oracles-uniswap-and-decentralized-games-3eh3z7p" target="_blank">
            <img src="/images/section/hacker.png" style={{width: "100%"}}/>
          </a>
        </Box>
      </div>
    </div>
  );
};

Pricings.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Pricings;
