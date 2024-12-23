// Если ты это читаешь, то ты молодец! Я тут оставил рабочий код, можешь его взять. Не забудь сказать что додумался посмотреть историю в гите)

import { dateFormatClient } from '@/src/shared/lib/date';
import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import moment from 'moment';
import { FC } from 'react';
import { useBloggerPosts } from '../api/use-table';
import { Link } from '@/src/shared/ui/Link';

export const TableElement: FC = () => {
  const { data, isLoading } = useBloggerPosts();

  return (
    <>
      {isLoading && <LinearProgress />}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Дата публикации</TableCell>
              <TableCell>Блогер</TableCell>
              <TableCell>Сеть</TableCell>
              <TableCell>Ссылка на пост/публ</TableCell>
              <TableCell>Время публикации</TableCell>
              <TableCell>Просмотры</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{moment(row.published_at).format(dateFormatClient)}</TableCell>
                <TableCell>{row.blogger.title}</TableCell>
                <TableCell>{row.platform.title}</TableCell>
                <TableCell>
                  <Link
                    href={row.url}
                    tooltipProps={{ title: 'Перейти по ссылке' }}
                    target="_blank"
                  >
                    {row.url}
                  </Link>
                </TableCell>
                <TableCell>{moment(row.published_at).format(`HH:mm`)}</TableCell>
                <TableCell>{row.metrics?.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
