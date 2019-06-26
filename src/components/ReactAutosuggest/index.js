import Autosuggest from "react-autosuggest";
import React from "react";

export default class ReactAutosuggest extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(
      this
    );
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(
      this
    );
    this.getSuggestions = this.getSuggestions.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.state = {
      value: this.props.initialValue || "",
      suggestions: [],
      data: this.props.data || []
    };
  }

  getSuggestionValue = suggestion => suggestion.propertyNumber;

  renderSuggestion = suggestion => <div>{suggestion.propertyNumber}</div>;

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.state.data.filter(
          lang =>
            lang.propertyNumber.toLowerCase().slice(0, inputLength) ===
            inputValue
        );
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.onChange && this.props.onChange(newValue);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: this.props.placeholder || "",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        disable={this.props.disabledStatus}
        suggestions={suggestions.slice(0, 10)}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        theme={{
          container: "autosuggest",
          input: "form-control",
          inputOpen: "react-autosuggest__input--open",
          suggestionsContainer: "react-autosuggest__suggestions-container",
          suggestionsContainerOpen:
            "react-autosuggest__suggestions-container--open",
          suggestionsList: `react-autosuggest__suggestions-list ${
            this.state.suggestions.length ? "show" : ""
          }`,
          suggestionFocused: "active",
          suggestion: "react-autosuggest__suggestion"
        }}
      />
    );
  }
}
