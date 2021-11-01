import QueryString from 'qs';
import { useLocation } from 'react-router';

export function useGetQueryParams() {
  return QueryString.parse(useLocation().search, {
    ignoreQueryPrefix: true,
  });
}
