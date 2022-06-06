import {useEffect} from "react";

useEffect(() => {
  const onBodyClick = (event) => {
    if (ref.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  document.body.addEventListener("click", onBodyClick, {capture: true});

  return () => {
    document.body.removeEventListener("click", onBodyClick, {
      capture: true,
    });
  };
}, []);
