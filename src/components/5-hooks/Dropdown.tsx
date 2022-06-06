import React, {useState, useEffect, useRef, FC} from "react";
import {DropdownOption} from "../../constants/dropdown";

type Props = {
  label?: string;
  options: DropdownOption[];
  selected: DropdownOption;
  onSelectedChange: (option: DropdownOption) => void;
};

const Dropdown: FC<Props> = ({label, options, selected, onSelectedChange}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current?.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", handleClickOutside, {capture: true});

    return () => {
      document.body.removeEventListener("click", handleClickOutside, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option: DropdownOption, index: number) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
        <div
            key={option.value ? option.value : `placeholder-key-${index}`}
            className="item"
            onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
    );
  });

  return (
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="label">{label}</label>
          <div
              onClick={() => setOpen(!open)}
              className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Dropdown;

// import React, {useState, useEffect, useRef, FC} from "react";
// import {DropdownOption} from "../../constants/dropdown";
//
// type Props = {
//   label?: string;
//   placeholder?: string;
//   options?: DropdownOption[];
//   selected?: DropdownOption;
//   onSelectedChange?: (option: DropdownOption) => void;
// };
//
// const Dropdown: FC<Props> = ({label, placeholder = "Select option", options, selected, onSelectedChange}: Props) => {
//   const [open, setOpen] = useState<boolean>(false);
//   const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(selected!);
//   const [selectedOptions, setSelectedOptions] = useState<DropdownOption[] | null>(options!);
//   const ref = useRef<HTMLDivElement | null>(null);
//
//   useEffect(() => {
//     const handleClickOutside = (event: any) => {
//       if (ref.current?.contains(event.target)) {
//         return;
//       }
//       setOpen(false);
//     };
//     document.body.addEventListener("click", handleClickOutside, {capture: true});
//
//     return () => {
//       document.body.removeEventListener("click", handleClickOutside, {
//         capture: true,
//       });
//     };
//   }, []);
//
//   useEffect(() => {
//     if (selected?.label !== selectedOption?.label) {
//       setSelectedOption(selected!);
//     }
//   }, [selected]);
//
//   useEffect(() => {
//     if (options) setSelectedOptions([...options]);
//
//     if (selectedOptions && placeholder) {
//       let option: DropdownOption = {
//         label: placeholder,
//         value: null,
//       };
//       // selectedOptions.unshift(option);
//       setSelectedOptions([option, ...selectedOptions]);
//       setSelectedOption(option);
//       setTimeout(() => {
//         console.log(selectedOptions);
//       }, 5000);
//     }
//   }, [options]);
//
//   const onSelectedOption = (option: DropdownOption) => {
//     option.value ? setSelectedOption(option) : setSelectedOption(null);
//     onSelectedChange && onSelectedChange(option);
//   };
//
//   const renderedOptions = selectedOptions?.map((option: DropdownOption, index: number) => {
//     if (option.value === selected?.value) {
//       return null;
//     }
//
//     return (
//         <div
//             key={option.value ? option.value : `placeholder-key-${index}`}
//             className="item"
//             onClick={() => onSelectedOption(option)}
//         >
//           {option.label}
//         </div>
//     );
//   });
//
//   return (
//       <div ref={ref} className="ui form">
//         <div className="field">
//           <label className="label">{label}</label>
//           <div
//               onClick={() => setOpen(!open)}
//               className={`ui selection dropdown ${open ? "visible active" : ""}`}
//           >
//             <i className="dropdown icon"></i>
//             <div className="text">{selectedOption?.label}</div>
//             <div className={`menu ${open ? "visible transition" : ""}`}>
//               {renderedOptions}
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };
//
// export default Dropdown;
