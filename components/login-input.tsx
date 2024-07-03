interface LoginInputProps {
  name: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  errors?: string[];
}

export default function LoginInput({
  name,
  type,
  placeholder,
  icon,
  errors,
}: LoginInputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div
        className={`rounded-full ring-offset-4 transition-all has-[:focus]:ring-1 ${errors ? "ring-red-500" : "ring-gray-400"}`}
      >
        <div
          className={`flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ${errors ? "ring-red-500" : "ring-gray-300"}`}
        >
          {icon}
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            className="h-11 w-full outline-none"
          />
        </div>
      </div>
      {errors?.map((error, index) => (
        <span key={index} className="px-5 text-sm text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
