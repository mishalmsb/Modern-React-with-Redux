import React, {ChangeEvent, useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import {translateLanguages, TranslateLanguage} from "../../constants/translate";
import {DropdownOption} from "../../constants/dropdown";

const Translate = () => {
  const [language, setLanguage] = useState<TranslateLanguage | DropdownOption>(translateLanguages[0]);
  const [text, setText] = useState<string>('');

  return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Text</label>
            <input value={text} onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
          </div>
        </div>
        <Dropdown
            label="Select a Language"
            selected={language}
            onSelectedChange={setLanguage}
            options={translateLanguages}
        />
        <hr/>
        <h3 className="ui header">Output</h3>
        <Convert text={text} language={language}/>
      </div>
  );
};

export default Translate;
