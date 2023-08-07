import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  //const nameRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  // console.log(errors);

  const submitHandler = (formdata: FieldValues) => {
    console.log(formdata);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          {...register("uname", { required: true, minLength: 3 })}
          id="username"
          type="text"
          className="form-control"
        />
      </div>
      {errors.uname?.type == "required" && (
        <p className="text-danger">Please enter your name</p>
      )}
      {errors.uname?.type == "minLength" && (
        <p className="text-danger">Please enter atleast 4 characters</p>
      )}

      <div className="form-group">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("uage", { required: true })}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mt-3">
        <button disabled={!isValid} className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
