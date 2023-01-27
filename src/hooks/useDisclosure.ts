import { useCallback, useState } from "react";

export default function useDisclosure() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return { isOpen, onToggle, onClose, onOpen };
}
