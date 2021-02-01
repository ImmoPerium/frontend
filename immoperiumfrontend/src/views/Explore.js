import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { connect } from "react-redux";
import { getAllAdvertisements } from "../actions/index";
import PropertyList from "../components/properties/PropertyList";
import SearchFilters from "../components/SearchFilters";

/* const data = [
  {
    title: "Interessante Immobilien",
    description: "Diese Immobilien entsprechen deinen Suchkriterien am besten.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rooms: 3,
        house_area: 50,
        title: "Modernes Heim in Stadtmitte",
        price: 1100.0,
        viewCount: 34,
        favoriteCount: 2,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rooms: 4,
        house_area: 61,
        title: "Leise Wohnung in Großstadt",
        price: 980.0,
        viewCount: 12,
        favoriteCount: 7,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        rooms: 5,
        house_area: 112,
        title: "Renoviertes Eigenheim",
        price: 850.0,
        viewCount: 75,
        favoriteCount: 3,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rooms: 3,
        house_area: 75,
        title: "Liebevolle Familienwohnung",
        price: 950.0,
        viewCount: 42,
        favoriteCount: 11,
      },
    ],
  },
  {
    title: "In deiner Nähe",
    description: "Die besten Immobilien aus deiner Umgebung.",
    properties: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        rooms: 3,
        house_area: 67,
        title: "Schmucke Hütte",
        price: 1500.0,
        viewCount: 11,
        favoriteCount: 2,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        rooms: 4,
        house_area: 80,
        title: "Gemütliches Zuhause",
        price: 680.0,
        viewCount: 53,
        favoriteCount: 5,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rooms: 5,
        house_area: 90,
        title: "Ruhige Lage",
        price: 760.0,
        viewCount: 114,
        favoriteCount: 12,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rooms: 3,
        house_area: 56,
        title: "Schickes Penthouse",
        price: 690.0,
        viewCount: 12,
        favoriteCount: 3,
      },
    ],
  },
  {
    title: "Neue Immobilien",
    description: "Entdecke die Immobilien als Erster.",
    properties: [
      {
        imageUrl: "./pictures/preview_default_home.png",
        rooms: 3,
        house_area: 43,
        title: "Neues Smarthome",
        price: 1000.0,
        viewCount: 82,
        favoriteCount: 7,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        rooms: 4,
        house_area: 84,
        title: "Stadtleben modernisiert",
        price: 680.0,
        viewCount: 42,
        favoriteCount: 11,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rooms: 5,
        house_area: 55,
        title: "Gute Anbindungen",
        price: 990.0,
        viewCount: 54,
        favoriteCount: 5,
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        rooms: 3,
        house_area: 64,
        title: "Wundervolle Wohnung",
        price: 870.0,
        viewCount: 16,
        favoriteCount: 3,
      },
    ],
  },
]; */

const data = [
  {
    title: "Neue Angebote",
    description: "Die neuesten Immobilien aus deiner Umgebung.",
    properties: [],
  },
  {
    title: "Interessante Immobilien",
    description: "Diese Immobilien entsprechen deinen Suchkriterien am besten.",
    properties: [],
  },
  {
    title: "",
    description: "",
    properties: [],
  },
];

class Dashboard extends React.Component {
  state = {
    isFiltersOpen: false,
    searchFilter: "",
    minPriceFilter: "",
    maxPriceFilter: "",
    petsAllowedFilter: true,
    barrierFreeFilter: true,
  };

  constructor(props) {
    super(props);
    this.filtersHandler = this.filtersHandler.bind(this);
  }

  filtersHandler() {
    this.setState({
      isFiltersOpen: !this.state.isFiltersOpen,
    });
  }

  loadSearchFilter = () => {
    this.setState({
      searchFilter: localStorage.getItem("filter")
        ? JSON.parse(localStorage.getItem("filter")).location
        : "",
      minPriceFilter: localStorage.getItem("filter")
        ? JSON.parse(localStorage.getItem("filter")).minbudget
        : "",
      maxPriceFilter: localStorage.getItem("filter")
        ? JSON.parse(localStorage.getItem("filter")).maxbudget
        : "",
    });
  };

  componentDidMount() {
    this.props.getAllAdvertisements();
    this.loadSearchFilter();
  }

  applyFilter = (array) => {
    if (this.state.searchFilter) {
      array = array.filter(
        (element) =>
          element.advertisement_description.includes(this.state.searchFilter) ||
          element.advertisement_purpose.includes(this.state.searchFilter) ||
          element.country.includes(this.state.searchFilter) ||
          element.city.includes(this.state.searchFilter)
      );
    }
    if (this.state.minPriceFilter) {
      array = array.filter(
        (element) =>
          parseFloat(element.rental_price_total) >=
            parseFloat(this.state.minPriceFilter) ||
          parseFloat(element.purchase_price) >=
            parseFloat(this.state.minPriceFilter)
      );
    }
    if (this.state.maxPriceFilter) {
      array = array.filter(
        (element) =>
          parseFloat(element.rental_price_total) <=
          parseFloat(
            this.state.maxPriceFilter
          ) /* ||
          parseFloat(element.purchase_price) <=
            parseFloat(this.state.maxPriceFilter) */
      );
    }
    if (array.length > 1 && !this.state.petsAllowedFilter) {
      array = array.filter((element) => !element.pets_allowed);
    }

    if (array.length > 1 && !this.state.barrierFreeFilter) {
      array = array.filter((element) => !element.barrier_free);
    }
    return array;
  };

