import { useLoaderData } from "react-router-dom";
import Headers from "./Headers";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, photo, details } = coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      details,
      photo,
    };
    console.log(updatedCoffee);

    fetch(`https://coffee-store-server-seven-lac.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Coffee Updated Successfully");
          form.reset();
        }
      });
  };
  return (
    <div>
      <Headers></Headers>
      <div className="flex justify-center items-center mt-4">
        <form onSubmit={handleUpdateCoffee}>
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
                  defaultValue={name}
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
                  defaultValue={quantity}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={details}
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
                  defaultValue={photo}
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
