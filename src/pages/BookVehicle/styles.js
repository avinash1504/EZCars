const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    width: '100%',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '15px',
    fontWeight: 'bold',
    color: '#555',
    fontSize: '16px',
  },
  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginTop: '5px',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
  },
  select: {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    marginTop: '5px',
    fontSize: '14px',
    width: '100%',
    boxSizing: 'border-box',
    appearance: 'none',
    backgroundColor: '#fff',
  },
  button: {
    padding: '14px',
    backgroundColor: '#f97316',
    color: '#fff',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  success: {
    color: '#28a745',
    textAlign: 'center',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#d4edda',
    borderRadius: '6px',
  },
  error: {
    color: '#dc3545',
    textAlign: 'center',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8d7da',
    borderRadius: '6px',
  },
};

export default styles;