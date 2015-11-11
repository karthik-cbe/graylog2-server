import React, {PropTypes} from 'react';
import {Input} from 'react-bootstrap';

import FormUtils from 'util/FormsUtils';

const NumericConverterConfiguration = React.createClass({
  propTypes: {
    type: PropTypes.string.isRequired,
    configuration: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  },
  componentDidMount() {
    this.props.onChange(this.props.type, this._getConverterObject());
  },
  _getConverterObject() {
    return {type: this.props.type, config: this.props.configuration};
  },
  _onChange(event) {
    let converter;
    if (FormUtils.getValueFromInput(event.target) === true) {
      converter = this._getConverterObject();
    }

    this.props.onChange(this.props.type, converter);
  },
  render() {
    return (
      <div className="xtrc-converter">
        <Input type="checkbox"
               id={`enable-${this.props.type}-converter`}
               label="Convert to numeric value"
               wrapperClassName="col-md-offset-2 col-md-10"
               defaultChecked
               onChange={this._onChange}/>
      </div>
    );
  },
});

export default NumericConverterConfiguration;
