import React, { Component } from 'react';
import slugify from 'slugify';
import Option from './Option'
import FeaturesForm from './FeaturesForm';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Features extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
                return (
                    <Option 
                        cost={USCurrencyFormat.format(item.cost)}
                        itemHash={itemHash}
                        feature={feature}
                        item={item}
                        name={slugify(feature)}
                        checked={item.name === this.props.selected[feature].name}
                        updateFeature={this.props.updateFeature}
                    />
            );
            });

            return (
                <FeaturesForm 
                    featureHash={featureHash}
                    options={options}
                    feature={feature}
                />
            );
        });

    return features;
    }
}


export default Features;