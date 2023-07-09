import { useId } from 'react';

function useRandomId(stuff: string) {
  const id = useId();
  const randomId = stuff + '_' + id;

  return { id: randomId };
}

export default useRandomId;
