import Headers from "./Headers";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("https://coffee-store-server-seven-lac.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Coffee Added Successfully");
          form.reset();
        }
      });
  };
  return (
    <div>
      <Headers></Headers>
      <div className="flex justify-center items-center mt-4">
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Coffee Name"
                  className="input input-bordered w-full"
                  name="name"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="number"
                  placeholder="Total Quantity"
                  className="input input-bordered w-full"
                  name="quantity"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Supplier Name"
                  className="input input-bordered w-full"
                  name="supplier"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                  name="taste"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Category"
                  className="input input-bordered w-full"
                  name="category"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Details"
                  className="input input-bordered w-full"
                  name="details"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  name="photo"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
