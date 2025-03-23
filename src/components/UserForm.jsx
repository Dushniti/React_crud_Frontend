import { useForm } from "react-hook-form";
import "./UserForm.css"

export default function UserForm({ onSubmit, defaultValues }) {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="container text-center mb-3">
        <label for="Enter Your Name">Name</label>
        <input {...register("name")} placeholder="Name" required />
      </div>
      <div class="container text-center mb-3">
        <label for="Enter Email">Email</label>
        <input
          {...register("email")}
          placeholder="Email"
          type="email"
          required
        />
      </div>

      <div class="container text-center mb-3">
        <label for="Enter Your PhoneNumber">Phone</label>
        <input {...register("phone")} placeholder="Phone" required />
      </div>
      <div class="container text-center mb-3">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
