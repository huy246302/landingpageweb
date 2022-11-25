import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { productsData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
    const [products, setProductsData] = useState(productsData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
  
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem('employees_data'));
      if (data !== null && Object.keys(data).length !== 0) setProductsData(data);
    }, []);
  
    const handleEdit = id => {
      const [product] = products.filter(product => product.id === id);
  
      setSelectedProduct(product);
      setIsEditing(true);
    };
  
    const handleDelete = id => {
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
      }).then(result => {
        if (result.value) {
          const [product] = products.filter(product => product.id === id);
  
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: `${product.prodName} ${product.origin}'s data has been deleted.`,
            showConfirmButton: false,
            timer: 1500,
          });
  
          const employeesCopy = products.filter(product => product.id !== id);
          localStorage.setItem('employees_data', JSON.stringify(employeesCopy));
          setProductsData(employeesCopy);
        }
      });
    };

    const Header = ({ setIsAdding, setIsAuthenticated }) => {
        return (
          <header>
            <h1>Product List Dashboard</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
              <button onClick={() => setIsAdding(true)} class="button-7" role="button">Add Product</button>
            </div>
          </header>
        );
    };

    const Table = ({ products, handleEdit, handleDelete }) => {
      console.log('products',products);
      products.forEach((product, i) => {
          product.id = i + 1;
      });
      
      const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: null,
      });
      
      return (
          <div className="contain-table">
          <table className="striped-table">
              <thead>
              <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Origin</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th colSpan={2} className="text-center">
                  Actions
                  </th>
              </tr>
              </thead>
              <tbody>
              {products.length > 0 ? (
                  products.map((product, i) => (
                  <tr key={product.id}>
                      <td>{i + 1}</td>
                      <td><img src={product.image} alt="Khong co hinh" style={{
                        border:3,
                        height:100,
                        width:100,
                      }}></img></td>
                      <td>{product.firstName}</td>
                      <td>{product.origin}</td>
                      <td>{product.email}</td>
                      <td>{formatter.format(product.salary)}</td>
                      <td>{product.date} </td>
                      <td className="text-right">
                      <button
                          onClick={() => handleEdit(product.id)}
                          class="button-8" role="button"
                      >
                          Edit
                      </button>
                      </td>
                      <td className="text-left">
                      <button
                          onClick={() => handleDelete(product.id)}
                          class="button-44" role="button"
                      >
                          Delete
                      </button>
                      </td>
                  </tr>
                  ))
              ) : (
                  <tr>
                  <td colSpan={7}>No Employees</td>
                  </tr>
              )}
              </tbody>
          </table>
          </div>
      );
    };

    const Add = ({ products, setProductsData, setIsAdding }) => {
        const [prodName, setProdName] = useState('');
        const [origin, setLastName] = useState('');
        const [description, setEmail] = useState('');
        const [salary, setSalary] = useState('');
        const [date, setDate] = useState('');
        const [image, setImage] = useState(null);
      
        const handleAdd = e => {
          e.preventDefault();
      
          if (!prodName || !origin || !description || !salary || !date) {
            return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true,
            });
          }
      
          const id = products.length + 1;
          const newEmployee = {
            id,
            image,
            prodName,
            origin,
            description,
            salary,
            date,
          };
      
          products.push(newEmployee);
          localStorage.setItem('employees_data', JSON.stringify(products));
          setProductsData(products);
          setIsAdding(false);
      
          Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${prodName} ${origin}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
          });
        };
      
        return (
          <div className="small-container">
            <form onSubmit={handleAdd}>
              <h1>Add Product</h1>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="file"
                name="image"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
              < br/>
              <label htmlFor="prodName">Product</label>
              <input
                id="prodName"
                type="text"
                name="prodName"
                value={prodName}
                onChange={e => setProdName(e.target.value)}
              />
              <br />
              <label htmlFor="origin">Origin</label>
              <input
                id="origin"
                type="text"
                name="origin"
                value={origin}
                onChange={e => setLastName(e.target.value)}
              />
              <br/>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="description"
                name="description"
                value={description}
                onChange={e => setEmail(e.target.value)}
              />
              <br/>
              <label htmlFor="salary">Price ($)</label>
              <input
                id="salary"
                type="number"
                name="salary"
                value={salary}
                onChange={e => setSalary(e.target.value)}
              />
              <br/>
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <br/>
              <div style={{ marginTop: '30px' }}>
                <input type="submit" value="Add" />
                <input
                  style={{ marginLeft: '12px' }}
                  className="muted-button"
                  type="button"
                  value="Cancel"
                  onClick={() => setIsAdding(false)}
                />
              </div>
            </form>
          </div>
        );
    };

    const Edit = ({ products, selectedProduct, setProductsData, setIsEditing }) => {
        const id = selectedProduct.id;
        const [image, setImage] = useState(null);
        const [prodName, setProdName] = useState(selectedProduct.prodName);
        const [origin, setLastName] = useState(selectedProduct.origin);
        const [description, setEmail] = useState(selectedProduct.description);
        const [salary, setSalary] = useState(selectedProduct.salary);
        const [date, setDate] = useState(selectedProduct.date);
      
        const handleUpdate = e => {
          e.preventDefault();
      
          if (!prodName || !origin || !description || !salary || !date) {
            return Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'All fields are required.',
              showConfirmButton: true,
            });
          }
      
          const product = {
            id,
            prodName,
            origin,
            description,
            salary,
            date,
          };
      
          for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
              products.splice(i, 1, product);
              break;
            }
          }
      
          localStorage.setItem('employees_data', JSON.stringify(products));
          setProductsData(products);
          setIsEditing(false);
      
          Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${product.prodName} ${product.origin}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500,
          });
        };
      
        return (
          <div className="small-container">
            <form onSubmit={handleUpdate}>
              <h1>Edit Product</h1>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="file"
                name="image"
                value={image}
                onChange={e => setImage(e.target.value)}
              />
              <br/>
              <label htmlFor="prodName">Product</label>
              <input
                id="prodName"
                type="text"
                name="prodName"
                value={prodName}
                onChange={e => setProdName(e.target.value)}
              />
              <br/>
              <label htmlFor="origin">Origin</label>
              <input
                id="origin"
                type="text"
                name="origin"
                value={origin}
                onChange={e => setLastName(e.target.value)}
              />
              <br/>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="description"
                name="description"
                value={description}
                onChange={e => setEmail(e.target.value)}
              />
              <br/>
              <label htmlFor="price">Price ($)</label>
              <input
                id="price"
                type="number"
                name="price"
                value={salary}
                onChange={e => setSalary(e.target.value)}
              />
              <br/>
              <label htmlFor="date">Date</label>
              <input
                id="date"
                type="date"
                name="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
              <br/>
              <div style={{ marginTop: '30px' }}>
                <input type="submit" value="Update" />
                <input
                  style={{ marginLeft: '12px' }}
                  className="muted-button"
                  type="button"
                  value="Cancel"
                  onClick={() => setIsEditing(false)}
                />
              </div>
            </form>
          </div>
        );
    };

    return (
        <div className="container">
        {!isAdding && !isEditing && (
          <>
            <Header
              setIsAdding={setIsAdding}
              setIsAuthenticated={setIsAuthenticated}
            />
            <Table
              products={products}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
        {isAdding && (
          <Add
            products={products}
            setProductsData={setProductsData}
            setIsAdding={setIsAdding}
          />
        )}
        {isEditing && (
          <Edit
            products={products}
            selectedProduct={selectedProduct}
            setProductsData={setProductsData}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    )
}

export default Dashboard;