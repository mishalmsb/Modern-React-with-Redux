import React, {Component, ChangeEvent, CSSProperties, FormEvent} from 'react';

type Props = {
  onSubmit: (term: string) => void;
};

type State = {
  searchTerm: string;
};

const uiSegmentStyles: CSSProperties = {
  backgroundColor: '#cecece',
};

class SearchBar extends Component<Props, State> {
  state = {searchTerm: ''};

  // onInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   this.setState({ searchTerm: event.target.value });
  // };

  onFormSubmit = (event: FormEvent): void => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
        <div className="ui segment" style={uiSegmentStyles}>
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Image Search</label>
              <input type="text" value={this.state.searchTerm} onChange={e => this.setState({searchTerm: e.target.value})}/>
              {/*{this.state.searchTerm.length < 4 ? <p>Search term must be at least 4 characters</p> : null}*/}
              {/*<input type="text" onChange={(event: ChangeEvent<HTMLInputElement>) => console.log(event.target.value)} />*/}
            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;
