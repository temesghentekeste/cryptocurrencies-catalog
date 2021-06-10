/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-one-expression-per-line
 */
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingCryptosAsync } from '../../redux/trendingSlice';
import styles from './Trending.module.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Trending = () => {
  const [trendingCryptos, setTrendingCryptos] = useState([]);
  const dispatch = useDispatch();

  const trendingCryptoCurrencies = useSelector(
    (state) => state.trendingcryptocurrencies
  );

  useEffect(() => {
    dispatch(getTrendingCryptosAsync());
    setTrendingCryptos(trendingCryptoCurrencies);
  }, []);

  console.log(trendingCryptos);

  const classes = useStyles();

  return (
    trendingCryptoCurrencies.coins.length && (
      <div className={styles.trending}>
        <h3>
          Top-7 trending coins on CoinGecko{' '}
          <span>
            Searched by users in the last 24 hours (Ordered by most popular
            first)
          </span>
        </h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Symbol</TableCell>
                <TableCell align="right">Price&nbsp;(btc)</TableCell>
                <TableCell align="right">Market Cap &nbsp;(rank)</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trendingCryptoCurrencies.coins.map((row) => {
                const {
                  id,
                  name,
                  symbol,
                  market_cap_rank: rank,
                  price_btc: price,
                  score,
                  thumb,
                } = row.item;
                return (
                  <TableRow key={id}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={styles.trending__name}
                    >
                      {name} <img src={thumb} alt={name} />
                    </TableCell>
                    <TableCell align="right">{symbol}</TableCell>
                    <TableCell align="right">{price}</TableCell>
                    <TableCell align="right">{rank}</TableCell>
                    <TableCell align="right">{score}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  );
};

export default Trending;
