import { useRef, useState, useCallback } from "react";

export const useNavbar = ()=> {
    
    const [view, setView] = useState<boolean>(false);
    const profileRef = useRef<HTMLImageElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    
    const handleClickOutside = useCallback((event: MouseEvent) => {
        
        if (profileRef.current &&
            !profileRef.current.contains(event.target as Node) && menuRef.current && 
            !menuRef.current.contains(event.target as Node)
            ) {
                setView(false);
            }
  }, []);
    return{
        handleClickOutside,
        menuRef,
        view,
        setView,
        profileRef
    }
}