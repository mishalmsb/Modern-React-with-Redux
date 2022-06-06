import React, {Component, ChangeEvent, FormEvent} from 'react';

type Props = {
  onFormSubmit: (term: string) => void;
};

type State = {
  term: string;
};

class SearchBar extends Component<Props, State> {
  state = {term: ''};

  onFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
        <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Video Search</label>
              <input
                  type="text"
                  value={this.state.term}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({term: event.target.value})}
              />
            </div>
          </form>
        </div>
    );
  }
}

export default SearchBar;
