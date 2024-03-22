import { useToast as useChakraToast } from '@chakra-ui/react';

export const useToast = () => {
  const toast = useChakraToast({
    position: 'bottom',
    duration: 4000
  });

  return {
    toastError: (message: string) => toast({ status: 'error', description: message }),
    toastSuccess: (message: string) => toast({ status: 'success', description: message })
  };
};
