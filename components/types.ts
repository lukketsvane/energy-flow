// types.ts

import { ChangeEvent, FormEvent } from "react";

export interface InputProps {
  input: {
    from: string;
    to: string;
    weight: string;
  };
  options: any;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleOptionsChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface EditProps {
  index: number;
  handleEdit: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (index: number) => void;
  row: string[];
}

export interface TableProps {
  data: (string | number)[][];
  handleEdit: (index: number, event: ChangeEvent<HTMLInputElement>) => void;
  handleRemove: (index: number) => void;
}
