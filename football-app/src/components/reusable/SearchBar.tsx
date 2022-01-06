import { FC } from "react";

export type Props = {
  search: (name: any) => void;
  placeholder: string;
};

const SearchBar: FC<Props> = ({ search, placeholder }) => {
  return (
    <input
      style={{ width: 300, marginTop: 20, borderRadius: 15, paddingLeft: 15 }}
      className="mx-auto"
      onChange={search}
      type="text"
      placeholder={`Search for ${placeholder}`}
    />
  );
};

export default SearchBar;
