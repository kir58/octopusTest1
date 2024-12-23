import { Pagination } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { useBloggerPosts } from "../api/use-table";
import { useFilter } from "../modal/store";

export const PaginationElement: FC = () => {
  const { data, isLoading } = useBloggerPosts();

  const limit = useFilter((state) => state.limit);
  const offset = useFilter((state) => state.offset);
  const setOffset = useFilter((state) => state.setOffset);

  const [page, setPage] = useState<number>(1);

  const count = useMemo(() => {
    if (!data) return 0;
    return Math.ceil(data.meta.total / limit);
  }, [data, limit]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setOffset((value - 1) * limit);
  };

  return (
    <>
      <Pagination count={count} page={page} onChange={handleChange} />
    </>
  );
};
