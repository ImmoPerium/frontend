import React from "react";
import PropertyHeader from "./PropertyHeader";
import PropertyCard from "./PropertyCard";

export default class PropertyList extends React.Component {
  render() {
    return (
      <div className="mt-6">
        <PropertyHeader
          title={this.props.title}
          description={this.props.description}
        />

        <div className="mt-6 sm:overflow-x-auto sm:overflow-y-hidden">
          <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
            {this.props.properties.map((property, index) => (
              <PropertyCard
                key={index}
                index={index}
                propertyiD={property.id}
                imageUrl={property.other_description}
                rooms={parseInt(property.rooms)}
                house_area={parseInt(property.house_area)}
                title={property.advertisement_purpose}
                price={property.rental_price_total}
                viewCount={property.view_count}
                favoriteCount={property.favorite_count}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
