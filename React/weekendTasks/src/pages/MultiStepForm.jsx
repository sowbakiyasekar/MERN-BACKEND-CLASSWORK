import { useReducer } from "react";

const initialState = {
  step: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };

    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) =>
    dispatch({
      type: "UPDATE_FIELD",
      payload: { name: e.target.name, value: e.target.value },
    });

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 space-y-5">
      <h1 className="text-2xl font-bold text-center">Multi Step Form</h1>

      {state.step === 1 && (
        <div className="space-y-3">
          <input className="w-full border rounded p-2" type="text" name="firstName" placeholder="First Name" value={state.formData.firstName} onChange={handleChange} />
          <input className="w-full border rounded p-2" type="text" name="lastName" placeholder="Last Name" value={state.formData.lastName} onChange={handleChange} />

          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: "NEXT_STEP" })}>
            Next
          </button>
        </div>
      )}

      {state.step === 2 && (
        <div className="space-y-3">
          <input className="w-full border rounded p-2" type="email" name="email" placeholder="Email" value={state.formData.email} onChange={handleChange} />
          <input className="w-full border rounded p-2" type="text" name="city" placeholder="City" value={state.formData.city} onChange={handleChange} />
          <input className="w-full border rounded p-2" type="text" name="state" placeholder="State" value={state.formData.state} onChange={handleChange} />

          <div className="flex justify-between">
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: "NEXT_STEP" })}>
              Next
            </button>
          </div>
        </div>
      )}

      {state.step === 3 && (
        <div className="space-y-2">
          <p><strong>First Name:</strong> {state.formData.firstName}</p>
          <p><strong>Last Name:</strong> {state.formData.lastName}</p>
          <p><strong>Email:</strong> {state.formData.email}</p>
          <p><strong>City:</strong> {state.formData.city}</p>
          <p><strong>State:</strong> {state.formData.state}</p>

          <div className="flex justify-between pt-4">
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>

            <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={() => alert("Form Submitted")}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;