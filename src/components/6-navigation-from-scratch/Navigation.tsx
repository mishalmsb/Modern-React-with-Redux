import React, {useState} from "react";
import Header from "./Header";
import Route from "./Route";
import Search from "../5-hooks/Search";
import {dropdownColors, DropdownOption} from "../../constants/dropdown";
import {accordionOptions} from "../../constants/accordion";
import Accordion from "../5-hooks/Accordion";
import Dropdown from "../5-hooks/Dropdown";
import Translate from "../5-hooks/Translate";

const Navigation = () => {
  const [selectedColor, setSelectedColor] = useState<DropdownOption>(dropdownColors[0]);

  return (
      <div>
        <Header/>
        <Route path="/">
          <Accordion items={accordionOptions}/>
        </Route>
        <Route path="/list">
          <Search/>
        </Route>
        <Route path="/dropdown">
          <Dropdown
              label="Select a color"
              options={dropdownColors}
              selected={selectedColor}
              onSelectedChange={setSelectedColor}
          />
        </Route>
        <Route path="/translate">
          <Translate/>
        </Route>
      </div>

  );
};

export default Navigation;
