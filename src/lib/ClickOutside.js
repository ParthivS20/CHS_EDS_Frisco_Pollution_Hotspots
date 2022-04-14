import {useEffect} from "react";

export function ClickOutside(ref, callback, exclude) {
    useEffect(() => {
        if(!ref) return;
        function handleClickOutside(event) {
            const checkExclude = () => {
                if(!exclude) return true;
                if(exclude.length <= 0) return true;

                let c = true;
                exclude.every(e => {
                    if(!e || !e.current) return true;
                    c = !e.current.contains(event.target);
                    return c;
                })

                return c;
            }

            if(ref.current && !ref.current.contains(event.target) && checkExclude()) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [ref, callback, exclude])
}
