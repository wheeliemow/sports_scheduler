var React = require('react');
var PropTypes = React.PropTypes;

var FacilityShowDetail = React.createClass({

  render: function() {
    return (
      <div className="show-detail">
        {this.props.item.name}
        hello from details
      </div>
    );
  }

});

module.exports = FacilityShowDetail;