const styles = {
  exploreVehicles: {
    padding: "60px 80px",
    backgroundColor: "#f5f5f5",
  },
  exploreVehiclesHeading: {
    marginLeft: "20px", 
    marginTop: "20px", 
  },
  vehicleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    padding: "20px 25px",
  },
  vehicleCard: {
    borderRadius: "8px",
    textAlign: "left",
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  vehicleCardImg: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
  },
  vehicleCardContent: {
    padding: "12px 25px",
  },
  vehiclePrice: {
    fontWeight: "bold",
    fontSize: "1.2em",
    color: "#333",
  },
  viewDetailsLink: {
    color: "orange",
    cursor: "pointer",
    display: "inline-block",
    textDecoration: "none",
  },
  tiltedArrow: {
    display: "inline-block",
    transform: "rotate(-45deg)",
    marginLeft: "5px",
  },
  carDetailsModal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  carDetailsContent: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    maxWidth: "950px",
    width: "90%",
    position: "relative",
  },
  //closeLink: {
    //position: "absolute",
    //top: "10px",
    //right: "15px",
    //fontSize: "24px",
    //color: "#333",
    //cursor: "pointer",
  //},
  carDetailsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  carDetailsImageImg: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  carDetailsInfoH2: {
    color: "#333",
  },
  carDetailsInfoP: {
    margin: "6px 0",
    color: "#666",
  },
  searchAndFilterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '10px',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  searchInput: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
    flex: '1 1 200px',
  },

  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  paginationButton: {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
  },
  pageInfo: {
    fontSize: '1em',
    margin: '0 10px',
  },
  bookButton: {
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '50px',
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  bookCarButton: {
    backgroundColor: '#f97316',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '30px',
  },
  searchResult: {
    fontSize: '32px', 
    textAlign: 'center', 
    marginTop: '30px', 
  },
  // New styles for the price range slider
  priceRangeContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '10px 0',
  },
  priceRangeSlider: {
    width: '100%',
    appearance: 'none',
    height: '5px',
    borderRadius: '5px',
    background: '#ddd',
    outline: 'none',
    opacity: '0.7',
    transition: 'opacity .2s',
    '&:hover': {
      opacity: '1',
    },
    '&::-webkit-slider-thumb': {
      appearance: 'none',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#f97316',
      cursor: 'pointer',
    },
    '&::-moz-range-thumb': {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#f97316',
      cursor: 'pointer',
    },
  },
  priceRangeLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  priceRangetext: {
    marginBottom: '10px',
  },
  priceRangeLabel: {
    fontSize: '0.9em',
    color: '#666',
  },
  filterOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  filterDropdown: {
  position: 'relative',
  display: 'inline-block',
},
filterButton: {
  padding: '10px 20px',
  fontSize: '1em',
  backgroundColor: '#f97316',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
},
filterMenu: {
  position: 'absolute',
  top: '100%',
  right: 0,
  backgroundColor: 'white',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  zIndex: 1,
  minWidth: '280px',
  padding: '20px',
  borderRadius: '5px',
},
filterSelect: {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc',
},
rangeTrack: {
  height: '6px',
  width: '100%',
  backgroundColor: '#ddd'
},
rangeThumb: {
  height: '20px',
  width: '20px',
  borderRadius: '50%',
  backgroundColor: '#f97316'
},
removeButton: {
  backgroundColor: "#ff4d4f",
  color: "white",
  border: "none",
  padding: "3px 8px",
  borderRadius: "3px",
  cursor: "pointer",
  fontSize: "12px",
},
compareButton: {
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
  marginLeft: "10px",
  whiteSpace: "nowrap",
},
compareScroll: {
  display: "flex",
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  backgroundColor: "rgba(128, 128, 128, 0.5)",
  padding: "15px 0", // Remove vertical padding if using a fixed height
  alignItems: "center",
  justifyContent: "flex-start",
  overflowX: "auto",
  borderTop: "1px solid #ccc",
  boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(0px)",
},

modalBackground: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(128, 128, 128, 0.5)",
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
},
modalContent: {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "80%",
  maxHeight: "80%",
  overflow: "auto",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  position: "relative",
},
// Individual Car Image in the Comparison List
carImageContainer: {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 10px",
  padding: "5px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  backgroundColor: "white",
},
carImage: {
  width: "70px", // Thumbnail size for images in the comparison list
  height: "50px",
  objectFit: "cover",
  marginBottom: "5px",
},
closeLink: {
  position: "absolute",
  top: "10px",
  right: "15px",
  fontSize: "32px",
  color: "#333",
  cursor: "pointer",
  fontWeight: "bold",
  lineHeight: "1",
  padding: "5px 10px",
  background: "none",
  border: "none",
  zIndex: 1,
},
};

export { styles };