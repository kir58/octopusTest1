'use client';

import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

export const HeaderButtons: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    localStorage.removeItem(`token`);
    sessionStorage.removeItem(`token`);

    router.replace(`/login`);
  };
  return (
    <>
      <Button
        variant="contained"
        startIcon={<LogoutIcon />}
        onClick={onClick}
        sx={{ position: `absolute`, right: 4, top: 4 }}
        size="small"
      >
        Выход
      </Button>
    </>
  );
};
