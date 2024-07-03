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
      <div className="flex w-full items-center gap-4 rounded-full px-5 text-gray-500 ring-1 ring-gray-400">
        {icon}
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="h-11 w-full outline-none"
        />
      </div>
      {errors?.map((error, index) => (
        <span key={index} className="px-5 text-sm text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
