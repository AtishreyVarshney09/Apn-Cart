import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productPrice: 0,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const { productName, productPrice } = this.state;

    // Basic validation
    if (productName.trim() === '' || productPrice <= 0) {
      alert('Please enter valid product name and price');
      return;
    }

    // Pass new item to parent
    this.props.addItem({
      name: productName,
      price: parseFloat(productPrice),
    });

    // Reset form
    this.setState({
      productName: '',
      productPrice: 0,
    });
  };

  render() {
    return (
      <form className='row mb-5' onSubmit={this.handleSubmit}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>

        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>

        <div className="col-4 d-flex align-items-end">
          <button type="submit" className="btn btn-primary w-100">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
