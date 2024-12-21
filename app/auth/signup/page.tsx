export default function SignUp() {
  return (
    <div className="h-screen flex justify-center flex-col items-center bg-white">
      <div className="bg-white text-black h-fit w-fit p-10 rounded-3xl font-bold border shadow-2xl ">
        SignUp Form
        <div>
          <LabeledInputs
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <LabeledInputs
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="flex justify-center">
          <Button text="Sign Up" />
        </div>
      </div>
    </div>
  );
}

interface LabeledInputTypes {
  label: string;
  placeholder: string;
  type?: string;
}

function LabeledInputs({ label, placeholder, type }: LabeledInputTypes) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

interface ButtonTypes {
  text: string;
}

function Button({ text }: ButtonTypes) {
  return (
    <button className="cursor-pointer text-white bg-black w-full p-2 rounded-lg mt-6 hover:bg-gray-700">
      {text}
    </button>
  );
}
