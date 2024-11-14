export const styles = {
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
    margin: "5px 0",
    color: "#666",
  },
  compareScroll: {
    display: "flex",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    backgroundColor: "rgba(128, 128, 128, 0.5)",
    padding: "15px 0",
    alignItems: "center",
    justifyContent: "flex-start",
    overflowX: "auto",
    borderTop: "1px solid #ccc",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
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
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  viewAllContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 60px',
    margin: '40px',
  },
  viewAllTitle: {
    fontSize: '1.8em',
    color: '#333',
  },
  viewAllLink: {
    fontSize: '1.4em',
    color: 'black',
    textDecoration: 'none',
    cursor: 'pointer',
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
    maxWidth: "90%",
    maxHeight: "80%",
    overflow: "auto",
    display: "flex",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: "0",
    zIndex: 1,
  },

  // Popup styling
  popupOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popupContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '300px',
  },
  popupCloseButton: {
    marginTop: '15px', 
    padding: '8px 12px', 
    borderRadius: '5px', 
    border: 'none', 
    cursor: 'pointer', 
    color: '#fff', 
    backgroundColor: '#007bff', 
  }, 
};