  addAllAdvertisementsToData(
    best_advertisement_data,
    closest_advertisement_data,
    newest_advertisement_data
  ) {
    let advertisement_data = data;
    advertisement_data[0].properties = this.applyFilter([
      ...best_advertisement_data,
    ]);
    advertisement_data[1].properties = this.applyFilter([
      ...closest_advertisement_data,
    ]);
    advertisement_data[2].properties = this.applyFilter([
      ...newest_advertisement_data,
    ]);
    return advertisement_data;
  }

  onChangeSearch = (event) => {
    this.setState(
      { searchFilter: event.target.value },
      localStorage.setItem(
        "filter",
        JSON.stringify({
          location: event.target.value,
          minbudget: JSON.parse(localStorage.getItem("filter")).minbudget,
          maxbudget: JSON.parse(localStorage.getItem("filter")).maxbudget,
        })
      )
    );
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckboxPets = () => {
    this.setState({ petsAllowedFilter: !this.state.petsAllowedFilter });
  };

  onChangeCheckboxBarrier = (filterValue) => {
    this.setState({ barrierFreeFilter: !this.state.barrierFreeFilter });
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-full">
        <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
          <section className="bg-gray-800 xl:w-72 xl:h-screen">
            <div className="flex justify-between px-4 py-3 xl:hidden">
              <div className="relative max-w-xs w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-6 w-6 fill-current text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                  </svg>
                </div>
                <input
                  className="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
                  placeholder="Wonach suchst du?"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  this.setState({
                    isFiltersOpen: !this.state.isFiltersOpen,
                  })
                }
                className={`ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4 ${
                  this.state.isFiltersOpen ? "bg-gray-600" : "bg-gray-700"
                }`}
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z" />
                </svg>
                <span className="ml-1 text-white font-medium">Filters</span>
              </button>
            </div>
            <SearchFilters
              open={this.state.isFiltersOpen}
              action={this.filtersHandler}
              minBudget={this.state.minPriceFilter}
              maxBudget={this.state.maxPriceFilter}
              petsAllowed={this.state.petsAllowedFilter}
              barrierFree={this.state.barrierFreeFilter}
              onChangeCallback={this.onChange}
              onChangeCheckboxPetsCallBack={this.onChangeCheckboxPets}
              onChangeCheckboxBarrierCallBack={this.onChangeCheckboxBarrier}
            />
          </section>

          <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
            <div className=" ml-6 relative max-w-xs w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-6 w-6 fill-current text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
              </div>
              <input
                name="searchFilter"
                value={this.state.searchFilter}
                onChange={(event) => this.onChangeSearch(event)}
                className="block w-full border border-transparent bg-white focus:outline-none focus:bg-white focus:border-gray-300 text-gray-900 rounded-lg pl-10 pr-4 py-2"
                placeholder="Wonach suchst du?"
              />
            </div>
            {this.props.allAdvertisements.length > 0 ? (
              this.addAllAdvertisementsToData(
                this.props.allAdvertisements.reverse().slice(0, 3),
                this.props.allAdvertisements.slice(
                  4,
                  this.props.allAdvertisements.length
                ),
                this.props.allAdvertisements.slice(8, 11)
              ).map((segment) => (
                <PropertyList
                  key={segment.title}
                  title={segment.title}
                  description={segment.description}
                  properties={segment.properties}
                />
              ))
            ) : (
              <SkeletonTheme>
                <div className="w-auto flex flex-col items-center opacity-10">
                  <Skeleton className="mt-20" height={110} width={250} />
                  <Skeleton height={25} width={450} />
                  <Skeleton height={25} width={450} />
                  <Skeleton height={25} width={450} />
                  <Skeleton className="mt-10" height={110} width={250} />
                  <Skeleton height={25} width={450} />
                  <Skeleton height={25} width={450} />
                  <Skeleton height={25} width={450} />
                  <Skeleton className="mt-10" height={110} width={250} />
                  <Skeleton height={25} width={450} />
                  <Skeleton height={25} width={450} />
                  <Skeleton height={25} width={450} />
                </div>
              </SkeletonTheme>
            )}
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allAdvertisements: state.advertisementsReducer.allAdvertisements,
  };
};

export default connect(mapStateToProps, { getAllAdvertisements })(Dashboard);
