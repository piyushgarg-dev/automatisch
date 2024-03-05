import { useQuery } from '@tanstack/react-query';

import api from 'helpers/api';

export default function useActions(appKey) {
  const query = useQuery({
    queryKey: ['actions', appKey],
    queryFn: async ({ payload, signal }) => {
      const { data } = await api.get(`/v1/apps/${appKey}/actions`, {
        signal,
      });

      return data;
    },
  });

  return query;
}
