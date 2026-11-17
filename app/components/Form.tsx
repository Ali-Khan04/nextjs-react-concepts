'use client';
import { FormConfig } from './types/FormType';
import Button from './Button';
type FormProps = {
  value: Record<string, string>;
  onChange: (key: string, text: string) => void;
  name: string;
  fields: FormConfig[];
  onSubmit: (values: Record<string, string>) => void;
  buttonText: string;
};
export default function Form({
  value,
  onChange,
  name,
  fields,
  onSubmit,
  buttonText,
}: FormProps) {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {fields.map((field) => (
          <div key={field.key}>
            <input
              name={name}
              value={value[field.key] || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(field.key, e.target.value)
              }
              placeholder={field.placeholder}
            />
          </div>
        ))}
        <Button type="submit">{buttonText}</Button>
      </form>
    </div>
  );
}
