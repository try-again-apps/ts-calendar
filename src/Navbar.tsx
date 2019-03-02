import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SelectField from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import _range from 'lodash/range';
import _map from 'lodash/map';
import Typography from '@material-ui/core/Typography';

import { yearValidated } from './utils';

const styles = {
  customWidth: {
    width: 100
  }
};

class Navbar extends PureComponent<RouteComponentProps<{ year: string }>> {
  generateYearItems = () => {
    return _map(_range(1970, 2025), year => (
      <MenuItem key={year} value={year}>{year}</MenuItem>
    ));
  };

  onPrevious = (currentYear: number) => () => {
    const { history } = this.props;
    history.push(`/${+currentYear - 1}`);
  };

  onNext = (currentYear: number) => () => {
    const { history } = this.props;
    history.push(`/${+currentYear + 1}`);
  };

  onYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { history } = this.props;
    history.push(`/${event.target.value}`);
  };

  render() {
    const { match: { params: { year } } } = this.props;
    const validYear = yearValidated(year);

    return (
      <div className="navbar">
        <IconButton onClick={this.onPrevious(validYear)}>
          <ArrowBackIcon />
        </IconButton>
        <Typography className="title">Calendar</Typography>
        <SelectField
          value={validYear}
          style={styles.customWidth}
          onChange={this.onYearChange}
        >
          {this.generateYearItems()}
        </SelectField>
        <IconButton onClick={this.onNext(validYear)}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    );
  }
}

export default Navbar;
