import React, { PropsWithChildren } from 'react';
import { Tooltip, Link as MuiLink, TooltipProps } from '@mui/material';
import { LinkProps } from '@mui/material/Link/Link';

type EllipsisLinkProps = PropsWithChildren<
  LinkProps & {
    tooltipProps?: Omit<TooltipProps, 'children'>;
  }
>;

export const Link: React.FC<EllipsisLinkProps> = ({ children, tooltipProps, ...restProps }) => {
  const LinkJsx = (
    <MuiLink
      {...restProps}
      sx={{
        display: 'inline-block',
        maxWidth: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textDecoration: 'none',
        color: 'primary.main',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
    >
      {children}
    </MuiLink>
  );

  if (!tooltipProps) {
    return LinkJsx;
  }

  return <Tooltip {...tooltipProps}>{LinkJsx}</Tooltip>;
};
